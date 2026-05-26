# Terminal: Grundlagen und Einstieg

## Was ist ein Terminal?
Das Terminal (auch Konsole oder Kommandozeile genannt) ist ein Text-basiertes Werkzeug, mit dem du direkt mit deinem Computer kommunizieren kannst. Hier gibst du Befehle ein, um Programme zu starten, Dateien zu verwalten oder Tools zu steuern.

## Wofür wird das Terminal genutzt?
- **Dateiverwaltung:** Ordner und Dateien anlegen, verschieben, löschen
- **Programmstart:** Anwendungen und Skripte ausführen
- **Versionskontrolle:** Git-Befehle direkt eingeben
- **Automatisierung:** Wiederkehrende Aufgaben mit Skripten erledigen

## Die wichtigsten Terminal-Befehle (Beispiele)
- `ls` (macOS/Linux) / `dir` (Windows) - Zeigt den Inhalt eines Ordners an
- `cd <Ordner>` - Wechselt in einen anderen Ordner
- `mkdir <Name>` - Erstellt einen neuen Ordner
- `touch <Datei>` (macOS/Linux) / `New-Item <Datei>` (Windows/PowerShell) - Erstellt eine leere Datei
- `rm <Datei>` (macOS/Linux) / `del <Datei>` (Windows) - Löscht eine Datei
- `code .` - Öffnet den aktuellen Ordner in VS Code

<!-- Ergaenzungen:
[explorer .] offnet den aktuelle Ortner
[ni] NewItem erstellt eine Datei
[del *.txt -wh] (-WhatIf) Listet alle .txt-Dateien auf, die gelöscht würden, ohne sie wirklich zu entfernen.
[code . -n] NewWindow öffnet VS Code im neuen Fenster
 -->

## Warum ist das Terminal ideal für Vibe Coding?
- **Effizienz:** Viele Aufgaben lassen sich schneller per Befehl erledigen
- **Flexibilität:** Zugriff auf alle Tools und Programme
- **Automatisierung:** Skripte und Workflows vereinfachen die Entwicklung
- **KI-Integration:** Viele KI-Tools lassen sich direkt aus dem Terminal nutzen

---

**Tipp:**
Mit der Pfeil-nach-oben-Taste kannst du vorherige Befehle wiederholen und sparst Zeit beim Arbeiten im Terminal.

---

## Terminal-Befehle vs. Git-Befehle - was ist der Unterschied?

Das Terminal ist das Fenster, in dem du Befehle eingibst. Git ist ein **Programm**, das du über das Terminal bedienst - genau wie `code` VS Code startet.

```
Terminal (das Fenster)
 ├── Terminal-Befehle: cd, mkdir, ls, New-Item ...  → steuern Dateien und Ordner
 └── Git-Befehle: git add, git commit, git push ... → steuern die Versionskontrolle
```

Der Unterschied im Alltag:
- `mkdir lernstand` - Terminal-Befehl, legt einen Ordner an
- `git add lernstand` - Git-Befehl, merkt sich den Ordner für den nächsten Commit

Git-Befehle fangen immer mit `git` an und funktionieren auf allen Betriebssystemen gleich. Terminal-Befehle unterscheiden sich je nach System (Windows vs. macOS/Linux).

Mehr zu Git: [course/03-course-library/04-git/01-git-grundlagen.md](../04-git/01-git-grundlagen.md)

Welche Terminals und Shells es gibt und wie sich VS Code Terminal vom System-Terminal unterscheidet: [02-terminal-typen.md](./02-terminal-typen.md)
