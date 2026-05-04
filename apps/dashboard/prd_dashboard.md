# Product Requirements Document (PRD): Progress-Hub

**Projekt:** Gruppenprojekt "Progress-Hub"  
**Status:** Requirement Baseline v2 (Stand: 04.05.2026)  
**Stack:** Angular, Angular Material, JSON, TypeScript (Strict)

---

## 1. Vision & Zielsetzung
Der **Progress-Hub** ist die zentrale Web-App fuer den Kurs, um Lernfortschritt, Aufgabenstatus und Git-Arbeitsweise transparent zu machen. Er unterstuetzt Kursentwicklung, Lernende und KI-Agenten mit einer einheitlichen, nachvollziehbaren Datensicht.

---

## 2. Datenquellen im Repo

- Lernfortschrittsdateien: [apps/learners/daria/lernfortschritt_daria.md](../learners/daria/lernfortschritt_daria.md), [apps/learners/dom/lernfortschritt_dom.md](../learners/dom/lernfortschritt_dom.md), [apps/learners/medine/lernfortschritt_medine.md](../learners/medine/lernfortschritt_medine.md), [apps/learners/raphael/lernfortschritt_raphael.md](../learners/raphael/lernfortschritt_raphael.md), [apps/learners/sebastian/lernfortschritt_sebastian.md](../learners/sebastian/lernfortschritt_sebastian.md)
- Meilensteine und Lernziele (Must/Should/Nice): [NEXT_STEPS.md](../../NEXT_STEPS.md)
- Uebungen pro Meilenstein: [docs/uebungen/README_UEBUNGEN.md](../../docs/uebungen/README_UEBUNGEN.md) sowie Dateien unter [docs/uebungen](../../docs/uebungen)
- Git-Zusammenarbeit: GitHub-Daten (Commits, Branches, PRs, Reviews, Kommentare)
- Eigene Felder durch Kursentwickler (z. B. Notizen, ungeklaerte Rueckfragen)

---

## 3. Technische Leitplanken

| Bereich | Vorgabe |
| :--- | :--- |
| Framework | Angular (Standalone Architecture) |
| UI-Library | Angular Material |
| Datenformat | Strukturiertes JSON |
| Sprache | TypeScript (Strict Mode) |
| Versionierung | Git-Flow (Feature Branches und PRs auf main) |

---

## 4. Priorisierung (MoSCoW)

### Must
- Option-A-Uebersicht als Hauptansicht: alle Teilnehmenden x Meilensteine x Uebungen
- Delta zum letzten Stand sichtbar (Highlight + Fortschrittsmeter)
- Snapshot-Erstellung per Knopfdruck mit Historie (vorheriger Stand bleibt erhalten)
- Statussicht auf Must/Should/Nice je Lernziel pro Person

### Should
- Lernpfad-Graph mit Farbcodierung pro Uebung/Meilenstein
- Git-Integration: Commits, Branches, PR-Status, Reviews, Review-Kommentare
- Filter nach Meilenstein, Person, Status
- Umschalten zwischen Uebersicht (Option A) und Detailansicht (Option B)

### Could
- Cluster-Hinweise fuer Zusammenarbeit (Teilnehmende mit aehnlichem Stand)
- Aggregation gemeinsamer individueller Lernwuensche (wenn mehrere TN denselben Wunsch haben)
- Filter nach Meilenstein, Person, Status in Uebersicht

### Won't (vorerst)
- Wettbewerbsmetriken wie "schneller als Durchschnitt"
- Exportfunktionen (CSV/Excel/PDF)

---

## 5. User Stories

### [Kursentwickler]
Als Kursentwickler moechte ich eine stundenaktuelle Gesamtuebersicht (per manuellem Snapshot), damit ich sofort sehe, wer wo steht, wo Blockaden sind und wo Unterstuetzung noetig ist.

Akzeptanzkriterien:
- [ ] Es gibt eine Hauptansicht mit allen Lernenden und allen relevanten Meilensteinen/Uebungen (Option A).
- [ ] Pro Lernendem wird sichtbar: Status in Must/Should/Nice.
- [ ] Der Unterschied zum letzten Snapshot wird visuell hervorgehoben.
- [ ] Ein Snapshot kann per Button erstellt werden; vorherige Snapshots bleiben als Historie erhalten.

