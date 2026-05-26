# Course Milestones: Zentrale Roadmap

Dieses Dokument beschreibt die fachliche Meilenstein-Roadmap des Kurses. Die Reihenfolge folgt der Kursbeschreibung: erst Arbeitsfaehigkeit, dann Produktidee, dann Vibe-Coding-Schleife, Struktur, Qualitaet, AI Literacy, AI-Systemarchitektur, Schwerpunktpfad, Produktinkrement, Governance, Release-Logik und Abschluss.

Die konkreten Übungsdateien liegen in [course/02-course-exercises/](../02-course-exercises/README_UEBUNGEN.md). Einige vorhandene Übungsdateien tragen noch aeltere Nummern aus der bisherigen Ausbaustufe. Fachlich gilt diese Roadmap als führend; Dateinamen werden bei einer spaeteren Übungs-Renummerierung nachgezogen.

## Aktuelle Übungsdateien

Diese Liste hält die vorhandenen Übungsdateien technisch auffindbar, bis die Dateinamen an die neue fachliche Meilenstein-Roadmap angepasst werden.

> **Übung:** [course/02-course-exercises/meilenstein-01-uebung-01.md](../02-course-exercises/meilenstein-01-uebung-01.md)
> **Übung:** [course/02-course-exercises/meilenstein-01-uebung-02.md](../02-course-exercises/meilenstein-01-uebung-02.md)
> **Übung:** [course/02-course-exercises/meilenstein-02-uebung-01.md](../02-course-exercises/meilenstein-02-uebung-01.md)
> **Übung:** [course/02-course-exercises/meilenstein-02-uebung-02.md](../02-course-exercises/meilenstein-02-uebung-02.md)
> **Übung:** [course/02-course-exercises/meilenstein-02-uebung-03.md](../02-course-exercises/meilenstein-02-uebung-03.md)
> **Übung:** [course/02-course-exercises/meilenstein-03-uebung-01.md](../02-course-exercises/meilenstein-03-uebung-01.md)
> **Übung:** [course/02-course-exercises/meilenstein-03-uebung-02.md](../02-course-exercises/meilenstein-03-uebung-02.md)
> **Übung:** [course/02-course-exercises/meilenstein-03-uebung-03.md](../02-course-exercises/meilenstein-03-uebung-03.md)
> **Übung:** [course/02-course-exercises/meilenstein-03-uebung-04.md](../02-course-exercises/meilenstein-03-uebung-04.md)
> **Übung:** [course/02-course-exercises/meilenstein-04-uebung-01.md](../02-course-exercises/meilenstein-04-uebung-01.md)
> **Übung:** [course/02-course-exercises/meilenstein-04-uebung-02.md](../02-course-exercises/meilenstein-04-uebung-02.md)

## Architektur

1. [KURSBESCHREIBUNG.md](../../KURSBESCHREIBUNG.md) beschreibt Zielbild, Kurslogik und Pfade.
2. [course/01-course-modules/](../01-course-modules/README_KURSMODULE.md) beschreibt eigenstaendige Kursbausteine.
3. Dieses Dokument ordnet Lernfortschritt als Meilensteine.
4. [course/03-course-library/](../03-course-library/) enthält Artikel, Hilfen und Nachschlagewissen.
5. [course/02-course-exercises/](../02-course-exercises/README_UEBUNGEN.md) enthält zentrale Übungsaufgaben.
6. [course/learners/beispiel/](../learners/beispiel/) zeigt die Struktur für Lernfortschritt und PRD.

---

## Meilenstein 1: Arbeitsfaehigkeit hergestellt

**Ziel:** Du kannst VS Code, Markdown, GitHub und Git nutzen, um dokumentierte Änderungen nachvollziehbar zu teilen.

**Moduleinstieg:**
- [Kursmodul 01: Arbeitsumgebung, Dokumentation & Versionsverwaltung](../01-course-modules/01-Onboarding-in-den-Kurs/00-modulziele.md)

**Zentrale Artikel:**
- [Markdown](../03-course-library/01-markdown/00-markdown-dokumentation-modulguide.md)
- [VS Code](../03-course-library/02-vscode/00-vscode-arbeitsumgebung-modulguide.md)
- [GitHub](../03-course-library/03-github/00-github-zusammenarbeit-modulguide.md)
- [Git](../03-course-library/04-git/00-was-ist-git.md)
- [Terminal](../03-course-library/05-terminal/00-terminal-kommandozeile-modulguide.md)

