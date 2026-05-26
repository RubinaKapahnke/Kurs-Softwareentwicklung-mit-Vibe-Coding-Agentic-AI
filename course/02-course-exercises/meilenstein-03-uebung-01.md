# Übung Meilenstein 3: Eigenes PRD erstellen

## Ziel
Du lernst, was ein PRD ist und wie du es mit KI-Unterstützung erstellst - so, dass die KI deine Ideen strukturiert und nicht eigene erfindet. Du verstehst dabei, wie eine Prompt-Datei das Verhalten der KI steuert, und erlebst den Unterschied zwischen "KI erfindet" und "KI hilft formulieren".

---

## Vor dem Start - Checkliste

Stelle sicher, bevor du beginnst:

- [ ] VS Code ist geöffnet und du siehst den Repo-Ordner im Explorer (linke Leiste)
- [ ] GitHub Copilot Chat ist aktiv - erkennbar am Chat-Symbol in der linken Leiste
- [ ] Du weisst, wo deine persönliche PRD-Datei liegt: `course/learners/<dein-name>/prd_<dein-name>.md`

In dieser Übung arbeitest du hauptsaechlich mit zwei Dateien gleichzeitig:
1. **Deine PRD-Datei** (`course/learners/<dein-name>/prd_<dein-name>.md`) - dort schreibst du hinein
2. **Die Prompt-Datei** (`.github/prompts/learners-prd-assistent.prompt.md`) - dort liest du nur

> **Wichtig - diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in deine PRD-Datei und deine Lernfortschritt-Datei ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

> Tipp: Du kannst beide Dateien nebeneinander oeffnen. Rechtsklick auf einen Tab → "In Gruppe aufteilen".

---

## Vorbereitung

Lies zuerst: [course-library/06-ai-instructions/02-prd-grundlagen.md → Was ist ein PRD?](../03-course-library/06-ai-instructions/02-prd-grundlagen.md)

Dann öffne deine persönliche PRD-Datei in VS Code:
`course/learners/<dein-name>/prd_<dein-name>.md`

---

## Aufgaben

### 1. Prompt-Datei lesen und verstehen

Öffne die Datei [.github/prompts/learners-prd-assistent.prompt.md](../../.github/prompts/learners-prd-assistent.prompt.md) in VS Code und lies sie durch.

> **Hinweis:** Der Ordner `.github/` ist ein versteckter Ordner - er erscheint ganz oben im VS Code Explorer. Falls du ihn nicht findest: Druecke `Strg+P` (Windows) bzw. `Cmd+P` (Mac) und tippe `.github/prompts/learners-prd-assistent.prompt.md` - dann direkt oeffnen.

Schreibe deine Antworten als Stichpunkte direkt in deine PRD-Datei (`course/learners/<dein-name>/prd_<dein-name>.md`), als neuen Abschnitt `## Meine Beobachtungen zur Prompt-Datei`:
- Welche Regeln gibt der Prompt der KI?
- Warum fragt die KI zuerst - statt sofort zu antworten?
- Was würde passieren, wenn diese Regeln nicht da waeren?

> **Warum schreibst du das hier rein?** Diese Beobachtungen sind dein Denkzettel. Du entwickelst damit ein Verstaendnis, *bevor* du die KI einsetzt. In Aufgabe 5 wirst du diesen Abschnitt durch das fertige PRD ersetzen - das ist so gewollt.