### [Kursentwickler]
Als Kursentwickler moechte ich Git-Zusammenarbeit im Dashboard sehen, damit ich Arbeitsqualitaet und Kollaboration beurteilen kann.

Akzeptanzkriterien:
- [ ] Pro Lernendem sind Commit-Aktivitaet, aktive Branches und PR-Status sichtbar.
- [ ] Es ist sichtbar, wer welche PR reviewt hat.
- [ ] Review-Kommentare und offene Diskussionen sind einsehbar.

### [Kursentwickler]
Als Kursentwickler moechte ich gleiche Lernstaende und gleiche individuelle Lernwuensche erkennen, damit ich gezielte Zusammenarbeit vorschlagen kann.

Akzeptanzkriterien:
- [ ] Das Dashboard markiert Lernende mit aehnlichem Fortschritt.
- [ ] Individuelle Lernwuensche werden pro Person aus der Lernfortschrittsdatei angezeigt.
- [ ] Es gibt eine aggregierte Sicht, wenn mehrere Teilnehmende denselben Wunsch haben.

### [Lernende]
Als Lernende/r moechte ich zwischen Gruppenuebersicht und Detailansicht wechseln, damit ich meinen Stand im Kontext und im Detail verstehe.

Akzeptanzkriterien:
- [ ] Es gibt einen klaren View-Switch zwischen Option A (Uebersicht) und Option B (Detail).
- [ ] In der Detailansicht sind naechster Schritt, offene Fragen und aktueller Lernfokus sichtbar.
- [ ] Das Design vermeidet Wettbewerbsdruck (keine Ranking- oder Speed-Metriken).

### [KI-Agent]
Als KI-Agent moechte ich stabile, typisierte JSON-Daten mit eindeutigen IDs lesen, damit ich Fortschritt konsistent auswerten und Features robust implementieren kann.

Akzeptanzkriterien:
- [ ] Datenobjekte besitzen eindeutige IDs fuer Lernende, Meilensteine und Uebungen.
- [ ] Snapshot und Delta sind als eigene, maschinenlesbare Strukturen verfuegbar.
- [ ] TypeScript-Interfaces sind strict-mode-kompatibel und dokumentiert.

---

## 5b. Neue User Stories (v2)

### [Kursentwickler]
Als Kursentwickler moechte ich auf einen Blick sehen, wer aktuell blockiert ist, damit ich gezielt eingreifen kann.

Akzeptanzkriterien:
- [ ] In der Uebersichtsmatrix (Option A) wird `blockedBy` aus dem Lernjournal als Warnsignal sichtbar (z. B. rotes Icon oder farbige Zelle).
- [ ] Wenn `blockedBy` nicht leer ist, erscheint die Zelle visuell hervorgehoben.
- [ ] Die Volltext-Blockade ist in der Detailansicht (Option B) lesbar.

