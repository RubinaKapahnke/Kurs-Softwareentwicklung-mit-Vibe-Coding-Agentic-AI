---
applyTo: "apps/onboarding/**"
---

# Onboarding App: Architekturregeln für Copilot

## Ziel des Bereichs

Diese App ist das Kurs-Tool für den gesamten Kurs. Im aktuellen Ausbaustand führt sie bereits aufgenommene Kursteilnehmende voraussetzungsarm, aber in erwachsenem Ton, vom Einstieg über das Modul Onboarding bis zum lokalen Clone des Kurs-Repos und anschliessend in den weiteren Kursfluss.

## Stack (verbindlich)

| Bereich | Vorgabe |
|:---|:---|
| Framework | Angular (Standalone) |
| UI-Library | Angular Material 3 (M3, MDC-based) |
| Sprache | TypeScript Strict |
| Styling | SCSS mit klaren Tokens |
| Daten | Strukturierte, typisierte Models (kein any) |

Schlage keine alternativen Frameworks oder UI-Libraries vor.

## Scope-Regeln

- Plane und implementiere standardmaessig nur den aktuellen MVP-Flow.
- Der aktuelle MVP-Fokus liegt auf dem Modul Onboarding mit hoechstens 6 linearen Lektionen bis zum lokalen Clone.
- Pro Lektion muss ein Erfolgskriterium sichtbar sein.
- Quiz nur als echter Verstaendnis-Check und nur wenn didaktisch noetig.
- Erweiterungen wie Videos, Tracking oder Login nur bei expliziter Freigabe.

## Struktur-Konvention

Bestehende Struktur unter `apps/onboarding/src/app/` als Standard weiterverwenden:

- `components/markdown-view/` für Markdown-Rendering
- `data/onboarding-steps.data.ts` für die Lektionsdefinitionen
- `models/onboarding.models.ts` für Typen
- `services/onboarding-state.service.ts` für lokalen Onboarding-Zustand
- `pages/startseite/` für Landing-Einstieg
- `pages/kursstart/` für Voucher-/Kurszugangslogik
- `pages/onboarding-shell/` für den gerahmten Lektionfluss
- `pages/step-page/` für die eigentlichen Lektionseiten unter `/onboarding/step/:id`
- `pages/zusammenfassung/` für den Abschluss vor dem Kursstart

Lege neue Features standardmaessig innerhalb dieser Struktur an. Führe keine parallele `features/step-01-*`-Struktur ein, solange dafür kein expliziter Umbau beschlossen ist.

## Terminologie

- `Modul` = fachlicher Kursbaustein, z. B. Modul Onboarding.
- `Lektion` = zentrale Lern- und Navigationseinheit im Kurs. Die Markdown-Quelle wie `01-willkommen-im-kurs.md` und der Eintrag im Kurs-Tool bezeichnen dieselbe Einheit.
- `Slide` oder `Seite` = einzelne Ansicht innerhalb des Lesson-Flows.
- Im sichtbaren Text konsequent `Lektion` verwenden; vermeide parallele Mischbegriffe für dieselbe Einheit.

## Komponenten-Governance gegen Code-Monster

- `pages/**` sind Orchestratoren: Route, State-Anbindung, grobe Seitengliederung und Events. Sie sollen keine langen, wiederholten UI-Blöcke oder fachlichen Mini-Flows aufnehmen.
- Wiederkehrende UI-Muster zuerst mit bestehenden Komponenten lösen: `app-choice-card`, `app-callout`, `app-lesson-flow`, `app-markdown-view`, `app-step-tasks`, `app-voucher-gate`.
- Neue Komponenten nur anlegen, wenn mindestens eines gilt:
  - Das Muster wird absehbar an mehreren Stellen genutzt.
  - Ein bestehendes Template/SCSS-File wird sonst deutlich zu gross oder schwer lesbar.
  - Die Komponente hat eine klare fachliche Verantwortung mit eigenen Inputs/Outputs.
- Keine Komponenten für einmalige Kleinst-Markups anlegen. Nutze dafür bestehende Material-Komponenten, CSS-Utilities oder lokale Template-Struktur.
- Wenn unklar ist, ob neue Komponente oder bestehende Wiederverwendung besser ist: erst kurz die Optionen mit Folgen nennen und nach Freigabe fragen.
- Vor größeren App-Erweiterungen kurz prüfen: Welche vorhandene Komponente kann erweitert werden? Welche Daten/Markdown-Inhalte können statt Template-Code genutzt werden?

