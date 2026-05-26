<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 02-github-erste-schritte.md -->

# Lektion 02: GitHub – Erste Schritte

## Ziel

Du verstehst, wofür GitHub genutzt wird, und hast dein eigenes Übungs-Repository erfolgreich erstellt.

## Kapitel 1: Git, GitHub, Repository

### Was ist GitHub

GitHub ist eine Plattform im Web, auf der du Code speichern, versionieren und teilen kannst.

Du kannst dir GitHub wie einen zentralen Ort vorstellen, an dem Projekte nicht nur abgelegt, sondern auch sauber organisiert werden. Statt Dateien einfach hin und her zu schicken, arbeitest du in einem Repository mit klarer Historie. Jeder wichtige Stand deiner Arbeit kann nachvollzogen werden.

### Was ist Git?

GitHub basiert auf Git. Git ist das technische Werkzeug für Versionskontrolle, GitHub ist die Plattform darum herum: mit Weboberfläche, Kollaboration und Überblick über Änderungen.
# Lektion 02: GitHub-Arbeitsbereich einrichten

## Ziel

Du legst dein eigenes Übungs-Repository an und kannst Git, GitHub und Repository im Kurskontext sicher unterscheiden, damit du im weiteren Kurs einen klaren eigenen Arbeitsbereich hast und Aufgaben, Änderungen und Zusammenarbeit sauber einordnen kannst.



## Git, GitHub und Repository im Kurs


### Was Git ist

Git ist das Werkzeug für Versionskontrolle. 

Das bedeutet: Git merkt sich, was sich an Dateien geändert hat, wann die Änderung passiert ist und mit welcher kurzen Beschreibung sie gespeichert wurde.

So entsteht eine nachvollziehbare Historie statt vieler unsortierter Dateistände wie `final`, `final-neu`, `final-wirklich-final`.

### Was GitHub ist

GitHub ist die Plattform im Web, auf der Git-Repositories liegen und gemeinsam genutzt werden.

Du kannst GitHub als den gemeinsamen Arbeitsraum sehen: Dort sind Projekte sichtbar, Änderungen können geprüft werden und Zusammenarbeit wird organisiert.

Kurz gesagt: Git ist das Versions-Werkzeug, GitHub ist die Plattform für Zusammenarbeit mit diesem Werkzeug.

### Was ein Repository im Kurs ist

Ein Repository ist dein Projektbereich.

Im Kurs gibt es zwei Rollen:

- dein eigenes Übungs-Repository für deine Arbeit,
- das gemeinsame Kurs-Repository für Materialien, Aufgaben und Updates.

### Wie die drei Begriffe zusammenarbeiten

Ein einfaches Modell für den Kursalltag:

- Du bearbeitest Dateien in einem Repository.
- Git speichert deine Änderung als nachvollziehbaren Stand.
- GitHub zeigt diesen Stand im Web und macht Zusammenarbeit möglich.

### Konkretes Beispiel aus deinem Kursablauf

1. Du ergänzt die `README.md` in deinem Übungs-Repository.
2. Du speicherst die Änderung als Commit.
3. Auf GitHub siehst du die neue Version, die Commit-Nachricht und die Historie.

Genau dieses Muster wiederholt sich später bei Übungen, Code, Reviews und Teamarbeit.

### Warum du das jetzt brauchst und später weiter brauchst

Jetzt brauchst du das eigene Repository als Arbeitsbereich für die nächsten Lektionen im Onboarding.

Später brauchst du dieselben Grundlagen für Versionierung, Reviews, Zusammenarbeit und für einen professionell nachvollziehbaren Entwicklungsprozess.

![Git vs. Github](/content/Assets/m01l02_git-vs-github.png)

## Eigenes Übungs-Repository anlegen

### Warum du das jetzt anlegst

Dein Übungs-Repository ist dein eigener Bereich auf GitHub. Dort sammelst du Übungen, Notizen, Lösungen und später auch Code.

Damit trennst du deine Arbeit klar vom Kurs-Repository. Genau diese Trennung ist auch in echten Projekten üblich.

### Lektion für Lektion: Neues Repository erstellen