Datenquelle: `JournalEntry.blockedBy` aus [apps/learners/*/lernfortschritt_*.md](../learners)

### [Kursentwickler]
Als Kursentwickler moechte ich den Stand von Meilenstein 4 ("Projekt starten") genauso verfolgen wie M1–M3, damit der gesamte Kursverlauf abgebildet ist.

Akzeptanzkriterien:
- [ ] Meilenstein 4 erscheint als eigene Spalte in der Uebersichtsmatrix.
- [ ] Uebung `meilenstein-04-uebung-01` ist als Einzelstatus sichtbar.
- [ ] `course-roadmap.data.ts` bleibt einzige Quelle fuer Meilenstein-Definitionen (kein Hardcoding im Template).

Datenquelle: [apps/dashboard/data/course-roadmap.data.ts](./data/course-roadmap.data.ts), [docs/uebungen/meilenstein-04-uebung-01.md](../../docs/uebungen/meilenstein-04-uebung-01.md)

### [Lernende]
Als Lernende/r moechte ich in der Detailansicht (Option B) meinen vollstaendigen Lernstand auf einen Blick sehen, damit ich weiss, was als naechstes kommt.

Akzeptanzkriterien:
- [ ] Option B zeigt: aktueller Fokus, naechster kleiner Schritt, offene Gruppenfragestellung(en).
- [ ] Alle Meilensteine mit farbcodierten Uebungsstatus (gruen/gelb/grau) sind pro Person sichtbar.
- [ ] Letzte Journaleintraege (max. 3) sind lesbar.
- [ ] Git-Aktivitaet (Commits im Zeitfenster, offene PRs) wird kompakt angezeigt.
- [ ] Kein Vergleich mit anderen Lernenden in Option B – ausschliesslich eigener Stand.

Datenquelle: `LearnerProgress`, `GitActivity`, `JournalEntry` (alle aus [dashboard.models.ts](./models/dashboard.models.ts))

### [Lernende]
Als Lernende/r moechte ich sehen, ob meine individuellen Lernwuensche auch von anderen geteilt werden, damit ich gezielt Lernpartner finden kann.

Akzeptanzkriterien:
- [ ] Lernwuensche werden in Option B pro Person angezeigt.
- [ ] In der Uebersicht (Option A) wird die Haeufigkeit eines Wunsches als Zahl angezeigt (z. B. "3x").
- [ ] Lernfortschrittsdateien enthalten einen Abschnitt `## Individuelle Lernwuensche` – dieser wird vom Parser ausgewertet.

Datenquelle: `LearnerProgress.individualLearningWishes` aus [apps/learners/*/lernfortschritt_*.md](../learners)

**Bekannte Datenlücke:** Der Abschnitt `## Individuelle Lernwuensche` fehlt in den aktuellen Lernfortschrittsdateien. Er muss dort ergaenzt werden, damit der Parser greift.

### [KI-Agent]
Als KI-Agent moechte ich eine explizite Spezifikation des Lernfortschritt-Markdown-Formats, damit ich Parser-Aenderungen sicher und ohne Regression implementieren kann.

Akzeptanzkriterien:
- [ ] Das erwartete Markdown-Format der Lernfortschrittsdateien ist im PRD als Abschnitt "Dateiformat-Spezifikation" dokumentiert.
- [ ] Jede Sektion (Abschnittsname, erwartete Elemente, Beispielwert) ist tabellarisch spezifiziert.
- [ ] Der Parser `LearnerProgressParserService` deckt alle spezifizierten Sektionen ab.

---

## 6. UX- und Visualisierungsanforderungen

- Farbcodierung pro Uebungsstatus: gruen (abgeschlossen), gelb (in Arbeit), grau (nicht gestartet)
- Hauptansicht Option A: Matrix mit Lernenden x Meilensteine/Uebungen
- Detailansicht Option B: persoenlicher Lernpfad mit Git- und Fragen-Kontext
- Delta-Darstellung: Highlight geaenderter Felder plus Fortschrittsmeter seit letztem Snapshot
- Individuelle Lernwuensche: eigene Spalte im Meilenstein-Kontext, inkl. Gruppenhaeufigkeit
- Blockade-Darstellung: rotes Warnsignal **ausschliesslich in der Namensspalte** (Icon + Tooltip), wenn `blockedBy` nicht leer ist – **nicht** als Hintergrundfarbe in Meilenstein-Spalten

### Option B – Detailansicht (Inhaltsspezifikation)

Pflichtinhalte (Must):
1. **Kopfbereich:** Name, aktueller Fokus (bullet list), naechster kleiner Schritt
2. **Meilenstein-Kacheln:** Eine Kachel pro Meilenstein mit farbcodierten Uebungsstatus-Chips und M/S/N-Zaehler
3. **Lernjournal (letzte 3 Eintraege):** Datum, did, wentWell, blockedBy (hervorgehoben wenn gefuellt), nextStep
4. **Gruppenfragestellungen:** Aufgelistete offene Fragen an die Gruppe
5. **Git-Aktivitaet kompakt:** Commits im Zeitfenster, Anzahl offener PRs, aktive Branches

Optionale Inhalte (Should):
- Individuelle Lernwuensche mit Haeufigkeitsangabe (wie viele andere TN denselben Wunsch haben)

---

## 7. TypeScript-Interfaces (Strict Mode)

