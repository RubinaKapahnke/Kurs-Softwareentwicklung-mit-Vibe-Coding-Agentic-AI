---
description: "Use when: Folgeuebung fuer Meilenstein 4 erstellen, meilenstein-04-uebung-02 anlegen, KI-Code lesen und kleine Logikverbesserung als Uebung ausarbeiten"
name: "Meilenstein 4 Folgeuebung erstellen (course-dev)"
agent: "Exercise Creator (course-dev)"
---

Erstelle die naechste Uebung fuer Meilenstein 4 als Datei:

- `course/uebungen/meilenstein-04-uebung-02.md`

Ziel der Uebung:
- Lernende sollen den ersten KI-generierten Code aus ihrem Projekt systematisch lesen,
- den Datenfluss kurz dokumentieren,
- und genau eine kleine Logikverbesserung mit geringem Risiko umsetzen.

Pflicht-Kontext vor Erstellung:
1. Pruefe `AGENTS.md` und den Uebungsstandard.
2. Pruefe den Abschnitt Meilenstein 4 in `COURSE_MILESTONES.md`.
3. Nutze Stil und Struktur bestehender Uebungen in `course/uebungen/`.
4. Verifiziere Quellenpfade, keine erfundenen Links.

Verbindliche Quellen fuer die neue Uebung:
- `course/course-library/08-programmierlogik/00-programmierlogik-code-verstehen-modulguide.md`
- `course/course-library/08-programmierlogik/01-programmierlogik-grundlagen.md`
- `course/course-library/08-programmierlogik/02-programmierlogik-code-lesen.md`
- `course/course-library/07-architecture-foundations/02-architecture-foundations-praxis.md`
- `course/course-library/06-ai-instructions/01-prompting-grundlagen.md`
- `course/course-library/04-git/03-git-befehlsuebersicht.md`

Didaktischer Fokus:
- Einsteigerfreundlich, konkrete kleinschrittige Aufgaben
- Keine Zeitvorgaben (kein "30 Minuten", "diese Woche")
- Keine Ueberforderung durch grosse Refactorings
- Immer nur eine kleine risikominimale Verbesserung

Pflichtinhalte in den Aufgaben:
- "Vor dem Start"-Checkliste (max. 3 Punkte) inkl. benoetigter Dateien
- "Wichtig – diese Datei nicht bearbeiten"-Hinweis
- UI-Schritte als nummerierte Anleitung mit Fallback
- Vor Git-Block: `git status` + `git branch`
- Vor erstem `git checkout -b`: Tipp-Block mit Option A / Option B (PR schon gemerged oder nicht)

Nach Erstellung:
1. `COURSE_MILESTONES.md` unter Meilenstein 4 sauber um die neue Uebung erweitern.
2. `course/uebungen/README_UEBUNGEN.md` um den Eintrag ergaenzen.
3. `./tools/test-uebung.ps1 -File "course/uebungen/meilenstein-04-uebung-02.md"` ausfuehren.
4. Ergebnis kurz berichten: angelegte Datei, geaenderte Uebersichten, Testergebnis.
