<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: lektion-13-branches-commits-pullrequests/lektion-inhalte.md -->

# Lektion 13: Branches, Commits und Pull Requests

## Ziel

Du verstehst den Ablauf von Branch bis Pull Request und kannst ihn im Kurskontext erklären.

## Was ist ein Branch?

- Ein Branch ist ein eigener Arbeitszweig für eine Änderung.
- Der Hauptzweig bleibt stabil, während du im Branch arbeitest.
- So kannst du Änderungen sicher testen, bevor sie übernommen werden.

## Ablauf im Überblick

1. Neuen Branch erstellen: `git checkout -b feature/meine-aenderung`
2. Änderungen im Branch umsetzen.
3. Änderungen committen.
4. Branch auf GitHub hochladen: `git push -u origin feature/meine-aenderung`
5. Pull Request (PR) öffnen und beschreiben.
6. Nach Review mergen.

## Wozu Pull Requests?

- Änderungen werden sichtbar und nachvollziehbar.
- Review-Kommentare helfen bei Qualität und Lernfortschritt.
- Teamarbeit bleibt strukturiert und transparent.

## Fallback

- Branch existiert schon: Anderen Namen wählen.
- Push schlägt fehl: Prüfe Remote-Rechte und Branch-Namen.
- PR zeigt zu viele Dateien: Branch-Stand mit `git status` und `git log --oneline` prüfen.

## Erfolgskriterium

Du kannst den Weg von Branch über Commit bis Pull Request in eigenen Worten erklären.