```ts
// Quelle: apps/learners/*/lernfortschritt_*.md
export interface LearnerProgress {
	learnerId: string;
	learnerName: string;
	currentFocus: string[];
	milestoneStatus: MilestoneStatus[];
	journalEntries: JournalEntry[];
	nextSmallStep: string;
	groupQuestions: string[];
	individualLearningWishes: string[];
}

// Quelle: NEXT_STEPS.md
export interface MilestoneStatus {
	milestoneId: string;
	milestoneTitle: string;
	mustHaveDone: number;
	mustHaveTotal: number;
	shouldHaveDone: number;
	shouldHaveTotal: number;
	niceToHaveDone: number;
	niceToHaveTotal: number;
	exerciseStatus: ExerciseStatus[];
}

// Quelle: docs/uebungen/meilenstein-*-uebung-*.md
export interface ExerciseStatus {
	exerciseId: string;
	exerciseTitle: string;
	status: "not_started" | "in_progress" | "done";
}

// Quelle: apps/learners/*/lernfortschritt_*.md (Lernjournal)
export interface JournalEntry {
	dateIso: string;
	did: string;
	wentWell: string;
	blockedBy: string;
	nextStep: string;
}

// Quelle: GitHub API (Repo-Aktivitaet)
export interface GitActivity {
	learnerId: string;
	commitCountWindow: number;
	activeBranches: string[];
	pullRequests: PullRequestSummary[];
	reviews: ReviewSummary[];
}

export interface PullRequestSummary {
	prNumber: number;
	title: string;
	state: "open" | "closed" | "merged";
	author: string;
	reviewerIds: string[];
	commentCount: number;
}

export interface ReviewSummary {
	prNumber: number;
	reviewerId: string;
	reviewState: "approved" | "changes_requested" | "commented";
	commentSnippets: string[];
}

// Dashboard-Snapshot und Delta
export interface DashboardSnapshot {
	snapshotId: string;
	createdAtIso: string;
	learners: LearnerProgress[];
	gitActivity: GitActivity[];
	customFields: CustomFieldEntry[];
}

export interface CustomFieldEntry {
	learnerId: string;
	key: string;
	value: string;
}

export interface LearnerDelta {
	learnerId: string;
	completedExercisesDiff: number;
	changedExerciseIds: string[];
	changedMilestoneIds: string[];
	changedQuestionCountDiff: number;
}

export interface SnapshotDelta {
	fromSnapshotId: string;
	toSnapshotId: string;
	learnerDeltas: LearnerDelta[];
}
```

---

## 7b. Dateiformat-Spezifikation: Lernfortschritt-Markdown

Jede Lernfortschrittsdatei unter `apps/learners/<name>/lernfortschritt_<name>.md` MUSS folgende Sektionen enthalten:

| Abschnittsname (exakt) | Inhaltstyp | Geparst als | Beispiel |
| :--- | :--- | :--- | :--- |
| `## Aktueller Fokus` | Checkbox-Liste | `LearnerProgress.currentFocus` | `- [ ] Terminal-Befehle lernen` |
| `## Abgeschlossene Meilensteine` | Checkbox-Liste mit Meilenstein-Titeln | `MilestoneStatus` (abgeglichen mit `COURSE_MILESTONES`) | `- [x] Meilenstein 1: Vibe Coding Basics (...)` |
| `## Lernjournal` | H3-Eintraege mit `- **Was ich gemacht habe:**` etc. | `JournalEntry[]` | `### 2026-04-29` |
| `## Nächster kleiner Schritt` | Erster Bullet-Punkt | `LearnerProgress.nextSmallStep` | `- [ ] Uebung 2 abschliessen` |
| `## Fragen an die Gruppe` | Bullet-Liste | `LearnerProgress.groupQuestions` | `- Wann nutze ich changes requested?` |
| `## Individuelle Lernwuensche` | Bullet-Liste | `LearnerProgress.individualLearningWishes` | `- Mehr Angular-Beispiele` |

**Pflichtfelder im Lernjournal-Eintrag** (je `### YYYY-MM-DD`-Abschnitt, ISO 8601):
- `**Was ich gemacht habe:**` → `JournalEntry.did`
- `**Was gut lief:**` → `JournalEntry.wentWell`
- `**Wo ich hänge:**` → `JournalEntry.blockedBy`
- `**Nächster Schritt:**` → `JournalEntry.nextStep`

