# Uebung Meilenstein 3: Prompt-Dateien erstellen und nutzen

## Ziel
Du verstehst, wie Prompt-Dateien die KI gezielt steuern, legst eine eigene Prompt-Datei an und erlebst den Unterschied zwischen freiem Prompting und gesteuertem Prompting.

---

## Vor dem Start – Checkliste

- [ ] VS Code ist geoeffnet und du siehst den Repo-Ordner im Explorer (linke Leiste)
- [ ] GitHub Copilot Chat ist aktiv – erkennbar am Chat-Symbol in der linken Leiste
- [ ] Du hast Uebung 02 abgeschlossen (du kennst die vier Prompt-Bausteine)

In dieser Uebung arbeitest du mit diesen Dateien:
- `.github/prompts/learners-prd-assistent.prompt.md` – lesen als Vorbild
- `.github/prompts/learners-erklaer-assistent-<dein-name>.prompt.md` – **neu anlegen** (deine persoenliche Datei)
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` – Beobachtungen eintragen

> **Wichtig – diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in die oben genannten Dateien ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

> **Warum die Lernfortschrittsdatei statt einer Antwortdatei?** Das abzugebende Ergebnis dieser Uebung ist die Prompt-Datei selbst – sie landet im Repo. Die Beobachtungen im Lernjournal sind dein persoenlicher Reflexionsraum und gehoeren in deinen Lernstand.

---

## Vorbereitung

Lies zuerst: [course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md](../course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)

Klaere fuer dich vor dem Start:
- Was ist ein Frontmatter?
- Wo muss eine Prompt-Datei liegen, damit Copilot sie findet?

---

## Aufgaben

### 1. Bestehende Prompt-Datei lesen und Frontmatter verstehen

Oeffne die Datei [.github/prompts/learners-prd-assistent.prompt.md](../../.github/prompts/learners-prd-assistent.prompt.md) in VS Code.

> **Hinweis:** Der Ordner `.github/` erscheint ganz oben im VS Code Explorer. Falls du ihn nicht siehst: `Strg+P` (Windows) bzw. `Cmd+P` (Mac) → `.github/prompts/learners-prd-assistent.prompt.md` eintippen → oeffnen.

Beantworte folgende Fragen als Stichpunkte in deiner Lernfortschrittsdatei unter einem neuen Abschnitt `## Prompt-Datei-Beobachtungen`:

- Was steht im Frontmatter (zwischen den `---`-Zeilen)?
- Welche Regeln gibt diese Datei der KI?
- Woran erkennst du, dass die KI nicht sofort antworten soll, sondern erst fragt?

