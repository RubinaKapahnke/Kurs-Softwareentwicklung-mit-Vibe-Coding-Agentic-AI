# Lektion 14: Kurs-Repository klonen

## Ziel

Du klonst das gemeinsame Kurs-Repository und öffnest es lokal in VS Code.

## Vorbedingung

- Einladung zum Kurs-Repository wurde angenommen.
- Git ist installiert und im Terminal verfügbar (`git --version`).

## Schritt-für-Schritt

1. Kurs-Repository auf GitHub öffnen.
2. Unter **Code** die HTTPS-URL kopieren.
3. In VS Code ein Terminal öffnen.
4. In den Zielordner wechseln.
5. `git clone <URL>` ausführen.
6. Den geklonten Ordner in VS Code öffnen.

## Nach dem Clone prüfen

- Datei `course/00-course-guides/COURSE_MILESTONES.md` ist über Strg+P auffindbar.
- Ordner `course/` ist vorhanden.
- `git status` zeigt ein sauberes Repository.

## Fallback

- Einladung fehlt: GitHub-Benachrichtigungen prüfen oder Dozent*in kontaktieren.
- Clone schlägt fehl: URL und Zugriffsrechte prüfen.
- VS Code öffnet falschen Ordner: Über **Datei -> Ordner öffnen** den geklonten Ordner wählen.

## Erfolgskriterium

Das Kurs-Repository ist lokal geöffnet und du kannst die zentrale Kursstruktur sehen.