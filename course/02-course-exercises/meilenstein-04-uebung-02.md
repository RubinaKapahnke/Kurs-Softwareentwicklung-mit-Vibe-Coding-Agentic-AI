# Übung Meilenstein 4: KI-Code lesen und gezielt verbessern

## Ziel

Du liest den ersten KI-generierten Code aus deinem Projekt systematisch, dokumentierst den Datenfluss und setzt genau eine kleine Logikverbesserung mit geringem Risiko um.

---

## Vor dem Start - Checkliste

- [ ] VS Code ist geöffnet und dein eigenes Projekt-Repo (mit der ersten Komponente aus Meilenstein 4) ist geladen.
- [ ] Copilot Chat ist aktiv (Symbol in der linken Leiste oder `Strg+Shift+I` / `Cmd+Shift+I`).
- [ ] Deine PRD-Datei und deine Lernfortschritt-Datei sind bereit.

In dieser Übung arbeitest du mit diesen Dateien:

- `course/learners/<dein-name>/prd_<dein-name>.md` (dein Strukturkontext aus Meilenstein 4)
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (dein Lernjournal)
- einer Komponenten- oder Service-Datei aus deinem eigenen Repo (z. B. `src/app/components/...`)

> **Wichtig - diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in deine PRD-, Projekt- und Lernfortschritt-Datei ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Vorbereitung

Lies vor dem Start:

- [course-library/08-programmierlogik/01-programmierlogik-grundlagen.md](../03-course-library/08-programmierlogik/01-programmierlogik-grundlagen.md)
- [course-library/08-programmierlogik/02-programmierlogik-code-lesen.md](../03-course-library/08-programmierlogik/02-programmierlogik-code-lesen.md)

---

## Aufgaben

### 1. Einen konkreten Codeabschnitt auswählen

Wähle eine Datei aus deinem eigenen Repo, die in Meilenstein 4 mit KI entstanden ist (Komponente oder Service). Ergänze in `lernfortschritt_<dein-name>.md` einen Abschnitt `## M4 Übung 02 - Code lesen` mit einem Satz:

"Diese Datei soll ..."

Halte darunter fest, warum du genau diese Datei ausgewählt hast.

Quelle: [course-library/08-programmierlogik/02-programmierlogik-code-lesen.md](../03-course-library/08-programmierlogik/02-programmierlogik-code-lesen.md) (Lektion 1)

---

### 2. Code in Blöcke teilen und Versteh-Notiz ausfüllen

Teile den gewaehlten Code in 3-5 logische Blöcke (z. B. Eingaben, Verarbeitung, Ausgabe, Fehlerbehandlung). Nutze danach in deiner Lernfortschritt-Datei diese Struktur:

```text
Codeabschnitt:
Aufgabe in 1 Satz:
Eingaben:
Wichtige Bedingung:
Ausgabe:
Unsichere Stelle:
Nächster kleiner Test:
```

> **Warum diese Notiz?** Du machst deinen Denkweg sichtbar und kannst später gezielt prüfen, ob die Logikverbesserung wirklich geholfen hat.

Quelle: [course-library/08-programmierlogik/02-programmierlogik-code-lesen.md](../03-course-library/08-programmierlogik/02-programmierlogik-code-lesen.md) (Lektionen 2 und 3)

---

### 3. Datenfluss und Bedingungen bewusst prüfen

Dokumentiere in `lernfortschritt_<dein-name>.md` in 3-5 Stichpunkten:

- Woher die Daten kommen
- Wo sie verarbeitet werden
- Wo sie ausgegeben werden
- Welche Bedingung kritisch für korrektes Verhalten ist

Markiere danach genau eine Stelle, die du als kleine Verbesserung umsetzen willst (z. B. unklarer Variablenname oder fehlender Randfall).

Quelle: [course-library/08-programmierlogik/01-programmierlogik-grundlagen.md](../03-course-library/08-programmierlogik/01-programmierlogik-grundlagen.md)

---

### 4. Copilot für eine gezielte Rückfrage nutzen

Nutze Copilot Chat für eine gezielte Versteh- oder Verbesserungsfrage.

**Copilot Chat öffnen:**

1. Klicke auf das Copilot-Symbol in der linken Leiste (oder `Strg+Shift+I` / `Cmd+Shift+I`).
2. Stelle sicher, dass du im Ask-Modus bist.
3. Schreibe eine konkrete Frage statt "Bitte fixen".

Beispiel-Prompt:

```text
#prd_<dein-name>.md Erklaere nur den Datenfluss der Datei in 5 Stichpunkten.
Nenne danach genau eine kleine Logikverbesserung mit geringem Risiko.
```

> Falls `#prd_<dein-name>.md` nicht funktioniert: Klicke im Chatfeld auf `#` und wähle die PRD-Datei manuell aus.

