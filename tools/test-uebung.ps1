# test-uebung.ps1
# Prüft eine einzelne Übungsdatei gegen den Übungsstandard.
#
# Aufruf:
#   .\tools\test-uebung.ps1 -File "course/02-course-exercises/meilenstein-02-uebung-01.md"
#
# Rueckgabewert: Exit-Code 0 = alles OK, 1 = mindestens ein Fehler

param(
    [Parameter(Mandatory)]
    [string]$File
)

$ErrorActionPreference = "Stop"

$passed  = 0
$failed  = 0
$results = @()

function Test-Check {
    param([string]$Name, [bool]$Condition, [string]$Hint = "")
    if ($Condition) {
        $script:passed++
        $results += [PSCustomObject]@{ Status = "OK  "; Name = $Name; Hint = "" }
    } else {
        $script:failed++
        $results += [PSCustomObject]@{ Status = "FAIL"; Name = $Name; Hint = $Hint }
    }
}

# --- Datei laden ---
if (-not (Test-Path $File)) {
    Write-Error "Datei nicht gefunden: $File"
    exit 1
}

$content = Get-Content $File -Raw -Encoding UTF8
$lines   = Get-Content $File -Encoding UTF8

# --- 1. Pflichtabschnitte vorhanden ---
$sections = @(
    @{ Heading = "## Vor dem Start";                       Hint = "Checkliste mit Voraussetzungen und Dateiliste fehlt" },
    @{ Heading = "## Modulabdeckung";                      Hint = "Abschnitt 'Modulabdeckung (Check)' fehlt" },
    @{ Heading = "## Wiederholung aus frueheren";          Hint = "Abschnitt 'Wiederholung aus frueheren Meilensteinen' fehlt" },
    @{ Heading = "## Abgabe";                              Hint = "Abschnitt 'Abgabe' mit Checkboxen fehlt" },
    @{ Heading = "## Lernerfolgs-Kriterien";               Hint = "Abschnitt 'Lernerfolgs-Kriterien' fehlt" }
)

foreach ($s in $sections) {
    Test-Check `
        -Name "Pflichtabschnitt vorhanden: '$($s.Heading)'" `
        -Condition ($content -match [regex]::Escape($s.Heading)) `
        -Hint $s.Hint
}

# --- 2. Jede Aufgabe (### N.) hat eine Quelle-Zeile ---
$aufgabenIndices = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '^### \d+\.') {
        $aufgabenIndices += $i
    }
}

foreach ($idx in $aufgabenIndices) {
    $aufgabenTitel = $lines[$idx].Trim()
    # Suche Quelle: innerhalb der nächsten 60 Zeilen (bis zur nächsten Aufgabe oder ---) 
    $nextStop = [Math]::Min($idx + 60, $lines.Count - 1)
    $hasQuelle = $false
    for ($j = $idx + 1; $j -le $nextStop; $j++) {
        if ($lines[$j] -match '^Quelle:') { $hasQuelle = $true; break }
        if ($lines[$j] -match '^### \d+\.') { break }
    }
    Test-Check `
        -Name "Quelle vorhanden bei: '$aufgabenTitel'" `
        -Condition $hasQuelle `
        -Hint "Direkt unter der Aufgabenbeschreibung fehlt 'Quelle: [...]'"
}

# --- 3. git status + git branch vor Git-Aktionsbloecken ---
$hasGitActions = $content -match 'git (checkout|add|push)'
if ($hasGitActions) {
    Test-Check `
        -Name "git status im Dokument vorhanden" `
        -Condition ($content -match 'git status') `
        -Hint "Vor git-Befehlen muss 'git status' als Status-Check stehen"
    Test-Check `
        -Name "git branch im Dokument vorhanden" `
        -Condition ($content -match 'git branch') `
        -Hint "Vor git-Befehlen muss 'git branch' als Status-Check stehen"
}

