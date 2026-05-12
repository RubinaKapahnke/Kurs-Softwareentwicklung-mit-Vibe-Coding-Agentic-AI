# Lerninhalte Nach Lektionen

Diese Struktur ist die zentrale Quellenablage für Lerninhalte pro Lektion im Onboarding.

## Ziel

- Pro Lektion gibt es einen eigenen Ordner direkt im Modulordner.
- Inhalte werden hier redaktionell gepflegt.
- `lektion-inhalte.md` steuert den Lesson-Flow.
- `aufgaben.md` steuert den Aufgabenblock (falls vorhanden).
- Die App übernimmt Inhalte über `npm run sync-content` in `apps/onboarding`.

## Format-Regeln Für `lektion-inhalte.md`

1. Jede `##`-Überschrift erzeugt eine neue Lesson-Flow-Seite.
2. Ausnahmen (werden nicht als eigene Seite gerendert): `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`.
3. `###` erzeugt einen Abschnitt innerhalb der aktuellen Seite.
4. `####` wird als Zwischenüberschrift im Abschnitt dargestellt.
5. Inline-Markdown wird unterstützt (`*kursiv*`, `**fett**`, `***fett-kursiv***`, `[Link](https://...)`).

## Farb-Praefixe Für `###`

- `### Wichtig:` oder `### Hinweis:` -> gelbes Feld, Überschrift dunkelgelb
- `### Achtung:` -> rotes Feld, Überschrift dunkelrot
- `### Erfolg:` / `### OK:` / `### Gruen:` -> grünes Feld, Überschrift dunkelgrün
- `### Blau:` -> blaues Feld, Überschrift dunkelblau
- `### Info:` / `### Tipp:` -> Hinweis-Feld mit eigenem blauen Ton

Das Präfix vor dem Doppelpunkt wird nicht angezeigt, nur der Text danach.

## Quiz-Pattern

Für Quiz-Seiten verwende eine eigene `##`-Überschrift mit `Quiz`:

```md
## Quiz: Kurze Verständnisfrage

Frage: Wozu dient GitHub im Kurs hauptsächlich?
Hinweis: Wähle die treffendste Aussage aus.
Mehrfachauswahl: nein

- [ ] Falsche Option
- [x] Richtige Option
- [ ] Falsche Option

Erfolg: Richtig! ...
Fehler: Nicht ganz. ...
```

Hinweise:
- Mindestens 2 Optionen erforderlich.
- Mindestens eine Option mit `- [x]` erforderlich.
- `Mehrfachauswahl` ist optional (`ja` oder `nein`).

## Stand

Die Lerninhalte liegen direkt im Kursmodul-Ordner und sind die führende redaktionelle Quelle für den Lesson-Flow der Onboarding-App.


