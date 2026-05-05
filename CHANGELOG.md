# Changelog

Alle nennenswerten Änderungen an diesem Repository werden hier dokumentiert.

---

## Tagesübersicht (grob)

### 04.05.2026
- Repo-Struktur auf `course/` umgestellt (`learners`, `modules`, `uebungen`) und Pfade repo-weit angepasst.
- Dashboard deutlich ausgebaut (Option A/B, Snapshot-Infos, Blockaden, Git- und Lernstands-Sichten).
- Lernmaterial konsolidiert (Übungen bereinigt, Lernfortschritt-Dateien vereinheitlicht, neue Prüfregeln im Testskript).
- KI-Setup erweitert (neuer Readiness-Agent, Consistency-Checks inkl. CHANGELOG/Agents, Konventions-Updates).
- AI-Readiness-Vollausbau: QA-Skripte (test-lernfortschritt, test-links), neue Agents/Prompts, AGENTS.md auf 174 Zeilen reduziert, GitHub Action für PR-Checks.
- Konsistenz-Check nach Session 5: Pfadfehler in Agent-Dateien und PRD behoben, alle 255 Links grün.
- Onboarding-Website geplant: Agents, Prompts, Instructions + Brand-Setup (Session 7).

### 29.04.2026
- Agenten-, Prompt- und Instruction-Basis eingeführt.
- Neue Module und Übungen für Meilensteine 3 und 4 ergänzt.
- Erste Dashboard-Grundstruktur mit PRD, Datenmodellen, Services und erster Übersichtskomponente aufgebaut.

---

---

## 04.05.2026 (Session 7)

### Onboarding-Website: Planung, Agents, Brand-Setup

**Neue Agents:**
- `.github/agents/course-dev-onboarding-web-architect.agent.md`: Plant und baut die Onboarding-Website (Angular/M3/TypeScript) fuer absolute Einsteiger. Kombiniert Curriculum-, PO-, Readiness- und Developer-Perspektive. Delegiert bei Bedarf an Subagents.
- `.github/agents/course-dev-onboarding-ux-text.agent.md`: Prueft Texte in `apps/onboarding/` auf Anfaengertauglichkeit nach 6 Kriterien (Satzlaenge, Fachbegriff-Erklaerung, beobachtbares Ergebnis, kein Vorwissen, Fehlerfall, aktive Sprache).

**Neuer Prompt:**
- `.github/prompts/course-dev-onboarding-mvp-scope-freeze.prompt.md`: Scope-Freeze-Tool – verhindert Feature-Drift durch verbindliche In/Out-of-Scope-Definition vor Implementierungsstart.

**Neue Instructions:**
- `.github/instructions/onboarding.instructions.md` (`applyTo: apps/onboarding/**`): Architekturregeln fuer Copilot bei Arbeit in der Onboarding-App. Enthaelt Stack (Angular Standalone, Material 3, TypeScript Strict), MVP-Scope (max. 6 Schritte), Struktur-Konvention, UX-Regeln und vollstaendiges Brand-Setup.

**Brand-Setup in `onboarding.instructions.md`:**
- 9 CSS-Tokens aus KnOot Academy Styleguide (Calypso `#346995`, Amber `#FBBE02`, Mojo `#CA4242` + Neutralfarben)
- Kontrast-Regeln (Weiss auf Hauptfarben nur bei grosser, halbfetter Schrift)
- Typografie: Poppins (Standard) + Recoleta (sparsam fuer Untertitel)
- Material Design 3 (M3/MDC-based): `mat.define-theme()`, keine Legacy-APIs, keine `.mdc-*`-Klassen-Overrides

**Agent-Descriptions geschaerft (4 Agents):**
- `dashboard-po`: Trigger jetzt klar auf Anforderungen/PRD/Stories, kein Konflikt mehr mit `dashboard-developer`
- `dashboard-developer`: Trigger auf Implementierung/Code fokussiert
- `repo-consistency-checker`: `"repo audit"` entfernt (Konflikt mit `vibe-coding-readiness`), jetzt spezifisch auf Links/Struktur
- `exercise-creator`: Von 6 auf 11 Trigger erweitert, deutsche Kontexte ergaenzt

