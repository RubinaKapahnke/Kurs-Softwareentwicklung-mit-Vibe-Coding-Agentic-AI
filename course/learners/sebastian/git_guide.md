<span style="color:orange;">

# Befehle für Git in VS Code und PowerShell
</span>

### Git Branches anzeigen

| Methode / Code | Wirkung | Bedeutung | Besonderheit |
| :--- | :--- | :--- | :--- |
| `git branch` | Liste anzeigen || Zeigt alle lokalen Branch an. |
| `git branch -r` | Remote Liste | [ -r = remote] | Zeigt Branch auf dem Server (origin). |
| `git branch -a` | Komplette Liste | [ -a = all] | Zeigt alle Branches, lokale und Remote. |


### Git Branch wechseln (Checkout vs. Switch)

| Code | Wirkung | Besonderheiten |
| :--- | :--- | :--- |
| `git switch [Name]` | Wechselt den aktiven Branch | **Moderner Standard.** Sicherer als Checkout <br> Falls es den Branch nicht gibt, wird abgebrochen und es gibt eine Fehlermeldung |
| `git checkout [Name]` | Wechselt den aktiven Branch | Klassischer Allrounder (heute eher für Dateien). <br> Falls es den Branch nicht gibt, wird abgebrochen und es gibt eine Fehlermeldung |
| `git switch -` | Wechselt zum vorherigen Branch | Perfekt für schnelles Hin- und Herspringen|
| `git switch -c [Name]` | Erstellt Branch & wechselt sofort | [ -c = create] <br>Erstellt einen neuen Branch und wechselt zu diesem. <br> Falls es den Branch schon gibt, wird abgebrochen und es gibt eine Fehlermeldung |

<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">


### 💡 Hinweis: Ein neuer Branch braucht immer einen Startpunkt als Basis.
> **Die Branch-Basis :**  
 Gibst du bei der Erstellung keine **Basis** an, wird automatisch der aktive Branch als Ausgangspunkt genommen.  
 **[Für die Fortgeschrittenen:** Ein Branch kann auch auf Basis eines Commit-Hashs erstellt werden.]


### Git Branch erstellen

| Methode / Code | Wirkung | Besonderheit |
| :--- | :--- | :--- |
| `git branch [NeuerBranch]` | Branch erstellen | Wenn es den angegebenen Branch-Namen nicht gibt, wird ein neuer Branch erstellt, ohne hineinzuwechseln. <br>Die Basis ist der aktuelle Branch. |
| `git switch -c [NeuerBranch] [BasisBranch]` | Erstellen & Wechseln von Basis | **Moderne Version!** [ -c = create] <br>Erstellt einen Branch, nutzt dazu die angegebene Basis **[BasisBranch]** als Ursprung und wechselt den Status zum neuen Branch.<br> Falls keine Basis angegeben wird, wird der aktuelle Branch genommen |
| `git checkout -b [NeuerBranch]` | Erstellen & Wechseln | [ -b = branch] <br> Erstellt den **Branch** und aktiviert ihn sofort. |
| `git checkout -b [NeuerBranch] [BasisBranch]` | Erstellen & Wechseln von Basis | [ -b = branch] <br>Erstellt einen Branch, nutzt dazu die angegebene Basis **[BasisBranch]** als Ursprung und wechselt den Status zum neuen Branch.<br> Falls keine Basis angegeben wird, wird der aktuelle Branch genommen |
<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">

### Git Branch Umbenennen

| Methode / Code | Wirkung | Besonderheit |
| :--- | :--- | :--- |
| `git branch -m [NeuerName]` | ⚠️Aktuellen Branch umbenennen | [ -m = move] <br> Korrigiert Tippfehler im aktiven Branch. |
| `git branch -m [Alt] [Neu]` | ⚠️Beliebigen Branch umbenennen | [ -m = move] <br> Benennt einen Branch um, ohne hineinzuwechseln. |


### ⚠️ Wichtige Regel: Keine Remote-Branches umbenennen

> **GOLDENE REGEL:**  
 Benenne einen Branch **niemals** um (`git branch -m`),  
 wenn er bereits auf GitHub hochgeladen wurde! Dies führt bei Anfängern zu Synchronisationsfehlern.
> **DIE LÖSUNG:**  Nutze den "Workflow: Branch-Korrektur", um den Namen sicher zu korrigieren.


### Sicherer Workflow: Branch-Korrektur (nach Push zu GitHub)

