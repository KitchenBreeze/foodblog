import os
import re
import json
import subprocess


# recipes.js mit Node auslesen
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


for recipe in recipes:

    title = recipe["title"]

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


    filename = f"recipes/{slug}.html"


    print("Verarbeite:")
    print(filename)