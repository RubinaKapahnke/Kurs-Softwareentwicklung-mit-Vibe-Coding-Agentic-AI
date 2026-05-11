# Onboarding-Lerninhalte

Diese Struktur dient als zukünftige Quellenablage für Onboarding-Inhalte pro Lektion.

## Ziel

- Pro Onboarding-Lektion gibt es einen eigenen Ordner.
- Inhalte werden hier redaktionell gepflegt.
- Die Onboarding-App kann diese Inhalte per markerbasierter Synchronisierung übernehmen.

## Format-Regel

- Inhalte, die synchronisiert werden sollen, liegen immer zwischen Markern.
- Marker-Konvention:
  - `<!-- onboarding:start <section-id> -->`
  - `<!-- onboarding:end <section-id> -->`
- Die Zuordnung zu einer bestimmten Lesson-Flow-Seite läuft über die `section-id` im Marker, nicht über die Überschrift im Text.
- Du kannst daher frei Überschriften wie `Kapitel 1`, `Kapitel 2` usw. verwenden, solange die `section-id` stabil bleibt.

## Stand

Die Inhalte in den Lektionen-Ordnern entsprechen dem aktuellen Stand der Onboarding-App (Schrittdaten plus aktuell in der Schrittansicht hinterlegte Zusatzinhalte).

