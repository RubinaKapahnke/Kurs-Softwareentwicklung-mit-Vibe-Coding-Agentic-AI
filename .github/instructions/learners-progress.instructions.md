---
applyTo: "course/learners/**"
---

# Lernfortschritt-Standard: Struktur und Regeln

Diese Datei bleibt bewusst im Kurs-Repo unter `course/learners/`. Sie ist die kanonische Quelle fuer Kursueberblick, Betreuung und Dashboard. Uebungsartefakte duerfen im eigenen Repo liegen, der Lernfortschritt selbst wird hier zentral gepflegt.

## Pflichtstruktur jeder `lernfortschritt_<name>.md`

```markdown
# Lernfortschritt: <Name>

## Aktueller Fokus
**Was ich gerade lerne:**
- [ ] ...

## Abgeschlossene Meilensteine
- [ ] Meilenstein 1: ...

## Lernjournal

### DD.MM. (Uebung XX – Titel)
**Was habe ich heute gemacht?**
...

**Link zur Abgabe / PR im eigenen Repo (optional):**
...

**Abgabe UE-MX-YY:**
- [x] ...

**Lernerfolgs-Kriterien UE-MX-YY:**
- [x] ...

## Das möchte ich noch lernen
- [ ] ...

## Fragen an die Gruppe
- ...
```

## Regeln

| Regel | Detail |
|:---|:---|
| `## Das möchte ich noch lernen` | Erscheint **einmal** am Dateiende – nicht nach jedem Journaleintrag |
| `## Fragen an die Gruppe` | Erscheint **einmal** am Dateiende – nicht nach jedem Journaleintrag |
| Abgabe- und Lernerfolgs-Kriterien | Stehen **direkt unter den passenden Journaleintrag** (nicht am Dateiende) |
| Repo-Trennung | Loesungsartefakte duerfen im eigenen Repo liegen; diese Datei bleibt trotzdem zentral unter `course/learners/` |
| `## Nächster kleiner Schritt` | **Verboten als eigener Abschnitt** – der nächste Schritt steht im letzten Journaleintrag |
| Journaleinträge | Format `### DD.MM. (Uebung XX – Titel)` |

## Automatischer Test

```powershell
.\tools\test-lernfortschritt.ps1
```

Exit-Code 0 = alle Dateien OK, 1 = mindestens eine Datei fehlerhaft.
