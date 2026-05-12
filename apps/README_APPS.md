# apps/

Dieser Ordner enthält zwei Bereiche:

Ergänzende Arbeitsnotizen für App-Ideen liegen in `apps/notizen_todos_apps.md`.

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
