# Architekturleitfaden: Generische Kursmodul-App

Dieser Leitfaden definiert, wie wir neue Kurse und Module zukuenftig im selben Repository organisieren.

## Zielbild

- Eine gemeinsame App-Engine fuer alle Kurse.
- Kursinhalte sind datengetrieben und vom App-Code getrennt.
- Neue Module koennen in der Regel ohne App-Code-Änderung ausgerollt werden.
- Sonderlogik (z. B. Voucher) bleibt als Modul-Erweiterung isoliert.

## Empfohlene Repo-Struktur

```text
apps/
  learning-platform/                  # Neue generische App (Engine)
    src/app/
      core/                           # Shell, Router, generischer State
      features/                       # Seiten/Komponenten
      modules/                        # optionale Modul-Strategien
      models/                         # generische Typen
    public/content/                   # synchronisierte, auslieferbare Inhalte

course/
  catalog/
    courses.catalog.json              # zentrale Kursliste (Source of truth)

  01-course-modules/
    <course-id>/
      course.meta.json                # Metadaten fuer den Kurs
      modules/
        <module-id>/
          module.meta.json            # Metadaten fuer ein Modul
          step-manifest.json          # Modul-Manifest fuer Steps
          step-01/
            lektion-inhalte.md
            aufgaben.md               # optional
          step-02/
            lektion-inhalte.md
          Assets/
            ...
```

Hinweis:
- public/content in der App ist Build-/Sync-Ziel, nicht die redaktionelle Quelle.
- Redaktionelle Quelle liegt unter course/.

## Pflichtfelder

### 1) courses.catalog.json

Jeder Kurs muss diese Felder enthalten:

```json
{
  "id": "vibe-coding-agentic-ai",
  "title": "Softwareentwicklung mit Vibe Coding & Agentic AI",
  "status": "live",
  "defaultModuleId": "m01-onboarding",
  "moduleIds": ["m01-onboarding", "m02-prd"],
  "language": "de",
  "version": 1
}
```

Pflicht:
- id
- title
- status (live | coming-soon | archived)
- defaultModuleId
- moduleIds
- language
- version

### 2) course.meta.json

```json
{
  "id": "vibe-coding-agentic-ai",
  "shortTitle": "Vibe Coding & Agentic AI",
  "audience": [
    "Einsteiger in Softwareentwicklung mit KI-Unterstuetzung",
    "Fachpersonen mit Produkt- oder Datenfokus"
  ],
  "outcome": "Teilnehmende bauen ein lauffaehiges, wartbares Produktinkrement.",
  "owners": ["team-learning"],
  "version": 1
}
```

Pflicht:
- id
- shortTitle
- audience
- outcome
- owners
- version

### 3) module.meta.json

```json
{
  "id": "m01-onboarding",
  "courseId": "vibe-coding-agentic-ai",
  "title": "Onboarding in den Kurs",
  "order": 1,
  "type": "guided",
  "entryRule": "voucher-required",
  "completionRule": "all-required-steps",
  "strategy": "onboarding-v1",
  "version": 1
}
```

Pflicht:
- id
- courseId
- title
- order
- type (guided | self-paced | workshop)
- completionRule
- version

Optional:
- entryRule
- strategy (nur wenn Sonderlogik benoetigt wird)

### 4) step-manifest.json

```json
{
  "moduleId": "m01-onboarding",
  "steps": [
    {
      "id": 1,
      "slug": "ankommen-und-verstehen",
      "title": "Ankommen und Verstehen",
      "required": true,
      "sections": [
        { "type": "lesson", "file": "step-01/lektion-inhalte.md" },
        { "type": "tasks", "file": "step-01/aufgaben.md" }
      ],
      "resources": [
        { "label": "Kursueberblick", "href": "https://..." }
      ]
    }
  ],
  "version": 1
}
```

Pflicht pro Step:
- id (stabil, niemals umnummerieren)
- slug
- title
- required
- sections