## 04.05.2026 (Session 4)

### Neuer Agent: `course-dev-vibe-coding-readiness`

- Neuer Agent `.github/agents/course-dev-vibe-coding-readiness.agent.md` hinzugefügt
- Prüft das Repo auf KI-Tauglichkeit (Context Engineering, Prompt Engineering, QA Harness, Automatisierungspotenzial)
- Gibt AI-Readiness-Score pro Bereich (🟢/🟡/🔴) + priorisierte Automatisierungsideen aus
- README.md Projektbaum synchronisiert

---

## 04.05.2026 (Session 5)

### AI-Readiness-Vollausbau

**Neue Skripte:**
- `tools/test-lernfortschritt.ps1`: Prüft Pflichtstruktur aller `lernfortschritt_*.md`
- `tools/test-links.ps1`: Validiert alle relativen Markdown-Links repo-weit
- `.github/workflows/test-uebungen.yml`: GitHub Action – Übungstest bei PRs automatisch

**Neue Agents & Prompts:**
- `.github/agents/learners-help.agent.md`: Lernenden-Hilfe-Agent (Trigger: "stecke fest", "Hilfe bei Übung")
- `.github/prompts/learners-lernjournal-eintrag.prompt.md`: Geführter Journaleintrag-Dialog

**Neue Instructions-Dateien:**
- `.github/instructions/uebungen-standard.instructions.md`: Übungs-Template + Konsistenz-Checkliste (`applyTo: course/uebungen/**`)
- `.github/instructions/learners-progress.instructions.md`: Lernfortschritt-Struktur + Regeln (`applyTo: course/learners/**`)

**AGENTS.md:** 376 → 174 Zeilen (Template, Lernfortschritt-Block und Konsistenz-Checkliste in Instructions ausgelagert)

**Fixes:**
- Toten Link in `course/uebungen/README_UEBUNGEN.md` behoben (`../course/modules/` → `../modules/`)
- `lernfortschritt_raphael.md`: fehlenden Abschnitt `## Das möchte ich noch lernen` ergänzt
- `dashboard.instructions.md`: veraltete Pfade `apps/learners/` + `docs/uebungen/` auf `course/learners/` + `course/uebungen/` korrigiert
- Personas-Redundanz in Dashboard-Agent-Dateien entfernt (kanonisch in `dashboard.instructions.md`)
- Links in Agent-Dateien auf korrekte relative Pfade korrigiert
- `test-links.ps1`: `$matches`-Konflikt behoben, Platzhalter-Links werden übersprungen

---

## 04.05.2026 (Session 6)

### Konsistenz-Check – Pfadkorrekturen nach Session 5

**`apps/dashboard/prd_dashboard.md`:**
- Linktexte auf neue Pfade aktualisiert: `apps/learners/` → `course/learners/`, `docs/uebungen/` → `course/uebungen/`
- TypeScript-Interface-Kommentare korrigiert (`apps/learners/` → `course/learners/`, `docs/uebungen/` → `course/uebungen/`)

**Ergebnis:** Alle 255 relativen Links grün (`tools/test-links.ps1`), 8 Übungen OK, 5 Lernfortschritt-Dateien OK



- `apps/learners/` → `course/learners/` verschoben
- `modules/` → `course/modules/` verschoben
- `docs/uebungen/` → `course/uebungen/` verschoben
- `docs/GLOSSARY.md` gelöscht (war nie gepflegt)
- Alle relativen Links in 8 Übungsdateien angepasst (`../../modules/` → `../modules/`)
- `NEXT_STEPS.md`, `README.md`, `AGENTS.md`, `README_UEBUNGEN.md`, `README_APPS.md` auf neue Pfade aktualisiert
- Alle 5 Agent-Dateien in `.github/agents/` auf neue Pfade aktualisiert
- `tools/test-alle-uebungen.ps1` + `tools/test-uebung.ps1` auf neue Pfade angepasst
- Alle 8 Übungen bestehen weiterhin (0 Fehler)
- Branch: `refactor/repo-struktur-course-ordner`

