# Übung Meilenstein 2: Routine aufbauen und Lernstand dokumentieren

## Ziel
Du wiederholst den vollständigen Branch-Commit-PR-Ablauf zweimal hintereinander, uebst den Wechsel zwischen Branches und legst ein strukturiertes Lernjournal-Muster an, das du später einfach weiterfuehren kannst.

---

## Vor dem Start - Checkliste

- [ ] VS Code ist geöffnet und du bist im Repo-Ordner `vibe-coding-0426`
- [ ] Übung 01 und 02 aus Meilenstein 2 sind abgeschlossen
- [ ] Du kannst `git status`, `git checkout -b` und `git push` bereits ohne nachzuschauen

In dieser Übung arbeitest du mit diesen Dateien:
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden - wird strukturiert erweitert)

> **Wichtig - diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in `lernfortschritt_<dein-name>.md` ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Vorbereitung

Lies kurz den Abschnitt "Branches: sicher getrennt arbeiten" in:
[course/03-course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

Danach solltest du in einem Satz erklären können, warum man nicht direkt auf `main` arbeitet.

---

## Aufgaben

### 1. Erster Durchlauf: Kleinen Stand festhalten

Prüfe zuerst deinen aktuellen Status:

```bash
git status
git branch
```

Dann aktualisiere main und erstelle einen neuen Branch:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M2-03a-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main` (wie unten). Deine Änderungen aus dem letzten PR werden beim Merge zusammengeführt - du musst nichts weiter tun.

```bash
git checkout main
git pull origin main
git checkout -b UE-M2-03a-<vorname>   # Erster Branch dieser Übung
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Übungen. Dieser Durchlauf ist `03a`, der zweite weiter unten `03b`.

Öffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` in VS Code und ergänze im Abschnitt `## Lernjournal` einen neuen Eintrag:

```markdown
### [heutiges Datum] - Übung 03 gestartet
- **Was ich gemacht habe:** Übung 03 begonnen, Branch erstellt
- **Was gut lief:**
- **Wo ich haenge:**
- **Nächster Lektion:**
```

> **Warum ins Lernjournal eintragen?** Das Lernjournal in `lernfortschritt_<vorname>.md` ist deine zentrale Anlaufstelle für deinen gesamten Lernstand - alles an einem Ort, keine Doppelstruktur.

Prüfe dann vor dem Commit:

```bash
git status
git branch
```

Dann committe und pushe:

```bash
git add .
git commit -m "docs: meilenstein-2 Übung-03 gestartet"
git push origin UE-M2-03a-<vorname>
```

Erstelle auf GitHub einen PR:

1. Öffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (gelber Banner nach dem Push)
3. Schreibe als Beschreibung: *"Meilenstein 2, Übung 03 - erster Durchlauf"*
4. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke auf "Pull requests" → "New pull request" → Branch auswaehlen.

Quelle: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

---

### 2. Zwischen Branches wechseln

Wechsle zurück zu `main` und hole den neuesten Stand:

```bash
git status         # Alle Änderungen committed?
git checkout main
git pull origin main
git branch         # Prüfe: Bist du auf main (mit * markiert)?
```

> **Falls `git status` noch unveraenderte Änderungen anzeigt:** Committe zuerst (`git add .` → `git commit -m "..."`) oder parke sie kurz mit `git stash`. Erst dann `git checkout main` ausfuehren.

> **Was ist `git stash`?** Es parkt deine ungespeicherten Änderungen kurz zur Seite, ohne sie zu committen - wie ein temporaeres Notizbuch. Mit `git stash pop` holst du sie zurueck. Mehr dazu: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

Quelle: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

---

### 3. Zweiter Durchlauf: Strukturiertes Lernjournal anlegen

Erstelle einen neuen Branch:

```bash
git checkout -b UE-M2-03b-<vorname>   # Zweiter Branch dieser Übung
```

Öffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` in VS Code und fuege einen neuen Journaleintrag ein. Nutze dieses Muster - tippe es ab oder kopiere es und fuell die Luecken aus:

```markdown
## Eintrag [heutiges Datum]

**Was habe ich heute gemacht?**
[Eigene Antwort]

**Was war schwierig oder unklar?**
[Eigene Antwort]

**Was ist mein nächster kleiner Lektion?**
[Eigene Antwort]

**Meilenstein-Fortschritt:**
- [ ] Übung 01 - Lernstand im Terminal verwalten
- [ ] Übung 02 - Terminal-Alltag und Git selbstständig
- [ ] Übung 03 - Routine aufbauen (in Bearbeitung)
```

> **Warum dieses Muster?** Ein festes Format macht Eintraege leichter zu schreiben - auch wenn keine Lust da ist. Drei Fragen, fertig. Der Meilenstein-Fortschritt hilft dir, den Überblick zu behalten.

Quelle: [course/03-course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md)

---

### 4. Zweiten Commit und PR erstellen

Prüfe zuerst:

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

> **Prüfe:** Du hast jetzt zwei offene PRs auf GitHub - einen von Aufgabe 1, einen von hier. Das ist beabsichtigt - du laeuft gerade zwei parallele Änderungen, wie es im Alltag vorkommt.

Quelle: [course/03-course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)

---

### 5. Abschluss: Lernjournal mit Abschluss-Eintrag ergänzen

Öffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` noch einmal und ergänze deinen Eintrag aus Aufgabe 1 oder fuege einen neuen Abschluss-Eintrag hinzu:

```markdown
### [heutiges Datum] - Übung 03 abgeschlossen
- **Was ich gemacht habe:** Vollstaendigen Branch-Commit-PR-Ablauf zweimal durchgefuehrt
- **Was gut lief:**
- **Wo ich haenge:**
- **Nächster Lektion:**
```

Committe diese letzte Änderung direkt im laufenden Branch `lernjournal-<vorname>`:

```bash
git status
git add .
git commit -m "docs: lernjournal Übung-03 abgeschlossen"
git push origin UE-M2-03b-<vorname>
```

> **Hinweis:** Dieser Commit erscheint automatisch im bereits offenen PR von Aufgabe 4 - du musst keinen neuen PR erstellen.

Quelle: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)
- ✓ course/03-course-library/04-git/01-git-grundlagen.md: Branches erklärt, Grundablauf (status, add, commit, push, pull)
- ✓ course/03-course-library/04-git/03-git-befehlsuebersicht.md: `checkout main`, `pull`, `checkout -b`, `stash`, `add`, `commit`, `push`
- ✓ course/03-course-library/03-github/01-github-grundlagen.md: PR erstellen in 5 Lektionen
- ✓ course/03-course-library/01-markdown/01-markdown-grundlagen.md: Strukturierter Lernjournal-Eintrag in Markdown

