# Uebung Meilenstein 3: Eigenes PRD erstellen

## Ziel
Du lernst, was ein PRD ist und wie du es mit KI-Unterstuetzung erstellst – so, dass die KI deine Ideen strukturiert und nicht eigene erfindet. Du verstehst dabei, wie eine Prompt-Datei das Verhalten der KI steuert, und erlebst den Unterschied zwischen "KI erfindet" und "KI hilft formulieren".

---

## Vor dem Start – Checkliste

Stelle sicher, bevor du beginnst:

- [ ] VS Code ist geoeffnet und du siehst den Repo-Ordner im Explorer (linke Leiste)
- [ ] GitHub Copilot Chat ist aktiv – erkennbar am Chat-Symbol in der linken Leiste
- [ ] Du weisst, wo deine persoenliche PRD-Datei liegt: `apps/learners/<dein-name>/prd_<dein-name>.md`

In dieser Uebung arbeitest du hauptsaechlich mit zwei Dateien gleichzeitig:
1. **Deine PRD-Datei** (`apps/learners/<dein-name>/prd_<dein-name>.md`) – dort schreibst du hinein
2. **Die Prompt-Datei** (`.github/prompts/prd-assistent.prompt.md`) – dort liest du nur

> Tipp: Du kannst beide Dateien nebeneinander oeffnen. Rechtsklick auf einen Tab → "In Gruppe aufteilen".

---

## Vorbereitung

Lies zuerst: [modules/06-ai-instructions/02-prd-grundlagen.md → Was ist ein PRD?](../../modules/06-ai-instructions/02-prd-grundlagen.md)

Dann oeffne deine persoenliche PRD-Datei in VS Code:
`apps/learners/<dein-name>/prd_<dein-name>.md`

---

## Aufgaben

### 1. Prompt-Datei lesen und verstehen

Oeffne die Datei [.github/prompts/prd-assistent.prompt.md](../../.github/prompts/prd-assistent.prompt.md) in VS Code und lies sie durch.

> **Hinweis:** Der Ordner `.github/` ist ein versteckter Ordner – er erscheint ganz oben im VS Code Explorer. Falls du ihn nicht findest: Druecke `Strg+P` (Windows) bzw. `Cmd+P` (Mac) und tippe `.github/prompts/prd-assistent.prompt.md` – dann direkt oeffnen.

Schreibe deine Antworten als Stichpunkte direkt in deine PRD-Datei (`apps/learners/<dein-name>/prd_<dein-name>.md`), als neuen Abschnitt `## Meine Beobachtungen zur Prompt-Datei`:
- Welche Regeln gibt der Prompt der KI?
- Warum fragt die KI zuerst – statt sofort zu antworten?
- Was wuerde passieren, wenn diese Regeln nicht da waeren?

> **Warum schreibst du das hier rein?** Diese Beobachtungen sind dein Denkzettel. Du entwickelst damit ein Verstaendnis, *bevor* du die KI einsetzt. In Aufgabe 5 wirst du diesen Abschnitt durch das fertige PRD ersetzen – das ist so gewollt.

