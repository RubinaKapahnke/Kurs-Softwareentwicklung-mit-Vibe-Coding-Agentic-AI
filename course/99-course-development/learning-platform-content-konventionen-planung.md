# Learning Platform: Content-Konventionen und Komponentenplanung

Dieses Dokument sammelt die geplanten Konventionen fuer die Learning Platform. Es dient als Entscheidungsgrundlage, bevor die naechsten Komponenten gebaut oder bestehende Komponenten groesser umgebaut werden.

## Zielbild

Die Learning Platform soll Inhalte aus Markdown-Dateien im Kurs-Repository anzeigen. Angular-Komponenten stellen Struktur, Navigation, Interaktion und Fortschritt bereit; der eigentliche Lerncontent liegt in `course/`.

Verwandte Planungsquellen:

- [level-system-prototyp.md](./level-system-prototyp.md) beschreibt die Grundlage fuer Level, Achievements und Lernpfade.
- [rollen_storytelling.md](./rollen_storytelling.md) beschreibt Mika als Learner-Persona und den Storytelling-Kontext fuer Level/Achievements.
- [apps/learning-platform/README.md](../../apps/learning-platform/README.md) dokumentiert die technische Definition of Done und den aktuellen Entwicklungsstand.
- [apps/README_APPS.md](../../apps/README_APPS.md) ist der App-uebergreifende Einstiegspunkt.

Grundsatz:

- `course/**/*.md` ist die redaktionelle Quelle.
- `apps/learning-platform/public/content/` ist ein generiertes Auslieferungsziel.
- Frontmatter steuert, wie eine Markdown-Datei in der App interpretiert wird.
- Frontmatter ist in der App nie sichtbar.
- Markdown-Dateien muessen auch direkt im Repository sinnvoll lesbar bleiben, z. B. auf GitHub.
- Angular-Komponenten enthalten keine fachlichen Lerntexte.

Frontmatter bedeutet: ein Metadatenblock am Anfang einer Markdown-Datei, der von der App gelesen wird, aber nicht als sichtbarer Lerninhalt gerendert wird.

Beispiel:

```markdown
---
title: Markdown Grundlagen
contentType: lesson
renderAs: lesson-flow
---

# Markdown Grundlagen

## Warum Markdown?

Markdown hilft dir, Texte mit einfacher Syntax zu strukturieren.
```

## Feste Namen fuer App-Elemente

Diese Namen sollen im Code, in Dokumentation und in der Planung konsistent verwendet werden.

| Name | Bedeutung |
| :--- | :--- |
| `CourseShell` | Aeussere App-Struktur mit Seitennavigation, Inhaltsnavigation und Hauptbereich |
| `SideNavigation` | Aufklappbares Seitenmenue fuer Hauptnavigation |
| `ContentNavigation` | Linker Inhaltsbaum fuer Kurse, Module, Steps und Library-Bereiche |
| `ModuleOverview` | Uebersicht eines Moduls mit Steps und Fortschritt |
| `StepPage` | Routing-Seite fuer einen konkreten Step |
| `StepHeader` | Kopfbereich eines Steps mit Titel, Kontext und Hauptstatus |
| `StepRail` | Fortschritts- und Navigationsleiste mit Step-Markern |
| `StepMarker` | Einzelner Marker in der StepRail, bisher informell "Step-Bubble" |
| `StepContentMap` | Kompakte Anzeige, welche Inhaltstypen in einem Step enthalten sind |
| `LessonFlow` | Gefuehrte Lektionsansicht mit Slides |
| `LessonSlide` | Eine einzelne Ansicht innerhalb des LessonFlow |
| `SlideScrollHint` | Hinweis, dass innerhalb einer Slide noch Inhalt unterhalb sichtbar ist |
| `TaskPanel` | Aufgabenbereich zu einer Lektion oder Slide |
| `TodoOverview` | Uebersicht ueber offene und erledigte Lektionen, Aufgaben und Todos |
| `LibraryPreview` | Rechte Vorschau fuer Course-Library-Artikel innerhalb eines Steps |
| `LibraryPage` | Vollansicht der Course Library |
| `MarkdownArticle` | Gerenderte Markdown-Datei als Artikelansicht |
| `KnowledgeCheck` | Komponente zur Vorabfrage vorhandenen Wissens vor einer Lektion |
| `AdaptiveContentToggle` | Schalter zum Einblenden ausgeblendeter Inhalte im LessonFlow |
| `AchievementPanel` | Anzeige von Achievements und Level-Fortschritt |
| `MediaBlock` | Einheit fuer Bilder, Videos und andere Medien innerhalb einer Slide |

