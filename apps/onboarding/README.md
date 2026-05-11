# Kurs-Tool: Modul Onboarding

Diese Datei ist die Arbeitsgrundlage fuer Pflege, Erweiterung und Abnahme der Onboarding-App.

## Zielbild

Das Modul Onboarding ist fertig, wenn neu aufgenommene Teilnehmende ohne Vorwissen bis zur aktiven Mitarbeit im Kurs-Repo gefuehrt werden und danach sicher mit NEXT_STEPS.md weiterarbeiten koennen.

## Produkt-Scope (MVP)

- Hoechstens 6 lineare Kernschritte bis zum lokalen Clone sind als Fuehrungslogik klar erkennbar.
- Der aktuelle Stand nutzt mehr Detailschritte, muss aber fuer Lernende weiterhin wie ein klarer, sicherer Flow wirken.
- Pro Schritt ist ein Erfolgskriterium sichtbar.
- Nach dem Onboarding ist NEXT_STEPS.md der fachliche Einstieg in den Kursfluss.

## ONB-001: Abnahme-Checkliste (PRD zu DoD)

### A. Einstieg und Orientierung

- [ ] Die Startseite bietet genau 3 primaere Handlungsoptionen (Onboarding starten, Kursueberblick, weitere Kurse im Aufbau).
- [ ] Die Sprache bleibt einsteigerfreundlich und konkret für Anfänger*innen.
- [ ] Der Hinweis "weitere Kurse im Aufbau" ist sichtbar, aber klar sekundaer.

### B. Schrittlogik und Sicherheit

- [ ] Schritt 1 (Voucher) sperrt alle Folgeschritte bis zur Freischaltung.
- [ ] Schritt 2 fragt Vorerfahrung ab und fuehrt in den passenden Pfad.
- [ ] Bei bestehendem Account ist die Sichtbarkeitswarnung inkl. Pflicht-Checkbox aktiv, bevor der Schritt als erledigt markiert werden kann.
- [ ] Der Fallback zur Standardfuehrung (neuer Account) ist jederzeit erreichbar.

### C. Rueckkehr und Navigation

- [ ] Rueckkehrende koennen am letzten offenen Schritt fortsetzen.
- [ ] Freie Schrittauswahl im Shell-Navigator funktioniert.
- [ ] Die Zusammenfassung ermoeglicht gezieltes Nacharbeiten offener Schritte.

### D. Bruecke in den Kursfluss

- [ ] Der Abschluss fuehrt klar zu NEXT_STEPS.md und README_UEBUNGEN.md.
- [ ] GitHub-Links und VS-Code-Alternative sind als gleichwertige Wege sichtbar.
- [ ] Lernende koennen nach dem Abschluss den Unterschied erklaeren: Kurs-Repo fuer Orientierung/Fortschritt, eigenes Repo fuer Umsetzung.

### E. Qualitaet

- [ ] Build laeuft fehlerfrei.
- [ ] Kritische Pfade (Voucher, Schritt-2-Entscheidung, Rueckkehr, Abschluss) sind manuell getestet.
- [ ] Mobile ist nutzbar; bei kritischen Schritten ist der Desktop-Hinweis sichtbar.

## Manuelle Testfaelle (Minimum)

1. Neue Person ohne Account
- [ ] Start bei Schritt 1, Voucher validieren, neuer Account-Pfad, bis Abschluss.
- [ ] Abschlusslinks in NEXT_STEPS.md und README_UEBUNGEN.md geprueft.

2. Person mit bestehendem Account, wenig Repo-Erfahrung
- [ ] Existing-Beginner-Pfad durchlaufen.
- [ ] Pflicht-Checkbox geprueft.

3. Person mit bestehendem Account, erfahren
- [ ] Existing-Experienced-Pfad durchlaufen.
- [ ] Fallback "neuen Account verwenden" pruefen.

4. Reload- und Rueckkehrtest
- [ ] Browser-Reload in Schritt 2 behaelt den korrekten Zustand.
- [ ] Startseite/Kursstart bietet korrektes Fortsetzen.

## Pflegeorte im Code

