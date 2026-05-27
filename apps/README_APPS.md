# apps/

Dieser Ordner enthält drei Bereiche:

Ergänzende Arbeitsnotizen für App-Ideen liegen in `apps/notizen_todos_apps.md`.

Der Standard für die zukünftige Organisation von Kursen und Modulen liegt in `apps/ARCHITEKTUR_KURSMODULE.md`.

## `onboarding/`
Der lineare Einstieg für absolute Anfänger bis zum lokalen Repo-Clone.

Aktuell wichtige Dateien:
- `apps/onboarding/prd_onboarding.md` (fachliche Anforderungen für Startseite, Pfadlogik und Brücke)
- `apps/onboarding/src/app/app.routes.ts` (Routing-Muster `/onboarding/step/:id`)
- `apps/onboarding/src/app/guards/step-access.guard.ts` (ID-Validierung und Vorwärtssprung-Block)
- `apps/onboarding/src/app/data/onboarding-steps.data.ts` (6 Onboarding-Schritte inkl. Erfolgskriterien)
- `apps/onboarding/src/app/components/markdown-view/markdown-view.component.ts` (sicheres Rendering von Markdown-Inhalten)
- `apps/onboarding/public/content/` (Markdown-Erklaertexte pro Schritt, z. B. `github-account.md`)
- `apps/onboarding/content-sync.config.mjs` + `apps/onboarding/sync-content.mjs` (Synchronisation ausgewaehlter Kursinhalte in Onboarding-Markdown)
- `apps/onboarding/src/styles/_tokens.scss` (KnOot Brand-Tokens)
- `apps/onboarding/src/styles/_material-theme.scss` (Material 3 Rollen: Primary/Secondary/Tertiary/Error)

## `learning-platform/`
Die generische Kurs-App fuer datengetriebene Kurse, Module, Schritte und die Course Library.

Vor Weiterentwicklung zuerst lesen:
- `course/99-course-development/learning-platform-content-konventionen-planung.md` (Content-Vertrag, Komponenten-Namen, Frontmatter- und LessonFlow-Konventionen)
- `apps/learning-platform/README.md` (technische Definition of Done und aktuelle Gates)
- `course/99-course-development/level-system-prototyp.md` (Grundlage fuer Level, Achievements und Lernpfade)
- `course/99-course-development/rollen_storytelling.md` (Learner-Persona Mika, Storytelling- und Achievement-Kontext)

Aktuell wichtige Dateien:
- `apps/learning-platform/tools/sync-learning-content.mjs` (Synchronisation von Kursmodulen und Course-Library-Markdown nach `public/content/`)
- `apps/learning-platform/public/content/library/` (auslieferbare Kopie von `course/03-course-library/` plus `library-index.json`)
- `apps/learning-platform/src/app/components/markdown-view.component.ts` (sicheres Rendering von Markdown-Inhalten)
- `apps/learning-platform/src/app/components/lesson-flow.component.ts`, `lesson-slide.component.ts` und `task-panel.component.ts` (gefuehrter LessonFlow aus `##`-Slides mit slidebezogenen Aufgaben)
- `apps/learning-platform/src/app/pages/library-page.component.ts` (Artikeluebersicht und Markdown-Ansicht der Course Library)
- `apps/learning-platform/src/app/pages/step-page.component.ts` (Schrittansicht mit rechter Course-Library-Vorschau)
- `apps/learning-platform/src/app/app.routes.ts` (Routing fuer Kurse, Module, Schritte und `/bibliothek`)

## `dashboard/`
Das gemeinsame App-Projekt des Kurses. Hier entsteht die eigentliche Anwendung.

Aktuell wichtige Dateien:
- `apps/dashboard/prd_dashboard.md` (fachliche Anforderungen)
- `apps/dashboard/models/dashboard.models.ts` (strikte TypeScript-Datenmodelle)
- `apps/dashboard/services/` (Parser, Snapshot-Historie, Delta-Berechnung)
- `apps/dashboard/data/mock/ai-learner-scenarios.mock.ts` (AI-Learner Test-Szenarien)
- `apps/dashboard/features/overview-option-a/` (erste Dashboard-UI für Option A/B)

---

Dein persönlicher Lernfortschritt liegt in [`course/learners/<dein-name>/`](../course/learners/)
