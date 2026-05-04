# Changelog

Alle nennenswerten Änderungen an diesem Repository werden hier dokumentiert.

---

## [Unreleased] – 04.05.2026 (Session 2)

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

## [Unreleased] – 04.05.2026

### Dashboard App – Angular-Projekt-Setup

**Neues Angular-Projekt (`apps/dashboard/`):**
- Angular 21 (Standalone Architecture, kein Routing, SCSS) per `ng new progress-hub` initialisiert
- Angular Material 21.2.9 (Theme: Azure/Blue) per `ng add @angular/material` hinzugefügt
- `@angular/animations` nachinstalliert (Abhängigkeit von Angular Material)
- `src/app/app.ts`: App-Root verdrahtet mit `OverviewOptionAComponent` (bestehende Komponente)
- `src/app/app.config.ts`: `provideAnimationsAsync()` ergänzt
- Dev-Server läuft unter `http://localhost:4200/` (`ng serve`)

---

### Repository-Dokumentation

- Neu: `CHANGELOG.md` als zentrale Änderungsdokumentation angelegt
- `README.md` Projektstruktur synchronisiert und `CHANGELOG.md` im Root-Baum ergänzt (README-Sync-Regel)

---

### Übungen – Standard-Updates (Branch: `course-dev/uebungen-standard-update`)

**Alle 8 Übungen (`docs/uebungen/meilenstein-02-uebung-01` bis `meilenstein-04-uebung-01`):**
- `Wichtig – diese Datei nicht bearbeiten`-Hinweis nach der Dateiliste ergänzt
- PR-Tipp vor dem ersten `git checkout -b` ergänzt (Option A: vom letzten Branch starten; Option B: von main starten, Merge erfolgt automatisch)
- Kopier-Hinweise in `Abgabe`- und `Lernerfolgs-Kriterien`-Abschnitte ergänzt

**`docs/uebungen/README_UEBUNGEN.md`:**
- Standards 11–13 dokumentiert (Wichtig-Box, Kopier-Hinweise, PR-Tipp Option A+B)

---

### Lernfortschritt-Dateien – Struktur-Bereinigung

**Alle Lernfortschritt-Dateien (`apps/learners/*/lernfortschritt_*.md`):**
- `## Nächster kleiner Schritt` umbenannt zu `## Das möchte ich noch lernen`
- Doppelte Abschnitte entfernt (nur noch einer am Dateiende)
- Abgabe- und Lernerfolgs-Kriterien-Checklisten für abgeschlossene Übungen (M2-01, M2-02) direkt unter den passenden Journaleinträgen ergänzt

---

### AGENTS.md – Konventions-Updates

- Lernfortschritt-Datei-Struktur als eigener Abschnitt dokumentiert (Pflichtabschnitte, Regeln, Beispiel-Template)
- Template-Einrückung des PR-Tipp-Blockzitats korrigiert (war 8-Leerzeichen → jetzt 4-Leerzeichen)
- Konsistenz-Checkliste: neuer Punkt `Tipp – falls dein letzter PR noch nicht gemerged ist` ergänzt
- Beispiel-Template: Wichtig-Box, PR-Tipp und Kopier-Hinweise in Abgabe/LK ergänzt

---

### `.github/agents/course-dev-exercise-creator.agent.md`

- Schritt 4 aktualisiert: alle 3 neuen Anforderungen ergänzt (Wichtig-Box, PR-Tipp Option A+B, Kopier-Hinweise)

---

### Modul 04-git – Branch-Workflow

**Neu: `modules/04-git/02-git-branch-workflow.md`**
- Erklärt den vollständigen Branch-Lebenszyklus: erstellen → committen/pushen → PR → aufräumen
- Remote-Branch löschen (GitHub-Checkbox oder `git push origin --delete`)
- Lokalen Branch löschen (`git branch -d` vs. `-D`)
- `git fetch --prune` für Synchronisation
- Aufräum-Checkliste nach abgeschlossenem PR

**`modules/04-git/00-git-modulguide.md`:**
- Eintrag 2 (`02-git-branch-workflow.md`) in Inhaltsliste ergänzt
- Neues Should-have: "Ich weiss, wie ich einen abgeschlossenen Branch vollstaendig aufraeume"
- Link zu neuer Datei in "Wenn du etwas nachholen willst" ergänzt

