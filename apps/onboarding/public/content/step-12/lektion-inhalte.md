<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 12-git-in-vscode-via-terminal.md -->

# Lektion 12: Git in VS Code via Terminal

## Ziel

Du fuehrst die wichtigsten Git-Befehle direkt im VS-Code-Terminal aus.

## Basisablauf mit Git

1. Pruefen, ob du im richtigen Repository bist: `git status`
2. Geaenderte Dateien ansehen: `git status`
3. Aenderungen vormerken: `git add <datei>` oder `git add .`
4. Commit erstellen: `git commit -m "Kurze klare Nachricht"`
5. Verlauf ansehen: `git log --oneline`

## Commit-Nachrichten, die helfen

- Schreibe kurz und konkret, **was** geaendert wurde.
- Nutze Praesens, z. B. `README ergänzt` oder `Übung 02 gelöst`.
- Vermeide vage Nachrichten wie `update` oder `fix` ohne Kontext.

## Typische Stolperstellen

- `nothing to commit`: Du hast keine Aenderungen vorgemerkt oder gespeichert.
- Falscher Ordner: `git status` zeigt an, dass kein Git-Repository gefunden wurde.
- Zu viel auf einmal: Lieber mehrere kleine Commits statt ein grosser Sammelcommit.

## Fallback

- Commit klappt nicht: Pruefe `git status` und ob Dateien gespeichert sind.
- Benutzername/E-Mail fehlen: `git config --global user.name` und `git config --global user.email` setzen.
- Unsicher bei Aenderungen: Mit `git diff` vor dem Commit pruefen.

## Erfolgskriterium

Du hast mindestens eine Datei geaendert, erfolgreich committed und den Commit im Verlauf gesehen.
