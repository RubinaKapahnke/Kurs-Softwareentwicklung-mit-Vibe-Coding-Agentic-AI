# Learning Platform

## Kontext fuer neue Entwicklungssessions

Vor jeder groesseren Weiterentwicklung der Learning Platform diese Dateien lesen:

- `../../course/99-course-development/learning-platform-content-konventionen-planung.md`
- `../../course/99-course-development/level-system-prototyp.md`
- `../../course/99-course-development/rollen_storytelling.md`
- `../README_APPS.md`

Die fachliche Wahrheit liegt in `course/`. `apps/learning-platform/public/content/` ist ein generiertes Auslieferungsziel. Lerncontent gehoert nicht in Angular-Komponenten.

## Aktueller Entwicklungsstand

Umgesetzt:

- **Design System:** Token-System (`src/styles/_tokens.scss`) als Single Source of Truth fuer alle CSS Custom Properties. Separate Partials fuer Reset, Typografie, Layout und Code-Blocks. Keine hardcodierten Farbwerte in Komponenten-SCSS. Technische Referenz: `DESIGN_SYSTEM.md`.
- Content-Sync kopiert Kursmodule und Course-Library-Markdown nach `public/content/`.
- Content-Vertrag v1 ist dokumentiert: Pflicht-Frontmatter, erlaubte `contentType`-/`renderAs`-/`sourceLayer`-Werte und `##`-Slide-Regel.
- Content-Sync liest Frontmatter, validiert vorhandenes Frontmatter und erweitert Step- und Library-Manifeste um Metadaten, Slides, Aufgaben-Direktiven, Todos und Library-Links.
- `/bibliothek` zeigt Course-Library-Artikel als Markdown.
- Das Hauptmenue enthaelt einen Link zur Course Library.
- Step-Seiten rendern Markdown-Sektionen.
- `LessonFlow` rendert `##`-Slides aus dem Step-Manifest mit freier Slide-Auswahl und Vor-/Zurueck-Navigation.
- `SlideScrollHint`: sticky Gradient-Indikator am Slide-Ende, solange der Nutzer noch nicht bis zum Ende gescrollt hat. `IntersectionObserver` auf Sentinel-Element — bei Sichtbarkeit wird `hasReachedEnd` gesetzt und der Weiter-Button eingeblendet. Bereits gelesene Slides werden pro Step im Gedaechtnis behalten.
- `TaskPanel` zeigt erkannte Aufgaben-Direktiven und Todos zur aktiven Slide an.
- Links auf Course-Library-Dateien koennen im Step rechts als `LibraryPreview` geoeffnet werden.

Geplant, aber noch nicht umgesetzt:

- Dark Mode: Token-Primitives (`--_brand-*`) sind bereits isoliert — `@media (prefers-color-scheme: dark)` kann spaeter in `_tokens.scss` ergaenzt werden.
- `CourseShell` mit aufklappbarer `SideNavigation` und `ContentNavigation`.
- `StepRail` mit `StepMarker`, Inhaltstyp-Icons und offenem Todo-Zaehler.
- `TodoOverview`, `KnowledgeCheck`, Medien-Direktiven, Achievements, Level.

Empfohlener naechster technischer Schritt:

1. `StepRail` mit `StepMarker` und Fortschrittsanzeige pro Step bauen.
2. Komponenten schneiden: `CourseShell`, `SideNavigation`, `ContentNavigation`.
3. Neue app-gerenderte Markdown-Dateien schrittweise mit v1-Frontmatter ausstatten.

## Definition of Done (DoD) - technische Umsetzung

Diese DoD gilt fuer alle Aenderungen in `apps/learning-platform`.

Ein PR ist technisch fertig, wenn alle aktuell verbindlichen Kriterien erfuellt sind. Ziel-Gates sind verbindliche Ausbauziele: Sie werden erst merge-blockierend, sobald die dazugehoerigen Scripts, CI-Checks und Verantwortlichkeiten eingerichtet sind.

## 1. Status der DoD-Gates

