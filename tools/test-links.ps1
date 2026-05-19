# test-links.ps1
# Prueft alle relativen Markdown-Links in Uebungsdateien und Modul-Dateien auf Existenz.
#
# Aufruf (vom Repo-Root):
#   .\tools\test-links.ps1
#
# Optionale Parameter:
#   -Path "course/02-course-exercises"   Nur Links in einem Unterordner pruefen
#
# Rueckgabewert: Exit-Code 0 = alle Links OK, 1 = mindestens ein toter Link

param(
    [string]$Path = ""
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot

if ($Path) {
    $searchRoot = [System.IO.Path]::GetFullPath((Join-Path $repoRoot ($Path -replace '/', '\')))
} else {
    $searchRoot = $repoRoot
}

$mdFiles = Get-ChildItem -Path $searchRoot -Recurse -Filter "*.md" | Where-Object {
    $_.FullName -notmatch "\\node_modules\\" -and
    $_.FullName -notmatch "\\\.angular\\" -and
    $_.FullName -notmatch "\\apps\\onboarding\\dist\\" -and
    $_.FullName -notmatch "\\apps\\onboarding\\public\\content\\"
} | Sort-Object FullName
$totalBroken = 0
$totalChecked = 0

# Regex: Markdown-Links [text](pfad) - nur relative Pfade (kein http/https, kein #-only)
$linkPattern = '\[([^\]]*)\]\((?!https?://)(?!#)([^)#\s]+)[^)]*\)'

foreach ($file in $mdFiles) {
    $fileContent = Get-Content $file.FullName -Raw -Encoding UTF8
    $linkMatches = [regex]::Matches($fileContent, $linkPattern)
    $fileHasBroken = $false

    foreach ($match in $linkMatches) {
        $linkTarget = $match.Groups[2].Value
        # Platzhalter-Links ueberspringen (Template-Muster wie XX-, <name>, UE-MX-)
        if ($linkTarget -match '<[^>]+>|XX-|YY-|UE-M[X\d]|meilenstein-[XN]-|meilenstein-N|modulname|modul-grundlagen|\bN-uebung\b|^\.\./\.\./docs/|^URL$|^/assets/') {
            continue
        }
        # Relativer Pfad relativ zur Datei aufloesen
        $resolvedPath = [System.IO.Path]::GetFullPath(
            (Join-Path (Split-Path $file.FullName -Parent) ($linkTarget -replace '/', '\'))
        )
        $totalChecked++

        if (-not (Test-Path $resolvedPath)) {
            if (-not $fileHasBroken) {
                Write-Host ""
                Write-Host "Datei: $($file.FullName.Replace($repoRoot + '\', ''))" -ForegroundColor Cyan
                $fileHasBroken = $true
            }
            Write-Host "  [FAIL] Toter Link: $linkTarget" -ForegroundColor Red
            Write-Host "         -> Aufgeloest: $($resolvedPath.Replace($repoRoot + '\', ''))" -ForegroundColor Yellow
            $totalBroken++
        }
    }
}

Write-Host ""
Write-Host ("=" * 70)
if ($totalBroken -eq 0) {
    Write-Host "  Alle $totalChecked geprueften Links sind OK." -ForegroundColor Green
} else {
    Write-Host "  $totalBroken tote Links in $totalChecked geprueften Links gefunden." -ForegroundColor Red
}
Write-Host ("=" * 70)

exit $(if ($totalBroken -eq 0) { 0 } else { 1 })
