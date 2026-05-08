# GitHub: Grundlagen und Einstieg

## Was ist GitHub?
GitHub ist eine Plattform zur Versionsverwaltung und Zusammenarbeit an Softwareprojekten. Sie basiert auf dem Versionskontrollsystem Git und ermöglicht es, Code gemeinsam zu entwickeln, zu verwalten und zu veröffentlichen.

## Wofür wird GitHub genutzt?
- **Quellcode-Verwaltung:** Änderungen am Code werden nachvollziehbar gespeichert.
- **Zusammenarbeit:** Teams können gleichzeitig an Projekten arbeiten, Feedback geben und Aufgaben verteilen.
- **Open Source:** Viele Projekte sind öffentlich und laden zur Mitarbeit ein.
- **Dokumentation:** Readme-Dateien, Wikis und Issues helfen beim Wissensaustausch.

## Die wichtigsten Features im Überblick
- **Repositories:** Speicherorte für Projekte und deren Historie
- **Branches:** Parallele Entwicklungszweige für neue Features oder Bugfixes
- **Pull Requests:** Vorschläge für Änderungen, die diskutiert und zusammengeführt werden können
- **Issues:** Aufgaben, Fehler und Ideen verwalten
- **Actions:** Automatisierte Workflows (z. B. Tests, Deployments)

## Pull Request in 5 Schritten erstellen
<!-- HINWEIS: Das Flag [-u] (oder --set-upstream) ist beim ersten Push eines neuen Branches zwingend erforderlich, um die lokale Kopie mit dem Repository auf GitHub zu verknüpfen. Nur so weiß Git bei zukünftigen Befehlen, welcher lokale Branch zu welchem Remote-Branch gehört. -->
1. Stelle sicher, dass dein Branch auf GitHub liegt (`git push origin <branch-name>`). 
2. Oeffne das Repository auf GitHub.
3. Klicke auf "Compare & pull request" oder auf "New pull request".
4. Waehle als Quelle deinen Branch und als Ziel `main`.
5. Schreibe eine kurze PR-Beschreibung (Was wurde gemacht? Warum?) und erstelle den PR.

### PR-Checkliste
- Ist klar beschrieben, was geaendert wurde?
- Sind relevante Dateien und Schritte genannt?
- Ist der Branch korrekt und auf dem aktuellen Stand?

## Warum ist GitHub ideal für Vibe Coding?
- **Kollaboration:** Einfaches gemeinsames Arbeiten und Feedback
- **Transparenz:** Jede Änderung ist nachvollziehbar
- **Automatisierung:** KI- und Workflow-Tools lassen sich leicht integrieren
- **Dokumentation:** Alles an einem Ort – Code, Aufgaben und Wissen

---

**Tipp:**
Mit dem Befehl `git clone <URL>` kannst du ein Repository auf deinen Rechner holen und lokal bearbeiten.