Pflicht global:
- moduleId
- steps
- version

## Optimierungen fuer Wiederverwendbarkeit

### 1) Modul als Produktbaustein statt Kurskopie

Ziel:
- Ein Modul kann in mehreren Kursen genutzt werden, ohne Dateien zu duplizieren.

Empfehlung:
- In `module.meta.json` technische Felder fuer Wiederverwendung ergaenzen:
  - `templateId` (z. B. onboarding-core-v1)
  - `compatibilityTags` (z. B. beginner, web, data)
  - `estimatedDurationMinutes`
- Kurs bindet Module ueber Referenzen statt Kopien.

Beispiel:

```json
{
  "id": "m01-onboarding",
  "courseId": "vibe-coding-agentic-ai",
  "templateId": "onboarding-core-v1",
  "compatibilityTags": ["beginner", "foundation"],
  "estimatedDurationMinutes": 180,
  "title": "Onboarding in den Kurs",
  "order": 1,
  "type": "guided",
  "completionRule": "all-required-steps",
  "version": 1
}
```

### 2) Shared-Content-Bibliothek fuer Bausteine

Ziel:
- Wiederkehrende Inhalte (z. B. Git-Grundlagen, Repo-Regeln, Lizenz-Hinweise) zentral pflegen.

Empfehlung:
- Gemeinsame Bibliothek unter `course/shared/` einfuehren:
  - `course/shared/lessons/`
  - `course/shared/tasks/`
  - `course/shared/resources/`
- `step-manifest.json` darf neben lokalen Dateien auch Shared-Dateien referenzieren.

Regel:
- Shared-Inhalte sind fachlich stabil und kursuebergreifend.
- Kursespezifische Kontexte bleiben im jeweiligen Modulordner.

### 3) Step-Manifest mit Erweiterungspunkten

Ziel:
- Module konfigurierbar halten, ohne App-Code zu aendern.

Empfehlung:
- Pro Step optionale Felder einfuehren:
  - `prerequisites` (Liste vorheriger Step-IDs)
  - `visibilityRule` (z. B. always, gated, conditional)
  - `completionMode` (lesson-only, tasks-only, lesson-and-tasks)
  - `featureFlags` (z. B. quiz, exercises, reflection)

Nutzen:
- Ein Modul kann denselben Kernablauf mit unterschiedlichen Schwaechen/Staerken je Kurs fahren.

### 4) Modul-Strategien strikt begrenzen

Ziel:
- Sonderlogik bleibt beherrschbar und testbar.

Empfehlung:
- Strategy-Interface mit klaren Hooks:
  - `canEnterModule(context)`
  - `canOpenStep(stepId, context)`
  - `canCompleteStep(stepId, context)`
  - `onStepCompleted(stepId, context)`
- Harte Regel: Wenn ein Verhalten rein per Manifest konfigurierbar ist, keine Strategy schreiben.

### 5) Fortschritt robust und migrationsfaehig machen

Ziel:
- Kein Fortschrittsverlust bei Content-Updates.

Empfehlung:
- Progress-Key formatieren als `learning:<courseId>:<moduleId>:v<schemaVersion>`.
- In `step-manifest.json` optional `deprecatedStepIds` unterstuetzen.
- Migrationstabelle bei Step-Umbenennung pflegen:
  - alt: 4 -> neu: 6

### 6) Varianten statt Forks

Ziel:
- Ein Modul kann fuer unterschiedliche Zielgruppen variieren, ohne 3 Kopien zu erzeugen.

Empfehlung:
- In `module.meta.json` optional:
  - `variantOf` (z. B. m01-onboarding)
  - `variantKey` (z. B. beginner, experienced)
- Nur differierende Schritte lokal halten, unveraenderte Schritte aus Basismodul erben.

## Priorisierter Verbesserungsplan

### Phase 1 (sofort, hoher Nutzen)

