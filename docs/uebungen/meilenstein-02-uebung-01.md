# Uebung Meilenstein 2: Eigenen Lernstand im Terminal verwalten

## Ziel
Du fuehrst alle Schritte aus, um deinen persoenlichen Lernstand ueber das Terminal zu verwalten - vom Aktualisieren des Repos bis zum ersten eigenen Lernjournal-Eintrag.

---

## Vor dem Start � Checkliste

- [ ] VS Code ist geoeffnet
- [ ] Du hast ein Terminal geoeffnet und bist im Repo-Ordner (erkennbar am Pfad `vibe-coding-0426`)
- [ ] Du kennst deinen Vornamen � er ersetzt ueberall den Platzhalter `<vorname>`

In dieser Uebung arbeitest du mit diesen Dateien:
- `apps/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden, wird aktualisiert)

---

## Aufgaben

### 1. Aktuellen Stand holen
Stelle sicher, dass du auf dem neuesten Stand von `main` bist.

Pruefe zuerst deinen aktuellen Status:
```bash
git status   # Zeigt offene Aenderungen
git branch   # Zeigt, auf welchem Branch du bist
```

Dann:
```bash
git pull origin main
```
Quelle: [modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md)

### 2. Eigenen Branch erstellen
Erstelle einen neuen Branch mit einer passenden Bezeichnung fuer diese Aufgabe.

Pruefe zuerst, dass du auf `main` bist:
```bash
git status
git branch
```

Dann:
```bash
git checkout -b lernstand-<vorname>
```
Quelle: [modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md)

### 3. Lernfortschrittsdatei aktualisieren
Oeffne deine persoenliche Datei `apps/learners/<name>/lernfortschritt_<name>.md` und fuege einen Journaleintrag ein. Nutze dieses Muster:

```markdown
**Was habe ich heute gemacht?**
[Eigene Antwort]

**Was war schwierig oder unklar?**
[Eigene Antwort]

**Was ist mein naechster kleiner Schritt?**
[Eigene Antwort]
```

> **Tipp:** Falls du die Datei nicht im Explorer findest, druecke `Strg+P` (Windows) bzw. `Cmd+P` (Mac) und tippe `lernfortschritt_` � dann den eigenen Namen auswaehlen.

Quelle: [modules/01-markdown/02-formatierung_md-files.md](../../modules/01-markdown/02-formatierung_md-files.md)

### 4. Aenderungen committen und pushen

Pruefe zuerst, was du veraendert hast:
```bash
git status   # Zeigt alle geaenderten Dateien
git branch   # Bestaetige, dass du auf deinem Branch bist
```

Dann:
```bash
git add .
git commit -m "feat: lernstand <vorname> angelegt"
git push origin lernstand-<vorname>
```
Quelle: [modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md)

### 5. Pull Request erstellen

1. Oeffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Waehle als Basis `main` und als Quell-Branch deinen Branch
4. Schreibe eine kurze Beschreibung: *"Lernstand `<vorname>` angelegt"*
5. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke auf "Pull requests" ? "New pull request" ? Branch auswaehlen.

Quelle: [modules/03-github/01-github-grundlagen.md](../../modules/03-github/01-github-grundlagen.md)

---

<!-- hier fehlen die [ ] zum ankreutzen-->
## Modulabdeckung (Check)
- ? modules/04-git/01-git-grundlagen.md: Branch erstellen, pull, add/commit/push
- ? modules/04-git/03-git-befehlsuebersicht.md: Git-Befehle als Referenz
- ? modules/05-terminal/01-terminal-grundlagen.md: Terminal-Grundlagen
- ? modules/01-markdown/02-formatierung_md-files.md: Lernjournal formatieren
- ? modules/03-github/01-github-grundlagen.md: Pull Request erstellen

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Markdown-Grundlagen** � du strukturierst deine Dateien mit Ueberschriften und Listen ([modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md))
- **VS Code bedienen** � du oeffnest Dateien und navigierst im Explorer ([modules/02-vscode/01-vscode-grundlagen.md](../../modules/02-vscode/01-vscode-grundlagen.md))

---

## Abgabe

Bevor du den PR erstellst, pruefe kurz:
- [ ] Lernjournal-Eintrag in `lernfortschritt_<name>.md` ist aktualisiert
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe mein Repo erfolgreich aktualisiert und dabei gesehen, welche Dateien neu waren.
- [ ] Ich habe einen eigenen Branch erstellt und kann erklaeren, warum man das macht.
- [ ] Mein Lernjournal enthaelt einen echten Eintrag von mir.
- [ ] Ich habe einen Pull Request auf GitHub erstellt und weiss, was danach damit passiert.
