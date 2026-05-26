# Product Requirements Document (PRD): Progress-Hub

**Projekt:** Gruppenprojekt "Progress-Hub"  
**Status:** Requirement Baseline v1  
**Stack:** Angular, Angular Material, JSON, TypeScript (Strict)

---

## 1. Vision & Zielsetzung
Der **Progress-Hub** ist die zentrale Web-App für den Kurs, um Lernfortschritt, Aufgabenstatus und Git-Arbeitsweise transparent zu machen. Er unterstützt Kursentwicklung, Lernende und KI-Agenten mit einer einheitlichen, nachvollziehbaren Datensicht.

---

## 2. Datenquellen im Repo

- Lernfortschrittsdateien: aktuell nur Beispielstruktur unter [course/learners/beispiel/lernfortschritt_beispiel.md](../../course/learners/beispiel/lernfortschritt_beispiel.md); produktiv später nach Muster `course/learners/<name>/lernfortschritt_<name>.md`
- Meilensteine und Lernziele (Must/Should/Nice): [COURSE_MILESTONES.md](../../course/00-course-guides/COURSE_MILESTONES.md)
- Übungen pro Meilenstein: [course/02-course-exercises/README_UEBUNGEN.md](../../course/02-course-exercises/README_UEBUNGEN.md) sowie Dateien unter [course/02-course-exercises](../../course/02-course-exercises)
- Git-Zusammenarbeit: GitHub-Daten (Commits, Branches, PRs, Reviews, Kommentare)
- Eigene Felder durch Kursentwickler (z. B. Notizen, ungeklärte Rückfragen)

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
- Option-A-Übersicht als Hauptansicht: alle Teilnehmenden x Meilensteine x Übungen
- Delta zum letzten Stand sichtbar (Highlight + Fortschrittsmeter)
- Snapshot-Erstellung per Knopfdruck mit Historie (vorheriger Stand bleibt erhalten)
- Statussicht auf Must/Should/Nice je Lernziel pro Person

### Should
- Lernpfad-Graph mit Farbcodierung pro Übung/Meilenstein
- Git-Integration: Commits, Branches, PR-Status, Reviews, Review-Kommentare
- Filter nach Meilenstein, Person, Status
- Umschalten zwischen Übersicht (Option A) und Detailansicht (Option B)

### Could
- Cluster-Hinweise für Zusammenarbeit (Teilnehmende mit aehnlichem Stand)
- Aggregation gemeinsamer individueller Lernwünsche (wenn mehrere TN denselben Wunsch haben)

### Won't (vorerst)
- Wettbewerbsmetriken wie "schneller als Durchschnitt"
- Exportfunktionen (CSV/Excel/PDF)

---

## 5. User Stories

### [Kursentwickler]
Als Kursentwickler möchte ich eine stundenaktuelle Gesamtübersicht (per manuellem Snapshot), damit ich sofort sehe, wer wo steht, wo Blockaden sind und wo Unterstützung nötig ist.

Akzeptanzkriterien:
- [ ] Es gibt eine Hauptansicht mit allen Lernenden und allen relevanten Meilensteinen/Übungen (Option A).
- [ ] Pro Lernendem wird sichtbar: Status in Must/Should/Nice.
- [ ] Der Unterschied zum letzten Snapshot wird visuell hervorgehoben.
- [ ] Ein Snapshot kann per Button erstellt werden; vorherige Snapshots bleiben als Historie erhalten.

### [Kursentwickler]
Als Kursentwickler möchte ich Git-Zusammenarbeit im Dashboard sehen, damit ich Arbeitsqualitaet und Kollaboration beurteilen kann.

Akzeptanzkriterien:
- [ ] Pro Lernendem sind Commit-Aktivitaet, aktive Branches und PR-Status sichtbar.
- [ ] Es ist sichtbar, wer welche PR reviewt hat.
- [ ] Review-Kommentare und offene Diskussionen sind einsehbar.

