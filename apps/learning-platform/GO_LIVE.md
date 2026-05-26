# Learning Platform Go Live (ohne Uebergangsloesung)

Diese Anleitung schaltet die neue Learning-Platform direkt produktiv auf GitHub Pages.

## 1) Einmalig in GitHub aktivieren

1. Repo -> Settings -> Pages.
2. Unter "Build and deployment" die Source auf "GitHub Actions" setzen.
3. Falls noch nicht vorhanden: Standard-Branch ist `main`.

## 2) Deployment ausloesen

Es gibt zwei Wege:

1. Push auf `main` mit Änderungen in:
- `apps/learning-platform/**`
- `course/catalog/**`
- `course/01-course-modules/**`

2. Oder manuell:
- Actions -> "Deploy Learning Platform to GitHub Pages" -> "Run workflow".

## 3) Ziel-URL

Nach erfolgreichem Workflow steht die Live-URL in:
- Actions-Lauf -> Job `deploy` -> `page_url`.

Typisch:
- `https://<org-oder-user>.github.io/Kurs-Softwareentwicklung-mit-Vibe-Coding-Agentic-AI/`

## 4) Harte Umstellung ohne Parallelbetrieb

Wenn die URL verfügbar ist:

1. Alte Onboarding-App nicht mehr als produktiven Einstieg verwenden.
2. Offizielle Kurslinks auf die neue Live-URL umstellen.
3. Kommunikation an Teilnehmende: nur noch neue Learning-Platform nutzen.

## 5) Schneller Check nach Deploy

1. Startseite lädt Kurskarten.
2. Modulseite öffnet unter `/kurse/<courseId>/module/<moduleId>`.
3. Stepseite öffnet unter `/kurse/<courseId>/module/<moduleId>/step/<id>`.
4. Schritt als erledigt markieren funktioniert und Fortschritt ist sichtbar.

## 6) Verify-Checkliste (Release Gate)

Vor jedem produktiven Deploy einmal komplett prüfen:

1. Lokal in `apps/learning-platform` ausführen:
- `npm run build:pages`
2. Build-Ordner existiert:
- `dist/learning-platform/browser`
3. Kurskatalog + Manifest sind synchron:
- `course/catalog/courses.catalog.json`
- `course/01-course-modules/vibe-coding-agentic-ai/modules/m01-onboarding/step-manifest.json`
4. Fehlerseiten prüfen:
- ungueltige URL zeigt `/fehler`
- fehlender Step zeigt Fehlerseite statt leerer Ansicht
5. Resume/Navigation prüfen:
- Modulseite startet mit "Weiterlernen" auf den ersten offenen Schritt
- Stepseite: Zurück, Weiter und Zum Modul funktionieren stabil
6. Actions-Lauf prüfen:
- Workflow `Deploy Learning Platform to GitHub Pages` ist grün
- Step `Verify Pages build output` erfolgreich
