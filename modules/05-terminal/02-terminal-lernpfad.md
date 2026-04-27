# 🗺️ Lernpfad: Terminal & Kommandozeile

Dieses Modul macht dich mit dem Terminal (auch Konsole oder Command Line genannt) vertraut. Du lernst, wie du deinen Computer nur mit Textbefehlen steuerst – eine essenzielle Fähigkeit für jeden Entwickler und die Voraussetzung, um Git effektiv zu nutzen.

---

## 🛠️ Meilenstein 1: Orientierung & Die ersten Schritte
**Ziel:** Das Terminal öffnen, die Angst davor verlieren und herausfinden, wo im Dateisystem man sich gerade befindet.

- [ ] **Das Terminal öffnen**
  > **Wissen:** Du lernst, wie man das in VS Code integrierte Terminal öffnet (`Terminal -> New Terminal` oder per Shortcut) und warum das praktischer ist als das eigenständige System-Terminal.

- [ ] **Den aktuellen Standort abfragen (`pwd`)**
  > **Wissen:** Du weißt, wie du mit dem Befehl `pwd` (Print Working Directory) jederzeit herausfindest, in welchem Ordner du dich gerade aufhältst. *(Unter Windows CMD oft einfach nur `cd` ohne Zusätze).*

- [ ] **Den Ordnerinhalt anzeigen (`ls` oder `dir`)**
  > **Wissen:** Du nutzt `ls` (Mac/Linux/Git Bash) oder `dir` (Windows CMD), um dir alle Dateien und Unterordner an deinem aktuellen Standort auflisten zu lassen.

---

## 🧭 Meilenstein 2: Navigation (Im Dateisystem bewegen)
**Ziel:** Wie ein Profi durch die Ordnerstruktur deines Rechners springen, ohne die Maus zu benutzen.

- [ ] **In einen Ordner hineinwechseln (`cd`)**
  > **Wissen:** Du wendest `cd <ordnername>` (Change Directory) an, um eine Ebene tiefer in einen bestimmten Unterordner zu navigieren.

- [ ] **Einen Ordner zurückgehen (`cd ..`)**
  > **Wissen:** Du verstehst, dass die zwei Punkte `..` immer "eine Ebene nach oben" (zum übergeordneten Ordner) bedeuten.

- [ ] **Relative vs. Absolute Pfade verstehen**
  > **Wissen:** Du lernst den Unterschied kennen zwischen "Gehe in den Ordner nebenan" (Relativ: `cd ./apps`) und "Gehe auf Laufwerk C: in den Ordner Benutzer" (Absolut: `cd /c/Users/Name`).

---

## 📁 Meilenstein 3: Dateien & Ordner verwalten
**Ziel:** Ordnerstrukturen aufbauen und neue Dateien anlegen – das Fundament für dein Setup im Projekt.

- [ ] **Neue Ordner erstellen (`mkdir`)**
  > **Wissen:** Du nutzt den Befehl `mkdir <ordnername>` (Make Directory), um einen oder sogar mehrere neue Ordner gleichzeitig zu erstellen.

- [ ] **Neue Dateien erstellen (`touch` oder `echo`)**
  > **Wissen:** Du weißt, wie man mit `touch datei.md` (Mac/Linux) oder `echo. > datei.md` (Windows) blitzschnell leere Dateien anlegt, ohne den Editor anfassen zu müssen.

- [ ] **Dateien und Ordner löschen (`rm`)**
  > **Wissen:** Du lernst, wie man mit `rm <dateiname>` (Remove) aufräumt. **Wichtig:** Im Terminal gibt es keinen Papierkorb – was weg ist, ist weg!

---

## 🚚 Meilenstein 4: Verschieben, Kopieren & Umbenennen
**Ziel:** Dateien organisieren und umstrukturieren.

- [ ] **Dateien verschieben & umbenennen (`mv`)**
  > **Wissen:** Du verstehst, dass der Befehl `mv` (Move) ein Multitalent ist. Du kannst damit eine Datei in einen anderen Ordner schieben oder sie einfach umbenennen (`mv alt.md neu.md`).

- [ ] **Dateien kopieren (`cp`)**
  > **Wissen:** Du nutzt `cp <quelle> <ziel>` (Copy), um Duplikate von Dateien zu erstellen.

---

## ⚡ Meilenstein 5: Terminal-Hacks für Vibe Coder
**Ziel:** Schneller und effizienter tippen. Diese Tricks sparen dir im Alltag extrem viel Zeit!

- [ ] **Die Auto-Vervollständigung nutzen (Tab-Taste)**
  > **Wissen:** Du tippst nie wieder lange Ordnernamen komplett aus! Du weißt, dass du nach den ersten Buchstaben einfach die `Tab ↹` Taste drücken kannst und das Terminal den Rest ausfüllt.

- [ ] **Die Befehlshistorie nutzen (Pfeiltasten)**
  > **Wissen:** Du lernst, wie du mit der `Pfeil-nach-oben ↑` Taste deine zuletzt eingegebenen Befehle (z. B. lange Git-Commits) einfach wiederholst, anstatt sie neu zu tippen.

- [ ] **Einen laufenden Prozess abbrechen (`Ctrl + C`)**
  > **Wissen:** Du weißt, wie du dich rettest, wenn das Terminal hängt oder ein Server läuft: Die Tastenkombination `Strg + C` (oder `Ctrl + C`) bricht alles ab und gibt dir die Eingabezeile zurück.

- [ ] **Das Terminal aufräumen (`clear`)**
  > **Wissen:** Du nutzt den Befehl `clear` (oder `cls` unter Windows), um den ganzen Textsalat auf dem Bildschirm wegzuwischen und wieder eine saubere, leere Konsole vor dir zu haben.