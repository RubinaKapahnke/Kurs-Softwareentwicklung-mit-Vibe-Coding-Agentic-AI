# Uebung Meilenstein 2: Routine aufbauen und Lernstand dokumentieren

## Ziel
Du wiederholst den vollstaendigen Branch-Commit-PR-Ablauf zweimal hintereinander, uebst den Wechsel zwischen Branches und legst ein strukturiertes Lernjournal-Muster an, das du spaeter einfach weiterfuehren kannst.

---

## Vor dem Start – Checkliste

- [ ] VS Code ist geoeffnet und du bist im Repo-Ordner `vibe-coding-0426`
- [ ] Uebung 01 und 02 aus Meilenstein 2 sind abgeschlossen
- [ ] Du kannst `git status`, `git checkout -b` und `git push` bereits ohne nachzuschauen

In dieser Uebung arbeitest du mit diesen Dateien:
- `apps/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden – wird strukturiert erweitert)
- `apps/learners/<dein-name>/lernstand_<vorname>/meilensteine_<vorname>.md` (vorhanden – wird aktualisiert)

---

## Vorbereitung

Lies kurz den Abschnitt "Branches: sicher getrennt arbeiten" in:
[modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md)

Danach solltest du in einem Satz erklaeren koennen, warum man nicht direkt auf `main` arbeitet.

---

## Aufgaben

### 1. Erster Durchlauf: Kleinen Stand festhalten

Pruefe zuerst deinen aktuellen Status:

```bash
git status
git branch
```

Dann aktualisiere main und erstelle einen neuen Branch:

```bash
git checkout main
git pull origin main
git checkout -b rueckblick-<vorname>
```

Oeffne `apps/learners/<dein-name>/lernstand_<vorname>/meilensteine_<vorname>.md` in VS Code und ergaenze ganz unten eine neue Zeile:

```
## Meilenstein 2 – Uebung 03 gestartet: [heutiges Datum]
```

> **Warum das Datum eintragen?** Du baust damit eine echte Dokumentation deines Lernwegs auf – spaeter kannst du zurueckschauen, wann du welche Meilensteine angegangen hast. Diese kleine Gewohnheit macht deinen Fortschritt sichtbar.

Pruefe dann vor dem Commit:

```bash
git status
git branch
```

Dann committe und pushe:

```bash
git add .
git commit -m "docs: meilenstein-2 uebung-03 gestartet"
git push origin rueckblick-<vorname>
```

Erstelle auf GitHub einen PR:

1. Oeffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Schreibe als Beschreibung: *"Meilenstein 2, Uebung 03 – erster Durchlauf"*
4. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke auf "Pull requests" → "New pull request" → Branch auswaehlen.

Quelle: [modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md)

---

### 2. Zwischen Branches wechseln

Wechsle zurueck zu `main` und hole den neuesten Stand:

```bash
git status         # Alle Aenderungen committed?
git checkout main
git pull origin main
git branch         # Pruefe: Bist du auf main (mit * markiert)?
```

> **Falls `git status` noch unveraenderte Aenderungen anzeigt:** Committe zuerst (`git add .` → `git commit -m "..."`) oder parke sie kurz mit `git stash`. Erst dann `git checkout main` ausfuehren.

> **Was ist `git stash`?** Es parkt deine ungespeicherten Aenderungen kurz zur Seite, ohne sie zu committen – wie ein temporaeres Notizbuch. Mit `git stash pop` holst du sie zurueck. Mehr dazu: [modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md)

Quelle: [modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md)

---

### 3. Zweiter Durchlauf: Strukturiertes Lernjournal anlegen

Erstelle einen neuen Branch:

```bash
git checkout -b lernjournal-<vorname>
```

Oeffne `apps/learners/<dein-name>/lernfortschritt_<dein-name>.md` in VS Code und fuege einen neuen Journaleintrag ein. Nutze dieses Muster – tippe es ab oder kopiere es und fuell die Luecken aus:

```markdown
## Eintrag [heutiges Datum]

**Was habe ich heute gemacht?**
[Eigene Antwort]

