<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: lektion-12-git-in-vscode-via-terminal/lektion-inhalte.md -->

# Lektion 12: Git in VS Code via Terminal

## Ziel

Du führst die wichtigsten Git-Befehle direkt im VS-Code-Terminal aus.

## Basisablauf mit Git

1. Prüfen, ob du im richtigen Repository bist: `git status`
2. Geänderte Dateien ansehen: `git status`
3. Änderungen vormerken: `git add <datei>` oder `git add .`
4. Commit erstellen: `git commit -m "Kurze klare Nachricht"`
5. Verlauf ansehen: `git log --oneline`

## Commit-Nachrichten, die helfen

- Schreibe kurz und konkret, **was** geändert wurde.
- Nutze Präsens, z. B. `README ergänzt` oder `Übung 02 gelöst`.
- Vermeide vage Nachrichten wie `update` oder `fix` ohne Kontext.

## Typische Stolperstellen

- `nothing to commit`: Du hast keine Änderungen vorgemerkt oder gespeichert.
- Falscher Ordner: `git status` zeigt an, dass kein Git-Repository gefunden wurde.
- Zu viel auf einmal: Lieber mehrere kleine Commits statt ein großer Sammelcommit.

## Fallback

- Commit klappt nicht: Prüfe `git status` und ob Dateien gespeichert sind.
- Benutzername/E-Mail fehlen: `git config --global user.name` und `git config --global user.email` setzen.
- Unsicher bei Änderungen: Mit `git diff` vor dem Commit prüfen.

## Erfolgskriterium

Du hast mindestens eine Datei geändert, erfolgreich committed und den Commit im Verlauf gesehen.