## Komponenten-Zielstruktur

```text
CourseShell
├── SideNavigation
│   ├── MainNavigation
│   └── ContentNavigation
├── ModuleOverview
├── StepPage
│   ├── StepHeader
│   ├── StepRail
│   │   └── StepMarker
│   ├── KnowledgeCheck
│   ├── LessonFlow
│   │   ├── LessonSlide
│   │   ├── SlideScrollHint
│   │   └── MediaBlock
│   ├── TaskPanel
│   ├── LibraryPreview
│   ├── TodoOverview
│   └── StepNavigation
└── LibraryPage
    ├── ContentNavigation
    └── MarkdownArticle
```

## Markdown-Interpretation: Entscheidungsfragen

Die folgenden Fragen sollten einmal entschieden werden. Die empfohlene Option ist jeweils als Vorschlag markiert.

## Entscheidungsstand

Diese Entscheidungen sind aus der zweiten Ausarbeitungsrunde gesetzt. Sie gelten als Arbeitsgrundlage fuer die naechste technische Umsetzung.

| Nr. | Thema | Entscheidung | Hinweis |
| :--- | :--- | :--- | :--- |
| 1 | Frontmatter-Pflichtfelder | Standard: `title`, `contentType`, `renderAs`, `summary`, `sourceLayer` | Pflichtfelder fuer app-gerenderte Markdown-Dateien |
| 2 | Slide-Regel | Jede `##`-Ueberschrift wird eine `LessonSlide` | Sicherer Uebergang zur bestehenden Onboarding-Logik; spaeter optional konfigurierbar |
| 3 | Slide-Metadaten | Keine Slide-Metadaten in v1 | Slides bleiben rein ueber Ueberschriften und Inhalt lesbar |
| 4 | Direktiven im Markdown | Direktiven fuer Medien, Aufgaben, Callouts, KnowledgeCheck und Layout erlaubt | Muss GitHub-lesbar bleiben |
| 5 | Aufgaben-Zuordnung | Dateinamen-Konvention und Frontmatter sind erlaubt | Sync normalisiert beide Varianten |
| 6 | TaskPanel-Verhalten | Aufgaben erscheinen unterhalb des LessonFlow, sobald die passende Slide erreicht wurde | Animiertes Aufklappen ist Zielverhalten |
| 7 | Lesestatus einer Slide | Gelesen, wenn bis ans Ende der Slide gescrollt wurde | Grundlage fuer Weiter-Button und Fortschritt |
| 8 | Freie Navigation | Ueberspringen ist erlaubt; ungelesene Slides bleiben offen markiert | Keine kuenstlichen Navigationssperren |
| 9 | StepMarker | Nummer, Kurzname, Inhaltstyp-Icons und offener Todo-Zaehler | Mobile darf kompakter darstellen |
| 10 | Minimierte StepRail | Kompakter Button mit Fortschritt, oeffnet Overlay | Desktop kann zusaetzlich Markerleiste zeigen |
| 11 | SideNavigation | Hauptnavigation plus aufklappbarer Inhaltsbaum | ContentNavigation ist Teil oder Subbereich der SideNavigation |
| 12 | ContentNavigation-Tiefe | Kurs -> Modul -> Step -> Slides/Aufgaben | Tiefe Ebenen einklappbar halten |
| 13 | LibraryPreview | Artikel anzeigen, schliessen, "in Course Library oeffnen" | Verlauf und interne Navigation spaeter moeglich |
| 14 | Bildlayout | Direktive direkt vor dem Bild | Layout ist blockbezogen |
| 15 | Video-Einbettung | Direktive vor Link plus Ablage im Repo | Videos sollen repo-nah referenzierbar bleiben |
| 16 | KnowledgeCheck | Vor jeder Lektion, wenn Frontmatter `knowledgeCheck: required` setzt | Lektion entscheidet selbst |
| 17 | Adaptive Inhalte | Eingeklappt an urspruenglicher Stelle | Inhalte verschwinden nicht |
| 18 | Achievements | In Markdown-Dateien mit Frontmatter | Content bleibt in `course/` |
| 19 | Level-System | Aufbauend auf `level-system-prototyp.md`, erreichten Meilensteinen, Achievements und Lernpfaden | Muss pfadabhaengige Level/Achievements koennen |
| 20 | Design-System | Eigenes Dokument unter `apps/learning-platform/DESIGN_SYSTEM.md` — umgesetzt 27.05.2026 | Technische Referenz fuer Tokens, Typografie und Varianten |

