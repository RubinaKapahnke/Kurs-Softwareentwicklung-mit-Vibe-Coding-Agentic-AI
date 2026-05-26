# Kurs-Tool: aktueller Schwerpunkt Modul Onboarding

Diese Datei ist die Arbeitsgrundlage für Pflege, Erweiterung und Abnahme des Kurs-Tools im aktuellen Schwerpunkt Modul Onboarding.

## Zielbild

Das Kurs-Tool soll den gesamten Kurs begleiten. Der aktuelle Ausbauschritt ist fertig, wenn neu aufgenommene Teilnehmende ohne Vorwissen durch das Modul Onboarding bis zur aktiven Mitarbeit im Kurs-Repo gefuehrt werden und danach sicher mit COURSE_MILESTONES.md weiterarbeiten koennen.

## Produkt-Scope (MVP)

- Hoechstens 6 lineare Kernschritte des Moduls Onboarding bis zum lokalen Clone sind als Fuehrungslogik klar erkennbar.
- Der aktuelle Stand nutzt mehr Detailschritte, muss aber für Lernende weiterhin wie ein klarer, sicherer Flow wirken.
- Pro Lektion ist ein Erfolgskriterium sichtbar.
- Nach dem Modul Onboarding ist COURSE_MILESTONES.md der fachliche Einstieg in den weiteren Kursfluss.

## Begriffsklaerung

- `Modul` = fachlicher Kursbaustein.
- `Lektion` = zentrale Lern- und Navigationseinheit im Kurs.
- Die Markdown-Datei im Kursmodul und der Eintrag im Kurs-Tool bezeichnen dieselbe Lektion.
- `Slide` = einzelne Ansicht innerhalb des Lesson-Flows einer Lektion.

Im aktuellen Onboarding-MVP bleibt diese Benennung einheitlich: Wir sprechen durchgaengig von Lektionen.

## ONB-001: Abnahme-Checkliste (PRD zu DoD)

### A. Einstieg und Orientierung

- [ ] Die Startseite bietet genau 3 primaere Handlungsoptionen (Onboarding starten, Kursueberblick, weitere Kurse im Aufbau).
- [ ] Die Sprache bleibt voraussetzungsarm, konkret und erwachsen.
- [ ] Der Hinweis "weitere Kurse im Aufbau" ist sichtbar, aber klar sekundaer.

### B. Lektionslogik und Sicherheit

- [ ] Lektion 1 (Voucher) sperrt alle Folgelektionen bis zur Freischaltung.
- [ ] Lektion 2 fragt Vorerfahrung ab und führt in den passenden Pfad.
- [ ] Bei bestehendem Account ist die Sichtbarkeitswarnung inkl. Pflicht-Checkbox aktiv, bevor die Lektion als erledigt markiert werden kann.
- [ ] Der Fallback zur Standardfuehrung (neuer Account) ist jederzeit erreichbar.

### C. Rueckkehr und Navigation

- [ ] Rueckkehrende können an der letzten offenen Lektion fortsetzen.
- [ ] Freie Lektionauswahl im Shell-Navigator funktioniert.
- [ ] Die Zusammenfassung ermöglicht gezieltes Nacharbeiten offener Lektionen.

### D. Bruecke in den Kursfluss

- [ ] Der Abschluss führt klar zu COURSE_MILESTONES.md und README_UEBUNGEN.md.
- [ ] GitHub-Links und VS-Code-Alternative sind als gleichwertige Wege sichtbar.
- [ ] Lernende können nach dem Abschluss den Unterschied erklären: Kurs-Repo für Orientierung/Fortschritt, eigenes Repo für Umsetzung.

### E. Qualitaet

- [ ] Build laeuft fehlerfrei.
- [ ] Kritische Pfade (Voucher, Lektion-2-Entscheidung, Rueckkehr, Abschluss) sind manuell getestet.
- [ ] Mobile ist nutzbar; bei kritischen Lektionen ist der Desktop-Hinweis sichtbar.

## Manuelle Testfaelle (Minimum)

1. Neue Person ohne Account
- [ ] Start bei Lektion 1, Voucher validieren, neuer Account-Pfad, bis Abschluss.
- [ ] Abschlusslinks in COURSE_MILESTONES.md und README_UEBUNGEN.md geprueft.

2. Person mit bestehendem Account, wenig Repo-Erfahrung
- [ ] Existing-Beginner-Pfad durchlaufen.
- [ ] Pflicht-Checkbox geprueft.

3. Person mit bestehendem Account, erfahren
- [ ] Existing-Experienced-Pfad durchlaufen.
- [ ] Fallback "neuen Account verwenden" pruefen.

4. Reload- und Rueckkehrtest
- [ ] Browser-Reload in Lektion 2 behaelt den korrekten Zustand.
- [ ] Startseite/Kursstart bietet korrektes Fortsetzen.

## Pflegeorte im Code

- Routen: src/app/app.routes.ts
- Lektionsdefinitionen und Inhalte: src/app/data/onboarding-steps.data.ts
- Typen: src/app/models/onboarding.models.ts
- Zustand: src/app/services/onboarding-state.service.ts
- Einstieg: src/app/pages/startseite/
- Kursstart: src/app/pages/kursstart/
- Onboarding-Rahmen: src/app/pages/onboarding-shell/
- Lektionseite: src/app/pages/step-page/
- Abschluss: src/app/pages/zusammenfassung/
- Markdown-Texte: public/content/

## Inhalts-Sync Aus Kursmodul-Lektionen

Die redaktionelle Quelle für Lesson-Flow-Inhalte liegt im Kursmodul unter:

