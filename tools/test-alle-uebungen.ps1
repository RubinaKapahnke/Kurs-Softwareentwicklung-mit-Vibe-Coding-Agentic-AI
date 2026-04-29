# test-alle-uebungen.ps1
# Laeuft ueber alle Uebungsdateien in docs/uebungen/ und prueft jede gegen den Standard.
#
# Aufruf (vom Repo-Root):
#   .\tools\test-alle-uebungen.ps1
#
# Rueckgabewert: Exit-Code 0 = alle OK, 1 = mindestens eine Datei fehlerhaft

$ErrorActionPreference = "Stop"

$repoRoot  = Split-Path -Parent $PSScriptRoot
$uebungen  = Get-ChildItem -Path "$repoRoot\docs\uebungen" -Filter "meilenstein-*.md" | Sort-Object Name
$testScript = "$PSScriptRoot\test-uebung.ps1"

if ($uebungen.Count -eq 0) {
    Write-Host "Keine Uebungsdateien gefunden in docs/uebungen/." -ForegroundColor Yellow
    exit 0
}

$totalFailed = 0
$totalFiles  = 0

foreach ($file in $uebungen) {
    $totalFiles++
    & $testScript -File $file.FullName
    if ($LASTEXITCODE -ne 0) {
        $totalFailed++
    }
}

Write-Host ("=" * 70)
if ($totalFailed -eq 0) {
    Write-Host "  ALLE $totalFiles Uebungen bestanden." -ForegroundColor Green
} else {
    Write-Host "  $totalFailed von $totalFiles Uebungen haben Fehler." -ForegroundColor Red
}
Write-Host ("=" * 70)
Write-Host ""

exit $(if ($totalFailed -eq 0) { 0 } else { 1 })
