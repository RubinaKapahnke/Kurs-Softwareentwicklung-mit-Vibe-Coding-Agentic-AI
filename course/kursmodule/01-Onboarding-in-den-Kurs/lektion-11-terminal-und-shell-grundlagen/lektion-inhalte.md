# Lektion 11: Terminal- und Shell-Grundlagen

## Ziel

Du verstehst die wichtigsten Terminal-Befehle und kannst dich sicher in Ordnern bewegen.

## Was ist Terminal und was ist Shell?

- Das **Terminal** ist das Fenster, in dem du Befehle eingibst.
- Die **Shell** ist das Programm, das diese Befehle ausführt (z. B. PowerShell, Bash, Zsh).
- Im Kurs nutzt du das Terminal in VS Code, damit alles im Projektkontext bleibt.

## Kernbefehle für den Start

1. Aktuellen Ordner anzeigen: `pwd` (PowerShell: `Get-Location`)
2. Inhalt eines Ordners anzeigen: `ls` (PowerShell: `Get-ChildItem`)
3. In einen Ordner wechseln: `cd <ordnername>`
4. Einen Ordner nach oben wechseln: `cd ..`
5. Ordner anlegen: `mkdir <name>`
6. Datei anlegen: `New-Item <datei>.md` (PowerShell) oder `touch <datei>.md` (Bash/Zsh)

## Warum das wichtig ist

- Viele Git-Befehle funktionieren nur im richtigen Ordner.
- Mit sicherer Navigation vermeidest du Änderungen im falschen Repository.
- Das Terminal wird im gesamten Kurs für Build-, Test- und Git-Workflows gebraucht.

## Fallback

- Befehl nicht gefunden: Prüfe die Schreibweise und den Befehl für deine Shell.
- Du bist im falschen Ordner: Nutze `pwd` bzw. `Get-Location` und wechsle mit `cd`.
- Du siehst nichts im Ordner: Prüfe mit `ls -Force` bzw. `Get-ChildItem -Force`, ob versteckte Dateien vorhanden sind.

## Erfolgskriterium

Du kannst im Terminal in den Kursordner wechseln und dessen Inhalte anzeigen.