---

## Wiederholung aus frueheren Meilensteinen

Diese Übung setzt voraus, dass du folgendes bereits kannst:

- **Branch erstellen und PR abschicken** - aus Übung 01 und 02 ([course/03-course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md))
- **Dateien in VS Code bearbeiten und Markdown schreiben** ([course/03-course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md))
- **Lernfortschritt-Datei kennen und öffnen** ([course/03-course-library/02-vscode/01-vscode-grundlagen.md](../03-course-library/02-vscode/01-vscode-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Übungsdatei.

Bevor du den PR erstellst, prüfe kurz:
- [ ] Zwei PRs auf GitHub sind erstellt (Aufgabe 1 und Aufgabe 4)
- [ ] Lernjournal in `lernfortschritt_<vorname>.md` enthält zwei neue Eintraege (Start und Abschluss)

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Prüfe nach Abschluss der Übung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe den vollständigen Branch-Commit-PR-Ablauf zweimal ohne konkrete Anleitung wiederholt.
- [ ] Ich habe zwischen Branches gewechselt und verstehe, warum man vorher `git status` prueft.
- [ ] Ich habe ein Lernjournal-Eintrag-Muster angelegt, das ich später einfach wiederholen kann.
- [ ] Ich kann erklären, was "Routine aufbauen" bei Git konkret bedeutet: gleicher Ablauf, mehrmals.



