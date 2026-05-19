<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: lektion-03-github-repositories-verstehen/lektion-inhalte.md -->

# Lektion 03: GitHub-Repositories und Git verstehen

## Ziel

Du verstehst, wie wir GitHub im Kurs nutzen, was Repositories sind und warum Git die Basis für Versionskontrolle ist.

## GitHub im Kurskontext

GitHub ist in diesem Kurs die gemeinsame Plattform für Zusammenarbeit an Dateien, nachvollziehbare Änderungen und den Austausch über Aufgaben und Feedback.

### GitHub und Git: kurz unterschieden

- Git ist das lokale Versionskontrollsystem.
- GitHub ist die Online-Plattform für Repositories und Teamarbeit.

## Was ist ein Version Control System?

Ein Version Control System ist ein Werkzeug, das Änderungen an Dateien speichert und nachvollziehbar macht.

### Einfach erklärt

Stell dir vor, du arbeitest an einem Dokument und willst später sehen, was sich geändert hat. Ein Version Control System merkt sich diese Zwischenstände für dich. So kannst du alte Stände wiederfinden, Fehler leichter zurücknehmen und Schritt für Schritt arbeiten.

### Wofuer ist ein Version Control System gedacht?

1. Du speicherst Änderungen nicht nur im aktuellen Stand, sondern mit Verlauf.
2. Du kannst frühere Versionen wieder ansehen oder wiederherstellen.
3. Du erkennst, wer was wann geändert hat.
4. Du arbeitest sicher an neuen Ideen, ohne den Hauptstand zu verlieren.
5. Im Team wird Zusammenarbeit kontrollierbar und nachvollziehbar.

### Warum ist das im Kurs wichtig?

- Du kannst kleine Lernschritte sauber festhalten.
- Du kannst Fehler rückgängig machen, ohne alles neu zu beginnen.
- Dozentinnen und Dozenten können deinen Fortschritt besser nachvollziehen.
- Git ist das Version Control System, mit dem wir hier praktisch arbeiten.

### So nutzen wir GitHub im Kurs

1. Das Kurs-Repository enthält zentrale Materialien und Übungen.
2. Teilnehmende arbeiten zusätzlich im eigenen Übungs-Repository.
3. Dozentinnen und Dozenten geben Feedback über GitHub.

## Repositories verstehen

Ein Repository ist der gemeinsame Ort für Dateien und die komplette Versionsgeschichte. Im Kurs arbeiten wir sowohl mit dem Kurs-Repository als auch mit deinem eigenen Übungs-Repository.

### Repositories im Kurs

- Kurs-Repository: zentrale Materialien, Module und Übungen
- Eigenes Übungs-Repository: persönliche Lösungen

## README und Markdown verstehen

### Was ist eine README?

Eine README ist die Startdatei eines Repositories. Sie erklärt kurz, worum es in diesem Repository geht, was man dort findet und wie man anfangen kann.

### Wofuer ist eine README gedacht?

1. Sie begrüßt neue Menschen, die das Repository zum ersten Mal sehen.
2. Sie erklärt den Inhalt in einfacher Sprache.
3. Sie zeigt den naechsten sinnvollen Schritt.
4. Sie macht das Repository nicht leer oder unklar.

### Was sind Markdown-Dateien?

Markdown-Dateien sind Textdateien mit der Endung `.md`. Darin kannst du Überschriften, Listen, Hervorhebungen und Links schreiben, ohne eine komplizierte Formatierung zu brauchen.

### Warum nutzen wir Markdown im Kurs?

1. Markdown ist leicht zu lesen und leicht zu schreiben.
2. GitHub zeigt Markdown automatisch schön formatiert an.
3. Wir können damit Anleitungen, Erklärungen und Aufgaben klar strukturieren.

### Merksatz

- README = Einstieg und Orientierung im Repository.
- Markdown = die einfache Schreibweise für solche Dokumente.

## Wichtige Begriffe vor dem Start

Bevor du mit Repositories beginnst, solltest du diese Begriffe kennen:

| Begriff | Definition |
|:---|:---|
| Branch | Eine Parallelversion deines Codes, die im Repository enthalten ist, aber keine Auswirkungen auf den primären oder Main-Branch hat. |
| Klon | So lädst du eine vollständige Kopie der Daten eines Repositories aus GitHub.com herunter, einschließlich aller Versionen der einzelnen Dateien und Ordner. |
| Fork | Ein neues Repository, das denselben Code und dieselben Sichtbarkeitseinstellungen verwendet wie das ursprüngliche „Upstream“-Repository. |
| Merge | Änderungen von einem Branch auf einen anderen übertragen. |
| Pull Request | Eine Anforderung, die Änderungen eines Branches in einen anderen Branch zusammenzuführen. |
| Remote-Repository | Ein Repository, das auf GitHub gespeichert ist, nicht auf deinem Computer. |
| Upstream | Das ursprüngliche Repository oder der ursprüngliche Branch, von dem geklont oder geforkt wurde. |

### Merksatz

- Lokal arbeitest du auf deinem Rechner.
- Remote liegt das Repository auf GitHub.
- Branches helfen dir, Änderungen sicher vorzubereiten.
- Pull Requests machen Änderungen prüfbar und besprechbar.

### Git im Kurskontext

Dieses Dokument verbindet die allgemeinen Grundlagen aus der Course-Library mit dem praktischen Kursablauf.

Allgemeine Quelle:

- [Version Control und GitOps: Grundlagen](../../../03-course-library/04-git/04-version-control-und-gitops-grundlagen.md)

## Was wir im Modul 01 konkret brauchen

Im ersten Kursmodul ist Version Control kein Nebenthema, sondern Sicherheitsnetz für deinen Lernfortschritt.

Du nutzt Git/GitHub hier vor allem für:

- nachvollziehbare Lernschritte (kleine Commits statt großer Sprünge)
- sichere Zusammenarbeit über Branches und Pull Requests
- klare Dokumentation, die andere Menschen und KI lesen können

## Praktische Leitplanken für Einsteiger:innen

1. Arbeite in kleinen, klar benannten Schritten.
2. Prüfe vor jedem Push kurz mit `git status`.
3. Nutze Commit-Nachrichten, die den Zweck beschreiben.
4. Halte `main` stabil und arbeite für Aufgaben in einem Branch.

## Was von GitOps hier schon mitgedacht wird

GitOps selbst ist in Modul 01 noch nicht das Umsetzungsziel. Trotzdem lernst du bereits Grundprinzipien, die später wichtig werden:

- Git als verbindliche Quelle für den gewünschten Stand
- Änderungen über Review-Prozess statt Direkt-Eingriffe
- reproduzierbare Änderungen durch klare Historie

## Naechster Schritt

Im naechsten Schritt legst du dein eigenes Repository an und uebst die ersten Aktionen auf GitHub.
