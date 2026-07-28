import re

with open("recipes.js", "r", encoding="utf-8") as file:
    content = file.read()

titles = re.findall(
    r'title:\s*"([^"]+)"',
    content
)

for title in titles[:5]:

    slug = title.lower()

    slug = slug.replace("ä", "ae")
    slug = slug.replace("ö", "oe")
    slug = slug.replace("ü", "ue")
    slug = slug.replace("ß", "ss")

    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug)

    print(title)
    print("→", slug)
    print()