Quelle: [course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md → Aufbau einer Prompt-Datei](../course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 2. Eigene Prompt-Datei anlegen

Lege eine neue Datei an: `.github/prompts/learners-erklaer-assistent-<dein-name>.prompt.md`

> **Warum der eigene Name im Dateinamen?** Alle Kursteilnehmenden legen diese Datei an und mergen spaeter ihre Branches auf `main`. Wenn alle dieselbe Datei anlegen, entsteht ein Merge-Konflikt. Mit dem eigenen Namen im Dateinamen legt jeder eine *andere* Datei an – kein Konflikt.

> **Hinweis zum Ordner:** Navigiere im Explorer ganz nach oben zu `.github/prompts/`. Rechtsklick auf den Ordner → "Neue Datei" → Dateiname eingeben. Oder: `Strg+P` → Ordnerpfad eintippen.

Deine Datei soll einen **"Erklaer-Assistenten"** beschreiben – eine KI, die dir Fachbegriffe aus dem Vibe Coding immer auf die gleiche, einfache Art erklaert.

Nutze dieses Grundgeruest und fuelle die Luecken mit eigenen Angaben:

```markdown
---
name: "Erklaer-Assistent"
description: "Erklaert Fachbegriffe aus dem Vibe Coding einfach und einheitlich"
agent: "ask"
---

Du bist ein geduldiger Lernbegleiter fuer Einsteiger ins Vibe Coding.

Wenn jemand dir einen Begriff nennt, erklaerst du ihn immer nach diesem Muster:
1. Was bedeutet der Begriff in einem Satz?
2. Ein konkretes Alltagsbeispiel (kein Code)
3. Warum ist das im Vibe Coding relevant?

Halte dich immer an diese Struktur. Erfinde keine weiteren Abschnitte.
Antworte auf Deutsch.
```

> **Warum dieses Muster?** Eine feste Ausgabestruktur ist ein Format-Baustein. Damit kannst du spater viele Begriffe abfragen und immer vergleichbare Antworten bekommen – statt jedes Mal unterschiedlicher Laenge und Tiefe.

Quelle: [course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md → Aufbau einer Prompt-Datei](../course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 3. Prompt-Datei ueber `/` im Copilot Chat aufrufen

Teste jetzt deine neue Prompt-Datei.

**So rufst du sie auf:**

1. Copilot Chat oeffnen (Chat-Symbol in der linken Leiste)
2. Im Chat-Eingabefeld `/` eintippen
3. Eine Liste erscheint – suche nach "Erklaer-Assistent" (deine Datei sollte erscheinen)
4. Auswählen und `Enter` druecken
5. Tippe dann: `branch`

> Falls deine Datei nicht in der Liste erscheint: Pruefe, ob sie wirklich unter `.github/prompts/` liegt und das Frontmatter exakt auf der ersten Zeile beginnt (kein Leerzeichen oder Kommentar davor). Dann VS Code neu laden: `Strg+Shift+P` → `Developer: Reload Window`.

Trage das Ergebnis in deiner Lernfortschrittsdatei unter `## Prompt-Datei-Beobachtungen` ein:
- Wie sah die Antwort der KI aus?
- Hat sie das Erklaermuster (1-2-3) eingehalten?

Quelle: [course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md → Aufruf im Chat](../course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)

---

### 4. Vergleich: Mit Prompt-Datei vs. ohne Prompt-Datei

Starte jetzt einen **neuen Chat** (ohne Prompt-Datei) und stelle dieselbe Frage:
> "Erklaere mir den Begriff 'branch'."

Vergleiche die beiden Antworten und notiere in deiner Lernfortschrittsdatei:
- Was war anders?
- Hat die freie Antwort das gleiche Muster eingehalten?
- Wann waere die Prompt-Datei nuetzlicher – wann reicht freies Prompting?

**So startest du einen neuen Chat:**

1. Copilot Chat ist geoeffnet
2. Oben im Chat-Fenster: Klick auf das `+`-Symbol ("Neuer Chat")
3. Tippe deine Frage direkt (ohne `/`)

> Falls kein `+`-Symbol sichtbar ist: `Strg+Shift+P` → `GitHub Copilot Chat: New Chat` → `Enter`

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md → Die KI weiss nichts von deinem Projekt](../course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 5. Aenderungen committen und PR erstellen

Speichere alle Aenderungen und committe:

Pruefe zuerst deinen aktuellen Status:

```
git status
git branch
```

Dann:

> **Tipp – falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` – dann `git checkout -b UE-M3-03-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main`. Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt – du musst nichts weiter tun.

```
git checkout -b UE-M3-03-<vorname>   # Erstellt einen neuen Branch fuer diese Uebung
git add .
git commit -m "M3 Uebung 03: Eigene Prompt-Datei und Beobachtungen"
git push origin UE-M3-03-<vorname>
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen – UE steht fuer Uebung, M+Zahl fuer den Meilenstein, YY fuer die Uebungs-Nummer.

Erstelle anschliessend auf GitHub einen PR von deinem Branch auf `main`.

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)

- ✓ `course/course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md`: Frontmatter, Aufbau, Aufruf via `/`
- ✓ `course/course-library/06-ai-instructions/01-prompting-grundlagen.md`: Kontext- und Format-Baustein
- ✓ `course/course-library/04-git/03-git-befehlsuebersicht.md`: Branch + Commit + Push + PR

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Branch erstellen und committen** ([course-library/04-git/01-git-grundlagen.md](../course-library/04-git/01-git-grundlagen.md))
- **Neue Datei anlegen (im Explorer oder Terminal)** ([course-library/05-terminal/03-terminal-befehlsuebersicht.md](../course-library/05-terminal/03-terminal-befehlsuebersicht.md))
- **PR auf GitHub erstellen** ([course-library/03-github/01-github-grundlagen.md](../course-library/03-github/01-github-grundlagen.md))
- **Prompting-Bausteine kennen** (Uebung Meilenstein 3-02: Erfolgreich prompten)

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab – nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:
- [ ] Die Datei `.github/prompts/learners-erklaer-assistent-<dein-name>.prompt.md` existiert und hat gueltiges Frontmatter
- [ ] Abschnitt `## Prompt-Datei-Beobachtungen` ist in deiner Lernfortschrittsdatei eingetragen
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich kann erklaeren, was eine Prompt-Datei ist und welchen Vorteil sie gegenueber freiem Prompting hat.
- [ ] Ich habe eine eigene Prompt-Datei mit gueltiger Frontmatter-Struktur erstellt.
- [ ] Ich habe die Prompt-Datei erfolgreich ueber `/` im Copilot Chat aufgerufen.
- [ ] Ich habe erlebt, wie eine Prompt-Datei die KI-Antwort kontrollierbar strukturiert.
- [ ] Ich kann benennen, wann eine Prompt-Datei nuetzlicher ist als einfaches Prompting.

