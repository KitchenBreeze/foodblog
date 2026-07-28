import re
import os

with open("recipes.js", "r", encoding="utf-8") as file:
    recipes_content = file.read()

titles = re.findall(
    r'title:\s*"([^"]+)"',
    recipes_content
)

title = titles[0]


slug = title.lower()

slug = slug.replace("ä", "ae")
slug = slug.replace("ö", "oe")
slug = slug.replace("ü", "ue")
slug = slug.replace("ß", "ss")

slug = re.sub(r"[^a-z0-9\s-]", "", slug)
slug = re.sub(r"\s+", "-", slug)


with open("templates/recipe-template.html", "r", encoding="utf-8") as file:
    template = file.read()


template = template.replace(
    "<title>KitchenBreeze Rezept</title>",
    f"<title>{title} – KitchenBreeze</title>"
)


os.makedirs("recipes", exist_ok=True)

filename = f"recipes/{slug}.html"


with open(filename, "w", encoding="utf-8") as file:
    file.write(template)


print("Erzeugt:")
print(filename)