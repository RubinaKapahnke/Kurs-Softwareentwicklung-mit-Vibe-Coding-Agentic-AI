# Hinweise für Content-Erstellende

Diese Datei definiert die wichtigsten Begriffe für Kursinhalte und hilft bei konsistenter Sprache in Lerntexten.

## Ziel dieser Datei

- Einheitliche Begriffe im gesamten Kurs verwenden.
- Lerntexte konsistent, klar und teilnehmendenorientiert halten.
- Verwechslungen zwischen redaktioneller Quelle und Kurs-Tool-Navigation vermeiden.

## Verbindliche Begriffe

| Begriff | Bedeutung | Beispiel-Link | Beispiel-Textstelle |
| :--- | :--- | :--- | :--- |
| Kurs | Das Gesamtangebot mit Modulen, Meilensteinen, Übungen und Lernfortschritt. | [course/00-course-guides/COURSE_MILESTONES.md](./00-course-guides/COURSE_MILESTONES.md) | „Dieses Dokument definiert die gemeinsamen Lernziele und Meilensteine.“ |
| Modul | Ein eigenständiger Kursbaustein, z. B. Modul 01. | [course/01-course-modules/01-Onboarding-in-den-Kurs](./01-course-modules/01-Onboarding-in-den-Kurs/) | „Willkommen im ersten Modul des Kurses ...“ |
| Lektion | Eine nummerierte Lerneinheit innerhalb eines Moduls, als Markdown-Datei. | [course/01-course-modules/01-Onboarding-in-den-Kurs/01-willkommen-im-kurs.md](./01-course-modules/01-Onboarding-in-den-Kurs/01-willkommen-im-kurs.md) | „# Lektion 01: Ankommen, GitHub-Zugang anlegen, loslegen“ |
| Lektion | Zentrale Lern- und Navigationseinheit im Kurs-Tool mit Status, Aufgaben und Erfolgskriterium. | [apps/onboarding/src/app/data/onboarding-steps.data.ts](../apps/onboarding/src/app/data/onboarding-steps.data.ts) | „id: 1, title: 'So laufen Kurs und Module ab'“ |
| Slide/Seite | Eine einzelne Ansicht innerhalb des Lesson-Flows. | [apps/onboarding/src/app/data/onboarding-steps.data.ts](../apps/onboarding/src/app/data/onboarding-steps.data.ts) | „slides: [ ... ]“ |

## Wichtig: Lektion einheitlich verwenden

Im aktuellen Onboarding-MVP verwenden wir die Benennung bewusst einheitlich:

- Lektion = redaktionelle Quelle im Kursmodul.
- Lektion = geführte UI- und Status-Einheit im Kurs-Tool.

Praxisbeispiel:

- Lektion: [course/01-course-modules/01-Onboarding-in-den-Kurs/01-willkommen-im-kurs.md](./01-course-modules/01-Onboarding-in-den-Kurs/01-willkommen-im-kurs.md)
- Lektionsdefinition: [apps/onboarding/src/app/data/onboarding-steps.data.ts](../apps/onboarding/src/app/data/onboarding-steps.data.ts)

## Sprachregeln für sichtbare Lerntexte

- Sprich immer direkt Teilnehmende an.
- Schreibe nie aus Sicht von Redaktion, Autor:innen oder Content-Team.
- Keine didaktischen Meta-Sätze im sichtbaren Lerntext.
  - Nicht: „Du siehst früh ein Ergebnis, weil diese Reihenfolge didaktisch sinnvoll ist.“
  - Stattdessen: „Diese Reihenfolge hilft dir, die nächste Lektion direkt anzuwenden.“
- In jedem `## Ziel` nicht nur das Ergebnis nennen, sondern auch den konkreten Nutzen für Lernende.

## Schnellcheck vor dem Speichern

1. Verwende ich die Begriffe Modul, Lektion und Slide korrekt?
2. Ist klar, was die lernende Person jetzt tut, warum jetzt und wofür später?
3. Ist der Text in Teilnehmenden-Sprache geschrieben und frei von Meta-Kommentaren?
4. Ist im Ziel der konkrete Nutzen für Lernende sichtbar?

