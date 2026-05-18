---
applyTo: "course/uebungen/**"
---

# Übungsstandard: Konsistenz-Checkliste & Workflow-Beispiel

## 📄 Übungs-Template

```
course/uebungen/meilenstein-XX-uebung-YY.md
```

    # Übung Meilenstein XX: [Titel]
    
    ## Ziel
    [1-2 Sätze: Was wird erreicht?]
    
    ---
    
    ## Vor dem Start – Checkliste
    
    - [ ] [Voraussetzung 1, z.B. VS Code ist geöffnet]
    - [ ] [Voraussetzung 2, z.B. Copilot Chat ist aktiv]
    - [ ] [Voraussetzung 3, z.B. du bist im richtigen Ordner]
    
    In dieser Übung arbeitest du mit diesen Dateien:
    - `[Datei 1]`
    - `[Datei 2]`
    
    > **Wichtig – diese Datei nicht bearbeiten:** Die Übungsdatei (die du gerade liest) bleibt unverändert als Referenz erhalten. Deine eigene Arbeit trägst du ausschließlich in die oben genannten Dateien ein. Die Checklisten am Ende ("Abgabe" und "Lernerfolgs-Kriterien") kopierst du in deine Lernfortschritt-Datei und hakst sie dort ab.
    
    ---
    
    ## Aufgaben
    
   ### 1. [Aufgabe 1]
   Quelle: [course/course-library/XX-modul/01-grundlagen.md](../../course/course-library/XX-modul/01-grundlagen.md) oder [course/kursmodule/XX-modul/YY-datei.md](../../course/kursmodule/XX-modul/YY-datei.md)
    
    ### 2. [Aufgabe mit Git]
    Prüfe zuerst deinen aktuellen Status:
    
        git status
        git branch
    
    > **Tipp – falls dein letzter PR noch nicht gemerged ist:**
    > - **Option A:** `git checkout <letzter-branch>` → dann `git checkout -b UE-MX-YY-<vorname>`
    > - **Option B:** Von `main` starten – Merge passiert automatisch.
    
        git checkout -b UE-MX-YY-<vorname>
        git add .
        git commit -m "[message]"
        git push origin UE-MX-YY-<vorname>
    
    ---
    
   ## Modulabdeckung (Check)
   - ✓ course/course-library/XX-modul/01-grundlagen.md oder course/kursmodule/XX-modul/YY-datei.md: [Konzept erklärt]
    
    ---
    
    ## Wiederholung aus frueheren Meilensteinen
   - **[Fähigkeit]** ([course/course-library/XX-modul/01-grundlagen.md](../../course/course-library/XX-modul/01-grundlagen.md)) oder ([course/kursmodule/XX-modul/YY-datei.md](../../course/kursmodule/XX-modul/YY-datei.md))
    
    ---
    
    ## Abgabe
    > **Kopiere diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.
    - [ ] [Ergebnis 1]
    - [ ] PR auf GitHub ist erstellt
    
    ---
    
    ## Lernerfolgs-Kriterien
    > **Kopiere auch diese Checkliste** in deine `lernfortschritt_<dein-name>.md` und hake die Punkte dort ab.
    - [ ] Ich habe [beobachtbare Erfahrung 1].
    - [ ] Ich kann [Konzept 2] benennen.
    - [ ] Ich habe [beobachtbare Erfahrung 3].

---

## 🔍 Konsistenz-Checkliste (VOR dem Commit)

> **Automatischer Test:** Vor dem Commit alle Übungen gegen den Standard prüfen:
> ```powershell
> .\tools\test-alle-uebungen.ps1
> ```
> Einzelne Datei: `.\tools\test-uebung.ps1 -File "course/uebungen/meilenstein-XX-uebung-YY.md"`
> Exit-Code 0 = alles OK, 1 = mindestens ein Fehler.

