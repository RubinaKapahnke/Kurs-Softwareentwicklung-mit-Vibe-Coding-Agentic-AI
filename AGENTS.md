# AGENTS

## README Sync Standard

Whenever files or folders are added, renamed, or removed in the repo:
- Update the project structure tree in `README.md` to reflect the change.
- This applies especially to: new modules, new `.github/` subfolders, new learner files, new `course/uebungen/` files.
- Do not let the README structure fall out of sync with the actual repo.

### README-Datei Benennungskonvention
- Unterordner-READMEs heißen **immer** `README_<ORDNERNAME>.md` (z.B. `README_UEBUNGEN.md`, `README_TOOLS.md`).
- **Nie** `README.md` in Unterordnern verwenden – das ist ausschließlich der Name der Root-Datei.
- Diese Konvention gilt für alle neuen Dateien, die eine Unterordner-Übersicht oder Einführung bieten.

### Agent-Datei Benennungskonvention
Agent-Dateien liegen in `.github/agents/` und folgen dem Muster `<rolle>-<name>.agent.md`:
- **`course-dev-`**: Agents für Kursentwicklung (Dozenten-Perspektive), z.B. `course-dev-exercise-creator.agent.md`
- **`learners-`**: Agents für Lernende, z.B. `learners-help.agent.md`

### Prompt-Datei Benennungskonvention
Prompt-Dateien liegen in `.github/prompts/` und folgen dem gleichen Rollenpräfix-Muster `<rolle>-<name>.prompt.md`:
- **`course-dev-`**: Prompts für Kursentwicklung (Dozenten-Perspektive), z.B. `course-dev-new-module.prompt.md`
- **`learners-`**: Prompts für Lernende, z.B. `learners-pr-checklist.prompt.md`

---

## Purpose
This repository is a shared learning workspace for a closed group in a vibe-coding course.

## Language
- Communicate with the user in German unless the user explicitly asks for another language.
- Keep wording beginner-friendly and concrete.

## Core Workflow

### Central Architecture: NEXT_STEPS → Modules → Exercises
The learning structure follows this hierarchy:

