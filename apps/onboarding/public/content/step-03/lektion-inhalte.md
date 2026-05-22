<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 03-markdown-grundlagen.md -->

# Lektion 03: Markdown verstehen und README schreiben

## Ziel

Du verstehst, wofür Markdown genutzt wird, kannst einfache Markdown-Dateien schreiben und erstellst eine sinnvolle README für dein Übungs-Repository.

## Kapitel 1: Was ist Markdown?

Markdown ist eine einfache Schreibweise, mit der du Texte strukturieren und formatieren kannst.

Du schreibst dabei normalen Text mit wenigen Sonderzeichen. Daraus entstehen Überschriften, Listen, Links, Bilder, Tabellen oder Code-Blöcke.

Markdown ist besonders praktisch, weil der Text auch ohne spezielle Software lesbar bleibt. Gleichzeitig kann GitHub daraus eine gut formatierte Ansicht erzeugen.

Beispiel:

```markdown
# Meine Überschrift

Das ist ein kurzer Text.

- erster Punkt
- zweiter Punkt
- dritter Punkt
```

In GitHub wird daraus eine formatierte Überschrift, ein Absatz und eine Liste.

### Warum nutzen wir Markdown?

Markdown ist einfach, schnell und sehr verbreitet. Du brauchst kein Layoutprogramm und keine komplizierte Oberfläche. Ein normaler Texteditor reicht aus.

Im Kurs nutzen wir Markdown, weil du damit:

- Notizen strukturieren kannst,
- Aufgaben dokumentieren kannst,
- README-Dateien schreiben kannst,
- Prompts und Kontext für KI-Tools vorbereiten kannst,
- Projektinformationen sauber festhalten kannst.

Kurz gesagt: Markdown hilft dir, Gedanken, Wissen und Projektinformationen klar aufzuschreiben.

## Kapitel 2: Typische Einsatzgebiete von Markdown

Markdown wird in vielen Bereichen der Softwareentwicklung und Dokumentation eingesetzt.

### README-Dateien

Eine README ist oft die Startseite eines Repositorys. Sie erklärt, worum es im Projekt geht, wie man es nutzt und welche Informationen wichtig sind.

Typische Inhalte einer README:

- Projektname
- kurze Beschreibung
- Installation oder Nutzung
- wichtige Befehle
- Projektstruktur
- Lernstand oder nächste Schritte
- Links und Quellen

### Dokumentation

Markdown eignet sich gut für technische Dokumentation. Du kannst damit Anleitungen, Erklärungen, Checklisten und Notizen erstellen.

Beispiele:

- Installationsanleitung
- Schritt-für-Schritt-Dokumentation
- Glossar
- Projektübersicht
- Fehler- und Lösungsdokumentation

### GitHub Issues und Pull Requests

Auch in GitHub selbst wird Markdown genutzt. Du kannst damit Issues, Pull Requests und Kommentare besser strukturieren.

Beispiele:

- Fehlerbeschreibung
- Aufgabenliste
- Lösungsvorschlag
- Review-Kommentar
- offene Fragen

### Lernnotizen

Markdown eignet sich sehr gut für eigene Lernnotizen, weil du Inhalte schnell ordnen kannst.

Beispiele:

- Was habe ich gelernt?
- Welche Begriffe sind neu?
- Welche Fehler sind aufgetreten?
- Welche Lösung hat funktioniert?
- Welche Fragen sind noch offen?

### KI und Context Engineering

Im Kurs spielt Markdown auch eine wichtige Rolle für KI-gestützte Entwicklung.

KI-Tools arbeiten besser, wenn Informationen klar, strukturiert und nachvollziehbar bereitgestellt werden. Markdown hilft dir dabei, Kontext für KI verständlich aufzubereiten.

Beispiele:

- Projektbeschreibung
- Anforderungen
- Regeln für den Code
- Prompts
- Aufgabenlisten
- Fehlermeldungen
- bisherige Lösungsversuche

Wenn du deine Informationen sauber in Markdown dokumentierst, kann eine KI besser verstehen, was du willst, was bereits existiert und welche Regeln sie beachten soll.

## Kapitel 3: Die wichtigsten Markdown-Grundlagen

### Überschriften

Überschriften werden mit `#` geschrieben.

```markdown
# Überschrift 1
## Überschrift 2
### Überschrift 3
```

Nutze Überschriften, um deinen Text klar zu gliedern.

### Absätze

Ein normaler Absatz ist einfacher Text.

```markdown
Das ist ein Absatz.

Das ist ein neuer Absatz.
```

Zwischen zwei Absätzen steht eine Leerzeile.

### Listen

Ungeordnete Listen schreibst du mit `-`.

```markdown
- GitHub
- Markdown
- README
```

Geordnete Listen schreibst du mit Zahlen.

```markdown
1. Repository öffnen
2. README bearbeiten
3. Änderungen speichern
```

### Hervorhebungen

Du kannst Wörter fett oder kursiv schreiben.

```markdown
**wichtiger Text**

*kursiver Text*
```

### Links

Links bestehen aus einem Linktext und der URL.

```markdown
[GitHub Docs](https://docs.github.com/de)
```

### Bilder

Bilder funktionieren ähnlich wie Links, aber mit einem Ausrufezeichen am Anfang.

```markdown
```

Die Beschreibung ist wichtig, damit andere verstehen, was auf dem Bild zu sehen ist.

### Code im Text

Kurze Code-Begriffe schreibst du mit Backticks.

```markdown
Die Datei heißt `README.md`.
```

### Code-Blöcke

Längere Code-Beispiele schreibst du mit drei Backticks.

````markdown
```html
<h1>Hallo Welt</h1>
```