**Nachweis:**
- [ ] Lokales Setup oder GitHub-Arbeitsbereich ist nutzbar.
- [ ] Erste dokumentierte Änderung ist versioniert.
- [ ] Lernfortschritt ist im Kurs-Repo nachvollziehbar dokumentiert.

## Meilenstein 2: Produktidee versioniert beschrieben

**Ziel:** Du beschreibst Problem, Zielgruppe, Nutzen, Entwicklungsstufe und nächste Schritte so, dass Menschen und KI damit arbeiten koennen.

**Moduleinstieg:**
- [Kursmodul 02: Produktbeschreibung & inkrementelle Planung](../01-course-modules/02-produktbeschreibung-inkrementelle-planung/00-modulziele.md)

**Zentrale Artikel:**
- [PRD: Grundlagen](../03-course-library/06-ai-instructions/02-prd-grundlagen.md)
- [Prompting: Grundlagen](../03-course-library/06-ai-instructions/01-prompting-grundlagen.md)

**Nachweis:**
- [ ] Erste Produktbeschreibung oder PRD liegt versioniert vor.
- [ ] Zielgruppe, Problem und Nutzen sind konkret benannt.
- [ ] Naechstes Produktinkrement ist klein genug, um bearbeitet zu werden.

## Meilenstein 3: Vibe-Coding-Schleife angewendet

**Ziel:** Du setzt einen kleinen, pruefbaren Schritt mit KI-Unterstützung um, liest das Ergebnis, bewertest es und verbesserst es.

**Moduleinstieg:**
- [Kursmodul 03: Vibe Coding, Prompting & Context Engineering](../01-course-modules/03-vibe-coding-prompting-context-engineering/00-modulziele.md)

**Zentrale Artikel:**
- [AI Instructions, Prompting und Context](../03-course-library/06-ai-instructions/00-ai-instructions-prompting-context-modulguide.md)
- [Prompt-Dateien: Grundlagen](../03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)
- [GitHub Copilot in VS Code](../03-course-library/02-vscode/02-vscode-copilot.md)

**Nachweis:**
- [ ] Ein Prompt-Kontext ist dokumentiert.
- [ ] Ein kleines Ergebnis wurde erzeugt oder verbessert.
- [ ] Bewertung oder Nachbesserung ist nachvollziehbar notiert.

## Meilenstein 4: Projektstruktur und Logik verstaendlich gemacht

**Ziel:** Du kannst erklären, wo welche Verantwortung liegt und wie Daten oder Zustaende durch dein Produkt fliessen.

**Moduleinstiege:**
- [Kursmodul 07: Architektur & wartbare Produktstruktur](../01-course-modules/07-architektur-wartbare-produktstruktur/00-modulziele.md)
- [Kursmodul 05: Grundlagen Programmierlogik](../01-course-modules/05-grundlagen-programmierlogik/00-modulziele.md)

**Zentrale Artikel:**
- [Architecture Foundations](../03-course-library/07-architecture-foundations/00-architecture-foundations-projektstruktur-modulguide.md)
- [Programmierlogik](../03-course-library/08-programmierlogik/00-programmierlogik-code-verstehen-modulguide.md)

**Nachweis:**
- [ ] Strukturentscheidung, Komponentenliste oder Datenfluss-Skizze liegt vor.
- [ ] Eine erste Code- oder Logikstelle wurde erklaert.
- [ ] Verantwortlichkeiten sind grob abgegrenzt.

## Meilenstein 5: Fehleranalyse und Qualitaetssicherung nachgewiesen

**Ziel:** Du prüfst erwartetes Verhalten systematisch, statt dich nur auf plausible KI-Ausgaben zu verlassen.

**Moduleinstieg:**
- [Kursmodul 06: Debugging, Testing & Harness Engineering](../01-course-modules/06-debugging-testing-harness-engineering/00-modulziele.md)

**Nachweis:**
- [ ] Ein Fehler, Risiko oder erwartetes Verhalten ist beschrieben.
- [ ] Ein Testfall, Prüfprompt oder Debugging-Protokoll liegt vor.
- [ ] Ergebnis und Schlussfolgerung sind nachvollziehbar.

## Meilenstein 6: AI Literacy praktisch angewendet

**Ziel:** Du erkennst typische Fehlerquellen von KI-Systemen und prüfst Ergebnisse kritisch.

**Moduleinstieg:**
- [Kursmodul 04: AI Literacy & Modellverstaendnis](../01-course-modules/04-ai-literacy-modellverstaendnis/00-modulziele.md)

