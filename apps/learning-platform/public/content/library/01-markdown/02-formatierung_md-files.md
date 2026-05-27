# Markdown Formatierungshilfe
Diese Datei bietet eine Übersicht über die wichtigsten Formatierungsmöglichkeiten in Markdown-Dateien.

> Hinweis: Die Darstellung in der Vorschau kann je nach Editor, Theme, Markdown-Renderer und installierten Erweiterungen leicht abweichen.

---

## 1. Überschriften

### Syntax
```md
# Überschrift Ebene 1 (h1)
## Überschrift Ebene 2 (h2)
### Überschrift Ebene 3 (h3)
#### Überschrift Ebene 4 (h4)
##### Überschrift Ebene 5 (h5)
###### Überschrift Ebene 6 (h6)
```

### Vorschau
# Überschrift Ebene 1 (h1)
## Überschrift Ebene 2 (h2)
### Überschrift Ebene 3 (h3)
#### Überschrift Ebene 4 (h4)
##### Überschrift Ebene 5 (h5)
###### Überschrift Ebene 6 (h6)

### Kurz-Erklärung
Mehr `#` bedeutet eine kleinere Überschriften-Ebene.

---

## 2. Textformatierung

### Syntax
```md
**fett**
*kursiv*
***fett und kursiv***
~~durchgestrichen~~
```

### Vorschau
**fett**, *kursiv*, ***fett und kursiv***, ~~durchgestrichen~~

### Kurz-Erklärung
Mit Sternchen oder Tilden betonst du Text, ohne HTML zu nutzen.

---

## 3. Listen

### Syntax
```md
* Punkt 1
* Punkt 2
    * Unterpunkt 2.1

1. Erster Lektion
2. Zweiter Lektion
3. Dritter Lektion

- [x] Erledigte Aufgabe
- [ ] Offene Aufgabe
```

### Vorschau
* Punkt 1
* Punkt 2
    * Unterpunkt 2.1

1. Erster Lektion
2. Zweiter Lektion
3. Dritter Lektion

- [x] Erledigte Aufgabe
- [ ] Offene Aufgabe

### Kurz-Erklärung
Es gibt ungeordnete Listen, geordnete Listen und Checklisten.

---

## 4. Links und Bilder

### Syntax
```md
[Link zu Google](https://www.google.com)
![Beispielbild](https://dummyimage.com/320x120/ddd/333&text=Markdown+Bild)
```

### Vorschau
[Link zu Google](https://www.google.com)

![Beispielbild](https://dummyimage.com/320x120/ddd/333&text=Markdown+Bild)

### Kurz-Erklärung
Links nutzen `[Text](URL)`, Bilder nutzen `![Alt-Text](URL)`.

---

## 5. Zitate (Blockquotes)

### Syntax
```md
> Das ist ein Zitat.
> Quelle oder Autor
```

### Vorschau
> Das ist ein Zitat.
> Quelle oder Autor

### Kurz-Erklärung
Jede Zeile mit `>` wird als Zitat eingerückt dargestellt.

---

## 6. Code

### Syntax
````md
Inline-Code: `cd`

```python
def hallo_welt():
    print("Hallo Welt!")
```
````

### Vorschau
Inline-Code: `cd`

```python
def hallo_welt():
    print("Hallo Welt!")
```

### Kurz-Erklärung
Inline-Code markiert einzelne Begriffe, Codeblöcke zeigen längeren Code lesbar an.

---

## 7. Horizontale Linie

### Syntax
```md
---
```

### Vorschau

---

### Kurz-Erklärung
Eine horizontale Linie trennt Inhalte visuell.

---

## 8. Tabellen

### Syntax
```md
| Spalte 1 | Spalte 2 | Spalte 3 |
|----------|----------|----------|
| Wert A   | Wert B   | Wert C   |
| Wert D   | Wert E   | Wert F   |
```

### Vorschau
| Spalte 1 | Spalte 2 | Spalte 3 |
|----------|----------|----------|
| Wert A   | Wert B   | Wert C   |
| Wert D   | Wert E   | Wert F   |

### Kurz-Erklärung
Tabellen brauchen Kopfzeile, Trennzeile und danach die Datenzeilen.

---

## 9. Erweiterte Formatierungen

### Syntax
```md
Zeilenumbruch mit zwei Leerzeichen am Ende der Zeile.  
Nächste Zeile im gleichen Absatz.

Sonderzeichen escapen: \*kein kursiv\* und \# kein Titel

<https://www.github.com>

[GitHub per Referenz][gh]
[gh]: https://www.github.com

Sprungmarke im Dokument: [Zu Tabellen](#8-tabellen)

Hinweis mit HTML: <mark>Wichtig</mark>

Fussnote im Text[^1]
[^1]: Das ist die Fussnote.

<!-- Das ist ein HTML-Kommentar und wird in der Vorschau normalerweise nicht angezeigt. -->
```

### Vorschau
Zeilenumbruch mit zwei Leerzeichen am Ende der Zeile.  
Nächste Zeile im gleichen Absatz.

Sonderzeichen escapen: \*kein kursiv\* und \# kein Titel

<https://www.github.com>

[GitHub per Referenz][gh]
[gh]: https://www.github.com

Sprungmarke im Dokument: [Zu Tabellen](#8-tabellen)

Hinweis mit HTML: <mark>Wichtig</mark>

Fussnote im Text[^1]
[^1]: Das ist die Fussnote.

<!-- Das ist ein HTML-Kommentar und wird in der Vorschau normalerweise nicht angezeigt. -->

### Kurz-Erklärung
Dieser Abschnitt zeigt nützliche Erweiterungen für den Alltag: kontrollierte Umbrüche, Escaping, automatische Links, Referenz-Links, Anker-Links, einfaches HTML, Fussnoten und HTML-Kommentare in Markdown.