**Stand 04.05.2026:** `## Individuelle Lernwuensche` wurde in alle 5 Lernfortschrittsdateien eingefügt. Abschnitt enthält aktuell nur Platzhalter (`-`) – Parser liefert leere Liste bis Lernende eigene Wünsche eintragen.

---

## 8. Definition of Done

- [ ] Alle Must-Anforderungen sind in der UI nutzbar und mit Testdaten verifiziert.
- [ ] Snapshot per Button erzeugt neuen Datensatz; Historie bleibt erhalten.
- [ ] Delta zum letzten Snapshot wird fuer jede Person sichtbar angezeigt.
- [ ] Option A als Standardansicht ist umgesetzt; Wechsel auf Option B funktioniert.
- [ ] Farbstatus pro Uebung ist eindeutig und konsistent (gruen/gelb/grau).
- [ ] Blockade-Warnsignal in Option A sichtbar, wenn `blockedBy` nicht leer ist.
- [ ] Option B zeigt alle 5 Pflichtinhalte gemaess Abschnitt 6 (Inhaltsspezifikation).
- [ ] Meilenstein 4 erscheint vollstaendig in Uebersicht und Detailansicht.
- [ ] Daten aus Lernfortschritt, GitHub und eigenen Feldern sind zusammengefuehrt.
- [ ] `## Individuelle Lernwuensche`-Sektion ist in allen Lernfortschrittsdateien vorhanden und wird vom Parser ausgewertet.
- [ ] Keine kompetitiven Metriken im UI.
- [ ] TypeScript-Modelle laufen im Strict Mode ohne `any`.

---

## 9. Offene Punkte

- GitHub-Datenzugriff finalisieren (Token, Rate Limits, Polling-Strategie)
- Mapping-Regeln: Granulare Meilenstein-Status-Ermittlung (einzelne Uebungs-Checkboxen in `lernfortschritt_*.md` vs. Gesamt-abgeschlossen) spezifizieren und implementieren – aktuell werden alle Uebungen eines abgeschlossenen Meilensteins pauschal auf `done` gesetzt
- Schwellenwerte fuer "aehnlicher Lernstand" fachlich definieren (fuer Cluster-Hinweise)
- Filter nach Meilenstein / Person / Status (Should-Anforderung §4)
- `getExerciseStatusForMilestone()` memorisieren (wird direkt in `*ngFor`-Binding aufgerufen, analog zu `wishFrequencyMap`)
- Snapshot-Wachstum: localStorage-Limit (~5 MB) kann bei vielen Snapshots still ueberschritten werden – Strategie fuer Bereinigung oder Limit definieren

---

## 10. Implementierungsregeln (verbindlich fuer alle Agents und Entwickler)

Diese Regeln entstanden aus Review-Befunden und sollen Regressionen verhindern.

### 10a. UX-Constraints

| Regel | Begruendung |
| :--- | :--- |
| Blockade-Signal (`blockedBy`) erscheint **nur in der Namensspalte** (Icon + Tooltip) | Meilenstein-Zellen duerfen nicht pauschal eingefaerbt werden – das ist inhaltlich irreführend |
| Keine kompetitiven Metriken (Ranking, Speed, Vergleich) in Option B | PRD §4 Won't – explizit ausgeschlossen |
| Delta-Highlight (`delta-highlight`) nur auf Zellen, die sich tatsaechlich veraendert haben | Nicht pauschal auf ganzer Zeile |

### 10b. Dateiformat-Constraints

| Regel | Begruendung |
| :--- | :--- |
| Datumsformat in `## Lernjournal`-Eintraegen: **`### YYYY-MM-DD`** (ISO 8601) | Parser speichert Wert als `JournalEntry.dateIso` – non-ISO-Formate (z. B. `### 29.04.`) erscheinen unkorrekt in der UI |
| Alle Mock-Daten in `learner-markdown.mock.ts` muessen das gleiche Format verwenden wie echte Lernfortschrittsdateien | Divergenz zwischen Mocks und Realformat erzeugt versteckte Parser-Bugs |

### 10c. Code-Qualitaets-Constraints

