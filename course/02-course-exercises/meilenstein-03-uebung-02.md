# Übung Meilenstein 3: Erfolgreich prompten

## Ziel
Du lernst, wie du Prompts strukturiert aufbaust, iterativ verbesserst und dabei bewusst Kontext gibst - statt einfach drauf loszutippen und auf das Beste zu hoffen.

---

## Vor dem Start - Checkliste

- [ ] VS Code ist geöffnet und du siehst den Repo-Ordner im Explorer (linke Leiste)
- [ ] GitHub Copilot Chat ist aktiv - erkennbar am Chat-Symbol in der linken Leiste
- [ ] Du hast deine persönliche Lernfortschrittsdatei gefunden: `course/learners/<dein-name>/lernfortschritt_<dein-name>.md`

In dieser Übung arbeitest du mit diesen Dateien:
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` - dort traegst du Beobachtungen ein
- Copilot Chat (kein Tab, sondern das Chat-Fenster links/rechts)

> **Wichtig - diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in `lernfortschritt_<dein-name>.md` ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

> **Warum die Lernfortschrittsdatei statt einer Antwortdatei?** In dieser Übung geht es um persönliche Beobachtungen während du promptest - kein Ergebnis zum Abgeben, sondern ein Denktagebuch. Diese Eintraege gehören in deinen Lernstand, nicht in eine Aufgabenloesung.

---

## Vorbereitung

Lies zuerst: [course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

Behalte die Datei offen - du wirst während der Aufgaben immer wieder darauf zurueckschauen.

---

## Aufgaben

### 1. Vier Bausteine an einem Beispiel erkennen

Lies noch einmal den Abschnitt **"Die vier Grundbausteine eines Prompts"** in:
[course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

Lies dann diesen Beispiel-Prompt und trage in deiner Lernfortschrittsdatei unter einem neuen Abschnitt `## Prompting-Beobachtungen` ein, welche Bausteine du erkennst:

> "Du bist ein erfahrener Git-Trainer. Erklaere mir in 3 Saetzen und auf Deutsch, was ein 'merge conflict' ist. Ich bin Anfaenger und habe noch nie mit Git gearbeitet."

