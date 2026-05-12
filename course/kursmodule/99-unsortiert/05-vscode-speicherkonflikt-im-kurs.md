# VS Code Speicherkonflikt im Kurs: NEXT_STEPS.md kann nicht gespeichert werden

Diese Notiz ist kursspezifisch fuer den typischen Fall, dass `NEXT_STEPS.md` waehrend deiner Bearbeitung im Hintergrund geaendert wurde.

## Typische Fehlermeldung

- "Failed to save 'NEXT_STEPS.md': The content of the file is newer."

## Warum passiert das im Kurskontext?

Hauefige Ursachen im Kurs-Repo:
- Du hast kurz vorher `git pull` ausgefuehrt.
- Du hast den Branch gewechselt und `NEXT_STEPS.md` ist dort anders.
- Ein Agent/Script oder ein anderer geoeffneter Editor hat die Datei gespeichert.

## Konkretes Vorgehen im Kurs

1. In VS Code auf **Compare** klicken (nicht sofort Overwrite).
2. Unterschiede in Ruhe pruefen und fehlende Inhalte uebernehmen.
3. Datei speichern.
4. Im Terminal pruefen:

```bash
git status
git diff NEXT_STEPS.md
```

5. Erst danach normal committen.

## Wenn in der Diff-Ansicht nur "Revert Block" sichtbar ist

- **Revert Block** loescht den gruenen Aenderungsblock.
- Wenn du die gruene Seite behalten willst, **nicht** auf Revert Block klicken.

Stattdessen:
1. Diff nur lesen/vergleichen.
2. Zur normalen Datei-Ansicht von `NEXT_STEPS.md` wechseln.
3. Dort speichern.

Falls du Revert Block aus Versehen geklickt hast:
- sofort `Strg+Z`, dann speichern.

## Potenzielle Fehlerbehandlung: Wenn `NEXT_STEPS.md` weiterhin nicht speicherbar ist

1. Im offenen `NEXT_STEPS.md`-Tab alles markieren und kopieren.
2. Neue Datei anlegen, einfuegen und als Backup speichern (z. B. `NEXT_STEPS_backup_local.md`).
3. Problem-Tab von `NEXT_STEPS.md` schliessen.
4. `NEXT_STEPS.md` frisch aus dem Explorer oeffnen.
5. Inhalt aus der Backup-Datei uebernehmen.
6. Speichern.

So bleibt dein aktueller Bearbeitungsstand erhalten, auch wenn VS Code den alten Tab nicht direkt speichern kann.

## Wann darf ich Overwrite nutzen?

Nur wenn du sicher weisst, dass die neuere Festplattenversion keine benoetigten Aenderungen enthaelt.

Im Zweifel gilt im Kurs: **erst Compare, dann entscheiden**.

## Weiterfuehrung (allgemein)

- [VS Code: Speicherkonflikt bei geaenderter Datei (Compare/Overwrite)](../../course-library/02-vscode/03-vscode-speicherkonflikt-compare-overwrite.md)
