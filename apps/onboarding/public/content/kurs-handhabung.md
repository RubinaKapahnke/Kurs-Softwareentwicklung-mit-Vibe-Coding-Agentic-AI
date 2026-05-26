## So funktioniert der Kurs im Alltag

Damit du später nicht im falschen Repo arbeitest, ist diese Grundregel wichtig:

### 1. Das Kurs-Repo ist die gemeinsame Orientierung

Im Kurs-Repo findest du die gemeinsame Lernlogik:

- `COURSE_MILESTONES.md` zeigt dir den aktuellen Meilenstein.
- `course/02-course-exercises/` enthält die zentralen Übungsaufgaben.
- `course/03-course-library/` erklärt die Inhalte und Befehle.
- `course/learners/` enthält die zentralen Lernfortschrittsdateien.

### 2. Dein eigenes Repo ist dein Arbeitsraum

Dein eigenes Repo ist der Ort, an dem du normalerweise arbeitest:

- dort entstehen deine Übungsloesungen
- dort liegen deine Projektdateien
- dort machst du deine Commits und Pull Requests

Kurz gesagt:

- **Aufgabe lesen:** im Kurs-Repo
- **Lösung bauen:** im eigenen Repo
- **Fortschritt festhalten:** wieder im Kurs-Repo

### Schnell-Entscheidung: In welchem Repo arbeite ich jetzt?

| Wenn du gerade ... | Dann arbeite in ... |
|---|---|
| den nächsten Meilenstein prüfst | Kurs-Repo |
| eine Übungsaufgabe liest | Kurs-Repo |
| Code oder Dateien für eine Lösung erstellst | eigenem Repo |
| committen und PR für deine Lösung machst | eigenem Repo |
| deinen Lernstand eintraegst | Kurs-Repo |

Wenn du unsicher bist, nutze diese 3 Fragen:

1. Lese ich gerade eine zentrale Vorgabe? -> Kurs-Repo
2. Baue ich gerade eine Lösung oder ein Artefakt? -> eigenes Repo
3. Melde ich gerade meinen Lernstand? -> Kurs-Repo

### 3. Warum bleibt der Lernfortschritt zentral?

Die Datei `lernfortschritt_<name>.md` bleibt bewusst im Kurs-Repo.

Das hat drei Gruende:

- die Dozentin sieht den Stand aller Teilnehmenden an einem Ort
- das Dashboard kann mit einer stabilen Datenquelle arbeiten
- Rückfragen, Blockaden und nächste Lektionen bleiben vergleichbar

### 4. Typischer Ablauf bei einer Übung

1. Öffne `COURSE_MILESTONES.md` und die passende Übung im Kurs-Repo.
2. Lies die Quellenlinks in der Übung.
3. Setze die Aufgabe in deinem eigenen Repo um.
4. Erstelle dort deinen Commit und deine PR.
5. Trage danach deinen Stand in `course/learners/<name>/lernfortschritt_<name>.md` ein.

### 5. Typische Verwechslungen (und wie du sie vermeidest)

- **Fehler:** Übungsloesung im Kurs-Repo erstellen.
	**Besser:** Lösung im eigenen Repo bauen, im Kurs-Repo nur den Lernstand dokumentieren.
- **Fehler:** Direkt im eigenen Repo starten, ohne `COURSE_MILESTONES.md` zu lesen.
	**Besser:** Immer zuerst `COURSE_MILESTONES.md` im Kurs-Repo oeffnen.
- **Fehler:** Lernfortschritt nur lokal notieren.
	**Besser:** Lernfortschritt in `course/learners/<name>/lernfortschritt_<name>.md` im Kurs-Repo pflegen.

### Merksatz

**Kurs-Repo = Orientierung und Fortschritt. Eigenes Repo = Umsetzung und Artefakte.**

