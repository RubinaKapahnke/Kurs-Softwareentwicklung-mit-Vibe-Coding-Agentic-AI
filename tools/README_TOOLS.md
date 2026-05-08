# tools/

Dieser Ordner enthält Skripte für den **Kursbetrieb** – sie werden von Dozenten und KI-Agenten genutzt, um Dateien automatisch auf Vollständigkeit und Konsistenz zu prüfen.

**Als Lernende/r musst du hier nichts tun.** Dein Arbeitsbereich ist:

- [`course/learners/<dein-name>/`](../course/learners/) → deine persönlichen Dateien
- [`course/uebungen/`](../course/uebungen/) → zentrale Übungsaufgaben
- [`course/course-library/`](../course/course-library/) → Lernmaterial

---

## Skripte

| Skript | Zweck | Aufruf |
|:---|:---|:---|
| `test-alle-uebungen.ps1` | Prüft alle Übungsdateien in `course/uebungen/` gegen den Übungsstandard | `.\tools\test-alle-uebungen.ps1` |
| `test-uebung.ps1` | Prüft eine einzelne Übungsdatei | `.\tools\test-uebung.ps1 -File "course/uebungen/<datei>.md"` |
| `test-lernfortschritt.ps1` | Prüft alle `lernfortschritt_*.md`-Dateien auf Pflichtstruktur | `.\tools\test-lernfortschritt.ps1` |
| `test-links.ps1` | Prüft alle relativen Markdown-Links auf Existenz | `.\tools\test-links.ps1` |

Alle Skripte liefern Exit-Code `0` (alles OK) oder `1` (mindestens ein Fehler).

---

## Automatischer Test (CI)

Bei Pull Requests, die Übungsdateien ändern, läuft `test-alle-uebungen.ps1` automatisch als GitHub Action (`.github/workflows/test-uebungen.yml`).
