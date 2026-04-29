# Uebung Meilenstein 2: Eigenen Lernstand im Terminal verwalten

## Ziel
Du fuehrst alle Schritte aus, um deinen persoenlichen Lernstand ueber das Terminal zu verwalten - vom Aktualisieren des Repos bis zum ersten eigenen Lernjournal-Eintrag.

---

## Aufgaben

### 1. Aktuellen Stand holen
Stelle sicher, dass du auf dem neuesten Stand von `main` bist.
```bash
git pull origin main
```
Quelle: [modules/04-git/02-git-grundlagen.md](../../modules/04-git/02-git-grundlagen.md)

### 2. Eigenen Branch erstellen
Erstelle einen neuen Branch mit einer passenden Bezeichnung fuer diese Aufgabe.
```bash
git checkout -b lernstand-<vorname>
```
Quelle: [modules/04-git/02-git-grundlagen.md](../../modules/04-git/02-git-grundlagen.md)

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
echo. > meilensteine_<vorname>.md
```
Quelle: [modules/05-terminal/03-terminal-befehlsuebersicht.md](../../modules/05-terminal/03-terminal-befehlsuebersicht.md)

### 5. Meilensteine eintragen
Oeffne die neue Datei in VS Code und trage deine bisherigen und geplanten Meilensteine ein. Orientiere dich an den Meilensteinen aus `NEXT_STEPS.md`.
Quelle: [modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md)

### 6. Lernfortschrittsdatei aktualisieren
Oeffne deine persoenliche Datei `apps/learners/<name>/lernfortschritt_<name>.md` und trage im Lernjournal ein:
- Was habe ich heute gemacht?
- Wo war ich blockiert?
- Was ist mein naechster kleiner Schritt (max. 30 Minuten)?
Quelle: [modules/01-markdown/02-formatierung_md-files.md](../../modules/01-markdown/02-formatierung_md-files.md)

### 7. Aenderungen committen und pushen
```bash
git add .
git commit -m "feat: lernstand <vorname> angelegt"
git push origin lernstand-<vorname>
```
Quelle: [modules/04-git/02-git-grundlagen.md](../../modules/04-git/02-git-grundlagen.md)

### 8. Pull Request erstellen
Erstelle auf GitHub einen PR von deinem Branch auf `main` und beschreibe kurz, was du umgesetzt hast.
Quelle: [modules/03-github/01-github-grundlagen.md](../../modules/03-github/01-github-grundlagen.md)

---

## Modulabdeckung (Check)
- Git-Befehle (`pull`, Branch, `add/commit/push`): `modules/04-git/`
- Terminal-Dateiverwaltung (`cd`, `mkdir`, `echo`): `modules/05-terminal/`
- Markdown-Dokumentation (Meilensteine, Lernjournal): `modules/01-markdown/`
- Pull Request Workflow: `modules/03-github/`

---

## Abgabe
- Unterordner `lernstand_<vorname>/` mit `meilensteine_<vorname>.md` im eigenen Ordner
- Aktualisierter Lernjournal-Eintrag in `lernfortschritt_<name>.md`
- PR auf GitHub erstellt

## Zeitbox
Empfohlen: 30-45 Minuten
