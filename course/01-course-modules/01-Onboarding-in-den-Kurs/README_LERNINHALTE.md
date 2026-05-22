# Lerninhalte Nach Lektionen

Diese Struktur ist die zentrale Quellenablage für Lerninhalte pro Lektion im Onboarding.

## Ziel

- Pro Lektion gibt es eine eigene Markdown-Datei direkt im Modulordner.
- Inhalte werden hier redaktionell gepflegt.
- `XX-thema.md` steuert den Lesson-Flow.
- `XX-aufgaben.md` steuert den Aufgabenblock (falls vorhanden).
- Die App übernimmt Inhalte über `npm run sync-content` in `apps/onboarding`.

## Dateikonvention

Beispiel:

```text
01-Onboarding-in-den-Kurs/
├── 01-willkommen-im-kurs.md
├── 01-aufgaben.md                  (optional)
├── 02-github-erste-schritte.md
└── 02-aufgaben.md                  (optional)
```

Wichtig: Eine flache Lektionsdatei wird nur als Onboarding-Step erkannt, wenn die erste Überschrift mit `# Lektion NN:` beginnt. So werden andere Moduldateien nicht versehentlich synchronisiert.

Ältere Ordner im Schema `XX-.../lektion-inhalte.md` oder `lektion-XX-.../lektion-inhalte.md` werden weiterhin erkannt.

## Format-Regeln Für Lektionsdateien

1. Jede `##`-Überschrift erzeugt eine neue Lesson-Flow-Seite.
2. Ausnahmen (werden nicht als eigene Seite gerendert): `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`.
3. `###` erzeugt einen Abschnitt innerhalb der aktuellen Seite.
4. `####` wird als Zwischenüberschrift im Abschnitt dargestellt.
5. Inline-Markdown wird unterstützt (`*kursiv*`, `**fett**`, `***fett-kursiv***`, `[Link](https://...)`).
6. Bilder können direkt im Markdown stehen: `![Beschreibung](/assets/lessons/step-XX-beispiel.png)`.
   - Verwende **absolute Pfade** mit `/assets/lessons/`.
   - Bilder liegen zentral unter `apps/onboarding/public/assets/lessons/`.
   - Namensschema: `step-XX-<beschreibung>.<ext>` (z.B. `step-02-github-login.png`).
   - Siehe [apps/onboarding/public/assets/lessons/README.md](../../../apps/onboarding/public/assets/lessons/README.md) für Bildmaße und Format-Anforderungen.

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


