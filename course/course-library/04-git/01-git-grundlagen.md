# Git: Grundlagen und Einstieg

Dieses Dokument erklaert die Grundidee von Git und den typischen Arbeitsablauf im Kurs. Fuer einzelne Befehle zum schnellen Nachschlagen ist die [Git-Befehlsuebersicht](./03-git-befehlsuebersicht.md) gedacht.

## Was ist Git?
Git ist ein Versionskontrollsystem. Es speichert nicht einfach nur Dateien, sondern nachvollziehbare Zwischenstaende eines Projekts. Dadurch kannst du Aenderungen spaeter verstehen, vergleichen und bei Bedarf sauber rueckgaengig machen.

## Wofuer wird Git im Kurs genutzt?
- **Aenderungen nachvollziehen:** Du siehst, was sich zwischen zwei Arbeitsstaenden geaendert hat.
- **Sicher zusammenarbeiten:** Mehrere Personen koennen parallel arbeiten, ohne direkt dieselben Dateien auf `main` zu veraendern.
- **Kleine Schritte festhalten:** Mit Commits dokumentierst du bewusst, was du gemacht hast und warum.

## Das Arbeitsmodell von Git
Git arbeitet im Alltag mit drei Bereichen:

1. **Arbeitsordner:** Hier bearbeitest du Dateien.
2. **Staging Area:** Hier sammelst du die Aenderungen, die in den naechsten Commit sollen.
3. **Repository:** Hier liegt die gespeicherte Historie deiner Commits.

Ein typischer Denkfehler am Anfang ist: Datei speichern ist noch kein Git-Schritt. Erst `git add` und `git commit` machen aus einer Aenderung einen nachvollziehbaren Projektstand.

## Der Grundablauf im Alltag
Ein sicherer Standardablauf sieht so aus:

1. Mit `git status` pruefen, was gerade los ist.
2. Dateien gezielt aendern.
3. Mit `git add` festlegen, was in den naechsten Commit soll.
4. Mit `git commit -m "..."` den Stand speichern.
5. Mit `git push` den Stand auf GitHub hochladen.

Wenn du den Ueberblick verlierst, ist `git status` fast immer der beste erste Schritt.

## Branches: sicher getrennt arbeiten
Branches sind getrennte Arbeitslinien. Im Kurs arbeitest du nicht direkt auf `main`, sondern in deinem eigenen Branch. Das hat zwei Vorteile:

- Du kannst etwas aendern, ohne sofort den Hauptstand zu beeinflussen.
- Dein Arbeitsstand laesst sich ueber einen Pull Request sauber pruefen und zusammenfuehren.

Praktisch bedeutet das: neuen Branch erstellen, darin arbeiten, Commit(s) machen, pushen und anschliessend einen PR erstellen.

## Remotes und GitHub
Dein lokales Repository liegt auf deinem Rechner. GitHub ist die entfernte Version davon. Die wichtigsten Bewegungen sind:

- `git clone`: ein bestehendes Repository herunterladen
- `git pull`: neue Aenderungen aus dem Remote holen
- `git push`: lokale Commits zum Remote hochladen

Git allein ist also die lokale Versionskontrolle. GitHub kommt dazu, wenn du teilen, sichern oder im Team arbeiten willst.

## Sichere Rueckwege bei Fehlern
Fehler passieren staendig. Wichtig ist nicht, sie zu vermeiden, sondern sauber damit umzugehen.

- Mit `git status` findest du heraus, wo du gerade stehst.
- Mit `git log` siehst du fruehere Commits.
- Mit `git revert` kannst du einen commit-basierten Rueckschritt sicher dokumentieren.
- Mit `git stash` kannst du unfertige Aenderungen kurz parken.

Eher vorsichtig solltest du mit Befehlen umgehen, die Historie ueberschreiben. Wenn du nicht sicher bist, arbeite lieber mit den sicheren Standardbefehlen aus diesem Modul.

## Wie du dieses Modul nutzen solltest
- Starte hier in den Grundlagen, wenn du das Denken hinter Git verstehen willst.
- Nutze danach die [Git-Befehlsuebersicht](./03-git-befehlsuebersicht.md), wenn du einen konkreten Befehl brauchst.
- Verwende den [Selbstcheck im Git-Modulguide](./00-git-modulguide.md), um deinen Stand einzuordnen.
- Lies [Version Control und GitOps: Grundlagen](./04-version-control-und-gitops-grundlagen.md), wenn du die naechste Ebene zwischen Entwicklungs- und Betriebsworkflow verstehen willst.
