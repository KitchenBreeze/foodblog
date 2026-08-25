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

console.log(JSON.stringify(global.RECIPES));
"""


result = subprocess.run(
    ["node", "-e", node_script],
    capture_output=True,
    text=True
)


if result.returncode != 0:
    print("FEHLER beim Auslesen von recipes.js:")
    print(result.stderr)
    raise SystemExit(1)


try:
    recipes = json.loads(result.stdout)
except json.JSONDecodeError:
    print("FEHLER: recipes.js konnte nicht als JSON gelesen werden.")
    print(result.stdout)
    raise SystemExit(1)


print()
print("========================================")
print("RECIPES ERFOLGREICH GELADEN")
print(f"{len(recipes)} Rezepte gefunden.")
print("========================================")
print()


# ============================================================
# recipes-Ordner erstellen
# ============================================================

os.makedirs(
    "recipes",
    exist_ok=True
)


# ============================================================
# Slug erstellen
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
# Bildpfad für Rezeptseiten
#
# Rezeptseiten liegen in:
#
# recipes/rezept-name.html
#
# Bilder liegen z.B. in:
#
# images/rezept.jpg
#
# Deshalb:
#
# ../images/rezept.jpg
# ============================================================

def recipe_page_image_path(path):

    if not isinstance(path, str):
        return path

    path = path.strip()

    if not path:
        return path

    # Externe Bilder
    if path.startswith("http://"):
        return path

    if path.startswith("https://"):
        return path

    # Data URLs
    if path.startswith("data:"):
        return path

    # Bereits relativer Pfad für Rezeptseite
    if path.startswith("../"):
        return path

    # Absolute Pfade
    if path.startswith("/"):
        return path

    # ./ entfernen
    if path.startswith("./"):
        path = path[2:]

    return "../" + path


# ============================================================
# [[slug|Text]] in HTML-Link umwandeln
# ============================================================

def replace_recipe_links(text):

    if not isinstance(text, str):
        return text

    pattern = r"\[\[([^|\]]+)\|([^\]]+)\]\]"

    def replace(match):

        slug = match.group(1).strip()
        title = match.group(2).strip()

        return (
            f'<a href="{slug}.html">'
            f'{title}'
            f'</a>'
        )

    return re.sub(
        pattern,
        replace,
        text
    )


# ============================================================
# Rezept für Rezeptseite vorbereiten
# ============================================================

def prepare_recipe_for_page(recipe):

    # Tiefe Kopie
    recipe_copy = json.loads(
        json.dumps(recipe)
    )


    # --------------------------------------------------------
    # Hauptbild
    # --------------------------------------------------------

    if "image" in recipe_copy:

        recipe_copy["image"] = recipe_page_image_path(
            recipe_copy["image"]
        )


    # --------------------------------------------------------
    # Schrittbilder
    # --------------------------------------------------------

    for step in recipe_copy.get(
        "steps",
        []
    ):

        if not isinstance(step, dict):
            continue

        if "images" not in step:
            continue

        if not isinstance(
            step["images"],
            list
        ):
            continue

        step["images"] = [
            recipe_page_image_path(image)
            for image in step["images"]
        ]


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

            if isinstance(
                items,
                list
            ):

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
    # Tipps
    # --------------------------------------------------------

    if "tips" in recipe_copy:

        if isinstance(
            recipe_copy["tips"],
            list
        ):

            recipe_copy["tips"] = [
                replace_recipe_links(tip)
                for tip in recipe_copy["tips"]
            ]


    return recipe_copy


# ============================================================
# ALLE REZEPTE FÜR REZEPTSEITEN VORBEREITEN
#
# Wichtig:
# Auch "Das könnte dich auch interessieren"
# befindet sich auf einer Rezeptseite.
#
# Deshalb werden auch dort die Bilder angepasst.
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
# Template laden
# ============================================================

template_path = (
    "templates/recipe-template.html"
)


if not os.path.exists(
    template_path
):

    print()
    print("FEHLER:")
    print("Template nicht gefunden:")
    print(template_path)
    print()

    raise SystemExit(1)


with open(
    template_path,
    "r",
    encoding="utf-8"
) as file:

    template_original = file.read()


# ============================================================
# RECIPE_DATA Platzhalter prüfen
# ============================================================

if "<!-- RECIPE_DATA -->" not in template_original:

    print()
    print("FEHLER:")
    print(
        "<!-- RECIPE_DATA --> "
        "wurde in recipe-template.html nicht gefunden."
    )
    print()

    raise SystemExit(1)


# ============================================================
# ALLE REZEPTSEITEN ERZEUGEN
# ============================================================

created_count = 0


for recipe in recipes:

    # --------------------------------------------------------
    # Titel prüfen
    # --------------------------------------------------------

    if "title" not in recipe:

        print()
        print("FEHLER:")
        print("Ein Rezept besitzt keinen Titel.")
        print(recipe)
        print()

        raise SystemExit(1)


    title = recipe["title"]


    # --------------------------------------------------------
    # Slug
    # --------------------------------------------------------

    slug = create_slug(
        title
    )


    if not slug:

        print()
        print("FEHLER:")
        print(
            f"Kein gültiger Dateiname für: {title}"
        )
        print()

        raise SystemExit(1)


    # --------------------------------------------------------
    # Rezeptdaten vorbereiten
    # --------------------------------------------------------

    recipe_copy = prepare_recipe_for_page(
        recipe
    )


    # --------------------------------------------------------
    # Dateiname
    # --------------------------------------------------------

    filename = (
        f"recipes/{slug}.html"
    )


    print("----------------------------------------")
    print("Verarbeite:")
    print(title)
    print("Datei:")
    print(filename)


    # --------------------------------------------------------
    # Template zurücksetzen
    # --------------------------------------------------------

    template = template_original


    # --------------------------------------------------------
    # RECIPE_DATA als JSON
    # --------------------------------------------------------

    recipe_data = json.dumps(
        recipe_copy,
        ensure_ascii=False,
        indent=4
    )


    # --------------------------------------------------------
    # RECIPE_DATA + RECIPES einsetzen
    # --------------------------------------------------------

    replacement = f"""
