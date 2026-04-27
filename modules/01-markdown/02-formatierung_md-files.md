# Markdown Formatierungshilfe
Diese Datei bietet eine Übersicht über die wichtigsten Formatierungsmöglichkeiten in Markdown-Dateien.

---

## 1. Überschriften
Überschriften werden mit dem `#`-Symbol erstellt. Die Anzahl der Symbole bestimmt die Ebene.
```
# Überschrift Ebene 1 (h1)
## Überschrift Ebene 2 (h2)
### Überschrift Ebene 3 (h3)
#### Überschrift Ebene 4 (h4)
##### Überschrift Ebene 5 (h5)
###### Überschrift Ebene 6 (h6)
```
---

## 2. Textformatierung
Text kann auf verschiedene Weise hervorgehoben werden:

* **Fett**: `**Text**` oder `__Text__` -> **Fettgedruckter Text**
* *Kursiv*: `*Text*` oder `_Text_` -> *Kursiver Text*
* ***Fett & Kursiv***: `***Text***` -> ***Sehr betonter Text***
* ~~Durchgestrichen~~: `~~Text~~` -> ~~Veralteter Text~~

---

## 3. Listen

### Ungeordnete Listen
Verwenden Sie `*`, `-` oder `+`.
```
* Punkt 1
* Punkt 2
    * Unterpunkt 2.1
    * Unterpunkt 2.2
```

### Geordnete Listen
Verwenden Sie Zahlen gefolgt von einem Punkt.
```
1. Erster Schritt
2. Zweiter Schritt
3. Dritter Schritt
```

### Checklisten (Aufgaben)
```
- [x] Erledigte Aufgabe
- [ ] Offene Aufgabe
```
---

## 4. Links und Bilder

### Links
Ein [Link zu Google](https://www.google.com) wird so erstellt: `[Anzeigetext](URL)`.

### Bilder
Bilder funktionieren ähnlich wie Links, nur mit einem vorangestellten Ausrufezeichen:
`![Alternativtext](Bild-URL)`


---

## 5. Zitate (Blockquotes)
Zitate werden mit dem `>` Zeichen eingeleitet.

> „Markdown ist eine vereinfachte Auszeichnungssprache, die ursprünglich von John Gruber und Aaron Swartz entworfen wurde.“
> — *Wikipedia*

---

## 6. Code

### Inline-Code
Verwenden Sie Backticks (`` ` ``) für `Code innerhalb eines Satzes`.

### Code-Blöcke
Für längere Abschnitte verwenden Sie drei Backticks (```). Man kann auch die Programmiersprache für das Syntax-Highlighting angeben.

```python
def hallo_welt():
    print("Hallo Welt!")