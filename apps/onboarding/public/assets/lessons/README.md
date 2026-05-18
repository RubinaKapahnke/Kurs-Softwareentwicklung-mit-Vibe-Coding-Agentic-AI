# Bilder für Lesson-Flow Inhalte

Dieser Ordner enthält alle Bilder und Grafiken, die in den Onboarding-Lektionen verwendet werden.

## Namensschema

Verwende folgendes Format:

```
<schritt>-<beschreibung>.<ext>
```

**Beispiele:**
- `step-02-github-login.png`
- `step-05-terminal-screenshot.jpg`
- `step-08-vscode-setup.png`

**Regeln:**
- Starte mit `step-XX-` (XX = Schritt-Nummer, z.B. 02, 05, 14)
- Folge mit aussagekräftiger Kurzbezeichnung (Bindestriche statt Unterstriche)
- Nutze Kleinbuchstaben
- Keine Umlaute oder Sonderzeichen im Dateinamen

## Bildformat & Größe

### Empfohlene Maße

| Einsatz | Breite | Höhe | Aspect Ratio | Max. Dateigröße |
|:---|:---|:---|:---|:---|
| Screenshot/Grafik (Lesson-Flow) | 600–700px | max. 350–400px | 16:9 oder 4:3 | 80 KB |
| Foto/Demo (Lesson-Flow) | 550–650px | max. 300–400px | 16:9 oder beliebig | 100 KB |
| Icon oder kleine Grafik | 200–400px | 200–400px | 1:1 | 30 KB |

### Bildformat

- **PNG**: Für Screenshots, Grafiken mit klaren Kanten, Transparenz benötig
  - Komprimieren mit [TinyPNG](https://tinypng.com/) oder ähnlich
- **JPG**: Für Fotos oder komplexe Bilder mit vielen Farben
  - Qualität 75–85% speichern
- **Vermeiden**: WebP (nicht überall unterstützt)

## Nutzung im Markdown

Referenziere Bilder mit relativem Pfad in der Lektion:

```markdown
![Beschreibung des Bildes](/assets/lessons/step-02-github-login.png)
```

**Wichtig:** Nutze absolute Pfade mit `/assets/lessons/`, nicht relative Pfade.

## Beispiel

**In:** `course/kursmodule/01-Onboarding-in-den-Kurs/lektion-02-github-account/lektion-inhalte.md`

```markdown
## GitHub im Browser öffnen

Öffne [github.com](https://github.com) in deinem Browser.

![Screenshot der GitHub-Loginseite](/assets/lessons/step-02-github-login.png)

Oben rechts findest du den "Sign in"-Button.
```

---

**Zuletzt aktualisiert:** 2026-05-12