- Routen: src/app/app.routes.ts
- Schrittdefinitionen und Inhalte: src/app/data/onboarding-steps.data.ts
- Typen: src/app/models/onboarding.models.ts
- Zustand: src/app/services/onboarding-state.service.ts
- Einstieg: src/app/pages/startseite/
- Kursstart: src/app/pages/kursstart/
- Onboarding-Rahmen: src/app/pages/onboarding-shell/
- Schrittseite: src/app/pages/step-page/
- Abschluss: src/app/pages/zusammenfassung/
- Markdown-Texte: public/content/

## Inhalts-Sync Aus Kursmodul-Lektionen

Die redaktionelle Quelle für Lesson-Flow-Inhalte liegt im Kursmodul unter:

- `course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/lerninhalte/lektion-XX-.../lektion-inhalte.md`
- optional: `.../aufgaben.md`

Der Sync erfolgt in `apps/onboarding` mit:

```bash
npm run sync-content
```

Ergebnis:

- `public/content/step-manifest.json` wird aktualisiert.
- Inhalte werden nach `public/content/step-XX/` gespiegelt.

## Markdown-Konvention Fuer Lesson-Flow

- Jede `##`-Überschrift erzeugt eine neue Lesson-Slide.
- Ausnahmen ohne eigene Slide: `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`.
- `###` erzeugt Abschnitte innerhalb der Slide.
- `####` erzeugt eine Zwischenüberschrift im Abschnitt.

### Quiz-Pattern

```md
## Quiz: Kurze Verständnisfrage

Frage: ...
Hinweis: ...
Mehrfachauswahl: nein

- [ ] Option A
- [x] Option B

Erfolg: ...
Fehler: ...
```

### Farbfelder Ueber H3-Praefixe

- `### Wichtig:` / `### Hinweis:` -> gelb
- `### Achtung:` -> rot
- `### Erfolg:` / `### OK:` / `### Gruen:` -> grün
- `### Blau:` -> blau
- `### Info:` / `### Tipp:` -> eigener Hinweis-Farbton

Hinweis: Das Präfix wird nicht angezeigt. Sichtbar bleibt nur der Text nach `:`.

## Build und lokale Pruefung

Im Ordner apps/onboarding:

```bash
npm install
npm run build
npm run test
```

Optional fuer lokale UI-Pruefung:

```bash
npx ng serve
```

## Aktuelles Mindest-Testset

- `src/app/services/onboarding-state.service.spec.ts`
	- Persistenz fuer Schritt 2
	- Reset von Schritt-3-Fortschritt bei Pfadwechsel
	- Reset der Sichtbarkeitsbestaetigung
- `src/app/guards/step-access.guard.spec.ts`
	- Redirect bei ungueltigen Schritten
	- Schutz aller Folgeschritte ohne Voucher
	- Freigabe nach Voucher-Validierung
- `src/app/pages/step-page/step-page.component.spec.ts`
	- Sichtbarer Folgeinhalte-Hinweis unterhalb Lesson-Flow
- `src/app/components/lesson-flow/lesson-flow.component.spec.ts`
	- Quiz-Zustandslogik (4 Statusfaelle) inkl. Label/Icon-Mapping
	- Umschalten von "Antworten pruefen" zu "Nochmal versuchen"
	- Feedbackblock mit Ueberschrift und Begruendungstext

## Typische Fehlerbilder

- `ng serve` kann lokal scheitern, auch wenn `npm run build` erfolgreich ist. Fuer Abnahme immer mindestens den Build pruefen.
- Das Initial-Bundle liegt aktuell knapp ueber dem Budget. Das ist derzeit eine Warning, kein Build-Blocker.
- Bei Schritt 2 immer auch Reload testen, damit Persistenz und Pfadwechsel korrekt bleiben.

## Guardrails fuer Aenderungen

- Keine monolithischen Seitenkomponenten; wiederkehrende Muster in bestehende Komponenten integrieren.
- Keine hardcodierten Farben in Komponenten-SCSS; Tokens nutzen.
- Interaktive Schrittlogik bleibt in Angular; laengere Erklaertexte duerfen in public/content gepflegt werden.
- Aenderungen am Lesson-Flow-Verhalten (Footer, letzter Button, Scroll-Logik) nur mit expliziter Produktentscheidung.

## Betriebsregel nach Abschluss

Wenn das Onboarding-Modul inhaltlich/funktional geaendert wird, diese Datei und die Ticketplanung in apps/notizen_todos_apps.md direkt mitpflegen.