**`modules/04-git/03-git-befehlsuebersicht.md`:**
- Hinweis ergänzt: Git-Befehle sind OS-unabhängig, Terminal-Befehle nicht
- Link zur Terminal-Befehlsuebersicht ergänzt

---

### Modul 05-terminal – Umfangreiches Update

**Neu: `modules/05-terminal/02-terminal-typen.md`**
- Shell vs. Terminal: Konzepterklärung
- Gängige Shells nach OS: PowerShell, cmd, Git Bash, WSL (Windows) / zsh, bash (macOS)
- Vergleichstabelle Windows vs. macOS/Linux für Alltagsbefehle
- VS Code Terminal vs. System-Terminal: wann welches, warum im Kurs fast immer VS Code
- Mehrere Shells gleichzeitig in VS Code öffnen
- Optionale Terminal-Apps für Fortgeschrittene (Windows Terminal, iTerm2, Oh My Zsh)

**`modules/05-terminal/00-terminal-modulguide.md`:**
- Inhaltsliste: Eintrag 2 (`02-terminal-typen.md`) ergänzt
- Must-have: Shell/Standard-Shell-Wissen ergänzt
- Should-have: zwei neue Einträge (Shell vs. Terminal, warum OS-Unterschiede bei Terminal aber nicht bei Git)
- HTML-Kommentare entfernt (`<!-- in Win geht das mit [Strg] + L -->` u.a.)
- `echo > datei.md` → `New-Item` / `touch` korrigiert
- "Wenn du etwas nachholen willst": Link zu `02-terminal-typen.md` ergänzt

**`modules/05-terminal/01-terminal-grundlagen.md`:**
- `touch` / `New-Item` in der Befehlsliste ergänzt und `ls`/`dir` mit OS-Hinweis versehen
- Neuer Abschnitt am Ende: "Terminal-Befehle vs. Git-Befehle – was ist der Unterschied?" mit Baumdiagramm, konkretem Beispiel und Cross-Link zu Git-Modul
- Link zu `02-terminal-typen.md` ergänzt

**`modules/05-terminal/03-terminal-befehlsuebersicht.md`:**
- Tabellenstruktur geändert: neue Spaltenreihenfolge **Wofuer? | Windows (PowerShell) | macOS/Linux (zsh/bash) | Beispiel | Achtung**
- macOS- und Windows-Befehle stehen jetzt klar nebeneinander (statt in einer Spalte gemischt)
- `echo > datei.md` ersetzt durch `New-Item` (Windows) und `touch` (macOS), Erklärung warum
- HTML-Kommentare entfernt
- Alle Beispiele auf kurseigene Dateien und Ordner aktualisiert (z.B. `lernfortschritt_alex.md`, `apps/learners/daria`, `apps/lea` + Tab)

---

## [Unreleased] – 29.04.2026

### Dashboard – Customizations & Agents

**Neu: `.github/agents/course-dev-dashboard-po.agent.md`**
- Dashboard Product Owner Agent erstellt
- Leitet aus Übungen, Meilensteinen und Modulen Dashboard-Anforderungen ab
- Betrachtet jede Anforderung aus drei Personas: [Kursentwickler], [Lernende], [KI-Agent]
- Pflegt PRD, User Stories, TypeScript-Interfaces und MoSCoW-Priorisierung

**Neu: `.github/agents/course-dev-dashboard-developer.agent.md`**
- Senior Developer/Architect Agent für den Progress-Hub
- Hidden Subagent (user-invocable: false), wird vom PO-Agent aufgerufen
- Übersetzt PRD-Anforderungen in Angular/TypeScript-Code (Standalone, Strict Mode)
- Dreiphasiger Approach: Architektur-Skizze → TypeScript-Interfaces → Komponenten

**Neu: `.github/prompts/learners-dashboard-feedback.prompt.md`**
- Prompt für Lernende zum strukturierten Dashboard-Feedback
- Führt in 3 Fragen durch Positives, Wünsche und Unklarheiten
- Gibt am Ende User Stories im [Lernende]-Format zurück

**Neu: `.github/instructions/dashboard.instructions.md`**
- File Instructions mit `applyTo: "apps/dashboard/**"`
- Lädt automatisch Stack-Vorgaben und drei Personas als Kontext
- Enthält alle relevanten Datenquell-Pfade im Repo

**`README.md`:**
- Neue Dateien in Projektstruktur aufgenommen (agents, instructions, prompts)