| Lektion | Befehl | Wo ausführen? | Wirkung |
| :--- | :--- | :--- | :--- |
| **1. Vorbereiten** | `git switch [AlterName]` | - | Wechsel in den falsch benannten Branch.  |
| **2. Neu erstellen** | `git switch -c [NeuerName]` | **Im falschen Branch** | Kopiert alle Inhalte lokal in den Branch mit neuen Namen und springt in diesen |
| **3. Synchronisieren** | `git push origin -u [NeuerName]` | Im neuen Branch | Lädt den Namen hoch und verknüpft Lokal mit GitHub. |
| **4. GitHub aufräumen** | `git push origin --delete [AlterName]` | Im neuen Branch | Löscht den falschen Branch auf dem Server. |
| **5. PC aufräumen** | `git branch -d [AlterName]` | Im neuen Branch | Löscht den falschen Branch lokal von der Liste. |
<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">

### Git Staging Area (Änderungen vormerken)



| Methode / Code | Wirkung | Besonderheit |
| :--- | :--- | :--- |
| `git add .` | **Alles vormerken** | Fügt alle neuen, geänderten und gelöschten Dateien der Staging Area (Warenkorb), ab deinem aktuellen Standort (Path) im Terminal hinzu. |
| `git add -A` | **Alles im ganzen Projekt** | [ -A = all] <br>Sammelt jede Änderung im gesamten Repository ein, egal wo du im Terminal gerade stehst. |
| `git add [Datei]` | Gezieltes Vormerken | Fügt nur eine ganz bestimmte Datei hinzu. |
| `git add -u` | Nur Updates | [ -u = update] <br>Fügt nur Änderungen an bereits bekannten Dateien hinzu (ignoriert neue Dateien). <br> das selbe Verhalten wie bei [git commit -am "Text"] hier steht das -a für "nur Updates" |

### Git Staging Area (Dateien aus dem "Warenkorb" entfernen)



| Methode / Code | Wirkung | Besonderheit |
| :--- | :--- | :--- |
| `git restore --staged [Datei]` | **Unstage** (Entfernen) | **Moderner Standard:** Nimmt die Datei aus der Staging Area. Die Änderungen in der Datei bleiben im Arbeitsverzeichnis erhalten. |
| `git reset HEAD [Datei]` | **Unstage** (Klassisch) | Die ältere Variante, um Dateien aus dem "Warenkorb" zu nehmen. |
| `git rm --cached [Datei]` | Aus Git-Verfolgung entfernen | Datei bleibt auf dem PC, wird aber nicht mehr von Git überwacht (hilfreich für .gitignore). |


### Git Commit (Änderungen speichern)

| Methode / Code | Wirkung | Besonderheit |
| :--- | :--- | :--- |
| `git commit -m "[Nachricht]"` | Speichert Staged Files | [ -m = message] <br>Erstellt einen dauerhaften Snapshot deiner Änderungen im lokalen Repository. <br> Ohne Text gibt es eine Fehlermeldung|
| `git commit -am "[Nachricht]"` | Add & Commit | [ -a = all] [ -m = message] <br>Fügt alle **geänderten** Dateien automatisch hinzu und committet sie.<br> Ohne Text gibt es eine Fehlermeldung <br>⚠️ **Achtung:** Ignoriert brandneue Dateien! <br>Das gleiche Verhalten wie bei [git add -u]. |
| `git commit --amend -m "[Neue Nachricht]"` | Letzten Commit ändern | Korrigiert die Nachricht des letzten Commits (nur lokal verwenden!). |
<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">


### Git Checkout & Dateien (Wiederherstellen vs. Modernere Wege)

| Methode / Code | Wirkung | Besonderheit / Besserer Weg |
| :--- | :--- | :--- |
| `git checkout [Datei]` | Verwirft lokale Änderungen | ⚠️ **Gefährlich:** <br>Überschreibt lokale Arbeit unwiderruflich ohne Warnung! |
| **`git restore [Datei]`** | **Datei zurücksetzen** | **Moderner Standard:** Sicherer Befehl zum Rückgängigmachen von Änderungen. |
| `git checkout [Hash] -- [Datei]` | Version aus Commit laden | Holt den Stand einer Datei aus einem alten Commit zurück in den Arbeitsordner. |
| **`git restore -s [Hash] [Datei]`** | **Gezielte Wiederherstellung** | [ -s = source] <br>**Sicherer Weg:** Lädt und überschreibt den Datei-Stand gezielt aus der Quelle (Hash/Branch) direkt in dein aktuelles Arbeitsverzeichnis. |