## Design-System-Entscheidungen (27.05.2026)

Diese Entscheidungen wurden in einer dedizierten Style-Session getroffen und sind umgesetzt.
Technische Details und alle Token-Werte: [`apps/learning-platform/DESIGN_SYSTEM.md`](../../apps/learning-platform/DESIGN_SYSTEM.md).

| Thema | Entscheidung | Begruendung |
| :--- | :--- | :--- |
| Schrift Body/UI | Poppins 14 px | Kompakt, UI-first; Poppins ist optisch grosszuegig genug bei 14 px |
| Schrift Display | Recoleta — nur `.accent-subtitle` | Serif-Akzent sehr sparsam; nie auf h-Tags, nur explizite Klasse |
| Schrift Code | JetBrains Mono | Standard fuer Entwickler-Kontext |
| Heading h1 | 800 weight, −0.03 em tracking | Starke Hierarchie-Geste oben |
| Heading h2/h3 | 700 weight, −0.025/−0.02 em | Abgestuft in Gewicht und Tracking |
| Heading h4 | 600 weight, −0.015 em | Zieht sich zurueck, stoert Fliesstext nicht |
| Primarfarbe | Petrol/Teal (#26657B) | Orientierung an Onboarding-Palette, aber eigenstaendige Tokens |
| Hintergrund | Layered: `#eaf2f5` (App-BG), weisse Cards | Cards stechen durch Elevation hervor |
| Elevation | Brand-getoente Schatten via `color-mix()` | Kein neutrales Grau — Schatten harmonieren mit Primärfarbe |
| Code-Blocks | Dark (#17242b) mit hellem Text | VS-Code-Aestehtik, hoher Kontrast fuer Lesbarkeit |
| Dark Mode | Nur Light Mode; Token-Primitives (`--_brand-*`) sind isoliert | Kann spaeter per `@media` in `_tokens.scss` ergaenzt werden |
| Hardcoded Werte | Null — alle Werte in `--_*` Primitives oder semantischen Tokens | Einzige Quelle ist `src/styles/_tokens.scss` |

### Uebergangsentscheidungen

- Die Slide-Regel bleibt vorerst kompatibel zur Onboarding-App: `##` erzeugt Slides.
- Wenn die Learning Platform spaeter vollstaendig von der Onboarding-App geloest ist, kann die Slide-Regel ueber Frontmatter konfigurierbar werden, z. B. `slideHeadingLevel: 2`.
- Die `LibraryPreview` startet bewusst schlank. Verlauf, interne Navigation und erweiterte Suche sind spaetere Ausbaustufen.
- Aufgaben duerfen vorerst ueber Dateinamen-Konvention oder Frontmatter zugeordnet werden. Langfristig sollte Frontmatter die verlaesslichere Variante werden.

### 1. Wie heisst das zentrale Frontmatter-Feld fuer die Inhaltsart?

A. `contentType`  
Empfehlung. Klarer Begriff fuer die fachliche Art der Datei, z. B. `lesson`, `article`, `task`, `library`.

B. `type`  
Kuerzer, aber unspezifischer. Kann spaeter mit UI-Typen, Dateitypen oder Manifest-Typen kollidieren.

C. `kind`  
Technisch brauchbar, aber fuer Content-Erstellende weniger selbsterklaerend.

### 2. Wie heisst das Frontmatter-Feld fuer die Darstellung?

A. `renderAs`  
Empfehlung. Sagt direkt, welche Darstellung die App verwenden soll.

B. `component`  
Stark technisch. Bindet Content-Dateien zu eng an konkrete Angular-Komponentennamen.

C. `view`  
Kurz, aber weniger eindeutig als `renderAs`.

### 3. Welche `contentType`-Werte brauchen wir zuerst?

A. `lesson`, `article`, `task`, `library`  
Empfehlung. Deckt Kurslektionen, normale Artikel, Aufgaben und Library-Inhalte direkt ab.

B. `lesson`, `article`  
Minimaler Start, aber Aufgabenlogik bleibt dann noch unklar.

C. `lesson`, `exercise`, `reference`, `guide`  
Praeziser, aber frueh mehr Begriffe.

### 4. Welche `renderAs`-Werte brauchen wir zuerst?

A. `lesson-flow`, `markdown-article`, `task-panel`  
Empfehlung. Deckt die aktuellen Kernfaelle ab.

B. `flow`, `article`, `tasks`  
Kuerzer, aber weniger sprechend.

C. `component:lesson-flow`, `component:article`, `component:tasks`  
Technischer und schwerer fuer reine Markdown-Nutzung.

### 5. Welche Ueberschrift erzeugt eine Slide im LessonFlow?

A. Jede `##`-Ueberschrift erzeugt eine `LessonSlide`.  
Empfehlung. Gut lesbar in GitHub und kompatibel mit bestehender Onboarding-Logik.

B. Jede `---`-Trennlinie erzeugt eine `LessonSlide`.  
Markdown bleibt lesbar, aber Ueberschriften allein strukturieren dann nicht mehr eindeutig.

C. Spezielle Marker wie `<!-- slide -->`.  
Sehr eindeutig fuer Parser, aber schlechter lesbar fuer Menschen.

### 6. Wie werden Artikel innerhalb eines Steps eingebunden?

A. Ueber Frontmatter plus normalen Markdown-Link im Lektionsinhalt.  
Empfehlung. Beispiel: ein Link zur Course Library oeffnet die `LibraryPreview`, mit Option "in Course Library oeffnen".

B. Ueber eigene Manifest-Eintraege pro Artikel.  
Strenger, aber mehr Pflegeaufwand.

C. Ueber spezielle Markdown-Kommandos wie `/article pfad.md`.  
Explizit, aber in GitHub weniger natuerlich lesbar.

### 7. Wie werden Aufgaben einer Lektion gesteuert?

A. Aufgaben stehen in eigener Markdown-Datei und werden ueber Manifest oder Frontmatter mit der Lektion verbunden.  
Stabil und uebersichtlich.

B. Aufgaben stehen in einem Abschnitt `## Was ist zu tun` innerhalb der Lektionsdatei.  
Gut fuer kleine Lektionen.

C. Beides ist erlaubt, der Sync normalisiert beides zu `TaskPanel`.  
Empfehlung. Flexibel fuer bestehende Inhalte und kuenftige Lektionen.

### 8. Wann erscheint das TaskPanel?

A. Direkt unter der Lektion, sobald die Seite geladen ist.  
Einfach, aber weniger gefuehrt.

B. Erst wenn die zugehoerige Slide im LessonFlow erreicht wurde.  
Empfehlung. Passt zur gewuenschten gefuehrten Erfahrung.

C. Erst wenn die Lektion als erledigt markiert wurde.  
Zu starke kuenstliche Grenze.

### 9. Wie sollen Library-Links im LessonFlow funktionieren?

A. Klick oeffnet rechts die `LibraryPreview`; darin gibt es die Option "in Course Library oeffnen".  
Empfehlung.

B. Klick navigiert direkt zur `LibraryPage`.  
Einfach, reisst Lernende aber aus dem Flow.

C. Klick oeffnet neuen Browser-Tab.  
Technisch leicht, aber schlechter integriertes Lernerlebnis.

### 10. Wie sollen Inhalte ausgeblendet werden, wenn der KnowledgeCheck vorhandenes Wissen erkennt?

A. Inhalte bleiben im Flow vorhanden, sind aber eingeklappt und koennen aktiv eingeblendet werden.  
Empfehlung. Keine Inhalte verschwinden vollstaendig.

B. Inhalte werden aus dem Flow entfernt.  
Kuerzer, aber schlechter nachvollziehbar.

C. Inhalte bleiben sichtbar, werden nur optisch als optional markiert.  
Sicher, aber weniger adaptive Wirkung.

### 11. Wie werden Bilder im LessonFlow gesteuert?

A. Ueber Frontmatter pro Datei plus optionale Markdown-kompatible Bildsyntax.  
Schwierig, weil einzelne Bilder eigene Metadaten brauchen.

B. Ueber einfache HTML-Kommentare direkt vor dem Bild.  
In der App unsichtbar und in GitHub stoerend, aber technisch parsebar.

C. Ueber kurze, lesbare Direktiven in Markdown, die als Text noch verstaendlich bleiben.  
Empfehlung pruefen. Beispiel: `Bildlayout: links, 40 Prozent Breite` direkt vor dem Bild.

### 12. Wie werden Videos eingebunden?

A. Normale Markdown-Links werden als eingebettete Videos interpretiert, wenn `media: video` gesetzt ist.  
Moeglich, aber indirekt.

B. Frontmatter oder Direktive pro Video-Block steuert Anbieter, URL und Anzeige.  
Empfehlung.

C. Videos werden nur als externe Links angezeigt.  
Einfacher Start, aber nicht das Zielbild.

### 13. Wie frei darf die Navigation im LessonFlow sein?

A. Komplett frei, alle Slides sind jederzeit anklickbar.  
Passt zur gewuenschten Freiheit, braucht aber gute Lesestatus-Anzeige.

B. Weiter erst nach Scroll-Ende und Interaktion.  
Zu restriktiv fuer das Ziel.

C. Frei navigierbar, aber mit klarem Status "gelesen", "teilweise gelesen", "offen".  
Empfehlung.

### 14. Wie soll der Weiter-Button erscheinen?

A. Immer sichtbar.  
Einfach, aber es ist unklar, ob unterhalb noch Inhalt steht.

B. Erst am Ende der Slide sichtbar.  
Empfehlung. Erfuellt die Anforderung ohne deaktivierte Buttons.

C. Immer sichtbar, aber mit Scroll-Hinweis.  
Alternative, falls B technisch zu stark springt.

### 15. Wie wird die StepRail reduziert?

A. Manuell minimierbar durch Button.  
Einfach und kontrollierbar.

B. Automatisch minimiert beim Lesen.  
Kann irritieren.

C. Manuell minimierbar plus automatische Kompaktansicht bei kleinen Viewports.  
Empfehlung.

### 16. Wie werden Achievements und Level definiert?

A. Direkt in Angular-Code.  
Nicht passend, weil Content die Wahrheit bleiben soll.

B. In zentralen Markdown-Dateien mit Frontmatter.  
Lesbar, aber fuer Logik eventuell schwerer.

C. In JSON/YAML unter `course/`, mit Links auf Markdown-Quellen.  
Empfehlung pruefen. Content bleibt in `course/`, Logikdaten bleiben strukturiert.

### 17. Wo werden Style-Entscheidungen festgelegt?

A. Direkt in Komponenten-SCSS.  
Schnell, aber unkoordiniert.

B. In zentralen Design Tokens plus Komponentenvarianten.  
Empfehlung. Farben, Typografie, Abstaende und Zustandsfarben werden zentral festgelegt.

C. Primaer ueber Angular Material Defaults.  
Gut als Basis, aber nicht ausreichend fuer Kursidentitaet.

## Geplante Frontmatter-Konvention

## Content-Vertrag v1

Der Content-Vertrag v1 ist der verbindliche Startpunkt fuer neue app-gerenderte Markdown-Dateien. Bestehende Dateien ohne Frontmatter duerfen in einer Uebergangsphase weiter synchronisiert werden; der Sync markiert sie im Manifest als `legacy-derived` und erzeugt Metadaten aus Dateiname und erster `#`-Ueberschrift.

Pflicht-Frontmatter:

- `title`
- `contentType`
- `renderAs`
- `summary`
- `sourceLayer`

Erlaubte `contentType`-Werte in v1:

| Wert | Bedeutung |
| :--- | :--- |
| `lesson` | Lektionsinhalt fuer einen gefuehrten Step |
| `article` | Erklaerartikel, besonders in der Course Library |
| `task` | Aufgaben- oder Uebungsinhalt |
| `library` | Uebersichts- oder Sammlungsinhalt der Bibliothek |

Erlaubte `renderAs`-Werte in v1:

| Wert | Bedeutung |
| :--- | :--- |
| `lesson-flow` | Gefuehrte Lektionsansicht; jede `##`-Ueberschrift erzeugt eine `LessonSlide` |
| `markdown-article` | Normaler Markdown-Artikel ohne LessonFlow |
| `task-panel` | Aufgabenbereich, der spaeter im `TaskPanel` angezeigt wird |

Erlaubte `sourceLayer`-Werte in v1:

| Wert | Bedeutung |
| :--- | :--- |
| `course-module` | Kursspezifischer Modul- oder Lektionsinhalt aus `course/01-course-modules/` |
| `course-library` | Allgemeiner Erklaerinhalt aus `course/03-course-library/` |
| `course-guide` | Kursinterne Orientierung aus `course/00-course-guides/` |
| `course-exercise` | Zentrale Uebung aus `course/02-course-exercises/` |

Slide-Regel v1:

- Wenn `renderAs: lesson-flow` gesetzt ist, erzeugt jede `##`-Ueberschrift eine `LessonSlide`.
- Die `##`-Regel bleibt bewusst kompatibel zur Onboarding-App.
- Slide-Metadaten werden in v1 nicht im Markdown gepflegt; der Sync erzeugt Slide-IDs, Titel, Anker und Startzeilen automatisch.
- Abschnitte vor der ersten `##` bleiben Einleitung des Dokuments und werden noch keiner Slide zugeordnet.

Beispiel fuer neue app-gerenderte Markdown-Dateien:

```yaml
---
title: Markdown Grundlagen
contentType: lesson
renderAs: lesson-flow
sourceLayer: course-module
summary: Kurze Beschreibung fuer Navigation und Vorschau.
estimatedMinutes: 20
tags:
  - markdown
  - dokumentation
libraryPreview: true
knowledgeCheck: optional
---
```

Pflichtfelder:

- `title`
- `contentType`
- `renderAs`
- `summary`
- `sourceLayer`

Optionale Felder:

| Feld | Zweck | Sichtbar in App? |
| :--- | :--- | :--- |
| `estimatedMinutes` | Zeitangabe fuer Orientierung | Optional |
| `tags` | Filter, Suche, Empfehlungen | Optional |
| `libraryPreview` | Ob Library-Links rechts geoeffnet werden | Nein |
| `knowledgeCheck` | Ob vor der Lektion Wissen abgefragt wird | Nein |

Pflichtfelder sind in der App nie als Frontmatter sichtbar. Sie duerfen aber sichtbar wiederverwendet werden, z. B. `title` im Header oder `summary` in einer Navigation.

## Markdown-Direktiven

Direktiven sind erlaubt, wenn sie im Markdown auch ohne App noch verstaendlich bleiben. Sie sollen kurz, deutsch und nahe am betroffenen Block stehen.

Erlaubte Direktiven fuer v1:

- Medien
- Aufgaben
- Callouts
- KnowledgeCheck
- Layout

Beispiele:

```markdown
Bildlayout: rechts, 40 Prozent, Text links

![Markdown-Vorschau](../Assets/markdown-preview.png)
```

```markdown
Video: eingebettet, Quelle im Repo

[Demo: Markdown-Datei bearbeiten](../Assets/videos/markdown-demo.mp4)
```

```markdown
Aufgabe: ./06-markdown-aufgaben.md
```

```markdown
Callout: Hinweis

Diese Information hilft dir, typische Fehler zu vermeiden.
```

```markdown
KnowledgeCheck: required
```

## Gesammelte Anforderungen

### Navigation und Layout

- Die App soll kein Top-Bar-zentriertes Hauptmenue behalten.
- Es soll eine aufklappbare `SideNavigation` geben.
- Links neben der App sollen Inhalte aufgeklappt werden koennen.
- Die Inhaltsnavigation kann als `ContentNavigation` im Seitenmenue oder als Submenue umgesetzt werden.
- Die `StepRail` soll minimierbar sein.
- `StepMarker` sollen anzeigen, welche Inhaltstypen im Step enthalten sind, z. B. Lektion, Uebung, Video, Artikel, KnowledgeCheck.

### LessonFlow

- Der `LessonFlow` soll mindestens so hoch wie die Browseransicht sein.
- Lernende sollen klar sehen, ob innerhalb einer Slide noch weitergescrollt werden muss.
- Es soll moeglichst wenig Nachdenken ueber Navigation geben.
- Freie Navigation soll moeglich sein.
- Kuenstliche Grenzen wie deaktivierte Buttons sollen vermieden werden.
- Gleichzeitig muss sichtbar sein, wenn Inhalte noch nicht gelesen wurden.
- Der Weiter-Button zur naechsten Slide soll erst am Ende der Slide erscheinen.

### Aufgaben

- Uebungen zu einer Lektion sollen erst angezeigt werden, wenn die zugehoerige Slide aufgerufen wurde.
- Das `TaskPanel` soll unter dem LessonFlow erscheinen.
- Das Erscheinen kann animiert werden, z. B. sanftes Aufklappen unterhalb des LessonFlow.

### Todo und Fortschritt

- Es soll eine `TodoOverview` geben.
- Sichtbar sein sollen offene und erledigte Lektionen, Uebungen und Todos.
- Fortschritt soll nicht nur "Step erledigt" sein, sondern feiner: Slide gelesen, Aufgabe offen/erledigt, Todo offen/erledigt.

### Medien

- Videos sollen in den LessonFlow eingebettet werden koennen.
- Videos werden ueber eine Direktive vor dem Link gesteuert.
- Videoquellen oder referenzierte Videodateien sollen im Repository abgelegt oder repo-nah dokumentiert werden.
- Bilder sollen im LessonFlow in Anzeigevarianten gesteuert werden koennen:
  - Bild links, Text rechts
  - Text links, Bild rechts
  - Bild mittig
  - steuerbare Groesse
  - steuerbares Textverhalten

### Adaptive Inhalte

- Vor einer Lektion soll eine `KnowledgeCheck`-Komponente Wissen zu den Inhalten abfragen.
- Der LessonFlow soll Inhalte danach passend anzeigen.
- Ausgeblendete Inhalte duerfen nicht verschwinden.
- Lernende muessen ausgeblendete Inhalte jederzeit sehen und aktiv einschalten koennen.

### Course Library

- Links zur Course Library sollen im LessonFlow die `LibraryPreview` rechts oeffnen.
- Die Vorschau braucht eine Option "in Course Library oeffnen".
- In der `LibraryPage` selbst sollen Library-Links innerhalb der Bibliothek navigieren.

### Achievements und Level

- Es soll Achievements und Level geben.
- Die Regeln duerfen nicht hart in UI-Komponenten versteckt werden.
- Achievements werden in Markdown-Dateien mit Frontmatter beschrieben.
- Das Level-System baut auf [level-system-prototyp.md](./level-system-prototyp.md), erreichten Meilensteinen und Lernpfaden auf.
- Mika aus [rollen_storytelling.md](./rollen_storytelling.md) ist die zentrale Learner-Persona fuer die visuelle und narrative Darstellung von Level- und Achievement-Fortschritt.
- Level sollen sich wie Achievements anfuehlen koennen und je nach Lernpfad unterschiedlich erreichbar sein.

### Style-System

- Typografie, Farben, Abstaende, Flaechen, Buttons, Statusfarben und Animationen muessen festgelegt werden.
- Style-Entscheidungen sollen ueber Tokens und Komponentenvarianten laufen.
- Komponenten sollen keine harten Farben, Inline-Styles oder direkte Fremdkomponenten-Overrides bekommen.
- Die technische Referenz soll in `apps/learning-platform/DESIGN_SYSTEM.md` liegen.

## Technische Leitplanken

- Jede sichtbare UI-Einheit wird als Komponente gebaut.
- Page-Komponenten orchestrieren nur Routing, Datenladen und Layout.
- Fachliche Teilbereiche werden in Komponenten oder Services ausgelagert.
- Markdown wird vor dem Rendern sanitisiert.
- Frontmatter wird nie angezeigt.
- Der Sync erzeugt aus `course/` die App-Auslieferungsstruktur.
- Parser-Regeln werden getestet, bevor viele Inhalte darauf aufbauen.
- Bestehende Markdown-Dateien sollen ohne App weiterhin sinnvoll lesbar bleiben.

## Offene Entscheidungen vor Umsetzung

1. Welche konkreten Werte gelten fuer `contentType` und `renderAs` in v1?
2. Wie sehen die finalen Statuswerte fuer Slides, Tasks, Todos und Steps aus?
3. Welche Direktiven-Syntax wird exakt geparst, und welche bleibt nur redaktionelle Notiz?
4. Wie werden Achievements technisch aus Markdown-Frontmatter in Fortschrittslogik uebersetzt?
5. Welche Komponenten werden zuerst umgesetzt?
6. Welche Inhalte muessen vor der Migration aus der Onboarding-App angepasst werden?

## Vorschlag fuer die erste Umsetzungsreihenfolge

1. Content-Vertrag v1 finalisieren: Pflicht-Frontmatter, Werte fuer `contentType` und `renderAs`, `##`-Slide-Regel.
2. Parser/Sync erweitern: Frontmatter lesen, Manifest erzeugen, Dateinamen- und Frontmatter-Aufgabenzuordnung normalisieren.
3. Komponentenstruktur schneiden: `CourseShell`, `SideNavigation`, `ContentNavigation`, `StepPage`, `LessonFlow`, `LibraryPreview`.
4. LessonFlow v1 bauen: Slides aus `##`, freie Navigation, Lesestatus durch Scroll-Ende, Weiter-Button am Slide-Ende.
5. StepRail v1 bauen: `StepMarker` mit Nummer, Kurzname, Inhaltstyp-Icons und offenem Todo-Zaehler.
6. TaskPanel v1 bauen: Aufgaben erscheinen unter dem LessonFlow, sobald die zugehoerige Slide erreicht wurde.
7. TodoOverview v1 bauen: offene und erledigte Lernaktionen sichtbar machen.
8. Medienvarianten v1 bauen: Bildlayout-Direktiven und Video-Direktiven mit Repo-Ablage.
9. KnowledgeCheck v1 bauen: Inhalte an urspruenglicher Stelle einklappen statt entfernen.
10. Achievement- und Level-System auf Basis von `level-system-prototyp.md`, Meilensteinen und Lernpfaden planen.
11. `apps/learning-platform/DESIGN_SYSTEM.md` fuer Tokens, Typografie, Farben und Komponentenvarianten anlegen.