# --- 4. .github/-Referenz hat Strg+P-Tipp ---
if ($content -match '\.github/') {
    Test-Check `
        -Name "Strg+P-Tipp bei .github/-Referenz vorhanden" `
        -Condition ($content -match 'Strg\+P') `
        -Hint "Wenn .github/ referenziert wird, muss ein Strg+P-Navigations-Tipp folgen"
}

# --- 5. Lernerfolgs-Kriterien hat mindestens 3 Checkboxen ---
$kriterienMatch = [regex]::Match($content, '## Lernerfolgs-Kriterien([\s\S]*?)(\Z|^## )', [System.Text.RegularExpressions.RegexOptions]::Multiline)
$checkboxCount = 0
if ($kriterienMatch.Success) {
    $checkboxCount = ([regex]::Matches($kriterienMatch.Groups[1].Value, '- \[ \]')).Count
}
Test-Check `
    -Name "Lernerfolgs-Kriterien: mindestens 3 Checkboxen ($checkboxCount gefunden)" `
    -Condition ($checkboxCount -ge 3) `
    -Hint "Mindestens 3 beobachtbare Kriterien als '- [ ]' Checkboxen eintragen"

# --- 6. Abgabe hat mindestens 1 Checkbox ---
$abgabeMatch = [regex]::Match($content, '## Abgabe([\s\S]*?)(\Z|^## )', [System.Text.RegularExpressions.RegexOptions]::Multiline)
$abgabeCheckboxCount = 0
if ($abgabeMatch.Success) {
    $abgabeCheckboxCount = ([regex]::Matches($abgabeMatch.Groups[1].Value, '- \[ \]')).Count
}
Test-Check `
    -Name "Abgabe: mindestens 1 Checkbox ($abgabeCheckboxCount gefunden)" `
    -Condition ($abgabeCheckboxCount -ge 1) `
    -Hint "Abgabe-Abschnitt muss mindestens eine '- [ ]' Checkbox enthalten"

# --- 7. Keine vorbefuellten [x]-Checkboxen in Abgabe oder Lernerfolgs-Kriterien ---
$abgabeKriterienBlock = ''
$abgabeKriterienMatch = [regex]::Match($content, '(## Abgabe[\s\S]*)', [System.Text.RegularExpressions.RegexOptions]::Multiline)
if ($abgabeKriterienMatch.Success) {
    $abgabeKriterienBlock = $abgabeKriterienMatch.Groups[1].Value
}
$prefilled = ([regex]::Matches($abgabeKriterienBlock, '- \[x\]')).Count
Test-Check `
    -Name "Keine vorbefuellten [x]-Checkboxen in Abgabe/Lernerfolgs-Kriterien ($prefilled gefunden)" `
    -Condition ($prefilled -eq 0) `
    -Hint "Checkboxen in Abgabe und Lernerfolgs-Kriterien müssen '- [ ]' sein (nicht '- [x]') - Lernende sollen selbst abhaken"

# --- 8. Keine Zeitangaben ---
$zeitPattern = '\d+[\s-]+\d*\s*(Minuten|Stunden|min\b)|Zeitbox|empfohlen:\s*\d'
Test-Check `
    -Name "Keine Zeitangaben im Dokument" `
    -Condition ($content -notmatch $zeitPattern) `
    -Hint "Zeitangaben wie 'X Minuten', 'Zeitbox' oder 'Empfohlen: ...' sind verboten"


# --- 9. "Wichtig - diese Datei nicht bearbeiten"-Hinweis vorhanden ---
Test-Check `
    -Name '"Wichtig - diese Datei nicht bearbeiten"-Hinweis vorhanden' `
    -Condition ($content -match 'Wichtig.*diese Datei nicht bearbeiten') `
    -Hint 'Nach der Dateiliste in "Vor dem Start" muss ein "Wichtig - diese Datei nicht bearbeiten"-Blockzitat stehen'

# --- 10. Kopier-Hinweise in Abgabe und Lernerfolgs-Kriterien vorhanden ---
$abgabeHasKopier = $false
if ($abgabeMatch.Success) {
    $abgabeHasKopier = $abgabeMatch.Groups[1].Value -match 'Kopiere diese Checkliste'
}
Test-Check `
    -Name '"Kopiere diese Checkliste"-Hinweis in Abgabe vorhanden' `
    -Condition $abgabeHasKopier `
    -Hint 'Abgabe-Abschnitt muss Blockzitat "Kopiere diese Checkliste in deine lernfortschritt_..." enthalten'

$kriterienHasKopier = $false
if ($kriterienMatch.Success) {
    $kriterienHasKopier = $kriterienMatch.Groups[1].Value -match 'Kopiere auch diese Checkliste'
}
Test-Check `
    -Name '"Kopiere auch diese Checkliste"-Hinweis in Lernerfolgs-Kriterien vorhanden' `
    -Condition $kriterienHasKopier `
    -Hint 'Lernerfolgs-Kriterien-Abschnitt muss Blockzitat "Kopiere auch diese Checkliste..." enthalten'

# --- 11. PR-nicht-gemerged-Tipp vor git checkout -b vorhanden ---
if ($content -match 'git checkout -b') {
    Test-Check `
        -Name '"Tipp - falls dein letzter PR nicht gemerged ist"-Block vorhanden' `
        -Condition ($content -match 'Tipp.*letzter PR|letzter PR.*nicht gemerged') `
        -Hint 'Vor dem ersten "git checkout -b" muss ein Blockzitat mit Option A + Option B für unvergegten PR stehen'
}
# --- Ausgabe ---
Write-Host ""
Write-Host "Prüfe: $File" -ForegroundColor Cyan
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
Write-Host ""

exit $(if ($failed -eq 0) { 0 } else { 1 })
