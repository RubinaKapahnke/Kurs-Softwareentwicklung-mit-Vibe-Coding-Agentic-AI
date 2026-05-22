# Git-Befehlsuebersicht

Dieses Dokument ist zum schnellen Nachschlagen gedacht. Wenn du erst verstehen willst, warum ein Befehl noetig ist, lies vorher [Git: Grundlagen und Einstieg](./01-git-grundlagen.md).

> **Gut zu wissen:** Git-Befehle sind auf allen Betriebssystemen identisch - egal ob Windows, macOS oder Linux. Unterschiede gibt es nur bei Terminal-Befehlen ausserhalb von Git (z.B. Dateien anlegen). Fuer diese Unterschiede: [Terminal-Befehlsuebersicht](../05-terminal/03-terminal-befehlsuebersicht.md).

## Orientierung

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `git status` | Zeigt den aktuellen Stand deiner Arbeitskopie. | `git status` | Fast immer der beste erste Check. |
| `git log --oneline` | Zeigt die letzten Commits kompakt an. | `git log --oneline` | Hilft beim schnellen Rueckblick. |
| `git branch` | Listet deine lokalen Branches auf. | `git branch` | Der aktuelle Branch ist mit `*` markiert. |

## Setup und Start

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `git --version` | Prueft, ob Git installiert ist. | `git --version` | Hilfreich bei Setup-Problemen. |
| `git config --global user.name "Dein Name"` | Setzt deinen Namen fuer Commits. | `git config --global user.name "Max Muster"` | Nur einmal pro Rechner noetig. |
| `git config --global user.email "Mail"` | Setzt deine Mailadresse fuer Commits. | `git config --global user.email "max@example.com"` | Sollte zu deinem GitHub-Konto passen. |
| `git clone <url>` | Laedt ein bestehendes Repository herunter. | `git clone https://github.com/...` | Erst danach im Projektordner arbeiten. |

## Aenderungen speichern

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `git add <datei>` | Nimmt eine konkrete Datei in die Staging Area auf. | `git add README.md` | Gut fuer kleine, bewusste Commits. |
| `git add .` | Nimmt alle Aenderungen im aktuellen Ordner auf. | `git add .` | Vorher mit `git status` pruefen. |
| `git commit -m "Nachricht"` | Speichert den vorbereiteten Stand als Commit. | `git commit -m "docs: lernstand aktualisiert"` | Die Nachricht sollte sagen, was gemacht wurde. |

## Branches und Zusammenarbeit

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `git checkout -b <branch-name>` | Erstellt einen neuen Branch und wechselt direkt hinein. | `git checkout -b feat/mein-thema` | Sprechenden Branch-Namen wählen. |
| `git checkout <branch-name>` | Wechselt in einen vorhandenen Branch. | `git checkout main` | Vorher pruefen, ob lokale Aenderungen offen sind. |
| `git push origin <branch-name>` | Laedt genau diesen Branch zu GitHub hoch. | `git push origin feat/mein-thema` | Branch-Name muss stimmen. |
| `git branch -d <branch-name>` | Loescht einen lokalen Branch nach dem Merge. | `git branch -d feat/mein-thema` | Nur nutzen, wenn der Branch wirklich fertig ist. |

## Synchronisieren

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `git pull origin main` | Holt den aktuellen Stand von `main`. | `git pull origin main` | Vor dem Start einer neuen Aufgabe sinnvoll. |
| `git push` | Schiebt lokale Commits zum Remote. | `git push` | Funktioniert nur, wenn ein Remote-Tracking gesetzt ist. |

## Fehler sicher abfangen

| Befehl | Wofuer? | Beispiel | Achtung |
| :--- | :--- | :--- | :--- |
| `git stash` | Parkt unfertige lokale Aenderungen. | `git stash` | Gut vor einem schnellen Branch-Wechsel. |
| `git revert <commit>` | Macht einen frueheren Commit mit neuem Commit rueckgaengig. | `git revert a1b2c3d` | Sicherer als Historie zu loeschen. |

> [!TIP]
> Wenn du unsicher bist, starte mit `git status`, lies die Meldung genau und arbeite dann in kleinen Schritten weiter.