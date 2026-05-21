<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 05-git-grundlagen.md -->

# Lektion 05: Git-Grundlagen

## Ziel

Du verstehst, was ein Version Control System (VCS) ist, warum wir im Kurs Git nutzen und wie du Git installierst.

## Kapitel 1: Was ist ein VCS und welche gibt es?

Ein Version Control System (VCS) verwaltet Änderungen an Dateien über die Zeit. Du kannst damit Stände vergleichen, zurückspringen und im Team sauber zusammenarbeiten.

### Bekannte VCS-Beispiele

1. Git (heute Standard in den meisten Teams)
2. Subversion (SVN)
3. Mercurial
4. Perforce (häufig in größeren Enterprise-Setups)

### Zentral vs. verteilt

1. Zentrale Systeme (z. B. SVN): ein zentraler Server ist der Hauptstand.
2. Verteilte Systeme (z. B. Git): jede lokale Kopie hat eine vollständige Historie.
3. Für den Lern- und Projektalltag ist das verteilte Modell meist flexibler.

## Kapitel 2: Warum wir im Kurs Git verwenden

1. Git ist der De-facto-Standard in moderner Softwareentwicklung.
2. Git passt direkt zu GitHub und unserem Kursablauf.
3. Du lernst Branches, Commits und Pull Requests in einem realen Setup.
4. Änderungen bleiben nachvollziehbar und reviewbar.
5. Das Wissen ist über den Kurs hinaus direkt nutzbar.

### Kurzvergleich: Warum nicht nur ZIP-Dateien?

Mit ZIP-Backups verlierst du schnell den Überblick.
Mit Git hast du:

1. klare Historie
2. Vergleichbarkeit von Änderungen
3. Teamfähigkeit über Branches und Reviews

## Kapitel 3: Lokales Repo vs. GitHub-Repo

### Lokal (auf deinem Rechner)

- Dort bearbeitest du Dateien direkt in VS Code.
- Änderungen sind erst einmal nur bei dir sichtbar.

### GitHub-Repo (remote)

- Das ist die Online-Version deines Repositories auf GitHub.
- Dort sehen andere Teammitglieder deine Änderungen, sobald du sie hochlädst.

### Merksatz

- Lokal arbeiten -> committen -> pushen -> auf GitHub sichtbar.

![So liest du eine Commit-Historie: Lokal, Commit-Historie und GitHub (remote)](/assets/lessons/step-05-git-drei-saeulen.png)

## Kapitel 4: Was sind Branches?

Ein Branch ist ein Arbeitszweig. Du kannst darin Änderungen sicher vorbereiten, ohne den Hauptzweig (`main`) direkt zu verändern.

### Warum Branches wichtig sind

1. `main` bleibt stabil.
2. Features und Korrekturen sind getrennt nachvollziehbar.
3. Änderungen können geprüft werden, bevor sie übernommen werden.

## Kapitel 5: Commits und Pull

### Was ist ein Commit?

Ein Commit ist ein gespeicherter Zwischenstand deiner Arbeit inklusive Commit-Nachricht.

### Was ist `git pull`?

`git pull` holt Änderungen vom GitHub-Repo in dein lokales Repo.

### Typischer Ablauf im Alltag

1. `git pull` (erst aktualisieren)
2. Datei ändern
3. `git add ...`
4. `git commit -m "..."`
5. `git push`

## Kapitel 6: Cloning und Forking

### Was ist Cloning?

Beim Klonen (`git clone <url>`) lädst du ein bestehendes Repository auf deinen Rechner.

### Was ist Forking?

Ein Fork ist eine eigene Kopie eines fremden GitHub-Repositories in deinem GitHub-Account.

### Wann was?

1. **Clone**: Wenn du mit einem Repo arbeiten willst, zu dem du Zugriff hast.
2. **Fork**: Wenn du ein externes Repo übernehmen möchtest, ohne das Original direkt zu verändern.

## Kapitel 7: Was ist ein Pull Request?

Ein Pull Request (PR) ist eine Anfrage, Änderungen aus einem Branch in einen anderen Branch zu übernehmen.

### Wofür PRs da sind

1. Änderungen transparent machen
2. Review ermöglichen
3. Qualität vor dem Merge sichern

## Kapitel 8: Pull Request anlegen und Reviewer einstellen

### Pull Request anlegen (GitHub)

1. Branch auf GitHub pushen.
2. Auf „Compare & pull request" klicken.
3. Titel und Beschreibung eintragen.
4. Zielbranch prüfen (meist `main`).
5. Pull Request erstellen.

### Reviewer einstellen

1. Im PR rechts den Bereich „Reviewers" öffnen.
2. Gewünschte Person auswählen.
3. Review-Anfrage absenden.

Hinweis: Auf Reviewer, Pull Requests und Review-Prozesse gehen wir im Kurs später noch genauer ein.

## Kapitel 9: Was sind Merges?

Merge bedeutet: Änderungen aus einem Branch werden in einen Zielbranch übernommen.

### Nach dem Merge

1. Die Änderungen sind im Zielbranch enthalten.
2. Der Arbeitsbranch kann meist gelöscht werden.

## Kapitel 10: Szenario aus dem Kursalltag

Du sollst in deinem Übungs-Repository die README erweitern und eine kurze Selbstvorstellung ergänzen.

### So läuft es sauber ab

