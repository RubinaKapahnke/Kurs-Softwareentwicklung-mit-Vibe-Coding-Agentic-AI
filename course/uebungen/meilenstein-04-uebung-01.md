# Übung Meilenstein 4: Von der PRD zur ersten Komponente

## Ziel

Du leitest aus deinem PRD eine Projektstruktur ab, formulierst einen Strukturkontext fuer die KI und beauftragst sie, eine erste Komponente zu erstellen – mit einem Prompt, der ihr genau erklaert, was existiert und was entsteht.

---

## Vor dem Start – Checkliste

- [ ] VS Code ist geoeffnet und du bist im Repo-Ordner (`vibe-coding-0426`)
- [ ] Copilot Chat ist aktiv (Symbol in der linken Leiste oder `Strg+Shift+I` / `Cmd+Shift+I`)
- [ ] Meilenstein 3 ist abgeschlossen (du kannst Prompts formulieren und Prompt-Dateien verwenden)

In dieser Uebung arbeitest du mit diesen Dateien:

- `course/learners/<dein-name>/prd_<dein-name>.md` (dein PRD – bereits vorhanden)
- `course/learners/<dein-name>/lernfortschritt_<dein-name>.md` (dein Lernjournal)

> **Wichtig – diese Datei nicht bearbeiten:** Die Uebungsdatei (die du gerade liest) bleibt unveraendert als Referenz erhalten. Deine eigene Arbeit traegst du ausschliesslich in deine PRD- und Lernfortschritt-Datei ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.

---

## Vorbereitung

Lies vor dem Start:

- [course-library/07-architecture-foundations/01-architecture-foundations-grundlagen.md](../course-library/07-architecture-foundations/01-architecture-foundations-grundlagen.md) – Abschnitte „Komponenten-Denken" und „Ordnerstruktur als Kommunikation"
- [course-library/07-architecture-foundations/02-architecture-foundations-praxis.md](../course-library/07-architecture-foundations/02-architecture-foundations-praxis.md) – Schritte 1 bis 3

---

## Aufgaben

### 1. Dein PRD lesen und Bausteine identifizieren

Oeffne dein PRD (`course/learners/<dein-name>/prd_<dein-name>.md`) und beantworte schriftlich diese drei Fragen direkt in der Datei unter einem neuen Abschnitt `## Strukturanalyse`:

1. **Was zeigt deine App an?** (Alles Sichtbare = Kandidat fuer eine Komponente)
2. **Was passiert bei Interaktion?** (Klicks, Formulare, Filter – eigene Komponenten oder Services)
3. **Woher kommen die Daten?** (JSON-Datei, API, Benutzereingabe)

Erstelle darunter eine kleine Tabelle mit mindestens 2 Zeilen:

| PRD-Aussage | Was wird daraus? |
| :--- | :--- |
| z. B. „Zeige alle X als Karten an" | Komponente `XCard` |
| z. B. „Daten kommen aus einer Datei" | Service `XService` + `x.json` |

> **Warum in deiner PRD-Datei?** Dieser Abschnitt bleibt als Referenz erhalten und wird in Schritt 3 direkt weitergenutzt. Ausserdem kann die KI ihn spaeter als Kontext einlesen.

Quelle: [course-library/07-architecture-foundations/02-architecture-foundations-praxis.md](../course-library/07-architecture-foundations/02-architecture-foundations-praxis.md) (Schritt 1)

---

### 2. Ordnerstruktur fuer dein Projekt skizzieren

Ergaenze deinen `## Strukturanalyse`-Abschnitt um einen Unterabschnitt `### Ordnerstruktur`. Skizziere dort, welche Ordner dein Projekt benoetigt – als Codeblock (wie im Modul gezeigt).

**Faustregeln:**

- Wird etwas mehrfach angezeigt? → `components/`
- Ist es eine eigene Seite? → `pages/`
- Verarbeitet es Daten ohne UI? → `services/`

Beispiel (ersetze mit deiner eigenen Struktur):

```
src/
├── app/
│   ├── components/
│   │   └── dein-baustein/
│   ├── pages/
│   │   └── deine-seite/
│   └── services/
└── assets/
    └── data/
```