<script>
const RECIPE_DATA = {recipe_data};
const RECIPES = {all_recipes_data};
</script>
"""


    template = template.replace(
        "<!-- RECIPE_DATA -->",
        replacement,
        1
    )


    # --------------------------------------------------------
    # HTML schreiben
    # --------------------------------------------------------

    with open(
        filename,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(
            template
        )


    # --------------------------------------------------------
    # Prüfen
    # --------------------------------------------------------

    if not os.path.isfile(
        filename
    ):

        print()
        print("FEHLER:")
        print(
            "Datei wurde nicht erstellt:"
        )
        print(
            os.path.abspath(filename)
        )

        raise SystemExit(1)


    created_count += 1

    print("OK:")
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

    "        <loc>https://kitchenbreeze.github.io/foodblog/</loc>",

    "    </url>",

    ""

]


# ============================================================
# REZEPTSEITEN ZUR SITEMAP HINZUFÜGEN
# ============================================================

for recipe in recipes:

    slug = create_slug(
        recipe["title"]
    )


    sitemap_lines.extend([

        "    <url>",

        (
            "        <loc>"
            f"https://kitchenbreeze.github.io/foodblog/recipes/{slug}.html"
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


# ============================================================
# FERTIG
# ============================================================

print()
print("========================================")
print("GENERATOR FERTIG")
print("========================================")

print(
    f"{created_count} Rezeptseiten erstellt."
)

print()

print(
    "Sitemap erstellt:"
)

print(
    os.path.abspath("sitemap.xml")
)

print()

print(
    "Alle Bildpfade für recipes/ wurden angepasst."
)

print("========================================")


