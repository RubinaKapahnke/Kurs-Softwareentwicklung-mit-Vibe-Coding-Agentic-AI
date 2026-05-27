# Design System — Learning Platform

Technische Referenz fuer alle Style-Entscheidungen, Tokens und Konventionen.
Entschieden und umgesetzt: 27.05.2026.

Verwandte Dokumente:
- Entscheidungs-Kontext: [`course/99-course-development/learning-platform-content-konventionen-planung.md`](../../course/99-course-development/learning-platform-content-konventionen-planung.md)
- Entwicklungsstand und DoD: [`README.md`](./README.md)

---

## Dateistruktur

```
src/
├── index.html            — Font-Imports (<link>, kein @import)
├── styles.scss           — Einstieg: @use der 5 Partials
└── styles/
    ├── _tokens.scss      — ALLE CSS Custom Properties (Single Source of Truth)
    ├── _reset.scss       — Moderner, minimaler Reset + :focus-visible
    ├── _typography.scss  — Poppins Body, Recoleta Display, Type-Scale, Utilities
    ├── _layout.scss      — Page Shell, Back-Link, State Messages, Layered BG
    └── _code.scss        — Inline Code (brand-getoent) + Dark Code Blocks
```

**Regel:** Jeder neue Farbwert, Radius, Abstand oder Shadow wird zuerst als Token in `_tokens.scss` angelegt. Komponenten-SCSS referenziert ausschliesslich `var(--*)`.

---

## Schriften

| Rolle | Familie | Gewicht | Einsatz |
| :--- | :--- | :--- | :--- |
| Body / UI | Poppins | 400, 500, 600, 700, 800 | Ueberall — Standardschrift |
| Display-Akzent | Recoleta | 400 | Nur `.accent-subtitle` / `.recoleta` — nie auf h-Tags |
| Code | JetBrains Mono | 400, 500 | `<code>`, `<pre>`, `<kbd>` |

**Token:**
```css
--font-body:    'Poppins', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Recoleta', Georgia, 'Times New Roman', serif;
--font-mono:    'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
```

**Wichtig:** `--font-display` zeigt auf Recoleta (Serif). Komponenten, die eine starke UI-Schrift wollen, verwenden `--font-body` mit `font-weight: 700` oder `800`.

---

## Typografie-Skala

Body-Basis: **14 px** (0.875 rem) — UI-first, Poppins ist optisch grosszuegig genug.

| Token | Wert | px | Typischer Einsatz |
| :--- | :--- | :--- | :--- |
| `--text-2xs` | 0.625 rem | 10 px | Badges, Tags |
| `--text-xs` | 0.6875 rem | 11 px | — |
| `--text-sm` | 0.75 rem | 12 px | `.eyebrow`, Meta, Tabellen |
| `--text-base` | 0.875 rem | **14 px** | Body-Standard |
| `--text-md` | 0.9375 rem | 15 px | `.lead` (Einleitungstexte) |
| `--text-lg` | 1 rem | 16 px | h4 |
| `--text-xl` | 1.125 rem | 18 px | h3 |
| `--text-2xl` | 1.375 rem | 22 px | h2 (min) |
| `--text-3xl` | 1.75 rem | 28 px | h1 (min), h2 (max via clamp) |
| `--text-4xl` | 2.25 rem | 36 px | h1 (max via clamp) |
| `--text-5xl` | 3.0 rem | 48 px | Display-Geste (selten) |

### Heading-Hierarchie

```
h1  800 weight · −0.03 em  · clamp(28 px → 36 px)
h2  700 weight · −0.025 em · clamp(22 px → 28 px)
h3  700 weight · −0.02 em  · 18 px
h4  600 weight · −0.015 em · 16 px
h5/6 600 weight · −0.015 em · 14 px
```

Letter-Spacing-Tokens: `--tracking-h1` bis `--tracking-h4`, `--tracking-caps` (0.08 em fuer `.eyebrow`).

---

## Farbpalette

### Primitive (nicht direkt in Komponenten verwenden)

```css
--_brand-50  … --_brand-900   /* Petrol/Teal — Primärfarbe */
--_amber-50  … --_amber-600   /* Amber/Gold  — Akzentfarbe */
--_neutral-0 … --_neutral-900 /* Warmgraue Neutrals */
--_red-700                     /* Fehlerstatus */
--_green-800                   /* Erfolgsstatus */
```

### Semantische Tokens (in Komponenten verwenden)

**Brand:**
```css
--brand-50  … --brand-900   /* öffentliche Aliase auf _brand-* */
```

**Hintergründe — Layered System:**
```css
--bg-base:          #eaf2f5   /* App-BG — leicht brand-getoent */
--bg-surface:       #ffffff   /* Card / Panel */
--bg-surface-muted: #f4f8fa   /* Table-Header, Code-Inline-BG */
```

