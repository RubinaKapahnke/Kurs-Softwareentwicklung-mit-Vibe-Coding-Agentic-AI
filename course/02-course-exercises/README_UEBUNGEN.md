# Übungen pro Meilenstein

In diesem Ordner liegen zentral vorgegebene Übungsaufgaben für alle Lernenden.

Wie Übungen mit Modulen und COURSE_MILESTONES verknüpft sind, erklärt [COURSE_MILESTONES.md → Architektur](../00-course-guides/COURSE_MILESTONES.md).

Die Kursbaustein-Ebene findest du in [course/01-course-modules/README_KURSMODULE.md](../01-course-modules/README_KURSMODULE.md). Wichtig: Übungen referenzieren als Quelle je nach Inhalt entweder `course/03-course-library` (allgemein) oder `course/01-course-modules` (kursspezifisch).

## Übersicht

Die Tabelle zeigt die aktuell vorhandenen Übungsdateien. Die fachliche Meilenstein-Roadmap steht in [COURSE_MILESTONES.md](../00-course-guides/COURSE_MILESTONES.md). Einige Dateinamen stammen noch aus der vorherigen Meilenstein-Zaehlung und werden bei einer spaeteren Renummerierung nachgezogen.

| Datei | Meilenstein | Titel | Lernziel-Stufe |
| :--- | :--- | :--- | :--- |
| [meilenstein-01-uebung-01.md](meilenstein-01-uebung-01.md) | 1 - Onboarding & Kursstart | GitHub-Konto anlegen und Profil vervollständigen | Must have |
| [meilenstein-01-uebung-02.md](meilenstein-01-uebung-02.md) | 1 - Onboarding & Kursstart | Erstes Repository erkunden und erstellen | Must have |
| [meilenstein-02-uebung-01.md](meilenstein-02-uebung-01.md) | 2 - Setup & Umgebung | Eigenen Lernstand im Terminal verwalten | Must have |
| [meilenstein-02-uebung-02.md](meilenstein-02-uebung-02.md) | 2 - Setup & Umgebung | Terminal-Alltag und Git-Befehle selbstständig anwenden | Should have |
| [meilenstein-02-uebung-03.md](meilenstein-02-uebung-03.md) | 2 - Setup & Umgebung | Routine aufbauen und Lernstand dokumentieren | Nice to have |
| [meilenstein-03-uebung-01.md](meilenstein-03-uebung-01.md) | 3 - Prompting & Context-Engineering | Eigenes PRD erstellen | Must have |
| [meilenstein-03-uebung-02.md](meilenstein-03-uebung-02.md) | 3 - Prompting & Context-Engineering | Erfolgreich prompten | Must have |
| [meilenstein-03-uebung-03.md](meilenstein-03-uebung-03.md) | 3 - Prompting & Context-Engineering | Prompt-Dateien erstellen und nutzen | Should have |
| [meilenstein-03-uebung-04.md](meilenstein-03-uebung-04.md) | 3 - Prompting & Context-Engineering | Kontext-Qualität im Repo verbessern | Should have |
| [meilenstein-04-uebung-01.md](meilenstein-04-uebung-01.md) | 4 - Projekt starten | Von der PRD zur ersten Komponente | Must have |
| [meilenstein-04-uebung-02.md](meilenstein-04-uebung-02.md) | 4 - Projekt starten | KI-Code lesen und gezielt verbessern | Should have |

## Benennung
- meilenstein-XX-Übung-YY.md

## Vorgehen für Lernende
1. **Meilenstein öffnen:** [COURSE_MILESTONES.md](../00-course-guides/COURSE_MILESTONES.md) → Relevant Meilenstein suchen
2. **Module erkunden:** Modul-Einstiege von dort → Für jedes Modul `00-modulguide.md` öffnen → Von dort zu Grundlagen/Befehlsuebersicht und Selbstcheck navigieren
3. **Aufgabe lesen:** [course/02-course-exercises](.) → Aktuelle Übung öffnen
4. **Mit Quellen arbeiten:** Für jede Aufgabe: Quelle (Link zu Modul) klicken → Modul lesen → Aufgabe lösen
5. **Lösen und dokumentieren:** Lösung standardmaessig im eigenen Repo anlegen
   Beispiel für textbasierte Antworten: `Übung-meilenstein-XX-YY.md` im eigenen Repo
6. **Fortschritt eintragen:** Lernjournal in der zentralen Lernfortschrittsdatei im Kurs-Repo aktualisieren
   `course/learners/<name>/lernfortschritt_<name>.md`