---

## 04.05.2026 (Session 3)

### Dashboard – Option A & B: Vollständiger Ausbau

**`overview-option-a.component.ts`:**
- Memoisation: `buildWishFrequencyMap()` und `refreshSnapshotMeta()` als gecachte Properties
- Blockade-Erkennung: `isLearnerBlocked()` / `getBlockedByText()` aus letztem Journal-Eintrag
- Exercise-Chips: `getExerciseStatusForMilestone()`, `getExerciseChipClass()` / `getExerciseChipLabel()`
- Git-Helfer: `selectedLearnerGitActivity`, `getOpenPrCount()`, `getRecentJournalEntries()` (letzte 3)
- **Bug-Fix:** `blocked-cell`-CSS-Klasse aus Meilenstein-Spalten entfernt (nur noch `warning`-Icon in Namensspalte)

**`overview-option-a.component.html`:**
- Option A: Snapshot-Meta (Anzahl + Zeitstempel), Blockade-Icon in Namensspalte, Exercise-Chips mit Farbcodierung, Lernwunsch-Häufigkeitszähler
- Option B (neu): Kopfbereich, Meilenstein-Kacheln (M/S/N-Zähler + Chips), Lernjournal (letzte 3), Gruppenfragestellungen, Git-Aktivität, individuelle Lernwünsche

**`overview-option-a.component.scss`:** Vollständig überarbeitet für Option-A- und Option-B-Elemente (`exercise-chip`, `blocked-icon`, `git-stats`, `pr-state` u.a.)

**`angular.json`:** `anyComponentStyle`-Budget `maximumWarning` 4 kB → 8 kB

### Dashboard – Datenbasis & PRD

**`data/mock/learner-markdown.mock.ts`:** Medine, Raphael, Sebastian ergänzt; Dom zweiter Journaleintrag; alle auf ISO-Datumsformat `### YYYY-MM-DD`

**`data/mock/github-activity.mock.ts`:** GitHub-Aktivität für Medine, Raphael, Sebastian ergänzt

**Alle 5 `apps/learners/*/lernfortschritt_*.md`:** `## Individuelle Lernwuensche`-Abschnitt ergänzt; Datumsformat auf ISO 8601 korrigiert

**`prd_dashboard.md` (v2 → v3):** §10 Implementierungsregeln (UX-, Dateiformat-, Code-Qualitäts-Constraints) und §11 Implementierungsprotokoll neu

---

## 04.05.2026 (Session 2)

### Lernstände – Konsolidierung und Bereinigung

**Alle 5 Lernfortschritt-Dateien (`apps/learners/*/lernfortschritt_*.md`):**
- Inhalte aus Notiz-Dateien und Unterordnern in die jeweils führende `lernfortschritt_<vorname>.md` migriert
- Daria: `uebung-02-notizen.md` (Modul-Zuordnungstabelle) integriert
- Dom: `uebung-02-notizen.md` (Terminal-Notizen, Modul-Zuordnungen, Hinweis auf falsche erste Zeile) integriert
- Medine: Terminal-Hinweis (`New-Item` statt `echo.`) und Frage an Gruppe zur Branch-Struktur ergänzt
- Raphael: `notizen_raphael.md` und `uebung-02-notizen.md` (Markdown-Kommentare, Modul-Zuordnungen) integriert
- Sebastian: `uebung_02_notizen.md` und Guides-Referenz integriert; `cmd_guide.md` und `git_guide.md` explizit behalten