| Bereich | Aktueller Check | Status | Merge-Regel |
| :--- | :--- | :--- | :--- |
| Content-Sync | `npm run sync-content` | eingerichtet | verbindlich |
| Build | `npm run build` | eingerichtet | verbindlich |
| Production-Build | `npm run build:prod` | eingerichtet | verbindlich |
| Unit-Tests | `npm run test` | eingerichtet | verbindlich fuer vorhandene Tests |
| Coverage | noch kein eigener Script | Ziel-Gate | noch nicht blockierend |
| Linting | noch kein Script | Ziel-Gate | noch nicht blockierend |
| Content-Validation | noch kein eigener Validator | Ziel-Gate | noch nicht blockierend |
| Kernpfad-E2E | noch kein E2E-Framework | Ziel-Gate | noch nicht blockierend |
| Accessibility-Audit | noch kein Script | Ziel-Gate | noch nicht blockierend |

## 2. Aktuell verbindliche Muss-Kriterien

### Build und Release

- `npm run sync-content` laeuft erfolgreich.
- `npm run build` laeuft erfolgreich.
- `npm run build:prod` laeuft erfolgreich.
- Build-Fehler werden nicht ueber Ausnahmen umgangen.

### Tests und Qualitaet

- Neue oder geaenderte Logik wird durch passende Unit-Tests abgesichert, sofern ein testbarer Logikanteil betroffen ist.
- Wenn ein Test fuer eine Aenderung noch nicht sinnvoll moeglich ist, wird der Grund im PR dokumentiert.
- Manuelle Tests sind zulaessig, ersetzen aber keine vorhandenen automatisierten Tests.

### TypeScript

- Strict Mode bleibt aktiv.
- `any` ist nur mit kurzer Begruendung erlaubt.
- Neue Typen sollen fachliche Grenzen sichtbar machen, statt Rohdaten unstrukturiert durch die App zu reichen.

### Architektur

- Page-Komponenten orchestrieren Routing, State und Layout.
- Fachlogik liegt in Services oder klar abgegrenzten Hilfsfunktionen.
- Wiederverwendbare UI liegt in Komponenten.
- Neue Komponenten haben eine klare Verantwortung.
- Content-Texte gehoeren nicht in Angular-Komponenten, sondern in Markdown-Dateien unter `course/`.

### Dateigroessen

- Ab 250 Zeilen in einer TypeScript-Datei wird Refactoring aktiv geprueft.
- Ab 350 Zeilen braucht die Datei eine dokumentierte Begruendung oder eine Aufteilung.
- Parser, Tests und Konfigurationsdateien duerfen begruendete Ausnahmen haben.

### Routing und Fehlerbehandlung

- Neue relevante Routen haben ein klares Fallback-Verhalten.
- Fehlerzustaende verwenden konsistente Fehlercodes oder eine begruendete Zwischenloesung.
- Nutzer erhalten eine verstaendliche Recovery-Anleitung, wenn sie selbst sinnvoll handeln koennen.

### Markdown-Sicherheit

- Markdown-Rendering bleibt sanitisiert.
- Erlaubte HTML-Tags und Attribute werden per Allowlist begrenzt.
- Neue Markdown-Funktionen duerfen keine ungepruefte HTML- oder Script-Ausfuehrung erlauben.

### Progress und Migration

- Regulare Inhaltsupdates duerfen gespeicherten Fortschritt nicht ohne Begruendung verlieren.
- Strukturveraenderungen an Course-, Module- oder Step-Daten werden im PR beschrieben.
- Wenn eine Migration noetig ist, wird sie mit dem betroffenen Datenmodell dokumentiert.

### Breaking Changes

Bei Breaking Changes sind Pflicht:

- kurzer Changelog- oder PR-Hinweis
- Migrationshinweis
- Rueckwaertskompatibilitaet fuer mindestens eine Version oder klar dokumentierter Cutover

## 3. Ziel-Gates fuer technische Exzellenz

Diese Gates sollen eingerichtet werden und danach merge-blockierend werden.

### Linting

Ziel:

- Script: `npm run lint`
- keine Lint-Fehler
- Lint-Warnungen im PR sichtbar machen und aktiv reduzieren

### Coverage

Ziel:

