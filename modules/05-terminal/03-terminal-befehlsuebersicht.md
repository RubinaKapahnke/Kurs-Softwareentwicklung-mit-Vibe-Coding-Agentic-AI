# Terminal-Befehlsuebersicht

Dieses Dokument ist zum schnellen Nachschlagen gedacht. Wenn du erst verstehen willst, warum ein Befehl noetig ist, lies vorher [Terminal: Grundlagen und Einstieg](./01-terminal-grundlagen.md).

---

## Navigation und Orientierung

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `pwd` | Zeigt den aktuellen Ordnerpfad an (Print Working Directory). | `pwd` | Hilfreich, um zu wissen, wo du bist. |
| `cd <Ordnername>` | Wechselt in einen anderen Ordner (Change Directory). | `cd projects` oder `cd ..` | `cd ..` geht eine Ebene hoch; `.` ist der aktuelle Ordner. |
| `cd ~` | Wechselt ins Home-Verzeichnis. | `cd ~` | Schnell nach Hause navigieren. |
| `ls` (macOS/Linux) oder `dir` (Windows) | Listet den Inhalt des aktuellen Ordners auf. | `ls` oder `dir` | `ls -la` zeigt auch versteckte Dateien. |

## Dateien und Ordner verwalten

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `mkdir <Name>` | Erstellt einen neuen Ordner (Make Directory). | `mkdir lernstand_max` | Der Ordner wird sofort angelegt. |
| `touch <Datei>` (macOS/Linux) oder `echo > <Datei>` (Windows) | Erstellt eine leere Datei. | `echo > test.md` | Windows nutzt `echo`, macOS/Linux nutzt `touch`. |
| `cp <Quelle> <Ziel>` (macOS/Linux) oder `copy <Quelle> <Ziel>` (Windows) | Kopiert eine Datei. | `cp README.md README_backup.md` | Nutze absolute oder relative Pfade. |
| `mv <Alt> <Neu>` (macOS/Linux) oder `move <Alt> <Neu>` (Windows) | Verschiebt oder benennt eine Datei um. | `mv alt.md neu.md` | Funktioniert auch für Ordner. |
| `rm <Datei>` (macOS/Linux) oder `del <Datei>` (Windows) | Loescht eine Datei. | `rm test.md` | **Achtung:** Geloeschte Dateien sind sofort weg! |
| `rmdir <Ordner>` (macOS/Linux) oder `rmdir <Ordner>` (Windows) | Loescht einen leeren Ordner. | `rmdir lernstand_max` | Der Ordner muss leer sein. |

## Mit VS Code arbeiten

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `code .` | Oeffnet den aktuellen Ordner in VS Code. | `code .` | Der Punkt `.` bedeutet "diesen Ordner". |
| `code <Datei>` | Oeffnet eine spezifische Datei in VS Code. | `code README.md` | Dateien muessen im aktuellen Ordner sein. |

## Praktische Tipps

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `clear` (macOS/Linux) oder `cls` (Windows) | Loeert die Terminal-Anzeige. | `clear` oder `cls` | Befehlsverlauf bleibt erhalten. |
| ↑ (Pfeiltaste oben) | Ruft vorherige Befehle auf. | Drücke ↑, um den letzten Befehl zu sehen. | Sparpotenzial: Zeit bei sich wiederholenden Aufgaben. |
| `Tab` (Tabulatortaste) | Auto-Vervollstaendigung fuer Datei- und Ordnernamen. | `cd le` + `Tab` → auto-vervollstaendigt zu `lernstand_` | Sehr hilfreich, um Tippfehler zu vermeiden. |

---

> [!TIP]
> **Windows vs. macOS/Linux:** Einige Befehle unterscheiden sich je nach Betriebssystem (z.B. `dir` vs. `ls`). Wenn ein Befehl nicht funktioniert, versuche die Alternative aus der Tabelle.

> [!IMPORTANT]
> **Immer vorsichtig mit `rm` oder `del`:** Geloeschte Dateien koennen nicht einfach wiederhergestellt werden. Teste deine Befehle zuerst mit kleinen, unimportanten Dateien.
