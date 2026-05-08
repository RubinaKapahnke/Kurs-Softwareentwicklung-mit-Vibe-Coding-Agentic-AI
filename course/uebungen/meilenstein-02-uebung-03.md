# Uebung Meilenstein 2: Routine aufbauen und Lernstand dokumentieren

## Ziel
Du wiederholst den vollstaendigen Branch-Commit-PR-Ablauf zweimal hintereinander, uebst den Wechsel zwischen Branches und legst ein strukturiertes Lernjournal-Muster an, das du spaeter einfach weiterfuehren kannst.

---

## Vor dem Start – Checkliste

- [ ] VS Code ist geoeffnet und du bist im Repo-Ordner `vibe-coding-0426`
- [ ] Uebung 01 und 02 aus Meilenstein 2 sind abgeschlossen
- [ ] Du kannst `git status`, `git checkout -b` und `git push` bereits ohne nachzuschauen

In dieser Uebung arbeitest du mit diesen Dateien:
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden – wird strukturiert erweitert)

> **Wichtig – diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in `lernfortschritt_<dein-name>.md` ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Vorbereitung

Lies kurz den Abschnitt "Branches: sicher getrennt arbeiten" in:
[course-library/04-git/01-git-grundlagen.md](../course-library/04-git/01-git-grundlagen.md)

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

> **Tipp – falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` – dann `git checkout -b UE-M2-03a-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main` (wie unten). Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt – du musst nichts weiter tun.

```bash
git checkout main
git pull origin main
git checkout -b UE-M2-03a-<vorname>   # Erster Branch dieser Uebung
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen. Dieser Durchlauf ist `03a`, der zweite weiter unten `03b`.

Oeffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` in VS Code und ergaenze im Abschnitt `## Lernjournal` einen neuen Eintrag:

```markdown
### [heutiges Datum] – Uebung 03 gestartet
- **Was ich gemacht habe:** Uebung 03 begonnen, Branch erstellt
- **Was gut lief:**
- **Wo ich haenge:**
- **Naechster Schritt:**
```

> **Warum ins Lernjournal eintragen?** Das Lernjournal in `lernfortschritt_<vorname>.md` ist deine zentrale Anlaufstelle fuer deinen gesamten Lernstand – alles an einem Ort, keine Doppelstruktur.

Pruefe dann vor dem Commit:

```bash
git status
git branch
```

Dann committe und pushe:

```bash
git add .
git commit -m "docs: meilenstein-2 uebung-03 gestartet"
git push origin UE-M2-03a-<vorname>
```

Erstelle auf GitHub einen PR:

1. Oeffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Schreibe als Beschreibung: *"Meilenstein 2, Uebung 03 – erster Durchlauf"*
4. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke auf "Pull requests" → "New pull request" → Branch auswaehlen.

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

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

> **Was ist `git stash`?** Es parkt deine ungespeicherten Aenderungen kurz zur Seite, ohne sie zu committen – wie ein temporaeres Notizbuch. Mit `git stash pop` holst du sie zurueck. Mehr dazu: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

---

### 3. Zweiter Durchlauf: Strukturiertes Lernjournal anlegen

Erstelle einen neuen Branch:

```bash
git checkout -b UE-M2-03b-<vorname>   # Zweiter Branch dieser Uebung
```

Oeffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` in VS Code und fuege einen neuen Journaleintrag ein. Nutze dieses Muster – tippe es ab oder kopiere es und fuell die Luecken aus:

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

Quelle: [course-library/01-markdown/01-markdown-grundlagen.md](../course-library/01-markdown/01-markdown-grundlagen.md)

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
git push origin UE-M2-03b-<vorname>
```

Erstelle auf GitHub einen zweiten PR (gleicher Ablauf wie in Aufgabe 1).

> **Pruefe:** Du hast jetzt zwei offene PRs auf GitHub – einen von Aufgabe 1, einen von hier. Das ist beabsichtigt – du laeuft gerade zwei parallele Aenderungen, wie es im Alltag vorkommt.

Quelle: [course-library/04-git/01-git-grundlagen.md](../course-library/04-git/01-git-grundlagen.md)

---

### 5. Abschluss: Lernjournal mit Abschluss-Eintrag ergaenzen

Oeffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` noch einmal und ergaenze deinen Eintrag aus Aufgabe 1 oder fuege einen neuen Abschluss-Eintrag hinzu:

```markdown
### [heutiges Datum] – Uebung 03 abgeschlossen
- **Was ich gemacht habe:** Vollstaendigen Branch-Commit-PR-Ablauf zweimal durchgefuehrt
- **Was gut lief:**
- **Wo ich haenge:**
- **Naechster Schritt:**
```

Committe diese letzte Aenderung direkt im laufenden Branch `lernjournal-<vorname>`:

```bash
git status
git add .
git commit -m "docs: lernjournal uebung-03 abgeschlossen"
git push origin UE-M2-03b-<vorname>
```

> **Hinweis:** Dieser Commit erscheint automatisch im bereits offenen PR von Aufgabe 4 – du musst keinen neuen PR erstellen.

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)
- ✓ modules/04-git/01-git-grundlagen.md: Branches erklaert, Grundablauf (status, add, commit, push, pull)
- ✓ modules/04-git/03-git-befehlsuebersicht.md: `checkout main`, `pull`, `checkout -b`, `stash`, `add`, `commit`, `push`
- ✓ modules/03-github/01-github-grundlagen.md: PR erstellen in 5 Schritten
- ✓ modules/01-markdown/01-markdown-grundlagen.md: Strukturierter Lernjournal-Eintrag in Markdown

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Branch erstellen und PR abschicken** – aus Uebung 01 und 02 ([course-library/04-git/01-git-grundlagen.md](../course-library/04-git/01-git-grundlagen.md))
- **Dateien in VS Code bearbeiten und Markdown schreiben** ([course-library/01-markdown/01-markdown-grundlagen.md](../course-library/01-markdown/01-markdown-grundlagen.md))
- **Lernfortschritt-Datei kennen und oeffnen** ([course-library/02-vscode/01-vscode-grundlagen.md](../course-library/02-vscode/01-vscode-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab – nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:
- [ ] Zwei PRs auf GitHub sind erstellt (Aufgabe 1 und Aufgabe 4)
- [ ] Lernjournal in `lernfortschritt_<vorname>.md` enthaelt zwei neue Eintraege (Start und Abschluss)

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe den vollstaendigen Branch-Commit-PR-Ablauf zweimal ohne konkrete Anleitung wiederholt.
- [ ] Ich habe zwischen Branches gewechselt und verstehe, warum man vorher `git status` prueft.
- [ ] Ich habe ein Lernjournal-Eintrag-Muster angelegt, das ich spaeter einfach wiederholen kann.
- [ ] Ich kann erklaeren, was "Routine aufbauen" bei Git konkret bedeutet: gleicher Ablauf, mehrmals.
