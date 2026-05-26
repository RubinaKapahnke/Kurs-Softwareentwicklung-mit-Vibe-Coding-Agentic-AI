<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 11-terminal-und-shell-grundlagen.md -->

# Lektion 11: Terminal- und Shell-Grundlagen

## Ziel

Du verstehst, was Terminal und Shell sind, kannst dich sicher im Dateisystem bewegen und kennst die wichtigsten Shell-Befehle für die Arbeit in diesem Kurs. Du weißt, wie du das Terminal in VS Code nutzt und wie Autocomplete dich beim Tippen unterstützt.

---

## Kapitel 1: Was sind Terminal und Shell?

### Terminal: Das Fenster zum Dateisystem

Das **Terminal** (auch genannt: Konsole, Command Line, Befehlszeile) ist ein Text-basiertes Fenster, in das du Befehle schreibst und aus dem du Text-Ergebnisse siehst – statt Symbole anzuklicken wie in einer grafischen Oberfläche.

- **Terminal = Fenster/Schnittstelle** – das ist die Anwendung, die sich öffnet (z. B. Terminal.app auf macOS, PowerShell-Fenster auf Windows)
- **Shell = das Programm dahinter** – das die Befehle interpretiert und ausführt (z. B. Bash, PowerShell, Zsh)

### Shell: Das Betriebssystem-Sprachrohr

Die **Shell** ist das Programm, das:
- deine Befehle liest und versteht
- sie an das Betriebssystem weiterleitet
- Fehler oder Ergebnisse anzeigt

Eine Shell ist wie ein Übersetzer zwischen dir (menschliche Befehle) und dem Computer (Maschinen-Befehle).

### Warum beide gemeinsam wichtig sind

Im Alltag sagt man oft "Terminal" oder "Shell" synonymisch – was technisch nicht ganz korrekt ist, aber pragmatisch verständlich. Für dich bedeutet das:

- **Im Kurs:** Du wirst immer in einem Terminal-Fenster arbeiten.
- **Die Shell wechselt je nach Betriebssystem:** Windows → PowerShell oder Bash; macOS → Bash (Standard)
- **Alle Befehle funktionieren in der Shell** – nicht in der Oberfläche mit Mausklicks.

---

## Kapitel 2: CLI vs. GUI – Text statt Symbole

### GUI (Grafische Benutzeroberfläche)

**GUI** = Graphical User Interface

- Du klickst auf Symbole, Menüs, Schaltflächen
- Beispiel: VS Code mit Mausklicks, GitHub.com im Browser
- **Vorteil:** Anfängerfreundlich, sichtbar, intuitiv
- **Nachteil:** Langsam für wiederholte Aufgaben, schwer zu automatisieren

### CLI (Kommandozeilen-Schnittstelle)

**CLI** = Command Line Interface

- Du schreibst Befehle als Text
- Beispiel: `git commit -m "Meine Änderung"` statt zehn Mausklicks
- **Vorteil:** Schnell, präzise, wiederholbar, automatisierbar
- **Nachteil:** Muss man die Befehle kennen, weniger visuelles Feedback

### Im Kurs: Warum CLI?

Im Kurs brauchst du die CLI aus mehreren Gründen:

1. **Git funktioniert am schnellsten über die Kommandozeile**
2. **Build-Tools** (z. B. `npm run build`) funktionieren nur im Terminal
3. **Navigation zum richtigen Projekt-Ordner** ist im Terminal einfacher und sicherer
4. **Viele Fehler werden erst im Terminal sichtbar**

CLI + GUI ergänzen sich im Kurs – du nutzt den Browser für einfache Übungen und die CLI für komplexere Workflows.

---

## Kapitel 3: Was ist Scripting?

### Scripting: Befehle automatisieren

**Scripting** bedeutet, mehrere Befehle in eine Datei zu schreiben, sodass sie nacheinander und automatisch ablaufen – statt jeden Befehl manuell einzutippen.

### Einfaches Beispiel: Ein einfaches Script

Statt jedes Mal:
```bash
cd ~/Projekte/mein-kurs
git status
git add .
git commit -m "Update"
git push
```

Schreibst du diese Befehle einmal in eine Datei (z. B. `auto-push.sh` auf macOS/Linux oder `auto-push.ps1` auf Windows) und führst sie mit einem einzigen Befehl aus:

```bash
./auto-push.sh
```

### Warum ist das hilfreich?