## UX- und Textregeln

- Schreibe voraussetzungsarm, konkret und in erwachsenem, professionellem Ton.
- Vermeide paternalistische oder infantilisierende Sprache.
- Lernenden-Texte sprechen immer Teilnehmende direkt an, nicht Autor:innen oder Content-Teams.
- Keine didaktischen Meta-Erklärungen im sichtbaren Lerntext: nicht begründen, was für die Content-Erstellung sinnvoll ist, sondern was für die lernende Person jetzt relevant ist.
- Fachbegriffe müssen vor der ersten Nutzung erklärt oder direkt am Einsatzpunkt eingeführt werden.
- Jede relevante Einheit soll kurz klären: Was ist jetzt zu tun? Warum jetzt? Wofuer später?
- Spätestens auf der ersten oder zweiten Slide braucht es einen sichtbaren Arbeitsanlass, eine konkrete Aktion, eine Entscheidung oder ein Artefakt.
- Jeder Lektion enthält:
  - Was ist zu tun?
  - Falls es nicht klappt
  - Woran erkenne ich Erfolg?

## Qualitaetsregeln

- TypeScript Strict ohne any.
- Keine monolithischen Komponenten.
- Keine wachsenden Template-/SCSS-Monolithe: bei wiederholten Blöcken oder schwer scanbaren Dateien frueh extrahieren oder vereinfachen.
- Relevante Typen und Zustandsuebergaenge explizit modellieren.
- Build und Typecheck nach größeren Änderungen ausfuehren.

## Repo-Integration

- Bei neuen Dateien/Foldern README-Projektstruktur synchron halten.
- Das Kurs-Tool mit aktuellem Schwerpunkt Modul Onboarding darf den bestehenden Dashboard-Bereich nicht indirekt destabilisieren.
- Uebergabe in den Kursfluss klar dokumentieren: nach erfolgreichem Modul Onboarding führt das Kurs-Tool weiter in `course/00-course-guides/COURSE_MILESTONES.md` und später in weitere Kursmodule.

## Markdown-Content (Onboarding)

- Erklaertexte für Lektionen dürfen als Markdown-Dateien unter `apps/onboarding/public/content/` gepflegt werden.
- Pro Lektion wird ein optionaler Pfad im Datenmodell verwendet (`markdownSource`).
- Rendering erfolgt über die bestehende Komponente `apps/onboarding/src/app/components/markdown-view/`.
- Markdown-HTML muss vor der Anzeige sanitiziert werden (z. B. DOMPurify), keine ungefilterte Ausgabe.
- Auch bei Markdown-Inhalten bleibt die interaktive Lektionslogik (Tasks, Erfolgskriterium, CTA, Navigation) in Angular-Komponenten.

## Manifest-Sync aus Kursmodul-Lektionen

- Lesson-Flow-Inhalte werden aus `course/01-course-modules/01-.../XX-thema.md` synchronisiert.
- Aufgaben werden optional aus `XX-aufgaben.md` derselben Lektion synchronisiert.
- Eine Lektionsdatei ist die redaktionelle Quelle; der zugehoerige Lektion im Kurs-Tool ist die technische und UI-seitige Fuehrungseinheit.
- Ältere Ordner im Schema `XX-.../lektion-inhalte.md` oder `lektion-XX-.../lektion-inhalte.md` werden weiterhin erkannt.
- `npm run sync-content` in `apps/onboarding` erzeugt/aktualisiert `public/content/step-manifest.json` und die Inhalte unter `public/content/step-XX/`.
- Bei nicht-Account-Choice-Steps hat manifestbasierter Lesson-Flow Vorrang vor statisch hinterlegtem `lessonFlow` in `onboarding-steps.data.ts`.

## Markdown-Konvention für Lesson-Flow

- `##` erzeugt eine neue Lesson-Seite (Slide).
- Ausnahmen ohne eigene Slide: `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`, `## Was ist zu tun`, `## Hilfreiche Links`, `## Übungen zur Lektion`.
- `###` erzeugt einen Abschnitt innerhalb der aktuellen Slide.
- `####` wird als Zwischenüberschrift im Abschnitt gerendert (uppercase).
- Inline-Markdown ist erlaubt: `*kursiv*`, `**fett**`, `***fett-kursiv***`, `[Link](https://...)`.

### Struktur-Sektionen ohne Slide

