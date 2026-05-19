# VS Code Speicherkonflikt im Kurs: COURSE_MILESTONES.md kann nicht gespeichert werden

Diese Notiz ist kursspezifisch fuer den typischen Fall, dass `COURSE_MILESTONES.md` waehrend deiner Bearbeitung im Hintergrund geaendert wurde.

## Typische Fehlermeldung

- "Failed to save 'COURSE_MILESTONES.md': The content of the file is newer."

## Warum passiert das im Kurskontext?

Hauefige Ursachen im Kurs-Repo:
- Du hast kurz vorher `git pull` ausgefuehrt.
- Du hast den Branch gewechselt und `COURSE_MILESTONES.md` ist dort anders.
- Ein Agent/Script oder ein anderer geoeffneter Editor hat die Datei gespeichert.

## Konkretes Vorgehen im Kurs

1. In VS Code auf **Compare** klicken (nicht sofort Overwrite).
2. Unterschiede in Ruhe pruefen und fehlende Inhalte uebernehmen.
3. Datei speichern.
4. Im Terminal pruefen:

```bash
git status
git diff COURSE_MILESTONES.md
```

5. Erst danach normal committen.

## Wenn in der Diff-Ansicht nur "Revert Block" sichtbar ist

- **Revert Block** loescht den gruenen Aenderungsblock.
- Wenn du die gruene Seite behalten willst, **nicht** auf Revert Block klicken.

Stattdessen:
1. Diff nur lesen/vergleichen.
2. Zur normalen Datei-Ansicht von `COURSE_MILESTONES.md` wechseln.
3. Dort speichern.

Falls du Revert Block aus Versehen geklickt hast:
- sofort `Strg+Z`, dann speichern.

## Potenzielle Fehlerbehandlung: Wenn `COURSE_MILESTONES.md` weiterhin nicht speicherbar ist

1. Im offenen `COURSE_MILESTONES.md`-Tab alles markieren und kopieren.
2. Neue Datei anlegen, einfuegen und als Backup speichern (z. B. `COURSE_MILESTONES_backup_local.md`).
3. Problem-Tab von `COURSE_MILESTONES.md` schliessen.
4. `COURSE_MILESTONES.md` frisch aus dem Explorer oeffnen.
5. Inhalt aus der Backup-Datei uebernehmen.
6. Speichern.

So bleibt dein aktueller Bearbeitungsstand erhalten, auch wenn VS Code den alten Tab nicht direkt speichern kann.

## Wann darf ich Overwrite nutzen?

Nur wenn du sicher weisst, dass die neuere Festplattenversion keine benoetigten Aenderungen enthaelt.

Im Zweifel gilt im Kurs: **erst Compare, dann entscheiden**.

## Weiterfuehrung (allgemein)

- [VS Code: Speicherkonflikt bei geaenderter Datei (Compare/Overwrite)](../../03-course-library/02-vscode/03-vscode-speicherkonflikt-compare-overwrite.md)
