# Uebung Meilenstein 2: Terminal-Alltag und Git-Befehle selbststaendig anwenden

## Ziel
Du fuehrst typische Terminal- und Git-Aktionen in deinem persoenlichen Ordner durch – ohne Befehle zu kopieren. Ausserdem uebst du, fuer eine gegebene Aufgabe das passende Modul eigenstaendig zu finden.

---

## Vor dem Start – Checkliste

- [ ] VS Code ist geoeffnet und du siehst das Terminal (unterer Bereich – `Strg+J` oeffnet es, falls nicht sichtbar)
- [ ] Du bist im Repo-Ordner `vibe-coding-0426` (pruefe mit `pwd`)
- [ ] Uebung 01 aus Meilenstein 2 ist abgeschlossen (dein Ordner `course/learners/<dein-name>/` existiert)

In dieser Uebung arbeitest du mit diesen Dateien:
- `course/learners/<dein-name>/` (vorhanden – du navigierst dorthin und arbeitest darin)
- `course/learners/<dein-name>/uebung-02-notizen.md` (neu – wird in Aufgabe 3 erstellt)
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (vorhanden – wird am Ende aktualisiert)

> **Wichtig – diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in die oben genannten Dateien ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Aufgaben

### 1. Im Terminal orientieren und navigieren

Tippe diese Befehle einzeln ab (bitte nicht kopieren – das Eintippen hilft beim Einpraegen):

```bash
pwd              # Wo bin ich gerade?
dir              # Was ist in diesem Ordner? (Mac/Linux: ls)
cd apps
dir
cd learners
cd <dein-name>
pwd              # Pruefe: Bist du jetzt in deinem Ordner?
dir              # Siehst du deine eigenen Dateien?
```

> **Tipp:** Mit der `Tab`-Taste vervollstaendigt das Terminal Ordnernamen automatisch. Schreibe `cd le` und druecke `Tab` – der Name erscheint.

> **Falls `<dein-name>` einen Leerzeichen enthaelt:** Setze den Ordnernamen in Anfuehrungszeichen, z.B. `cd "dein name"`.

Quelle: [course-library/05-terminal/03-terminal-befehlsuebersicht.md](../course-library/05-terminal/03-terminal-befehlsuebersicht.md)

---

### 2. Dateien und Ordner verwalten

Erstelle einen temporaeren Testordner und eine Testdatei in deinem persoenlichen Ordner:

```bash
mkdir uebungsordner
cd uebungsordner
echo. > test.md
dir              # Pruefe: Siehst du test.md?
```

Benenne die Datei um und loesche sie danach:

```bash
move test.md umbenannt.md
dir              # Pruefe: Heisst die Datei jetzt umbenannt.md?
del umbenannt.md
dir              # Pruefe: Ist die Datei weg?
```

Gehe eine Ebene zurueck und loesche den Testordner:

```bash
cd ..
rmdir uebungsordner
dir              # Pruefe: Ist uebungsordner verschwunden?
```

> **Achtung:** `del` und `rmdir` loeschen endgueltig – es gibt keinen Papierkorb. Arbeite daher nur mit Testdateien, die du wirklich loeschen kannst.

Quelle: [course-library/05-terminal/03-terminal-befehlsuebersicht.md](../course-library/05-terminal/03-terminal-befehlsuebersicht.md)

---

### 3. Git-Branch erstellen und Notizdatei anlegen

Gehe zurueck zum Repo-Root:

```bash
cd ../../..
pwd              # Du solltest jetzt im vibe-coding-0426-Ordner sein
```

Pruefe zuerst deinen aktuellen Status:

```bash
git status
git branch
```

Aktualisiere main und erstelle einen neuen Branch:

> **Tipp – falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` – dann direkt `git checkout -b UE-M2-02-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main` (wie unten). Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt – du musst nichts weiter tun.

```bash
git checkout main
git pull origin main   # Holt alle neuen Aenderungen aus dem Remote-Repo
git checkout -b UE-M2-02-<vorname>   # Erstellt einen neuen Branch und wechselt direkt darauf
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen – UE steht fuer Uebung, M+Zahl fuer den Meilenstein, YY fuer die Uebungs-Nummer.

Erstelle nun eine Notizdatei in deinem persoenlichen Ordner:

```bash
cd course/learners/<dein-name>
echo. > uebung-02-notizen.md
```

Oeffne `uebung-02-notizen.md` in VS Code (z.B. mit `code uebung-02-notizen.md`) und trage ein:
- Welcher Befehl in Aufgabe 1 und 2 war neu fuer dich?
- Welchen Befehl musst du noch mehr ueben?

> **Tipp fuer VS Code-Oeffnen:** Entweder `code uebung-02-notizen.md` im Terminal oder `Strg+P` → `uebung-02` eintippen → Datei auswaehlen.

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

---

### 4. Passende Modulquellen selbst finden

Das ist eine Denkaufgabe – kein Terminal notig.

Schreibe in `uebung-02-notizen.md` deine Antworten zu diesen drei Situationen. Navigiere dazu zu [course-library/](../course-library/), gehe in den passenden Modulordner und oeffne die `00-*-modulguide.md`.

