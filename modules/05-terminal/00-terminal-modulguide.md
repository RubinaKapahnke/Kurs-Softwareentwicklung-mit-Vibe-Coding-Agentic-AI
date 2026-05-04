# Modulguide: Terminal

Dieses Modul fuehrt in die Arbeit mit dem Terminal ein und ordnet die wichtigsten Kommandos fuer Navigation und Dateiverwaltung ein.

## Inhalt

1. [Terminal: Grundlagen und Einstieg](./01-terminal-grundlagen.md)
2. [Terminal-Befehlsuebersicht](./03-terminal-befehlsuebersicht.md)

## Selbstcheck

Nutze die Checklisten als Selbstcheck fuer das Terminal-Modul.

### Must have

- [x] Ich kann das Terminal in VS Code oeffnen und nutzen.
- [x] Ich kann mit `pwd` (oder `cd` auf Windows) meinen aktuellen Standort pruefen.
- [x] Ich kann mit `ls` oder `dir` den Ordnerinhalt anzeigen.
- [x] Ich kann mit `cd <ordnername>` in einen Ordner navigieren.
- [x] Ich kann mit `cd ..` eine Ebene nach oben gehen.
- [x] Ich kann neue Ordner mit `mkdir <ordnername>` erstellen.
- [x] Ich kann neue Dateien mit `echo. > datei.md` (Windows) oder `touch datei.md` (Mac/Linux) anlegen.
<!-- an stelle von [echo . > datei.md] besser [ni datei.md] echo kann dateien überschreiben -->
- [x] Ich kann Dateien mit `rm` oder `del` loeschen.
<!-- ergänze mit [ri datei.md] oder [Remove-Item datei.md]
Der Befehl [Remove-Item *.txt -wh] (WhatIf) löscht keine Dateien. Er simuliert den Löschvorgang nur im Terminal und zeigt an, welche .txt-Dateien im aktuellen Pfad betroffen wären. Dies ist die sicherste Methode, um Platzhalter-Befehle (Wildcards) zu prüfen, bevor man sie scharf ausführt. -->


### Should have

- [x] Ich verstehe relative vs. absolute Pfade im Dateisystem.
- [x] Ich kann Dateien mit `mv` verschieben und umbenennen.
- [x] Ich kann Dateien mit `cp` kopieren.
- [x] Ich nutze die Tab-Taste zur Auto-Vervollstaendigung.
- [x] Ich nutze die Pfeiltasten, um fruehere Befehle schnell zu wiederholen.
- [x] Ich kann mit `Strg + C` einen laufenden Prozess abbrechen.
- [x] Ich kann mit `clear` oder `cls` das Terminal aufraeumen.
<!-- in Win geht das mit [Strg] + L -->
### Nice to have

- [x] Ich kombiniere mehrere Befehle fluessig hintereinander.
- [x] Ich nutze Terminal-Shortcuts routiniert und spare mir damit Zeit.
- [x] Ich kann Fehlermeldungen im Terminal lesen und verstehen, was schiefgelaufen ist.
- [x] Ich arbeite ueberwiegend im Terminal statt mit der graphischen Oberflaeche.

## Wenn du etwas nachholen willst

- Fuer Grundlagen: [Terminal: Grundlagen und Einstieg](./01-terminal-grundlagen.md)
- Fuer Befehle: [Terminal-Befehlsuebersicht](./03-terminal-befehlsuebersicht.md)