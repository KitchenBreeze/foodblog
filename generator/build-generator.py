import os
import re
import json
import subprocess


# ============================================================
# EINSTELLUNGEN
# ============================================================

RECIPES_JS = "recipes.js"
TEMPLATE_PATH = "templates/recipe-template.html"
OUTPUT_DIR = "recipes"
SITEMAP_PATH = "sitemap.xml"

BASE_URL = "https://kitchenbreeze.github.io/foodblog"


# ============================================================
# START
# ============================================================

print()
print("========================================")
print("       KITCHENBREEZE GENERATOR")
print("========================================")
print()


# ============================================================
# RECIPES.JS PRÜFEN
# ============================================================

if not os.path.isfile(RECIPES_JS):
    print("FEHLER:")
    print(f"{RECIPES_JS} wurde nicht gefunden.")
    print()
    raise SystemExit(1)


# ============================================================
# TEMPLATE PRÜFEN
# ============================================================

if not os.path.isfile(TEMPLATE_PATH):
    print("FEHLER:")
    print()
    print("Template nicht gefunden:")
    print(TEMPLATE_PATH)
    print()
    raise SystemExit(1)


# ============================================================
# RECIPES.JS MIT NODE AUSLESEN
# ============================================================

node_script = r"""
const fs = require("fs");

let content = fs.readFileSync("recipes.js", "utf8");

content = content.replace(
    "const RECIPES =",
    "global.RECIPES ="
);

eval(content);

console.log(JSON.stringify(global.RECIPES));
"""


print("Lese recipes.js ...")
print()


result = subprocess.run(
    ["node", "-e", node_script],
    capture_output=True,
    text=True
)


if result.returncode != 0:
    print("FEHLER beim Auslesen von recipes.js:")
    print()
    print(result.stderr)
    print()
    raise SystemExit(1)


# ============================================================
# RECIPES.JS IN PYTHON EINLESEN
# ============================================================

try:
    recipes = json.loads(result.stdout)
except json.JSONDecodeError:
    print("FEHLER:")
    print("recipes.js konnte nicht gelesen werden.")
    print()
    print(result.stdout)
    print()
    raise SystemExit(1)


if not isinstance(recipes, list):
    print("FEHLER:")
    print("RECIPES ist kein Array.")
    print()
    raise SystemExit(1)


print("RECIPES.JS ERFOLGREICH GELADEN")
print(f"{len(recipes)} Rezepte gefunden.")
print()


# ============================================================
# OUTPUT-ORDNER ERSTELLEN
# ============================================================

os.makedirs(
    OUTPUT_DIR,
    exist_ok=True
)


# ============================================================
# SLUG ERSTELLEN
# ============================================================

def create_slug(title):

    slug = str(title).lower()

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

    slug = re.sub(
        r"-+",
        "-",
        slug
    )

    return slug.strip("-")


# ============================================================
# BILDPFADE
#
# WICHTIG:
#
# recipes.js soll enthalten:
#
# image: "images/ananassalat.jpeg"
#
# Das Template macht daraus:
#
# ../images/ananassalat.jpeg
#
# Deshalb werden Bildpfade hier NICHT verändert.
# ============================================================

def keep_image_path(path):

    if not isinstance(path, str):
        return path

    return path.strip()


# ============================================================
# [[slug|Text]] IN HTML-LINK UMWANDELN
# ============================================================

def replace_recipe_links(text):

    if not isinstance(text, str):
        return text

    pattern = r"\[\[([^|\]]+)\|([^\]]+)\]\]"

    def replace(match):

        slug = match.group(1).strip()
        title = match.group(2).strip()

        return (
            f'<a href="../recipes/{slug}.html">'
            f'{title}'
            f'</a>'
        )

    return re.sub(
        pattern,
        replace,
        text
    )


# ============================================================
# REZEPT FÜR REZEPTSEITE VORBEREITEN
# ============================================================

def prepare_recipe_for_page(recipe):

    # Tiefe Kopie
    recipe_copy = json.loads(
        json.dumps(recipe)
    )


    # ========================================================
    # HAUPTBILD
    #
    # NICHT VERÄNDERN!
    # ========================================================

    if "image" in recipe_copy:

        recipe_copy["image"] = keep_image_path(
            recipe_copy["image"]
        )


    # ========================================================
    # SCHRITTBILDER
    #
    # NICHT VERÄNDERN!
    # ========================================================

    steps = recipe_copy.get(
        "steps",
        []
    )

    if isinstance(steps, list):

        for step in steps:

            if not isinstance(step, dict):
                continue

            images = step.get("images")

            if not isinstance(images, list):
                continue

            step["images"] = [
                keep_image_path(image)
                for image in images
            ]


    # ========================================================
    # ZUTATEN
    # ========================================================

    ingredients = recipe_copy.get(
        "ingredients"
    )


    if isinstance(
        ingredients,
        dict
    ):

        for section, items in ingredients.items():

            if not isinstance(items, list):
                continue

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


    # ========================================================
    # TIPPS
    # ========================================================

    tips = recipe_copy.get(
        "tips"
    )

    if isinstance(
        tips,
        list
    ):

        recipe_copy["tips"] = [
            replace_recipe_links(tip)
            for tip in tips
        ]


    return recipe_copy