## Komponenten im Kurs-Tool (für Content-Erstellende)

Diese Übersicht hilft dir zu verstehen, wo dein Markdown-Inhalt im Kurs-Tool erscheint.

| Komponente / Bereich | Rolle im Lernfluss | Typischer Datei-Link |
| :--- | :--- | :--- |
| Lesson Flow (`app-lesson-flow`) | Zeigt die eigentlichen Lektions-Slides. Jede `##`-Überschrift wird hier als eigene Seite dargestellt (mit den bekannten Ausnahmen wie `## Ziel`). | [apps/onboarding/src/app/components/lesson-flow/lesson-flow.component.ts](../apps/onboarding/src/app/components/lesson-flow/lesson-flow.component.ts) |
| Step Tasks (`app-step-tasks`) | Zeigt Aufgaben/Fallback/Erfolgskriterium unterhalb des Lesson-Flows an. | [apps/onboarding/src/app/components/step-tasks/step-tasks.component.ts](../apps/onboarding/src/app/components/step-tasks/step-tasks.component.ts) |
| Lesson Exercises (`app-lesson-exercises`) | Zeigt `## Übungen zur Lektion` als interaktiven Übungsblock. | [apps/onboarding/src/app/components/lesson-exercises/lesson-exercises.component.ts](../apps/onboarding/src/app/components/lesson-exercises/lesson-exercises.component.ts) |
| Markdown View (`app-markdown-view`) | Rendert Markdown-Inhalte, wenn eine Lektion über `markdownSource` arbeitet. | [apps/onboarding/src/app/components/markdown-view/markdown-view.component.ts](../apps/onboarding/src/app/components/markdown-view/markdown-view.component.ts) |
| Onboarding Shell | Rahmt Navigation, Fortschritt und Auswahl der Lektionen. | [apps/onboarding/src/app/pages/onboarding-shell/onboarding-shell.component.ts](../apps/onboarding/src/app/pages/onboarding-shell/onboarding-shell.component.ts) |
| Step Page | Führt eine konkrete Lektion (inkl. Aufgaben, Hinweise und CTA) aus. | [apps/onboarding/src/app/pages/step-page/step-page.component.ts](../apps/onboarding/src/app/pages/step-page/step-page.component.ts) |
| Zusammenfassung | Zeigt den Abschlussstatus und die Brücke in den weiteren Kursfluss. | [apps/onboarding/src/app/pages/zusammenfassung/zusammenfassung.component.ts](../apps/onboarding/src/app/pages/zusammenfassung/zusammenfassung.component.ts) |
| Voucher Gate (`app-voucher-gate`) | Steuert den Zugang vor den eigentlichen Onboarding-Lektionen. | [apps/onboarding/src/app/components/voucher-gate/voucher-gate.component.ts](../apps/onboarding/src/app/components/voucher-gate/voucher-gate.component.ts) |

### Was das für deine Content-Arbeit bedeutet

- Du schreibst in der Regel die Lektionsquelle im Modul, z. B. `01-willkommen-im-kurs.md`.
- Der Sync (`npm run sync-content` in `apps/onboarding`) überführt den Inhalt in das Manifest.
- Das Kurs-Tool rendert daraus Lesson-Flow-Seiten, Aufgabenblöcke und ggf. Übungsblöcke.
- Wenn die Darstellung nicht passt, prüfe zuerst Überschriftenstruktur und Sektionen in der Lektionsdatei, bevor du App-Code anpasst.

## Verbindliche Referenzen

- [AGENTS.md](../AGENTS.md)
- [.github/instructions/onboarding.instructions.md](../.github/instructions/onboarding.instructions.md)
- [course/99-course-development/README_LERNINHALTE.md](./99-course-development/README_LERNINHALTE.md)
- [course/99-course-development/anleitung-lerninhalte-zu-steps.md](./99-course-development/anleitung-lerninhalte-zu-steps.md)

