import os
import re
import json
import subprocess


# ============================================================
# recipes.js mit Node auslesen
# ============================================================

node_script = r"""
const fs = require("fs");

let content = fs.readFileSync("recipes.js", "utf8");

content = content.replace(
    "const RECIPES =",
    "global.RECIPES ="
);

eval(content);

console.log(JSON.stringify(RECIPES));
"""


result = subprocess.run(
    ["node", "-e", node_script],
    capture_output=True,
    text=True
)


if result.returncode != 0:
    print("❌ Fehler beim Auslesen von recipes.js:")
    print(result.stderr)
    exit(1)


try:
    recipes = json.loads(result.stdout)
except json.JSONDecodeError:
    print("❌ recipes.js konnte nicht als JSON gelesen werden.")
    print(result.stdout)
    exit(1)


# ============================================================
# recipes-Ordner erstellen
# ============================================================

os.makedirs("recipes", exist_ok=True)


# ============================================================
# Slug erstellen
# ============================================================

def create_slug(title):

    slug = title.lower()

    slug = (
        slug
        .replace("ä", "ae")
        .replace("ö", "oe")
        .replace("ü", "ue")
        .replace("ß", "ss")
    )

    slug = re.sub(
        r"[^a-z0-9\s-]",
        "",
        slug
    )

    slug = re.sub(
        r"\s+",
        "-",
        slug
    )

    return slug


# ============================================================
# [[slug|Text]] in HTML-Link umwandeln
# ============================================================

def replace_recipe_links(text):

    if not isinstance(text, str):
        return text

    pattern = r"\[\[(.*?)\|(.*?)\]\]"

    def replace(match):

        slug = match.group(1)
        title = match.group(2)

        return f'<a href="{slug}.html">{title}</a>'

    return re.sub(
        pattern,
        replace,
        text
    )


# ============================================================
# Alle Rezepte als JSON vorbereiten
# Für "Das könnte dich auch interessieren"
# ============================================================

all_recipes_data = json.dumps(
    recipes,
    ensure_ascii=False,
    indent=4
)


# ============================================================
# Template einmal laden
# ============================================================

template_path = "templates/recipe-template.html"


if not os.path.exists(template_path):

    print("❌ Template nicht gefunden:")
    print(template_path)

    exit(1)


with open(
    template_path,
    "r",
    encoding="utf-8"
) as file:

    template_original = file.read()


# ============================================================
# Jedes Rezept erzeugen
# ============================================================

for recipe in recipes:

    # --------------------------------------------------------
    # Slug
    # --------------------------------------------------------

    slug = create_slug(
        recipe["title"]
    )


    # --------------------------------------------------------
    # Kopie erstellen
    # --------------------------------------------------------

    recipe_copy = json.loads(
        json.dumps(recipe)
    )


    # --------------------------------------------------------
    # Hauptbild für recipes-Unterordner
    # --------------------------------------------------------

    if "image" in recipe_copy:

        image = recipe_copy["image"]

        if image and not image.startswith("../"):

            recipe_copy["image"] = (
                "../" + image
            )


    # --------------------------------------------------------
    # Schrittbilder für recipes-Unterordner
    # --------------------------------------------------------

    for step in recipe_copy.get(
        "steps",
        []
    ):

        if (
            isinstance(step, dict)
            and "images" in step
        ):

            new_images = []

            for img in step["images"]:

                if (
                    img
                    and not img.startswith("../")
                ):

                    new_images.append(
                        "../" + img
                    )

                else:

                    new_images.append(img)

            step["images"] = new_images


    # --------------------------------------------------------
    # Zutatenlinks
    # --------------------------------------------------------

    ingredients = recipe_copy.get(
        "ingredients"
    )


    if isinstance(
        ingredients,
        dict
    ):

        for section, items in ingredients.items():

            recipe_copy["ingredients"][section] = [

                replace_recipe_links(item)

                for item in items

            ]


    elif isinstance(
        ingredients,
        list
    ):

        recipe_copy["ingredients"] = [

            replace_recipe_links(item)

            for item in ingredients

        ]


    # --------------------------------------------------------
    # Tipps verlinken
    # --------------------------------------------------------

    if "tips" in recipe_copy:

        recipe_copy["tips"] = [

            replace_recipe_links(tip)

            for tip in recipe_copy["tips"]

        ]


    # --------------------------------------------------------
    # Dateiname
    # --------------------------------------------------------

    filename = (
        f"recipes/{slug}.html"
    )


    print("")
    print("========================================")
    print("Verarbeite Rezept:")
    print(recipe["title"])
    print("Datei:")
    print(filename)
    print("========================================")


    # --------------------------------------------------------
    # Template zurücksetzen
    # --------------------------------------------------------

    template = template_original


    # --------------------------------------------------------
    # Aktuelles Rezept als JSON
    # --------------------------------------------------------

    recipe_data = json.dumps(
        recipe_copy,
        ensure_ascii=False,
        indent=4
    )


    # --------------------------------------------------------
    # RECIPE_DATA + RECIPES ins Template einsetzen
    # --------------------------------------------------------

    replacement = f"""
<script>
const RECIPE_DATA = {recipe_data};
const RECIPES = {all_recipes_data};
</script>
"""


    if "<!-- RECIPE_DATA -->" not in template:

        print(
            "❌ FEHLER: <!-- RECIPE_DATA --> "
            "wurde im Template nicht gefunden!"
        )

        exit(1)


    template = template.replace(
        "<!-- RECIPE_DATA -->",
        replacement
    )


    # --------------------------------------------------------
    # HTML speichern
    # --------------------------------------------------------

    with open(
        filename,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(template)


    # --------------------------------------------------------
    # Prüfen, ob Datei wirklich existiert
    # --------------------------------------------------------

    if os.path.exists(filename):

        print("✅ ERSTELLT:")
        print(
            os.path.abspath(filename)
        )

    else:

        print(
            "❌ FEHLER – Datei wurde NICHT erstellt:"
        )

        print(
            os.path.abspath(filename)
        )

        exit(1)


# ============================================================
# SITEMAP ERSTELLEN
# ============================================================

sitemap_lines = [

    '<?xml version="1.0" encoding="UTF-8"?>',

    '',

    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',

    '',

    '    <url>',

    '        <loc>https://kitchenbreeze.github.io/foodblog/</loc>',

    '    </url>',

    ''

]


# ============================================================
# Rezeptseiten zur Sitemap hinzufügen
# ============================================================

for recipe in recipes:

    slug = create_slug(
        recipe["title"]
    )


    sitemap_lines.extend([

        '    <url>',

        (
            '        <loc>'
            f'https://kitchenbreeze.github.io/foodblog/recipes/{slug}.html'
            '</loc>'
        ),

        '    </url>',

        ''

    ])


sitemap_lines.append(
    '</urlset>'
)


# ============================================================
# sitemap.xml speichern
# ============================================================

with open(
    "sitemap.xml",
    "w",
    encoding="utf-8"
) as file:

    file.write(
        "\n".join(
            sitemap_lines
        )
    )


print("")
print("========================================")
print("✅ SITEMAP ERSTELLT")
print("sitemap.xml")
print("========================================")
print("")
print("✅ GENERATOR ERFOLGREICH ABGESCHLOSSEN")
print(
    f"{len(recipes)} Rezepte verarbeitet."
)