**Gelöschte redundante Dateien/Unterordner (alle per `git rm`):**
- `apps/learners/daria/lernstand_daria/meilenstein_daria.md`
- `apps/learners/daria/uebung-02-notizen.md`
- `apps/learners/dom/lernstand_dom/Uebungen/meilenstein-02-uebung-01.md`
- `apps/learners/dom/lernstand_dom/Uebungen/meilenstein-02-uebung-02.md`
- `apps/learners/dom/lernstand_dom/meilensteine_dom.md`
- `apps/learners/dom/meilenstein-02-uebung-01.md`
- `apps/learners/dom/uebung-02-notizen.md`
- `apps/learners/medine/lernstand_medine/meilensteine_medine.md`
- `apps/learners/raphael/notizen_raphael.md`
- `apps/learners/raphael/uebung-02-notizen.md`
- `apps/learners/sebastian/lernstand_sebastian/meilenstein_sebastian.md`
- `apps/learners/sebastian/uebung_02_notizen.md`

---

### Übungen – Strukturfehler-Korrekturen (Ursachenbehebung)

**Ursache:** Übungen 02-01 und 02-03 wiesen Lernende an, einen Unterordner `lernstand_<vorname>/` mit `meilensteine_<vorname>.md` anzulegen – was der zentralen `lernfortschritt_<vorname>.md`-Struktur widerspricht.

**`docs/uebungen/meilenstein-02-uebung-01.md`:**
- Aufgaben 3–5 (Unterordner anlegen, `meilensteine_<vorname>.md` erstellen, Meilensteine eintragen) vollständig entfernt
- Aufgaben 6–8 auf 3–5 umbenannt
- Dateiliste in „Vor dem Start": Zeile für `lernstand_<vorname>/meilensteine_<vorname>.md` entfernt
- Abgabe: Checkbox für Unterordner entfernt
- Lernerfolgs-Kriterien: Eintrag „Ordner und Datei über Terminal angelegt" entfernt
- Modulabdeckung: Terminal-spezifische Einträge für `mkdir`/`echo` entfernt (nicht mehr benötigt)

**`docs/uebungen/meilenstein-02-uebung-02.md`:**
- Abgabe und Lernerfolgs-Kriterien: Vorbefüllte `[x]`-Checkboxen auf `[ ]` zurückgesetzt

**`docs/uebungen/meilenstein-02-uebung-03.md`:**
- Dateiliste in „Vor dem Start": Zeile für `lernstand_<vorname>/meilensteine_<vorname>.md` entfernt
- Aufgabe 1: Zieldatei auf `lernfortschritt_<dein-name>.md` umgestellt (statt `meilensteine_<vorname>.md`)
- Aufgabe 5: Abschluss-Eintrag auf `lernfortschritt_<vorname>.md` umgestellt
- Abgabe: Checkbox für `meilensteine_<vorname>.md` ersetzt durch Lernjournal-Einträge

---

### NEXT_STEPS.md – Veraltete Tasks entfernt

- 3 Tasks unter Meilenstein 2, Übung 01 entfernt: „Unterordner `lernstand_vorname` anlegen", „Datei `meilensteine_<vorname>.md` anlegen", „Bisherige und kommende Aufgaben in der Datei pflegen"

---

### Testskript – Neuer Guardrail

**`tools/test-uebung.ps1`:**
- Neuer Check 7: Erkennt vorbefüllte `[x]`-Checkboxen in `## Abgabe`- und `## Lernerfolgs-Kriterien`-Abschnitten als Fehler
- Alle Übungen müssen Lernenden-Checkboxen als `- [ ]` liefern – nicht vorausgefüllt
- BOM-Encoding-Problem beim Speichern behoben (Datei nun UTF-8 ohne BOM)
- Alle 8 Übungen bestehen mit 0 Fehlern nach den Korrekturen

---

## 04.05.2026 (Session 1)

### Dashboard App – Angular-Projekt-Setup

