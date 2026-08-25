const fs = require("fs");
const path = require("path");

// ============================================================
// EINSTELLUNGEN
// ============================================================

const RECIPES_JS = "recipes.js";
const TEMPLATE_PATH = path.join("templates", "recipe-template.html");
const OUTPUT_DIR = "recipes";
const SITEMAP_PATH = "sitemap.xml";

const BASE_URL = "https://kitchenbreeze.github.io/foodblog";

// ============================================================
// START
// ============================================================

console.log();
console.log("========================================");
console.log("       KITCHENBREEZE GENERATOR");
console.log("========================================");
console.log();

// ============================================================
// DATEIEN PRÜFEN
// ============================================================

if (!fs.existsSync(RECIPES_JS)) {
    console.error("FEHLER:");
    console.error(`${RECIPES_JS} wurde nicht gefunden.`);
    process.exit(1);
}

if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error("FEHLER:");
    console.error("Template nicht gefunden:");
    console.error(TEMPLATE_PATH);
    process.exit(1);
}

// ============================================================
// RECIPES.JS LADEN
// ============================================================

let recipesContent = fs.readFileSync(
    RECIPES_JS,
    "utf8"
);

// ============================================================
// RECIPES.JS AUSLESEN
// ============================================================

const nodeScript = `
const fs = require("fs");

let content = fs.readFileSync(${JSON.stringify(RECIPES_JS)}, "utf8");

content = content.replace(
    /const\\\\s+RECIPES\\\\s*=/,
    "global.RECIPES ="
);

eval(content);

console.log(JSON.stringify(global.RECIPES));
`;

console.log("Lese recipes.js ...");
console.log();

const result = require("child_process").spawnSync(
    process.execPath,
    ["-e", nodeScript],
    {
        encoding: "utf8"
    }
);

if (result.error) {
    console.error("FEHLER beim Starten von Node.js:");
    console.error(result.error.message);
    process.exit(1);
}

if (result.status !== 0) {
    console.error("FEHLER beim Auslesen von recipes.js:");
    console.error();
    console.error(result.stderr);
    process.exit(1);
}

let recipes;

try {
    recipes = JSON.parse(result.stdout);
} catch (error) {
    console.error("FEHLER:");
    console.error("recipes.js konnte nicht gelesen werden.");
    console.error();
    console.error(result.stdout);
    process.exit(1);
}

if (!Array.isArray(recipes)) {
    console.error("FEHLER:");
    console.error("RECIPES ist kein Array.");
    process.exit(1);
}

console.log("RECIPES.JS ERFOLGREICH GELADEN");
console.log(`${recipes.length} Rezepte gefunden.`);
console.log();

// ============================================================
// OUTPUT-ORDNER ERSTELLEN
// ============================================================

fs.mkdirSync(
    OUTPUT_DIR,
    {
        recursive: true
    }
);

// ============================================================
// SLUG ERSTELLEN
// ============================================================

function createSlug(title) {

    let slug = String(title)
        .toLowerCase()
        .trim();

    slug = slug
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss");

    slug = slug.replace(
        /[^a-z0-9\s-]/g,
        ""
    );

    slug = slug.replace(
        /\s+/g,
        "-"
    );

    slug = slug.replace(
        /-+/g,
        "-"
    );

    return slug.replace(
        /^-+|-+$/g,
        ""
    );
}

// ============================================================
// BILDPFAD FÜR REZEPTSEITEN
//
// Rezeptseite:
//
// recipes/pasta.html
//
// Bild:
//
// images/pasta.jpg
//
// Ergebnis:
//
// ../images/pasta.jpg
// ============================================================

function recipePageImagePath(imagePath) {

    if (typeof imagePath !== "string") {
        return imagePath;
    }

    let value = imagePath.trim();

    if (!value) {
        return value;
    }

    // Externe Bilder nicht verändern
    if (
        value.startsWith("http://") ||
        value.startsWith("https://")
    ) {
        return value;
    }

    // Data-URLs nicht verändern
    if (value.startsWith("data:")) {
        return value;
    }

    // Absolute Pfade nicht verändern
    if (value.startsWith("/")) {
        return value;
    }

    // Bereits korrekter Pfad
    if (value.startsWith("../")) {
        return value;
    }

    // ./ entfernen
    if (value.startsWith("./")) {
        value = value.substring(2);
    }

    // Führenden Slash entfernen
    value = value.replace(/^\/+/, "");

    return "../" + value;
}

