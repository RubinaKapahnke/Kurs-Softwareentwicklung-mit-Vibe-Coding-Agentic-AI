# Uebung Meilenstein 2: Eigenen Lernstand im Terminal verwalten

## Ziel
Du fuehrst alle Schritte aus, um deinen persoenlichen Lernstand ueber das Terminal zu verwalten - vom Aktualisieren des Repos bis zum ersten eigenen Lernjournal-Eintrag.

---

## Vor dem Start � Checkliste

- [x] VS Code ist geoeffnet
- [x] Du hast ein Terminal geoeffnet und bist im Repo-Ordner (erkennbar am Pfad `vibe-coding-0426`)
- [x] Du kennst deinen Vornamen � er ersetzt ueberall den Platzhalter `<vorname>`

In dieser Uebung arbeitest du mit diesen Dateien:
- `apps/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden, wird aktualisiert)
- `apps/learners/<dein-name>/lernstand_<vorname>/meilensteine_<vorname>.md` (neu, wird erstellt)

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

### 3. Unterordner anlegen
Navigiere in deinen persoenlichen Ordner (`apps/learners/<name>/`) und erstelle dort einen Unterordner `lernstand_<vorname>`.
```bash
mkdir lernstand_<vorname>
```
Quelle: [modules/05-terminal/01-terminal-grundlagen.md](../../modules/05-terminal/01-terminal-grundlagen.md)

### 4. Meilenstein-Datei anlegen
Wechsle in den neuen Unterordner und erstelle eine Markdown-Datei fuer deine Meilensteine.
```bash
cd lernstand_<vorname>
echo > meilensteine_<vorname>.md
```
Quelle: [modules/05-terminal/03-terminal-befehlsuebersicht.md](../../modules/05-terminal/03-terminal-befehlsuebersicht.md)

### 5. Meilensteine eintragen
Oeffne die neue Datei in VS Code und trage deine bisherigen und geplanten Meilensteine ein. Orientiere dich an den Meilensteinen aus `NEXT_STEPS.md`.
Quelle: [modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md)

### 6. Lernfortschrittsdatei aktualisieren
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

### 7. Aenderungen committen und pushen

Pruefe zuerst, was du veraendert hast:
```bash
git status   # Zeigt alle geaenderten Dateien
git branch   # Bestaetige, dass du auf deinem Branch bist
```
<!-- ich würde hier den Path überprüfen? "add ." zielt auf den aktuellen Ortner -->
Dann:
```bash
git add .
```  
<!--  ich würde hier noch mal auf die Zusatzbefehle eingehen -m / -a / -am -->
```bash
git commit -m "feat: lernstand <vorname> angelegt"
git push origin lernstand-<vorname>
```


Quelle: [modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md)

### 8. Pull Request erstellen

<!--  hier würde ich das exakte Repo an geben "Unser" [vibe-coding-0426] -->
1. Oeffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Waehle als Basis `main` und als Quell-Branch deinen Branch
4. Schreibe eine kurze Beschreibung: *"Lernstand `<vorname>` angelegt"*
5. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke auf "Pull requests" ? "New pull request" ? Branch auswaehlen.

Quelle: [modules/03-github/01-github-grundlagen.md](../../modules/03-github/01-github-grundlagen.md)

---
<!-- diese Hilfe-Dateien, sollten Oben stehen --> 
## Modulabdeckung (Check)
- [x] modules/04-git/01-git-grundlagen.md: Branch erstellen, pull, add/commit/push
- [X] modules/04-git/03-git-befehlsuebersicht.md: Git-Befehle als Referenz
- [X] modules/05-terminal/01-terminal-grundlagen.md: Ordner und Dateien im Terminal anlegen
- [x] modules/05-terminal/03-terminal-befehlsuebersicht.md: `cd`, `mkdir`, `echo`
- [x] modules/01-markdown/01-markdown-grundlagen.md: Meilensteine in Markdown dokumentieren
- [X] modules/01-markdown/02-formatierung_md-files.md: Lernjournal formatieren
- [X] modules/03-github/01-github-grundlagen.md: Pull Request erstellen

---
<!-- diese Info, sollte Oben stehen --> 
## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Markdown-Grundlagen** � du strukturierst deine Dateien mit Ueberschriften und Listen ([modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md))
- **VS Code bedienen** � du oeffnest Dateien und navigierst im Explorer ([modules/02-vscode/01-vscode-grundlagen.md](../../modules/02-vscode/01-vscode-grundlagen.md))

---

<!-- das muss vorder beschreibenung des Absendens (Zeile 110))  --> 
## Abgabe

Bevor du den PR erstellst, pruefe kurz:
- [x] Unterordner `lernstand_<vorname>/` mit `meilensteine_<vorname>.md` existiert in deinem persoenlichen Ordner
- [ ] Lernjournal-Eintrag in `lernfortschritt_<name>.md` ist aktualisiert
<!-- wie kann ich vor der PR-Erstellung prüfen ob der PR erstellt ist? --> 
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [x] Ich habe mein Repo erfolgreich aktualisiert und dabei gesehen, welche Dateien neu waren.
- [x] Ich habe einen eigenen Branch erstellt und kann erklaeren, warum man das macht.
- [x] Ich habe Ordner und eine Datei ueber das Terminal angelegt � ohne die Maus zu benutzen.
- [x] Mein Lernjournal enthaelt einen echten Eintrag von mir.
- [x] Ich habe einen Pull Request auf GitHub erstellt und weiss, was danach damit passiert.
