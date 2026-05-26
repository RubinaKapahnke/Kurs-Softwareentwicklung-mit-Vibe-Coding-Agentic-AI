# Lektion 13: Branches, Commits und Pull Requests

## Ziel

Du verstehst den Ablauf von Branch bis Pull Request und kannst ihn im Kurskontext erklaeren.

## Was ist ein Branch?

- Ein Branch ist ein eigener Arbeitszweig für eine Aenderung.
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
- Review-Kommentare helfen bei Qualitaet und Lernfortschritt.
- Teamarbeit bleibt strukturiert und transparent.

## PR-Vorlage Für Die Startphase

Nutze diese Vorlage in den ersten Übungen, bis der Git-Workflow sicher sitzt.

```md
## Titel
[MS-XX][UE-YY] Kurzer, klarer Titel der Änderung

## Ziel der Änderung
- Was wurde geändert?
- Warum ist das für die Übung wichtig?

## Was wurde konkret gemacht?
- [ ] Datei/Ordner A angepasst
- [ ] Datei/Ordner B angepasst
- [ ] Dokumentation aktualisiert

## Selbstcheck vor dem Request
- [ ] Ich habe `git status` geprüft
- [ ] Ich habe die Änderung lokal oder in der Cloud getestet
- [ ] Commit-Nachricht ist verstaendlich
- [ ] Nur zur Aufgabe passende Dateien sind im PR

## Lernnotiz (2-4 Sätze)
Was habe ich bei dieser Änderung verstanden?
Was war noch unsicher?

## Referenzen
- Meilenstein: Link zur passenden Stelle in `COURSE_MILESTONES.md`
- Übung: Link zur Übungsdatei
- Quelle: Link zur Modul- oder Library-Datei
```

## Mini-Checkliste Vor Dem Öffnen Einer PR

1. `git branch` und `git status` ausfuehren.
2. Prüfen, ob du im richtigen Branch arbeitest.
3. Nur aufgabenrelevante Dateien committen.
4. Vorlage ausfüllen, dann Pull Request oeffnen.

## Fallback

- Branch existiert schon: Anderen Namen waehlen.
- Push schlaegt fehl: Prüfe Remote-Rechte und Branch-Namen.
- PR zeigt zu viele Dateien: Branch-Stand mit `git status` und `git log --oneline` pruefen.

## Erfolgskriterium

Du kannst den Weg von Branch über Commit bis Pull Request in eigenen Worten erklaeren.