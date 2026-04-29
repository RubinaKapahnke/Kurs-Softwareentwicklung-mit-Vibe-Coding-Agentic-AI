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
3. Modul-Inhalte (Module → 01-grundlagen, 03-befehlsuebersicht, 00-themenueberblick) → Erklären Konzepte und Befehle
4. Übungen ([docs/uebungen/README_UEBUNGEN.md](docs/uebungen/README_UEBUNGEN.md)) → Verlinken direkt zu Modul-Quellen
5. Persönlicher Lernfortschritt ([apps/learners](apps/learners)) → Jede Person dokumentiert ihren Stand und löst Übungen

**Wichtig:** Jede Aufgabe in den Übungen hat direkte Quellenlinks zu den Modul-Dateien. Während du die Übung machst, klickst du direkt auf die Modul-Quelle.

---

## � Aufbau der Module

Jedes Modul folgt derselben Struktur. Beispiel: `modules/04-git/`

```
modules/04-git/
├── 00-git-modulguide.md          ← START HIER: Navigation + Überblick
├── 01-git-themenueberblick.md    ← Selbstcheck: Must/Should/Nice-Checklisten
├── 02-git-grundlagen.md          ← Erklärung: Warum Git? Wie funktioniert es?
└── 03-git-befehlsuebersicht.md   ← Nachschlag: Befehle in Tabellen (nur Git, Terminal)
```

**Was bedeutet jede Datei?**

| Datei | Zweck | Nutze sie wenn... |
| :--- | :--- | :--- |
| **00-modulguide.md** | Navigation & Kurzüberblick | Du neu im Modul anfängst |
| **01-themenueberblick.md** | Selbstcheck-Checklisten (Must/Should/Nice) | Du deinen Stand einordnen willst |
| **02-grundlagen.md** | Konzeptuelle Erklärung | Du verstehen willst, **warum** und **wie** |
| **03-befehlsuebersicht.md** | Befehls-Nachschlagewerk (Tabellen) | Du einen Befehl schnell nachschlagen musst |

**Beachte:**
- Nicht alle Module haben 03-befehlsuebersicht.md (nur Git und Terminal)
- 01-grundlagen.md erklärt Konzepte, enthält aber keine Befehle zum Kopieren
- 03-befehlsuebersicht.md hat nur Befehle, keine Erklärungen
- Lernziele stehen **ausschließlich** in 01-themenueberblick.md (keine Redundanz)

---

## �📂 Aktuelle Projektstruktur

```text
/vibe-coding-0426
├── apps/
│   ├── dashboard/
│   │   └── prd_dashboard.md
│   └── learners/
│       ├── daria/
│       │   ├── prd_daria.md
│       │   └── lernfortschritt_daria.md
│       ├── dom/
│       │   ├── prd_dom.md
│       │   └── lernfortschritt_dom.md
│       ├── medine/
│       │   ├── prd_medine.md
│       │   └── lernfortschritt_medine.md
│       ├── raphael/
│       │   ├── prd_raphael.md
│       │   └── lernfortschritt_raphael.md
│       └── sebastian/
│           ├── prd_seb.md
│           └── lernfortschritt_sebastian.md
├── docs/
│   ├── GLOSSARY.md
│   └── uebungen/
│       └── README.md
├── modules/
│   ├── 01-markdown/
│   ├── 02-vscode/
│   ├── 03-github/
│   ├── 04-git/
│   ├── 05-terminal/
│   ├── 06-ai-instructions/
│   └── 07-architecture-foundations/
├── NEXT_STEPS.md
└── README.md
```

---

## ✅ Nächster Einstiegspunkt
Wenn du neu in eine Session einsteigst:
1. [NEXT_STEPS.md](NEXT_STEPS.md) öffnen
2. eigenen Lernfortschritt im persönlichen Ordner aktualisieren
3. aktuelle Übung in [docs/uebungen/README_UEBUNGEN.md](docs/uebungen/README_UEBUNGEN.md) bearbeiten
4. Änderungen committen, pushen und PR erstellen