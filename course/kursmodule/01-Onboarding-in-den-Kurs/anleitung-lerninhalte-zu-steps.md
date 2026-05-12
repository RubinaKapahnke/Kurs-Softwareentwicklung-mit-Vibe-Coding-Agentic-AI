# Anleitung: Lerninhalte Zu Steps Umrechnen

Diese Anleitung zeigt dir, wie du eine Lektion so pflegst, dass Inhalte automatisch in den Onboarding-Step übernommen werden.

## Zielbild

- Redaktionsinhalte liegen direkt in `course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/lektion-XX-.../`.
- Jede Lektion nutzt primär `lektion-inhalte.md`.
- Optional gibt es `aufgaben.md` für den Aufgabenbereich.
- `npm run sync-content` in `apps/onboarding` erzeugt daraus `apps/onboarding/public/content/step-manifest.json` und die Ziel-Dateien unter `public/content/step-XX/`.

## 1. Dateistruktur pro Lektion

Beispiel:

`course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/lektion-03-github-account/`

Typische Dateien:

- `lektion-inhalte.md` (Lesson-Flow)
- `aufgaben.md` (Aufgabenliste, optional)

## 2. Regeln für `lektion-inhalte.md`

1. `# ...` ist der Lektionstitel (wird als Step-Titel genutzt).
2. Unter `## Ziel` steht die Zielbeschreibung (erste Textzeile wird als Step-Ziel übernommen).
3. Jede weitere `##`-Überschrift wird zu einer eigenen Lesson-Flow-Seite.
4. Ausnahmen ohne eigene Seite: `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`.
5. `###` erzeugt Abschnitte innerhalb einer Seite.
6. `####` wird als Zwischenüberschrift innerhalb eines Abschnitts gerendert.

## 3. Quiz in Markdown

Für ein Quiz nutze eine eigene `## Quiz: ...`-Seite mit folgendem Muster:

```md
## Quiz: Kurze Verständnisfrage

Frage: Wozu dient GitHub im Kurs hauptsächlich?
Hinweis: Wähle die treffendste Aussage aus.
Mehrfachauswahl: nein

- [ ] Als E-Mail-Dienst ...
- [x] Als Plattform zum Speichern und Teilen von Code ...
- [ ] Als Video-Lernplattform ...

Erfolg: Richtig! ...
Fehler: Nicht ganz. ...
```

Regeln:

1. Mindestens 2 Antwortoptionen.
2. Mindestens eine korrekte Option mit `- [x]`.
3. `Mehrfachauswahl` optional (`ja` oder `nein`).

## 4. Farbfelder über `###`-Präfixe

- `### Wichtig:` oder `### Hinweis:` -> gelb
- `### Achtung:` -> rot
- `### Erfolg:` / `### OK:` / `### Grün:` -> grün
- `### Blau:` -> blau
- `### Info:` / `### Tipp:` -> eigener Hinweis-Farbton

Wichtig:

- Das Präfix wird nicht angezeigt.
- Sichtbar ist nur der Titeltext nach dem Doppelpunkt.

## 5. Inline-Formatierung

Innerhalb der Abschnitte werden unterstützt:

- `*kursiv*`
- `**fett**`
- `***fett-kursiv***`
- `[Linktext](https://...)`
- Plaintext-URLs wie `github.com` werden ebenfalls verlinkt.

## 6. Workflow

1. Inhalte in `lektion-inhalte.md` und ggf. `aufgaben.md` ändern.
2. In `apps/onboarding` wechseln.
3. `npm run sync-content` ausführen.
4. Optional `npm run build` ausführen.
5. Ergebnis in der Onboarding-App prüfen.

## 7. Häufige Fehler

1. `npm run sync-content` im Repo-Root statt in `apps/onboarding` ausgeführt.
2. Quiz ohne `Frage:` oder ohne korrekte Option (`- [x]`).
3. Erwartung, dass `## Ziel` eine Lesson-Seite erzeugt (tut es nicht).
4. Alte markerbasierte Logik erwartet, obwohl aktuell die manifestbasierte Lektionen-Synchronisierung führend ist.
