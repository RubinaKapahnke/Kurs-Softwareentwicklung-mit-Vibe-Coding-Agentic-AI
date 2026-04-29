# Uebungen pro Meilenstein

In diesem Ordner liegen zentral vorgegebene Uebungsaufgaben fuer alle Lernenden.

Wie Übungen mit Modulen und NEXT_STEPS verknüpft sind, erklärt [NEXT_STEPS.md → Architektur](../../NEXT_STEPS.md).

## Benennung
- meilenstein-XX-uebung-YY.md

## Vorgehen fuer Lernende
1. **Meilenstein öffnen:** [NEXT_STEPS.md](../../NEXT_STEPS.md) → Relevant Meilenstein suchen
2. **Module erkunden:** Modul-Einstiege von dort → Für jedes Modul `00-modulguide.md` öffnen → Von dort zu Grundlagen/Befehlsuebersicht und Selbstcheck navigieren
3. **Aufgabe lesen:** [docs/uebungen](.) → Aktuelle Übung öffnen
4. **Mit Quellen arbeiten:** Für jede Aufgabe: Quelle (Link zu Modul) klicken → Modul lesen → Aufgabe lösen
5. **Lösen und dokumentieren:** Antwortdatei im eigenen Ordner anlegen
   `apps/learners/<name>/uebung-meilenstein-XX-YY.md`
6. **Fortschritt eintragen:** Lernjournal in Lernfortschrittsdatei aktualisieren
7. **Abgabe:** Push + PR erstellen

## Standard fuer neue Uebungen (Quellen-Standard)
Damit kuenftige Uebungen einheitlich und selbststaendig bearbeitbar sind, gilt ab sofort:
1. Jeder Aufgabenpunkt bekommt direkt darunter eine Quelle.
2. Die Quelle ist ein klickbarer Link auf ein konkretes Modul-Dokument in modules/.
3. Am Ende der Uebung steht ein kurzer Abschnitt "Modulabdeckung (Check)".
4. Wenn ein Aufgabenpunkt keine passende Quelle in den Modulen hat, wird die Uebung erst nach Ergaenzung des passenden Moduls veroeffentlicht.

**Warum?** Die Quelle ist nicht nur Referenz, sondern der **primäre Weg zum Verständnis**. Lernende klicken auf die Quelle und verstehen direkt, warum die Aufgabe wichtig ist.

### Formatbeispiel
- Aufgabe: Branch erstellen
- Quelle: [modules/04-git/02-git-grundlagen.md](../../modules/04-git/02-git-grundlagen.md)