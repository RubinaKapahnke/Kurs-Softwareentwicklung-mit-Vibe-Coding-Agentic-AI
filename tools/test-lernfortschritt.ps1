# test-lernfortschritt.ps1
# Prueft alle lernfortschritt_*.md-Dateien auf Pflichtstruktur gemaess AGENTS.md.
#
# Aufruf (vom Repo-Root):
#   .\tools\test-lernfortschritt.ps1
#
# Rueckgabewert: Exit-Code 0 = alle OK, 1 = mindestens eine Datei fehlerhaft

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$lernFiles = Get-ChildItem -Path "$repoRoot\course\learners" -Recurse -Filter "lernfortschritt_*.md" | Sort-Object Name

if ($lernFiles.Count -eq 0) {
    Write-Host "Keine lernfortschritt_*.md-Dateien gefunden." -ForegroundColor Yellow
    exit 0
}

$totalFailed = 0

foreach ($file in $lernFiles) {
    $passed  = 0
    $failed  = 0
    $results = @()
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    function Test-Check {
        param([string]$Name, [bool]$Condition, [string]$Hint = "")
        if ($Condition) {
            $script:passed++
            $script:results += [PSCustomObject]@{ Status = "OK  "; Name = $Name; Hint = "" }
        } else {
            $script:failed++
            $script:results += [PSCustomObject]@{ Status = "FAIL"; Name = $Name; Hint = $Hint }
        }
    }

    # --- Pflichtabschnitte ---
    $pflichtAbschnitte = @(
        @{ Heading = "## Aktueller Fokus";              Hint = "Abschnitt '## Aktueller Fokus' fehlt" },
        @{ Heading = "## Abgeschlossene Meilensteine";  Hint = "Abschnitt '## Abgeschlossene Meilensteine' fehlt" },
        @{ Heading = "## Lernjournal";                  Hint = "Abschnitt '## Lernjournal' fehlt" },
        @{ Heading = "## Das moechte ich noch lernen";  Hint = "Abschnitt '## Das moechte ich noch lernen' fehlt (einmalig am Dateiende)" }
    )

    foreach ($s in $pflichtAbschnitte) {
        Test-Check `
            -Name "Pflichtabschnitt: '$($s.Heading)'" `
            -Condition ($content -match [regex]::Escape($s.Heading) -or $content -match 'Das m.{1,4}chte ich noch lernen') `
            -Hint $s.Hint
    }
    # Separater Test fuer "Das moechte ich noch lernen" mit Umlauten
    $hasMoechte = $content -match 'Das m.{0,10}chte ich noch lernen'
    $results = $results | Where-Object { $_.Name -notlike "*moechte*" }
    if ($hasMoechte) { $passed++ } else { $failed++ }
    $results += [PSCustomObject]@{
        Status = if ($hasMoechte) { "OK  " } else { "FAIL" }
        Name   = "Pflichtabschnitt: '## Das moechte ich noch lernen'"
        Hint   = if ($hasMoechte) { "" } else { "Abschnitt '## Das moechte ich noch lernen' fehlt (einmalig am Dateiende)" }
    }

    # --- "Fragen an die Gruppe" am Dateiende ---
    Test-Check `
        -Name "Abschnitt '## Fragen an die Gruppe' vorhanden" `
        -Condition ($content -match '## Fragen an die Gruppe') `
        -Hint "Abschnitt '## Fragen an die Gruppe' fehlt (einmalig am Dateiende)"

    # --- Kein "## Naechster kleiner Schritt"-Abschnitt (verboten laut AGENTS.md) ---
    Test-Check `
        -Name "Kein verbotener 'Naechster kleiner Schritt'-Abschnitt" `
        -Condition ($content -notmatch '(?m)^## .*(N.chster|naechster) kleiner Schritt') `
        -Hint "'## Naechster kleiner Schritt' ist verboten – naechster Schritt gehoert in den letzten Journaleintrag"

    # --- Lernjournal hat mindestens einen Eintrag (### DD.MM.) ---
    $journalEntries = ([regex]::Matches($content, '### \d{2}\.\d{2}\.?')).Count
    Test-Check `
        -Name "Lernjournal: mindestens 1 Eintrag (### DD.MM.) gefunden ($journalEntries)" `
        -Condition ($journalEntries -ge 1) `
        -Hint "Das Lernjournal sollte mindestens einen Eintrag im Format '### DD.MM. (...)' enthalten"

    # --- Ausgabe ---
    Write-Host ""
    Write-Host "Pruefe: $($file.Name)" -ForegroundColor Cyan
    Write-Host ("-" * 70)
    foreach ($r in $results) {
        $color = if ($r.Status -eq "OK  ") { "Green" } else { "Red" }
        Write-Host "  [$($r.Status)] $($r.Name)" -ForegroundColor $color
        if ($r.Hint) {
            Write-Host "         -> $($r.Hint)" -ForegroundColor Yellow
        }
    }
    Write-Host ("-" * 70)
    Write-Host "  Ergebnis: $passed OK, $failed FEHLER" -ForegroundColor $(if ($failed -eq 0) { "Green" } else { "Red" })

    if ($failed -gt 0) { $totalFailed++ }
}

Write-Host ""
Write-Host ("=" * 70)
if ($totalFailed -eq 0) {
    Write-Host "  ALLE $($lernFiles.Count) Lernfortschritt-Dateien bestanden." -ForegroundColor Green
} else {
    Write-Host "  $totalFailed von $($lernFiles.Count) Dateien haben Fehler." -ForegroundColor Red
}
Write-Host ("=" * 70)

exit $(if ($totalFailed -eq 0) { 0 } else { 1 })