Notiere in deiner Lernfortschritt-Datei, was an der Antwort hilfreich war und was du ignoriert hast.

Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)
Quelle: [course-library/08-programmierlogik/02-programmierlogik-code-lesen.md](../03-course-library/08-programmierlogik/02-programmierlogik-code-lesen.md) (Lektion 4)

---

### 5. Genau eine kleine Logikverbesserung umsetzen

Setze in deinem eigenen Repo genau eine kleine Verbesserung um, die du in Lektion 3 markiert hast. Geeignete Beispiele:

- sprechender Variablenname
- fruehe Rueckgabe für leere Daten
- klarere Bedingung mit Hilfsvariable

> **Warum nur eine kleine Änderung?** Du minimierst Risiko und kannst die Wirkung der Änderung klar bewerten.

Dokumentiere in `lernfortschritt_<dein-name>.md` kurz den Vorher/Nachher-Effekt.

Quelle: [course-library/08-programmierlogik/02-programmierlogik-code-lesen.md](../03-course-library/08-programmierlogik/02-programmierlogik-code-lesen.md) (Lektion 5)
Quelle: [course-library/07-architecture-foundations/02-architecture-foundations-praxis.md](../03-course-library/07-architecture-foundations/02-architecture-foundations-praxis.md)

---

### 6. Dokumentieren, committen und PR erstellen

Prüfe zuerst deinen aktuellen Stand:

```bash
git status
git branch
```

Dann:

> **Tipp - falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` - dann `git checkout -b UE-M4-02-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main`. Deine Änderungen aus dem letzten PR werden beim Merge zusammengeführt - du musst nichts weiter tun.

```bash
git checkout -b UE-M4-02-<vorname>
git add .
git commit -m "M4: KI-Code lesen und kleine Logikverbesserung für <dein-name>"
git push origin UE-M4-02-<vorname>
```

Erstelle danach auf GitHub einen Pull Request von deinem Branch auf `main`.

Quelle: [course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)

- [ ] course/03-course-library/08-programmierlogik/00-programmierlogik-code-verstehen-modulguide.md: Einstieg und Selbstcheck für Code-Verstehen
- [ ] course/03-course-library/08-programmierlogik/01-programmierlogik-grundlagen.md: Variablen, Funktionen, Bedingungen, Datenfluss
- [ ] course/03-course-library/08-programmierlogik/02-programmierlogik-code-lesen.md: Lektionfolge zum Lesen und Verbessern von KI-Code
- [ ] course/03-course-library/07-architecture-foundations/02-architecture-foundations-praxis.md: Kontext aus PRD und strukturierte Weiterarbeit
- [ ] course/03-course-library/06-ai-instructions/01-prompting-grundlagen.md: gezielte Rückfragen im Chat
- [ ] course/03-course-library/04-git/03-git-befehlsuebersicht.md: Branch, Commit, Push, PR

---

## Wiederholung aus frueheren Meilensteinen

Diese Übung setzt voraus, dass du folgendes bereits kannst:

- **Strukturkontext in der PRD-Datei pflegen** ([course-library/07-architecture-foundations/02-architecture-foundations-praxis.md](../03-course-library/07-architecture-foundations/02-architecture-foundations-praxis.md))
- **Copilot Chat mit Datei-Kontext nutzen** ([course/03-course-library/02-vscode/02-vscode-copilot.md](../03-course-library/02-vscode/02-vscode-copilot.md))
- **Branch erstellen, committen, pushen und PR erstellen** ([course/03-course-library/04-git/03-git-befehlsuebersicht.md](../03-course-library/04-git/03-git-befehlsuebersicht.md))
- **Beobachtungen strukturiert in Markdown dokumentieren** ([course/03-course-library/01-markdown/01-markdown-grundlagen.md](../03-course-library/01-markdown/01-markdown-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab - nicht hier in der Übungsdatei.

- [ ] `lernfortschritt_<dein-name>.md` enthält eine ausgefuellte Code-Versteh-Notiz plus Datenfluss-Stichpunkte.
- [ ] In deinem eigenen Repo ist genau eine kleine Logikverbesserung umgesetzt und kurz begruendet.
- [ ] PR auf GitHub ist erstellt.

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

- [ ] Ich kann einen KI-Codeabschnitt in Eingabe, Verarbeitung und Ausgabe aufteilen.
- [ ] Ich habe mindestens eine kritische Bedingung erkannt und in eigenen Worten erklaert.
- [ ] Ich habe eine präzise Rückfrage an Copilot gestellt und die Antwort kritisch bewertet.
- [ ] Ich habe genau eine kleine Logikverbesserung mit geringem Risiko umgesetzt.
- [ ] Ich kann begruenden, warum ich zuerst kleine statt grosse Änderungen mache.


