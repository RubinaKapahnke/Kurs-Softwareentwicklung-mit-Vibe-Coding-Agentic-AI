---
applyTo: "apps/dashboard/**"
---

# Dashboard: Progress-Hub – Kontext für Copilot

## Stack (verbindlich)

| Bereich | Vorgabe |
|:---|:---|
| **Framework** | Angular (Standalone Architecture) |
| **UI-Library** | Angular Material |
| **Datenformat** | Strukturiertes JSON |
| **Sprache** | TypeScript (Strict Mode) |
| **Versionierung** | Git-Flow (Feature Branches & PRs auf Main) |

Schlage keine anderen Frameworks, Libraries oder Sprachen vor.

## Die drei Personas

Jede Funktion des Dashboards muss mindestens einer der drei Personas nützen:

**[Kursentwickler]** – Mensch, der den Kurs weiterentwickelt  
Braucht: Überblick über Meilenstein-Fortschritt aller Teilnehmenden, Hinweise wo Lernende festhängen, schnellen Zugriff auf offene Übungen und Modulabdeckungslücken.

**[Lernende]** – Kursteilnehmende  
Braucht: Eigenen Lernstand auf einen Blick, klare nächste Schritte, Vergleich mit Gesamtgruppe (ohne Druck), Motivation durch sichtbaren Fortschritt.

**[KI-Agent]** – Automatisierte Agents, die Daten lesen und schreiben  
Braucht: Maschinenlesbare JSON-Strukturen, stabile Datenpfade, eindeutige IDs für Lernende/Meilensteine/Übungen, TypeScript-Interfaces im Strict Mode.

## Datenquellen im Repo

- Lernfortschrittsdaten: `apps/learners/*/lernfortschritt_*.md`
- Meilensteine und Übungsverknüpfungen: `NEXT_STEPS.md`
- Übungsdateien: `docs/uebungen/meilenstein-*.md`
- PRD (Anforderungen): `apps/dashboard/prd_dashboard.md`

## Konventionen

- TypeScript-Interfaces immer mit Kommentar versehen, welche Repo-Datei die Datenquelle ist.
- User Stories im Format kennzeichnen: `[Kursentwickler]`, `[Lernende]` oder `[KI-Agent]`.
- Neue Features erst in `apps/dashboard/prd_dashboard.md` (User Stories + Definition of Done) dokumentieren, bevor Code geschrieben wird.