# ============================================================
# ALLE REZEPTE FÜR RELATED RECIPES VORBEREITEN
# ============================================================

recipes_for_recipe_pages = []


for recipe in recipes:

    recipes_for_recipe_pages.append(
        prepare_recipe_for_page(recipe)
    )


all_recipes_data = json.dumps(
    recipes_for_recipe_pages,
    ensure_ascii=False,
    indent=4
)


# ============================================================
# TEMPLATE LADEN
# ============================================================

with open(
    TEMPLATE_PATH,
    "r",
    encoding="utf-8"
) as file:

    template_original = file.read()


# ============================================================
# PLACEHOLDER PRÜFEN
# ============================================================

placeholder = "<!-- RECIPE_DATA -->"


if placeholder not in template_original:

    print("FEHLER:")
    print()
    print(
        "<!-- RECIPE_DATA --> "
        "wurde in recipe-template.html nicht gefunden."
    )
    print()

    raise SystemExit(1)


# ============================================================
# REZEPTSEITEN ERSTELLEN
# ============================================================

created_count = 0


for recipe in recipes:


    # ========================================================
    # TITEL PRÜFEN
    # ========================================================

    if "title" not in recipe:

        print("FEHLER:")
        print("Ein Rezept besitzt keinen Titel.")
        print(recipe)
        print()

        raise SystemExit(1)


    title = recipe["title"]


    # ========================================================
    # SLUG
    # ========================================================

    slug = create_slug(title)


    if not slug:

        print("FEHLER:")
        print(
            f"Kein gültiger Dateiname für: {title}"
        )
        print()

        raise SystemExit(1)


    # ========================================================
    # REZEPTDATEN VORBEREITEN
    # ========================================================

    recipe_copy = prepare_recipe_for_page(
        recipe
    )


    # ========================================================
    # DATEINAME
    # ========================================================

    filename = os.path.join(
        OUTPUT_DIR,
        f"{slug}.html"
    )


    print("----------------------------------------")
    print("Rezept:")
    print(title)
    print()
    print("Datei:")
    print(filename)


    # ========================================================
    # TEMPLATE ZURÜCKSETZEN
    # ========================================================

    template = template_original


    # ========================================================
    # RECIPE_DATA
    # ========================================================

    recipe_data = json.dumps(
        recipe_copy,
        ensure_ascii=False,
        indent=4
    )


    # ========================================================
    # JAVASCRIPT DATEN EINSETZEN
    # ========================================================

    replacement = f"""
<script>

const RECIPE_DATA = {recipe_data};

const RECIPES = {all_recipes_data};

</script>
"""


    template = template.replace(
        placeholder,
        replacement,
        1
    )


    # ========================================================
    # HTML SCHREIBEN
    # ========================================================

    with open(
        filename,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(
            template
        )


    # ========================================================
    # PRÜFEN
    # ========================================================

    if not os.path.isfile(filename):

        print()
        print("FEHLER:")
        print("Datei wurde nicht erstellt:")
        print(
            os.path.abspath(filename)
        )
        print()

        raise SystemExit(1)


    created_count += 1


    print("OK - ERSTELLT:")
    print(
        os.path.abspath(filename)
    )


# ============================================================
# SITEMAP ERSTELLEN
# ============================================================

sitemap_lines = [

    '<?xml version="1.0" encoding="UTF-8"?>',

    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',

    "",

    "    <url>",

    f"        <loc>{BASE_URL}/</loc>",

    "    </url>",

    ""

]


# ============================================================
# REZEPTSEITEN IN SITEMAP
# ============================================================

for recipe in recipes:

    slug = create_slug(
        recipe["title"]
    )


    sitemap_lines.extend([

        "    <url>",

        (
            "        <loc>"
            f"{BASE_URL}/recipes/{slug}.html"
            "</loc>"
        ),

        "    </url>",

        ""

    ])


# ============================================================
# SITEMAP SCHLIESSEN
# ============================================================

sitemap_lines.append(
    "</urlset>"
)


# ============================================================
# SITEMAP SPEICHERN
# ============================================================

with open(
    SITEMAP_PATH,
    "w",
    encoding="utf-8"
) as file:

    file.write(
        "\n".join(
            sitemap_lines
        )
    )


# ============================================================
# FERTIG
# ============================================================

print()

print("========================================")
print("   GENERATOR ERFOLGREICH ABGESCHLOSSEN")
print("========================================")

print()

print(
    f"{created_count} Rezeptseiten erstellt."
)

print()

print(
    f"Sitemap erstellt: {SITEMAP_PATH}"
)

print()

print("Bildpfade wurden NICHT verändert.")
print("Hauptbilder und Schrittbilder berücksichtigt.")

print()

print("========================================")