- Angular 21 (Standalone, kein Routing, SCSS) + Angular Material 21.2.9 (Azure/Blue) initialisiert
- `app.ts` verdrahtet mit `OverviewOptionAComponent`; `provideAnimationsAsync()` in `app.config.ts`
- `CHANGELOG.md` angelegt; `README.md` Projektstruktur synchronisiert

---

### Übungen – Standard-Updates (Branch: `course-dev/uebungen-standard-update`)

**Alle 8 Übungen (`meilenstein-02-uebung-01` bis `meilenstein-04-uebung-01`):**
- `Wichtig – diese Datei nicht bearbeiten`-Hinweis nach Dateiliste ergänzt
- PR-Tipp (Option A: vom letzten Branch; Option B: von main) vor erstem `git checkout -b` ergänzt
- Kopier-Hinweise in `Abgabe`- und `Lernerfolgs-Kriterien`-Abschnitte ergänzt

**`docs/uebungen/README_UEBUNGEN.md`:** Standards 11–13 dokumentiert

---

### Lernfortschritt-Dateien – Struktur-Bereinigung

**Alle `apps/learners/*/lernfortschritt_*.md`:**
- `## Nächster kleiner Schritt` → `## Das möchte ich noch lernen` umbenannt (einmal am Dateiende)
- Doppelte Abschnitte entfernt; Abgabe- und Lernerfolgs-Kriterien-Checklisten direkt unter passenden Journaleintrag verschoben

---

### AGENTS.md & Agents – Konventions-Updates

- Lernfortschritt-Datei-Struktur mit Pflichtabschnitten, Regeln und Beispiel-Template dokumentiert
- Konsistenz-Checkliste: PR-Tipp-Punkt ergänzt; Template-Einrückung korrigiert
- `course-dev-exercise-creator.agent.md`: Schritt 4 (Wichtig-Box, PR-Tipp, Kopier-Hinweise) aktualisiert

---

### Modul 04-git – Branch-Workflow

**Neu: `modules/04-git/02-git-branch-workflow.md`** – Vollständiger Branch-Lebenszyklus (erstellen → PR → aufräumen), Remote/lokale Branch-Löschung, `git fetch --prune`, Aufräum-Checkliste

**`00-git-modulguide.md`:** Branch-Workflow-Link + Should-have ergänzt

---

### Modul 05-terminal – Umfangreiches Update

**Neu: `modules/05-terminal/02-terminal-typen.md`** – Shell vs. Terminal, Shell-Typen nach OS, Vergleichstabelle Windows/macOS, VS Code Terminal vs. System-Terminal

**`01-terminal-grundlagen.md`:** `touch`/`New-Item` ergänzt, neuer Abschnitt "Terminal-Befehle vs. Git-Befehle"

**`03-terminal-befehlsuebersicht.md`:** Neue Spaltenreihenfolge (Windows | macOS/Linux nebeneinander), `New-Item`/`touch` statt `echo >`

---

## 29.04.2026

### Agents & Instruktionen – Neu

- **`course-dev-dashboard-po.agent.md`** – Dashboard-PO: leitet Anforderungen aus Übungen/Meilensteinen ab, drei Personas ([Kursentwickler], [Lernende], [KI-Agent]), pflegt PRD + MoSCoW
- **`course-dev-dashboard-developer.agent.md`** – Senior Developer/Architect, wird vom PO aufgerufen; Angular Standalone/Strict, dreiphasiger Approach (Architektur → Interfaces → Komponenten)
- **`course-dev-exercise-creator.agent.md`** – Übungserstellung nach AGENTS.md-Standard; prüft Modulabdeckung, generiert vollständige Übungsdatei
- **`course-dev-repo-consistency-checker.agent.md`** – Prüft Links, Modulabdeckung, NEXT_STEPS↔Übungen-Konsistenz
- **`course-dev-curriculum.agent.md`** – Curriculum-Planung: Module, Meilensteine, Lernziele; korrigiert Inkonsistenzfunde
- **`.github/prompts/learners-dashboard-feedback.prompt.md`** – Strukturiertes Feedback für Lernende (3 Fragen → User Stories)
- **`.github/instructions/dashboard.instructions.md`** – `applyTo: "apps/dashboard/**"`, Stack-Vorgaben + Datenquell-Pfade als automatischer Kontext