---

### Dashboard – PRD Anforderungserhebung

**`apps/dashboard/prd_dashboard.md` – vollständig ausgebaut:**
- Vision und Kernfunktionen präzisiert
- Datenquellen-Übersicht (Lernfortschrittsdateien, NEXT_STEPS.md, GitHub API, eigene Felder)
- MoSCoW-Priorisierung:
  - Must: Option-A-Übersicht, Delta-Highlight + Fortschrittsmeter, Snapshot-Historie, Must/Should/Nice-Sicht
  - Should: Lernpfad-Graph, Git-Integration (Commits/Branches/PRs/Reviews/Kommentare), Filter, View-Switch A/B
  - Could: Cluster-Hinweise für Zusammenarbeit, aggregierte individuelle Lernwünsche
  - Won't: Wettbewerbsmetriken, Export
- 5 User Stories mit Akzeptanzkriterien für alle drei Personas
- UX- und Visualisierungsanforderungen (Farbcodierung, Matrix-Layout, Delta-Darstellung)
- TypeScript-Interfaces Sektion (strict-kompatibel, mit Datenquell-Kommentaren)
- Definition of Done (7 Checkboxen)
- Offene Punkte (GitHub-API, Markdown-Parsing, Schwellenwerte)

---

### Dashboard – Erste Code-Basis (Branch: `feature/dashboard-models-v1`)

**Neu: `apps/dashboard/models/dashboard.models.ts` + `models/index.ts`**
- Strict TypeScript-Interfaces für LearnerProgress, MilestoneStatus, ExerciseStatus, JournalEntry
- GitActivity, PullRequestSummary, ReviewSummary (für GitHub-Integration)
- DashboardSnapshot, CustomFieldEntry (manuelle Snapshots mit Kursentwickler-Notizen)
- LearnerDelta, SnapshotDelta (Delta-Berechnung zwischen Snapshots)

**Neu: `apps/dashboard/data/course-roadmap.data.ts`**
- Zentrale Milestones-Definitions-Tabelle (M1–M4) mit Übungsreferenzen und Must/Should/Nice-Zählungen

**Neu: `apps/dashboard/data/mock/learner-markdown.mock.ts`**
- Markdown-Eingabedaten für Daria und Dom als realistische Test-Grundlage

**Neu: `apps/dashboard/data/mock/github-activity.mock.ts`**
- Mock-Daten für GitHub-Aktivität (Commits, Branches, PRs, Reviews) für Daria und Dom

**Neu: `apps/dashboard/data/mock/ai-learner-scenarios.mock.ts`**
- AI-Learner mit 3 Testszenarien für Dashboard-Entwicklung und -Tests:
  - Szenario 1: Stabiler Fortschritt mit Rückfrage
  - Szenario 2: Blockiert mit hohem Frageaufkommen
  - Szenario 3: Kooperationspotenzial durch gleiche Lernwünsche

**Neu: `apps/dashboard/services/learner-progress-parser.service.ts`**
- Parst Lernfortschritts-Markdown zu strukturiertem LearnerProgress-Objekt
- Extrahiert Fokus, Meilensteine, Lernjournal, Fragen, individuelle Lernwünsche

**Neu: `apps/dashboard/services/snapshot.service.ts`**
- Erstellt Snapshots per createSnapshot (manueller Knopfdruck)
- Persistiert Historie in localStorage; vorherige Stände bleiben erhalten

**Neu: `apps/dashboard/services/delta.service.ts`**
- Berechnet LearnerDelta und SnapshotDelta zwischen zwei Snapshots
- buildProgressMeterValue erzeugt 0–100-Wert für Fortschrittsmeter

**Neu: `apps/dashboard/features/overview-option-a/`**
- `overview-option-a.component.ts/html/scss`: Erste Angular-Standalone-Komponente
- Option-A-Übersicht: Matrix Lernende × Meilensteine × Übungen mit Farbstatus
- Option-B-Detailansicht: Fokus, nächster Schritt, offene Fragen, Lernwünsche
- View-Switch zwischen Option A und B
- Snapshot-Button mit Delta-Highlight + Fortschrittsmeter
- AI-Szenario-Umschalter für Testfälle

**Barrel-Exports: `services/index.ts`, `data/index.ts`**

**`apps/README_APPS.md`:** Neue Dashboard-Architektur dokumentiert
