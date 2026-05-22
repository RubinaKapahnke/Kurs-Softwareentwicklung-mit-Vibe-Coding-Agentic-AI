# Lektion 03: Markdown verstehen und README schreiben

## Ziel

Du verstehst, wofür Markdown im Kurs genutzt wird, kannst die wichtigsten Markdown-Elemente sicher anwenden und schreibst eine klare README für dein Übungs-Repository.

## Kapitel 1: Warum Markdown im Kurs so wichtig ist

Markdown ist eine einfache Schreibweise für strukturierte Texte. Du schreibst normalen Text und nutzt wenige Zeichen für Überschriften, Listen, Links und Code.

Warum das wichtig ist:

- Deine Inhalte sind ohne Spezialsoftware lesbar.
- GitHub stellt Markdown automatisch sauber dar.
- Du kannst Aufgaben, Lernnotizen und PR-Beschreibungen einheitlich dokumentieren.
- KI-Tools verstehen klar strukturierte Informationen besser.

## Kapitel 2: Wo du Markdown konkret verwendest

Im Modul 01 brauchst du Markdown vor allem in diesen Situationen:

- README-Datei im eigenen Übungs-Repository
- Beschreibungen in Pull Requests
- kurze Lernnotizen und Zwischenstände
- Aufgaben- und Lösungsdokumentation

## Kapitel 3: Markdown-Schnellstart (mit Beispielen)

### Überschriften

```markdown
# Überschrift 1
## Überschrift 2
### Überschrift 3
```

### Absätze

```markdown
Das ist ein Absatz.

Das ist ein neuer Absatz.
```

### Listen

```markdown
- Punkt A
- Punkt B
- Punkt C
```

```markdown
1. Schritt 1
2. Schritt 2
3. Schritt 3
```

### Hervorhebung

```markdown
**fett**
*kursiv*
```

### Links

```markdown
[GitHub Docs](https://docs.github.com/de)
```

### Bilder

```markdown
![Screenshot vom Repository](https://example.com/screenshot.png)
```

### Code im Text und Codeblock

```markdown
Die zentrale Datei heißt `README.md`.
```

````markdown
```bash
git status
```
````

## Kapitel 4: Mini-Übung - README in der Cloud schreiben

Arbeite direkt auf GitHub (Web-Editor oder Codespaces).

1. Öffne dein Übungs-Repository.
2. Öffne oder erstelle die Datei README.md.
3. Ergänze diese vier Bausteine:
   - Überschrift mit Projektname
   - kurze Beschreibung in 1 bis 2 Sätzen
   - Liste mit deinem aktuellen Lernfokus
   - mindestens ein Link, zum Beispiel auf eine Kursquelle
4. Nutze Preview und prüfe die Darstellung.
5. Committe die Änderung mit verständlicher Nachricht.

### Beispielstruktur für README.md

```md
# Mein Übungs-Repository

Ich nutze dieses Repository, um die Übungen aus Modul 01 strukturiert umzusetzen.

## Aktueller Fokus

- Markdown sicher anwenden
- Git-Workflow festigen
- sauber dokumentieren

## Nützliche Quelle

[Markdown Grundlagen im Kurs](../../03-course-library/01-markdown/01-markdown-grundlagen.md)
```

## Kapitel 5: Häufige Fehler und schnelle Korrektur

- Überschrift wird nicht groß dargestellt: `#` und Leerzeichen prüfen.
- Link funktioniert nicht: `[]` und `()` in der richtigen Reihenfolge setzen.
- Liste wird nicht erkannt: auf `-` plus Leerzeichen achten.
- Vorschau sieht anders aus als erwartet: Datei in Preview kontrollieren.

## Quiz: Kurzcheck zu Markdown

Frage: Welche Aussage trifft für Markdown im Kurs am besten zu?
Hinweis: Wähle die treffendste Aussage aus.
Mehrfachauswahl: nein

- [ ] Markdown ist nur für große Projektdokumentationen gedacht.
- [x] Markdown hilft, Inhalte schnell, lesbar und versionierbar zu dokumentieren.
- [ ] Markdown funktioniert nur lokal in VS Code, nicht auf GitHub.

Erfolg: Genau. Im Kurs nutzt du Markdown durchgehend für verständliche, nachvollziehbare Dokumentation.
Fehler: Noch nicht ganz. Markdown ist bewusst leichtgewichtig und funktioniert sehr gut auf GitHub.

## Fallback

- Datei wird nicht angezeigt: im Repository nach README.md suchen.
- Commit-Button ist inaktiv: zuerst Inhalt ändern oder ergänzen.
- Unsicher bei der Syntax: ein kleines Beispiel kopieren und schrittweise anpassen.

## Erfolgskriterium

Du hast eine strukturierte README erstellt oder verbessert und kannst Überschriften, Listen, Links sowie Codebeispiele in Markdown sicher einsetzen.

## Was ist zu tun

1. README im Übungs-Repository mit den vier Bausteinen überarbeiten.
2. Änderung als Commit speichern.
3. Kurz notieren, welche Markdown-Elemente du sicher kannst und was du noch üben willst.

## Hilfreiche Links

- [Markdown Modulguide](../../03-course-library/01-markdown/00-markdown-dokumentation-modulguide.md)
- [Markdown Grundlagen](../../03-course-library/01-markdown/01-markdown-grundlagen.md)
- [Formatierung von Markdown-Dateien](../../03-course-library/01-markdown/02-formatierung_md-files.md)
- [GitHub Docs: Schreiben auf GitHub](https://docs.github.com/de/get-started/writing-on-github)