- `course/01-course-modules/01-Onboarding-in-den-Kurs/XX-thema.md`
- optional: `course/01-course-modules/01-Onboarding-in-den-Kurs/XX-aufgaben.md`
- Alternativ werden ältere Ordner im Schema `XX-.../lektion-inhalte.md` oder `lektion-XX-.../lektion-inhalte.md` weiterhin erkannt.

Der Sync erfolgt in `apps/onboarding` mit:

```bash
npm run sync-content
```

Ergebnis:

- `public/content/step-manifest.json` wird aktualisiert.
- Inhalte werden nach `public/content/step-XX/` gespiegelt.

## Markdown-Konvention Für Lesson-Flow

- Jede `##`-Überschrift erzeugt eine neue Lesson-Slide.
- Ausnahmen ohne eigene Slide: `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`, `## Was ist zu tun`, `## Hilfreiche Links`, `## Übungen zur Lektion`.
- `###` erzeugt Abschnitte innerhalb der Slide.
- `####` erzeugt eine Zwischenüberschrift im Abschnitt.
- Inline-Markdown ist erlaubt: `*kursiv*`, `**fett**`, `***fett-kursiv***`, `[Link](https://...)`.
- Bilder können direkt im Markdown eingebunden werden, z. B. `![Beschreibung](../../course/01-course-modules/Assets/m01-l02-gh-01-sign-up-startseite.png)`.
	- Diese relativen Pfade werden beim Sync auf `/content/Assets/...` normalisiert.
	- Quelle für Bilder: `course/01-course-modules/Assets/`.
	- Der Sync spiegelt die Bilder nach `apps/onboarding/public/content/Assets/`.

### Struktur-Sektionen ohne Slide

- `## Was ist zu tun`: Wird als Aufgabenquelle für den Lektion übernommen (falls vorhanden).
- `## Hilfreiche Links`: Wird als Ressourcenliste für den Lektion übernommen (falls vorhanden).
- `## Übungen zur Lektion`: Wird als eigene Übungs-Komponente unterhalb des Lesson-Flows dargestellt. Übungsschritte sind abhakbar, pro Übung kann `erledigt` oder `nicht geschafft` markiert werden.
- Diese Sektionen erscheinen nicht als eigene Slides im Lesson-Flow.

### Quiz-Pattern

Quizze dienen hier als Verstaendnis-Checks. Sie sollen Begriffe, Unterschiede oder Entscheidungen prüfen, nicht auflockern oder mit offensichtlichen Dummy-Antworten arbeiten.

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

### Farbfelder Über H3-Praefixe

- `### Wichtig:` / `### Hinweis:` -> gelb
- `### Achtung:` -> rot
- `### Erfolg:` / `### OK:` / `### Grün:` -> grün
- `### Blau:` -> blau
- `### Info:` / `### Tipp:` -> eigener Hinweis-Farbton

Hinweis: Das Präfix wird nicht angezeigt. Sichtbar bleibt nur der Text nach `:`.

## Build und lokale Prüfung

Im Ordner apps/onboarding:

```bash
npm install
npm run build
npm run test
```

Optional für lokale UI-Pruefung:

```bash
npx ng serve
```

## Aktuelles Mindest-Testset

- `src/app/services/onboarding-state.service.spec.ts`
	- Persistenz für Lektion 2
	- Reset von Lektion-3-Fortschritt bei Pfadwechsel
	- Reset der Sichtbarkeitsbestaetigung
- `src/app/guards/step-access.guard.spec.ts`
	- Redirect bei ungueltigen Lektionen
	- Schutz aller Folgeschritte ohne Voucher
	- Freigabe nach Voucher-Validierung
- `src/app/pages/step-page/step-page.component.spec.ts`
	- Sichtbarer Folgeinhalte-Hinweis unterhalb Lesson-Flow
- `src/app/components/lesson-flow/lesson-flow.component.spec.ts`
	- Quiz-Zustandslogik (4 Statusfaelle) inkl. Label/Icon-Mapping
	- Umschalten von "Antworten prüfen" zu "Nochmal versuchen"
	- Feedbackblock mit Überschrift und Begruendungstext

## Typische Fehlerbilder

- `ng serve` kann lokal scheitern, auch wenn `npm run build` erfolgreich ist. Für Abnahme immer mindestens den Build pruefen.
- Das Initial-Bundle liegt aktuell knapp über dem Budget. Das ist derzeit eine Warning, kein Build-Blocker.
- Bei Lektion 2 immer auch Reload testen, damit Persistenz und Pfadwechsel korrekt bleiben.

## Guardrails für Änderungen

- Keine monolithischen Seitenkomponenten; wiederkehrende Muster in bestehende Komponenten integrieren.
- Keine hardcodierten Farben in Komponenten-SCSS; Tokens nutzen.
- Interaktive Lektionslogik bleibt in Angular; laengere Erklaertexte dürfen in public/content gepflegt werden.
- Fachbegriffe in Onboarding-Texten nur erklärt oder direkt erklaerbar verwenden.
- Allgemeine Tipps und wiederverwendbare Hilfen gehören langfristig in zentrale FAQ-, Glossar- oder Bedienungshilfen-Dateien statt in jede Pflichtlektion.
- Änderungen am Lesson-Flow-Verhalten (Footer, letzter Button, Scroll-Logik) nur mit expliziter Produktentscheidung.

## Betriebsregel nach Abschluss

Wenn das Modul Onboarding oder seine Einbettung in das Kurs-Tool inhaltlich/funktional geändert wird, diese Datei und die Ticketplanung in apps/notizen_todos_apps.md direkt mitpflegen.


