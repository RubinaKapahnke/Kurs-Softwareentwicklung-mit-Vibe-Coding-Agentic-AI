# test-alle-uebungen.ps1
# Laeuft ueber alle Uebungsdateien in course/uebungen/ und prueft jede gegen den Standard.
#
# Aufruf (vom Repo-Root):
#   .\tools\test-alle-uebungen.ps1
#
# Rueckgabewert: Exit-Code 0 = alle OK, 1 = mindestens eine Datei fehlerhaft

$ErrorActionPreference = "Stop"

$repoRoot  = Split-Path -Parent $PSScriptRoot
$uebungen  = Get-ChildItem -Path "$repoRoot\course\uebungen" -Filter "meilenstein-*.md" | Sort-Object Name
$testScript = "$PSScriptRoot\test-uebung.ps1"

if ($uebungen.Count -eq 0) {
    Write-Host "Keine Uebungsdateien gefunden in course/uebungen/." -ForegroundColor Yellow
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

# --- Meilenstein-Coverage-Check ---
Write-Host ("=" * 70)
Write-Host "  Meilenstein-Coverage-Check (NEXT_STEPS.md <-> course/uebungen/)" -ForegroundColor Cyan
Write-Host ("=" * 70)

$nextStepsPath = "$repoRoot\NEXT_STEPS.md"
$nextStepsContent = Get-Content $nextStepsPath -Raw -Encoding UTF8

# Alle referenzierten Uebungspfade aus NEXT_STEPS.md extrahieren
$uebungMatches = [regex]::Matches($nextStepsContent, '\*\*Uebung:\*\*\s*\[.*?\]\((course/uebungen/[^)]+)\)')
$referencedAbsPaths = @()
$coverageFailed = 0

foreach ($match in $uebungMatches) {
    $relPath  = $match.Groups[1].Value
    $absPath  = [System.IO.Path]::GetFullPath((Join-Path $repoRoot ($relPath -replace '/', '\')))
    $referencedAbsPaths += $absPath

    if (-not (Test-Path $absPath)) {
        Write-Host "  [FEHLER] Tote Referenz in NEXT_STEPS.md: $relPath" -ForegroundColor Red
        Write-Host "           -> Datei existiert nicht auf Disk" -ForegroundColor Yellow
        $coverageFailed++
    } else {
        Write-Host "  [OK  ] Referenz OK: $relPath" -ForegroundColor Green
    }
}

# Uebungsdateien, die nicht in NEXT_STEPS.md verlinkt sind
foreach ($file in $uebungen) {
    $fileAbs = [System.IO.Path]::GetFullPath($file.FullName)
    if ($referencedAbsPaths -notcontains $fileAbs) {
        Write-Host "  [WARN] Uebungsdatei existiert, aber fehlt in NEXT_STEPS.md: $($file.Name)" -ForegroundColor Yellow
        $coverageFailed++
    }
}

if ($uebungMatches.Count -eq 0) {
    Write-Host "  [WARN] Keine '> **Uebung:**'-Eintraege in NEXT_STEPS.md gefunden." -ForegroundColor Yellow
}

Write-Host ("-" * 70)
if ($coverageFailed -eq 0) {
    Write-Host "  Coverage-Check: alle Referenzen konsistent." -ForegroundColor Green
} else {
    Write-Host "  Coverage-Check: $coverageFailed Problem(e) gefunden." -ForegroundColor Red
}
Write-Host ("=" * 70)
Write-Host ""

$overallFailed = $totalFailed + $coverageFailed
exit $(if ($overallFailed -eq 0) { 0 } else { 1 })