Schreibe für jeden Baustein (Rolle, Aufgabe, Kontext, Format) ob er vorhanden ist, und wenn ja, was genau er aussagt.

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md → Die vier Grundbausteine](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 2. Eigenen Zero-Shot-Prompt schreiben und testen

Schreibe einen **Zero-Shot-Prompt** - also einen Prompt ohne Beispiele und ohne Kontext-Baustein. Wähle eine der folgenden Aufgaben:

- "Erklaere mir, was ein Branch in Git ist."
- "Was ist der Unterschied zwischen `git add` und `git commit`?"
- (oder: deine eigene Frage rund ums Vibe Coding)

**So oeffnest du Copilot Chat:**

1. Klicke auf das Chat-Symbol in der linken VS Code Leiste (Sprechblase)
2. Ein Chat-Fenster öffnet sich - dort kannst du tippen
3. Tippe deinen Prompt und druecke `Enter`

> Falls das Chat-Symbol nicht erscheint: `Strg+Shift+P` → `GitHub Copilot Chat: Focus on Chat View` eintippen → `Enter`

Trage die **Antwort der KI stichpunktartig** in deiner Lernfortschrittsdatei im Abschnitt `## Prompting-Beobachtungen` ein: War sie hilfreich? Was hat gefehlt?

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md → Zero-Shot vs. Few-Shot Prompting](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 3. Denselben Prompt mit Kontext-Baustein verbessern

Nimm deinen Prompt aus Aufgabe 2 und erweitere ihn:

- Fuege einen **Kontext-Baustein** hinzu: Was weiss die KI über dich oder dein Projekt?
- Fuege einen **Format-Baustein** hinzu: Wie soll die Antwort aussehen?

Beispiel-Erweiterung (beide Bausteine eingebaut):
> "Ich bin Anfaenger und lerne gerade mit diesem Kurs-Repo. Erklaere mir in 3 Saetzen und auf Deutsch, was ein Branch in Git ist. Antworte nur in Stichpunkten."

> Der Kontext-Baustein: *"Ich bin Anfaenger und lerne gerade mit diesem Kurs-Repo"*
> Der Format-Baustein: *"Antworte nur in Stichpunkten"*

Sende den verbesserten Prompt im **gleichen Chat-Fenster** ab und vergleiche die Antwort mit der vorherigen.

Notiere in deiner Lernfortschrittsdatei unter `## Prompting-Beobachtungen`:
- Was hat sich verändert?
- Welcher Baustein hat den groessten Unterschied gemacht?

> **Warum im gleichen Chat?** Die KI kennt den vorherigen Austausch noch - das ist selbst schon Kontext. Wenn du das bewusst nutzt, hast du den nächsten Schritt des Prompting-Dialogs verstanden.

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md → Die KI weiss nichts von deinem Projekt](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 4. Iteratives Prompting: Antwort verbessern

Die erste Antwort der KI ist selten perfekt. Uebe jetzt das **iterative Nachfragen**:

Lies die letzte Antwort der KI kritisch: Was ist unklar? Was fehlt? Was könnte praeziser sein?

Schreibe eine **Nachfrage im gleichen Chat** - also keine neue Frage von vorne, sondern ein konkretes "Das hat mir noch gefehlt: ..." oder "Kannst du das Beispiel einfacher machen?".

Mache das mindestens **zwei Mal** (zwei Nachfragen).

Trage danach in deiner Lernfortschrittsdatei unter `## Prompting-Beobachtungen` ein:
- Wie hat sich die Qualitaet der Antworten verändert?
- Was hast du im Dialog gelernt, das du vorher nicht wusstest?

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md → Iteratives Prompting](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

---

### 5. Lernjournal-Eintrag anlegen und committen

Schreibe am Ende deiner `## Prompting-Beobachtungen`-Sektion drei kurze Punkte:
- Was habe ich heute über Prompting gelernt?
- Was hat mich am meisten ueberrascht?
- Was will ich beim nächsten Prompt anders machen?

Dann: Änderungen committen und pushen.

Prüfe zuerst deinen aktuellen Status:

```
git status
git branch
```

Dann:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M3-02-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main`. Deine Änderungen aus dem letzten PR werden beim Merge zusammengeführt - du musst nichts weiter tun.

```
git checkout -b UE-M3-02-<vorname>   # Erstellt einen neuen Branch für diese Übung
git add .
git commit -m "M3 Übung 02: Prompting-Beobachtungen eingetragen"
git push origin UE-M3-02-<vorname>
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Übungen - UE steht für Übung, M+Zahl für den Meilenstein, YY für die Übungs-Nummer.

Quelle: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)

- ✓ `course/03-course-library/06-ai-instructions/01-prompting-grundlagen.md`: Vier Bausteine, Zero-Shot, Kontext, iteratives Prompting
- ✓ `course/03-course-library/04-git/03-git-befehlsuebersicht.md`: Branch + Commit + Push

---

## Wiederholung aus frueheren Meilensteinen

Diese Übung setzt voraus, dass du folgendes bereits kannst:

- **Branch erstellen und committen** ([course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md))
- **Lernfortschrittsdatei bearbeiten und speichern** ([course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md))
- **PR auf GitHub erstellen** ([course-library/03-github/01-github-grundlagen.md](../03-course-library/03-github/01-github-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Übungsdatei.

Bevor du den PR erstellst, prüfe kurz:
- [ ] Abschnitt `## Prompting-Beobachtungen` ist in deiner Lernfortschrittsdatei eingetragen
- [ ] Mindestens vier Eintraege vorhanden (Aufgabe 1-4)
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Prüfe nach Abschluss der Übung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich kann die vier Bausteine eines Prompts (Rolle, Aufgabe, Kontext, Format) an einem Beispiel benennen.
- [ ] Ich habe erlebt, wie ein Prompt mit Kontext-Baustein eine andere Antwort erzeugt als derselbe Prompt ohne.
- [ ] Ich habe mindestens zwei Mal iterativ nachgefragt und dabei eine Verbesserung beobachtet.
- [ ] Ich kann erklären, warum die KI ohne Kontext Annahmen erfindet.
- [ ] Ich weiss, dass ich im gleichen Chat weiterarbeiten kann und das selbst schon Kontext ist.



