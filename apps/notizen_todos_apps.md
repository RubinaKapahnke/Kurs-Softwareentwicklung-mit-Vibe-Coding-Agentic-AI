# Onboarding App - Aufgaben & Planung

## Architektur

- [ ] Trennung zwischen Kurs-Startseite, Kurs-Beschreibungsseite und Onboarding-Steps. So dass es später auch weitere Module dort geben kann.
- [ ] Kursstartseite als Kursübersicht aufbauen: Kurz-Übersichten anzeigen und in die Kursbeschreibungsseiten führen.
- [ ] Button "Kurs starten" auf der Kursstartseite passend als Einstieg zu den Kursdetails / Kursbeschreibungen umbenennen.

## Offene Aufgaben

### Accessibility & Design
- [x] Kursstartseite: Meme-Panels ("Nicht das Ziel" / "Unser Anspruch") an CI-Farben angleichen und Label-Kontrast erhöhen
- [ ] "Slop vs. Shipping"-Section kompakter und strukturierter darstellen; Karten optisch weniger rot/grün, weniger Leerraum
- [ ] Visuelle Elemente (Grafiken, Bilder) hinzufügen, damit Text leichter zu lesen wird
- [ ] Error/Info-Design: "Probleme mit dem Code?" Link auf blauem Hintergrund lesbar machen

### Content & Copy
- [x] Gender-Begriffe wie Einsteiger*innen immer mit Sternchen abbilden
- [ ] Step 4: Nicht nochmal erklären "was ist GitHub", nur "was ist ein Repo", Frage ob User schon mit Repos gearbeitet hat

### Interaktivität & Logik
- [ ] Step 2: Wenn nicht auf "Als erledigt markieren" geklickt -> Popup mit Erklärung + Bestätigungsfrage
- [ ] Step 3: "Nein, ich starte neu" behalten + andere Option stehen lassen damit Umentscheidung möglich ist
- [ ] Step 3: Initiale Auswahlmöglichkeiten beibehalten (falls Umentscheidung)
- [ ] Step 3: Wenn Erfahrung angegeben aber später Umentscheidung -> keine grundlegenden Erklärungen zeigen, aber Anzeigebutton anbieten
- [ ] Step 4: Frage "Hast du schon mit Repos in GitHub gearbeitet?" + adaptive Erklärungen
- [ ] Aufgabe "Lege auf GitHub einen Account an" als Checklisteneintrag darstellen (nicht nur Text)

### Content-Hierarchie & Kurserlebnis
- [ ] "Wie der Kurs funktioniert" Erklärung hinzufügen: Schritte können übersprungen werden, bauen aber stark aufeinander auf -> manche Übungen nicht möglich wenn vorherige Schritte nicht absolviert
- [ ] Schritt-Abhängigkeiten übersichtlicher darstellen; Boxen im Hinweisblock breiter und lesbarer machen
- [ ] USP-/Warum-unsere-Kurse-Section ergänzen, damit der Nutzen der Kurse klarer wird

## Nächster Refactoring-Sprint

### Sprint A - Quick Wins aus Review
- [x] ONB-042: Meme-Panels CI-Farben und Label-Kontrast fixen
- [x] ONB-043: Gender-Sprache durchgehend mit Sternchen
- [x] ONB-044: "Slop vs. Shipping"-Section kompakter und klarer machen

### Sprint B - Step-Logik abschließen
- ONB-032: Step-Logik & Interaktivität verfeinern
- Ziel: Step 2 Popup, Step 3 Umentscheidung, Step 4 adaptive Repo-Erklärung, Account-Aufgabe als Checkliste
- ONB-045: Schritt-Abhängigkeiten im Hinweisblock besser darstellen

### Sprint C - Architektur-Refactoring
- HUB-010: Startseite zu echter Kurs-Hub-Startseite umbauen
- HUB-011: Kursstart-Seite als modulare Kursdetail-Seite umbauen
- ONB-046: Kursstartseite als Kursübersicht mit Kursdetails und Einstiegspfad umbauen

### Sprint D - Positionierung & UX-Vertiefung
- ONB-047: USP-/Warum-unsere-Kurse-Section ergänzen
- UX-110: Übergang in COURSE_MILESTONES.md stärken
- UX-100: Inhalte für Einsteiger*innen vertiefen, aber optional halten
- UX-120: Desktop-First klar auf App-Ebene verankern

### Sprint E - Qualität & Schulden
- QA-100: Testset deutlich ausbauen
- TECH-100: Technische Schulden sichtbar halten

## Go-Live Check (Abnahme)

- [ ] Neue Person kommt ohne Hilfe bis zum lokal geöffneten Kurs-Repository.
- [ ] Neue Person kann den Unterschied Kurs-Repository vs. eigenes Repository korrekt erklären.
- [ ] Neue Person weiß, dass lernfortschritt_<name>.md zentral im Kurs-Repository gepflegt wird.
- [ ] Abschluss verlinkt klar auf COURSE_MILESTONES.md und course/uebungen/README_UEBUNGEN.md.
- [ ] Build und Tests laufen für apps/onboarding stabil.

## Archiv - Erledigte Aufgaben

### Phase 0 - Abnahmebasis
- [x] ONB-001: PRD in technische Abnahmekriterien übersetzen

### Phase 1 - Kritische Funktionalität
- [x] ONB-010: Schritt-2-Persistenz und Restore korrigieren
- [x] ONB-011: Schritt-2-Flow gegen PRD härten
- [x] ONB-012: Rückkehrmodus und freie Schrittauswahl final validieren

### Phase 2 - Inhaltliche Fertigstellung
- [x] ONB-020: Brücke in den Kursfluss verbindlich machen
- [x] ONB-021: Kurs-Repository vs. eigenes Repository didaktisch schärfen
- [x] ONB-022: Startseite auf PRD-Kernaktionen fokussieren

### Phase 3 - UX/Polish & Inhaltsverbesserung
- [x] ONB-030: Kontrast überall erhöhen (Blau auf Blau, aktive Step-Zahlen, Fortschrittskomponente)
- [x] ONB-031: Copy & Content nach Review überarbeiten (Umlaute, Repository, Bindestriche, GitHub-Docs, Email-CTA)
- [x] ONB-033: Datenschutz & Urheberrechts-Hinweise korrigieren (Private-Hinweis, CC-Beispiele)
- [x] ONB-034: Design & visuelle Verbesserungen (Meme-Panels Vollfarbe, Scroll-Hinweis)
- [x] ONB-035: "Wie der Kurs funktioniert" Sektion hinzufügen
- [x] ONB-036: Resume-Banner & Kursinformation erweitern (Kursname + Modulname)
- [x] ONB-037: Footer mit Rechtsinformationen und Kontakt
- [x] ONB-038: YouTube-Video auf Kursseite einbinden
- [x] ONB-039: Kursstartseite-Header - Anker-Links und CTA-Button kontextabhängig
- [x] ONB-041: Step 1 - Weiter-Button sperren wenn Voucher nicht validiert

### Architektur-Vorbereitung
- [x] HUB-001: Dev-Server robust machen (ng serve lokal stabil)
- [x] HUB-020: Repo-Struktur für mehrere Kurse vorbereiten (courseId-basiertes Routing, getrennter State je Kurs)

### Dokumentation
- [x] ONB-040: Onboarding README von CLI-Standard auf Team-Doku umstellen