1. Öffne [github.com/new](https://github.com/new) oder wähle auf GitHub `New repository`.
2. Vergib einen Namen, zum Beispiel `kurs-uebungen-vorname-nachname`.
3. Ergänze optional eine kurze Beschreibung.
4. Wähle bei Sichtbarkeit `Private`.
5. Aktiviere `Add a README file`.
6. Lasse `.gitignore` und `License` zunächst unverändert.
7. Klicke auf `Create repository`.

![Repository anlegen](/content/Assets/m01-l03-gh-06-repository-anlegen.png)
![Repository anlegen](/content/Assets/m01-l03-gh-07-repository-benennen.png)
![Repository anlegen](/content/Assets/m01-l03-gh-09create-repository-visibility.png)
![Repository erstellen mit Name, Private und README](/content/Assets/m01-l03-gh-10create-repository-create.png)

### Woran du erkennst, dass es geklappt hat

- Der Repository-Name ist oben sichtbar.
- Eine Datei namens `README.md` ist vorhanden.
- Die URL sieht ungefähr so aus:

```text
https://github.com/<dein-benutzername>/kurs-uebungen-vorname-nachname
```

![Repository erstellen mit Name, Private und README](/content/Assets/m01-l03-gh-11-new-repository.png)

### Wichtige Detailentscheidung beim Namen

Verwende im Repository-Namen besser keine Umlaute.

GitHub unterstützt sie oft, aber URLs, Terminal-Befehle und andere Werkzeuge arbeiten robuster mit `ae`, `oe`, `ue` und Bindestrichen.

## Erste Änderung direkt im Browser speichern

### Warum du die README direkt bearbeitest

Die `README.md` ist die Startseite deines Repositorys.

Jetzt brauchst du sie, um den Arbeitsbereich sichtbar zu personalisieren.
Später brauchst du sie, um Projekte knapp und verständlich zu dokumentieren.

### Lektion für Lektion: README anpassen und speichern

1. Öffne in deinem Repository die Datei `README.md`.
2. Ergänze eine Überschrift.
3. Schreibe 2 bis 4 Sätze, was du in diesem Repository sammelst.
4. Ergänze eine kurze Liste, zum Beispiel `Notizen`, `Übungen`, `Lösungen`.
5. Klicke auf `Commit changes`.
6. Trage eine kurze Commit-Nachricht ein, zum Beispiel `README ergänzt`.
7. Bestätige den Commit.

![Übung 1: README im Bearbeitungsmodus](/content/Assets/m01-l02-uebung-01-readme-bearbeiten.png)
![Übung 1: README mit Commit changes speichern](/content/Assets/m01-l02-uebung-01-readme-commit-changes.png)

### Was ein Commit an dieser Stelle bedeutet

Ein Commit ist ein gespeicherter Zwischenstand mit einer kurzen Beschreibung.

Du brauchst dieses Grundprinzip ab jetzt ständig. Später arbeiten wir genauer daran, wie gute Commits formuliert und strukturiert werden.

## Quiz: Verständnis-Check zu GitHub im Kurs

Frage: Welche Aussagen treffen für den Kurskontext zu?
Mehrfachauswahl: ja

- [x] Git speichert Versionsstände von Dateien.
- [x] GitHub ist die Plattform im Web, auf der deine Repositories liegen.
- [x] Dein eigenes Übungs-Repository ist dein Arbeitsbereich für Übungen, Notizen und Lösungen.
- [ ] Ein Repository ist im Kurs nur eine einzelne Datei.

Erfolg: Korrekt. Du unterscheidest Werkzeug, Plattform und Arbeitsbereich sauber.
Fehler: Prüfe noch einmal die Rollen von Git, GitHub und Repository. Die Unterscheidung brauchst du im gesamten Kurs.

## Was ist zu tun

1. Lege dein privates Übungs-Repository an.
2. Prüfe Name, Sichtbarkeit und URL.
3. Bearbeite die `README.md` direkt im Browser.
4. Speichere die Änderung mit einem ersten Commit.
5. Prüfe, ob der Commit in der Historie sichtbar ist.

## Hilfreiche Links

- [GitHub Docs (Deutsch)](https://docs.github.com/de)
- [GitHub Docs: Repositories](https://docs.github.com/de/repositories)
- [GitHub Docs: Profil einrichten](https://docs.github.com/de/get-started/start-your-journey/setting-up-your-profile)


- **Offizielle Dokumentation**: Alles, was du über GitHub wissen musst, steht in den [GitHub Docs](https://docs.github.com/de) (auf Deutsch verfügbar, durchsuchbar und sehr gut strukturiert). Ein zuverlässiger Nachschlageort für den gesamten Kurs.
