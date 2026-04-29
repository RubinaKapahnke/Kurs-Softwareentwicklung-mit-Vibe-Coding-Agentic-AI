# Uebungen pro Meilenstein

In diesem Ordner liegen zentral vorgegebene Uebungsaufgaben fuer alle Lernenden.

Wie Übungen mit Modulen und NEXT_STEPS verknüpft sind, erklärt [NEXT_STEPS.md → Architektur](../../NEXT_STEPS.md).

## Uebersicht

| Datei | Meilenstein | Titel | Lernziel-Stufe |
| :--- | :--- | :--- | :--- |
| [meilenstein-02-uebung-01.md](meilenstein-02-uebung-01.md) | 2 – Setup & Umgebung | Eigenen Lernstand im Terminal verwalten | Must have |
| [meilenstein-02-uebung-02.md](meilenstein-02-uebung-02.md) | 2 – Setup & Umgebung | Terminal-Alltag und Git-Befehle selbststaendig anwenden | Should have |
| [meilenstein-02-uebung-03.md](meilenstein-02-uebung-03.md) | 2 – Setup & Umgebung | Routine aufbauen und Lernstand dokumentieren | Nice to have |
| [meilenstein-03-uebung-01.md](meilenstein-03-uebung-01.md) | 3 – Prompting & Context-Engineering | Eigenes PRD erstellen | Must have |

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
5. Jede Uebung endet mit einem Abschnitt `Lernerfolgs-Kriterien`: 3-6 Checkboxen, mit denen Lernende selbst pruefen koennen, ob die Uebung den gewuenschten Erfolg gebracht hat. Die Kriterien beschreiben beobachtbare Erfahrungen oder Erkenntnisse – nicht nur erledigte Aufgaben.
6. Jede Uebung enthaelt einen Abschnitt `Wiederholung aus frueheren Meilensteinen`: eine kurze Liste von Faehigkeiten aus vorherigen Meilensteinen, die fuer diese Uebung benoetigt werden – mit Links zu den jeweiligen Modulen.
7. Jede Uebung enthaelt direkt vor `Lernerfolgs-Kriterien` einen Abschnitt `Abgabe`: eine kurze Checkliste (2-3 Punkte), was konkret abgegeben wird – als letzter Check vor dem PR.

**Warum?** Die Quelle ist nicht nur Referenz, sondern der **primäre Weg zum Verständnis**. Lernende klicken auf die Quelle und verstehen direkt, warum die Aufgabe wichtig ist.

## Standard fuer Anfaengerfreundlichkeit
Jede Uebung muss ohne Vorkenntnisse und ohne externe Hilfe bearbeitbar sein. Dazu gilt:

8. **"Vor dem Start"-Checkliste:** Jede Uebung beginnt mit einer Checkliste (max. 3 Punkte) zu Umgebungsvoraussetzungen (z.B. VS Code offen, Copilot aktiv, richtiger Ordner). Ausserdem: Welche Dateien brauche ich in dieser Uebung?
9. **Hinweise zu versteckten Ordnern:** Wenn eine Aufgabe auf Dateien in versteckten oder unerwarteten Ordnern (z.B. `.github/`) verweist, direkt darunter einen Navigations-Tipp erganzen (`Strg+P` / `Cmd+P` → Dateiname eintippen).
10. **"Warum?"-Hinweise fuer temporaere Inhalte:** Wenn Lernende Inhalte schreiben, die spaeter ersetzt werden, direkt dort erklaeren warum – nicht erst beim Ersetzen.
11. **Schrittweise UI-Anleitungen:** Komplexe UI-Interaktionen (z.B. Copilot Chat oeffnen, Slash-Befehle nutzen) als nummerierte Schritte, nicht als einzelnen Satz. Immer einen Fallback-Hinweis erganzen ("Falls X nicht erscheint: ...").
12. **Status-Check vor Git-Befehlen:** Vor jedem `git checkout`/`git add`/`git push`-Block immer zuerst `git status` und `git branch` zeigen.

### Formatbeispiel
- Aufgabe: Branch erstellen
- Quelle: [modules/04-git/02-git-grundlagen.md](../../modules/04-git/02-git-grundlagen.md)