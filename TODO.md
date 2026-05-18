# ✅ TODO

## Inhaltsverzeichnis
- [Notizen unstrukturiert](#notizen-unstrukturiert)
- [High Prio](#high-prio)
- [Repository](#repository)
    - [Struktur](#struktur)
    - [Zusammenarbeit](#zusammenarbeit)
- [Apps](#apps)
    - [Onboarding App](#onboarding-app)
    - [Onboarding App - übertragene Notizen](#onboarding-app---übertragene-notizen)
- [Course-Inhalte](#course-inhalte)
    - [Allgemein](#allgemein)
        - [Grundlagenbegriffe](#grundlagenbegriffe)
        - [Architektur](#architektur)
        - [KI und Agenten](#ki-und-agenten)
    - [Library](#library)
        - [Git und GitHub](#git-und-github)
        - [Markdown](#markdown)
        - [VS Code und Cloud-Workflow](#vs-code-und-cloud-workflow)
        - [Frontend-Basics](#frontend-basics)
    - [Modules](#modules)
        - [Debugging und Wartbarkeit](#debugging-und-wartbarkeit)
        - [KI-gestützte Entwicklung](#ki-gestützte-entwicklung)
    - [Exercises](#exercises)
        - [Kurzprojekte](#kurzprojekte)
        - [Übungsquellen](#übungsquellen)
- [Fremdtexte-Prozess](#fremdtexte-prozess)
    - [Offene Aktion](#offene-aktion)
---

## Notizen unstrukturiert
Kurznotizen zuerst hier sammeln und später in die passende Kategorie verschieben.

- [ ] 
- [ ] Tool-Überblick für Agentenlandschaft strukturieren (z. B. Agent.ai, Microsoft Agents, Claude Code, Lovable).
- [ ] Optionales Glossar für wiederkehrende Fachbegriffe erstellen.

---

## High Prio
- [ ] Entscheidung: Bleibt [NEXT_STEPS.md](NEXT_STEPS.md) im Root oder Umzug nach [course](course)?
  - [ ] Falls Umzug: Link-Migration planen (README, Übungen, Kursmodule, App-Content).
- [ ] Zusammenarbeit klären (Rubina, Patrick, Markus): Wo werden operative TODOs verbindlich gepflegt?
- [ ] Onboarding LessonFlow: Scroll-Hinweis sichtbar machen, wenn Inhalt überläuft.

[⬆️ Zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Repository

### Struktur
- [ ] Wenn [NEXT_STEPS.md](NEXT_STEPS.md) verschoben wird: Zielname und Zielpfad festlegen.
- [ ] Nach Umzug alle internen Links per Skript prüfen (z. B. `tools/test-links.ps1`).

### Zusammenarbeit
- [ ] Working Agreement dokumentieren (Branch-Namen, PR-Flow, Review-Regeln, Definition of Done).
- [ ] Festlegen, ob [TODO.md](TODO.md) zentral bleibt oder thematische TODO-Dateien genutzt werden.

[⬆️ Zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Apps

### Onboarding App

#### Components
- [ ] LessonFlow: klaren visuellen Scroll-Indikator ergänzen.
- [ ] Prüfen, ob eine eigene Exercise-Komponente wirklich nötig ist oder bestehende Komponenten erweitert werden.

#### Features
- [ ] Idee bewerten: Interaktiver Markdown-Editor (Nutzen, Scope, Wartungsaufwand). Referenz: https://blog.webdevsimplified.com/2023-06/markdown-crash-course/#interactive-markdown-editor

### Onboarding App - übertragene Notizen

#### Offene Aufgaben

##### Accessibility und Design
- [ ] "Slop vs. Shipping"-Section kompakter und strukturierter darstellen; Karten optisch weniger rot/grün, weniger Leerraum.
- [ ] Visuelle Elemente (Grafiken, Bilder) hinzufügen, damit Text leichter zu lesen wird.
- [ ] SCSS Refactoring (Farbschema, Klassen, TSConfig)


##### Startseite und Hub-Architektur
- [ ] Startseite zu echter Kurs-Hub-Startseite umbauen.
- [ ] Kursstart-Seite als modulare Kursdetail-Seite umbauen.
- [ ] Kursstartseite als Kursübersicht mit Kursdetails und Einstiegspfad umbauen.


[⬆️ Zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Course-Inhalte

### Allgemein

#### Grundlagenbegriffe
- [ ] CLI vs. GUI (mit Mini-Beispielen).
- [ ] Bash vs. PowerShell (Unterschiede für Kursübungen).
- [ ] Package vs. Library vs. Programm.

#### Architektur
- [ ] Monolith vs. Microservices für Einsteiger erklären.

#### KI und Agenten
- [ ] Tool vs. KI-Assistent vs. Workflow vs. Agent als Lernmodul aufbereiten.
- [ ] RAG-Bezug zur Softwareentwicklung im Kurskontext konkretisieren.

### Library

#### Git und GitHub
- [ ] `gitignore` für Einsteiger erklären (Zweck, typische Einträge, Fallstricke).
- [ ] Git vs. GitHub klar abgrenzen.
- [ ] `origin` und `upstream` mit Beispiel visualisieren.

#### Markdown
- [ ] Standard-Markdown vs. GitHub-Flavored Markdown (GFM) erklären.

#### VS Code und Cloud-Workflow
- [ ] `github.dev` und Codespaces einordnen: Wann reicht Web, wann lokal in VS Code?

#### Frontend-Basics
- [ ] CSS vs. SCSS, Präprozessor vs. Compiler, Zusammenspiel mit TS/Build.

### Modules

#### Debugging und Wartbarkeit
- [ ] Modulteil „Monster-Files verhindern" ausarbeiten (Anti-Pattern + gutes Gegenbeispiel).

#### KI-gestützte Entwicklung
- [ ] Modulteil „Refactoring mit AI/Agents" ergänzen und mit Kurslogik verknüpfen.

### Exercises

#### Kurzprojekte
- [ ] Kurzprojekte für Teilnehmende ergänzen (mit Auswahlhilfe für Unentschlossene).

#### Übungsquellen
- [ ] Inspirationsquellen für Übungsdesign auswerten: https://roadmap.sh/frontend/projects und https://roadmap.sh/backend/projects

[⬆️ Zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Fremdtexte-Prozess
Rohtexte werden zentral in dieser Datei gepflegt, im Abschnitt „Fremdtexte zur Verarbeitung in den Kursen“.

### Offene Aktion
- [ ] Neue Rohtexte nur hier erfassen und nach der Verarbeitung aus dem Rohtext-Abschnitt entfernen.
Testfälle für agentische Systeme
Human-in-the-Loop und Freigabeprozesse

### Programmatische KI-Agentensysteme mit Claude Code und LangChain
Dieser Kurs vertieft den Aufbau KI-basierter Agentensysteme auf Code-Ebene. Du entwickelst eigene Agenten mit Python, LangChain und Claude Code, lernst agentische Architekturen systematisch umzusetzen und verstehest die Unterschiede zu Low-Code-Ansätzen wie n8n. Der Fokus liegt auf Vibe Coding, Kontrolle, Erweiterbarkeit sowie dem stabilen Betrieb agentischer Systeme im Unternehmenskontext.
Technisches Setup einrichten
Webinar
1 h
Zur Unterstützung gibt es einen technischen Vorbereitungstermin vor dem ersten inhaltlichen Webinar.

In diesem Termin wird gemeinsam:

Claude Code installiert
die Entwicklungsumgebung geprüft
ein erster Test-Agent ausgeführt
Für die Teilnahme an diesem Kurs sind folgende Voraussetzungen erforderlich:

Rechner mit Administratorrechten, um Software lokal installieren zu können
Möglichkeit, Claude Code (CLI) lokal zu installieren
Eigenen Claude-Account (API-Zugang) anlegen und konfigurieren
Interesse an Programmierung und/oder Python
Bereitschaft, die technische Einrichtung vor Kursbeginn abzuschließen

Einstieg in programmatische Agenten

Verständnis aufbauen: Agent ≠ Workflow
Warum Code für Agenten notwendig wird
Einführung in Claude Code und Vibe Coding
Überblick LangChain und agentische Grundbausteine

Erster einfacher LangChain-Agent
Übung: Aufbau eines ersten Single-Agenten in Python
Agenten mit Tools und Memory

Tools als Python-Funktionen
Memory und Zustandslogik
Unterschiede zu Tool-Use und State in n8n
Übung: Erweiterung des Agenten um Tool-Use und Kontext

Agent-zu-Agent-Kommunikation und Rollenagenten

Rollenbasierte Agenten
Kommunikation zwischen Agenten
Delegation von Aufgaben
Live-Coding: Zusammenarbeit mehrerer Agenten

Eigene Agentenarchitektur umsetzen

Planner–Execute-Architektur
Supervisor-Agenten
Koordination und Zustandsmanagement
Übung: Aufbau eines einfachen Multi-Agenten-Systems
Qualität, Tests und Betrieb

Fehlerhandling und Abbruchkriterien
Tests, Logging und einfache Monitoring-Ansätze
Betrieb agentischer Systeme im Unternehmenskontext
Human-in-the-Loop im Code
Übung: Agent bewusst scheitern lassen und stabilisieren

[⬆️ Zum Inhaltsverzeichnis](#inhaltsverzeichnis)