**Nachweis:**
- [ ] Risiken oder Fehlerquellen eines KI-Ergebnisses sind benannt.
- [ ] Quellen, Annahmen oder Grenzen wurden geprueft.
- [ ] Entscheidung oder Korrektur ist dokumentiert.

## Meilenstein 7: AI-Systemarchitektur bewusst geplant

**Ziel:** Du begruendest, welches Modell, welcher Kontext und welche Kontrollmechanismen für deinen Anwendungsfall passen.

**Moduleinstieg:**
- [Kursmodul 08: AI System Architecture, Modellwahl & Token Management](../01-course-modules/08-ai-system-architecture-modellwahl-token-management/00-modulziele.md)

**Nachweis:**
- [ ] Modellwahl, Kontextquellen und Kontrollpunkte sind skizziert.
- [ ] Token, Kosten oder Kontextumfang wurden beruecksichtigt.
- [ ] Menschliche Freigaben oder Grenzen sind sichtbar.

## Meilenstein 8: Schwerpunktpfad gewählt

**Ziel:** Du entscheidest, ob dein Projekt vor allem Web/App, Datenprodukt oder Agentic-AI-Pfad verfolgt.

**Moduleinstiege:**
- [Kursmodul 10: Daten, Reporting & RAG-Grundlagen](../01-course-modules/10-daten-reporting-rag-grundlagen/00-modulziele.md)
- [Kursmodul 11: Schwerpunktpfad Web/App oder Datenprodukt](../01-course-modules/11-schwerpunktpfad-web-app-oder-datenprodukt/00-modulziele.md)
- [Kursmodul 09: Agentic Software Engineering & autonome Agenten](../01-course-modules/09-agentic-software-engineering-autonome-agenten/00-modulziele.md)

**Nachweis:**
- [ ] Schwerpunktpfad ist entschieden.
- [ ] Begruendung passt zum eigenen Produktziel.
- [ ] Nächste Lern- und Umsetzungsaufgabe ist klar.

## Meilenstein 9: Erstes nutzbares Produktinkrement gebaut

**Ziel:** Dein Projekt tut etwas Nutzbares und kann von anderen ausprobiert oder geprüft werden.

**Moduleinstieg:**
- [Kursmodul 11: Schwerpunktpfad Web/App oder Datenprodukt](../01-course-modules/11-schwerpunktpfad-web-app-oder-datenprodukt/00-modulziele.md)

**Nachweis:**
- [ ] Kleines Produktinkrement liegt im eigenen Repository vor.
- [ ] Nutzung oder Prüfung ist beschrieben.
- [ ] Grenzen des aktuellen Stands sind sichtbar.

## Meilenstein 10: Team- und Governance-Faehigkeit gezeigt

**Ziel:** Zusammenarbeit, Verantwortung und rechtliche Grenzen sind sichtbar dokumentiert.

**Moduleinstieg:**
- [Kursmodul 12: Teamarbeit, Datenschutz, Urheberrecht & Governance](../01-course-modules/12-teamarbeit-datenschutz-urheberrecht-governance/00-modulziele.md)

**Nachweis:**
- [ ] Review, Pull Request oder Entscheidungsnotiz liegt vor.
- [ ] Datenschutz- oder Lizenzfrage wurde geprueft.
- [ ] Verantwortlichkeit ist benannt.

## Meilenstein 11: Versionierung und Release-Logik angewendet

**Ziel:** Dein Produktstand ist nachvollziehbar, Änderungen sind eingeordnet und nächste Releases können geplant werden.

**Moduleinstieg:**
- [Kursmodul 13: Deployment, Monitoring & Release Management](../01-course-modules/13-deployment-monitoring-release-management/00-modulziele.md)

**Nachweis:**
- [ ] Versionsnummer, Release Notes oder Deployment-Plan liegt vor.
- [ ] Bekannte Grenzen oder Risiken sind beschrieben.
- [ ] Weiterentwicklung ist als nächster Schritt planbar.

## Meilenstein 12: Abschlussinkrement praesentiert

**Ziel:** Du praesentierst dein eigenes Produkt als nutzbares, dokumentiertes und weiterfuehrbares Ergebnis.

**Moduleinstieg:**
- [Kursmodul 14: Abschlussprojekt & Portfolio](../01-course-modules/14-abschlussprojekt-portfolio/00-modulziele.md)

**Nachweis:**
- [ ] Eigenes Repository enthält Produkt, Doku und Pruefhinweise.
- [ ] Ergebnis kann als Portfolio-Stueck, internes Tool, Prototyp oder Lernprojekt verstanden werden.
- [ ] Reflexion und nächste Schritte sind dokumentiert.
