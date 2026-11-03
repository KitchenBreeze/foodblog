const fs = require("fs");

const source = fs.readFileSync("recipes.js", "utf8");

// Hauptbilder und Zubereitungsbilder aus allen Rezepten sammeln
const imagePaths = new Set();

// Hauptbilder finden
for (const match of source.matchAll(/image\s*:\s*["']([^"']+)["']/g)) {
    imagePaths.add(match[1]);
}

// Zubereitungsbilder finden
for (const match of source.matchAll(/images\s*:\s*\[([\s\S]*?)\]/g)) {
    const paths = match[1].match(/["']([^"']+\.(?:jpg|jpeg|png|webp))["']/gi) || [];

    for (const path of paths) {
        imagePaths.add(path.slice(1, -1));
    }
}

// XML-Sitemap erstellen
const baseUrl = "https://kitchenbreeze.github.io/foodblog/";

const imageEntries = [...imagePaths].map(path => {
    const imageUrl = baseUrl + path.replace(/^\/+/, "");

    return `    <image:image>
      <image:loc>${imageUrl}</image:loc>
    </image:image>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
${imageEntries}
  </url>
</urlset>`;

fs.writeFileSync("image-sitemap.xml", xml, "utf8");

console.log(`${imagePaths.size} Bilder in image-sitemap.xml eingetragen.`);