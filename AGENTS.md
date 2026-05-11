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
This repository is a shared learning workspace for a closed group in the course "Softwareentwicklung mit Vibe Coding & Agentic AI".

## Language
- Communicate with the user in German unless the user explicitly asks for another language.
- Keep wording beginner-friendly and concrete.

## Core Workflow

### Central Architecture: Course Description → Course Modules → NEXT_STEPS → Materials → Exercises
The learning structure follows this hierarchy:

1. **KURSBESCHREIBUNG.md** (zentral) → Defines the overall course vision, paths, module logic, and milestone meaning
2. **course/kursmodule/** (zentral) → Represents standalone course modules / bookable learning blocks
  - Each course module has a `00-modulziele.md`
  - Course modules describe skill outcome, practical artifact, role relevance, sources, and completion evidence
  - Course modules can be used as standalone workshops, compact trainings, or parts of other courses
3. **NEXT_STEPS.md** (zentral) → Defines current learning milestones and group progress
4. **course/course-library/** (zentral) → Explain concepts and commands as the learning material collection
   - `00-modulguide.md` → Navigation, overview, and **inline Selbstcheck** (Must/Should/Nice checklists)
   - `01-*-grundlagen.md` → Concepts ("Why?", "How?")
   - `02/03-*-befehlsuebersicht.md` → Quick reference for commands (Terminal, Git only)
5. **course/uebungen/** (zentral) → Exercises with direct module source links
6. **course/learners/** (personenbezogen, aber zentral im Kurs-Repo) → Individual learning progress per person and canonical reporting source

**Important distinction:**
- `course/kursmodule/` = course offer/curriculum layer (what standalone learning block is this?)
- `course/course-library/` = learning material/source layer (where is the explanation learners read?)
- `course/course-library/` enthaelt nur allgemeine, erklaerende Inhalte ohne direkten Kursbezug.
- Konkrete kursinterne Ablaeufe, Aufgabenanleitungen, Rollen/Dozent:innen-Hinweise und Templates fuer den Kurs liegen in `course/kursmodule/`.

### Lernfortschritt-Datei Struktur (`lernfortschritt_<name>.md`)

→ Vollständige Struktur, Template und Regeln: [.github/instructions/learners-progress.instructions.md](.github/instructions/learners-progress.instructions.md)

**Key principle:** No redundant explanations. Each element has one clear role. Exercises directly link to module sources—learners click the link, understand the concept, and complete the task.

### NEXT_STEPS.md
- `NEXT_STEPS.md` is the central roadmap and should stay central.
- Individual learning progress is managed only in the personal files under `course/learners/`.
- Do not introduce wording that assumes fixed weekly pacing in learner progress files.
- The participant circle is closed. Do not add public open-enrollment onboarding or wording for unknown external participants.
- Onboarding content in `apps/onboarding/` is for already accepted course participants and should hand off clearly into `NEXT_STEPS.md`.

### Exercise Workflow
- Central exercises live in `course/uebungen/`.
- Participants do not create exercises; they solve centrally defined exercises.
- Solution artefacts live standardmaessig in the participant's own repo unless an exercise explicitly requires changes in this course repo.
- `course/learners/` remains the canonical place for learning-progress reporting and dashboard-compatible overview data.
- When changing an exercise, keep it aligned with the corresponding milestone in `NEXT_STEPS.md`.

## Source Standard For Exercises
- Every exercise task point should reference a concrete source in `course/course-library/` oder `course/kursmodule/`.
- Sources should be clickable markdown links when the document format supports it.
- Each exercise should include a short section named `Modulabdeckung (Check)`.
- Each exercise must include a section named `Wiederholung aus frueheren Meilensteinen` between `Modulabdeckung (Check)` and `Lernerfolgs-Kriterien`. This section lists skills from previous milestones that are needed to complete the exercise, with links to the relevant module files.
- Each exercise must include a section named `Lernerfolgs-Kriterien` at the end, after `Modulabdeckung (Check)`. This section contains 3-6 checkboxes that let learners verify whether the exercise achieved its intended outcome. Criteria must be observable and self-assessable (e.g. "Ich habe X erlebt", "Ich kann Y benennen"), not just task completion.
- If an exercise step has no matching source explanation, improve coverage in `course/course-library/` (allgemein) oder `course/kursmodule/` (kursspezifisch) before relying on that exercise.
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
- For onboarding explanatory content, maintain lesson sources under `course/kursmodule/01-.../lerninhalte/lektion-XX-.../` (`lektion-inhalte.md`, optional `aufgaben.md`) and sync to `apps/onboarding/public/content/` via `npm run sync-content`; keep interactive step logic in Angular components.
- Lesson-Flow-Ende im Onboarding: Wenn unter der Lesson kein weiterer Inhalt folgt, bleibt der letzte Button inaktiv mit Label `Lektion abgeschlossen`. Wenn weiterer Inhalt folgt, springt der letzte Button innerhalb desselben Schritts dorthin (z. B. zu Aufgaben).
- Avoid explaining the same concept in multiple places—link instead.
- Preserve the existing repo structure and wording style unless the user asks for a broader rewrite.
- Checkbox-Regel: In `course/uebungen/` und Guide-Dateien (`*guide*.md`, inklusive `00-*-modulguide.md`) bleiben Checklisten standardmaessig offen (`[ ]`). Abgehakt (`[x]`) ist nur in `course/learners/**/lernfortschritt_*.md` erlaubt.

## App Architecture Guardrails
- In `apps/**`, avoid code monsters: page components orchestrate routing, state and layout; reusable UI or fachliche Teilbereiche belong in smaller components or services.
- Before adding a new component, first check whether an existing component, Material component, style utility, token, data model, or Markdown content can be reused.
- Add a new component only when it has a clear responsibility and is likely to be reused, or when it removes meaningful complexity from a page/component that is already growing too large.
- Do not create one-off component sprawl. If reuse is unclear, explain the tradeoff and ask how to proceed before adding the new component.
- Keep styles token-based and local: no hardcoded component colors, no `!important`, no inline styles, and no direct `.mdc-*` overrides. Shared style decisions go into existing tokens/utilities instead of page-specific patches.

## Recurring Workflow: Fremdtexte verarbeiten
- Eingang fuer Rohtexte ist `course/notizen-kursentwicklung.md` im Abschnitt `# Fremdtexte zur Verarbeitung in den Kursen`.
- Jeder verarbeitete Block wird in **eigene Formulierungen** ueberfuehrt (keine langen wortwoertlichen Uebernahmen).
- Fremdtexte in Englisch werden vor der Einarbeitung in **Deutsch** uebertragen.
- Beim Uebertrag werden **Form und Struktur deutlich veraendert** (didaktische Neuordnung statt Satz-fuer-Satz-Naehe), um Urheberrechtsrisiken zu vermeiden.
- Allgemeine Inhalte gehen in `course/course-library/`, kursspezifische Anwendung in `course/kursmodule/`.
- Nach Verarbeitung wird der Rohtext-Block im Fremdtexte-Abschnitt entfernt.
- Danach wird unter `# Erledigte Themen` ein Log-Eintrag mit Datum, Quelle, Kurz-Summary und Ziel-Dateien angelegt.
- Fuer die wiederkehrende Ausfuehrung den Prompt `course-dev-fremdtexte-verarbeiten.prompt.md` nutzen.

## Module Coverage Expectations
- Before referencing a module as a source, verify that it actually explains the relevant command or workflow.
- If coverage is missing, update the module or choose a more accurate source.

## Module Structure (Conventions)
Kursmodul-Datei in `course/kursmodule/<nr>-<name>/`:
- `00-modulziele.md` → Modulziel, Praxisartefakt, Rollenbezug, Quellen, Abschlussnachweis

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
course/course-library/XX-<modulname>/
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
- Modul-Einstieg: `[course/course-library/XX-name/00-modulguide.md](course/course-library/XX-name/00-modulguide.md)`
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

**Schritt 2–5: Template, Verlinkung und Konsistenz-Check**

→ Vollständiges Template und Schritte 2–5: [.github/instructions/uebungen-standard.instructions.md](.github/instructions/uebungen-standard.instructions.md)


---

### ✅ Neuer Meilenstein hinzufügen

**Schritt 1: In NEXT_STEPS.md erstellen**
```markdown
## 🎯 Meilenstein N: [Titel]
**Ziel:** [Kurzbeschreibung]

**Modul-Einstiege:**
- [course/course-library/XX-modul/00-modulguide.md](course/course-library/XX-modul/00-modulguide.md)

**Vertiefung:**
- [course/course-library/XX-modul/01-grundlagen.md](course/course-library/XX-modul/01-grundlagen.md)
- [course/course-library/YY-modul/03-befehlsuebersicht.md](course/course-library/YY-modul/03-befehlsuebersicht.md)

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
  > **Quellen:** [course/course-library/...], [course/course-library/...]
  - [ ] [Untertask 1]
  - [ ] [Untertask 2]
```

**Schritt 2: Übungen für Meilenstein erstellen**
- Nach der "Neue Übung"-Checkliste oben

**Schritt 3: README.md, course/uebungen/README_UEBUNGEN.md aktualisieren**
- Falls nötig Struktur-Erklärungen anpassen

---

### 🔍 Konsistenz-Checkliste & Workflow-Beispiel

→ Vollständige Checkliste und Workflow-Beispiel: [.github/instructions/uebungen-standard.instructions.md](.github/instructions/uebungen-standard.instructions.md)

> **Automatischer Test:**
> ```powershell
> .\tools\test-alle-uebungen.ps1
> .\tools\test-links.ps1
> ```