- `## Was ist zu tun` wird als Aufgabenliste für den Lektion interpretiert (vergleichbar mit Aufgaben aus `XX-aufgaben.md`).
- `## Hilfreiche Links` wird als Ressourcenliste für den Lektion interpretiert.
- `## Übungen zur Lektion` wird als Übungsbereich unterhalb des Lesson-Flows gerendert. Die enthaltenen Übungsschritte sind interaktiv abhakbar; pro Übung kann der Status `erledigt` oder `nicht geschafft` gesetzt werden.
- Beide Sektionen sind für Autoren gedacht und erscheinen nicht als eigene Lesson-Slides im Lesson-Flow.

### Quiz-Pattern in Markdown

- Quiz-Slides werden über `## Quiz: ...` definiert.
- Quiz-Slides sind Verstaendnis-Checks, keine Auflockerungs- oder Dummy-Quizze.
- Pflichtfelder: `Frage:` sowie mindestens zwei Antwortoptionen als `- [ ]` / `- [x]`.
- Mindestens eine Option muss korrekt sein (`- [x]`).
- Offensichtlich alberne oder rein kindlich formulierte Falschantworten sind zu vermeiden.
- Optional: `Hinweis:`, `Mehrfachauswahl: ja|nein`, `Erfolg:`, `Fehler:`.

### Farbfelder über H3-Praefixe

- `### Wichtig:` / `### Hinweis:` -> gelbes Feld
- `### Achtung:` -> rotes Feld
- `### Erfolg:` / `### OK:` / `### Grün:` -> grünes Feld
- `### Blau:` -> blaues Feld
- `### Info:` / `### Tipp:` -> eigener Hinweis-Farbton

Das Präfix wird nicht angezeigt; sichtbar bleibt nur der Text nach dem Doppelpunkt.

## Verbindlicher Component-Contract: Lesson Flow

Die Komponente `app-lesson-flow` gilt als UI- und Verhaltens-Standard für Onboarding-Lektionen mit Lektionen.
Alle Agents müssen diese Regeln beibehalten, solange keine explizite Produktentscheidung etwas anderes festlegt.

### Layout und Navigation

- Die Lesson-Flow-Komponente hat eine feste, viewport-basierte Hoehe mit Ober-/Untergrenze (derzeit: `height: clamp(420px, 58dvh, 680px)`).
- Der Footer mit den Buttons bleibt innerhalb der Komponente am unteren Rand (`.lesson-flow__actions`), niemals als globaler Seiten-Footer.
- Der Inhaltsbereich scrollt nur innerhalb der Komponente (`.lesson-flow__content` / `.lesson-flow__quiz`), Scrollbar darf visuell verborgen sein.
- Der `Weiter`-Button im Lesson-Footer hat dieselbe Breite wie `Zurück` und steht rechts.

### Inhaltliche Struktur

- Lange Inhalte werden nicht in einer einzelnen Folie gequetscht.
- Wenn eine Folie zu lang wird, ist sie in mehrere Slides aufzuteilen.
- Ziel: Lesson-Slides bleiben ohne starkes Scrollen erfassbar; die eigentlichen Aufgaben darunter bleiben in der Lektion sichtbar.

### Verhalten beim letzten Lesson-Button

- Das `finished`-Event der Lesson darf nicht automatisch in die nächste Onboarding-Lektion navigieren.
- Falls unterhalb der Lesson **keine weiteren Lektionsinhalte** folgen, ist der letzte Lesson-Button inaktiv und zeigt `Lektion abgeschlossen`.
- Falls unterhalb der Lesson **weitere Lektionsinhalte** folgen (z. B. Aufgabenblock), führt der letzte Lesson-Button innerhalb derselben Lektion genau dorthin (z. B. Scroll zu `Was ist zu tun?`) und bleibt dafür aktiv.
- Labels auf der letzten Folie müssen dieses Verhalten eindeutig widerspiegeln (z. B. `Lektion abgeschlossen` bei inaktivem Ende oder `Zu den Aufgaben` bei Sprung zum Folgeinhalt; niemals `weiter zu Lektion X`).

### Link-Konvention in Lesson-Texten

- Vorkommen wie `github.com` oder `github.com/new` in Lesson-Texten müssen klickbar sein.
- Plaintext-URLs in `paragraphs` und `orderedItems` werden automatisch verlinkt; dieses Verhalten ist beizubehalten.