---

### Modul 07-architecture-foundations – Neu

**Neu: `modules/07-architecture-foundations/`**
- `00-architecture-foundations-modulguide.md`: Modulguide mit inline Selbstcheck (Must/Should/Nice)
- `01-architecture-foundations-grundlagen.md`: Konzepte (Was ist Architektur, Schichten, Verantwortlichkeiten)
- `02-architecture-foundations-praxis.md`: Praxisbeispiele aus dem Dashboard-Kontext

---

### Modul 02-vscode – Copilot-Erweiterung

**Neu: `modules/02-vscode/02-vscode-copilot.md`** – Copilot-Grundlagen, Slash-Commands, Chat vs. Inline-Completion

**`modules/02-vscode/00-vscode-modulguide.md`:** `02-vscode-copilot.md` in Inhaltsliste und Selbstcheck ergänzt

---

### Übungen M3 + M4 – Neu

**Neue Dateien in `docs/uebungen/`:**
- `meilenstein-03-uebung-02.md` – Branches und PRs
- `meilenstein-03-uebung-03.md` – AI Instructions (`.github/instructions/`)
- `meilenstein-03-uebung-04.md` – PRD erstellen mit Copilot
- `meilenstein-04-uebung-01.md` – Architektur-Grundlagen verstehen und anwenden

**`docs/uebungen/README_UEBUNGEN.md`:** Meilenstein 3 + 4 in Benennungssektion ergänzt

---

### NEXT_STEPS.md – Meilenstein 4

- Meilenstein 4 (Architektur-Grundlagen) mit Modul-Einstiegen, Lernzielen (Must/Should/Nice) und Übungslinks ergänzt
- `modules/04-git/01-git-grundlagen.md` umbenannt (war `02-git-grundlagen.md`), Verweise aktualisiert

---

### Dashboard – PRD & Erste Code-Basis (Branch: `feature/dashboard-models-v1`)

**`apps/dashboard/prd_dashboard.md` (v1):** Vision, MoSCoW (Must/Should/Could/Won't), 5 User Stories, TypeScript-Interface-Sektion, Definition of Done, offene Punkte

**Neue Dateien:**
- `models/dashboard.models.ts` – Strict TypeScript-Interfaces: `LearnerProgress`, `MilestoneStatus`, `ExerciseStatus`, `JournalEntry`, `GitActivity`, `DashboardSnapshot`, `LearnerDelta`
- `data/course-roadmap.data.ts` – Milestones M1–M4 mit Übungsreferenzen und Must/Should/Nice-Zählungen
- `data/mock/learner-markdown.mock.ts` – Markdown-Eingabedaten (Daria, Dom)
- `data/mock/github-activity.mock.ts` – GitHub-Aktivität Mock (Commits, Branches, PRs)
- `data/mock/ai-learner-scenarios.mock.ts` – 3 Testszenarien (stabiler Fortschritt, blockiert, Kooperationspotenzial)
- `services/learner-progress-parser.service.ts` – Markdown → `LearnerProgress`-Objekt
- `services/snapshot.service.ts` – Snapshot erstellen + localStorage-Persistenz
- `services/delta.service.ts` – Delta-Berechnung zwischen Snapshots, Fortschrittsmeter 0–100
- `features/overview-option-a/` – Erste Standalone-Komponente: Option-A-Matrix, Option-B-Detail, View-Switch, Snapshot-Button, AI-Szenario-Umschalter

**`apps/README_APPS.md`:** Dashboard-Architektur dokumentiert
