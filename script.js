
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
DROPDOWN TOGGLE
========================= */

btn.addEventListener("click", (e) => {
    dropdown.classList.toggle("active");
    e.stopPropagation();
});

/* außerhalb klicken schließt */
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== btn) {
        dropdown.classList.remove("active");
    }
});

/* =========================
FILTER LOGIK
========================= */

filterItems.forEach(item => {

    item.addEventListener("click", () => {

        const cat = item.dataset.cat;

        if (cat === "all") {

            selectedCategories = ["all"];

            filterItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            render();
            return;
        }

        selectedCategories = selectedCategories.filter(c => c !== "all");

        if (selectedCategories.includes(cat)) {
            selectedCategories = selectedCategories.filter(c => c !== cat);
            item.classList.remove("active");
        } else {
            selectedCategories.push(cat);
            item.classList.add("active");
        }

        if (selectedCategories.length === 0) {
            selectedCategories = ["all"];
            document.querySelector('[data-cat="all"]').classList.add("active");
        }

        render();
    });
});

/* =========================
SEARCH
========================= */

searchInput.addEventListener("input", render);

/* =========================
RENDER
========================= */
function render() {

    console.log("RENDER läuft");
    console.log("RECIPES:", RECIPES);

    grid.innerHTML = "";

    const sorted = [...RECIPES].sort((a, b) => {
        return Number(b.id) - Number(a.id);
    });

    console.log("SORTIERT:", sorted.map(r => r.id));

    const filtered = sorted.filter(r => {

        // Alle anzeigen
        if (selectedCategories.includes("all")) {
            return true;
        }

        // Mindestens eine Kategorie muss passen
        return selectedCategories.some(cat => {
            if (Array.isArray(r.category)) {
                return r.category.includes(cat);
            }

            return r.category === cat;
        });

    });   // <-- DIESE KLAMMER HAT GEFEHLT

    filtered.forEach(r => {
        grid.innerHTML += `
        <a class="card" href="recipe.html?id=${r.id}">
            <img src="${r.image}">
            <div class="card-content">
                <h2>${r.title}</h2>
                <p>${r.description}</p>
            </div>
        </a>`;
    });
}

render();