# Uebung Meilenstein 3: Erfolgreich prompten

## Ziel
Du lernst, wie du Prompts strukturiert aufbaust, iterativ verbesserst und dabei bewusst Kontext gibst – statt einfach drauf loszutippen und auf das Beste zu hoffen.

---

## Vor dem Start – Checkliste

- [ ] VS Code ist geoeffnet und du siehst den Repo-Ordner im Explorer (linke Leiste)
- [ ] GitHub Copilot Chat ist aktiv – erkennbar am Chat-Symbol in der linken Leiste
- [ ] Du hast deine persoenliche Lernfortschrittsdatei gefunden: `apps/learners/<dein-name>/lernfortschritt_<dein-name>.md`

In dieser Uebung arbeitest du mit diesen Dateien:
- `apps/learners/<dein-name>/lernfortschritt_<dein-name>.md` – dort traegst du Beobachtungen ein
- Copilot Chat (kein Tab, sondern das Chat-Fenster links/rechts)

> **Wichtig – diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in `lernfortschritt_<dein-name>.md` ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

> **Warum die Lernfortschrittsdatei statt einer Antwortdatei?** In dieser Uebung geht es um persoenliche Beobachtungen waehrend du promptest – kein Ergebnis zum Abgeben, sondern ein Denktagebuch. Diese Eintraege gehoeren in deinen Lernstand, nicht in eine Aufgabenloesung.

---

## Vorbereitung

