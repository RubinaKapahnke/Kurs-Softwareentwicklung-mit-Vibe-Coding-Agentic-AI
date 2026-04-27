# 📝 Cheat Sheet: Die wichtigsten Git-Befehle

Dieses Dokument ist dein Spickzettel für die Arbeit mit Git im Terminal. Du musst nicht alles auswendig lernen – nutze diese Liste einfach zum Nachschlagen, wenn du nicht weiterweißt.

---

## 1. 🔧 Setup & Überprüfung
*(Diese Befehle brauchst du meistens nur ganz am Anfang)*

| Befehl | Was passiert? |
| :--- | :--- |
| `git --version` | Prüft, ob Git auf dem Rechner installiert ist. |
| `git config --global user.name "Dein Name"` | Sagt Git, wie du heißt (wichtig für die Historie). |
| `git config --global user.email "Mail"` | Hinterlegt deine GitHub E-Mail-Adresse. |
| `git status` | **Der wichtigste Check:** Zeigt dir an, in welchem Branch du bist und welche Dateien verändert wurden. |

---

## 2. 🚀 Ein Projekt starten
*(Um Code von GitHub auf deinen Rechner zu bekommen)*

| Befehl | Was passiert? |
| :--- | :--- |
| `git clone <url>` | Lädt ein komplettes Projekt von GitHub auf deinen PC herunter. |

---

## 3. 🌿 Sicher arbeiten (Branches)
*(Arbeite niemals direkt auf `main`! Erstelle dir immer eine eigene Arbeitskopie.)*

| Befehl | Was passiert? |
| :--- | :--- |
| `git checkout -b <branch-name>` | **Erstellt** einen neuen Branch und **wechselt** direkt dorthin (z.B. `git checkout -b feature/mein-name`). |
| `git checkout <branch-name>` | Wechselt zu einem *bereits existierenden* Branch (ohne das `-b`). |
| `git branch` | Zeigt dir eine Liste aller lokalen Branches an. Der Branch mit dem Sternchen `*` ist der, in dem du dich gerade befindest. |

---

## 4. 💾 Der tägliche Workflow (Speichern & Hochladen)
*(Diesen 3-Schritt-Prozess machst du jedes Mal, wenn du mit einer Aufgabe fertig bist.)*

| Schritt | Befehl | Was passiert? |
| :--- | :--- | :--- |
| **1. Sammeln** | `git add .` | Packt **alle** geänderten Dateien in ein virtuelles Paket (Staging Area). Der Punkt `.` steht für "alles im aktuellen Ordner". |
| **2. Beschriften** | `git commit -m "deine nachricht"` | Verschließt das Paket und klebt einen Zettel mit deiner Beschreibung darauf (z.B. `"feat: neue karte erstellt"`). |
| **3. Hochladen** | `git push origin <branch-name>` | Schickt dein Paket in die Cloud zu GitHub. Ersetze `<branch-name>` durch den Namen deines aktuellen Branches. |

---

## 5. 🔄 Updates holen (Synchronisieren)
*(Wenn andere etwas am Projekt geändert haben oder neue Aufgaben da sind)*

| Befehl | Was passiert? |
| :--- | :--- |
| `git pull origin main` | Holt sich die allerneusten Änderungen aus dem Haupt-Branch (`main`) von GitHub und fügt sie in deinen aktuellen Ordner ein. |

---

> [!TIP]
> **Vibe-Check:** Wenn du mal nicht weißt, was gerade los ist oder warum ein Befehl nicht klappt, tippe immer zuerst **`git status`** ein. Das Terminal verrät dir dann oft schon, was der nächste logische Schritt ist!