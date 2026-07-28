import re

title = "Spaghetti aglio e olio"

slug = title.lower()

slug = slug.replace("ä", "ae")
slug = slug.replace("ö", "oe")
slug = slug.replace("ü", "ue")
slug = slug.replace("ß", "ss")

slug = re.sub(r"[^a-z0-9\s-]", "", slug)
slug = re.sub(r"\s+", "-", slug)

print("Titel:", title)
print("Slug:", slug)