<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: lektion-11-terminal-und-shell-grundlagen/aufgaben.md -->

# Lektion 11: Aufgaben – Terminal- und Shell-Grundlagen

Diese Aufgaben helfen dir, die Befehle aus der Lektion praktisch zu üben. Öffne VS Code Terminal und arbeite die Aufgaben der Reihe nach durch.

---

## Aufgabe 1: Terminal öffnen und orientieren

**Was du lernst:** Terminal öffnen und die erste Navigation.

**Anleitung:**

1. Öffne VS Code (falls nicht bereits offen)
2. Öffne das Terminal: **Ctrl+Backtick** (Windows/Linux) oder **Cmd+Backtick** (macOS)
3. Du solltest einen Prompt (mit `>` oder `$`) sehen
4. Tippe `pwd` (Bash/Zsh) oder `Get-Location` (PowerShell) und drücke Enter
5. Du solltest einen Pfad sehen, der zu deinem Kurs-Ordner führt

**Erfolgskriterium:** Du siehst den Pfad deines aktuellen Ordners.

---

## Aufgabe 2: Ordnerstruktur erkunden

**Was du lernst:** Mit `ls` die Inhalte deines Kurs-Ordners sehen.

**Anleitung:**

1. Im Terminal: Tippe `ls` (Bash/Zsh) oder `Get-ChildItem` (PowerShell)
2. Du solltest folgende Ordner/Dateien sehen:
   - `course/`
   - `apps/`
   - `tools/`
   - `README.md`
   - Eventuell `.git/` (versteckter Ordner)
3. Falls du `.git/` nicht siehst, tippe `ls -a` (Bash/Zsh) oder `Get-ChildItem -Force` (PowerShell)

**Erfolgskriterium:** Du kannst die Inhalte deines Kurs-Ordners aufzählen.

---

## Aufgabe 3: In Ordner wechseln

**Was du lernst:** Mit `cd` navigieren.

**Anleitung:**

1. Im Terminal: `cd course`
2. Bestätige mit `pwd` – du solltest einen Pfad sehen, der auf `course` endet
3. Tippe `ls` – du solltest Unterordner wie `course-library/`, `kursmodule/`, `uebungen/` sehen
4. Wechsle in `cd kursmodule`
5. Tippe `ls` – du solltest Ordner wie `01-Onboarding-in-den-Kurs/`, `02-produktbeschreibung-...` sehen
6. Gehe zwei Ebenen zurück: `cd ../..`
7. Bestätige mit `pwd` – du solltest wieder im Kurs-Ordner sein

**Erfolgskriterium:** Du kannst mit `cd` navigieren und mit `pwd` deine Position bestätigen.

---

## Aufgabe 4: Mit Tab-Autocomplete schneller navigieren

**Was du lernst:** Tab-Taste für schnellere Navigation nutzen.

**Anleitung:**

1. Im Kurs-Ordner: Tippe `cd co` (nur die ersten Buchstaben von "course")
2. Drücke **Tab** – das Terminal sollte zu `cd course` ergänzen
3. Drücke Enter
4. Tippe `cd k` (für "kursmodule")
5. Drücke **Tab** – sollte zu `cd kursmodule` ergänzen
6. Drücke Enter
7. Tippe `cd 01` (für "01-Onboarding-...")
8. Drücke **Tab** – sollte ergänzen
9. Drücke Enter
10. Tippe `ls` und schau die Lektionen-Ordner an

**Erfolgskriterium:** Tab-Autocomplete funktioniert und spart dir Tipparbeit.

---

## Aufgabe 5: Neue Ordner und Dateien anlegen

**Was du lernst:** Mit `mkdir`, `touch`, `ls` arbeiten.

**Anleitung:**

1. Navigiere zu `cd ~/Desktop` (oder auf Windows: `cd $HOME\Desktop`)
2. Erstelle einen Test-Ordner: `mkdir terminal-test`
3. Wechsle hinein: `cd terminal-test`
4. Erstelle drei Test-Dateien:
   - `touch note1.md`
   - `touch note2.md`
   - `touch script.ps1` (oder `script.sh` auf macOS/Linux)
5. Zeige alle Dateien: `ls` oder `Get-ChildItem`
6. Du solltest die drei Dateien sehen

**Erfolgskriterium:** Du hast einen Ordner mit drei Dateien erstellt.

---

## Aufgabe 6: Dateien kopieren und verschieben

**Was du lernst:** `cp` und `mv` praktizieren.

**Anleitung:**

1. Du bist noch in `terminal-test` Ordner
2. Kopiere `note1.md` zu `note1-backup.md`: `cp note1.md note1-backup.md`
3. Bestätige mit `ls` – du solltest jetzt 4 Dateien sehen (die Original + die Kopie)
4. Verschiebe `script.ps1` zu `script-alt.ps1`: `mv script.ps1 script-alt.ps1`
5. Bestätige mit `ls` – die alte Datei sollte weg sein, die neue da

**Erfolgskriterium:** Du hast Dateien kopiert und umbenannt.

---

## Aufgabe 7: Dateiinhalte ansehen mit `cat`

**Was du lernst:** Mit `cat` Dateien anzuschauen (und `echo` zum Schreiben nutzen).

**Anleitung:**

