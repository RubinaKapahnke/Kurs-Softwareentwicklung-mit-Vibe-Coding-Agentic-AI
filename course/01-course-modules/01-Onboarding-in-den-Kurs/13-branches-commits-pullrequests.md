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

## PR-Vorlage Fuer Die Startphase

Nutze diese Vorlage in den ersten Uebungen, bis der Git-Workflow sicher sitzt.

```md
## Titel
[MS-XX][UE-YY] Kurzer, klarer Titel der Aenderung

## Ziel der Aenderung
- Was wurde geaendert?
- Warum ist das fuer die Uebung wichtig?

## Was wurde konkret gemacht?
- [ ] Datei/Ordner A angepasst
- [ ] Datei/Ordner B angepasst
- [ ] Dokumentation aktualisiert

## Selbstcheck vor dem Request
- [ ] Ich habe `git status` geprueft
- [ ] Ich habe die Aenderung lokal oder in der Cloud getestet
- [ ] Commit-Nachricht ist verstaendlich
- [ ] Nur zur Aufgabe passende Dateien sind im PR

## Lernnotiz (2-4 Saetze)
Was habe ich bei dieser Aenderung verstanden?
Was war noch unsicher?

## Referenzen
- Meilenstein: Link zur passenden Stelle in `COURSE_MILESTONES.md`
- Uebung: Link zur Uebungsdatei
- Quelle: Link zur Modul- oder Library-Datei
```

## Mini-Checkliste Vor Dem Oeffnen Einer PR

1. `git branch` und `git status` ausfuehren.
2. Pruefen, ob du im richtigen Branch arbeitest.
3. Nur aufgabenrelevante Dateien committen.
4. Vorlage ausfuellen, dann Pull Request oeffnen.

## Fallback

- Branch existiert schon: Anderen Namen waehlen.
- Push schlaegt fehl: Pruefe Remote-Rechte und Branch-Namen.
- PR zeigt zu viele Dateien: Branch-Stand mit `git status` und `git log --oneline` pruefen.

## Erfolgskriterium

Du kannst den Weg von Branch ueber Commit bis Pull Request in eigenen Worten erklaeren.