Quelle: [course-library/07-architecture-foundations/01-architecture-foundations-grundlagen.md](../course-library/07-architecture-foundations/01-architecture-foundations-grundlagen.md) (Abschnitt „Ordnerstruktur als Kommunikation")

---

### 3. Strukturkontext-Block formulieren und in PRD ablegen

Ergaenze dein PRD (`prd_<dein-name>.md`) um einen weiteren Abschnitt `## Strukturkontext` mit dem ausgefuellten Template:

```
Mein Projekt:
- Stack: [dein Tech-Stack, z. B. Angular + Angular Material + TypeScript]
- Ziel: [1 Satz aus deinem PRD – Vision & Zielsetzung]
- Ordnerstruktur:
  - components/ → wiederverwendbare UI-Bausteine
  - pages/ → Seiten der App
  - services/ → Logik und Datenzugriff
  - assets/data/ → JSON-Datendateien
- Aktuelle Aufgabe: [Komponentenname] – [Verantwortlichkeit in 1 Satz]
- Datenquelle: [Dateiname oder Service-Name]
```

> **Warum als eigener Abschnitt?** Du kannst ihn spaeter per `#prd_<dein-name>.md` in jeden Copilot-Prompt einbinden – die KI liest dann den gesamten Kontext mit.

Quelle: [course-library/07-architecture-foundations/02-architecture-foundations-praxis.md](../course-library/07-architecture-foundations/02-architecture-foundations-praxis.md) (Schritt 3)

---

### 4. KI mit Strukturkontext promten

Beauftragte Copilot Chat, eine erste Komponente fuer dein Projekt zu erstellen.

**Copilot Chat oeffnen:**

1. Klicke auf das Copilot-Symbol in der linken Leiste (oder `Strg+Shift+I` / `Cmd+Shift+I`)
2. Stelle sicher, dass du im **Ask**-Modus bist (oben im Chat-Fenster)
3. Falls der Chat nicht reagiert: VS Code neustarten und erneut versuchen

**Dein Prompt (angepasst auf dein Projekt):**

```
#prd_<dein-name>.md Erstelle die Komponente [Komponentenname].
Sie bekommt [Input-Eigenschaft] als Input und zeigt [Beschreibung] an.
```

> Falls `#prd_<dein-name>.md` nicht funktioniert: Klicke auf das `#`-Symbol im Chat-Eingabefeld und waehle deine PRD-Datei manuell aus der Liste.

**Ergebnis pruefen:**

- Liegt die Datei unter `src/app/components/<komponenten-name>/`?
- Hat sie die Inputs, die du definiert hast?
- Nutzt sie den Stack aus deinem Strukturkontext?

Notiere deine Beobachtung (1-2 Saetze): Was hat die KI gut gemacht? Was fehlt oder weicht ab?

Quelle: [course-library/07-architecture-foundations/02-architecture-foundations-praxis.md](../course-library/07-architecture-foundations/02-architecture-foundations-praxis.md) (Schritt 4)  
Quelle: [course-library/06-ai-instructions/01-prompting-grundlagen.md](../course-library/06-ai-instructions/01-prompting-grundlagen.md) (Abschnitt Kontext + Format)

---

### 5. Beobachtung dokumentieren und committen

Halte in `lernfortschritt_<dein-name>.md` fest:

- Was du in dieser Uebung konkret ausprobiert hast
- Ob die KI das richtige Ergebnis geliefert hat – und warum (nicht)
- Was du beim naechsten Prompt anders machen wuerdest

Pruefe dann deinen Stand und erstelle einen Commit:

```bash
git status
git branch
```

Dann:

> **Tipp – falls dein letzter PR noch nicht gemerged ist:**
> - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` – dann `git checkout -b UE-M4-01-<vorname>`. Dein Lernjournal ist sofort aktuell.
> - **Option B:** Starte von `main`. Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt – du musst nichts weiter tun.

```bash
git checkout -b UE-M4-01-<vorname>   # Erstellt einen neuen Branch fuer diese Uebung
git add .
git commit -m "M4: Strukturanalyse + erster Komponenten-Prompt fuer <dein-name>"
git push origin UE-M4-01-<vorname>
```

> **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Uebungen – UE steht fuer Uebung, M+Zahl fuer den Meilenstein, YY fuer die Uebungs-Nummer.

Erstelle danach auf GitHub einen Pull Request von deinem Branch auf `main`.

Quelle: [course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md)

---

## Modulabdeckung (Check)

- ✓ modules/07-architecture-foundations/01-architecture-foundations-grundlagen.md: Komponenten-Denken, Ordnerstruktur
- ✓ modules/07-architecture-foundations/02-architecture-foundations-praxis.md: PRD → Bausteine, Ordnerstruktur ableiten, Strukturkontext formulieren, KI beauftragen
- ✓ modules/06-ai-instructions/01-prompting-grundlagen.md: Kontext-Baustein, `#`-Syntax
- ✓ modules/04-git/03-git-befehlsuebersicht.md: Branch, Commit, Push, PR

---

## Wiederholung aus frueheren Meilensteinen

Diese Uebung setzt voraus, dass du folgendes bereits kannst:

- **Prompts mit Kontext-Baustein formulieren** ([course-library/06-ai-instructions/01-prompting-grundlagen.md](../course-library/06-ai-instructions/01-prompting-grundlagen.md))
- **Copilot Chat oeffnen und `#`-Kontext verwenden** ([course-library/02-vscode/02-vscode-copilot.md](../course-library/02-vscode/02-vscode-copilot.md))
- **Branch erstellen, committen, pushen und PR erstellen** ([course-library/04-git/03-git-befehlsuebersicht.md](../course-library/04-git/03-git-befehlsuebersicht.md))
- **PRD-Datei lesen und bearbeiten** ([course-library/06-ai-instructions/02-prd-grundlagen.md](../course-library/06-ai-instructions/02-prd-grundlagen.md))

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab – nicht hier in der Uebungsdatei.

Bevor du den PR erstellst, pruefe kurz:

- [ ] `prd_<dein-name>.md` enthaelt die Abschnitte `## Strukturanalyse` und `## Strukturkontext`
- [ ] `lernfortschritt_<dein-name>.md` enthaelt eine Beobachtung zum KI-Ergebnis
- [ ] PR auf GitHub ist erstellt

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.

Pruefe nach Abschluss der Uebung, ob du diese Punkte mit Ja beantworten kannst:

- [ ] Ich kann aus meinem PRD benennen, welche Teile Komponenten, Seiten oder Services werden.
- [ ] Ich habe eine Ordnerstruktur fuer mein Projekt skizziert und begruenden koennen, warum etwas wohin gehoert.
- [ ] Ich habe einen Strukturkontext-Block formuliert, der Stack, Ordner, Komponente und Datenquelle beschreibt.
- [ ] Ich habe die KI mit dem Strukturkontext beauftragt und das Ergebnis auf Korrektheit geprueft.
- [ ] Ich habe erlebt, wie sich ein Prompt mit Kontext vom Prompt ohne Kontext unterscheidet.
