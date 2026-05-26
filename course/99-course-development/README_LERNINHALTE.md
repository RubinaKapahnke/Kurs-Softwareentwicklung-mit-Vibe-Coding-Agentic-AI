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

Wichtig: Eine flache Lektionsdatei wird nur als Onboarding-Lektion erkannt, wenn die erste Überschrift mit `# Lektion NN:` beginnt. So werden andere Moduldateien nicht versehentlich synchronisiert.

Ältere Ordner im Schema `XX-.../lektion-inhalte.md` oder `lektion-XX-.../lektion-inhalte.md` werden weiterhin erkannt.

## Begriffsklärung

- `Modul` = der gesamte Kursbaustein, hier `01-Onboarding-in-den-Kurs`.
- `Lektion` = eine nummerierte Lerneinheit als Datei, z. B. `01-willkommen-im-kurs.md`.
- `Lektion` = die zugehörige Lern- und Navigationseinheit im Kurs-Tool.
- `Slide` oder `Seite` = eine einzelne Ansicht innerhalb des Lesson-Flows.

Wichtig: Wir verwenden `Lektion` einheitlich für redaktionelle Quelle und technische Führungseinheit im Kurs-Tool.

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
   - Siehe [apps/onboarding/public/assets/lessons/README.md](../../apps/onboarding/public/assets/lessons/README.md) für Bildmaße und Format-Anforderungen.

## Didaktische Regeln

- Schreibe voraussetzungsarm, konkret und in erwachsenem Ton.
- Sprich in Lerninhalten immer die lernende Person direkt an.
- Schreibe nie aus Sicht der Content-Erstellung oder Redaktion, wenn der Text später für Teilnehmende sichtbar ist.
- Meta-Sätze wie warum eine Reihenfolge für den Content-Aufbau gut ist, gehören in Arbeitsanleitungen für Autor:innen, nicht in die Lektion selbst.
- Formuliere `## Ziel` immer mit erkennbarem Outcome und erkennbarem Nutzen für die lernende Person: Was kann sie danach besser, sicherer oder klarer tun?
- Verwende Fachbegriffe nur dann, wenn sie vorher erklärt wurden oder direkt an der Stelle erklärt werden.
- Mache früh sichtbar, was die lernende Person jetzt tun oder sehen soll.
- Lange Einstiege ohne Handlung, Entscheidung oder visuellen Anker sind zu vermeiden.
- Allgemein gültige Tipps, FAQ-Inhalte und wiederverwendbare Bedienungshilfen gehören nicht in den Pflichtfluss jeder Lektion, sondern in zentrale Artikel unter `course/03-course-library/09-kurshilfe/`.

## Farb-Praefixe Für `###`

- `### Wichtig:` oder `### Hinweis:` -> gelbes Feld, Überschrift dunkelgelb
- `### Achtung:` -> rotes Feld, Überschrift dunkelrot
- `### Erfolg:` / `### OK:` / `### Grün:` -> grünes Feld, Überschrift dunkelgrün
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
- Quiz-Seiten sind Verständnis-Checks. Offensichtlich alberne oder rein kindlich formulierte Falschantworten sind zu vermeiden.

## Stand

Die Lerninhalte liegen direkt im Kursmodul-Ordner und sind die führende redaktionelle Quelle für den Lesson-Flow des Kurs-Tools im Modul Onboarding.


