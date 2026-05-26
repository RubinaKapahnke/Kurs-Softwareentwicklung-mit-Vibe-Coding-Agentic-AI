# Anleitung: Lerninhalte Zu Lektionen Umrechnen

Diese Anleitung zeigt dir, wie du eine Lektion so pflegst, dass Inhalte automatisch in die Onboarding-Lektion übernommen werden.

## Zielbild

- Redaktionsinhalte liegen direkt in `course/01-course-modules/01-Onboarding-in-den-Kurs/`.
- Jede Lektion nutzt primär eine flache Datei im Schema `XX-thema.md`.
- Optional gibt es `XX-aufgaben.md` für den Aufgabenbereich.
- `npm run sync-content` in `apps/onboarding` erzeugt daraus `apps/onboarding/public/content/step-manifest.json` und die Ziel-Dateien unter `public/content/step-XX/`.

## 1. Dateistruktur pro Lektion

Beispiel:

```text
course/01-course-modules/01-Onboarding-in-den-Kurs/
├── 01-willkommen-im-kurs.md
├── 01-aufgaben.md                  (optional)
├── 02-github-erste-schritte.md
└── 02-aufgaben.md                  (optional)
```

Ältere Ordner im Schema `XX-.../lektion-inhalte.md` oder `lektion-XX-.../lektion-inhalte.md` werden weiterhin erkannt. Für neue oder überarbeitete Lektionen nutzen wir aber das flache `XX-thema.md`-Schema.

Typische Dateien:

- `XX-thema.md` (Lesson-Flow)
- `XX-aufgaben.md` (Aufgabenliste, optional)

## 1a. Begriffe einheitlich verwenden

- `Modul` = der gesamte Kursbaustein.
- `Lektion` = die redaktionelle Einheit als Markdown-Datei und zugleich die Navigationseinheit im Kurs-Tool.
- `Slide` = eine einzelne Ansicht innerhalb des Lesson-Flows.

Für Modul 01 gilt: Wir nutzen durchgehend den Begriff `Lektion`, damit Inhalt, Sync und UI sprachlich konsistent bleiben.

## 2. Regeln für Lektionsdateien

1. `# ...` ist der Lektionstitel (wird als Titel in der Navigation genutzt).
2. Unter `## Ziel` steht die Zielbeschreibung (erste Textzeile wird als Zieltext in der Navigation übernommen).
	- Diese Zielbeschreibung benennt nicht nur das Ergebnis, sondern auch den Nutzen für die lernende Person.
	- Gute Zieltexte machen klar, was die Person danach besser einordnen, anwenden oder als nächstes tun kann.
3. Jede weitere `##`-Überschrift wird zu einer eigenen Lesson-Flow-Seite.
4. Ausnahmen ohne eigene Seite: `## Ziel`, `## Aufgaben`, `## Fallback`, `## Erfolgskriterium`.
5. `###` erzeugt Abschnitte innerhalb einer Seite.
6. `####` wird als Zwischenüberschrift innerhalb eines Abschnitts gerendert.

Didaktisch gilt zusätzlich:

- Sichtbarer Lerntext richtet sich immer direkt an Teilnehmende.
- Meta-Kommentare für Content-Erstellende oder Begründungen aus Redaktionssicht gehören nicht in die Lektion, sondern nur in solche Arbeitsanleitungen.
- Fachbegriffe nur erklärt oder direkt erklärbar verwenden.
- Früh eine Handlung, Entscheidung oder ein sichtbares Ergebnis ermöglichen.
- Allgemeine Tipps und FAQ-Inhalte nicht in jede Pflichtlektion schreiben, sondern zentral unter `course/` sammeln.

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
4. Quizze sind Verständnis-Checks, keine kindlichen Auflockerungsblöcke.

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

1. Inhalte in `XX-thema.md` und ggf. `XX-aufgaben.md` ändern.
2. In `apps/onboarding` wechseln.
3. `npm run sync-content` ausführen.
4. Optional `npm run build` ausführen.
5. Ergebnis im Kurs-Tool für das Modul Onboarding prüfen.

## 7. Häufige Fehler

1. `npm run sync-content` im Repo-Root statt in `apps/onboarding` ausgeführt.
2. Quiz ohne `Frage:` oder ohne korrekte Option (`- [x]`).
3. Erwartung, dass `## Ziel` eine Lesson-Seite erzeugt (tut es nicht).
4. Alte markerbasierte Logik erwartet, obwohl aktuell die manifestbasierte Lektionen-Synchronisierung führend ist.

