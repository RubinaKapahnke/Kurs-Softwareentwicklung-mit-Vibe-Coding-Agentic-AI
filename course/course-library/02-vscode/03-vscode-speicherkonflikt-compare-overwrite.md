# VS Code: Speicherkonflikt bei geaenderter Datei (Compare/Overwrite)

Wenn VS Code meldet, dass eine Datei nicht gespeichert werden kann, liegt oft ein sogenannter Speicherkonflikt vor.

Typische Meldung:
- "Failed to save ... The content of the file is newer."

## Warum passiert das?

Ein Speicherkonflikt bedeutet:
- Deine geoeffnete Editor-Version und die Version auf der Festplatte sind nicht mehr gleich.

Das kann passieren, wenn waehrend deiner Bearbeitung zum Beispiel:
- ein `git pull`/Branch-Wechsel die Datei aktualisiert
- ein Skript/Tool die Datei neu geschrieben hat
- dieselbe Datei in einem zweiten Editor-Fenster gespeichert wurde
- ein Merge/Rebase/Autoformatierung die Datei im Hintergrund geaendert hat

## Was bedeuten die Buttons?

- **Compare**
  - Zeigt den Unterschied zwischen deiner Editor-Version und der neueren Datei auf der Festplatte.
  - Das ist fast immer der sichere erste Schritt.

- **Overwrite**
  - Ueberschreibt die neuere Datei auf der Festplatte mit deiner aktuellen Editor-Version.
  - Das kann fremde/neuere Aenderungen loeschen.

## Wichtig in der Compare-Ansicht: Revert Block

In der Diff-/Compare-Ansicht zeigt VS Code oft nur den Pfeil **Revert Block**.

- **Revert Block** verwirft den gruenen Aenderungsblock.
- Wenn du den gruenden Inhalt behalten willst, **nicht** auf Revert Block klicken.

Sicheres Vorgehen:
1. Diff nur zum Pruefen verwenden.
2. Zur normalen Datei-Ansicht zurueckgehen.
3. Dort speichern.

Falls Revert Block versehentlich geklickt wurde:
- Sofort `Strg+Z` (oder `Cmd+Z`) und dann speichern.

## Sicheres Vorgehen in 4 Schritten

1. Klicke zuerst auf **Compare**.
2. Pruefe beide Seiten und entscheide, welche Zeilen behalten werden muessen.
3. Uebernimm fehlende Zeilen in die gewuenschte Endversion.
4. Speichere danach normal.

Nur wenn du sicher bist, dass ausschliesslich deine Version gueltig ist, nutze **Overwrite**.

## Fehlerbehandlung: Wenn Speichern trotzdem weiter fehlschlaegt

Wenn die Meldung auch nach Compare/Overwrite wiederkommt, sichere zuerst deinen Text und arbeite dann mit einem frischen Datei-Tab weiter.

1. Im betroffenen Tab alles markieren und kopieren.
2. Eine neue Datei oeffnen, Inhalt einfuegen und als Backup speichern (z. B. `NEXT_STEPS_backup_local.md`).
3. Den problematischen Tab schliessen.
4. Die Originaldatei neu aus dem Explorer oeffnen.
5. Inhalt aus der Backup-Datei in die Originaldatei uebernehmen.
6. Speichern.

Damit vermeidest du Datenverlust, auch wenn der offene Editor-Stand veraltet war.

## Schnelle Entscheidungsregel

- Unsicher -> **Compare**
- Sicher, dass nur deine Version zaehlt -> **Overwrite**

## Bezug zu Git-Workflow

Nach einem Speicherkonflikt kurz im Terminal pruefen:

```bash
git status
git diff
```

So siehst du sofort, welche Zeilen am Ende wirklich im Repository landen.