7. **Abgabe:** Push + PR im eigenen Repo erstellen und den Stand im Kurs-Repo dokumentieren

## Ablage-Regel
- Die Übungsaufgabe selbst bleibt zentral im Kurs-Repo unter `course/02-course-exercises/`.
- Die eigentliche Bearbeitung und die Artefakte der Lernenden liegen standardmaessig im eigenen Repo.
- Die Lernfortschrittsdatei bleibt zentral im Kurs-Repo unter `course/learners/`, damit Kursueberblick und Dashboard mit einer stabilen Datenquelle arbeiten koennen.

## Standard für neue Übungen

Damit kuenftige Übungen einheitlich und selbstständig bearbeitbar sind, gilt ab sofort:

1. **Vor dem Start:** Jede Übung beginnt mit einer Checkliste mit maximal 3 Punkten zu Umgebung, Werkzeugen und benoetigten Dateien.
2. **Übungsdatei bleibt unverändert:** Direkt nach der Dateiliste steht der Hinweis, dass die Übungsbeschreibung nicht bearbeitet wird und Checklisten in die persönliche Lernfortschrittsdatei kopiert werden.
3. **Quellen direkt an der Aufgabe:** Jeder Aufgabenpunkt bekommt direkt darunter eine klickbare Quelle in `course/03-course-library/` oder `course/01-course-modules/`.
4. **Fehlende Quelle zuerst ergänzen:** Wenn ein Aufgabenpunkt keine passende Quelle hat, wird die passende Lernmaterial- oder Kursmodulebene vor Veroeffentlichung ergaenzt.
5. **Versteckte oder ungewohnte Orte erklären:** Bei `.github/` oder anderen unerwarteten Ordnern steht direkt ein Navigationstipp, z. B. `Strg+P` / `Cmd+P` und Dateiname eintippen.
6. **Temporaere Inhalte begruenden:** Wenn Lernende Inhalte schreiben, die später ersetzt werden, steht der Warum-Hinweis direkt an dieser Stelle.
7. **UI-Interaktionen schrittweise:** Komplexe UI-Aktionen werden nummeriert beschrieben und enthalten einen Fallback-Hinweis.
8. **Git-Status vor Git-Aktion:** Vor jedem `git checkout`-, `git add`- oder `git push`-Block stehen `git status` und `git branch`.
9. **Offene PRs einordnen:** Direkt vor dem ersten `git checkout -b` steht ein Blockzitat mit Option A (vom letzten Branch starten) und Option B (von `main` starten).
10. **Branch-Benennung:** Übungen mit Git-Workflow verwenden `UE-MX-YY-<vorname>`, z. B. `UE-M3-02-<vorname>`. Bei zwei Branches: `UE-MX-YYa-<vorname>` und `UE-MX-YYb-<vorname>`.
11. **Modulabdeckung:** Jede Übung enthält `Modulabdeckung (Check)`.
12. **Wiederholung:** Jede Übung enthält `Wiederholung aus frueheren Meilensteinen` mit Links zu benoetigten Vorkenntnissen.
13. **Abgabe:** Direkt vor den Lernerfolgs-Kriterien steht `Abgabe` mit 2-3 konkreten Checkpunkten.
14. **Lernerfolgs-Kriterien:** Jede Übung endet mit 3-6 beobachtbaren, selbst pruefbaren Kriterien.
15. **Kopier-Hinweis:** `Abgabe` und `Lernerfolgs-Kriterien` beginnen mit einem Blockzitat, das erklärt, dass die Checklisten in `lernfortschritt_<dein-name>.md` kopiert und dort abgehakt werden.

**Warum?** Die Quelle ist nicht nur Referenz, sondern der **primäre Weg zum Verständnis**. Lernende klicken auf die Quelle und verstehen direkt, warum die Aufgabe wichtig ist.

## Ausnahme für reine Browser-Übungen

Reine Browser-Übungen ohne Git-Workflow brauchen keine Branch-Benennung und keinen Status-Check vor Git-Befehlen. Sie brauchen trotzdem Vor-dem-Start-Checkliste, Quellen, Modulabdeckung, Abgabe und Lernerfolgs-Kriterien.

### Formatbeispiel
- Aufgabe: Branch erstellen
- Quelle: [course/03-course-library/04-git/01-git-grundlagen.md](../03-course-library/04-git/01-git-grundlagen.md)