1. **NEXT_STEPS.md** (zentral) → Defines milestones and learning goals
2. **course/modules/** (zentral) → Explain concepts and commands
   - `00-modulguide.md` → Navigation, overview, and **inline Selbstcheck** (Must/Should/Nice checklists)
   - `01-*-grundlagen.md` → Concepts ("Why?", "How?")
   - `02/03-*-befehlsuebersicht.md` → Quick reference for commands (Terminal, Git only)
3. **course/uebungen/** (zentral) → Exercises with direct module source links
4. **course/learners/** (dezentral) → Individual learning progress per person

### Lernfortschritt-Datei Struktur (`lernfortschritt_<name>.md`)

Jede Lernfortschritt-Datei hat diese festen Abschnitte (einmalig, nicht pro Übung):

```markdown
# Lernfortschritt: <Name>

## Aktueller Fokus
**Was ich gerade lerne:**
- [ ] ...

## Abgeschlossene Meilensteine
- [ ] Meilenstein 1: ...

## Lernjournal

### DD.MM. (Uebung XX – Titel)
**Was habe ich heute gemacht?**
...

**Abgabe UE-MX-YY:**
- [x] ...

**Lernerfolgs-Kriterien UE-MX-YY:**
- [x] ...

## Das möchte ich noch lernen
- [ ] ...

## Fragen an die Gruppe
- ...
```

**Regeln:**
- `## Das möchte ich noch lernen` und `## Fragen an die Gruppe` erscheinen **einmal** am Dateiende – nicht nach jedem Journaleintrag.
- Abgabe- und Lernerfolgs-Kriterien-Checklisten werden **direkt unter den passenden Journaleintrag** geschrieben (nicht am Dateiende).
- Kein separater `## Nächster kleiner Schritt`-Abschnitt – der nächste Schritt steht im letzten Journaleintrag.

**Key principle:** No redundant explanations. Each element has one clear role. Exercises directly link to module sources—learners click the link, understand the concept, and complete the task.

### NEXT_STEPS.md
- `NEXT_STEPS.md` is the central roadmap and should stay central.
- Individual learning progress is managed only in the personal files under `course/learners/`.
- Do not introduce wording that assumes fixed weekly pacing in learner progress files.
- The participant circle is closed. Do not add instructions for new participants.

### Exercise Workflow
- Central exercises live in `course/uebungen/`.
- Participants do not create exercises; they solve centrally defined exercises.
- Each participant stores their answer in their own learner folder.
- When changing an exercise, keep it aligned with the corresponding milestone in `NEXT_STEPS.md`.

## Source Standard For Exercises
- Every exercise task point should reference a concrete source in `course/modules/`.
- Sources should be clickable markdown links when the document format supports it.
- Each exercise should include a short section named `Modulabdeckung (Check)`.
- Each exercise must include a section named `Wiederholung aus frueheren Meilensteinen` between `Modulabdeckung (Check)` and `Lernerfolgs-Kriterien`. This section lists skills from previous milestones that are needed to complete the exercise, with links to the relevant module files.
- Each exercise must include a section named `Lernerfolgs-Kriterien` at the end, after `Modulabdeckung (Check)`. This section contains 3-6 checkboxes that let learners verify whether the exercise achieved its intended outcome. Criteria must be observable and self-assessable (e.g. "Ich habe X erlebt", "Ich kann Y benennen"), not just task completion.
- If an exercise step has no matching module explanation, improve the module coverage before relying on that exercise.
- **Why this standard?** The module source is not just a reference—it's the primary path to understanding. Learners click the source link to understand *why* the task matters, then complete it.

## Beginner-Friendliness Standard For Exercises
Every exercise must be usable by inexperienced, low-self-organization learners without outside help. Apply these rules:

1. **"Vor dem Start"-Checkliste:** Every exercise begins with a checklist (3 items max) covering environment prerequisites (e.g. VS Code open, Copilot active, correct folder). Also list which files the learner will need during the exercise.
2. **Hinweise zu versteckten oder unerwarteten Orten:** When an exercise references files in hidden folders (e.g. `.github/`) or non-obvious locations, add a navigation tip directly under the link. Example: `Strg+P` (Windows) / `Cmd+P` (Mac) → type filename.
3. **"Warum?"-Hinweise fuer temporaere Abschnitte:** If learners write content into a file that will later be replaced or overwritten, explain why at the point where they write it—not only at the point where it gets replaced.
4. **Schrittweise Anleitungen fuer UI-Interaktionen:** For any multi-step UI interaction (e.g. opening Copilot Chat, using slash commands, navigating menus), provide numbered steps instead of a single sentence. Always include a fallback ("Falls X nicht erscheint: ...").
5. **Status-Check vor Git-Befehlen:** Before any `git checkout`, `git add`, or `git push` block, include `git status` and `git branch` so learners know their current state before acting.

## Documentation Rules
- Prefer clickable markdown links for workspace files in documentation.
- Keep `README.md`, `NEXT_STEPS.md`, and `course/uebungen/README_UEBUNGEN.md` consistent when workflow rules change.
- Avoid explaining the same concept in multiple places—link instead.
- Preserve the existing repo structure and wording style unless the user asks for a broader rewrite.

## Module Coverage Expectations
- Before referencing a module as a source, verify that it actually explains the relevant command or workflow.
- If coverage is missing, update the module or choose a more accurate source.

## Module Structure (Conventions)
Each module follows this pattern:
- `00-<modulname>-modulguide.md` → Intro + Inhalt (links) + **inline Selbstcheck** (Must/Should/Nice + "Wenn du nachholen willst")
- `01-<modulname>-grundlagen.md` → Conceptual explanation (not commands)
- `02/03-<modulname>-befehlsuebersicht.md` → Tables with Befehl|Wofuer|Beispiel|Achtung (Terminal, Git only)

**Wichtig:** Es gibt keine separate `themenueberblick.md`-Datei. Der Selbstcheck mit Must/Should/Nice-Checklisten ist immer direkt im `00-*-modulguide.md` als `## Selbstcheck`-Abschnitt enthalten.

## Change Style
- Prefer incremental improvements over radical rewrites.
- When simplifying documents, preserve the central learning logic and progress workflow.
- Avoid adding process that shifts responsibility from central exercise definition to participants.

---

## How to Extend: Neue Module, Übungen, Meilensteine

### ✅ Neues Modul hinzufügen

**Schritt 1: Modul-Ordner erstellen**
```
course/modules/XX-<modulname>/
├── 00-<modulname>-modulguide.md
├── 01-<modulname>-grundlagen.md
└── 03-<modulname>-befehlsuebersicht.md  (nur bei Terminal/Git)
```

**Schritt 2: Jede Datei nach Template erstellen**

`00-modulguide.md`:
```markdown
# Modulguide: [Name]

[1 Satz: Was vermittelt dieses Modul?]

## Inhalt

1. [01-modulname-grundlagen.md](./01-<modulname>-grundlagen.md)
2. [Optional: Weitere Inhalte](./...)

## Selbstcheck

Nutze die Checklisten als Selbstcheck fuer das [Name]-Modul.

### Must have
- [ ] Ich kann X
- [ ] Ich kann Y

### Should have
- [ ] Ich kann A

### Nice to have
- [ ] Ich kann B

## Wenn du etwas nachholen willst
[Links zu Grundlagen und anderen Modulen]
```

> **Wichtig:** Kein separates `themenueberblick.md` anlegen. Selbstcheck gehört inline in den Modulguide.

`01-*-grundlagen.md` (beliebig lang):
- Erklärt **Konzepte und Warum** (nicht Befehle)
- Zielgruppe: Lernende, die verstehen wollen
- **KEINE** Befehlstabellen hier

`03-*-befehlsuebersicht.md` (nur Terminal/Git):
```markdown
| Befehl | Wofuer? | Beispiel | Achtung |
| `command` | Beschreibung | `command example` | Hinweis |
```

**Schritt 3: Zu NEXT_STEPS.md verlinken**
- Neuen Meilenstein hinzufügen ODER
- Existierenden Meilenstein ergänzen
- Modul-Einstieg: `[course/modules/XX-name/00-modulguide.md](course/modules/XX-name/00-modulguide.md)`
- Vertiefung: Einzelne Dateien wie `01-grundlagen.md`, `03-befehlsuebersicht.md`

**Schritt 4: README.md aktualisieren**
- Neue Module in Projektstruktur aufnehmen
- Konsistenz überprüfen

**Schritt 5: AGENTS.md aktualisieren**
- Falls neue Modul-Struktur-Konvention: hier dokumentieren

---

### ✅ Neue Übung erstellen

**Schritt 1: Quellen in Modulen prüfen**
- **MUSS ERST:** Sicherstellen, dass alle benötigten Konzepte in `01-*-grundlagen.md` erklärt sind
- Falls nicht: Modul vorher ergänzen!

**Schritt 2: Übungsdatei erstellen**
```
course/uebungen/meilenstein-XX-uebung-YY.md
```

**Template** (als Rohtext – Einrückung beim Kopieren entfernen):

    # Übung Meilenstein XX: [Titel]
    
    ## Ziel
    [1-2 Sätze: Was wird erreicht?]
    
    ---
    
    ## Vor dem Start – Checkliste
    
    - [ ] [Voraussetzung 1, z.B. VS Code ist geöffnet]
    - [ ] [Voraussetzung 2, z.B. Copilot Chat ist aktiv]
    - [ ] [Voraussetzung 3, z.B. du bist im richtigen Ordner]
    
    In dieser Übung arbeitest du mit diesen Dateien:
    - `[Datei 1]`
    - `[Datei 2]`
    
    > **Wichtig – diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit trägst du ausschließlich in die oben genannten Dateien ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.
    
    ---
    
    ## Vorbereitung
    [Optional: Lies zuerst Modul XY]
    
    ---
    
    ## Aufgaben
    
    ### 1. [Aufgabe 1]
    [Beschreibung]
    
    > **Hinweis zu verstecktem Ort** (falls nötig): Der Ordner `.github/` erscheint ganz oben im Explorer. Falls nicht sichtbar: `Strg+P` → Dateinamen eintippen.
    
    > **Warum?** (falls Inhalt später ersetzt wird): [Erklärung, warum dieser Schritt trotzdem wichtig ist]
    
    Quelle: [course/modules/XX-modul/01-modul-grundlagen.md](../../course/modules/XX-modul/01-modul-grundlagen.md)
    
    ### 2. [Aufgabe mit UI-Interaktion]
    [Beschreibung]
    
    1. [Schritt 1]
    2. [Schritt 2]
    3. [Schritt 3]
    
    > Falls [X] nicht erscheint: [Fallback-Hinweis]
    
    Quelle: [course/modules/XX-modul/03-modul-befehlsuebersicht.md](../../course/modules/XX-modul/03-modul-befehlsuebersicht.md)
    
    ### 3. [Aufgabe mit Git]
    [Beschreibung]
    
    Prüfe zuerst deinen aktuellen Status:
    
        git status   # Zeigt offene Änderungen
        git branch   # Zeigt den aktuellen Branch
    
    Dann:
    > **Tipp \u2013 falls dein letzter PR noch nicht gemerged ist:**
    > - **Option A:** Starte vom letzten Branch: `git checkout <letzter-branch>` \u2013 dann `git checkout -b UE-MX-YY-<vorname>`. Dein Lernjournal ist sofort aktuell.
    > - **Option B:** Starte von `main` (wie unten). Deine Aenderungen aus dem letzten PR werden beim Merge zusammengefuehrt \u2013 du musst nichts weiter tun.

        git checkout -b UE-MX-YY-<vorname>   # Erstellt einen neuen Branch fuer diese Uebung
        git add .
        git commit -m "[message]"
        git push origin UE-MX-YY-<vorname>
    
    > **Merke:** Das Muster `UE-MX-YY-<vorname>` verwendest du in allen Übungen – UE = Übung, MX = Meilenstein (z.B. M3), YY = Übungs-Nummer (z.B. 01).
    
    ---
    
    ## Modulabdeckung (Check)
    - ✓ course/modules/XX-modul/01-grundlagen.md: [Konzept erklärt]
    - ✓ course/modules/XX-modul/03-befehlsuebersicht.md: [Befehle erklärt]
    - ✗ course/modules/YY-modul: [Falls noch nicht abgedeckt, hier notieren]
    
    ---
    
    ## Wiederholung aus frueheren Meilensteinen
    
    Diese Übung setzt voraus, dass du folgendes bereits kannst:
    
    - **[Fähigkeit aus früherem Meilenstein]** ([course/modules/XX-modul/01-grundlagen.md](../../course/modules/XX-modul/01-grundlagen.md))
    
    ---
    
    ## Abgabe
    
    > **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab – nicht hier in der Übungsdatei.
    
    Bevor du den PR erstellst, pruefe kurz:
    - [ ] [Ergebnis 1, z.B. Datei XY existiert im eigenen Ordner]
    - [ ] [Ergebnis 2, z.B. Lernjournal aktualisiert]
    - [ ] PR auf GitHub ist erstellt
    
    ---
    
    ## Lernerfolgs-Kriterien
    
    > **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.
    
    Prüfe nach Abschluss der Übung, ob du diese Punkte mit Ja beantworten kannst:
    
    - [ ] Ich habe [beobachtbare Erfahrung 1].
    - [ ] Ich kann [benennen/erklären/zeigen] [Konzept 2].
    - [ ] Ich habe [beobachtbare Erfahrung 3].

**Schritt 3: In NEXT_STEPS.md verlinken**
- Unter "Aktueller Umsetzungsstand" des Meilensteins:
```markdown
- [ ] **[Aufgabengruppe]**
  > **Übung:** [course/uebungen/meilenstein-XX-uebung-YY.md](course/uebungen/meilenstein-XX-uebung-YY.md)
  > **Quellen zur Übung:** [course/modules/.../00-modulguide.md](...), [course/modules/.../01-grundlagen.md](...)
```

**Schritt 4: course/uebungen/README_UEBUNGEN.md aktualisieren**
- Falls neuer Meilenstein: Nennung in "Benennung"-Sektion

**Schritt 5: Konsistenz-Check**
- Alle Aufgaben haben direkte Modulquellen? ✓
- Modulabdeckung am Ende dokumentiert? ✓
- Links funktionieren (Pfade relativ)? ✓
- "Vor dem Start"-Checkliste vorhanden (max. 3 Punkte + Dateiliste)? ✓
- Versteckte Ordner (z.B. `.github/`) mit Strg+P-Tipp erklärt? ✓
- Temporäre Inhalte mit "Warum?"-Hinweis versehen? ✓
- UI-Interaktionen als nummerierte Schritte + Fallback? ✓
- Git-Abschnitte mit `git status` + `git branch` vorangestellt? ✓
- Branch-Name nach Muster `UE-MX-YY-<vorname>` verwendet? ✓
- `Wichtig – diese Datei nicht bearbeiten`-Hinweis nach Dateiliste vorhanden? ✓
- Kopier-Hinweise in `Abgabe` und `Lernerfolgs-Kriterien` vorhanden? ✓
- `Wiederholung aus frueheren Meilensteinen`-Abschnitt vorhanden? ✓
- `Abgabe`-Abschnitt mit Checkboxen vorhanden (kurze Liste der abzugebenden Ergebnisse)? ✓
- `Lernerfolgs-Kriterien`-Abschnitt mit 3–6 Checkboxen vorhanden? ✓

---

### ✅ Neuer Meilenstein hinzufügen

**Schritt 1: In NEXT_STEPS.md erstellen**
```markdown
## 🎯 Meilenstein N: [Titel]
**Ziel:** [Kurzbeschreibung]

**Modul-Einstiege:**
- [course/modules/XX-modul/00-modulguide.md](course/modules/XX-modul/00-modulguide.md)

**Vertiefung:**
- [course/modules/XX-modul/01-grundlagen.md](course/modules/XX-modul/01-grundlagen.md)
- [course/modules/YY-modul/03-befehlsuebersicht.md](course/modules/YY-modul/03-befehlsuebersicht.md)

**Lernziele:** (Falls noch nicht über Module abgedeckt)

### Must have
- [ ] Du kannst X

### Should have
- [ ] Du kannst Y

### Nice to have
- [ ] Du kannst Z

**Aktueller Umsetzungsstand:**

- [ ] **[Aufgabengruppe 1]**
  > **Übung:** [course/uebungen/meilenstein-N-uebung-01.md](course/uebungen/meilenstein-N-uebung-01.md)
  > **Quellen:** [course/modules/...], [course/modules/...]
  - [ ] [Untertask 1]
  - [ ] [Untertask 2]
```

**Schritt 2: Übungen für Meilenstein erstellen**
- Nach der "Neue Übung"-Checkliste oben

**Schritt 3: README.md, course/uebungen/UEBUNGEN.md aktualisieren**
- Falls nötig Struktur-Erklärungen anpassen

---

### 🔍 Konsistenz-Checkliste (VOR dem Commit)

> **Automatischer Test:** Vor dem Commit alle Übungen gegen den Standard prüfen:
> ```powershell
> .\tools\test-alle-uebungen.ps1
> ```
> Einzelne Datei: `.\tools\test-uebung.ps1 -File "course/uebungen/meilenstein-XX-uebung-YY.md"`
> Exit-Code 0 = alles OK, 1 = mindestens ein Fehler.

- [ ] **Alle Quellen existieren?** grep_search nach Links in Übungen
- [ ] **Alle Modulguides haben die gleiche Struktur?** 00-modulguide.md (mit inline Selbstcheck) + 01-grundlagen.md
- [ ] **Keine redundanten Lernziele?** Selbstcheck-Checklisten nur im `## Selbstcheck`-Abschnitt des Modulguide, nirgendwo sonst
- [ ] **Alle Links funktionieren?** (Relative Pfade prüfen)
- [ ] **Modulabdeckung in Übungen dokumentiert?** (Check-Abschnitt vorhanden)
- [ ] **NEXT_STEPS.md ↔ course/uebungen/UEBUNGEN.md synchron?** (Gleiche Meilenstein-Nummern)
- [ ] **README.md Modul-Struktur-Beispiel noch aktuell?** (Falls neue Konvention)
- [ ] **CHANGELOG.md aktuell?** Enthält er einen Eintrag für alle strukturellen Änderungen der aktuellen Session?
- [ ] **`.github/agents/*.md` Pfade korrekt?** Keine veralteten Pfade (z.B. `apps/learners/`, `docs/uebungen/`, `modules/`)
- [ ] **Keine Tippfehler/Markdown-Fehler?** (`get_errors` auf alle neuen Dateien)
- [ ] **"Vor dem Start"-Checkliste vorhanden?** (Max. 3 Punkte + Dateiliste)
- [ ] **Versteckte Ordner erklärt?** (z.B. `.github/` mit Strg+P-Tipp)
- [ ] **Temporäre Abschnitte mit "Warum?"-Hinweis versehen?**
- [ ] **UI-Interaktionen als nummerierte Schritte + Fallback?**
- [ ] **Git-Abschnitte mit `git status` + `git branch` vorangestellt?**
- [ ] **`Wiederholung aus frueheren Meilensteinen`-Abschnitt vorhanden?**
- [ ] **`Abgabe`-Abschnitt mit Checkboxen vorhanden (kurze Liste der abzugebenden Ergebnisse)?**
- [ ] **`Lernerfolgs-Kriterien`-Abschnitt mit 3–6 Checkboxen vorhanden?**
- [ ] **`Tipp – falls dein letzter PR noch nicht gemerged ist`-Blockzitat vor dem ersten `git checkout -b` vorhanden?** (Option A + Option B mit korrekter Aussage zum Merge)

---

### 📝 Beispiel: Kompletter Workflow für neues Modul

**1. Neues Modul "Test" erstellen:**
   - `course/modules/08-test/00-test-modulguide.md` (mit inline Selbstcheck)
   - `course/modules/08-test/01-test-grundlagen.md`

**2. In NEXT_STEPS.md neuen Meilenstein hinzufügen:**
   - "Meilenstein 4: Testing"
   - Modul-Einstiege + Vertiefung + Lernziele

**3. Neue Übung erstellen:**
   - `course/uebungen/meilenstein-04-uebung-01.md`
   - Mit Quellenlinks zu Test-Modul

**4. Konsistenz-Check:**
   - `get_errors` auf alle Dateien
   - Links testen (manuell klicken oder grep_search)
   - Modulabdeckung prüfen

**5. Dokumentation aktualisieren:**
   - README.md (falls neue Struktur)
   - AGENTS.md (falls neue Konvention)

**6. Commit + PR mit aussagekräftiger Message:**
   ```
   feat: Modul 08-test hinzugefügt (Meilenstein 4)
   
   - 00-test-modulguide.md: Navigation + inline Selbstcheck
   - 01-test-grundlagen.md: Konzepte
   - meilenstein-04-uebung-01.md: Erste Übung
   - Alle Links konsistent + Modulabdeckung dokumentiert
   ```
