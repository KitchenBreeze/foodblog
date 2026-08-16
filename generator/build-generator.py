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
    print(result.stderr)
    exit(1)


recipes = json.loads(result.stdout)


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
# Jedes Rezept erzeugen
# ============================================================

for recipe in recipes:

    slug = create_slug(recipe["title"])


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

        recipe_copy["image"] = (
            "../" + recipe_copy["image"]
        )


    # --------------------------------------------------------
    # Schrittbilder für recipes-Unterordner
    # --------------------------------------------------------

    for step in recipe_copy.get("steps", []):

        if isinstance(step, dict) and "images" in step:

            step["images"] = [
                "../" + img
                for img in step["images"]
            ]


    # --------------------------------------------------------
    # Zutatenlinks
    # --------------------------------------------------------

    ingredients = recipe_copy.get("ingredients")


    if isinstance(ingredients, dict):

        for section, items in ingredients.items():

            recipe_copy["ingredients"][section] = [

                replace_recipe_links(item)

                for item in items

            ]


    elif isinstance(ingredients, list):

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

    filename = f"recipes/{slug}.html"


    print("Verarbeite:")
    print(filename)


    # --------------------------------------------------------
    # Template laden
    # --------------------------------------------------------

    with open(
        "templates/recipe-template.html",
        "r",
        encoding="utf-8"
    ) as file:

        template = file.read()


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

    template = template.replace(
        "<!-- RECIPE_DATA -->",
        f"""
<script>
const RECIPE_DATA = {recipe_data};

const RECIPES = {all_recipes_data};
</script>
"""
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


    print("Erstellt:")
    print(filename)