- [ ] **Alle Quellen existieren?** grep_search nach Links in Übungen
- [ ] **Alle Modulguides haben die gleiche Struktur?** 00-modulguide.md (mit inline Selbstcheck) + 01-grundlagen.md
- [ ] **Keine redundanten Lernziele?** Selbstcheck-Checklisten nur im `## Selbstcheck`-Abschnitt des Modulguide, nirgendwo sonst
- [ ] **Alle Links funktionieren?** (Relative Pfade prüfen) → `.\tools\test-links.ps1` ausführen
- [ ] **Modulabdeckung in Übungen dokumentiert?** (Check-Abschnitt vorhanden)
- [ ] **COURSE_MILESTONES.md ↔ course/uebungen/README_UEBUNGEN.md synchron?** (Gleiche Meilenstein-Nummern)
- [ ] **README.md Modul-Struktur-Beispiel noch aktuell?** (Falls neue Konvention)
- [ ] **CHANGELOG.md aktuell?** Enthält er einen Eintrag für alle strukturellen Änderungen der aktuellen Session?
- [ ] **CHANGELOG Tagesübersicht gepflegt?** Pro Datum genau ein grober Tagesblock unter `## Tagesübersicht (grob)`
- [ ] **`.github/agents/*.md` Pfade korrekt?** Keine veralteten Pfade (z.B. `apps/learners/`, `docs/uebungen/`, `modules/`)
- [ ] **Keine Tippfehler/Markdown-Fehler?** (`get_errors` auf alle neuen Dateien)
- [ ] **"Vor dem Start"-Checkliste vorhanden?** (Max. 3 Punkte + Dateiliste)
- [ ] **Versteckte Ordner erklärt?** (z.B. `.github/` mit Strg+P-Tipp)
- [ ] **Temporäre Abschnitte mit "Warum?"-Hinweis versehen?**
- [ ] **UI-Interaktionen als nummerierte Schritte + Fallback?**
- [ ] **Git-Abschnitte mit `git status` + `git branch` vorangestellt?**
- [ ] **`Wiederholung aus frueheren Meilensteinen`-Abschnitt vorhanden?**
- [ ] **`Abgabe`-Abschnitt mit Checkboxen vorhanden (kurze Liste der abzugebenden Ergebnisse)?**
- [ ] **`Lernerfolgs-Kriterien`-Abschnitt mit 3–6 Checkboxen vorhanden?**
- [ ] **`Wichtig – diese Datei nicht bearbeiten`-Hinweis nach Dateiliste vorhanden?**
- [ ] **`Kopiere diese Checkliste`-Hinweis in `## Abgabe` vorhanden?**
- [ ] **`Kopiere auch diese Checkliste`-Hinweis in `## Lernerfolgs-Kriterien` vorhanden?**
- [ ] **`Tipp – falls dein letzter PR noch nicht gemerged ist`-Blockzitat vor dem ersten `git checkout -b` vorhanden?** (Option A + Option B mit korrekter Aussage zum Merge)

---

## 📝 Beispiel: Kompletter Workflow für neues Modul

**1. Neues Modul "Test" erstellen:**
   - `course/course-library/08-test/00-test-modulguide.md` (mit inline Selbstcheck)
   - `course/course-library/08-test/01-test-grundlagen.md`

**2. In COURSE_MILESTONES.md neuen Meilenstein hinzufügen:**
   - "Meilenstein 4: Testing"
   - Modul-Einstiege + Vertiefung + Lernziele

**3. Neue Übung erstellen:**
   - `course/uebungen/meilenstein-04-uebung-01.md`
   - Mit Quellenlinks zu Test-Modul

**4. Konsistenz-Check:**
   - `get_errors` auf alle Dateien
   - `.\tools\test-links.ps1` (Links prüfen)
   - `.\tools\test-alle-uebungen.ps1` (Übungsstandard prüfen)

**5. Dokumentation aktualisieren:**
   - README.md (falls neue Struktur)
   - AGENTS.md (falls neue Konvention)

**6. Commit + PR mit aussagekräftiger Message:**
   ```
   feat: Modul 08-test hinzugefügt (Meilenstein 4)

   - 00-test-modulguide.md: Navigation + inline Selbstcheck
   - 01-test-grundlagen.md: Konzepte
   - meilenstein-04-uebung-01.md: Erste Übung
   - Alle Links konsistent + Modulabdeckung dokumentiert
   ```