| Regel | Begruendung |
| :--- | :--- |
| Nur Material-Module importieren, die tatsaechlich im Template verwendet werden | `MatChipsModule` war importiert aber ungenutzt – verschleiert welche Module wirklich benoetigt werden |
| Methoden, die alle Lernenden iterieren (z. B. Wunsch-Haeufigkeit), duerfen nicht direkt im Template-Binding stehen ohne Memoisation | Werden bei jedem Change-Detection-Zyklus neu berechnet – bei wachsender Teilnehmerzahl problematisch |
| Methoden, die aus `learner.milestoneStatus` filtern (z. B. `getExerciseStatusForMilestone()`), duerfen nicht direkt in `*ngFor`-Bindings stehen | Gleiche Kategorie wie iterative Methoden – Ergebnis in vorberechneter Struktur cachen |

### 10d. PRD-Pflegestandard

Jedes implementierte Feature wird im PRD mit einem der folgenden Status markiert:

| Status | Bedeutung |
| :--- | :--- |
| `✅ umgesetzt (Stand TT.MM.JJJJ)` | Akzeptanzkriterien erfuellt, im Build verifiziert |
| `⚠️ teilweise umgesetzt` | Technisch vorhanden, aber nicht alle AK erfuellt – Abweichung beschreiben |
| `❌ nicht umgesetzt` | Noch offen |
| `🐛 Implementierungsfehler` | War umgesetzt, hat aber einen bekannten Bug – mit Beschreibung |

### 10e. Review-Checkliste fuer jeden Commit

Vor jedem Commit / PR muss geprueft werden:

- [ ] Sind neue Angular Material-Imports wirklich im Template in Verwendung?
- [ ] Ist `blockedBy`-Darstellung auf Namensspalte beschraenkt (kein `blocked-cell` auf Meilenstein-Spalten)?
- [ ] Verwenden alle Mock-Markdown-Daten das ISO-Datumsformat `### YYYY-MM-DD`?
- [ ] Werden Methoden mit Iterationen ueber alle Lernenden nicht direkt in Template-Bindings aufgerufen?
- [ ] Ist die Definition of Done in §8 noch aktuell (neu umgesetzte AK abgehakt)?
- [ ] Sind neue bekannte Mängel in §9 (Offene Punkte) eingetragen?

---

## 11. Implementierungsprotokoll

Dokumentiert abgeschlossene Implementierungen mit Datum und bekannten Abweichungen.

### v2 – 04.05.2026

**Umgesetzt:**
- Option A: Blockade-Warnsignal (`warning`-Icon in Namensspalte + Tooltip mit `blockedBy`-Text) ✅
- Option A: Exercise-Chips mit Farbcodierung (gruen/gelb/grau) pro Uebung je Meilenstein-Zelle ✅
- Option A: Wunsch-Haeufigkeit (`3×`) aus Gesamtgruppe berechnet und angezeigt ✅
- Option B: Alle 5 Pflichtinhalte implementiert (Kopfbereich, Meilenstein-Kacheln, Journal, Fragen, Git) ✅
- Mock-Daten fuer alle 5 Lernenden (Medine, Raphael, Sebastian ergaenzt) ✅
- `## Individuelle Lernwuensche`-Abschnitt in alle 5 echten `lernfortschritt_*.md` eingefuegt ✅

**Bekannte Abweichungen / Bugs:**
- ✅ `blocked-cell`-CSS-Klasse auf Meilenstein-Spalten entfernt (04.05.2026)
- ✅ `MatChipsModule` entfernt (04.05.2026)
- ✅ Datumsformat in echten `lernfortschritt_*.md`-Dateien auf `### YYYY-MM-DD` korrigiert (04.05.2026)
- ✅ `getWishesWithFrequency()` memoisiert via `wishFrequencyMap` (04.05.2026)
- ✅ Snapshot-Zaehler und letzter Zeitstempel in Toolbar sichtbar (04.05.2026)
- 🐛 `getWishSummary()` ist toter Code im Component (nicht mehr im Template verwendet) → Cleanup ausstehend
- ⚠️ `getExerciseStatusForMilestone()` wird direkt in `*ngFor`-Binding aufgerufen ohne Memoisation → §9 offener Punkt
- ⚠️ Snapshot-Wachstum ohne Limit oder Bereinigungsstrategie → §9 offener Punkt