# 🚀 Softwareentwicklung mit Vibe Coding & Agentic AI

Willkommen zum Kurs **Softwareentwicklung mit Vibe Coding & Agentic AI**. Dieses Repository ist unser gemeinsamer Workspace, um moderne Softwareentwicklung mit KI-Unterstützung strukturiert zu lernen.

Beim Vibe Coding nutzen wir natürliche Sprache und KI-Unterstützung, um Produkte iterativ zu planen, Prototypen zu bauen und agentische Entwicklungsworkflows nachvollziehbar einzusetzen, ohne dabei Struktur, Qualität und Verantwortung aus den Augen zu verlieren.

Die zentrale Kursbeschreibung steht in [KURSBESCHREIBUNG.md](KURSBESCHREIBUNG.md).

---

## 🎯 Ziel des Kurses
Wir durchlaufen den Entwicklungszyklus in einem **engen, praktischen Setup**: zuerst mit den wichtigsten Hebeln für saubere Zusammenarbeit, dann Lektion für Lektion von der Produktidee bis zum betreibbaren AI-gestützten Produkt.

Der Fokus liegt auf:
- Zusammenarbeit im Repository
- Prompting und Context-Engineering
- saubere, nachvollziehbare Arbeitsschritte
- iterative Produktentwicklung und klare Produktbeschreibung
- Programmierlogik, Architektur, Debugging und Qualitätssicherung
- Agentic Software Engineering, Datenanforderungen, RAG, Reporting, Deployment und Monitoring

---

## 🧭 Arbeitsweise im Repo

**Zentrale Koordination:** [course/00-course-guides/COURSE_MILESTONES.md](course/00-course-guides/COURSE_MILESTONES.md) definiert den aktuellen Kursfortschritt. [course/01-course-modules/README_KURSMODULE.md](course/01-course-modules/README_KURSMODULE.md) beschreibt die eigenständigen Kursbausteine.

**Architektur der Verknüpfung:**
1. Kursbeschreibung ([KURSBESCHREIBUNG.md](KURSBESCHREIBUNG.md)) → Beschreibt Gesamtbild, Pfade und Kurslogik
2. Kursmodule ([course/01-course-modules/README_KURSMODULE.md](course/01-course-modules/README_KURSMODULE.md)) → Beschreiben eigenständige Kursbausteine mit Rollenbezug und Praxisartefakt
3. Meilensteine in [course/00-course-guides/COURSE_MILESTONES.md](course/00-course-guides/COURSE_MILESTONES.md) → Sagen, welcher Fortschritt in dieser Lerngruppe gerade relevant ist
4. Modul-Inhalte ([course/03-course-library](course/03-course-library)) → Erklären Konzepte und Befehle als Lernmaterial-Sammlung
5. Übungen ([course/02-course-exercises/README_UEBUNGEN.md](course/02-course-exercises/README_UEBUNGEN.md)) → Verlinken direkt zu Modul-Quellen
6. Persönlicher Lernfortschritt ([course/learners](course/learners)) → Jede Person dokumentiert ihren Stand und löst Übungen

**Wichtig:** Jede Aufgabe in den Übungen hat direkte Quellenlinks zu den Modul-Dateien. Während du die Übung machst, klickst du direkt auf die Modul-Quelle.

---

## � Aufbau der Module

Jedes Modul folgt derselben Struktur. Beispiel: `course/03-course-library/04-git/`

```
course/03-course-library/04-git/
├── 00-git-versionierung-modulguide.md          ← START HIER: Navigation + Überblick + Selbstcheck
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
├── README.md
├── AGENTS.md
├── apps/
│   ├── notizen_todos_apps.md
│   ├── README_APPS.md
│   ├── onboarding/
│   └── dashboard/
├── course/
│   ├── 00-course-guides/
│   │   ├── COURSE_MILESTONES.md
│   │   └── table-of-contents.md
│   ├── AI_SLOP_SURVIVAL_GUIDE.md
│   ├── HINWEISE_CONTENT_ERSTELLENDE.md
│   ├── FAQ.md
│   ├── GLOSSARY.md
│   ├── BEDIENUNGSHILFEN.md
│   ├── 01-course-modules/
│   ├── 02-course-exercises/
│   ├── 03-course-library/
│   ├── 99-course-development/
│   └── learners/
├── .github/
│   ├── agents/
│   ├── instructions/
│   ├── prompts/
│   └── workflows/
└── tools/
```

Eine detailliertere Datei-Übersicht steht in [course/00-course-guides/table-of-contents.md](course/00-course-guides/table-of-contents.md).

> **Hinweis für Lernende:** Die Ordner `tools/` und die Datei `AGENTS.md` im Stammverzeichnis sind **nicht Teil des Lernmaterials**. Sie werden von Dozenten und KI-Agenten für den Kursbetrieb genutzt - du musst sie nicht öffnen.

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
pandoc course/02-course-exercises/meilenstein-02-uebung-01.md -o uebung-m2-01.pdf
pandoc "course/01-course-modules/01-Onboarding-in-den-Kurs/00-modulziele.md" -o kursmodul-01.pdf
```

> **Hinweis:** Beim ersten PDF-Export lädt MiKTeX fehlende LaTeX-Pakete automatisch nach - das dauert einmalig etwas länger.

---

## ✅ Nächster Einstiegspunkt
Wenn du neu in eine Session einsteigst:
1. [course/00-course-guides/COURSE_MILESTONES.md](course/00-course-guides/COURSE_MILESTONES.md) öffnen
2. eigenen Lernfortschritt im persönlichen Ordner aktualisieren
3. aktuelle Übung in [course/02-course-exercises/README_UEBUNGEN.md](course/02-course-exercises/README_UEBUNGEN.md) bearbeiten
4. Änderungen committen, pushen und PR erstellen

---

## 🛠 Aktueller Repo-Stack
Die ersten Lernschritte arbeiten mit einem klaren, einheitlichen Stack:
- **Editor:** VS Code
- **KI-Assistent:** GitHub Copilot
- **Framework:** Angular (TypeScript)
- **UI-Library:** Angular Material
- **Datenformat:** JSON

Weitere Technologiepfade wie Python, Streamlit, SQLite, Parquet, RAG-Komponenten und Deployment-Werkzeuge sind im Kursrahmen in [KURSBESCHREIBUNG.md](KURSBESCHREIBUNG.md) beschrieben.



