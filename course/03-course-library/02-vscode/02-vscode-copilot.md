# VS Code: GitHub Copilot Chat

GitHub Copilot Chat ist direkt in VS Code eingebaut und dein wichtigstes Werkzeug für Vibe Coding. Dieses Dokument erklärt, wie du den Chat bedienst - nicht wofuer du ihn nutzt (das steht in den Prompting-Artikeln), sondern wie er funktioniert.

---

## Copilot Chat öffnen

**Methode 1 - Symbol in der Leiste:**
Klick auf das Chat-Symbol (Sprechblase) in der linken VS Code Leiste.

**Methode 2 - Befehlspalette:**
`Strg+Shift+P` (Windows) / `Cmd+Shift+P` (Mac) → `GitHub Copilot Chat: Focus on Chat View` → `Enter`

> Falls Copilot Chat gar nicht erscheint: Prüfe, ob die Erweiterung „GitHub Copilot Chat" in VS Code installiert ist. Linke Leiste → Extensions-Symbol → nach „Copilot Chat" suchen.

---

## Chat-Modi: Ask, Edit, Agent

Copilot Chat hat mehrere Modi. Du erkennst den aktiven Modus an der Beschriftung im Chat-Eingabefeld:

| Modus | Wofuer? | Wie wechseln? |
| :--- | :--- | :--- |
| **Ask** | Fragen stellen, erklären lassen, diskutieren | Standard-Modus beim Öffnen |
| **Edit** | Dateien direkt vom Chat aus bearbeiten lassen | Dropdown links vom Eingabefeld |
| **Agent** | KI führt mehrstufige Aufgaben durch (liest, schreibt, erklärt) | Dropdown links vom Eingabefeld |

Für die meisten Aufgaben im Kurs nutzt du **Ask** oder **Agent**.

---

## Kontext mit `#` hinzufügen

Die KI sieht standardmaessig nicht, welche Dateien du geöffnet hast. Du musst ihr Kontext explizit geben.

**Datei als Kontext hinzufügen:**
Tippe `#` im Chat-Eingabefeld → eine Liste erscheint → Datei auswaehlen.

Beispiel:
> `#prd_meinprojekt.md Erstelle eine Komponentenstruktur für dieses PRD.`

**Mehrere Dateien:**
Du kannst mehrere `#`-Referenzen im gleichen Prompt kombinieren:
> `#prd_meinprojekt.md #participants.json Erstelle einen Service, der die Daten aus der JSON-Datei laedt.`

> **Warum das wichtig ist:** Ohne `#`-Kontext erfindet die KI Annahmen. Mit `#` arbeitest du präzise - das ist der Kern des Context-Engineering.

---

## Slash-Commands mit `/`

Prompt-Dateien und eingebaute Shortcuts rufst du mit `/` auf.

**So funktioniert es:**
1. Tippe `/` im Chat-Eingabefeld
2. Eine Liste erscheint mit verfügbaren Prompt-Dateien und eingebauten Befehlen
3. Eintrag auswählen → `Enter`

**Eingebaute Befehle (Beispiele):**

| Befehl | Was er tut |
| :--- | :--- |
| `/explain` | Erklaert markierten Code |
| `/fix` | Schlaegt einen Fix für ein Problem vor |
| `/tests` | Schreibt Tests für markierten Code |

**Prompt-Dateien aus `.github/prompts/`:** erscheinen ebenfalls in der `/`-Liste, wenn sie gültiges Frontmatter haben.

> Falls eine Prompt-Datei nicht erscheint: Prüfe, ob sie in `.github/prompts/` liegt und das Frontmatter auf der ersten Zeile beginnt. Dann: `Strg+Shift+P` → `Developer: Reload Window`.

---

## Neuen Chat starten

Jeder Chat hat Gedächtnis - die KI kennt den bisherigen Verlauf. Manchmal willst du das zuruecksetzen.

**Neuen Chat öffnen:**
- Oben im Chat-Fenster: Klick auf das `+`-Symbol
- Oder: `Strg+Shift+P` → `GitHub Copilot Chat: New Chat`

> Wann neuer Chat? Wenn du ein komplett neues Thema anfängst und der bisherige Kontext eher stört als hilft.

---

## Selbstcheck

- [ ] Ich kann Copilot Chat in VS Code öffnen (Symbol oder Befehlspalette).
- [ ] Ich weiss, wozu die Modi Ask, Edit und Agent grob genutzt werden.
- [ ] Ich kann mit `#` eine Datei als Kontext zu einem Prompt hinzufuegen.
- [ ] Ich kann mit `/` Prompt-Dateien und eingebaute Befehle aufrufen.
- [ ] Ich kann einen neuen Chat starten und weiss, wann das sinnvoll ist.
