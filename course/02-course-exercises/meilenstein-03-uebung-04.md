# Übung Meilenstein 3: Kontext-Qualität im Repo verbessern

## Ziel

Du pruefst, wie gut deine Dateien als KI-Kontext funktionieren, verbesserst dein PRD auf die fuenf Standard-Abschnitte und erlebst direkt, wie sich ein vollstaendiger Kontext auf die Qualitaet der KI-Antwort auswirkt.

---

## Vor dem Start - Checkliste

- [ ] VS Code ist geoeffnet und du bist im Repo-Ordner (`vibe-coding-0426`)
- [ ] Copilot Chat ist aktiv (Symbol in der linken Leiste oder `Strg+Shift+I` / `Cmd+Shift+I`)
- [ ] Uebung 3 (Prompt-Dateien) ist abgeschlossen

In dieser Uebung arbeitest du mit diesen Dateien:

- `course/learners/<dein-name>/prd_<dein-name>.md` (dein PRD)
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (dein Lernjournal)

> **Wichtig - diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in deine PRD- und Lernfortschritt-Datei ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Vorbereitung

Lies vor dem Start:

- [course-library/06-ai-instructions/02-prd-grundlagen.md](../03-course-library/06-ai-instructions/02-prd-grundlagen.md) - Abschnitt „Aufbau eines PRD"
- [course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md) - Abschnitt „Die KI weiss nichts von deinem Projekt"

---

## Aufgaben

### 1. Dein PRD auf Vollstaendigkeit pruefen

Oeffne `course/learners/<dein-name>/prd_<dein-name>.md` und pruefe, ob diese fuenf Abschnitte vorhanden und ausgefuellt sind:

1. `## 1. Vision & Zielsetzung` - Ein Satz: Was ist das Ziel der App?
2. `## 2. Kernfunktionen (Features)` - Was soll die App koennen?
3. `## 3. Technische Leitplanken` - Welche Technologien werden eingesetzt?
4. `## 4. User Stories` - Als [Wer] moechte ich [Was], damit [Warum].
5. `## 5. Definition of Done` - Wann ist ein Feature fertig?

Halte direkt in deiner PRD-Datei fest, welche Abschnitte fehlen oder leer sind - als kurze Notiz unter einem neuen Abschnitt `## Kontext-Check`.

Quelle: [course-library/06-ai-instructions/02-prd-grundlagen.md](../03-course-library/06-ai-instructions/02-prd-grundlagen.md) (Abschnitt „Aufbau eines PRD")

---

### 2. Fehlende Abschnitte mit KI ergaenzen

Lass Copilot Chat dir dabei helfen, fehlende oder duenne PRD-Abschnitte zu verbessern.

**Copilot Chat oeffnen:**

1. Klicke auf das Copilot-Symbol in der linken Leiste (oder `Strg+Shift+I` / `Cmd+Shift+I`)
2. Stelle sicher, dass du im **Ask**-Modus bist
3. Falls der Chat nicht erscheint: VS Code neustarten und erneut versuchen

**Dein Prompt:**

```
#prd_<dein-name>.md Mein PRD ist noch unvollstaendig.
Schlage mir fehlende Abschnitte vor, die den Standard-Aufbau
(Vision, Kernfunktionen, Technische Leitplanken, User Stories,
Definition of Done) ergaenzen.
```

Uebernimm die Vorschlaege, die zu deinem Projekt passen - und passe sie an. Du musst nichts eins zu eins uebernehmen.

> Falls `#prd_<dein-name>.md` nicht funktioniert: Klicke auf das `#`-Symbol im Chat-Eingabefeld und waehle deine PRD-Datei manuell aus der Liste.

Quelle: [course-library/06-ai-instructions/02-prd-grundlagen.md](../03-course-library/06-ai-instructions/02-prd-grundlagen.md) (Abschnitt „PRD als KI-Kontext")  
Quelle: [course/03-course-library/02-vscode/02-vscode-copilot.md](../03-course-library/02-vscode/02-vscode-copilot.md) (Abschnitt `#`-Kontext)

---

### 3. Vorher-Nachher-Vergleich durchfuehren

Starte einen **neuen Chat** (neues Chat-Symbol oben im Chat-Panel oder `Strg+Shift+N` im Chat-Fenster) und stelle dieselbe Frage zweimal:

**Ohne Kontext:**

```
Was soll meine App koennen? Nenne die wichtigsten Funktionen.
```

Notiere, was die KI antwortet (oder erfindet).

**Mit Kontext:**

```
#prd_<dein-name>.md Was soll meine App koennen? Nenne die wichtigsten Funktionen.
```

Vergleiche die Antworten. Halte in `lernfortschritt_<dein-name>.md` fest:

- Was hat sich veraendert?
- Welche Aussage aus deinem PRD hat die KI direkt aufgegriffen?
- Was war trotzdem ungenau oder falsch?

> **Warum ein neuer Chat?** Ein neuer Chat hat keinen Gespraechs-Kontext mehr - so siehst du den reinen Unterschied, den dein PRD macht.

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md) (Abschnitt „Die KI weiss nichts von deinem Projekt")

---

### 4. Aenderungen committen

Pruefe zuerst deinen aktuellen Stand:

```bash
git status
git branch
```

Dann:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M3-04-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main`. Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt - du musst nichts weiter tun.

```bash
git checkout -b UE-M3-04-<vorname>   # Erstellt einen neuen Branch fuer diese Uebung
git add .
git commit -m "M3: PRD-Qualitaet verbessert und Kontext-Vergleich dokumentiert fuer <dein-name>"
git push origin UE-M3-04-<vorname>
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen - UE steht fuer Uebung, M+Zahl fuer den Meilenstein, YY fuer die Uebungs-Nummer.

Erstelle danach auf GitHub einen Pull Request von deinem Branch auf `main`.

Quelle: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)

- ✓ course/03-course-library/06-ai-instructions/02-prd-grundlagen.md: PRD-Aufbau (5 Abschnitte), PRD als KI-Kontext
- ✓ course/03-course-library/06-ai-instructions/01-prompting-grundlagen.md: Die KI weiss nichts vom Projekt, Kontext-Baustein
- ✓ course/03-course-library/02-vscode/02-vscode-copilot.md: `#`-Kontext im Copilot Chat
- ✓ course/03-course-library/04-git/03-git-befehlsuebersicht.md: Branch, Commit, Push, PR

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Prompts mit Kontext-Baustein formulieren** ([course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md))
- **Copilot Chat oeffnen und `#`-Kontext verwenden** ([course/03-course-library/02-vscode/02-vscode-copilot.md](../03-course-library/02-vscode/02-vscode-copilot.md))
- **Branch erstellen, committen, pushen und PR erstellen** ([course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:

- [ ] `prd_<dein-name>.md` enthaelt alle 5 PRD-Abschnitte (zumindest als Entwurf)
- [ ] `lernfortschritt_<dein-name>.md` enthaelt den Vorher-Nachher-Vergleich
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich kann benennen, welche Abschnitte ein vollstaendiges PRD haben sollte.
- [ ] Ich habe erlebt, wie sich die Qualitaet der KI-Antwort verbessert, wenn ich mein PRD als Kontext einbinde.
- [ ] Ich habe mindestens einen fehlenden oder duennen PRD-Abschnitt mit KI-Unterstuetzung verbessert.
- [ ] Ich verstehe, warum ein neuer Chat ein echtes Vorher-Nachher sichtbar macht.

