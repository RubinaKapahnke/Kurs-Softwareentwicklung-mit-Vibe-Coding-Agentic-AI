---
applyTo: "apps/onboarding/**"
---

# Onboarding App: Architekturregeln fuer Copilot

## Ziel des Bereichs

Diese App fuehrt absolute Anfaenger in einem linearen Ablauf bis zum lokalen Clone des Kurs-Repos.

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

- Plane und implementiere standardmaessig nur den MVP-Flow.
- MVP bedeutet: hoechstens 6 lineare Schritte bis zum lokalen Clone.
- Pro Schritt muss ein Erfolgskriterium sichtbar sein.
- Erweiterungen (Quiz, Videos, Tracking, Login) nur bei expliziter Freigabe.

## Struktur-Konvention

Empfohlene Struktur unter apps/onboarding:

- features/step-01-... bis step-06-...
- models/onboarding.models.ts
- services/onboarding-state.service.ts
- services/onboarding-checks.service.ts
- pages/onboarding-shell/

Jeder Schritt ist eine eigenstaendige, kleine Komponente mit klaren Inputs/Outputs.

## UX- und Textregeln

- Schreibe anfaengerfreundlich und konkret.
- Vermeide vorausgesetztes Fachvokabular ohne kurze Erklaerung.
- Jeder Schritt enthaelt:
  - Was ist zu tun?
  - Falls es nicht klappt
  - Woran erkenne ich Erfolg?

## Qualitaetsregeln

- TypeScript Strict ohne any.
- Keine monolithischen Komponenten.
- Relevante Typen und Zustandsuebergaenge explizit modellieren.
- Build und Typecheck nach groesseren Aenderungen ausfuehren.

## Repo-Integration

- Bei neuen Dateien/Foldern README-Projektstruktur synchron halten.
- Onboarding-App darf den bestehenden Dashboard-Bereich nicht indirekt destabilisieren.
- Uebergabe in den Kursfluss klar dokumentieren (Startpunkt nach MVP).


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
| **Poppins** | Alle Standardtexte (Body, Ueberschriften). Titel koennen in Grossbuchstaben gesetzt werden. |
| **Recoleta** | Nur kurze Untertitel-Akzente (sparsam einsetzen). |

- Fliesstext immer in Poppins Normal.
- Hervorhebungen: **halbfett** (font-weight: 600).
- Keine anderen Schriftarten verwenden.
- Google Fonts-Einbindung in `src/index.html`: Poppins (weights 400, 600, 700) + Recoleta.

### Styling-Regeln

- Alle Token in `src/styles/_tokens.scss` als CSS Custom Properties definieren.
- Kein `!important`, kein Inline-Style.
- Angular Material Theme auf Basis von `--color-primary` (Calypso) konfigurieren.
### Material Design 3 (M3) – Konventionen

- Verwende ausschliesslich die **M3-Komponenten** aus `@angular/material` (ab v17 standardmaessig MDC-basiert).
- **Kein Legacy-Theming** (kein `mat.define-legacy-theme`, kein `mat-legacy-*`).
- Theme-Setup mit `mat.define-theme()` und M3-Farbschema (nicht M2 `mat.define-light-theme`).
- Mappe `--color-primary` (Calypso `#346995`) als M3 primary source color im Theme.
- Buttons: `mat-button`, `mat-raised-button`, `mat-flat-button` – kein Custom-Button ohne triftigen Grund.
- Cards: `mat-card` mit `mat-card-content`, `mat-card-actions` gemaess M3-Struktur.
- Kein direktes Ueberschreiben von MDC-internen CSS-Klassen (`.mdc-*`); nutze stattdessen M3 Design Tokens (`--mdc-*` oder `--mat-*`).