// ============================================================
// [[slug|Text]] IN HTML-LINK UMWANDELN
// ============================================================

function replaceRecipeLinks(text) {

    if (typeof text !== "string") {
        return text;
    }

    const pattern =
        /\[\[([^|\]]+)\|([^\]]+)\]\]/g;

    return text.replace(
        pattern,
        function (
            match,
            slug,
            title
        ) {

            slug = slug.trim();
            title = title.trim();

            return (
                `<a href="../recipes/${slug}.html">` +
                `${title}` +
                `</a>`
            );
        }
    );
}

// ============================================================
// REZEPT FÜR REZEPTSEITE VORBEREITEN
// ============================================================

function prepareRecipeForPage(recipe) {

    // Tiefe Kopie
    const recipeCopy = JSON.parse(
        JSON.stringify(recipe)
    );

    // ========================================================
    // HAUPTBILD
    // ========================================================

    if (
        Object.prototype.hasOwnProperty.call(
            recipeCopy,
            "image"
        )
    ) {

        recipeCopy.image =
            recipePageImagePath(
                recipeCopy.image
            );
    }

    // ========================================================
    // SCHRITTBILDER
    // ========================================================

    if (Array.isArray(recipeCopy.steps)) {

        recipeCopy.steps.forEach(
            function (step) {

                if (
                    !step ||
                    typeof step !== "object"
                ) {
                    return;
                }

                if (
                    !Array.isArray(step.images)
                ) {
                    return;
                }

                step.images =
                    step.images.map(
                        function (image) {

                            return recipePageImagePath(
                                image
                            );
                        }
                    );
            }
        );
    }

    // ========================================================
    // ZUTATEN
    // ========================================================

    const ingredients =
        recipeCopy.ingredients;

    if (
        ingredients &&
        typeof ingredients === "object" &&
        !Array.isArray(ingredients)
    ) {

        Object.keys(ingredients).forEach(
            function (section) {

                if (
                    !Array.isArray(
                        ingredients[section]
                    )
                ) {
                    return;
                }

                ingredients[section] =
                    ingredients[section].map(
                        replaceRecipeLinks
                    );
            }
        );

    } else if (
        Array.isArray(ingredients)
    ) {

        recipeCopy.ingredients =
            ingredients.map(
                replaceRecipeLinks
            );
    }

    // ========================================================
    // TIPPS
    // ========================================================

    if (
        Array.isArray(recipeCopy.tips)
    ) {

        recipeCopy.tips =
            recipeCopy.tips.map(
                replaceRecipeLinks
            );
    }

    return recipeCopy;
}

// ============================================================
// ALLE REZEPTE FÜR RELATED RECIPES VORBEREITEN
// ============================================================

const recipesForRecipePages =
    recipes.map(
        prepareRecipeForPage
    );

const allRecipesData =
    JSON.stringify(
        recipesForRecipePages,
        null,
        4
    );

// ============================================================
// TEMPLATE LADEN
// ============================================================

const templateOriginal =
    fs.readFileSync(
        TEMPLATE_PATH,
        "utf8"
    );

// ============================================================
// PLACEHOLDER
// ============================================================

const placeholder =
    "<!-- RECIPE_DATA -->";

if (
    !templateOriginal.includes(
        placeholder
    )
) {

    console.error("FEHLER:");
    console.error(
        "<!-- RECIPE_DATA --> wurde nicht gefunden."
    );

    process.exit(1);
}

// ============================================================
// REZEPTSEITEN ERSTELLEN
// ============================================================

let createdCount = 0;