Quelle: [modules/06-ai-instructions/03-prompt-dateien-grundlagen.md](../../modules/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 2. Erst selbst denken – ohne KI

Beantworte diese drei Fragen schriftlich in deiner PRD-Datei (als neuen Abschnitt `## Meine Ausgangspunkte`):

- Was soll deine App koennen? (1–2 Saetze)
- Wer nutzt sie?
- Woran merkst du, dass der erste wichtige Teil fertig ist?

Schreibe deine eigenen Antworten – die KI kommt erst im naechsten Schritt.

> **Warum erst ohne KI?** Wer sofort die KI fragt, bekommt eine Antwort, die gut klingt – aber vielleicht gar nicht das eigene Projekt trifft. Erst wenn du selbst weisst, was du willst, kannst du beurteilen, ob die KI dir wirklich hilft.

Quelle: [modules/06-ai-instructions/01-prompting-grundlagen.md](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

---

### 3. PRD-Assistenten aufrufen

Oeffne Copilot Chat mit `Strg+Alt+I` (Windows) bzw. `Cmd+Opt+I` (Mac) – oder klicke auf das Chat-Symbol in der linken Leiste.

Starte dann den PRD-Assistenten so:

1. Klicke in das Eingabefeld des Chats
2. Tippe `/` – es erscheint eine Liste mit verfuegbaren Assistenten
3. Tippe "PRD" oder scrolle, bis du **PRD Assistent** siehst
4. Klicke darauf – der Assistent startet automatisch

> **Falls "PRD Assistent" nicht erscheint:** Pruefe, ob die Datei `.github/prompts/prd-assistent.prompt.md` im Repo existiert (Strg+P → Dateiname eintippen). Ohne diese Datei funktioniert der Assistent nicht.

Der Assistent stellt dir drei Fragen – eine nach der anderen. Antworte mit dem, was du in Aufgabe 2 aufgeschrieben hast.

Beobachte: Wie genau trifft der Output das, was du tatsaechlich meinst? Was hat die KI trotzdem falsch interpretiert?

Quelle: [modules/06-ai-instructions/03-prompt-dateien-grundlagen.md](../../modules/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 4. Output bewerten

Lies die Formulierungen der KI durch:

- Was trifft dein Projekt gut?
- Was hat die KI falsch verstanden oder uebertrieben?
- Was fehlt?

Antworte der KI im Chat: Sag ihr, was du aendern oder ergaenzen moechtest. Probiere mindestens eine Iteration aus.

Quelle: [modules/06-ai-instructions/01-prompting-grundlagen.md](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

---

### 5. PRD ausfuellen

Uebertrage nur, was wirklich zu deinem Projekt passt, in die vollstaendige Struktur deines PRD. Ersetze dabei den gesamten bisherigen Inhalt der Datei (inklusive `## Meine Ausgangspunkte` und `## Meine Beobachtungen`) mit der fertigen PRD-Struktur unten. Ersetze alle Platzhalter in eckigen Klammern:

```markdown
# PRD: [Name deines Projekts]

## 1. Vision & Zielsetzung
[Ein Satz: Was ist das Ziel der App?]

## 2. Kernfunktionen (Features)
[Was sind die wichtigsten Dinge, die die App koennen soll?]

## 3. Technische Leitplanken
[Welche Technologien/Tools setzt du ein? Oder: noch offen.]

## 4. User Stories
- Als [Wer] moechte ich [Was], damit [Warum].
- Als [Wer] moechte ich [Was], damit [Warum].

## 5. Definition of Done
- [Was muss stimmen, damit dieses Feature als fertig gilt?]
```

> Tipp: Nicht alle Abschnitte muessen vollstaendig sein. Wichtig ist, dass Abschnitte 1, 4 und 5 ausgefuellt sind.

Quelle: [modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md)

---

### 6. Branch erstellen, committen, pushen und PR erstellen

Erstelle einen eigenen Branch fuer deine Aenderungen, committe und pushe – und erstelle danach einen Pull Request auf GitHub.

Den vollstaendigen Ablauf findest du hier: [docs/uebungen/README_UEBUNGEN.md → Vorgehen fuer Lernende](../uebungen/README_UEBUNGEN.md)

Pruefe zuerst deinen aktuellen Status – damit du weisst, wo du stehst:

```bash
git status   # Zeigt, ob noch ungespeicherte Aenderungen offen sind
git branch   # Zeigt, auf welchem Branch du gerade bist
```

Dann erstelle deinen Branch und committe:

```bash
git checkout -b prd-<dein-name>
git add .
git commit -m "feat: prd <dein-name> erstellt"
git push origin prd-<dein-name>
```

Danach auf GitHub einen Pull Request von deinem Branch auf `main` erstellen.

Quelle: [modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md), [modules/03-github/01-github-grundlagen.md](../../modules/03-github/01-github-grundlagen.md)

---

## Modulabdeckung (Check)
- ✓ modules/06-ai-instructions/01-prompting-grundlagen.md: Grundbausteine eines Prompts, iteratives Prompting
- ✓ modules/06-ai-instructions/02-prd-grundlagen.md: Was ist ein PRD, Struktur, PRD als KI-Kontext
- ✓ modules/06-ai-instructions/03-prompt-dateien-grundlagen.md: Prompt-Datei lesen und Verhalten der KI verstehen
- ✓ modules/01-markdown/01-markdown-grundlagen.md: Strukturiertes Markdown schreiben
- ✓ modules/04-git/03-git-befehlsuebersicht.md: Branch erstellen, Commit und Push
- ✓ modules/03-github/01-github-grundlagen.md: Pull Request erstellen

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Markdown formatieren** – du strukturierst dein PRD mit Ueberschriften, Listen und Code-Bloecken ([modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md))
- **Datei im eigenen Ordner anlegen und bearbeiten** – du arbeitest in `apps/learners/<dein-name>/` ([modules/05-terminal/01-terminal-grundlagen.md](../../modules/05-terminal/01-terminal-grundlagen.md))
- **Branch erstellen, committen und pushen** – du versionierst deine Aenderungen ([modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md))

---

## Abgabe

Bevor du den PR erstellst, pruefe kurz:
- [ ] Deine PRD-Datei (`apps/learners/<dein-name>/prd_<dein-name>.md`) enthaelt die fertige PRD-Struktur
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich habe meine Projektidee zuerst selbst in eigenen Worten beschrieben, bevor ich die KI eingesetzt habe.
- [ ] Ich habe erlebt, was passiert, wenn die KI Kontext bekommt – und was passiert, wenn nicht.
- [ ] Ich habe mindestens eine Rueckmeldung an die KI gegeben und den Output dadurch verbessert.
- [ ] Mein PRD enthaelt nur Inhalte, die wirklich mein Projekt beschreiben – nichts Erfundenes.
- [ ] Ich weiss, was eine Prompt-Datei ist und wie ich sie im Chat aufrufe.
