# Übung Meilenstein 2: Eigenen Lernstand im Terminal verwalten

## Ziel
Am Ende dieser Übung hast du deinen eigenen Branch erstellt, deine persönliche Lernfortschritt-Datei mit einem echten Journaleintrag aktualisiert und einen Pull Request auf GitHub gestellt. Du weisst, wie man Änderungen sichert und teilt - das ist der Kern des Workflows, der im Kurs immer wieder vorkommt.

---

## Vor dem Start - Checkliste

- [ ] VS Code ist geöffnet
- [ ] Du hast ein Terminal geöffnet und bist im Repo-Ordner (erkennbar am Pfad `vibe-coding-0426`)
- [ ] Du kennst deinen Ordner in `course/learners/` - er traegt deinen Vornamen in Kleinbuchstaben

In dieser Übung arbeitest du mit dieser Datei:
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden, wird von dir aktualisiert)

> **Wichtig - diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in `lernfortschritt_<dein-name>.md` ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Aufgaben

### 1. Aktuellen Stand holen
Stelle sicher, dass du auf dem neuesten Stand von `main` bist.

> **Lies zuerst:** [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md) - Abschnitt "Wie aktualisiere ich mein lokales Repo?". Kehre dann hierher zurueck.

Prüfe zuerst deinen aktuellen Status:
```bash
git status   # Zeigt offene Änderungen
git branch   # Zeigt, auf welchem Branch du bist
```

Dann:
```bash
git pull origin main   # Holt alle neuen Änderungen aus dem Remote-Repo auf deinen Rechner
```

Quelle: [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

### 2. Eigenen Branch erstellen
Für jede Übung erstellst du einen neuen, eigenen Branch. Das stellt sicher, dass deine Änderungen sauber getrennt sind und als Pull Request eingereicht werden koennen. Verwende nie einen Branch aus einer frueheren Übung wieder.

> **Lies zuerst:** [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md) - Abschnitt "Was ist ein Branch und warum brauche ich das?". Kehre dann hierher zurueck.

Prüfe zuerst, dass du auf `main` bist:
```bash
git status
git branch
```

Falls du nicht auf `main` bist:
```bash
git checkout main   # Wechselt zurück auf den main-Branch
```

Dann neuen Branch erstellen:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M2-01-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main` (wie unten). Deine Änderungen aus dem letzten PR werden beim Merge zusammengeführt - du musst nichts weiter tun.

```bash
git checkout -b UE-M2-01-<vorname>   # Erstellt einen neuen Branch und wechselt direkt darauf
```
(Ersetze `<vorname>` durch deinen eigenen Vornamen)

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Übungen - UE steht für Übung, M+Zahl für den Meilenstein, YY für die Übungs-Nummer.

Quelle: [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

### 3. Lernfortschrittsdatei aktualisieren
Öffne **deine persönliche Datei** `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (ersetze `<dein-name>` durch deinen eigenen Vornamen).

> **Tipp:** Falls du die Datei nicht im Explorer findest: `Strg+P` (Windows) / `Cmd+P` (Mac) eingeben, dann `lernfortschritt_` tippen und deinen Namen auswaehlen.

Fuege am Ende der Datei einen neuen Journaleintrag ein. Schreib echte Antworten - nicht den Platzhaltertext:

```markdown
## Lernjournal - [heutiges Datum]

**Was habe ich heute gemacht?**
Hier eigene Antwort eintippen - was hast du konkret getan?

**Was war schwierig oder unklar?**
Hier eigene Antwort eintippen - was hat nicht funktioniert oder verwirrt?

**Was ist mein nächster kleiner Lektion?**
Hier eigene Antwort eintippen - was möchtest du als nächstes lernen oder ausprobieren?
```

> **Lies zuerst:** [course-library/01-markdown/02-formatierung_md-files.md](../03-course-library/01-markdown/02-formatierung_md-files.md) - dort siehst du, wie du Markdown-Abschnitte korrekt formatierst. Kehre dann hierher zurueck.

Quelle: [course-library/01-markdown/02-formatierung_md-files.md](../03-course-library/01-markdown/02-formatierung_md-files.md)

### 4. Änderungen committen und pushen

Prüfe zuerst, was du verändert hast:
```bash
git status
git branch
```

Dann:
```bash
git add .          # Alle Änderungen für den Commit vormerken
git commit -m "feat: lernstand <vorname> angelegt"
git push origin UE-M2-01-<vorname>
```
Quelle: [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

### 5. Pull Request erstellen

1. Öffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Wähle als Basis `main` und als Quell-Branch deinen Branch
4. Schreibe eine kurze Beschreibung: *"UE-M2-01: Lernstand `<vorname>` angelegt"*
5. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke auf "Pull requests" -> "New pull request" -> Branch auswaehlen.

> **Lies zuerst:** [course-library/03-github/01-github-grundlagen.md](../03-course-library/03-github/01-github-grundlagen.md) - Abschnitt "Pull Request erstellen". Kehre dann hierher zurueck.

Quelle: [course-library/03-github/01-github-grundlagen.md](../03-course-library/03-github/01-github-grundlagen.md)

---

## Modulabdeckung (Check)
- ✓ course/03-course-library/04-git/01-git-grundlagen.md: Branch erstellen, pull, add/commit/push
- ✓ course/03-course-library/04-git/03-git-befehlsuebersicht.md: Git-Befehle als Referenz
- ✓ course/03-course-library/05-terminal/01-terminal-grundlagen.md: Terminal-Grundlagen
- ✓ course/03-course-library/01-markdown/02-formatierung_md-files.md: Lernjournal formatieren
- ✓ course/03-course-library/03-github/01-github-grundlagen.md: Pull Request erstellen

---

## Wiederholung aus frueheren Meilensteinen

Diese Übung setzt voraus, dass du folgendes bereits kannst:

- **Markdown-Grundlagen** - du strukturierst deine Dateien mit Überschriften und Listen ([course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md))
- **VS Code bedienen** - du oeffnest Dateien und navigierst im Explorer ([course-library/02-vscode/01-vscode-grundlagen.md](../03-course-library/02-vscode/01-vscode-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Übungsdatei.

Bevor du den PR erstellst, prüfe kurz:
- [ ] Lernjournal-Eintrag in `lernfortschritt_<name>.md` ist aktualisiert
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Prüfe nach Abschluss der Übung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe mein Repo erfolgreich aktualisiert und dabei gesehen, welche Dateien neu waren.
- [ ] Ich habe einen eigenen Branch erstellt und kann erklären, warum man das macht.
- [ ] Mein Lernjournal enthält einen echten Eintrag von mir.
- [ ] Ich habe einen Pull Request auf GitHub erstellt und weiss, was danach damit passiert.