1. Du bist noch in `terminal-test`
2. Schreibe Inhalt in eine Datei (und siehe was `echo` und `>` tun):
   ```bash
   echo "Das ist meine erste Notiz" > note1.md
   ```
3. Zeige den Inhalt: `cat note1.md`
4. Du solltest den Text sehen: "Das ist meine erste Notiz"
5. Schreibe mehr Inhalt (mit `>>` wird hinzugefügt statt überschrieben):
   ```bash
   echo "Das ist eine zweite Zeile" >> note1.md
   ```
6. Schau noch einmal: `cat note1.md`
7. Du solltest jetzt zwei Zeilen sehen

**Erfolgskriterium:** Du kannst Dateien schreiben und mit `cat` ansehen.

---

## Aufgabe 8: Mit `find` nach Dateien suchen

**Was du lernst:** `find` zum Suchen nutzen.

**Anleitung:**

1. Navigiere zurück zum Kurs-Ordner: `cd ../../..` (oder `cd ~` + Kurs-Pfad)
2. Suche alle Markdown-Dateien: `find . -name "*.md"`
3. Du solltest viele Dateien sehen (README.md, verschiedene Lektionen, etc.)
4. Suche nur im `course/` Ordner: `find course -name "*.md"`
5. Suche nur nach Ordnern namens "01-*": `find course/kursmodule -type d -name "01-*"`
6. Du solltest den Onboarding-Ordner sehen

**Erfolgskriterium:** Du kannst mit `find` nach Dateien und Ordnern suchen.

---

## Aufgabe 9: Aufräumen (Löschen der Test-Dateien)

**Was du lernst:** Mit `rm` und `rmdir` aufräumen.

**Anleitung:**

1. Navigiere zum Test-Ordner (falls nicht dort): `cd ~/Desktop/terminal-test`
2. Lösche einzelne Dateien:
   ```bash
   rm note1.md
   rm note1-backup.md
   rm note2.md
   rm script-alt.ps1
   ```
3. Bestätige mit `ls` – der Ordner sollte leer sein
4. Gehe ein Verzeichnis nach oben: `cd ..`
5. Lösche den leeren Ordner: `rmdir terminal-test`
6. Bestätige mit `ls` – `terminal-test` sollte weg sein

**Erfolgskriterium:** Du hast den Test-Ordner und alle Dateien gelöscht.

---

## Aufgabe 10: Wiederholung – Vollständiger Workflow

**Was du lernst:** Alle bisherigen Befehle in einem praktischen Szenario.

**Anleitung:**

Stelle dir vor: Du hast neue Notizen im Kurs und möchtest diese sichern.

1. **Orientiere dich:**
   - `pwd` – wo bist du?
   - `ls` – was ist hier?

2. **Navigiere zur Übung:**
   - `cd course/uebungen`
   - `ls` – welche Übungen gibt es?

3. **Suche für ein Pattern:**
   - `find . -name "meilenstein-*.md"`
   - Wie viele Übungen gibt es?

4. **Schaue eine Datei an:**
   - `cat meilenstein-01-uebung-01.md | head -20` (zeigt erste 20 Zeilen)
   - Oder einfach: `cat meilenstein-01-uebung-01.md`

5. **Gehe zurück zur Root:**
   - `cd ../..`
   - `pwd` – bestätige, dass du im Kurs-Ordner bist

**Erfolgskriterium:** Du verstehst den kompletten Workflow und kannst selbstständig navigieren.

---

## Bonusaufgabe: Eigenes kleines Script schreiben

**Was du lernst:** Grundlagen von Scripting.

**Anleitung (für macOS/Linux – Bash/Zsh):**

1. Erstelle ein Script:
   ```bash
   touch mein-script.sh
   ```

2. Schreib Befehle hinein (mit `echo` und Umleitung `>`):
   ```bash
   echo "#!/bin/bash" > mein-script.sh
   echo "echo 'Hallo aus meinem Script!'" >> mein-script.sh
   echo "pwd" >> mein-script.sh
   echo "ls -la" >> mein-script.sh
   ```

3. Mache das Script ausführbar:
   ```bash
   chmod +x mein-script.sh
   ```

4. Führe es aus:
   ```bash
   ./mein-script.sh
   ```

5. Du solltest sehen:
   - "Hallo aus meinem Script!"
   - Deinen aktuellen Ordner (pwd)
   - Inhalte des Ordners (ls)

**Für Windows – PowerShell:**

1. Erstelle ein Script:
   ```powershell
   New-Item "mein-script.ps1"
   ```

2. Schreib Befehle rein:
   ```powershell
   Add-Content "mein-script.ps1" "Write-Host 'Hallo aus meinem Script!'"
   Add-Content "mein-script.ps1" "Get-Location"
   Add-Content "mein-script.ps1" "Get-ChildItem"
   ```

3. Führe es aus:
   ```powershell
   .\mein-script.ps1
   ```

**Erfolgskriterium:** Dein Script läuft und zeigt Output.

---

## Zusammenfassung

Du hast jetzt praktisch gelernt:
- ✅ Terminal öffnen und navigieren
- ✅ Ordner und Dateien erstellen
- ✅ Dateien kopieren, verschieben, löschen
- ✅ Inhalte ansehen und suchen
- ✅ Erste Script-Erfahrung

Mit diesen Grundlagen bist du bereit, im Kurs Git-Befehle im Terminal zu nutzen!
