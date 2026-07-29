import re
import os

# recipes.js lesen
with open("recipes.js", "r", encoding="utf-8") as file:
    recipes_content = file.read()


# Titel auslesen
titles = re.findall(
    r'title:\s*"([^"]+)"',
    recipes_content
)


# Ordner sicherstellen
os.makedirs("recipes", exist_ok=True)


for title in titles:

    slug = title.lower()

    slug = slug.replace("ä", "ae")
    slug = slug.replace("ö", "oe")
    slug = slug.replace("ü", "ue")
    slug = slug.replace("ß", "ss")

    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug)

    filename = f"recipes/{slug}.html"


    # Nur neue Dateien erzeugen
    if os.path.exists(filename):
        print("Vorhanden:")
        print(filename)
        continue


    with open(
        "templates/recipe-template.html",
        "r",
        encoding="utf-8"
    ) as file:
        template = file.read()


    template = template.replace(
        "<title>KitchenBreeze Rezept</title>",
        f"<title>{title} – KitchenBreeze</title>"
    )


    with open(
        filename,
        "w",
        encoding="utf-8"
    ) as file:
        file.write(template)


    print("Erzeugt:")
    print(filename)