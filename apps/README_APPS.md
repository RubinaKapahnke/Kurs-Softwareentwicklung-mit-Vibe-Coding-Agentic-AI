# apps/

Dieser Ordner enthält zwei Bereiche:

## `dashboard/`
Das gemeinsame App-Projekt des Kurses. Hier entsteht die eigentliche Anwendung.

Aktuell wichtige Dateien:
- `apps/dashboard/prd_dashboard.md` (fachliche Anforderungen)
- `apps/dashboard/models/dashboard.models.ts` (strikte TypeScript-Datenmodelle)
- `apps/dashboard/services/` (Parser, Snapshot-Historie, Delta-Berechnung)
- `apps/dashboard/data/mock/ai-learner-scenarios.mock.ts` (AI-Learner Test-Szenarien)
- `apps/dashboard/features/overview-option-a/` (erste Dashboard-UI fuer Option A/B)

## `learners/<dein-name>/`
Dein persönlicher Arbeitsbereich. Hier dokumentierst du deinen Lernstand und löst Übungsaufgaben.

**Warum liegt `learners/` hier?** Der individuelle Lernstand ist direkt mit der App-Entwicklung verknüpft: Was du lernst, fließt in die App ein. Deshalb liegen Lernfortschritt und App-Projekte im selben Ordner – als zwei Seiten desselben Prozesses.

---

Dein Einstieg: [`learners/<dein-name>/lernfortschritt_<dein-name>.md`](./learners/)