- **Zeitersparnis:** Wiederholte Workflows werden schneller
- **Fehlerreduktion:** Weniger manuelle Tipp-Fehler
- **Automatisierung:** Scripts können im Hintergrund oder zeitgesteuert laufen
- **In diesem Kurs:** Wir nutzen Scripts später für Test-Routinen und Build-Prozesse (z. B. `npm run sync-content`)

### Im Kurs relevant?

Für die ersten Lektionen brauchst du nicht selbst zu scripten. Aber:
- In `package.json` siehst du vordefinierte Scripts (z. B. `"build": "ng build"`)
- Mit `npm run <script-name>` führst du diese Scripts aus
- Das ist im Grunde deine erste Script-Erfahrung

---

## Kapitel 4: Bekannte Shells im Überblick

### Unix-ähnliche Shells (macOS, Linux)

| Shell | Typisch auf | Besonderheit | Für Anfänger? |
|-------|-------------|--------------|--------------|
| **Bash** | macOS (alt), Linux | Standard seit Jahrzehnten, sehr verbreitet | ✅ Ja, leicht zu lernen |
| **Zsh** | macOS (neu, seit Big Sur) | Modern, besser als Bash, Autocomplete | ✅ Ja, ähnlich wie Bash |
| **Dash** | Linux, macOS | Minimalistisch, schnell, als `sh` bekannt | ⚠ Zu Anfang kompliziert |
| **Fish** | Linux, macOS (optional) | Sehr benutzerfreundlich, Autocomplete-Highlight | ✅ Anfängerfreundlich |
| **Tcsh** | Veraltet | Alte Unix-Shell, heute selten | ❌ Nicht nötig |
| **Ksh** | Veraltet | Kommerzielle Shell, heute selten | ❌ Nicht nötig |

### Windows Shells

| Shell | Typisch auf | Besonderheit | Für Anfänger? |
|-------|-------------|--------------|--------------|
| **PowerShell (7+)** | Windows, modern | Microsofts moderne Sprache, objekt-orientiert | ✅ Ja, mit Umgewöhnung |
| **Cmd (cmd.exe)** | Windows, alt | Alter Windows-Standard, begrenzt | ⚠ Veraltet, nicht empfohlen |
| **Bash (WSL/Git Bash)** | Windows (via Emulation) | Unix-Befehle auf Windows, für Lernende hilfreich | ✅ Ja, einfacher |

---

## Kapitel 5: Windows und macOS – Welche Shell nutzen wir?

### Ziel dieses Kapitels

Damit du nicht verwirrt wirst: Wir machen es dir einfach. Hier ist die klare Anweisung für deinen Kurs.

### Windows: PowerShell ODER Bash (deine Wahl)

Auf Windows hast du zwei Möglichkeiten:

#### Option A: PowerShell (empfohlen für Windows-Neulinge)
- Ist auf Windows vorinstalliert
- Befehle sehen anders aus als auf macOS (z. B. `Get-ChildItem` statt `ls`)
- Funktioniert, aber braucht etwas Umgewöhnung

#### Option B: Bash (empfohlen für Lernende, die später Linux nutzen)
- Brauchst Git Bash oder Windows Subsystem for Linux (WSL)
- Befehle sind gleich wie auf macOS und Linux
- Einfacher, wenn du diese Lektion später auf anderen Systemen wiederholst

**Unsere Empfehlung für dich:** Wenn du neu mit Terminal-Befehlen bist, nimm Bash. Die Befehle sind kürzer und du lernst etwas, das auf jedem System funktioniert.

**Im Kurs:** Wir zeigen dir Befehle für Bash/Zsh. Falls du PowerShell nutzt, sagen wir dir die Alternative.

### macOS: Bash (Standard)

- Auf macOS ist Bash (oder Zsh, eine moderne Version von Bash) vorinstalliert
- Du brauchst nichts extra zu installieren
- Alle Befehle dieser Lektion funktionieren sofort

**Im Kurs:** Bash-Befehle funktionieren auf deinem Mac direkt.

---

## Kapitel 6: Das Terminal in VS Code nutzen

### Das Terminal öffnen

