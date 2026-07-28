import re
import os

with open("recipes.js", "r", encoding="utf-8") as file:
    content = file.read()

titles = re.findall(
    r'title:\s*"([^"]+)"',
    content
)

# ersten Titel nehmen
title = titles[0]

slug = title.lower()

slug = slug.replace("ä", "ae")
slug = slug.replace("ö", "oe")
slug = slug.replace("ü", "ue")
slug = slug.replace("ß", "ss")

slug = re.sub(r"[^a-z0-9\s-]", "", slug)
slug = re.sub(r"\s+", "-", slug)


os.makedirs("recipes", exist_ok=True)

filename = f"recipes/{slug}.html"


html = f"""<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>{title} – KitchenBreeze</title>
</head>

<body>

<h1>{title}</h1>

<p>Diese Seite wurde automatisch erzeugt.</p>

</body>
</html>
"""


with open(filename, "w", encoding="utf-8") as file:
    file.write(html)


print("Erzeugt:")
print(filename)