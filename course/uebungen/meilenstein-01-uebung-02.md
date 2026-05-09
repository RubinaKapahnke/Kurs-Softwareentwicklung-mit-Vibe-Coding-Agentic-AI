# Übung Meilenstein 1: Erstes Repository erkunden und erstellen

## Ziel

Du **erkundest das zentrale Kurs-Repo** auf GitHub, verstehst seine Struktur, und **erstellst dein erstes persönliches Übungs-Repo**, wo du später deine Aufgaben ablegen wirst.

---

## Vor dem Start – Checkliste

- [ ] Du hast einen GitHub-Account erstellt und dich angemeldet
- [ ] Du hast einen Webbrowser geöffnet
- [ ] Du kennst die URL des Kurs-Repos oder den Link `github.com/vibe-coding-0426`

In dieser Übung arbeitest du:
- **Nur im Browser** – keine lokale Installation nötig
- **Auf dem Kurs-Repo** – du schaust dir nur die Struktur an (keine Änderungen!)
- **Auf deinem persönlichen Repo** – du erstellst ein neues Repository

> **Wichtig - diese Datei nicht bearbeiten:** Die Aufgabe ist reine Browser-Navigation. Du machst Beobachtungen auf dem Kurs-Repo (ohne es zu aendern) und erstellst dann dein eigenes Repo.

---

## Aufgaben

### Aufgabe 1: Das Kurs-Repo erkunden

Quelle: [course/course-library/03-github/01-github-grundlagen.md](../course-library/03-github/01-github-grundlagen.md)

**Schritt 1: Kurs-Repo öffnen**

