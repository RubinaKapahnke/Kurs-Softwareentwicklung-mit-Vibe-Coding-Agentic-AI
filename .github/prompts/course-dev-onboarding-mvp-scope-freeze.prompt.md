---
description: "Use when: Onboarding-MVP-Scope einfrieren, Feature-Drift stoppen, klare Out-of-Scope-Liste erstellen, MVP vor Umsetzung schaerfen, onboarding mvp scope freeze"
name: "Onboarding MVP Scope Freeze (course-dev)"
agent: "Onboarding Web Architect (course-dev)"
---

Du bist im Scope-Freeze-Modus für die bestehende Onboarding-Website in `apps/onboarding`.

Ziel: Das Onboarding-MVP so scharf eingrenzen, dass es in kurzer Zeit innerhalb der vorhandenen App-Struktur umsetzbar bleibt und keine Nebenbaustellen startet.

Arbeite in genau dieser Reihenfolge:

1. **MVP-Erfolg in 1 Satz**
- Formuliere den Zielzustand als beobachtbares Ergebnis.
- Ergebnis muss für absolute Anfaenger gelten.

2. **In-Scope (maximal 6 Punkte)**
- Nur Inhalte, die direkt zum Zielzustand beitragen.
- Jeder Punkt beginnt mit einem Verb.

3. **Out-of-Scope (verbindlich)**
- Liste explizit aus:
  - Login/Accounts innerhalb der Website
  - Fortschrittstracking
  - Gamification
  - Quiz, Videos, Ressourcen-Portal
  - Dashboard-Features

4. **Abbruchkriterien bei Drift**
- Definiere klare Signale, wann ein Vorschlag nicht mehr MVP ist.
- Gib je Signal eine kurze Gegenmassnahme.

5. **Architektur-Gate gegen Code-Monster**
- Prüfe, welche bestehenden Komponenten, Material-Patterns, Tokens, Markdown-Dateien oder Datenmodelle genutzt werden koennen.
- Nenne neue Komponenten nur, wenn sie absehbar mehrfach eingesetzt werden oder eine monolithische Datei deutlich entlasten.
- Falls eine neue Komponente nur für einen Einzelfall gedacht ist: nicht direkt anlegen, sondern die Rückfrage formulieren, wie damit umgegangen werden soll.
- Halte Styles klein und tokenbasiert: keine hardcodierten Komponentenfarben, kein `!important`, keine Inline-Styles.

6. **Definition of Done (DoD)**
- 3 bis 5 prüfbare Kriterien.
- Mindestens enthalten:
  - Linearer Flow mit hoechstens 6 Lektionen
  - Pro Lektion ein Erfolgskriterium
  - Eine bereits aufgenommene Person erreicht lokalen Clone und den Einstieg in `course/00-course-guides/COURSE_MILESTONES.md` ohne Vorwissen
  - Keine neue monolithische Page/Komponente und keine unnötige Komponenten-Vermehrung

7. **Nächster Umsetzungsschritt**
- Nenne genau einen kleinsten technischen Startschritt im bestehenden App-Schnitt des Repos.

Antwortformat:
- MVP-Zielsatz
- In-Scope
- Out-of-Scope
- Drift-Signale
- Architektur-Gate
- DoD
- Nächster Lektion