for (const recipe of recipes) {

    // ========================================================
    // TITEL PRÜFEN
    // ========================================================

    if (
        !recipe ||
        typeof recipe !== "object"
    ) {

        console.error(
            "FEHLER: Ungültiges Rezept gefunden."
        );

        process.exit(1);
    }

    if (
        typeof recipe.title !== "string" ||
        !recipe.title.trim()
    ) {

        console.error(
            "FEHLER: Ein Rezept besitzt keinen Titel."
        );

        console.error(recipe);

        process.exit(1);
    }

    const title =
        recipe.title.trim();

    // ========================================================
    // SLUG
    // ========================================================

    const slug =
        createSlug(title);

    if (!slug) {

        console.error("FEHLER:");
        console.error(
            `Kein gültiger Dateiname für: ${title}`
        );

        process.exit(1);
    }

    // ========================================================
    // REZEPTDATEN VORBEREITEN
    // ========================================================

    const recipeCopy =
        prepareRecipeForPage(
            recipe
        );

    // ========================================================
    // DATEINAME
    // ========================================================

    const filename =
        path.join(
            OUTPUT_DIR,
            `${slug}.html`
        );

    console.log("----------------------------------------");
    console.log("Rezept:");
    console.log(title);
    console.log();
    console.log("Datei:");
    console.log(filename);

    // ========================================================
    // TEMPLATE ZURÜCKSETZEN
    // ========================================================

    let template =
        templateOriginal;

    // ========================================================
    // RECIPE_DATA
    // ========================================================

    const recipeData =
        JSON.stringify(
            recipeCopy,
            null,
            4
        );

    // ========================================================
    // JAVASCRIPT DATEN EINSETZEN
    // ========================================================

    const replacement = `
<script>
const RECIPE_DATA = ${recipeData};
const RECIPES = ${allRecipesData};
</script>
`;

    template =
        template.replace(
            placeholder,
            replacement
        );

    // ========================================================
    // HTML SCHREIBEN
    // ========================================================

    fs.writeFileSync(
        filename,
        template,
        "utf8"
    );

    // ========================================================
    // PRÜFEN
    // ========================================================

    if (
        !fs.existsSync(filename)
    ) {

        console.error();
        console.error("FEHLER:");
        console.error(
            "Datei wurde nicht erstellt:"
        );
        console.error(
            path.resolve(filename)
        );

        process.exit(1);
    }

    createdCount++;

    console.log("OK - ERSTELLT:");
    console.log(
        path.resolve(filename)
    );
    console.log();
}

// ============================================================
// SITEMAP ERSTELLEN
// ============================================================

const sitemapLines = [];

sitemapLines.push(
    '<?xml version="1.0" encoding="UTF-8"?>'
);

sitemapLines.push(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
);

sitemapLines.push("");

sitemapLines.push("    <url>");

sitemapLines.push(
    `        <loc>${BASE_URL}/</loc>`
);

sitemapLines.push("    </url>");

sitemapLines.push("");

// ============================================================
// REZEPTSEITEN IN SITEMAP
// ============================================================

for (const recipe of recipes) {

    const slug =
        createSlug(
            recipe.title
        );

    sitemapLines.push(
        "    <url>"
    );

    sitemapLines.push(
        `        <loc>${BASE_URL}/recipes/${slug}.html</loc>`
    );

    sitemapLines.push(
        "    </url>"
    );

    sitemapLines.push("");
}

// ============================================================
// SITEMAP SCHLIESSEN
// ============================================================

sitemapLines.push(
    "</urlset>"
);

// ============================================================
// SITEMAP SPEICHERN
// ============================================================

fs.writeFileSync(
    SITEMAP_PATH,
    sitemapLines.join("\n"),
    "utf8"
);

// ============================================================
// FERTIG
// ============================================================

console.log();
console.log("========================================");
console.log("   GENERATOR ERFOLGREICH ABGESCHLOSSEN");
console.log("========================================");
console.log();

console.log(
    `${createdCount} Rezeptseiten erstellt.`
);

console.log();

console.log(
    `Sitemap erstellt: ${SITEMAP_PATH}`
);

console.log();

console.log(
    "Bildpfade wurden für recipes/ angepasst."
);

console.log(
    "Hauptbilder und Schrittbilder berücksichtigt."
);

console.log();

console.log("========================================");


