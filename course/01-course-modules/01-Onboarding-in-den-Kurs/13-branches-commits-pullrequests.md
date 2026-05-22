# Lektion 13: Branches, Commits und Pull Requests

## Ziel

Du verstehst den Ablauf von Branch bis Pull Request und kannst ihn im Kurskontext erklaeren.

## Was ist ein Branch?

- Ein Branch ist ein eigener Arbeitszweig fuer eine Aenderung.
- Der Hauptzweig bleibt stabil, waehrend du im Branch arbeitest.
- So kannst du Aenderungen sicher testen, bevor sie uebernommen werden.

## Ablauf im Ueberblick

1. Neuen Branch erstellen: `git checkout -b feature/meine-aenderung`
2. Aenderungen im Branch umsetzen.
3. Aenderungen committen.
4. Branch auf GitHub hochladen: `git push -u origin feature/meine-aenderung`
5. Pull Request (PR) oeffnen und beschreiben.
6. Nach Review mergen.

## Wozu Pull Requests?

- Aenderungen werden sichtbar und nachvollziehbar.
- Review-Kommentare helfen bei Qualitaet und Lernfortschritt.
- Teamarbeit bleibt strukturiert und transparent.

## Fallback

- Branch existiert schon: Anderen Namen waehlen.
- Push schlaegt fehl: Pruefe Remote-Rechte und Branch-Namen.
- PR zeigt zu viele Dateien: Branch-Stand mit `git status` und `git log --oneline` pruefen.

## Erfolgskriterium

Du kannst den Weg von Branch ueber Commit bis Pull Request in eigenen Worten erklaeren.