# 🚀 Softwareentwicklung mit Vibe Coding & Agentic AI

Willkommen zum Kurs **Softwareentwicklung mit Vibe Coding & Agentic AI**. Dieses Repository ist unser gemeinsamer Workspace, um moderne Softwareentwicklung mit KI-Unterstützung strukturiert zu lernen.

Beim Vibe Coding nutzen wir natürliche Sprache und KI-Unterstützung, um Produkte iterativ zu planen, Prototypen zu bauen und agentische Entwicklungsworkflows nachvollziehbar einzusetzen, ohne dabei Struktur, Qualität und Verantwortung aus den Augen zu verlieren.

Die zentrale Kursbeschreibung steht in [KURSBESCHREIBUNG.md](KURSBESCHREIBUNG.md).

---

## 🎯 Ziel des Kurses
Wir durchlaufen den Entwicklungszyklus in einem **engen, praktischen Setup**: zuerst mit den wichtigsten Hebeln für saubere Zusammenarbeit, dann Schritt für Schritt von der Produktidee bis zum betreibbaren AI-gestützten Produkt.

Der Fokus liegt auf:
- Zusammenarbeit im Repository
- Prompting und Context-Engineering
- saubere, nachvollziehbare Arbeitsschritte
- iterative Produktentwicklung und klare Produktbeschreibung
- Programmierlogik, Architektur, Debugging und Qualitätssicherung
- Agentic Software Engineering, Datenanforderungen, RAG, Reporting, Deployment und Monitoring

---

## 🛠 Aktueller Repo-Stack
Die ersten Lernschritte arbeiten mit einem klaren, einheitlichen Stack:
- **Editor:** VS Code
- **KI-Assistent:** GitHub Copilot
- **Framework:** Angular (TypeScript)
- **UI-Library:** Angular Material
- **Datenformat:** JSON

Weitere Technologiepfade wie Python, Streamlit, SQLite, Parquet, RAG-Komponenten und Deployment-Werkzeuge sind im Kursrahmen in [KURSBESCHREIBUNG.md](KURSBESCHREIBUNG.md) beschrieben.

---

## 🧭 Arbeitsweise im Repo

**Zentrale Koordination:** [NEXT_STEPS.md](NEXT_STEPS.md) definiert den aktuellen Kursfortschritt. [course/kursmodule/README_KURSMODULE.md](course/kursmodule/README_KURSMODULE.md) beschreibt die eigenständigen Kursbausteine.

**Architektur der Verknüpfung:**
1. Kursbeschreibung ([KURSBESCHREIBUNG.md](KURSBESCHREIBUNG.md)) → Beschreibt Gesamtbild, Pfade und Kurslogik
2. Kursmodule ([course/kursmodule/README_KURSMODULE.md](course/kursmodule/README_KURSMODULE.md)) → Beschreiben eigenständige Kursbausteine mit Rollenbezug und Praxisartefakt
3. Meilensteine in [NEXT_STEPS.md](NEXT_STEPS.md) → Sagen, welcher Fortschritt in dieser Lerngruppe gerade relevant ist
4. Modul-Inhalte ([course/modules](course/modules)) → Erklären Konzepte und Befehle als Lernmaterial-Sammlung
5. Übungen ([course/uebungen/README_UEBUNGEN.md](course/uebungen/README_UEBUNGEN.md)) → Verlinken direkt zu Modul-Quellen
6. Persönlicher Lernfortschritt ([course/learners](course/learners)) → Jede Person dokumentiert ihren Stand und löst Übungen

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

## Aktuelle Projektstruktur

