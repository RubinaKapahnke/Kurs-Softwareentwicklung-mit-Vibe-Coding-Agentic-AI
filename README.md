# 🚀 Vibe Coding Kurs: Von der Idee zum Projekt

Willkommen zum **Vibe Coding Kurs**. Dieses Repository ist unser gemeinsamer Workspace, um moderne Softwareentwicklung mit KI-Unterstützung strukturiert zu lernen.

Beim Vibe Coding nutzen wir die natürliche Sprache und KI-Unterstützung, um schnell Prototypen zu bauen, ohne dabei die Struktur und Qualität aus den Augen zu verlieren.

---

## 🎯 Ziel des Kurses
Wir durchlaufen den Entwicklungszyklus in einem **engen Setup**, damit der Fokus auf den wichtigsten Hebeln liegt:
- Zusammenarbeit im Repository
- Prompting und Context-Engineering
- saubere, nachvollziehbare Arbeitsschritte

---

## 🛠 Setup
Wir arbeiten mit einem klaren, einheitlichen Stack:
- **Editor:** VS Code
- **KI-Assistent:** GitHub Copilot
- **Framework:** Angular (TypeScript)
- **UI-Library:** Angular Material
- **Datenformat:** JSON

---

## 🧭 Arbeitsweise im Repo

**Zentrale Koordination:** [NEXT_STEPS.md](NEXT_STEPS.md) definiert Meilensteine und verlinkt zu Modulen.

**Architektur der Verknüpfung:**
1. Meilenstein in [NEXT_STEPS.md](NEXT_STEPS.md) → Sagt, was gelernt werden soll
2. Modul-Einstiege (Module → 00-modulguide.md) → Zeigen, welche Module relevant sind
3. Modul-Inhalte (Module → 00-modulguide mit inline Selbstcheck, 01-grundlagen, 03-befehlsuebersicht) → Erklären Konzepte und Befehle
4. Übungen ([course/uebungen/README_UEBUNGEN.md](course/uebungen/README_UEBUNGEN.md)) → Verlinken direkt zu Modul-Quellen
5. Persönlicher Lernfortschritt ([course/learners](course/learners)) → Jede Person dokumentiert ihren Stand und löst Übungen

**Wichtig:** Jede Aufgabe in den Übungen hat direkte Quellenlinks zu den Modul-Dateien. Während du die Übung machst, klickst du direkt auf die Modul-Quelle.

---

## � Aufbau der Module

Jedes Modul folgt derselben Struktur. Beispiel: `course/modules/04-git/`

```
course/modules/04-git/
├── 00-git-modulguide.md          ← START HIER: Navigation + Überblick + Selbstcheck
├── 01-git-grundlagen.md          ← Erklärung: Warum Git? Wie funktioniert es?
└── 03-git-befehlsuebersicht.md   ← Nachschlag: Befehle in Tabellen (nur Git, Terminal)
```

**Was bedeutet jede Datei?**

| Datei | Zweck | Nutze sie wenn... |
| :--- | :--- | :--- |
| **00-modulguide.md** | Navigation, Kurzüberblick & **inline Selbstcheck** (Must/Should/Nice) | Du neu im Modul anfängst oder deinen Stand prüfen willst |
| **01-grundlagen.md** | Konzeptuelle Erklärung | Du verstehen willst, **warum** und **wie** |
| **03-befehlsuebersicht.md** | Befehls-Nachschlagewerk (Tabellen) | Du einen Befehl schnell nachschlagen musst |

**Beachte:**
- Nicht alle Module haben 03-befehlsuebersicht.md (nur Git und Terminal)
- 01-grundlagen.md erklärt Konzepte, enthält aber keine Befehle zum Kopieren
- 03-befehlsuebersicht.md hat nur Befehle, keine Erklärungen
- Der Selbstcheck (Must/Should/Nice-Checklisten) steht immer im `00-modulguide.md`

---

## �📂 Aktuelle Projektstruktur