**Text:**
```css
--text-strong:  #0f2330   /* Headlines */
--text-body:    #2e4050   /* Fliesstext */
--text-muted:   #5a7080   /* Meta, Labels */
--text-subtle:  #8a9fab   /* Disabled, Platzhalter */
```

**Borders:**
```css
--line-soft:   color-mix(in srgb, var(--brand-600) 14%, transparent)
--line-strong: color-mix(in srgb, var(--brand-600) 30%, transparent)
--line-focus:  color-mix(in srgb, var(--brand-600) 44%, transparent)
```

**Status:**
```css
--accent-amber: #b26c00
--accent-red:   #a2342a
--ok-green:     #116149
```

**Code (Dark Block):**
```css
--code-bg:           #17242b   /* Dunkler Block-Hintergrund */
--code-color:        #e8f0f4   /* Heller Text im Block */
--code-inline-bg:    var(--brand-50)
--code-inline-color: var(--brand-800)
```

---

## Elevation / Shadows

Brand-getoente Schatten — harmonieren mit der Primärfarbe statt neutralem Grau.

```css
--shadow-soft:   /* sehr dezent — App-Hintergrundebene */
--shadow-card:   /* Standard-Card-Elevation */
--shadow-strong: /* modaler / wichtiger Content */
--shadow-focus:  /* Focus-Ring (3 px ring) */
```

### Elevation-Ebenen

```
Ebene 0: body (--bg-base #eaf2f5 + Radialgradienten)
Ebene 1: Cards / Panels (--bg-surface #ffffff + --shadow-card)
Ebene 2: Overlays / Modals (--shadow-strong)
```

---

## Border Radii

```css
--radius-sm:   8 px    /* Buttons, Tags, kleine Elemente */
--radius-md:  12 px    /* Mittlere Karten */
--radius-lg:  16 px    /* Standard-Karten */
--radius-xl:  22 px    /* Hero-Bereiche, grosse Karten */
--radius-pill: 999 px  /* Pill-Buttons, Badges */
```

---

## Spacing

```css
--space-1:   4 px    --space-6:  24 px
--space-2:   8 px    --space-8:  32 px
--space-3:  12 px    --space-10: 40 px
--space-4:  16 px    --space-12: 48 px
--space-5:  20 px    --space-16: 64 px
```

---

## Utility-Klassen

| Klasse | Bedeutung |
| :--- | :--- |
| `.eyebrow` | Uppercase-Label ueber Headlines (12 px, 700, `--tracking-caps`) |
| `.lead` | Lead-Paragraph (15 px, 400, `--leading-relaxed`) |
| `.text-meta` | Meta-Infos (12 px, 500, `--text-muted`) |
| `.text-muted` | Farb-Utility: `--text-muted` |
| `.text-subtle` | Farb-Utility: `--text-subtle` |
| `.text-strong` | Farb-Utility: `--text-strong` |
| `.text-brand` | Farb-Utility: `--brand-600` |
| `.accent-subtitle` | Recoleta, 400 — sparsam fuer emotionale Akzente |
| `.accent-subtitle--lg` | Recoleta, 400, `--text-2xl` — groessere Variante |
| `.surface` | Basis-Surface: white BG + border + `--shadow-card` |
| `.page-shell` | Zentrierter Layout-Container, max 1080 px |
| `.back-link` | Zurueck-Navigation als Button oder Link |
| `.state` | Statusmeldung (Loading / Info) |
| `.state-error` | Statusmeldung (Fehler) |

---

## Regeln fuer Komponenten-SCSS

1. **Keine Hex-Werte** direkt in Komponenten-SCSS. Immer `var(--*)`.
2. **Keine `rgba(r, g, b, a)`** — stattdessen `color-mix(in srgb, var(--token) X%, transparent)`.
3. **`#ffffff`** darf als `white` stehen, wenn es semantisch "weiss auf dunklem Grund" bedeutet (z. B. Button-Text auf `--brand-700`).
4. **`--font-display`** = Recoleta. Fuer starke UI-Schrift `--font-body` mit `font-weight: 700/800`.
5. **Neue Farbwerte** → zuerst pruefen ob ein bestehender Token passt. Wenn nicht, in `_tokens.scss` ergaenzen.
6. **Margin auf h-Tags** setzen Komponenten selbst — `_typography.scss` setzt nur `margin: 0` als Basis.

---

## Dark Mode (geplant)

Die Token-Architektur ist vorbereitet: Primitive Werte (`--_brand-*`, `--_neutral-*`) sind von den semantischen Tokens getrennt. Ein zukuenftiger Dark Mode benoetigt nur einen Block in `_tokens.scss`:

```scss
@media (prefers-color-scheme: dark) {
  :root {
    --bg-base:    var(--_brand-900);
    --bg-surface: var(--_brand-800);
    /* ... */
  }
}
```

Kein Komponenten-SCSS muss dafuer veraendert werden.