**Was war schwierig oder unklar?**
[Eigene Antwort]

**Was ist mein naechster kleiner Schritt?**
[Eigene Antwort]

**Meilenstein-Fortschritt:**
- [x] Uebung 01 – Lernstand im Terminal verwalten
- [x] Uebung 02 – Terminal-Alltag und Git selbststaendig
- [ ] Uebung 03 – Routine aufbauen (in Bearbeitung)
```

> **Warum dieses Muster?** Ein festes Format macht Eintraege leichter zu schreiben – auch wenn keine Lust da ist. Drei Fragen, fertig. Der Meilenstein-Fortschritt hilft dir, den Ueberblick zu behalten.

Quelle: [modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md)

---

### 4. Zweiten Commit und PR erstellen

Pruefe zuerst:

```bash
git status
git branch
```

Dann:

```bash
git add .
git commit -m "docs: lernjournal-eintrag <vorname> hinzugefuegt"
git push origin lernjournal-<vorname>
```

Erstelle auf GitHub einen zweiten PR (gleicher Ablauf wie in Aufgabe 1).

> **Pruefe:** Du hast jetzt zwei offene PRs auf GitHub – einen von Aufgabe 1, einen von hier. Das ist beabsichtigt – du laeuft gerade zwei parallele Aenderungen, wie es im Alltag vorkommt.

Quelle: [modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md)

---

### 5. Abschluss: Uebung 03 im Meilenstein-Stand eintragen

Oeffne `apps/learners/<dein-name>/lernstand_<vorname>/meilensteine_<vorname>.md` noch einmal und ergaenze unter dem Eintrag aus Aufgabe 1 eine neue Zeile:

```
## Meilenstein 2 – Uebung 03 abgeschlossen: [heutiges Datum]
```

Committe diese letzte Aenderung direkt im laufenden Branch `lernjournal-<vorname>`:

```bash
git status
git add .
git commit -m "docs: meilenstein-2 uebung-03 abgeschlossen"
git push origin lernjournal-<vorname>
```

> **Hinweis:** Dieser Commit erscheint automatisch im bereits offenen PR von Aufgabe 4 – du musst keinen neuen PR erstellen.

Quelle: [modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)
- ✓ modules/04-git/01-git-grundlagen.md: Branches erklaert, Grundablauf (status, add, commit, push, pull)
- ✓ modules/04-git/03-git-befehlsuebersicht.md: `checkout main`, `pull`, `checkout -b`, `stash`, `add`, `commit`, `push`
- ✓ modules/03-github/01-github-grundlagen.md: PR erstellen in 5 Schritten
- ✓ modules/01-markdown/01-markdown-grundlagen.md: Strukturierter Lernjournal-Eintrag in Markdown

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Branch erstellen und PR abschicken** – aus Uebung 01 und 02 ([modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md))
- **Dateien in VS Code bearbeiten und Markdown schreiben** ([modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md))
- **Lernfortschritt-Datei kennen und oeffnen** ([modules/02-vscode/01-vscode-grundlagen.md](../../modules/02-vscode/01-vscode-grundlagen.md))

---

## Abgabe

Bevor du den PR erstellst, pruefe kurz:
- [ ] Zwei PRs auf GitHub sind erstellt (Aufgabe 1 und Aufgabe 4)
- [ ] Lernjournal enthaelt einen Eintrag mit dem festen Muster (3 Fragen + Meilenstein-Fortschritt)
- [ ] `meilensteine_<vorname>.md` enthaelt Eintraege fuer Start und Abschluss dieser Uebung

---

## Lernerfolgs-Kriterien

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe den vollstaendigen Branch-Commit-PR-Ablauf zweimal ohne konkrete Anleitung wiederholt.
- [ ] Ich habe zwischen Branches gewechselt und verstehe, warum man vorher `git status` prueft.
- [ ] Ich habe ein Lernjournal-Eintrag-Muster angelegt, das ich spaeter einfach wiederholen kann.
- [ ] Ich kann erklaeren, was "Routine aufbauen" bei Git konkret bedeutet: gleicher Ablauf, mehrmals.