### Aenderungsregel

- Änderungen an Hoehe, Footer-Position, Button-Verhalten oder Linkify-Logik nur mit expliziter Freigabe.
- Bei Refactorings muss das sichtbare Verhalten identisch bleiben.


## Styling und Brand

### Farben (KnOot Academy Styleguide)

Verwende ausschliesslich CSS Custom Properties. Keine hardcodierten Hex-Werte in Komponenten.

| Token | Name | Hex | Verwendung |
|:---|:---|:---|:---|
| `--color-primary` | Calypso | `#346995` | Haupt-Buttons, Navigation, Links |
| `--color-primary-dark` | Calypso dunkel | `#264D75` | Hover-Zustand auf Primary |
| `--color-secondary` | Amber | `#FBBE02` | Akzent-Highlights, Call-to-Action |
| `--color-secondary-dark` | Amber dunkel | `#DAA00B` | Hover auf Secondary |
| `--color-accent` | Mojo | `#CA4242` | Wichtige Hinweise, Warn-Zustaende |
| `--color-accent-dark` | Mojo dunkel | `#AC3531` | Hover auf Accent |
| `--color-text` | Mitternacht | `#01203D` | Standardtext, nur auf hellen Hintergruenden |
| `--color-bg` | Ebbe hell | `#EBE8E8` | Seitenhintergrund |
| `--color-surface` | Weiss | `#FFFFFF` | Cards, Panels |

Weitere Sekundaerfarben (nur bei Bedarf): Ziggurat `#BED4E3`, Casper `#A7BECE`, Genoa `#16837F`, Tuscany `#CC5E3B`, Ebbe dunkel `#BCB9B9`.

**Kontrast-Regeln:**
- Weisser Text ist auf allen drei Hauptfarben (Calypso, Amber, Mojo) erlaubt, aber nur wenn Schrift gross und mindestens medium bold ist.
- `--color-text` (#01203D) NIEMALS auf dunklen Varianten der Hauptfarben verwenden (zu wenig Kontrast).

### Typografie

| Schriftart | Verwendung |
|:---|:---|
| **Poppins** | Alle Standardtexte (Body, Überschriften). Titel können in Grossbuchstaben gesetzt werden. |
| **Recoleta** | Nur kurze Untertitel-Akzente (sparsam einsetzen). |

- Fliesstext immer in Poppins Normal.
- Hervorhebungen: **halbfett** (font-weight: 600).
- Keine anderen Schriftarten verwenden.
- Google Fonts-Einbindung in `src/index.html`: Poppins (weights 400, 600, 700) + Recoleta.

### Styling-Regeln

- Alle Token in `src/styles/_tokens.scss` als CSS Custom Properties definieren.
- Kein `!important`, kein Inline-Style.
- Keine hardcodierten Hex-/RGBA-Farben in Komponenten-SCSS; nutze Tokens, `color-mix()` mit Tokens oder bestehende Surface-/Border-Tokens.
- Wiederverwendbare Button-, Card-, Callout-, State- und Layout-Muster zuerst über bestehende Komponenten oder globale `ui-*` Utilities loesen.
- Neue globale Style-Utilities nur anlegen, wenn sie an mehreren Stellen gebraucht werden; sonst lokal und klein halten.
- Direktes Styling von Material-Interna vermeiden; Material über `--mdc-*` und `--mat-*` Variablen anpassen.
- Angular Material Theme auf Basis von `--color-primary` (Calypso) konfigurieren.
### Material Design 3 (M3) – Konventionen

- Verwende ausschliesslich die **M3-Komponenten** aus `@angular/material` (ab v17 standardmaessig MDC-basiert).
- **Kein Legacy-Theming** (kein `mat.define-legacy-theme`, kein `mat-legacy-*`).
- Theme-Setup mit `mat.define-theme()` und M3-Farbschema (nicht M2 `mat.define-light-theme`).
- Mappe `--color-primary` (Calypso `#346995`) als M3 primary source color im Theme.
- Buttons: `mat-button`, `mat-raised-button`, `mat-flat-button` – kein Custom-Button ohne triftigen Grund.
- Cards: `mat-card` mit `mat-card-content`, `mat-card-actions` gemaess M3-Struktur.
- Kein direktes Ueberschreiben von MDC-internen CSS-Klassen (`.mdc-*`); nutze stattdessen M3 Design Tokens (`--mdc-*` oder `--mat-*`).