```text
/vibe-coding-0426
├── apps/
│   ├── README_APPS.md
│   └── dashboard/
│       ├── prd_dashboard.md
│       ├── data/
│       │   ├── course-roadmap.data.ts
│       │   ├── index.ts
│       │   └── mock/
│       │       ├── ai-learner-scenarios.mock.ts
│       │       ├── github-activity.mock.ts
│       │       └── learner-markdown.mock.ts
│       ├── features/
│       │   └── overview-option-a/
│       │       ├── overview-option-a.component.html
│       │       ├── overview-option-a.component.scss
│       │       └── overview-option-a.component.ts
│       ├── models/
│       │   ├── dashboard.models.ts
│       │   └── index.ts
│       └── services/
│           ├── delta.service.ts
│           ├── index.ts
│           ├── learner-progress-parser.service.ts
│           └── snapshot.service.ts
├── course/
│   ├── learners/
│   │   ├── daria/
│   │   │   ├── prd_daria.md
│   │   │   └── lernfortschritt_daria.md
│   │   ├── dom/
│   │   │   ├── prd_dom.md
│   │   │   └── lernfortschritt_dom.md
│   │   ├── medine/
│   │   │   ├── prd_medine.md
│   │   │   └── lernfortschritt_medine.md
│   │   ├── raphael/
│   │   │   ├── prd_raphael.md
│   │   │   └── lernfortschritt_raphael.md
│   │   └── sebastian/
│   │       ├── cmd_guide.md
│   │       ├── git_guide.md
│   │       ├── prd_sebastian.md
│   │       └── lernfortschritt_sebastian.md
│   ├── modules/
│   │   ├── 01-markdown/
│   │   ├── 02-vscode/
│   │   ├── 03-github/
│   │   ├── 04-git/
│   │   ├── 05-terminal/
│   │   ├── 06-ai-instructions/
│   │   │   ├── 00-ai-instructions-modulguide.md
│   │   │   ├── 01-prompting-grundlagen.md
│   │   │   ├── 02-prd-grundlagen.md
│   │   │   └── 03-prompt-dateien-grundlagen.md
│   │   └── 07-architecture-foundations/
│   │       ├── 00-architecture-foundations-modulguide.md
│   │       ├── 01-architecture-foundations-grundlagen.md
│   │       └── 02-architecture-foundations-praxis.md
│   └── uebungen/
│       ├── meilenstein-02-uebung-*.md  (3 Übungen)
│       ├── meilenstein-03-uebung-*.md  (4 Übungen)
│       ├── meilenstein-04-uebung-*.md  (1 Übung)
│       └── README_UEBUNGEN.md
├── .github/
│   ├── agents/
│   │   ├── course-dev-curriculum.agent.md
│   │   ├── course-dev-dashboard-developer.agent.md
│   │   ├── course-dev-dashboard-po.agent.md
│   │   ├── course-dev-exercise-creator.agent.md
│   │   └── course-dev-repo-consistency-checker.agent.md
│   ├── instructions/
│   │   └── dashboard.instructions.md
│   └── prompts/
│       ├── learners-dashboard-feedback.prompt.md
│       └── learners-prd-assistent.prompt.md
├── tools/
│   ├── README_TOOLS.md
│   ├── test-uebung.ps1
│   └── test-alle-uebungen.ps1
├── AGENTS.md
├── NEXT_STEPS.md
└── README.md
```

> **Hinweis für Lernende:** Die Ordner `tools/` und die Datei `AGENTS.md` im Stammverzeichnis sind **nicht Teil des Lernmaterials**. Sie werden von Dozenten und KI-Agenten für den Kursbetrieb genutzt – du musst sie nicht öffnen.

---

## ✅ Nächster Einstiegspunkt
Wenn du neu in eine Session einsteigst:
1. [NEXT_STEPS.md](NEXT_STEPS.md) öffnen
2. eigenen Lernfortschritt im persönlichen Ordner aktualisieren
3. aktuelle Übung in [course/uebungen/README_UEBUNGEN.md](course/uebungen/README_UEBUNGEN.md) bearbeiten
4. Änderungen committen, pushen und PR erstellen