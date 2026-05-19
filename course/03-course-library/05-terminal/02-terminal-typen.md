# Terminal-Typen: Welches Terminal nutze ich wann?

Das Terminal ist kein einzelnes Programm - es gibt viele verschiedene. Welches du nutzt, haengt von deinem Betriebssystem ab und davon, ob du direkt am System oder innerhalb von VS Code arbeitest.

---

## Das Prinzip: Shell vs. Terminal

Zwei Begriffe werden oft verwechselt:

- **Terminal (Emulator):** Das Fenster, in dem du tippst. Es zeigt Text an und nimmt Eingaben entgegen.
- **Shell:** Das Programm dahinter, das deine Befehle versteht und ausfuehrt.

Das Terminal ist die Oberflaeche, die Shell ist der Motor. Ein Terminal-Fenster kann verschiedene Shells starten.

```
Terminal-Fenster
 └── Shell (z.B. PowerShell, bash, zsh)
      └── deine Befehle werden hier ausgefuehrt
```

---

## Gaengige Shells nach Betriebssystem

### Windows

| Shell | Beschreibung | Gängig? |
| :--- | :--- | :--- |
| **PowerShell** | Moderne Shell mit vielen Befehlen und Skriptfaehigkeiten. Standard in VS Code auf Windows. | ✅ Empfohlen |
| **Command Prompt (cmd.exe)** | Alte Windows-Eingabeaufforderung. Weniger Befehle, keine modernen Features. | ⚠️ Veraltet |
| **Git Bash** | Bash-Shell fuer Windows, wird mit Git for Windows mitinstalliert. Emuliert Linux/macOS-Befehle. | ✅ Beliebt |
| **WSL (Windows Subsystem for Linux)** | Echtes Linux-Terminal direkt in Windows. Fuer Fortgeschrittene. | Optional |

### macOS

| Shell | Beschreibung | Gängig? |
| :--- | :--- | :--- |
| **zsh** | Standard-Shell auf macOS (seit Catalina 2019). Modern, erweiterbar. | ✅ Standard |
| **bash** | Vorgaenger von zsh, war bis 2019 Standard auf macOS. Noch auf vielen Systemen aktiv. | ✅ Verbreitet |

### Linux

- Meist **bash** oder **zsh**, je nach Distribution.

---

## Unterschiede Windows vs. macOS im Alltag

Die Shell bestimmt, welche Befehle funktionieren. Das fuehrt zu den haeufigsten Verwirrungen:

| Aufgabe | Windows (PowerShell) | macOS/Linux (zsh/bash) |
| :--- | :--- | :--- |
| Ordnerinhalt anzeigen | `dir` oder `ls` | `ls` |
| Datei erstellen | `New-Item datei.md` | `touch datei.md` |
| Datei loeschen | `del datei.md` | `rm datei.md` |
| Terminal leeren | `cls` | `clear` |
| Aktuellen Pfad zeigen | `pwd` (PowerShell) oder `cd` | `pwd` |

> **Gut zu wissen:** Git-Befehle (`git add`, `git commit`, ...) funktionieren auf allen Systemen identisch - egal welche Shell du nutzt. Nur die "normalen" Terminal-Befehle unterscheiden sich.

---

## Terminal in VS Code vs. System-Terminal

Du kannst das Terminal auf zwei Wegen oeffnen:

### System-Terminal

Das ist die Terminal-App deines Betriebssystems, ausserhalb von VS Code:

- **Windows:** "Windows PowerShell" oder "Windows Terminal" (ueber Startmenue suchen)
- **macOS:** "Terminal" (im Ordner Programme → Dienstprogramme) oder "iTerm2" (beliebte Alternative)

### Integriertes Terminal in VS Code

VS Code hat ein eigenes Terminal-Fenster eingebaut. Du oeffnest es mit:

- **Windows:** `` Strg + ` `` (Backtick, links neben der 1)
- **macOS:** `` Cmd + ` ``
- Oder ueber das Menue: **Terminal → Neues Terminal**

**Was ist der Unterschied?**

| | VS Code Terminal | System-Terminal |
| :--- | :--- | :--- |
| Startet im | Projektordner (automatisch) | Home-Verzeichnis oder letztem Ort |
| Eingebunden in | VS Code Workspace | eigenstaendig |
| Praktisch fuer | direktes Arbeiten im Projekt | systemweite Aufgaben |
| Shell | dieselbe wie dein System (konfigurierbar) | dieselbe wie dein System |

**Empfehlung:** Im Kurs nutzen wir fast immer das **integrierte Terminal in VS Code** - es startet automatisch im richtigen Ordner und spart den Wechsel zwischen Fenstern.

---

## VS Code Terminal: mehrere Shells gleichzeitig

VS Code erlaubt es, mehrere Terminal-Tabs zu oeffnen und verschiedene Shells zu nutzen. Du kannst rechts im Terminal-Panel auf das **+**-Symbol klicken und dann eine Shell auswaehlen.

Auf Windows siehst du dort zum Beispiel: PowerShell, Command Prompt, Git Bash - je nachdem was installiert ist.

---

## Beliebte Terminal-Apps (optional, fuer Fortgeschrittene)

Wer mehr aus dem Terminal herausholen will, greift zu speziellen Apps:

| App | System | Was macht sie besser? |
| :--- | :--- | :--- |
| **Windows Terminal** | Windows | Tabs, bessere Darstellung, konfigurierbar |
| **iTerm2** | macOS | Viele Extras: Split-Panels, Suchfunktion, Themes |
| **Oh My Zsh** | macOS/Linux | Erweiterung fuer zsh: Themes, Plugins, Autovervollstaendigung |

Fuer den Einstieg reichen das VS Code Terminal und die System-Standardshell vollkommen aus.

---

## Kurz zusammengefasst

- **Shell** = der Motor (PowerShell, bash, zsh)
- **Terminal** = das Fenster (VS Code Terminal, Windows Terminal, iTerm2)
- **VS Code Terminal** = praktisch, startet automatisch im Projektordner
- **Git-Befehle** = auf allen Systemen gleich
- **Terminal-Befehle** = unterscheiden sich zwischen Windows und macOS/Linux
