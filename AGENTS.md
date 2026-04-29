# AGENTS

## Purpose
This repository is a shared learning workspace for a closed group in a vibe-coding course.

## Language
- Communicate with the user in German unless the user explicitly asks for another language.
- Keep wording beginner-friendly and concrete.

## Core Workflow

### Central Architecture: NEXT_STEPS → Modules → Exercises
The learning structure follows this hierarchy:

1. **NEXT_STEPS.md** (zentral) → Defines milestones and learning goals
2. **Modules/** (zentral) → Explain concepts and commands
   - `00-modulguide.md` → Navigation and overview
   - `01-*-grundlagen.md` → Concepts ("Why?", "How?")
   - `02/03-*-befehlsuebersicht.md` → Quick reference for commands (Terminal, Git only)
   - `00-*-themenueberblick.md` → Self-check with Must/Should/Nice checklists
3. **docs/uebungen/** (zentral) → Exercises with direct module source links
4. **apps/learners/** (dezentral) → Individual learning progress per person

**Key principle:** No redundant explanations. Each element has one clear role. Exercises directly link to module sources—learners click the link, understand the concept, and complete the task.

### NEXT_STEPS.md
- `NEXT_STEPS.md` is the central roadmap and should stay central.
- Individual learning progress is managed only in the personal files under `apps/learners/`.
- Do not introduce wording that assumes fixed weekly pacing in learner progress files.
- The participant circle is closed. Do not add instructions for new participants.

### Exercise Workflow
- Central exercises live in `docs/uebungen/`.
- Participants do not create exercises; they solve centrally defined exercises.
- Each participant stores their answer in their own learner folder.
- When changing an exercise, keep it aligned with the corresponding milestone in `NEXT_STEPS.md`.

## Source Standard For Exercises
- Every exercise task point should reference a concrete source in `modules/`.
- Sources should be clickable markdown links when the document format supports it.
- Each exercise should include a short section named `Modulabdeckung (Check)`.
- If an exercise step has no matching module explanation, improve the module coverage before relying on that exercise.
- **Why this standard?** The module source is not just a reference—it's the primary path to understanding. Learners click the source link to understand *why* the task matters, then complete it.

## Documentation Rules
- Prefer clickable markdown links for workspace files in documentation.
- Keep `README.md`, `NEXT_STEPS.md`, and `docs/uebungen/README_UEBUNGEN.md` consistent when workflow rules change.
- Avoid explaining the same concept in multiple places—link instead.
- Preserve the existing repo structure and wording style unless the user asks for a broader rewrite.

## Module Coverage Expectations
- Before referencing a module as a source, verify that it actually explains the relevant command or workflow.
- If coverage is missing, update the module or choose a more accurate source.

## Module Structure (Conventions)
Each module follows this pattern:
- `00-<modulname>-modulguide.md` → 5-10 lines: Intro + Inhalt (links) + Verweis auf Selbstcheck
- `01-<modulname>-grundlagen.md` → Conceptual explanation (not commands)
- `02/03-<modulname>-befehlsuebersicht.md` → Tables with Befehl|Wofuer|Beispiel|Achtung (Terminal, Git only)
- `00/01/02-<modulname>-themenueberblick.md` → Checklists with Must/Should/Nice + cross-links

## Change Style
- Prefer incremental improvements over radical rewrites.
- When simplifying documents, preserve the central learning logic and progress workflow.
- Avoid adding process that shifts responsibility from central exercise definition to participants.

---

## How to Extend: Neue Module, Übungen, Meilensteine

### ✅ Neues Modul hinzufügen

**Schritt 1: Modul-Ordner erstellen**
```
modules/XX-<modulname>/
├── 00-<modulname>-modulguide.md
├── 01-<modulname>-grundlagen.md
├── 00-<modulname>-themenueberblick.md
└── 03-<modulname>-befehlsuebersicht.md  (nur bei Terminal/Git)
```

**Schritt 2: Jede Datei nach Template erstellen**

`00-modulguide.md` (5-10 Zeilen):
```markdown
# Modulguide: [Name]

[1 Satz: Was vermittelt dieses Modul?]

## Inhalt

1. [01-modulname-grundlagen.md](./01-<modulname>-grundlagen.md)
2. [Optional: Weitere Inhalte](./...)

## Selbstcheck

Siehe [<Name>-Themenueberblick](./00-<modulname>-themenueberblick.md) fuer Must/Should/Nice-Checklisten.
```

`01-*-grundlagen.md` (beliebig lang):
- Erklärt **Konzepte und Warum** (nicht Befehle)
- Zielgruppe: Lernende, die verstehen wollen
- **KEINE** Befehlstabellen hier

`00-*-themenueberblick.md` (30-50 Zeilen):
```markdown
## Must have
- [ ] Ich kann X
- [ ] Ich kann Y

## Should have
- [ ] Ich kann A

## Nice to have
- [ ] Ich kann B

## Wenn du etwas nachholen willst
[Links zu Grundlagen und anderen Modulen]
```

`03-*-befehlsuebersicht.md` (nur Terminal/Git):
```markdown
| Befehl | Wofuer? | Beispiel | Achtung |
| `command` | Beschreibung | `command example` | Hinweis |
```

**Schritt 3: Zu NEXT_STEPS.md verlinken**
- Neuen Meilenstein hinzufügen ODER
- Existierenden Meilenstein ergänzen
- Modul-Einstieg: `[modules/XX-name/00-modulguide.md](modules/XX-name/00-modulguide.md)`
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
docs/uebungen/meilenstein-XX-uebung-YY.md
```

**Template:**
```markdown
# Übung Meilenstein XX: [Titel]

## Ziel
[1-2 Sätze: Was wird erreicht?]

---

## Aufgaben

### 1. [Aufgabe 1]
[Beschreibung]

Quelle: [modules/XX-modul/01-modul-grundlagen.md](../../modules/XX-modul/01-modul-grundlagen.md)

### 2. [Aufgabe 2]
[Beschreibung]

Quelle: [modules/XX-modul/03-modul-befehlsuebersicht.md](../../modules/XX-modul/03-modul-befehlsuebersicht.md)

---

## Modulabdeckung (Check)
- ✓ modules/XX-modul/01-grundlagen.md: [Konzept erklärt]
- ✓ modules/XX-modul/03-befehlsuebersicht.md: [Befehle erklärt]
- ✗ modules/YY-modul: [Falls noch nicht abgedeckt, hier notieren]
```

**Schritt 3: In NEXT_STEPS.md verlinken**
- Unter "Aktueller Umsetzungsstand" des Meilensteins:
```markdown
- [ ] **[Aufgabengruppe]**
  > **Übung:** [docs/uebungen/meilenstein-XX-uebung-YY.md](docs/uebungen/meilenstein-XX-uebung-YY.md)
  > **Quellen zur Übung:** [modules/.../00-modulguide.md](...), [modules/.../01-grundlagen.md](...)
```

**Schritt 4: docs/uebungen/README_UEBUNGEN.md aktualisieren**
- Falls neuer Meilenstein: Nennung in "Benennung"-Sektion

**Schritt 5: Konsistenz-Check**
- Alle Aufgaben haben direkte Modulquellen? ✓
- Modulabdeckung am Ende dokumentiert? ✓
- Links funktionieren (Pfade relativ)? ✓

---

### ✅ Neuer Meilenstein hinzufügen

**Schritt 1: In NEXT_STEPS.md erstellen**
```markdown
## 🎯 Meilenstein N: [Titel]
**Ziel:** [Kurzbeschreibung]

**Modul-Einstiege:**
- [modules/XX-modul/00-modulguide.md](modules/XX-modul/00-modulguide.md)

**Vertiefung:**
- [modules/XX-modul/01-grundlagen.md](modules/XX-modul/01-grundlagen.md)
- [modules/YY-modul/03-befehlsuebersicht.md](modules/YY-modul/03-befehlsuebersicht.md)

**Lernziele:** (Falls noch nicht über Module abgedeckt)

### Must have
- [ ] Du kannst X

### Should have
- [ ] Du kannst Y

### Nice to have
- [ ] Du kannst Z

**Aktueller Umsetzungsstand:**

- [ ] **[Aufgabengruppe 1]**
  > **Übung:** [docs/uebungen/meilenstein-N-uebung-01.md](docs/uebungen/meilenstein-N-uebung-01.md)
  > **Quellen:** [modules/...], [modules/...]
  - [ ] [Untertask 1]
  - [ ] [Untertask 2]
```

**Schritt 2: Übungen für Meilenstein erstellen**
- Nach der "Neue Übung"-Checkliste oben

**Schritt 3: README.md, docs/uebungen/UEBUNGEN.md aktualisieren**
- Falls nötig Struktur-Erklärungen anpassen

---

### 🔍 Konsistenz-Checkliste (VOR dem Commit)

- [ ] **Alle Quellen existieren?** grep_search nach Links in Übungen
- [ ] **Alle Modulguides haben die gleiche Struktur?** 00-modulguide.md + 01-grundlagen.md + 00-themenueberblick.md
- [ ] **Keine redundanten Lernziele?** (Nur in 00-themenueberblick.md, nicht in modulguide.md)
- [ ] **Alle Links funktionieren?** (Relative Pfade prüfen)
- [ ] **Modulabdeckung in Übungen dokumentiert?** (Check-Abschnitt vorhanden)
- [ ] **NEXT_STEPS.md ↔ docs/uebungen/UEBUNGEN.md synchron?** (Gleiche Meilenstein-Nummern)
- [ ] **README.md Modul-Struktur-Beispiel noch aktuell?** (Falls neue Konvention)
- [ ] **Keine Tippfehler/Markdown-Fehler?** (`get_errors` auf alle neuen Dateien)

---

### 📝 Beispiel: Kompletter Workflow für neues Modul

**1. Neues Modul "Test" erstellen:**
   - `modules/08-test/00-test-modulguide.md`
   - `modules/08-test/01-test-grundlagen.md`
   - `modules/08-test/00-test-themenueberblick.md`

**2. In NEXT_STEPS.md neuen Meilenstein hinzufügen:**
   - "Meilenstein 4: Testing"
   - Modul-Einstiege + Vertiefung + Lernziele

**3. Neue Übung erstellen:**
   - `docs/uebungen/meilenstein-04-uebung-01.md`
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
   
   - 00-test-modulguide.md: Navigation
   - 01-test-grundlagen.md: Konzepte
   - 00-test-themenueberblick.md: Selbstcheck
   - meilenstein-04-uebung-01.md: Erste Übung
   - Alle Links konsistent + Modulabdeckung dokumentiert
   ```
