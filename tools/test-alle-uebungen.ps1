# test-alle-uebungen.ps1
# Laeuft ueber alle Uebungsdateien in course/02-course-exercises/ und prueft jede gegen den Standard.
#
# Aufruf (vom Repo-Root):
#   .\tools\test-alle-uebungen.ps1
#
# Rueckgabewert: Exit-Code 0 = alle OK, 1 = mindestens eine Datei fehlerhaft

$ErrorActionPreference = "Stop"

$repoRoot  = Split-Path -Parent $PSScriptRoot
$uebungen  = Get-ChildItem -Path "$repoRoot\course\02-course-exercises" -Filter "meilenstein-*.md" | Sort-Object Name
$testScript = "$PSScriptRoot\test-uebung.ps1"

if ($uebungen.Count -eq 0) {
    Write-Host "Keine Uebungsdateien gefunden in course/02-course-exercises/." -ForegroundColor Yellow
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
Write-Host "  Meilenstein-Coverage-Check (course/00-course-guides/COURSE_MILESTONES.md <-> course/02-course-exercises/)" -ForegroundColor Cyan
Write-Host ("=" * 70)

$nextStepsPath = "$repoRoot\course\00-course-guides\COURSE_MILESTONES.md"
$nextStepsContent = Get-Content $nextStepsPath -Raw -Encoding UTF8
$nextStepsDir = Split-Path -Parent $nextStepsPath

# Alle referenzierten Uebungspfade aus COURSE_MILESTONES.md extrahieren
$uebungMatches = [regex]::Matches($nextStepsContent, '\*\*Uebung:\*\*\s*\[.*?\]\(([^)]+02-course-exercises/[^)]+)\)')
$referencedAbsPaths = @()
$coverageFailed = 0

foreach ($match in $uebungMatches) {
    $relPath  = $match.Groups[1].Value
    if ($relPath -like "../*") {
        $absPath = [System.IO.Path]::GetFullPath((Join-Path $nextStepsDir ($relPath -replace '/', '\')))
    } else {
        $absPath = [System.IO.Path]::GetFullPath((Join-Path $repoRoot ($relPath -replace '/', '\')))
    }
    $referencedAbsPaths += $absPath

    if (-not (Test-Path $absPath)) {
        Write-Host "  [FEHLER] Tote Referenz in COURSE_MILESTONES.md: $relPath" -ForegroundColor Red
        Write-Host "           -> Datei existiert nicht auf Disk" -ForegroundColor Yellow
        $coverageFailed++
    } else {
        Write-Host "  [OK  ] Referenz OK: $relPath" -ForegroundColor Green
    }
}

# Uebungsdateien, die nicht in COURSE_MILESTONES.md verlinkt sind
foreach ($file in $uebungen) {
    $fileAbs = [System.IO.Path]::GetFullPath($file.FullName)
    if ($referencedAbsPaths -notcontains $fileAbs) {
        Write-Host "  [WARN] Uebungsdatei existiert, aber fehlt in COURSE_MILESTONES.md: $($file.Name)" -ForegroundColor Yellow
        $coverageFailed++
    }
}

if ($uebungMatches.Count -eq 0) {
    Write-Host "  [WARN] Keine '> **Uebung:**'-Eintraege in COURSE_MILESTONES.md gefunden." -ForegroundColor Yellow
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