Quelle: [course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md](../03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 2. Erst selbst denken - ohne KI

Beantworte diese drei Fragen schriftlich in deiner PRD-Datei (als neuen Abschnitt `## Meine Ausgangspunkte`):

- Was soll deine App können? (1-2 Sätze)
- Wer nutzt sie?
- Woran merkst du, dass der erste wichtige Teil fertig ist?

Schreibe deine eigenen Antworten - die KI kommt erst in der nächsten Lektion.

> **Warum erst ohne KI?** Wer sofort die KI fragt, bekommt eine Antwort, die gut klingt - aber vielleicht gar nicht das eigene Projekt trifft. Erst wenn du selbst weisst, was du willst, kannst du beurteilen, ob die KI dir wirklich hilft.

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 3. PRD-Assistenten aufrufen

Öffne Copilot Chat mit `Strg+Alt+I` (Windows) bzw. `Cmd+Opt+I` (Mac) - oder klicke auf das Chat-Symbol in der linken Leiste.

Starte dann den PRD-Assistenten so:

1. Klicke in das Eingabefeld des Chats
2. Tippe `/` - es erscheint eine Liste mit verfügbaren Assistenten
3. Tippe "PRD" oder scrolle, bis du **PRD Assistent** siehst
4. Klicke darauf - der Assistent startet automatisch

> **Falls "PRD Assistent" nicht erscheint:** Prüfe, ob die Datei `.github/prompts/learners-prd-assistent.prompt.md` im Repo existiert (Strg+P → Dateiname eintippen). Ohne diese Datei funktioniert der Assistent nicht.

Der Assistent stellt dir drei Fragen - eine nach der anderen. Antworte mit dem, was du in Aufgabe 2 aufgeschrieben hast.

Beobachte: Wie genau trifft der Output das, was du tatsächlich meinst? Was hat die KI trotzdem falsch interpretiert?

Quelle: [course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md](../03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 4. Output bewerten

Lies die Formulierungen der KI durch:

- Was trifft dein Projekt gut?
- Was hat die KI falsch verstanden oder uebertrieben?
- Was fehlt?

Antworte der KI im Chat: Sag ihr, was du ändern oder ergänzen moechtest. Probiere mindestens eine Iteration aus.

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 5. PRD ausfüllen

Uebertrage nur, was wirklich zu deinem Projekt passt, in die vollständige Struktur deines PRD. Ersetze dabei den gesamten bisherigen Inhalt der Datei (inklusive `## Meine Ausgangspunkte` und `## Meine Beobachtungen`) mit der fertigen PRD-Struktur unten. Ersetze alle Platzhalter in eckigen Klammern:

```markdown
# PRD: [Name deines Projekts]

## 1. Vision & Zielsetzung
[Ein Satz: Was ist das Ziel der App?]

## 2. Kernfunktionen (Features)
[Was sind die wichtigsten Dinge, die die App können soll?]

## 3. Technische Leitplanken
[Welche Technologien/Tools setzt du ein? Oder: noch offen.]

## 4. User Stories
- Als [Wer] möchte ich [Was], damit [Warum].
- Als [Wer] möchte ich [Was], damit [Warum].

## 5. Definition of Done
- [Was muss stimmen, damit dieses Feature als fertig gilt?]
```

> Tipp: Nicht alle Abschnitte müssen vollständig sein. Wichtig ist, dass Abschnitte 1, 4 und 5 ausgefüllt sind.

Quelle: [course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md)

---

### 6. Branch erstellen, committen, pushen und PR erstellen

Erstelle einen eigenen Branch für deine Änderungen, committe und pushe - und erstelle danach einen Pull Request auf GitHub.

Den vollständigen Ablauf findest du hier: [course/02-course-exercises/README_UEBUNGEN.md → Vorgehen für Lernende](../02-course-exercises/README_UEBUNGEN.md)

Prüfe zuerst deinen aktuellen Status - damit du weisst, wo du stehst:

```bash
git status   # Zeigt, ob noch ungespeicherte Änderungen offen sind
git branch   # Zeigt, auf welchem Branch du gerade bist
```

Dann erstelle deinen Branch und committe:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M3-01-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main` (wie oben mit `git pull origin main`). Deine Änderungen aus dem letzten PR werden beim Merge zusammengeführt - du musst nichts weiter tun.

```bash
git checkout -b UE-M3-01-<vorname>   # Erstellt einen neuen Branch für diese Übung
git add .
git commit -m "feat: prd <dein-name> erstellt"
git push origin UE-M3-01-<vorname>
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Übungen - UE steht für Übung, M+Zahl für den Meilenstein, YY für die Übungs-Nummer.

Danach auf GitHub einen Pull Request von deinem Branch auf `main` erstellen.

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md), [course-library/03-github/01-github-grundlagen.md](../03-course-library/03-github/01-github-grundlagen.md)

---

## Modulabdeckung (Check)
- ✓ course/03-course-library/06-ai-instructions/01-prompting-grundlagen.md: Grundbausteine eines Prompts, iteratives Prompting
- ✓ course/03-course-library/06-ai-instructions/02-prd-grundlagen.md: Was ist ein PRD, Struktur, PRD als KI-Kontext
- ✓ course/03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md: Prompt-Datei lesen und Verhalten der KI verstehen
- ✓ course/03-course-library/01-markdown/01-markdown-grundlagen.md: Strukturiertes Markdown schreiben
- ✓ course/03-course-library/04-git/03-git-befehlsuebersicht.md: Branch erstellen, Commit und Push
- ✓ course/03-course-library/03-github/01-github-grundlagen.md: Pull Request erstellen

---

## Wiederholung aus frueheren Meilensteinen

Diese Übung setzt voraus, dass du folgendes bereits kannst:

- **Markdown formatieren** - du strukturierst dein PRD mit Überschriften, Listen und Code-Blöcken ([course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md))
- **Datei im eigenen Ordner anlegen und bearbeiten** - du arbeitest in `course/learners/<dein-name>/` ([course-library/05-terminal/01-terminal-grundlagen.md](../03-course-library/05-terminal/01-terminal-grundlagen.md))
- **Branch erstellen, committen und pushen** - du versionierst deine Änderungen ([course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Übungsdatei.

Bevor du den PR erstellst, prüfe kurz:
- [ ] Deine PRD-Datei (`course/learners/<dein-name>/prd_<dein-name>.md`) enthält die fertige PRD-Struktur
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Prüfe nach Abschluss der Übung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe meine Projektidee zuerst selbst in eigenen Worten beschrieben, bevor ich die KI eingesetzt habe.
- [ ] Ich habe erlebt, was passiert, wenn die KI Kontext bekommt - und was passiert, wenn nicht.
- [ ] Ich habe mindestens eine Rueckmeldung an die KI gegeben und den Output dadurch verbessert.
- [ ] Mein PRD enthält nur Inhalte, die wirklich mein Projekt beschreiben - nichts Erfundenes.
- [ ] Ich weiss, was eine Prompt-Datei ist und wie ich sie im Chat aufrufe.