- Script: `npm run test:coverage`
- globale Line-Coverage mindestens 70 Prozent
- spaeter zusaetzlich Branch-Coverage festlegen

### Content-Validation

Ziel:

- Script: `npm run content-validation`
- Katalog, Kurs-Meta, Modul-Meta, Step-Manifest und Library-Index werden validiert.
- Frontmatter wird validiert, sobald die Konvention final festgelegt ist.
- Ungueltiger Content blockiert den Merge.

### Kernpfad-E2E

Ziel:

- Playwright als E2E-Framework verwenden.
- Script: `npm run test:e2e`
- Kernpfade automatisiert pruefen.

Definierte Kernpfade:

- Kurskatalog laden und Live-Kurs oeffnen.
- Modulseite laden und Resume-Ziel korrekt aufloesen.
- Schritt-Navigation vor/zurueck und Abschluss markieren.
- Fehlerroute bei ungueltigem Kurs/Modul/Schritt mit Recovery-Hinweis.
- Bibliotheksnavigation und Rendering von Markdown-Inhalten.
- Library-Link im Step oeffnet die rechte Vorschau.
- Fortschritt speichern, Seite neu laden, Fortschritt bleibt erhalten.

### Accessibility

Ziel:

- Kernpfade sind per Tastatur bedienbar.
- Fokus-Reihenfolge ist logisch und sichtbar.
- Semantik mit Ueberschriften, Labels und Rollen ist konsistent.
- Kritische Kontrastprobleme sind behoben.
- Fuer zentrale Seiten wird Lighthouse Accessibility als operativer Richtwert genutzt, Zielwert >= 90.

Hinweis: Lighthouse ist ein pragmatischer Qualitaetsindikator und ersetzt keine formale Rechtspruefung.

### Observability

Ziel:

- Fehler werden standardisiert mit Fehlercode protokolliert.
- Fehlertexte sind sowohl fuer Nutzerfuehrung als auch Debugging verwertbar.
- Wiederkehrende Content- und Routingfehler sind in Logs unterscheidbar.

## 4. Ausnahmeprozess

Eine Ausnahme fuer aktuell verbindliche Muss-Kriterien ist nur gueltig, wenn alle Punkte vorliegen:

- Begruendung im PR unter Abschnitt "Ausnahmen"
- Risikoabschaetzung mit Auswirkung und Zeitraum
- verknuepftes Ticket oder klar benannter Follow-up
- Freigabe durch die fachlich verantwortliche Person

Fehlt einer dieser Punkte, ist die Ausnahme ungueltig und der PR nicht DoD-konform.

Sobald eine `CODEOWNERS`-Regel fuer `apps/learning-platform` existiert, ersetzt der Code Owner die fachlich verantwortliche Person als Freigabeinstanz.

## 5. PR-Checkliste

- [ ] `npm run sync-content` ist erfolgreich.
- [ ] `npm run build` ist erfolgreich.
- [ ] `npm run build:prod` ist erfolgreich.
- [ ] Vorhandene Tests sind erfolgreich.
- [ ] Neue oder geaenderte Logik ist getestet oder die Testluecke ist begruendet.
- [ ] Architekturregeln eingehalten oder Ausnahme dokumentiert.
- [ ] Markdown-Sicherheit wurde bei betroffenen Renderer-Aenderungen geprueft.
- [ ] Progress-/Manifest-Aenderungen sind dokumentiert.
- [ ] Accessibility in betroffenen Kernpfaden wurde zumindest manuell geprueft.
- [ ] Breaking Changes sind sauber dokumentiert, falls zutreffend.

## 6. Lokaler Quick-Check

```bash
npm run sync-content
npm run build
npm run build:prod
npm run test
```

## 7. Naechste DoD-Ausbauschritte

1. `lint` einrichten.
2. `test:coverage` mit Line-Coverage >= 70 Prozent einrichten.
3. `content-validation` fuer Katalog, Module, Step-Manifest und Library-Index bauen.
4. Playwright einrichten und die Kernpfad-E2E-Tests starten.
5. Optional `CODEOWNERS` fuer `apps/learning-platform` definieren.
