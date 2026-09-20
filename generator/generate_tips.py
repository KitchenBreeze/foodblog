import os
import json
import subprocess


# ============================================================
# EINSTELLUNGEN
# ============================================================

TIPS_JS = "tips.js"
TEMPLATE_PATH = "templates/tips/tip-template.html"
OUTPUT_DIR = "tipps-tricks"


# ============================================================
# START
# ============================================================

print()
print("========================================")
print("     KITCHENBREEZE TIPPS GENERATOR")
print("========================================")
print()


# ============================================================
# TIPS.JS PRÜFEN
# ============================================================

if not os.path.isfile(TIPS_JS):

    print("FEHLER:")
    print(f"{TIPS_JS} wurde nicht gefunden.")
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
# TIPS.JS MIT NODE AUSLESEN
# ============================================================

node_script = r"""
const fs = require("fs");

let content =
    fs.readFileSync(
        "tips.js",
        "utf8"
    );

content =
    content.replace(
        "const TIPS =",
        "global.TIPS ="
    );

eval(content);

console.log(
    JSON.stringify(
        global.TIPS
    )
);
"""


print("Lese tips.js ...")
print()


result = subprocess.run(
    ["node", "-e", node_script],
    capture_output=True,
    text=True
)


if result.returncode != 0:

    print("FEHLER beim Auslesen von tips.js:")
    print()
    print(result.stderr)
    print()

    raise SystemExit(1)


# ============================================================
# TIPS.JS IN PYTHON EINLESEN
# ============================================================

try:

    tips = json.loads(
        result.stdout
    )

except json.JSONDecodeError:

    print("FEHLER:")
    print("tips.js konnte nicht gelesen werden.")
    print()
    print(result.stdout)
    print()

    raise SystemExit(1)


if not isinstance(tips, list):

    print("FEHLER:")
    print("TIPS ist kein Array.")
    print()

    raise SystemExit(1)


print("TIPS.JS ERFOLGREICH GELADEN")
print(f"{len(tips)} Tipps gefunden.")
print()


# ============================================================
# OUTPUT-ORDNER ERSTELLEN
# ============================================================

os.makedirs(
    OUTPUT_DIR,
    exist_ok=True
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
# TIP-SEITEN ERSTELLEN
# ============================================================

created_count = 0


for tip in tips:

    # --------------------------------------------------------
    # ID PRÜFEN
    # --------------------------------------------------------

    if "id" not in tip:

        print("FEHLER:")
        print("Ein Tipp besitzt keine ID.")
        print(tip)
        print()

        raise SystemExit(1)


    # --------------------------------------------------------
    # TITEL PRÜFEN
    # --------------------------------------------------------

    if "title" not in tip:

        print("FEHLER:")
        print("Ein Tipp besitzt keinen Titel.")
        print(tip)
        print()

        raise SystemExit(1)


    tip_id = str(
        tip["id"]
    ).strip()


    title = str(
        tip["title"]
    ).strip()


    if not tip_id:

        print("FEHLER:")
        print(
            f"Leere ID für: {title}"
        )
        print()

        raise SystemExit(1)


    # --------------------------------------------------------
    # DATEINAME
    # --------------------------------------------------------

    filename = os.path.join(
        OUTPUT_DIR,
        f"{tip_id}.html"
    )


    print("----------------------------------------")
    print("Tipp:")
    print(title)
    print()
    print("Datei:")
    print(filename)


    # --------------------------------------------------------
    # TEMPLATE ZURÜCKSETZEN
    # --------------------------------------------------------

    template = template_original


    # --------------------------------------------------------
    # TIP_DATA EINSETZEN
    # --------------------------------------------------------

    tip_data = json.dumps(
        tip,
        ensure_ascii=False,
        indent=4
    )


    replacement = f"""
<script>

const TIP_DATA = {tip_data};

</script>
"""


    template = template.replace(
        "<!-- TIP_DATA -->",
        replacement,
        1
    )


    # --------------------------------------------------------
    # PLACEHOLDER ERSETZEN
    # --------------------------------------------------------

    template = template.replace(
        "/* TIP_DATA_PLACEHOLDER */ null",
        "TIP_DATA",
        1
    )


    # --------------------------------------------------------
    # HTML SCHREIBEN
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
    # PRÜFEN
    # --------------------------------------------------------

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
# FERTIG
# ============================================================

print()
print("========================================")
print("   GENERATOR ERFOLGREICH ABGESCHLOSSEN")
print("========================================")
print()

print(
    f"{created_count} Tippseiten erstellt."
)

print()

print("========================================")