1. Metadaten erweitern: `templateId`, `estimatedDurationMinutes`, `compatibilityTags`.
2. Strategy-Interface definieren und dokumentieren.
3. Progress-Key auf `learning:<courseId>:<moduleId>:v<schemaVersion>` umstellen.
4. CI um Referenz- und Eindeutigkeitschecks erweitern.

### Phase 2 (kurzfristig)

1. `course/shared/` als gemeinsame Content-Bibliothek einfuehren.
2. Step-Manifest um `prerequisites`, `completionMode`, `featureFlags` erweitern.
3. Modulvarianten (`variantOf`, `variantKey`) aufnehmen.

### Phase 3 (mittelfristig)

1. Analytics-Events standardisieren:
  - `module_started`
  - `step_completed`
  - `module_completed`
  - `dropoff_detected`
2. Qualitaetsmetriken pro Modul tracken:
  - Abschlussquote
  - mittlere Bearbeitungszeit
  - Dropoff-Step
3. Halbautomatische Modul-Review-Checks (Broken Links, Text-Qualitaet, fehlende Erfolgskriterien).

## Weitere sinnvolle Optimierungen

- Lokalisierung vorbereiten: Inhalte je Sprache unter `de/`, `en/` ablegen, IDs sprachneutral halten.
- Ressourcenhygiene: externe Links in periodischem Link-Check pruefen.
- Asset-Disziplin: Bildgroessen und Dateiformate validieren (WebP bevorzugt, konsistente Benennung).
- Abwaertskompatibilitaet: Legacy-Routen fuer mindestens eine Release-Periode beibehalten.
- Dokumentation: pro Modul eine kurze `README.md` mit Lernziel, Voraussetzung, Abnahme.

## Stabilitaetsregeln fuer IDs

- courseId, moduleId und step.id sind langlebige technische IDs.
- Keine Wiederverwendung geloeschter IDs.
- Schritt-Reihenfolge nur ueber order/Array, nicht durch Umnummerierung alter IDs.
- Fortschrittsschluessel baut auf courseId + moduleId + step.id auf.

## Standardprozess: Neuen Kurs anlegen

1. Eintrag in course/catalog/courses.catalog.json erstellen.
2. Kursordner mit course.meta.json anlegen.
3. Erstes Modul unter modules/<module-id>/ mit module.meta.json + step-manifest.json anlegen.
4. Inhalte in step-XX/ pflegen.
5. Content-Sync in die App ausfuehren.
6. Validierung + Build + Smoke-Test laufen lassen.

## Standardprozess: Neues Modul in bestehendem Kurs

1. module.meta.json und step-manifest.json anlegen.
2. Modul-ID in moduleIds des Kurses ergaenzen.
3. Inhalte in step-XX/ inkl. Assets pflegen.
4. Falls noetig strategy setzen (sonst weglassen).
5. Validierung + Build + Smoke-Test.

## CI-Mindestchecks

- Schema-Validierung fuer courses.catalog.json, course.meta.json, module.meta.json, step-manifest.json.
- Referenzpruefung:
  - course.moduleIds zeigt auf existierende Module.
  - module.courseId passt zum Kursordner.
  - section.file existiert.
- Eindeutigkeit:
  - keine doppelten IDs in Kursen/Modulen/Steps.
- App-Build muss erfolgreich sein.

## Ownership und Zusammenarbeit

- Fachteam: Inhalte in course/ (Markdown, Aufgaben, Ressourcen).
- Tech-Team: Engine in apps/learning-platform und Validierungspipeline.
- Gemeinsame Verantwortung: Metadatenqualitaet und Abnahmekriterien.

## Migrationshinweis fuer bestehende Onboarding-App

- Bestehendes Onboarding wird als Modul m01-onboarding uebernommen.
- Legacy-Routen duerfen temporaer auf neue Modulrouten weiterleiten.
- Sobald die neue App stabil ist, alte Onboarding-App archivieren.