1. Du startest lokal im aktuellen Stand (`git pull`).
2. Du erstellst einen Branch, z. B. `feature/readme-vorstellung`.
3. Du bearbeitest die `README.md`.
4. Du speicherst die Änderung mit Commit.
5. Du pushst den Branch nach GitHub.
6. Du öffnest einen Pull Request nach `main`.
7. Du setzt eine Person als Reviewer.
8. Nach Review wird gemerged.

Ergebnis: Die Änderung ist in `main`, nachvollziehbar dokumentiert und reviewt.

## Kapitel 11: Praxisbeispiel mit Befehlen

### Ausgangslage

- Lokales Repo ist geöffnet.
- Du willst nur die README ändern.

### Beispielablauf

1. `git pull`
2. `git checkout -b feature/readme-update`
3. `README.md` bearbeiten und speichern
4. `git add README.md`
5. `git commit -m "README um Vorstellung ergänzt"`
6. `git push -u origin feature/readme-update`
7. Auf GitHub Pull Request erstellen
8. Reviewer hinzufügen
9. Nach Freigabe mergen

### Warum dieses Vorgehen gut ist

1. Kleine, klare Änderung
2. Saubere Historie
3. Review möglich
4. Kein Chaos auf `main`

## Kapitel 12: Empfehlung zum Üben

Wenn du Git interaktiv üben und besser verstehen willst, nutze Inter-Git:

- https://inter-git.com/lessons/introduction

Warum hilfreich:

1. Die Abläufe werden Schritt für Schritt visuell erklärt.
2. Du bekommst ein besseres Gefühl für Branches, Commits und Merges.
3. Es eignet sich gut als Ergänzung zu den Kursübungen.

## Kapitel 13: Managing Remotes

Ein Remote ist die Verbindung von deinem lokalen Repository zu einem Online-Repository (zum Beispiel auf GitHub).

### Wichtige Befehle

1. `git remote -v` zeigt dir alle Remotes und URLs.
2. `git remote add origin <url>` fügt ein Remote hinzu.
3. `git remote set-url origin <url>` ändert die URL eines Remotes.
4. `git remote remove origin` entfernt ein Remote.

### Typischer Check

Wenn `git push` nicht funktioniert, prüfe zuerst mit `git remote -v`, ob `origin` korrekt gesetzt ist.

## Kapitel 14: Pushing und Pulling

### `git push`

`git push` überträgt deine lokalen Commits auf GitHub.

Typischer erster Push für einen neuen Branch:

- `git push -u origin feature/readme-update`

Danach reicht meistens:

- `git push`

### `git pull`

`git pull` holt neue Änderungen vom Remote und führt sie direkt in deinen aktuellen Branch zusammen.

Merksatz:

- `push` = lokal nach remote
- `pull` = remote nach lokal

## Kapitel 15: Was ist Fetch?

`git fetch` holt neue Informationen vom Remote, ändert aber deinen aktuellen Arbeitsstand nicht automatisch.

### Unterschied zu `git pull`

1. `git fetch`: nur herunterladen, noch nicht mergen.
2. `git pull`: herunterladen und direkt mergen.

### Wann `fetch` sinnvoll ist

1. Du willst erst prüfen, was neu ist.
2. Du willst bewusst entscheiden, wann gemerged wird.
3. Du willst Konflikte kontrollierter behandeln.

### Praktischer Ablauf

1. `git fetch`
2. Änderungen ansehen (zum Beispiel im Git-Graph oder mit Diff)
3. Danach bewusst `git merge` oder `git pull`

## Kapitel 16: Commit History verstehen

Die Commit History ist die nachvollziehbare Chronik deines Projekts: Wer hat wann was geändert und warum?

### Wichtige Befehle

1. `git log` zeigt die vollständige Historie mit Commit-ID, Autor, Datum und Nachricht.
2. `git log --oneline` zeigt eine kompakte Kurzansicht pro Commit.
3. `git log --oneline --graph --all` zeigt zusätzlich die Branch-Struktur als Verlaufsgrafik.
4. `git show <commit-id>` zeigt die Details eines bestimmten Commits.

### Wofür das im Kurs hilft

1. Du siehst, ob deine Änderungen wirklich committed wurden.
2. Du kannst Änderungen für Review und Rückfragen klar belegen.
3. Du findest den letzten stabilen Stand schneller wieder.

### Mini-Check vor Pull Request

1. `git status`
2. `git log --oneline -n 5`
3. Commit-Nachrichten prüfen: Sind sie klar und verständlich?

## Fallback

- Branch/PR verwechselt: Branch = Arbeitszweig, PR = Anfrage zum Übernehmen.
- `git pull` erzeugt Konflikte: Änderungen zuerst vergleichen und bewusst auflösen.
- `git push` wird abgelehnt: Erst `git pull` oder `git fetch` + Merge/Rebase, dann erneut pushen.
- Remote fehlt oder falsche URL: Mit `git remote -v` prüfen und bei Bedarf korrigieren.
- Unsicher bei Fork vs. Clone: Erst fragen, ob du Schreibrechte auf das Original-Repo hast.

## Erfolgskriterium

Du kannst Branch, Commit, Commit History, Pull, Push, Fetch, Clone, Fork, Remote, Pull Request, Reviewer und Merge in einfachen Worten erklären und den typischen Ablauf benennen.
