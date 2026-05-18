# Terminal-Befehlsuebersicht

Dieses Dokument ist zum schnellen Nachschlagen gedacht. Wenn du erst verstehen willst, warum ein Befehl noetig ist, lies vorher [Terminal: Grundlagen und Einstieg](./01-terminal-grundlagen.md).

> **Gilt fuer alle Tabellen:** Git-Befehle sind auf allen Betriebssystemen identisch - nur Terminal-Befehle unterscheiden sich. Details: [Terminal-Typen](./02-terminal-typen.md) und [Git-Befehlsuebersicht](../04-git/03-git-befehlsuebersicht.md).

---

## Navigation und Orientierung

| Wofuer? | Windows (PowerShell) | macOS/Linux (zsh/bash) | Beispiel | Achtung |
| :--- | :--- | :--- | :--- | :--- |
| Aktuellen Pfad anzeigen | `pwd` | `pwd` | Du tippst `pwd` und siehst z.B. `D:\DEV\GitHub Repos\Kurse\vibe-coding-0426` | Hilfreich, wenn du nicht mehr weisst, in welchem Ordner du gerade bist. |
| In anderen Ordner wechseln | `cd <Ordnername>` | `cd <Ordnername>` | `cd course/learners/mein-name` navigiert in den eigenen Lernordner; `cd ..` geht eine Ebene hoch | `.` ist der aktuelle Ordner, `..` ist der Elternordner. |
| Ins Home-Verzeichnis wechseln | `cd ~` | `cd ~` | Du bist irgendwo tief im Repo und willst schnell raus: `cd ~` bringt dich ins Home-Verzeichnis | Guter Reset-Punkt, wenn du dich verirrt hast. |
| Ordnerinhalt anzeigen | `dir` | `ls` | `dir` im Repo-Ordner zeigt alle Dateien wie `README.md`, `COURSE_MILESTONES.md` | `ls -la` (macOS) zeigt auch versteckte Dateien wie `.github/`. |

## Dateien und Ordner verwalten

| Wofuer? | Windows (PowerShell) | macOS/Linux (zsh/bash) | Beispiel | Achtung |
| :--- | :--- | :--- | :--- | :--- |
| Neuen Ordner erstellen | `mkdir <Name>` | `mkdir <Name>` | `mkdir course/learners/alex` legt einen neuen Lernordner fuer Alex an | Der Ordner wird sofort angelegt. |
| Leere Datei erstellen | `New-Item <Datei>` | `touch <Datei>` | `New-Item lernfortschritt_alex.md` (Windows) bzw. `touch lernfortschritt_alex.md` (macOS) | Nicht `echo > datei.md` nutzen - schreibt ungewollten Text in die Datei. |
| Datei kopieren | `copy <Quelle> <Ziel>` | `cp <Quelle> <Ziel>` | `copy lernfortschritt_mein-name.md lernfortschritt_mein-name_backup.md` sichert die Datei | Nutze relative Pfade, wenn Quelle und Ziel im selben Ordner liegen. |
| Datei verschieben oder umbenennen | `move <Alt> <Neu>` | `mv <Alt> <Neu>` | `move notizen.md lernjournal.md` benennt die Datei um | Funktioniert auch fuer ganze Ordner. |
| Datei loeschen | `del <Datei>` | `rm <Datei>` | `del lernfortschritt_mein-name_backup.md` loescht die Sicherungskopie | **Achtung:** Geloeschte Dateien sind sofort weg - kein Papierkorb! |
| Leeren Ordner loeschen | `rmdir <Ordner>` | `rmdir <Ordner>` | `rmdir course/learners/alex` entfernt den Ordner wieder | Der Ordner muss voellig leer sein. |

## Mit VS Code arbeiten

| Wofuer? | Windows (PowerShell) | macOS/Linux (zsh/bash) | Beispiel | Achtung |
| :--- | :--- | :--- | :--- | :--- |
| Aktuellen Ordner in VS Code oeffnen | `code .` | `code .` | Du bist im Repo-Ordner und tippst `code .` - VS Code oeffnet das gesamte Projekt | Der Punkt `.` bedeutet "diesen Ordner". |
| Einzelne Datei in VS Code oeffnen | `code <Datei>` | `code <Datei>` | `code lernfortschritt_mein-name.md` oeffnet direkt die eigene Lernfortschritt-Datei | Die Datei muss im aktuellen Ordner liegen oder du gibst den vollen Pfad an. |

## Praktische Tipps

| Wofuer? | Windows (PowerShell) | macOS/Linux (zsh/bash) | Beispiel | Achtung |
| :--- | :--- | :--- | :--- | :--- |
| Terminal-Anzeige leeren | `cls` | `clear` | Nach vielen Befehlen wird es unuebersichtlich - `cls` oder `clear` raeumen auf | Der Befehlsverlauf (↑-Taste) bleibt erhalten. |
| Vorherige Befehle aufrufen | ↑ Pfeiltaste | ↑ Pfeiltaste | Du hast gerade `git status` getippt und willst es nochmal: einmal ↑ druecken | Mehrfach ↑ druecken geht weiter in den Verlauf zurueck. |
| Auto-Vervollstaendigung | `Tab` | `Tab` | `cd course/lea` + `Tab` → vervollstaendigt zu `cd course/learners/` | Sehr hilfreich, um Tippfehler bei langen Pfaden zu vermeiden. |

---

> [!IMPORTANT]
> **Immer vorsichtig mit `rm` oder `del`:** Geloeschte Dateien koennen nicht einfach wiederhergestellt werden. Teste deine Befehle zuerst mit kleinen, unimportanten Dateien.
