console.log("KitchenBreeze JS läuft");

let selectedCategories = ["all"];

/* =========================
   ELEMENTE
========================= */

const filterItems = document.querySelectorAll(".filter-item");
const dropdown = document.getElementById("filterDropdown");
const btn = document.getElementById("filterBtn");
const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");


/* =========================
   CHECK OB RECIPES EXISTIERT
========================= */

if (typeof RECIPES === "undefined") {
    console.error("❌ RECIPES ist nicht geladen! recipes.js prüfen!");
}


/* =========================
   URL-PARAMETER AUSLESEN
========================= */

const urlParams = new URLSearchParams(window.location.search);

const urlCategory = urlParams.get("category");
const quickFilter = urlParams.get("quick");


/* =========================
   STARTFILTER SETZEN
========================= */

if (urlCategory) {

    selectedCategories = [urlCategory];

    filterItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.cat === urlCategory) {
            item.classList.add("active");
        }

    });

}


/* =========================
   SCHNELL-FILTER
========================= */

const quickMode = quickFilter === "true";


/* =========================
   DROPDOWN TOGGLE
========================= */

btn.addEventListener("click", (e) => {

    dropdown.classList.toggle("active");

    e.stopPropagation();

});


/* =========================
   AUSSERHALB KLICKEN
========================= */

document.addEventListener("click", (e) => {

    if (
        !dropdown.contains(e.target) &&
        e.target !== btn
    ) {

        dropdown.classList.remove("active");

    }

});


/* =========================
   FILTER LOGIK
========================= */

filterItems.forEach(item => {

    item.addEventListener("click", () => {

        const cat = item.dataset.cat;


        /* =====================
           ALLE
        ===================== */

        if (cat === "all") {

            selectedCategories = ["all"];

            filterItems.forEach(i =>
                i.classList.remove("active")
            );

            item.classList.add("active");

            render();

            return;
        }


        /* =====================
           "ALLE" ENTFERNEN
        ===================== */

        selectedCategories =
            selectedCategories.filter(
                c => c !== "all"
            );


        /* =====================
           KATEGORIE TOGGLE
        ===================== */

        if (
            selectedCategories.includes(cat)
        ) {

            selectedCategories =
                selectedCategories.filter(
                    c => c !== cat
                );

            item.classList.remove("active");

        } else {

            selectedCategories.push(cat);

            item.classList.add("active");

        }


        /* =====================
           KEINE AUSGEWÄHLT
        ===================== */

        if (
            selectedCategories.length === 0
        ) {

            selectedCategories = ["all"];

            const allItem =
                document.querySelector(
                    '[data-cat="all"]'
                );

            if (allItem) {
                allItem.classList.add("active");
            }

        }


        render();

    });

});


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    render
);


/* =========================
   RENDER
========================= */

function render() {

    console.log("RENDER läuft");

    console.log(
        "Ausgewählte Kategorien:",
        selectedCategories
    );

    console.log(
        "Schnell-Modus:",
        quickMode
    );

    console.log(
        "RECIPES:",
        RECIPES
    );


    grid.innerHTML = "";


    /* =========================
       SORTIEREN
    ========================= */

    const sorted = [...RECIPES].sort(
        (a, b) => {

            return Number(b.id) - Number(a.id);

        }
    );


    /* =========================
       SUCHBEGRIFF
    ========================= */

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    /* =========================
       FILTERN
    ========================= */

    const filtered = sorted.filter(r => {


        /* =====================
           KATEGORIE
        ===================== */

        let categoryMatches = true;


        if (
            !selectedCategories.includes("all")
        ) {

            categoryMatches =
                selectedCategories.some(cat => {

                    if (
                        Array.isArray(r.category)
                    ) {

                        return r.category.includes(cat);

                    }

                    return r.category === cat;

                });

        }


        if (!categoryMatches) {
            return false;
        }


        /* =====================
           SCHNELL
        ===================== */

        if (quickMode) {

            const totalTime =
                Number(
                    r.totalTime ||
                    r.time ||
                    r.duration ||
                    9999
                );


            if (totalTime > 45) {
                return false;
            }

        }


        /* =====================
           SUCHE
        ===================== */

        if (search) {

            const title =
                String(
                    r.title || ""
                ).toLowerCase();


            const description =
                String(
                    r.description || ""
                ).toLowerCase();


            const category =
                Array.isArray(r.category)
                    ? r.category
                        .join(" ")
                        .toLowerCase()
                    : String(
                        r.category || ""
                    ).toLowerCase();


            if (
                !title.includes(search) &&
                !description.includes(search) &&
                !category.includes(search)
            ) {

                return false;

            }

        }


        return true;

    });


    console.log(
        "Gefilterte Rezepte:",
        filtered
    );


    /* =========================
       REZEPTE AUSGEBEN
    ========================= */

    filtered.forEach(r => {

        grid.innerHTML += `

            <a
                class="card"
                href="recipe.html?id=${r.id}"
            >

                <img
                    src="${r.image}"
                    alt="${r.title}"
                >

                <div class="card-content">

                    <h2>
                        ${r.title}
                    </h2>

                    <p>
                        ${r.description || ""}
                    </p>

                </div>

            </a>

        `;

    });


    /* =========================
       KEINE ERGEBNISSE
    ========================= */

    if (filtered.length === 0) {

        grid.innerHTML = `

            <div class="no-results">

                <h2>
                    Keine Rezepte gefunden
                </h2>

                <p>
                    Versuche einen anderen Filter
                    oder Suchbegriff.
                </p>

            </div>

        `;

    }

}


/* =========================
   START
========================= */

render();