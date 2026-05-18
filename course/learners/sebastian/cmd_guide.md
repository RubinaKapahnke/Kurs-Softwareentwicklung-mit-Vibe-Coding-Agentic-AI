<span style="color:orange;">

# Methoden zur Dateierstellung in VS Code (PowerShell)
</span>

### unterschiedliche Wege eine Datei zu erstellen

| Methode / Code | Resultat | Dateigröße | Besonderheit | Wenn Datei existiert |
| :--- | :--- | :--- | :--- | :--- |
| `ni test.txt` | Leere Datei | **0 KB** | Standard-Weg; zeigt Datei-Infos. | **Fehlermeldung** (Inhalt bleibt sicher). |
| `$A = ni test.txt` | Leere Datei | **0 KB** | "Stille" Erstellung (via Variable). | **Fehlermeldung** (Inhalt bleibt sicher). |
| `$null > test.txt` | Leere Datei | **0 KB** | Kürzeste Syntax für leere Dateien. | **Überschreibt** (leert) die Datei sofort. |
| `echo "" > test.txt` | Datei mit Leerzeile | **~1 KB** | Erzeugt Datei mit Zeilenumbruch. | **Überschreibt** den alten Inhalt sofort. |
| `echo "Text" >> test.txt` | Text wird hinzugefügt | **+ Bytes** | **Anhängen:** Schreibt den Text ans Ende. | **Behält alten Inhalt** und fügt neuen hinzu. |  

### Erweiterte Erstellung mit Pfad-Handling

| Methode / Code | Resultat | Pfad-Typ | Besonderheit | Wenn Ordner nicht existiert |
| :--- | :--- | :--- | :--- | :--- |
| `ni "C:\path\test.txt"` | Datei an festem Ort | **Absolut** | Erstellt die Datei exakt an der angegebenen Stelle. | **Fehlermeldung** (Pfad nicht gefunden). |
| `ni ".\path\test.txt"` | Datei im Unterordner | **Relativ** | Erstellt die Datei ausgehend vom aktuellen Standort (`.\`). | **Fehlermeldung** (Pfad muss vorhanden sein). |
| `ni ".\path\test.txt" -force` | Datei + neuer Ordner | **Relativ** | **Erzwingt** die Erstellung inklusive aller Zwischenschritte. | **Erstellt den Ordner** automatisch einfach mit. |
<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">

### Navigation mit dem cd-Befehl (Set-Location)

| Befehl | Ziel / Wirkung | Besonderheit |
| :--- | :--- | :--- |
| `cd ..` | Eine Ebene nach oben | Geht ein Verzeichnis zurück (funktioniert überall). |
| `cd ../../..` | Drei Ebenen nach oben | Springt drei Verzeichnisse gleichzeitig zurück. **Mac/Linux:** Nutzt `/`. **Windows:** Akzeptiert `/` und `\`. |
| `cd [Ordner]` | In einen Unterordner | Wechselt in ein direktes Unterverzeichnis (z. B. `cd Dokumente`). |
| `cd [Laufwerk]:` | Laufwerk wechseln | **Nur Windows:** Wechselt z. B. nach `D:`. Mac/Linux haben keine Laufwerksbuchstaben. |
| `cd "/Pfad"` | Absoluter Pfad | Springt direkt zum Zielpfad. **Mac/Linux:** Startet immer mit `/`. **Windows:** Startet mit `C:\`. |
| `cd v*` | Wildcard-Suche | Wechselt in den ersten Ordner, der mit **"v"** beginnt (z. B. "Vorlagen"). |
| `cd /` | Root-Verzeichnis | Springt zum System-Anfang (Wurzel). In Windows: Anfang des aktuellen Laufwerks. |
| `cd ~` | Home-Verzeichnis | Wechselt zum persönlichen Benutzerprofil (z. B. `C:\Users\Name` oder `/Users/Name`). |
| `cd -` | Pfad-Historie | Springt zum vorherigen Standort zurück (**PS 7+** und **Mac/Linux**). |

<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">

### Datei umbenennen und verschieben (PowerShell)

| Methode / Code | Alias / Typ | Wirkung | Beispiel |
| :--- | :--- | :--- | :--- |
| `Rename-Item` | `rni` | Offizieller PS-Befehl (nur Umbenennen). | `rni "test.txt" "test2.txt"` |
| `Rename-Item` | `ren` | Klassischer Windows-Alias (nur Umbenennen). | `ren "test.txt" "test2.txt"` |
| `Move-Item` | `move` / `mv` | **Nur umbenennen:** Verschieben auf neuen Namen am selben Ort. | `mv "test.txt" "test2.txt"` |
| `Move-Item` | `move` / `mv` | **Nur verschieben:** Datei in einen anderen Ordner bewegen. | `mv "test.txt" ".\Backup\"` |
| `Move-Item` | `move` / `mv` | **Verschieben & Umbenennen:** Ort wechseln und neuen Namen geben. | `move "test.txt" ".\Backup\test2.txt"` |
<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">

### Datei-Löschung (Files)

| Methode / Code | Alias | Wirkung | Besonderheit | Beispiel |
| :--- | :--- | :--- | :--- | :--- |
| `Remove-Item` | `ri` | Löscht Datei. | Offizieller PowerShell-Befehl. | `ri "test.txt"` |
| `Remove-Item` | `del` | Löscht Datei. | Klassischer Windows-Alias. | `del "test.txt"` |
| `Remove-Item` | `rm` | Löscht Datei. | Bash-Alias. | `rm "test.txt"` |

### Ordner-Löschung (Folders)

| Methode / Code | Alias | Wirkung | Verhalten bei Ordner mit Inhalt | Beispiel |
| :--- | :--- | :--- | :--- | :--- |
| `Remove-Item` | `rm` | Löscht Ordner. | **Nachfrage** (Sicherheitsstopp). | `rm ".\Ordner"` |
| `Remove-Item` | `rd` / `rmdir`| Löscht Ordner. | **Nachfrage** (Sicherheitsstopp). | `rd ".\Ordner"` oder `rmdir ".\Ordner"` |
| `Remove-Item` | `rm -r / rm -recurse` | Löscht alles. | **Sofortiges Löschen** (ohne Stop). | `rm ".\Ordner" -r` oder `rm ".\Ordner" -recurse` |

### Mehrfaches Löschen mit Wildcards (*)

| Methode / Code | Alias | Wirkung | Besonderheit | Beispiel |
| :--- | :--- | :--- | :--- | :--- |
| `Remove-Item` | `rm` | Bestimmter Anfang | Löscht alles, was mit "test" beginnt. | `rm test*.*` |
| `Remove-Item` | `rm` | Bestimmter Typ | Löscht alle Dateien eines Typs. | `rm *.txt` |
| `Remove-Item` | `rm` | Bestimmte Endung | Löscht alle Markdown-Dateien. | `rm *.md` |
| `Remove-Item` | `rm` | Alles löschen | Löscht alle Dateien im Ordner. | `rm *.*` |


<br>
<hr style="height:5px; border:none; color:orange; background-color:orange;">