```text
/vibe-coding-0426
├── KURSBESCHREIBUNG.md
├── apps/
│   ├── README_APPS.md
│   ├── onboarding/
│   │   ├── prd_onboarding.md
│   │   ├── README.md
│   │   ├── public/
│   │   │   └── content/
│   │   │       └── github-account.md
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   │   └── markdown-view/
│   │   │   │   │       └── markdown-view.component.ts
│   │   │   │   ├── data/
│   │   │   │   ├── guards/
│   │   │   │   ├── models/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── kursstart/
│   │   │   │   │   ├── onboarding-shell/
│   │   │   │   │   ├── startseite/
│   │   │   │   │   └── step-page/
│   │   │   │   └── services/
│   │   │   └── styles/
│   │   └── package.json
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
│   ├── notizen-kursentwicklung.md
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
│   ├── kursmodule/
│   │   ├── README_KURSMODULE.md
│   │   ├── 01-arbeitsumgebung-dokumentation-versionsverwaltung/
│   │   │   └── 00-kursmodul.md
│   │   ├── 02-produktbeschreibung-inkrementelle-planung/
│   │   │   └── 00-kursmodul.md
│   │   ├── 03-vibe-coding-prompting-context-engineering/
│   │   │   └── 00-kursmodul.md
│   │   ├── 04-ai-literacy-modellverstaendnis/
│   │   │   └── 00-kursmodul.md
│   │   ├── 05-grundlagen-programmierlogik/
│   │   │   └── 00-kursmodul.md
│   │   ├── 06-debugging-testing-harness-engineering/
│   │   │   └── 00-kursmodul.md
│   │   ├── 07-architektur-wartbare-produktstruktur/
│   │   │   └── 00-kursmodul.md
│   │   ├── 08-ai-system-architecture-modellwahl-token-management/
│   │   │   └── 00-kursmodul.md
│   │   ├── 09-agentic-software-engineering-autonome-agenten/
│   │   │   └── 00-kursmodul.md
│   │   ├── 10-daten-reporting-rag-grundlagen/
│   │   │   └── 00-kursmodul.md
│   │   ├── 11-schwerpunktpfad-web-app-oder-datenprodukt/
│   │   │   └── 00-kursmodul.md
│   │   ├── 12-teamarbeit-datenschutz-urheberrecht-governance/
│   │   │   └── 00-kursmodul.md
│   │   ├── 13-deployment-monitoring-release-management/
│   │   │   └── 00-kursmodul.md
│   │   └── 14-abschlussprojekt-portfolio/
│   │       └── 00-kursmodul.md
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
│   │   ├── course-dev-onboarding-web-architect.agent.md
│   │   ├── course-dev-onboarding-ux-text.agent.md
│   │   ├── course-dev-repo-consistency-checker.agent.md
│   │   ├── course-dev-vibe-coding-readiness.agent.md
│   │   └── learners-help.agent.md
│   ├── instructions/
│   │   ├── dashboard.instructions.md
│   │   ├── learners-progress.instructions.md
│   │   ├── onboarding.instructions.md
│   │   └── uebungen-standard.instructions.md
│   ├── prompts/
│   │   ├── course-dev-onboarding-mvp-scope-freeze.prompt.md
│   │   ├── learners-dashboard-feedback.prompt.md
│   │   ├── learners-lernjournal-eintrag.prompt.md
│   │   └── learners-prd-assistent.prompt.md
│   └── workflows/
│       └── test-uebungen.yml
├── tools/
│   ├── README_TOOLS.md
│   ├── test-alle-uebungen.ps1
│   ├── test-lernfortschritt.ps1
│   ├── test-links.ps1
│   └── test-uebung.ps1
├── AGENTS.md
├── NEXT_STEPS.md
└── README.md
```

> **Hinweis für Lernende:** Die Ordner `tools/` und die Datei `AGENTS.md` im Stammverzeichnis sind **nicht Teil des Lernmaterials**. Sie werden von Dozenten und KI-Agenten für den Kursbetrieb genutzt – du musst sie nicht öffnen.

---

## 📄 Markdown-Dateien als PDF exportieren

Einzelne Markdown-Dateien (Übungen, Kursmodule, Lernmaterial) können lokal als PDF exportiert werden.

**Voraussetzungen (einmalig installieren):**
```powershell
winget install --id JohnMacFarlane.Pandoc   # Pandoc
winget install --id MiKTeX.MiKTeX           # LaTeX-Engine für PDF
```

Nach der Installation das Terminal neu starten.

**Verwendung:**
```powershell
# Beliebige Markdown-Datei als PDF exportieren:
pandoc <pfad-zur-datei.md> -o <ausgabe.pdf>

# Beispiele:
pandoc course/uebungen/meilenstein-02-uebung-01.md -o uebung-m2-01.pdf
pandoc "course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/modulziele.md" -o kursmodul-01.pdf
```

> **Hinweis:** Beim ersten PDF-Export lädt MiKTeX fehlende LaTeX-Pakete automatisch nach – das dauert einmalig etwas länger.

---

## ✅ Nächster Einstiegspunkt
Wenn du neu in eine Session einsteigst:
1. [NEXT_STEPS.md](NEXT_STEPS.md) öffnen
2. eigenen Lernfortschritt im persönlichen Ordner aktualisieren
3. aktuelle Übung in [course/uebungen/README_UEBUNGEN.md](course/uebungen/README_UEBUNGEN.md) bearbeiten
4. Änderungen committen, pushen und PR erstellen


