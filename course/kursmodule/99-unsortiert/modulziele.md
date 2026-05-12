# Kursmodul 01: Arbeitsumgebung, Dokumentation & Versionsverwaltung

## Kurzbeschreibung

Dieses Kursmodul befähigt Teilnehmende, eine arbeitsfähige Entwicklungsumgebung einzurichten, Projektdokumentation versionierbar zu schreiben und Änderungen nachvollziehbar über GitHub zu teilen.

## Nach diesem Kursmodul können Teilnehmende

- VS Code für Kurs- und Projektarbeit nutzen
- Markdown-Dateien strukturiert schreiben
- GitHub und Git für Versionierung anwenden
- erste Produkt- oder Projektdokumentation versionierbar ablegen
- Dokumentation so schreiben, dass Menschen und KI sie als Kontext nutzen können

## Praxisartefakt

Eine versionierte Projektbeschreibung oder Produktdokumentation im Repository mit mindestens einem nachvollziehbaren Commit oder Pull Request.

## Rollenbezug

Relevant für Einsteiger\*innen, Product Owner, Projektmanager\*innen, Fachbereich, Consultants, Technical Writer, Team Leads, Entwickler\*innen, QA und Operations.

## Quellen aus der Lernmaterial-Sammlung

- [Markdown Modulguide](../../course-library/01-markdown/00-markdown-modulguide.md)
- [VS Code Modulguide](../../course-library/02-vscode/00-vscode-modulguide.md)
- [GitHub Modulguide](../../course-library/03-github/00-github-modulguide.md)
- [Git Modulguide](../../course-library/04-git/00-git-modulguide.md)

## Kursspezifische GitHub-Dateien in diesem Kursmodul

- [01-github-im-kurs.md](./01-github-im-kurs.md)
- [02-github-konto-profil-und-collaborator-aufgabe.md](./02-github-konto-profil-und-collaborator-aufgabe.md)
- [03-github-features-repositories-und-readme-vorlage.md](./03-github-features-repositories-und-readme-vorlage.md)
- [README-template-tn-repo.md](./README-template-tn-repo.md)

## Abschlussnachweis

Der Baustein gilt als abgeschlossen, wenn eine eigene Dokumentationsdatei erstellt, versioniert und über GitHub nachvollziehbar geteilt wurde.

## Eigenständig nutzbar als

Setup-Workshop, Dokumentations-Enablement, Git/GitHub-Grundlagentraining oder Einstieg in KI-lesbare Projektdokumentation.

# Lektionen

## Onboarding

### Start in GitHub
* Was ist GitHub und wie verwenden wir es im Kurs
    - GitHub als Plattform: Code, Dokumentation und Zusammenarbeit in einem Ort
    - Der Unterschied zwischen GitHub (Plattform) und Git (Werkzeug)
    - Wie GitHub im Kurs eingesetzt wird
* GitHub Konto und Profil
    - Persönliches Konto anlegen
        - Registrierung auf github.com
        - E-Mail-Adresse bestätigen
        - Benutzername wählen (bleibt sichtbar in Commits)
    - Profil einrichten
        - Profilbild und Anzeigename
        - Bio und Standort (optional)
    - Kontotypen (optional, zur Orientierung)
        - Organisationskonten - für Teams und Unternehmen
        - Unternehmenskonten - für große Organisationen
        - Benutzerverwaltung in Organisationen
* Aufgabe: GitHub-Konto anlegen, Profil vervollständigen, Dozent\*in als Collaborator einladen
* GitHub Features für diesen Kurs
    - Repositories - wo Dateien und Verlauf gespeichert werden
    - Branches - parallele Arbeitsstände
    - Pull Requests - Änderungen vorschlagen und besprechen
    - Issues - Aufgaben und Rückmeldungen festhalten
    - Actions (Erwähnung, kein Tiefgang im Einstieg)
* Repositories verstehen und nutzen
    - Was sind Repositories und wofür verwendet man sie?
        - Projektordner mit vollständiger Versionsgeschichte
        - Öffentlich vs. privat
    - Ein bestehendes Repository erkunden
        - Code-Tab, Commits, Branches
        - README lesen
        - Dateiverlauf (`History`) einer Datei ansehen
    - Ein neues Repository erstellen
        - Name, Beschreibung, Sichtbarkeit wählen
        - Mit README initialisieren
        - `.gitignore` und Lizenz hinzufügen (optional)
    - Zugriff auf Repositories
        - Collaborators einladen
        - Leserechte vs. Schreibrechte
    - Aus einer Vorlage erstellen (Template Repositories)
    - Repository klonen - Verbindung zwischen GitHub und lokalem Rechner
    - Weitere Verwaltungsoptionen (umbenennen, löschen, übertragen)
* Übung: Eigenes Repo anlegen, Dozent\*in einladen 
* Dateien direkt auf GitHub bearbeiten
    - Neue Datei anlegen über die GitHub-Oberfläche
    - Bestehende Datei bearbeiten (Stift-Icon)
    - Commit-Nachricht direkt beim Speichern verfassen
        - Kurzform vs. erweiterte Beschreibung
        - Direkt in `main` committen vs. neuen Branch erstellen
    - Dateiverlauf einer Datei ansehen
* Übung: erste eigene Datei direkt auf GitHub anlegen und mit einer Commit-Nachricht speichern

---
## Dokumentation mit Markdown

### Was ist Markdown?
* Markdown als leichtgewichtige Dokumentationssprache
    - Warum Markdown statt Word oder PDF?
    - Wie GitHub Markdown rendert
    - Anwendungsmöglichkeiten und gängige Use Cases für Markdown außerhalb KI
    - Markdown und KI: warum KI-Assistenten Markdown als Kontext verstehen
    * Übung: Formatierungen in Markdown anwenden