**Keyboard-Shortcut:**
- **Windows/Linux:** `Ctrl+Backtick` (Backtick = `` ` `` neben der 1)
- **macOS:** `Cmd+Backtick`

**Menü:**
- Terminal → New Terminal (oben in der Menüleiste)

Nach dem Öffnen siehst du oben im Terminal deinen aktuellen Ordner als Pfad.

### Terminal-Grundlagen in VS Code

- **Prompt `>`:** Das ist die Eingabezeile – hier tippst du Befehle ein
- **Ausgabe:** Unter dem Befehl siehst du das Ergebnis oder Fehler
- **Mehrere Terminals:** Du kannst mehrere Terminal-Reiter öffnen (+ Button oben rechts)
- **Terminal teilen:** Mit dem "Split Terminal"-Symbol kannst du zwei Terminals nebeneinander sehen

### Die richtige Working Directory (Ordner)

Wenn du VS Code öffnest, öffnet sich das Terminal im Kurs-Ordner. Das ist wichtig:

```bash
# Du solltest sehen (oder ähnlich):
~/kurs-verzeichnis $
```

Falls nicht, navigiere dahin:

```bash
cd /pfad/zum/kurs
```

### Fehlermeldungen im Terminal

Falls du einen Befehl eingibst und eine Fehlermeldung siehst:
- **Befehl nicht gefunden:** Überprüfe die Schreibweise
- **Keine Berechtigung (Permission denied):** Der Ordner/die Datei hat Schutz
- **Kein solcher Ordner:** Der Ordnerpfad existiert nicht

---

## Kapitel 7: Autocomplete im Terminal

### Was ist Autocomplete?

Wenn du anfängst, einen Befehl oder einen Ordnernamen zu tippen, kann die Shell dir helfen, ihn zu beenden – du tippst ein paar Buchstaben, drückst Tab, und der Rest wird automatisch ergänzt.

### Autocomplete aktivieren (Bash/Zsh auf macOS und Linux)

Auf macOS und Linux funktioniert Autocomplete **standardmäßig**:

1. Tippe einen Befehl an: `cd Do` (für einen Ordner "Documents")
2. Drücke **Tab**
3. Das Terminal ergänzt zu: `cd Documents`

Falls Autocomplete nicht funktioniert:
- Prüfe, dass du Bash oder Zsh nutzt (nicht Dash)
- Starte das Terminal neu

### Autocomplete auf Windows (PowerShell)

PowerShell hat auch Autocomplete, aber es funktioniert mit **Ctrl+Space** statt Tab:

```powershell
cd Do[Ctrl+Space]
```

### Autocomplete in VS Code Terminal

VS Code hat zusätzliche Autocomplete-Features:
- **Tab-Taste:** Ergänzt Befehlsnamen und Dateipfade
- **Pfeiltasten (↑/↓):** Navigiert durch die Befehlshistorie (letzte Befehle)
- **Intelligente Vorschläge:** Nach einiger Nutzung lernt VS Code, welche Befehle du häufig nutzt

### Tipps für schnelleres Arbeiten

- **Pfade abkürzen:** `cd ~/k` + Tab → `cd ~/kurs` (oder ähnlich)
- **Befehlshistorie:** Oben-Pfeil (↑), um den letzten Befehl zu holen
- **Doppel-Tab:** Falls mehrere Optionen passen, zeigt doppeltes Tab alle Möglichkeiten

---

## Kapitel 8: Shell-Befehle für Datei- und Verzeichnisverwaltung

### 8.1 Den aktuellen Ordner anzeigen: `pwd` und `Get-Location`

**Was tut es:** Zeigt den **absoluten Pfad** deines aktuellen Ordners.

**Unix/Bash/Zsh:**
```bash
pwd
# Output: /Users/deinname/Projekte/mein-kurs
```

**PowerShell:**
```powershell
Get-Location
# Output: C:\Users\deinname\Projekte\mein-kurs
```

**Übung:** Öffne VS Code Terminal und tippe `pwd` (oder `Get-Location`). Sieh dir deinen Pfad an.

### 8.2 Inhalte eines Ordners anzeigen: `ls` und `Get-ChildItem`

**Was tut es:** Zeigt alle **Dateien und Ordner** im aktuellen Verzeichnis.

**Unix/Bash/Zsh:**
```bash
ls
# Output:
# README.md   course/   apps/   tools/   CHANGELOG.md
```

**PowerShell:**
```powershell
Get-ChildItem
# Output:
#     Directory: C:\Users\deinname\Projekte\mein-kurs
# 
# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----         09.05.2026     14:32                course
# d-----         09.05.2026     14:32                apps
# d-----         09.05.2026     14:32                tools
# -a----         09.05.2026     14:32           1234 README.md
```

**Mit versteckten Dateien (Dateien, die mit `.` anfangen):**

```bash
# Bash/Zsh:
ls -a
# oder
ls -la  # mit Details

# PowerShell:
Get-ChildItem -Force
# oder
Get-ChildItem -Force | Format-Table
```

**Übung:**
1. Tippe `ls` (oder `Get-ChildItem`) im Kurs-Ordner
2. Du solltest Ordner wie `course/`, `apps/`, `tools/` sehen
3. Tippe `ls -la` (oder `Get-ChildItem -Force`) und schaue, ob noch mehr Dateien auftauchen (z. B. `.git/`, `.gitignore`)

### 8.3 Zwischen Ordnern wechseln: `cd`

**Was tut es:** **Change Directory** – wechselt in einen anderen Ordner.

**Syntax:**
```bash
cd <ordnername>
```

**Beispiele:**

```bash
# Zum Ordner "course" wechseln (relativ)
cd course

# Ein Verzeichnis nach oben wechseln
cd ..

# Zwei Verzeichnisse nach oben
cd ../..

# Zur Startseite deines Benutzers
cd ~

# Zu einem absoluten Pfad (auf Unix/macOS)
cd /Users/deinname/Projekte/kurs

# Zu einem absoluten Pfad (auf Windows mit Bash)
cd /c/Users/deinname/Projekte/kurs

# Zu einem absoluten Pfad (auf Windows mit PowerShell)
cd C:\Users\deinname\Projekte\kurs
```

**Mit Leerzeichen im Ordnernamen:** Nutze Anführungszeichen:
```bash
cd "Mein Ordner"
```

**Übung:**
1. Du bist im Kurs-Ordner. Wechsle in `cd course`
2. Tippe `pwd`, um zu bestätigen, dass du dort bist
3. Wechsle `cd ..` zurück zum Kurs-Ordner
4. Wechsle in `cd apps/onboarding` (mit Slash dazwischen)
5. Tippe `pwd` zur Bestätigung

### 8.4 Text auf dem Bildschirm ausgeben: `echo`

**Was tut es:** Gibt Text aus, den du schreibst.

**Syntax:**
```bash
echo "Dein Text hier"
```

**Beispiele:**

```bash
# Einfacher Text
echo "Hallo Welt"
# Output: Hallo Welt

# Mit Variablen (deinen aktuellen Ordner)
echo "Ich bin in $PWD"
# Output: Ich bin in /Users/deinname/kurs

# Mit Leerzeilen
echo
```

**Wofür das nützlich ist:**
- In Scripts: um zu zeigen, was gerade passiert
- Um Umgebungsvariablen zu checken (z. B. `echo $PWD`)

**Übung:**
1. Tippe `echo "Ich lerne Terminal-Befehle"`
2. Du solltest die Nachricht sehen
3. Tippe `echo $PWD`, um deinen aktuellen Pfad zu sehen

### 8.5 Einen neuen Ordner anlegen: `mkdir`

**Was tut es:** **Make Directory** – erstellt einen neuen, leeren Ordner.

**Syntax:**
```bash
mkdir <ordnername>
```

**Beispiele:**

```bash
# Einen Ordner anlegen
mkdir mein-projekt

# Mehrere Ordner auf einmal
mkdir ordner1 ordner2 ordner3

# Verschachtelte Ordner auf einmal (mit -p)
mkdir -p tief/verschachtelter/pfad
# Das erstellt tief/, tief/verschachtelter/, tief/verschachtelter/pfad/
```

**PowerShell:**
```powershell
New-Item -ItemType Directory -Name "mein-projekt"
```

**Übung:**
1. Im Kurs-Ordner: `mkdir test-ordner`
2. Tippe `ls` – du solltest `test-ordner` sehen
3. Lösche ihn danach: `rmdir test-ordner`

### 8.6 Eine leere Datei anlegen: `touch`

**Was tut es:** Erstellt eine neue, leere Datei mit einem Dateinamen.

**Syntax:**
```bash
touch <dateiname>
```

**Beispiele:**

```bash
# Eine Markdown-Datei
touch README.md

# Eine Python-Datei
touch main.py

# Mehrere Dateien
touch file1.txt file2.txt file3.txt
```

**PowerShell:**
```powershell
New-Item -ItemType File -Name "README.md"
# oder (verkürzt):
New-Item "README.md"
```

**Übung:**
1. Im Kurs-Ordner: `touch test.md`
2. Tippe `ls` – du solltest `test.md` sehen
3. Lösche sie danach: `rm test.md`

### 8.7 Ein Verzeichnis löschen: `rmdir` und `rm -r`

**Was tut es:** Löscht einen **leeren** Ordner.

**Syntax:**
```bash
rmdir <ordnername>
```

**Beispiele:**

```bash
# Einen leeren Ordner löschen
rmdir mein-projekt

# Wenn der Ordner nicht leer ist → Fehler!
rmdir nicht-leerer-ordner
# Fehler: Directory not empty
```

**Wenn der Ordner nicht leer ist:** Nutze `rm -r`.

**PowerShell:**
```powershell
Remove-Item -Path "ordnername" -Force
# oder für einen nicht-leeren Ordner:
Remove-Item -Path "ordnername" -Recurse -Force
```

**Übung:**
1. `mkdir test-ordner`
2. `rmdir test-ordner` – sollte funktionieren
3. `mkdir nicht-leer && touch nicht-leer/datei.txt` – einen nicht-leeren Ordner erstellen
4. Versuche `rmdir nicht-leer` – siehst du die Fehlermeldung?

### 8.8 Eine Datei löschen: `rm`

**Was tut es:** **Remove** – löscht eine Datei oder einen Ordner mit Inhalt.

**Syntax:**
```bash
rm <dateiname>               # Datei löschen
rm -r <ordnername>           # Ordner mit Inhalt löschen
```

**Beispiele:**

```bash
# Datei löschen
rm datei.txt

# Ordner mit Inhalt löschen (R = Rekursiv)
rm -r mein-ordner

# Mehrere Dateien löschen
rm datei1.txt datei2.txt datei3.txt

# Ordner mit Inhalt, ohne Bestätigung
rm -rf mein-ordner   # Achtung: -f = Force, keine Bestätigung!
```

**⚠ Warnung:** `rm` ist **nicht rückgängig zu machen**. Sei vorsichtig!

**PowerShell:**
```powershell
Remove-Item "datei.txt"
Remove-Item "ordner" -Recurse -Force
```

**Übung:**
1. `touch zu-loeschen.txt`
2. `rm zu-loeschen.txt`
3. `ls` – die Datei sollte weg sein

### 8.9 Verzeichnis wechseln und auflisten: `ls` und `cd` zusammen

**Praktisches Pattern:** Oftmals nutzt du `ls` und `cd` zusammen.

**Beispiel-Workflow:**

```bash
# 1. Schau, was im aktuellen Ordner ist
ls

# 2. Sehe einen Ordner "course"
# Output:
# README.md   course/   apps/   tools/

# 3. Wechsle hinein
cd course

# 4. Schau, was dort drin ist
ls

# 5. Wechsle in einen Unterordner
cd uebungen

# 6. Schau dir Dateien an
ls -la

# 7. Gehe zwei Ebenen nach oben
cd ../..

# 8. Bestätige, wo du jetzt bist
pwd
```

**Übung:**
1. Mache diesen Workflow durch
2. Navigiere zu `course/01-course-modules/`
3. Schaue mit `ls`, welche Ordner dort sind
4. Wechsle in einen Ordner (z. B. `cd 01-*` und drücke Tab zum Auto-Complete)
5. Wechsle zurück zum Kurs-Ordner: `cd ../../..`

### 8.10 Dateityp verschieben: `mv`

**Was tut es:** **Move** – verschiebt eine Datei oder benennt sie um.

**Syntax:**
```bash
mv <quelle> <ziel>
```

**Beispiele:**

```bash
# Datei umbenennen (von alt.txt zu neu.txt)
mv alt.txt neu.txt

# Datei in einen Ordner verschieben
mv datei.txt ordner/

# Ordner verschieben
mv alter-ordner-name neuer-ordner-name

# Absolut-Pfade
mv /pfad/zu/datei.txt /neuer/pfad/datei.txt
```

**PowerShell:**
```powershell
Move-Item "alt.txt" "neu.txt"
```

## Was ist zu tun

1. Öffne VS Code Terminal und prüfe mit `pwd` oder `Get-Location`, in welchem Ordner du bist.
2. Erkunde mit `ls` oder `Get-ChildItem` die Struktur deines Kurs-Ordners.
3. Wechsle mit `cd` in Unterordner und wieder zurück.
4. Lege Test-Dateien und Test-Ordner an und räume sie wieder auf.
5. Nutze Tab-Autocomplete, um schneller zwischen Ordnern zu wechseln.
6. Schreibe und starte ein kleines Test-Script.

## Hilfreiche Links

- [Terminal-Grundlagen in VS Code](https://code.visualstudio.com/docs/terminal/basics)
- [PowerShell-Dokumentation](https://learn.microsoft.com/de-de/powershell/)
