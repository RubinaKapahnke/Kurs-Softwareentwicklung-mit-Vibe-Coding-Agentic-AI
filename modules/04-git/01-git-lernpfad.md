#
# 🗺️ Lernpfad: Git & GitHub

Dieses Modul führt dich Schritt für Schritt durch die Welt der Versionskontrolle. Arbeite die Meilensteine in deinem eigenen Tempo ab und hake die Punkte ab, sobald du sie verstanden und angewendet hast.

---

## 🛠️ Meilenstein 1: Git Basics & Setup
**Ziel:** Verstehen, warum Versionskontrolle wichtig ist, Git auf dem Rechner einrichten und das erste eigene Projekt starten.

- [ ] **Git installieren und konfigurieren**
  > **Wissen:** Du musst wissen, wie man Git installiert und dein lokales "Namensschild" (Name und E-Mail via `git config`) für zukünftige Änderungen hinterlegt.

- [ ] **Ein lokales Repository initialisieren**
  > **Wissen:** Du lernst, wie man mit `git init` aus einem normalen, leeren Ordner ein Git-Projekt macht, das ab sofort Versionen überwachen kann.

- [ ] **Die drei Bereiche von Git verstehen**
  > **Wissen:** Du musst das Konzept von *Working Directory* (dein Arbeitsordner), *Staging Area* (die Vorbereitungsebene) und *Repository* (das Archiv) verstehen.

---

## 📦 Meilenstein 2: Der tägliche Workflow (Speichern & Tracken)
**Ziel:** Den alltäglichen Entwickler-Workflow beherrschen, um Code-Änderungen sicher und nachvollziehbar abzuspeichern.

- [ ] **Änderungen sammeln (Staging)**
  > **Wissen:** Du wendest den Befehl `git add` an, um bearbeitete Dateien für den nächsten Speicherpunkt vorzubereiten.

- [ ] **Änderungen speichern (Committing)**
  > **Wissen:** Du nutzt `git commit -m "..."`, um die vorbereiteten Änderungen dauerhaft mit einer aussagekräftigen Beschreibung abzuspeichern.

- [ ] **Dateien ignorieren (`.gitignore`)**
  > **Wissen:** Du verstehst, wie man eine `.gitignore`-Datei anlegt, um zu verhindern, dass Passwörter, Systemdateien oder unwichtige Ordner (wie `node_modules`) hochgeladen werden.

- [ ] **Den Verlauf prüfen**
  > **Wissen:** Du weißt, wie man mit `git status` den aktuellen Zustand prüft und mit `git log` die Historie der bisherigen Commits ansieht.

---

## 🌿 Meilenstein 3: Branching & Zusammenführung
**Ziel:** Sicher und isoliert an neuen Funktionen arbeiten können, ohne den Hauptcode (`main`) kaputt zu machen.

---


---

## 🎥 Lernvideos

- [Lernvideo: Git & GitHub Grundlagen (YouTube, deutsch)](https://www.youtube.com/watch?v=uGLQF2kUwOA)
- [Lernvideo: Git & GitHub Crash Course (YouTube, englisch)](https://www.youtube.com/watch?v=twsYxYaQikI&t)

- [ ] **Branches erstellen und wechseln**
  > **Wissen:** Du wendest an, wie man mit `git branch` und `git checkout` (oder `git switch`) isolierte Arbeitsbereiche für neue Features oder Experimente erstellt und zwischen ihnen wechselt.

- [ ] **Branches zusammenführen (Merging)**
  > **Wissen:** Du musst verstehen, wie man abgeschlossene Arbeiten aus einem Feature-Branch mit `git merge` zurück in den Haupt-Branch integriert.

- [ ] **Merge-Konflikte auflösen**
  > **Wissen:** Du lernst, was passiert, wenn zwei Personen dieselbe Zeile Code ändern, und wie man diese Konflikte in VS Code manuell behebt.

---

## ☁️ Meilenstein 4: GitHub & Remote Collaboration
**Ziel:** Dein lokales Projekt mit der Cloud (GitHub) verbinden, um Code zu sichern und mit anderen im Team zusammenzuarbeiten.

- [ ] **Ein Remote-Repository anlegen und verknüpfen**
  > **Wissen:** Du lernst, wie man ein leeres Repository auf GitHub erstellt und es als Remote (`origin`) mit deinem lokalen Projekt verbindet.

- [ ] **Änderungen hoch- und herunterladen**
  > **Wissen:** Du wendest `git push` an, um deine Commits in die Cloud zu laden, und `git pull`, um die neuesten Änderungen von anderen aus der Cloud zu holen.

- [ ] **Bestehende Projekte kopieren (Cloning)**
  > **Wissen:** Du nutzt `git clone`, um ein vollständiges Projekt von GitHub auf deinen eigenen Rechner herunterzuladen.

---

## 🤝 Meilenstein 5: Team-Workflows & Best Practices
**Ziel:** Wie ein Profi in Open-Source-Projekten oder Firmen-Teams arbeiten.

- [ ] **Pull Requests (PR) erstellen**
  > **Wissen:** Du verstehst, wie man auf GitHub einen Pull Request öffnet, um den eigenen Code von anderen Entwicklern überprüfen zu lassen, bevor er gemergt wird.

- [ ] **Code Reviews durchführen**
  > **Wissen:** Du lernst, wie man den Code anderer über die GitHub-Oberfläche kommentiert, Feedback gibt und Änderungen anfordert.

- [ ] **Forking-Workflow anwenden**
  > **Wissen:** Du weißt, was ein "Fork" ist und wie du an Projekten mitarbeiten kannst, bei denen du keine direkten Schreibrechte hast.

---

## ⏪ Meilenstein 6: Fehler beheben (Undoing Changes)
**Ziel:** Keine Panik bei Fehlern! Lernen, wie man in Git einen Schritt zurückgeht.

- [ ] **Commits ungeschehen machen**
  > **Wissen:** Du kennst den Unterschied zwischen `git revert` (erstellt einen neuen Commit, der den alten rückgängig macht) und `git reset` (löscht die Historie).

- [ ] **Änderungen kurzzeitig parken**
  > **Wissen:** Du lernst, wie man mit `git stash` unfertige Änderungen "in die Schublade" legt, um kurz den Branch zu wechseln, und sie später wieder herausholt.