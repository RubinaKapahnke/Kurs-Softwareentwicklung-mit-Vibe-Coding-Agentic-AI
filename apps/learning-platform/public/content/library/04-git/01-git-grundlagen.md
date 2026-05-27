# Git: Grundlagen und Einstieg

Dieser Artikel erklärt die Grundidee von Git und den typischen Arbeitsablauf im Kurs. Für einzelne Befehle zum schnellen Nachschlagen ist die [Git-Befehlsübersicht](./03-git-befehlsuebersicht.md) gedacht.

## Was ist Git?
Git ist ein Versionskontrollsystem. Es speichert nicht einfach nur Dateien, sondern nachvollziehbare Zwischenstände eines Projekts. Dadurch kannst du Änderungen später verstehen, vergleichen und bei Bedarf sauber rückgängig machen.

## Wofür wird Git im Kurs genutzt?
- **Änderungen nachvollziehen:** Du siehst, was sich zwischen zwei Arbeitsständen geändert hat.
- **Sicher zusammenarbeiten:** Mehrere Personen können parallel arbeiten, ohne direkt dieselben Dateien auf `main` zu verändern.
- **Kleine Lektionen festhalten:** Mit Commits dokumentierst du bewusst, was du gemacht hast und warum.

## Das Arbeitsmodell von Git
Git arbeitet im Alltag mit drei Bereichen:

1. **Arbeitsordner:** Hier bearbeitest du Dateien.
2. **Staging Area:** Hier sammelst du die Änderungen, die in den nächsten Commit sollen.
3. **Repository:** Hier liegt die gespeicherte Historie deiner Commits.

Ein typischer Denkfehler am Anfang ist: Datei speichern ist noch kein Git-Commit. Erst `git add` und `git commit` machen aus einer Änderung einen nachvollziehbaren Projektstand.

## Der Grundablauf im Alltag
Ein sicherer Standardablauf sieht so aus:

1. Mit `git status` prüfen, was gerade los ist.
2. Dateien gezielt ändern.
3. Mit `git add` festlegen, was in den nächsten Commit soll.
4. Mit `git commit -m "..."` den Stand speichern.
5. Mit `git push` den Stand auf GitHub hochladen.

Wenn du den Überblick verlierst, ist `git status` fast immer der beste erste Schritt.

## Branches: sicher getrennt arbeiten
Branches sind getrennte Arbeitslinien. Im Kurs arbeitest du nicht direkt auf `main`, sondern in deinem eigenen Branch. Das hat zwei Vorteile:

- Du kannst etwas ändern, ohne sofort den Hauptstand zu beeinflussen.
- Dein Arbeitsstand lässt sich über einen Pull Request sauber prüfen und zusammenführen.

Praktisch bedeutet das: neuen Branch erstellen, darin arbeiten, Commit(s) machen, pushen und anschließend einen PR erstellen.

## Remotes und GitHub
Dein lokales Repository liegt auf deinem Rechner. GitHub ist die entfernte Version davon. Die wichtigsten Bewegungen sind:

- `git clone`: ein bestehendes Repository herunterladen
- `git pull`: neue Änderungen aus dem Remote holen
- `git push`: lokale Commits zum Remote hochladen

Git allein ist also die lokale Versionskontrolle. GitHub kommt dazu, wenn du teilen, sichern oder im Team arbeiten willst.

## Sichere Rückwege bei Fehlern
Fehler passieren ständig. Wichtig ist nicht, sie zu vermeiden, sondern sauber damit umzugehen.

- Mit `git status` findest du heraus, wo du gerade stehst.
- Mit `git log` siehst du frühere Commits.
- Mit `git revert` kannst du einen commit-basierten Rückschritt sicher dokumentieren.
- Mit `git stash` kannst du unfertige Änderungen kurz parken.

Eher vorsichtig solltest du mit Befehlen umgehen, die Historie überschreiben. Wenn du nicht sicher bist, arbeite lieber mit den sicheren Standardbefehlen aus diesem Artikel.

## Wie du diesen Artikel nutzen solltest
- Starte hier in den Grundlagen, wenn du das Denken hinter Git verstehen willst.
- Nutze danach die [Git-Befehlsübersicht](./03-git-befehlsuebersicht.md), wenn du einen konkreten Befehl brauchst.
- Verwende den [Wissensziele-Abschnitt im Git-Artikel](./00-was-ist-git.md), um deinen Stand einzuordnen.
- Lies [Version Control und GitOps: Grundlagen](./04-version-control-und-gitops-grundlagen.md), wenn du die nächste Ebene zwischen Entwicklungs- und Betriebsworkflow verstehen willst.