| Situation | Welches Modul wuerde ich oeffnen? | Welche Datei konkret? |
|---|---|---|
| Ich weiss nicht mehr, wie ich eine Datei im Terminal anlege | ? | ? |
| Ich vergesse, wie ich einen PR auf GitHub erstelle | ? | ? |
| Ich verstehe nicht, warum man Branches braucht | ? | ? |

> **Einstiegspunkte zum Suchen:**
> - Terminal: [course-library/05-terminal/00-terminal-modulguide.md](../course-library/05-terminal/00-terminal-modulguide.md)
> - GitHub: [course-library/03-github/00-github-modulguide.md](../course-library/03-github/00-github-modulguide.md)
> - Git: [course-library/04-git/00-git-modulguide.md](../course-library/04-git/00-git-modulguide.md)

> **Kein Googeln noetig:** Alle Antworten findest du in den Modulen im Repo. Das Ziel ist, die Navigation zu ueben.

Quelle: [course-library/04-git/00-git-modulguide.md](../course-library/04-git/00-git-modulguide.md)

---

### 5. Lernfortschrittsdatei aktualisieren

Oeffne `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` und fuege einen Journaleintrag ein. Nutze dieses Muster:

```markdown
**Was habe ich heute gemacht?**
[Eigene Antwort]

**Was war schwierig oder unklar?**
[Eigene Antwort]

**Was ist mein naechster kleiner Schritt?**
[Eigene Antwort]
```

> **Tipp:** Falls du die Datei nicht im Explorer siehst, druecke `Strg+P` (Windows) / `Cmd+P` (Mac) und tippe `lernfortschritt_` – dann den eigenen Namen auswaehlen.

Quelle: [course-library/01-markdown/02-formatierung_md-files.md](../course-library/01-markdown/02-formatierung_md-files.md)

---

### 6. Committen und pushen (ohne Copy-Paste)

Gehe zurueck zum Repo-Root und pruefe deinen Status:

```bash
cd ../../..
git status
git branch
```

Stagge und committe deine Aenderungen:

```bash
git add .
git commit -m "feat: uebung-02 terminal-alltag <vorname>"
git push origin UE-M2-02-<vorname>
```

> **Pruefe:** Erscheint nach `git push` keine Fehlermeldung, hat es geklappt.

Dann auf GitHub:

1. Oeffne dein Repository auf github.com
2. Klicke auf "Compare & pull request" (erscheint meist direkt nach dem Push als gelber Banner)
3. Waehle als Basis `main` und als Quell-Branch deinen Branch
4. Schreibe eine kurze Beschreibung: *"Uebung 02 – Terminal-Alltag und Git-Befehle geuebt"*
5. Klicke auf "Create pull request"

> Falls der gelbe Banner nicht erscheint: Klicke oben auf "Pull requests" → "New pull request" → deinen Branch auswaehlen.

Quelle: [course-library/03-github/01-github-grundlagen.md](../course-library/03-github/01-github-grundlagen.md)

---

## Modulabdeckung (Check)
- ✓ course/course-library/05-terminal/01-terminal-grundlagen.md: Was ist ein Terminal, Grundkonzepte
- ✓ course/course-library/05-terminal/03-terminal-befehlsuebersicht.md: `pwd`, `dir`/`ls`, `cd`, `mkdir`, `echo`, `move`, `del`, `rmdir`
- ✓ course/course-library/04-git/01-git-grundlagen.md: Grundablauf erklaert (status, add, commit, push), Branches
- ✓ course/course-library/04-git/03-git-befehlsuebersicht.md: `checkout -b`, `add`, `commit -m`, `push origin`
- ✓ course/course-library/03-github/01-github-grundlagen.md: PR erstellen in 5 Schritten
- ✓ course/course-library/04-git/00-git-modulguide.md + course/course-library/05-terminal/00-terminal-modulguide.md + course/course-library/03-github/00-github-modulguide.md: Modul-Navigation ueben

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Terminal oeffnen und im Repo-Ordner arbeiten** ([course-library/05-terminal/01-terminal-grundlagen.md](../course-library/05-terminal/01-terminal-grundlagen.md))
- **Branch erstellen und PR abschicken** – aus Meilenstein 2, Uebung 01 ([course-library/04-git/01-git-grundlagen.md](../course-library/04-git/01-git-grundlagen.md))
- **Dateien in VS Code bearbeiten und Markdown schreiben** ([course-library/01-markdown/01-markdown-grundlagen.md](../course-library/01-markdown/01-markdown-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab – nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:
- [ ] `uebung-02-notizen.md` existiert in deinem persoenlichen Ordner und enthaelt deine Modul-Antworten
- [ ] `lernfortschritt_<name>.md` ist aktualisiert
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe Ordner und Dateien im Terminal erstellt, umbenannt und geloescht – ohne einen Befehl zu kopieren.
- [ ] Ich habe einen Branch erstellt und Aenderungen committed und gepusht – die Befehle sassen aus dem Gedaechtnis.
- [ ] Ich kann erklaeren, was `git status` mir zeigt und warum ich es vor jedem Commit nutze.
- [ ] Ich habe fuer drei typische Situationen das passende Modul gefunden und den Pfad notiert.
- [ ] Ich habe einen PR auf GitHub erstellt und weiss, was "Basis-Branch" und "Quell-Branch" bedeuten.