1. Öffne im Browser: [github.com/vibe-coding-0426](https://github.com/vibe-coding-0426)
2. Du siehst die **Startseite des Kurs-Repos**

**Schritt 2: Struktur erkunden – Klicke auf die Ordner und Dateien:**

1. **Lies die README.md** (oben auf der Seite sichtbar)
   - Notiz: Wofür ist dieses Repo? (Kurzbeschreibung in 1 Satz)

2. **Erkunde die Ordnerstruktur:** Klicke auf verschiedene Ordner:
   - `course/` – Was ist hier drin? (Klick → Beschreibung lesen)
   - `course/course-library/` – Welche Module sehen Sie?
   - `course/uebungen/` – Welche Übungen sind schon vorhanden?
   - `.github/` – Was könnte hier sein? (versteckter Ordner – optional)
   - Navigations-Tipp: Strg+P drücken und `.github` eingeben, falls du den Ordner nicht sofort siehst.

3. **Finde und öffne diese wichtigen Dateien:**
   - `NEXT_STEPS.md` – Das ist die **zentrale Roadmap**
     - Lese die Überschrift "🗺️ Next Steps: Zentrale Meilensteine"
     - Notiz: Welche Meilensteine gibt es insgesamt?
   - `KURSBESCHREIBUNG.md` – Das erklärt den gesamten Kurs
   - `README.md` – Die Willkommen-Datei

4. **Screenshots machen:**
   - Screenshot 1: Die Startseite des Kurs-Repos (mit Ordnerstruktur)
   - Screenshot 2: Die Übersicht von `NEXT_STEPS.md`

**Schritt 3: Observation – Beantworte folgende Fragen (schreib dir die Antworten auf oder merke sie dir):**

- Was ist der Unterschied zwischen dem **Kurs-Repo** und deinem **persönlichen Übungs-Repo**, das du gleich erstellst?
- Wo findest du die Übungsaufgaben? (`course/uebungen/`)
- Wo findest du die Lernmaterial-Module? (`course/course-library/`)
- Was ist `NEXT_STEPS.md`? (Ist das deine Aufgabenliste oder eine Kursbeschreibung für alle?)

---

### Aufgabe 2: Ein persönliches Übungs-Repo erstellen

Quelle: [course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/03-github-features-repositories-und-readme-vorlage.md](../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/03-github-features-repositories-und-readme-vorlage.md)

**Schritt 1: Neues Repo anlegen**

1. **Bei GitHub angemeldet?** Oben rechts sollte dein Profilbild sichtbar sein
2. Klicke oben rechts auf dein **Profilmenü** (Profilbild oder ☰) 
3. Wähle **"Your repositories"**
4. Klicke auf den grünen Button **"New"**

**Schritt 2: Repository-Einstellungen ausfüllen**

Fülle das Formular aus mit **DIESEN Einstellungen:**

| Feld | Wert | Beispiel |
|---|---|---|
| **Repository name** | Ein aussagekräftiger Name | `vibe-coding-uebungen` oder `meine-uebungen-2026` |
| **Description** | Kurzbeschreibung | `"Meine Lösungen für den Vibe Coding Kurs 2026"` |
| **Visibility** | **WICHTIG: Private!** | ☑ Private (nicht Public) |
| **Initialize with README** | Abhaken ✓ | ☑ Yes, add a README file |
| **.gitignore** | Optional ignorieren | (nicht nötig für den Anfang) |
| **License** | Optional ignorieren | (nicht nötig für den Kurs) |

**Wichtig:** Stelle sicher, dass dein Repo **PRIVATE** ist – das bedeutet, nur du und deine Trainerin können es sehen!

**Schritt 3: Repository erstellen**

- Klicke auf **"Create repository"**
- GitHub erstellt dein Repo und zeigt die erste Seite

**Schritt 4: Screenshot machen**

- Mache einen Screenshot der neu erstellten Repo-Startseite
- Dein Repo ist jetzt in deinem GitHub-Account angelegt und bei Einstellung **Private** nur fuer dich und berechtigte Personen sichtbar.

---

### Aufgabe 3: Deine README.md anpassen (optional, aber empfohlen)

Quelle: [course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/README-template-tn-repo.md](../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/README-template-tn-repo.md) und [course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/03-github-features-repositories-und-readme-vorlage.md](../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/03-github-features-repositories-und-readme-vorlage.md)

Die automatisch erstellte `README.md` ist sehr kurz. Mach sie aussagekräftiger:

**Schritt 1: README editieren**

1. Öffne dein neu erstelltes Repo
2. Du siehst eine Standard-README.md
3. Klicke auf das **Bleistift-Symbol** ("Edit this file") oben rechts
4. Der Editor öffnet sich

**Schritt 2: Inhalte ergänzen**

Ersetze den Text mit einer aussagekräftigen Beschreibung. **Minimal-Beispiel:**

```markdown
# Vibe Coding Kurs – Meine Lösungen

Dieses Repository enthält meine Aufgaben und Lösungen aus dem **Vibe Coding Kurs 2026**.

## Über mich

- Name: [Dein Name]
- GitHub-Profil: [@dein-username](https://github.com/dein-username)
- Kurs-Start: Mai 2026

## Kurz-Links

- **Kurs-Repo:** [vibe-coding-0426](https://github.com/vibe-coding-0426)
- **Mein Lernfortschritt:** Wird im Kurs-Repo verwaltet

---

**Ziel:** Vibe Coding und KI-gestützte Entwicklung lernen 🚀
```

**Optional:** Nutze die vollstaendige Vorlage: [course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/README-template-tn-repo.md](../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/README-template-tn-repo.md)

**Schritt 3: Commit**

1. Scrolle nach unten
2. Schreib eine **Commit-Nachricht** (z.B. "Update README mit persönlichen Infos")
3. Klicke **"Commit changes"**
4. Bestätige noch mal mit **"Commit changes"** (im Dialog)

**Schritt 4: Überprüfung**

- Deine README ist jetzt aktualisiert
- Du hast gerade deinen **ersten Commit** gemacht! 🎉
- Mache einen Screenshot: Deine aktualisierte README.md

---

## Modulabdeckung (Check)

- ✓ [course/course-library/03-github/01-github-grundlagen.md](../course-library/03-github/01-github-grundlagen.md): Was ist GitHub und wie verwenden wir es im Kurs?
- ✓ [course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/03-github-features-repositories-und-readme-vorlage.md](../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/03-github-features-repositories-und-readme-vorlage.md): Repositories und README im Kurskontext

---

## Wiederholung aus frueheren Meilensteinen

- **Keine Vorbedingungen** - Das ist der Kurs-Einstieg.
- **Vorige Übung:** [Meilenstein 1, Übung 1 – GitHub-Konto anlegen](./meilenstein-01-uebung-01.md)

---

## Abgabe

> **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` (im Kurs-Repo) und hake die Punkte dort ab.

- [ ] Ich habe das Kurs-Repo erkundet und seine Struktur verstanden
- [ ] Ich habe mein persönliches Übungs-Repo erstellt
- [ ] Mein Repo ist **Private** (nur ich und die Trainerin haben Zugriff)
- [ ] Ich habe die README.md angepasst und einen Commit gemacht
- [ ] Ich kenne die URL meines Repos (z.B. `github.com/dein-username/vibe-coding-uebungen`)
- [ ] Screenshots vorhanden:
  - [ ] Screenshot: Startseite des Kurs-Repos
  - [ ] Screenshot: NEXT_STEPS.md des Kurs-Repos
  - [ ] Screenshot: Mein neu erstelltes Übungs-Repo
  - [ ] Screenshot: Meine aktualisierte README.md

---

## Lernerfolgs-Kriterien

> **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` (im Kurs-Repo) und hake die Punkte dort ab.

- [ ] Ich kann auf dem Kurs-Repo navigieren und die Ordnerstruktur verstehen
- [ ] Ich weiß, wo die Übungsaufgaben sind (`course/uebungen/`)
- [ ] Ich weiß, wo die Lernmaterial-Module sind (`course/course-library/`)
- [ ] Ich weiß, dass `NEXT_STEPS.md` meine zentrale Roadmap ist
- [ ] Ich habe ein persönliches Übungs-Repo erstellt
- [ ] Mein Repo ist korrekt auf **Private** eingestellt
- [ ] Ich habe einen Commit gemacht (README angepasst) – das ist mein erstes Versionierungs-Erlebnis
- [ ] Ich verstehe den Unterschied: Kurs-Repo (zentral für alle) vs. mein Übungs-Repo (meine Lösungen)
- [ ] Ich bin bereit, meine erste Aufgabe im Kurs anzufangen

---

**✅ Glückwunsch – du bist jetzt im Kurs registriert!**

Deine nächsten Schritte:
1. **Trainerin einladen** (falls noch nicht geschehen) → [Meilenstein 1, Übung 1](./meilenstein-01-uebung-01.md)
2. **Git und Terminal lernen** → [Meilenstein 2](../course-library/02-vscode/00-vscode-modulguide.md)
3. **Erste echte Aufgabe bearbeiten** → [NEXT_STEPS.md → Meilenstein 2](../../NEXT_STEPS.md#-meilenstein-2-setup--umgebung)
