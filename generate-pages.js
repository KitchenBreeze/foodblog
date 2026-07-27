const fs = require("fs");
const path = require("path");

// Hier werden später deine Rezepte geladen
const { RECIPES } = require("./recipes.js");

console.log("Rezepte gefunden:", RECIPES.length);