---

## Einstieg Versionskontrolle mit git

### git Grundlagen
* Was ist Versionkontrolle
* Warum Versionskontrolle
* git vs. andere VCS
* git lokal installieren
* git SSH KEY
- Was ist ein git SSH Key?
- Wie legt man einen SSH Key an?
- SSH Key Windows, Mac und Linux
* git archive
* gitOps
- Was ist gitOps?


### VS Code einrichten
* Was ist VS Code und warum nutzen wir es im Kurs
    - Ein Editor, der Code, Dokumentation, Terminal und KI-Assistenz verbindet
    - Warum nicht direkt auf GitHub arbeiten? Was VS Code zusätzlich bietet
    - VS Code vs. andere Editoren (kurze Einordnung)
* Orientierung im Interface
    - Explorer (Dateibaum links) - Dateien und Ordner des Projekts
    - Editor-Bereich (Mitte) - Dateien öffnen, bearbeiten, Tabs
    - Integriertes Terminal (unten) - Git-Befehle direkt im Editor ausführen
    - Statusleiste (unten) - aktueller Branch, Fehlermeldungen, Git-Status
    - Befehlspalette öffnen und nutzen
        - Windows/Linux: `Ctrl+Shift+P`
        - Mac: `Cmd+Shift+P`
        - Häufige Aktionen über die Befehlspalette starten
    - Schnelles Dateiöffnen
        - Windows/Linux: `Ctrl+P`
        - Mac: `Cmd+P`
* Das Repository lokal öffnen
    - Was bedeutet „lokal"? - der Unterschied zwischen GitHub (remote) und eigenem Rechner (lokal)
    - `git clone <URL>` im Terminal ausführen
        - HTTPS-URL aus GitHub kopieren
        - Zielordner auf dem Rechner wählen
    - Geklonten Ordner in VS Code öffnen
        - Über Menü: File → Open Folder
        - Über Terminal: `code .`
    * Übung: Kurs-Repository klonen und in VS Code öffnen
* Wichtige Erweiterungen für den Kurs
    - GitHub Copilot - KI-Autovervollständigung im Editor
    - GitHub Copilot Chat - Konversations-KI direkt in VS Code
        - Chat öffnen (Copilot-Icon in der Seitenleiste)
        - Eine erste Frage stellen
        - Dateien als Kontext hinzufügen mit `#`
        - Prompt-Dateien aufrufen mit `/`
    - Empfohlene weitere Erweiterungen (Markdown Preview, GitLens)
    * Übung: Copilot Chat öffnen, eine Frage zur aktuellen Datei stellen

---

### Grundlegende Formatierung
* Textelemente
    - Überschriften: `#`, `##`, `###`
    - Fließtext und Absätze
    - Fettschrift `**text**`, Kursiv `*text*`, Inline-Code `` `code` ``
* Strukturelemente
    - Aufzählungslisten (`-` oder `*`)
    - Nummerierte Listen
    - Verschachtelte Listen
    - Links: `[Linktext](URL)`
    - Bilder: `![Alt-Text] plus Dateipfad`
* Fortgeschrittene Elemente
    - Tabellen
    - Code-Blöcke mit Sprachangabe (` ```python `, ` ```json `)
    - Horizontale Trennlinie `---`
    * Übung: eine eigene README-Datei im Lernfortschritt-Ordner anlegen und mit Markdown formatieren

### Strukturierte Projektdokumentation
* Was macht gute Dokumentation aus?
    - Lesbar für Menschen und KI
    - Klare Abschnitte mit Überschriften
    - Links statt wiederholter Texte
* Dokumentation im Repository-Kontext
    - README-Dateien (Root, Unterordner)
    - Wann schreibt man was in welche Datei?
    * Übung: Praxisartefakt - eigene Projektbeschreibung oder Produktbeschreibung anlegen und versioniert speichern

---

## Versionsverwaltung mit Git

### Was ist Git?
* Git vs. GitHub - der Unterschied
    - Git: lokales Versionskontrollsystem
    - GitHub: Plattform zum Teilen und Zusammenarbeiten
* Die drei Bereiche in Git
    - Arbeitsordner (Working Directory)
    - Staging Area (Index)
    - Repository (History)
* Grundbegriffe
    - Commit, Branch, Remote, Clone, Push, Pull

### Änderungen erfassen und speichern
* Status und Überblick behalten
    - `git status` - was hat sich verändert?
    - `git log --oneline` - was wurde zuletzt committed?
* Änderungen stagen und committen
    - `git add <datei>` / `git add .`
    - `git commit -m "Kurze, klare Commit-Nachricht"`
    - Gute Commit-Nachrichten schreiben
* Änderungen auf GitHub hochladen
    - `git push`
    * Übung: eine Datei anlegen, stagen, committen und pushen

### Mit Branches arbeiten
* Warum Branches?
    - Änderungen isolieren ohne den Hauptstand zu gefährden
    - Typischer Branch-Workflow im Kurs
* Branches erstellen und wechseln
    - `git checkout -b <branchname>`
    - `git branch` - welche Branches gibt es?
    - `git checkout <branchname>` - Branch wechseln
* Änderungen zusammenführen
    - Pull Request auf GitHub öffnen
    - Review und Merge
    - Branch nach dem Merge aufräumen (lokal + remote)
    * Übung: eigenen Branch anlegen, Änderung committen, Pull Request öffnen und mergen

### Stand aktuell halten
* Vor jeder Aufgabe synchronisieren
    - `git pull origin main`
* Häufige Situationen
    - Was tun, wenn `git pull` Konflikte meldet?
    - `.gitignore` - welche Dateien soll Git ignorieren?
