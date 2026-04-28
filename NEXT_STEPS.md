# 🗺️ Next Steps: Roadmap zum Progress-Hub

Dieses Dokument ist dein interaktiver Fahrplan. Arbeite die Schritte nacheinander ab. Die Erklärungen und Modul-Verweise unter den Aufgaben helfen dir bei der technischen Umsetzung.

---

## ✅ Meilenstein 1: Vibe Coding Basics (Bereits gelernt)
**Ziel:** Die Werkzeuge beherrschen, bevor wir das Haus bauen. (Diese Punkte hast du dir bereits im ersten Übungs-Repo angeeignet).

- [x] **Markdown sicher anwenden**
  > **Wissen:** Du weißt, wie man strukturierte und saubere Dokumentationen für Menschen und KI schreibt.
  

- [x] **VS Code Grundlagen beherrschen**
  > **Wissen:** Du kennst dich in der Entwicklungsumgebung aus und weißt, wie man Dateien bearbeitet und speichert.
  

- [x] **Git & GitHub Konzepte verstanden haben**
  > **Wissen:** Du weißt, was ein Repository ist, wie Versionierung funktioniert und wie man isolierte Arbeitsbereiche (Branches) nutzt.
  

---

## 🛠️ Meilenstein 2: Setup & Umgebung (Unser neues Projekt)
**Ziel:** Das frische Repository lokal einrichten und das Terminal als neues Werkzeug kennenlernen.

- [x] **Repository lokal einrichten**
  > **Wissen:** Du musst anwenden, wie man ein Projekt von GitHub auf den Rechner kopiert und dir für deine anstehende Arbeit einen eigenen Branch erstellst.
  
  - [ ] Terminal in VS Code finden und öffnen
  - [ ] Grundlagen der Terminal-Nutzung lernen
  - [ ] Prüfen, ob Git installiert ist (`git --version`)
  - [ ] Ggf. Git installieren und lokales "Namensschild" (E-Mail/Name) anlegen
  - [ ] HTTPS-URL des Repositories auf GitHub kopieren
  - [ ] Projekt mit dem Befehl `git clone` in das Terminal herunterladen
  - [ ] Den neu erstellten Projektordner in VS Code öffnen (`Datei` -> `Ordner öffnen`)

- [ ] **Persönlichen Arbeitsbereich anlegen**
  > **Wissen:** Du musst wissen, wie man einen eigenen Git-Branch erstellt, über das Terminal navigiert und Ordnerstrukturen anlegt.
  
  - [ ] Eigenen Arbeits-Branch für deine Änderungen erstellen (z. B. `git checkout -b feature/setup-deinname`)
  - [ ] Im Terminal in den bestehenden Ordner `apps/learners/` navigieren (`cd apps/learners/`)
  - [ ] Einen neuen, eigenen Ordner im Format `vorname-nachname` erstellen (`mkdir ...`)
  - [ ] In deinen gerade erstellten Ordner wechseln (`cd ...`)

- [ ] **Erstes Logbuch erstellen & Änderungen synchronisieren**
  > **Wissen:** Du wendest den Git-Workflow an, um Dateien zu erstellen und deinen Fortschritt das erste Mal in dieses neue Repo zu pushen.
  
  - [ ] Eine neue Datei namens `LOG.md` in deinem Ordner anlegen
  - [ ] Die "Vorlage für dein persönliches Logbuch" (ganz unten in diesem Dokument) hineinkopieren
  - [ ] Deine bereits erledigten Aufgaben in deiner `LOG.md` mit einem `[x]` abhaken und die Datei speichern
  - [ ] Alle Änderungen für Git einsammeln (`git add .`)
  - [ ] Die Änderungen mit einer Nachricht bestätigen (`git commit -m "feat: initial setup"`)
  - [ ] Deinen Branch in die Cloud hochladen (`git push origin [dein-branch-name]`)
  - [ ] *Ggf. den VS Code GitHub-Login im Browser bestätigen, falls das Pop-up erscheint*

## 🏗️ Meilenstein 3: Anforderungen & Context-Engineering
**Ziel:** Den KI-Assistenten präzise instruieren und den Rahmen für das Vibe Coding schaffen.

- [ ] **Individuelle Lern-Spezifikation (PRD) schreiben**
  > **Wissen:** Du musst verstehen, wie man Anforderungen so formuliert, dass eine KI sie als präzisen Kontext nutzen kann.
  
  - [ ] Die Grundlagen von gutem Prompting und das "Kontext-Fenster" verstehen
  - [ ] Die übergeordnete Basis-Spezifikation (`prd_dashboard.md`) als Kontext im Copilot Chat referenzieren
  - [ ] Die KI mit einem gezielten Prompt bitten, eine detaillierte Spezifikation (PRD) für deine eigene Profil-Karte zu erstellen
  - [ ] Das von der KI generierte PRD prüfen, ggf. iterativ anpassen ("viben") und in deinem Ordner als `.md` Datei speichern

- [ ] **Lernziele in `goals.json` definieren**
  > **Wissen:** Du musst verstehen, wie Daten strukturiert werden (JSON), damit die App sie später automatisch auslesen und darstellen kann.
  
  - [ ] Verstehen, warum strukturierte, maschinenlesbare Daten als Kontext wichtig sind
  - [ ] Eine neue Datei namens `goals.json` in deinem Ordner anlegen
  - [ ] Deine persönlichen Lernziele (ggf. mit Hilfe der KI) im korrekten JSON-Format eintragen
  - [ ] Deinen Fortschritt im Logbuch abhaken
  - [ ] Die neuen Dateien mit Git speichern und hochladen (`git add .`, `git commit`, `git push`)