Lies zuerst: [modules/06-ai-instructions/01-prompting-grundlagen.md](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

Behalte die Datei offen – du wirst waehrend der Aufgaben immer wieder darauf zurueckschauen.

---

## Aufgaben

### 1. Vier Bausteine an einem Beispiel erkennen

Lies noch einmal den Abschnitt **"Die vier Grundbausteine eines Prompts"** in:
[modules/06-ai-instructions/01-prompting-grundlagen.md](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

Lies dann diesen Beispiel-Prompt und trage in deiner Lernfortschrittsdatei unter einem neuen Abschnitt `## Prompting-Beobachtungen` ein, welche Bausteine du erkennst:

> "Du bist ein erfahrener Git-Trainer. Erklaere mir in 3 Saetzen und auf Deutsch, was ein 'merge conflict' ist. Ich bin Anfaenger und habe noch nie mit Git gearbeitet."

Schreibe fuer jeden Baustein (Rolle, Aufgabe, Kontext, Format) ob er vorhanden ist, und wenn ja, was genau er aussagt.

Quelle: [modules/06-ai-instructions/01-prompting-grundlagen.md → Die vier Grundbausteine](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

---

### 2. Eigenen Zero-Shot-Prompt schreiben und testen

Schreibe einen **Zero-Shot-Prompt** – also einen Prompt ohne Beispiele und ohne Kontext-Baustein. Waehle eine der folgenden Aufgaben:

- "Erklaere mir, was ein Branch in Git ist."
- "Was ist der Unterschied zwischen `git add` und `git commit`?"
- (oder: deine eigene Frage rund ums Vibe Coding)

**So oeffnest du Copilot Chat:**

1. Klicke auf das Chat-Symbol in der linken VS Code Leiste (Sprechblase)
2. Ein Chat-Fenster oeffnet sich – dort kannst du tippen
3. Tippe deinen Prompt und druecke `Enter`

> Falls das Chat-Symbol nicht erscheint: `Strg+Shift+P` → `GitHub Copilot Chat: Focus on Chat View` eintippen → `Enter`

Trage die **Antwort der KI stichpunktartig** in deiner Lernfortschrittsdatei im Abschnitt `## Prompting-Beobachtungen` ein: War sie hilfreich? Was hat gefehlt?

Quelle: [modules/06-ai-instructions/01-prompting-grundlagen.md → Zero-Shot vs. Few-Shot Prompting](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

---

### 3. Denselben Prompt mit Kontext-Baustein verbessern

Nimm deinen Prompt aus Aufgabe 2 und erweitere ihn:

- Fuege einen **Kontext-Baustein** hinzu: Was weiss die KI ueber dich oder dein Projekt?
- Fuege einen **Format-Baustein** hinzu: Wie soll die Antwort aussehen?

Beispiel-Erweiterung (beide Bausteine eingebaut):
> "Ich bin Anfaenger und lerne gerade mit diesem Kurs-Repo. Erklaere mir in 3 Saetzen und auf Deutsch, was ein Branch in Git ist. Antworte nur in Stichpunkten."

> Der Kontext-Baustein: *"Ich bin Anfaenger und lerne gerade mit diesem Kurs-Repo"*
> Der Format-Baustein: *"Antworte nur in Stichpunkten"*

Sende den verbesserten Prompt im **gleichen Chat-Fenster** ab und vergleiche die Antwort mit der vorherigen.

Notiere in deiner Lernfortschrittsdatei unter `## Prompting-Beobachtungen`:
- Was hat sich veraendert?
- Welcher Baustein hat den groessten Unterschied gemacht?

> **Warum im gleichen Chat?** Die KI kennt den vorherigen Austausch noch – das ist selbst schon Kontext. Wenn du das bewusst nutzt, hast du den naechsten Schritt des Prompting-Dialogs verstanden.

Quelle: [modules/06-ai-instructions/01-prompting-grundlagen.md → Die KI weiss nichts von deinem Projekt](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

---

### 4. Iteratives Prompting: Antwort verbessern

Die erste Antwort der KI ist selten perfekt. Uebe jetzt das **iterative Nachfragen**:

Lies die letzte Antwort der KI kritisch: Was ist unklar? Was fehlt? Was koennte praeziser sein?

Schreibe eine **Nachfrage im gleichen Chat** – also keine neue Frage von vorne, sondern ein konkretes "Das hat mir noch gefehlt: ..." oder "Kannst du das Beispiel einfacher machen?".

Mache das mindestens **zwei Mal** (zwei Nachfragen).

Trage danach in deiner Lernfortschrittsdatei unter `## Prompting-Beobachtungen` ein:
- Wie hat sich die Qualitaet der Antworten veraendert?
- Was hast du im Dialog gelernt, das du vorher nicht wusstest?

Quelle: [modules/06-ai-instructions/01-prompting-grundlagen.md → Iteratives Prompting](../../modules/06-ai-instructions/01-prompting-grundlagen.md)

---

### 5. Lernjournal-Eintrag anlegen und committen

Schreibe am Ende deiner `## Prompting-Beobachtungen`-Sektion drei kurze Punkte:
- Was habe ich heute ueber Prompting gelernt?
- Was hat mich am meisten ueberrascht?
- Was will ich beim naechsten Prompt anders machen?

Dann: Aenderungen committen und pushen.

Pruefe zuerst deinen aktuellen Status:

```
git status
git branch
```

Dann:

> **Tipp – falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` – dann `git checkout -b UE-M3-02-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main`. Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt – du musst nichts weiter tun.

```
git checkout -b UE-M3-02-<vorname>   # Erstellt einen neuen Branch fuer diese Uebung
git add .
git commit -m "M3 Uebung 02: Prompting-Beobachtungen eingetragen"
git push origin UE-M3-02-<vorname>
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen – UE steht fuer Uebung, M+Zahl fuer den Meilenstein, YY fuer die Uebungs-Nummer.

Quelle: [modules/04-git/03-git-befehlsuebersicht.md](../../modules/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)

- ✓ `modules/06-ai-instructions/01-prompting-grundlagen.md`: Vier Bausteine, Zero-Shot, Kontext, iteratives Prompting
- ✓ `modules/04-git/03-git-befehlsuebersicht.md`: Branch + Commit + Push

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Branch erstellen und committen** ([modules/04-git/01-git-grundlagen.md](../../modules/04-git/01-git-grundlagen.md))
- **Lernfortschrittsdatei bearbeiten und speichern** ([modules/01-markdown/01-markdown-grundlagen.md](../../modules/01-markdown/01-markdown-grundlagen.md))
- **PR auf GitHub erstellen** ([modules/03-github/01-github-grundlagen.md](../../modules/03-github/01-github-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab – nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:
- [ ] Abschnitt `## Prompting-Beobachtungen` ist in deiner Lernfortschrittsdatei eingetragen
- [ ] Mindestens vier Eintraege vorhanden (Aufgabe 1–4)
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich kann die vier Bausteine eines Prompts (Rolle, Aufgabe, Kontext, Format) an einem Beispiel benennen.
- [ ] Ich habe erlebt, wie ein Prompt mit Kontext-Baustein eine andere Antwort erzeugt als derselbe Prompt ohne.
- [ ] Ich habe mindestens zwei Mal iterativ nachgefragt und dabei eine Verbesserung beobachtet.
- [ ] Ich kann erklaeren, warum die KI ohne Kontext Annahmen erfindet.
- [ ] Ich weiss, dass ich im gleichen Chat weiterarbeiten kann und das selbst schon Kontext ist.
