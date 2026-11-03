$ErrorActionPreference = "Stop"

$baseUrl = "https://kitchenbreeze.github.io/foodblog/"
$recipesFile = Join-Path (Get-Location).Path "recipes.js"
$outputFile = Join-Path (Get-Location).Path "image-sitemap.xml"

if (-not (Test-Path $recipesFile)) {
    Write-Host "Fehler: recipes.js wurde im aktuellen Ordner nicht gefunden."
    exit 1
}

$content = [System.IO.File]::ReadAllText($recipesFile, [System.Text.Encoding]::UTF8)

$idMatches = [regex]::Matches(
    $content,
    '(?m)\bid\s*:\s*["'']([^"'']+)["'']'
)

if ($idMatches.Count -eq 0) {
    Write-Host "Fehler: Keine Rezept-IDs gefunden."
    exit 1
}

$xml = New-Object System.Text.StringBuilder

[void]$xml.AppendLine('<?xml version="1.0" encoding="UTF-8"?>')
[void]$xml.AppendLine('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">')

$totalImages = New-Object 'System.Collections.Generic.HashSet[string]'

for ($i = 0; $i -lt $idMatches.Count; $i++) {

    $match = $idMatches[$i]
    $recipeId = $match.Groups[1].Value

    $start = $match.Index

    if ($i -lt ($idMatches.Count - 1)) {
        $end = $idMatches[$i + 1].Index
    }
    else {
        $end = $content.Length
    }

    $recipeText = $content.Substring($start, $end - $start)

    $imageMatches = [regex]::Matches(
        $recipeText,
        '["''](images/[^"'']+)["'']'
    )

    $recipeImages = New-Object 'System.Collections.Generic.HashSet[string]'

    foreach ($imageMatch in $imageMatches) {
        [void]$recipeImages.Add($imageMatch.Groups[1].Value)
    }

    if ($recipeImages.Count -eq 0) {
        continue
    }

    $recipeUrl = $baseUrl + "recipe.html?id=" + [uri]::EscapeDataString($recipeId)

    [void]$xml.AppendLine("  <url>")
    [void]$xml.AppendLine("    <loc>$recipeUrl</loc>")

    foreach ($imagePath in $recipeImages) {

        [void]$totalImages.Add($imagePath)

        $encodedPath = (($imagePath -split '/') | ForEach-Object {
            [uri]::EscapeDataString($_)
        }) -join '/'

        $imageUrl = $baseUrl + $encodedPath
        $escapedImageUrl = [System.Security.SecurityElement]::Escape($imageUrl)

        [void]$xml.AppendLine("    <image:image>")
        [void]$xml.AppendLine("      <image:loc>$escapedImageUrl</image:loc>")
        [void]$xml.AppendLine("    </image:image>")
    }

    [void]$xml.AppendLine("  </url>")
}

[void]$xml.AppendLine("</urlset>")

$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputFile, $xml.ToString(), $utf8)

Write-Host ""
Write-Host "Fertig! Die Bild-Sitemap wurde erstellt."
Write-Host "Rezeptseiten geprüft: $($idMatches.Count)"
Write-Host "Unterschiedliche Bilddateien: $($totalImages.Count)"
Write-Host "Datei: image-sitemap.xml"