### [Kursentwickler]
Als Kursentwickler möchte ich gleiche Lernstände und gleiche individuelle Lernwünsche erkennen, damit ich gezielte Zusammenarbeit vorschlagen kann.

Akzeptanzkriterien:
- [ ] Das Dashboard markiert Lernende mit aehnlichem Fortschritt.
- [ ] Individuelle Lernwünsche werden pro Person aus der Lernfortschrittsdatei angezeigt.
- [ ] Es gibt eine aggregierte Sicht, wenn mehrere Teilnehmende denselben Wunsch haben.

### [Lernende]
Als Lernende/r möchte ich zwischen Gruppenuebersicht und Detailansicht wechseln, damit ich meinen Stand im Kontext und im Detail verstehe.

Akzeptanzkriterien:
- [ ] Es gibt einen klaren View-Switch zwischen Option A (Übersicht) und Option B (Detail).
- [ ] In der Detailansicht sind nächster Schritt, offene Fragen und aktueller Lernfokus sichtbar.
- [ ] Das Design vermeidet Wettbewerbsdruck (keine Ranking- oder Speed-Metriken).

### [KI-Agent]
Als KI-Agent möchte ich stabile, typisierte JSON-Daten mit eindeutigen IDs lesen, damit ich Fortschritt konsistent auswerten und Features robust implementieren kann.

Akzeptanzkriterien:
- [ ] Datenobjekte besitzen eindeutige IDs für Lernende, Meilensteine und Übungen.
- [ ] Snapshot und Delta sind als eigene, maschinenlesbare Strukturen verfuegbar.
- [ ] TypeScript-Interfaces sind strict-mode-kompatibel und dokumentiert.

---

## 6. UX- und Visualisierungsanforderungen

- Farbcodierung pro Übungsstatus: grün (abgeschlossen), gelb (in Arbeit), grau (nicht gestartet)
- Hauptansicht Option A: Matrix mit Lernenden x Meilensteine/Übungen
- Detailansicht Option B: persönlicher Lernpfad mit Git- und Fragen-Kontext
- Delta-Darstellung: Highlight geänderter Felder plus Fortschrittsmeter seit letztem Snapshot
- Individuelle Lernwünsche: eigene Spalte im Meilenstein-Kontext, inkl. Gruppenhaeufigkeit

---

## 7. TypeScript-Interfaces (Strict Mode)

```ts
// Quelle: course/learners/*/lernfortschritt_*.md
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

// Quelle: course/00-course-guides/COURSE_MILESTONES.md
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

// Quelle: course/02-course-exercises/meilenstein-*-Übung-*.md
export interface ExerciseStatus {
	exerciseId: string;
	exerciseTitle: string;
	status: "not_started" | "in_progress" | "done";
}

// Quelle: course/learners/*/lernfortschritt_*.md (Lernjournal)
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

## 8. Definition of Done

- [ ] Alle Must-Anforderungen sind in der UI nutzbar und mit Testdaten verifiziert.
- [ ] Snapshot per Button erzeugt neuen Datensatz; Historie bleibt erhalten.
- [ ] Delta zum letzten Snapshot wird für jede Person sichtbar angezeigt.
- [ ] Option A als Standardansicht ist umgesetzt; Wechsel auf Option B funktioniert.
- [ ] Farbstatus pro Übung ist eindeutig und konsistent.
- [ ] Daten aus Lernfortschritt, GitHub und eigenen Feldern sind zusammengefuehrt.
- [ ] Keine kompetitiven Metriken im UI.
- [ ] TypeScript-Modelle laufen im Strict Mode ohne `any`.

---

## 9. Offene Punkte

- GitHub-Datenzugriff finalisieren (Token, Rate Limits, Polling-Strategie)
- Mapping-Regeln: Wie genau aus Markdown nach JSON geparst wird
- Schwellenwerte für "aehnlicher Lernstand" fachlich definieren
