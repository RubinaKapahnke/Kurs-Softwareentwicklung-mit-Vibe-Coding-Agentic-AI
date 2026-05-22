# Kursmodule

Diese Ebene bildet die eigenständigen Kursbausteine des Kurses **Softwareentwicklung mit Vibe Coding & Agentic AI** ab.

## Zweck

Die bestehenden [../03-course-library](../03-course-library) bleiben die Lernmaterial-Sammlung: Grundlagen, Modulguids, Befehlsübersichten und konzeptuelle Erklärungen.

Die Kursmodule hier sind die Angebots- und Curriculum-Ebene. Jedes Kursmodul bündelt Lernmaterial, Praxisziel, Rollenbezug und Abschlussnachweis so, dass es auch als eigener Workshop, kompakte Weiterbildung, Team-Enablement oder Bestandteil anderer Kurse nutzbar ist.

## Struktur je Kursmodul

Jeder Kursmodul-Ordner enthält zunächst eine zentrale Datei:

- `00-modulziele.md` - Ziel, nutzbare Fertigkeit, Praxisartefakt, Rollen, Quellen und Abschlussnachweis

Falls ein Kursmodul später stärker ausgearbeitet wird, kann es zusätzliche Dateien bekommen, z. B.:

- `01-praxisprojekt.md`
- `02-rollen-und-einsatz.md`
- `03-quellen-und-uebungen.md`
- `beispiel-*.txt` - reine Anschauungsdateien ohne produktive Funktion

## Übersicht

| Kursmodul | Schwerpunkt |
| :--- | :--- |
| [01-Onboarding-in-den-Kurs](./01-Onboarding-in-den-Kurs/00-modulziele.md) | Setup, Dokumentation, VS Code, Markdown, GitHub und Git |
| [02-produktbeschreibung-inkrementelle-planung](./02-produktbeschreibung-inkrementelle-planung/00-modulziele.md) | Produktbeschreibung, PRD, Entwicklungsstufen, Planung |
| [03-vibe-coding-prompting-context-engineering](./03-vibe-coding-prompting-context-engineering/00-modulziele.md) | Vibe Coding, Prompting, Context Engineering |
| [04-ai-literacy-modellverstaendnis](./04-ai-literacy-modellverstaendnis/00-modulziele.md) | AI Literacy, LLMs, RAG, Agenten, Fehlerquellen |
| [05-grundlagen-programmierlogik](./05-grundlagen-programmierlogik/00-modulziele.md) | Programmierlogik, Kontrollstrukturen, Datenstrukturen |
| [06-debugging-testing-harness-engineering](./06-debugging-testing-harness-engineering/00-modulziele.md) | Debugging, Testing, Harness Engineering |
| [07-architektur-wartbare-produktstruktur](./07-architektur-wartbare-produktstruktur/00-modulziele.md) | Architektur, Komponenten, Datenflüsse, Wartbarkeit, Code-Monster erkennen |
| [08-ai-system-architecture-modellwahl-token-management](./08-ai-system-architecture-modellwahl-token-management/00-modulziele.md) | Modellwahl, Right Sizing, Token Management, Routing |
| [09-agentic-software-engineering-autonome-agenten](./09-agentic-software-engineering-autonome-agenten/00-modulziele.md) | Agentic Software Engineering, autonome Agenten |
| [10-daten-reporting-rag-grundlagen](./10-daten-reporting-rag-grundlagen/00-modulziele.md) | Daten, Reporting, RAG, SQLite, Parquet, Pandas, Streamlit |
| [11-schwerpunktpfad-web-app-oder-datenprodukt](./11-schwerpunktpfad-web-app-oder-datenprodukt/00-modulziele.md) | Web/App- oder Datenprodukt-Pfad |
| [12-teamarbeit-datenschutz-urheberrecht-governance](./12-teamarbeit-datenschutz-urheberrecht-governance/00-modulziele.md) | Teamarbeit, Datenschutz, Urheberrecht, Governance |
| [13-deployment-monitoring-release-management](./13-deployment-monitoring-release-management/00-modulziele.md) | Deployment, Monitoring, Semantic Versioning, Release Management |
| [14-abschlussprojekt-portfolio](./14-abschlussprojekt-portfolio/00-modulziele.md) | Eigenes Projekt, Portfolio, Abschlussinkrement |

## Lerninhalte Nach Lektionen (Modul 01)

Für das Modul [01-Onboarding-in-den-Kurs](./01-Onboarding-in-den-Kurs/00-modulziele.md) gibt es eine neue, generische Quellenstruktur für Lerninhalte nach Lektionen:

- [README_LERNINHALTE.md](./01-Onboarding-in-den-Kurs/README_LERNINHALTE.md)
- [anleitung-lerninhalte-zu-steps.md](./01-Onboarding-in-den-Kurs/anleitung-lerninhalte-zu-steps.md)

Dort liegen die Lektionen als flache, nummerierte Dateien direkt im Modulordner. Die Inhalte enthalten markerbasierte Abschnitte, damit die spätere Synchronisierung gezielt pro Lektion oder pro Lesson-Flow-Seite erfolgen kann.

Aktueller Stand: Die Onboarding-App nutzt einen manifestbasierten Sync aus diesen Lektionsdateien. Dabei werden insbesondere `XX-thema.md` und optional `XX-aufgaben.md` verarbeitet.
