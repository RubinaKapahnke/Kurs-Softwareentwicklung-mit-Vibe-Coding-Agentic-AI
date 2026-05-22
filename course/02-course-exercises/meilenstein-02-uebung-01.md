# Uebung Meilenstein 2: Eigenen Lernstand im Terminal verwalten

## Ziel
Am Ende dieser Uebung hast du deinen eigenen Branch erstellt, deine persoenliche Lernfortschritt-Datei mit einem echten Journaleintrag aktualisiert und einen Pull Request auf GitHub gestellt. Du weisst, wie man Aenderungen sichert und teilt - das ist der Kern des Workflows, der im Kurs immer wieder vorkommt.

---

## Vor dem Start - Checkliste

- [ ] VS Code ist geoeffnet
- [ ] Du hast ein Terminal geoeffnet und bist im Repo-Ordner (erkennbar am Pfad `vibe-coding-0426`)
- [ ] Du kennst deinen Ordner in `course/learners/` - er traegt deinen Vornamen in Kleinbuchstaben

In dieser Uebung arbeitest du mit dieser Datei:
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden, wird von dir aktualisiert)

> **Wichtig - diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in `lernfortschritt_<dein-name>.md` ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Aufgaben

### 1. Aktuellen Stand holen
Stelle sicher, dass du auf dem neuesten Stand von `main` bist.

> **Lies zuerst:** [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md) - Abschnitt "Wie aktualisiere ich mein lokales Repo?". Kehre dann hierher zurueck.

Pruefe zuerst deinen aktuellen Status:
```bash
git status   # Zeigt offene Aenderungen
git branch   # Zeigt, auf welchem Branch du bist
```

Dann:
```bash
git pull origin main   # Holt alle neuen Aenderungen aus dem Remote-Repo auf deinen Rechner
```

Quelle: [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

### 2. Eigenen Branch erstellen
Fuer jede Uebung erstellst du einen neuen, eigenen Branch. Das stellt sicher, dass deine Aenderungen sauber getrennt sind und als Pull Request eingereicht werden koennen. Verwende nie einen Branch aus einer frueheren Uebung wieder.

> **Lies zuerst:** [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md) - Abschnitt "Was ist ein Branch und warum brauche ich das?". Kehre dann hierher zurueck.

Pruefe zuerst, dass du auf `main` bist:
```bash
git status
git branch
```

Falls du nicht auf `main` bist:
```bash
git checkout main   # Wechselt zurueck auf den main-Branch
```

Dann neuen Branch erstellen:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M2-01-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main` (wie unten). Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt - du musst nichts weiter tun.

```bash
git checkout -b UE-M2-01-<vorname>   # Erstellt einen neuen Branch und wechselt direkt darauf
```
(Ersetze `<vorname>` durch deinen eigenen Vornamen)

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen - UE steht fuer Uebung, M+Zahl fuer den Meilenstein, YY fuer die Uebungs-Nummer.

Quelle: [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

### 3. Lernfortschrittsdatei aktualisieren
Oeffne **deine persoenliche Datei** `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (ersetze `<dein-name>` durch deinen eigenen Vornamen).

> **Tipp:** Falls du die Datei nicht im Explorer findest: `Strg+P` (Windows) / `Cmd+P` (Mac) eingeben, dann `lernfortschritt_` tippen und deinen Namen auswaehlen.

Fuege am Ende der Datei einen neuen Journaleintrag ein. Schreib echte Antworten - nicht den Platzhaltertext:

```markdown
## Lernjournal - [heutiges Datum]

**Was habe ich heute gemacht?**
Hier eigene Antwort eintippen - was hast du konkret getan?

**Was war schwierig oder unklar?**
Hier eigene Antwort eintippen - was hat nicht funktioniert oder verwirrt?

**Was ist mein naechster kleiner Schritt?**
Hier eigene Antwort eintippen - was moechtest du als naechstes lernen oder ausprobieren?
```

> **Lies zuerst:** [course-library/01-markdown/02-formatierung_md-files.md](../03-course-library/01-markdown/02-formatierung_md-files.md) - dort siehst du, wie du Markdown-Abschnitte korrekt formatierst. Kehre dann hierher zurueck.

Quelle: [course-library/01-markdown/02-formatierung_md-files.md](../03-course-library/01-markdown/02-formatierung_md-files.md)

### 4. Aenderungen committen und pushen

Pruefe zuerst, was du veraendert hast:
```bash
git status
git branch
```

Dann:
```bash
git add .          # Alle Aenderungen fuer den Commit vormerken
git commit -m "feat: lernstand <vorname> angelegt"
git push origin UE-M2-01-<vorname>
```
Quelle: [course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

### 5. Pull Request erstellen

1. Oeffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Waehle als Basis `main` und als Quell-Branch deinen Branch
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

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Markdown-Grundlagen** - du strukturierst deine Dateien mit Ueberschriften und Listen ([course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md))
- **VS Code bedienen** - du oeffnest Dateien und navigierst im Explorer ([course-library/02-vscode/01-vscode-grundlagen.md](../03-course-library/02-vscode/01-vscode-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:
- [ ] Lernjournal-Eintrag in `lernfortschritt_<name>.md` ist aktualisiert
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe mein Repo erfolgreich aktualisiert und dabei gesehen, welche Dateien neu waren.
- [ ] Ich habe einen eigenen Branch erstellt und kann erklaeren, warum man das macht.
- [ ] Mein Lernjournal enthaelt einen echten Eintrag von mir.
- [ ] Ich habe einen Pull Request auf GitHub erstellt und weiss, was danach damit passiert.

