# Onboarding App

## Review 10.05.26 01:50

### Überführung in Aufgaben
- [ ] Kursstartseite-Header: Anker-Links (Inhalte/Ablauf/Für wen?) zur eigenen Seite, nicht zur Hauptseite → ONB-039 (neu)
- [ ] Kursstartseite-Header: CTA-Button-Label kontextabhängig ("Starte mit Modul 1" oder "Kurs fortsetzen") → ONB-039
- [ ] Step 1: "Weiter"-Button deaktivieren wenn kein Voucher eingegeben → ONB-041 (neu)


## Architektur

- [ ] Trennung zwischen Kurs Startseite, Kurs Beschreibungsseite und Onboarding Steps. So dass es später auch weitere Module dort geben kann. 




### Accessibility & Design
- [x] Kontrast überall erhöhen: Blau auf Blau fixen, nie weiß auf hellblau verwenden (Fortschrittskomponente!) → ONB-030 ✓
- [x] Kursstartseite: Meme-Panels ("Nicht das Ziel" / "Unser Anspruch") mit Vollfarbe statt Transparenz-Mischton → ONB-030 ✓
- [ ] Visuelle Elemente (Grafiken, Bilder) hinzufügen, damit Text leichter zu lesen wird
- [x] Scroll-Hinweis (Pfeil nach unten) wenn nach erstem Abschnitt noch Inhalte folgen → ONB-034 ✓

### Content & Copy
- [x] Umlaute überall fixen (z.B. "verfuegbar" → "verfügbar") → ONB-031 ✓
- [x] "Repo" → "Repository" ausschreiben (außer in Code/Befehlen) → ONB-031 ✓
- [x] Bindestrich – nicht verwenden (stattdessen -) → ONB-031 ✓
- [x] Step 1: Nur essenzielle High-Level-Punkte, nicht zu detailliert, NEXT_STEPS.md nicht erwähnen, kein Git-Jargon → ONB-031 ✓
- [x] Step 3: GitHub Dokumentation Link hinzufügen (https://docs.github.com/de, Support Hub, Community) → ONB-031 ✓
- [ ] Step 4: Nicht nochmal erklären "was ist GitHub", nur "was ist ein Repo", Frage ob User schon mit Repos gearbeitet hat
- [x] CTA "Noch kein Kursplatz?" mit Email-Button versehen (Email: info@knoot-academy.de), Anfragetext direkt in Email → ONB-031 ✓

### Interaktivität & Logik
- [ ] Step 2: Wenn nicht auf "Als erledigt markieren" geklickt → Popup mit Erklärung + Bestätigungsfrage
- [ ] Step 3: "Nein, ich starte neu" behalten + andere Option stehen lassen damit Umentscheidung möglich ist
- [ ] Step 3: Initiale Auswahlmöglichkeiten beibehalten (falls Umentscheidung)
- [ ] Step 3: Wenn Erfahrung angegeben aber später Umentscheidung → keine grundlegenden Erklärungen zeigen, aber Anzeigebutton anbieten
- [ ] Step 4: Frage "Hast du schon mit Repos in GitHub gearbeitet?" + adaptive Erklärungen
- [ ] Aufgabe "Lege auf GitHub einen Account an" als Checklisteneintrag darstellen (nicht nur Text)
- [x] Fortschrittskomponente: Aktive Schritt-Zahl mit hohem Kontrast (nicht weiß auf hellblau) → ONB-030 ✓

### Urheberrecht & Datenschutz
- [x] "(Private reicht – die Trainerin wird eingeladen)" entfernen → ONB-033 ✓
- [x] Repo-Erstellung erläutern: Bei public → Sicherstellen, dass keine Kursinhalte (Knoot Academy Copyright) dupliziert werden → ONB-033 ✓
- [x] Beispiele für Creative Commons/freie Lizenzen aufzählen → ONB-033 ✓

### Content-Hierarchie & Kurserlebnis
- [ ] "Wie der Kurs funktioniert" Erklärung hinzufügen: Schritte können übersprungen werden, bauen aber stark aufeinander auf → manche Übungen nicht möglich wenn vorherige Schritte nicht absolviert
- [ ] Error/Info-Design: "Probleme mit dem Code?" Link auf blauem Hintergrund nicht lesbar → wie Alert aussehen lassen


## UX (archiviert/integriert in Phase 3)

- [x] wenn nach dem ersten Abschnitt eines Steps darunter noch Inhalte sind muss das in der initialen Ansicht deutlich zu erkennen sein. vielleicht mit Pfeil der nach unten zeigt oder so
  → Implementiert in ONB-034


## Onboarding Fertigstellung 2026-05 (Ticketplan)

Ziel: Eine neu aufgenommene Person kann ohne Hilfe vom Einstieg bis zur aktiven Mitarbeit im Kurs-Repo arbeiten und danach sicher mit NEXT_STEPS.md weitermachen.

### Phase 0 - Abnahmebasis festlegen

1. [x] ONB-001: PRD in technische Abnahmekriterien uebersetzen
	 - Scope:
		 - aus PRD v1 eine pruefbare DoD-Checkliste bauen (1 Kriterium = 1 Testpunkt)
		 - Schwerpunkt: 3 Startseiten-Aktionen, Schritt-2-Logik, Rueckkehrmodus, Kursfluss-Bruecke, Mobile-Hinweise
	 - DoD:
		 - Eine klare Abnahmeliste liegt vor und ist im Team nutzbar.
		 - Alle Punkte sind messbar formuliert (ja/nein pruefbar).
	 - Dateien:
		 - apps/onboarding/prd_onboarding.md
		 - apps/onboarding/README.md

### Phase 1 - Kritische Funktionalitaet abschliessen

2. [x] ONB-010: Schritt-2-Persistenz und Restore korrigieren
	 - Scope:
		 - existing-beginner und existing-experienced muessen nach Reload korrekt geladen werden
		 - keine inkonsistenten Zwischenzustaende bei Auswahlwechsel
	 - DoD:
		 - Reload in Schritt 2 behaelt den korrekten Pfad.
		 - Pflicht-Checkbox-Logik bleibt intakt.
	 - Dateien:
		 - apps/onboarding/src/app/services/onboarding-state.service.ts
		 - apps/onboarding/src/app/pages/step-page/step-page.component.ts

3. [x] ONB-011: Schritt-2-Flow gegen PRD haerten
	 - Scope:
		 - Neueinsteiger-Pfad, Existing-Beginner-Pfad, Existing-Experienced-Pfad inklusive Fallback sauber pruefen
		 - Weiter- und Erledigt-Regeln transparent und konsistent
	 - DoD:
		 - Jeder Pfad kann ohne Dead-End bis zum naechsten Schritt durchlaufen werden.
		 - Keine Weiterleitung in falschen Zustand.
	 - Dateien:
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html
		 - apps/onboarding/src/app/pages/step-page/step-page.component.ts

4. [x] ONB-012: Rueckkehrmodus und freie Schrittauswahl final validieren
	 - Scope:
		 - Fortsetzen am letzten offenen Schritt
		 - freie Schrittauswahl im Shell-Navigator und Zusammenfassung konsistent
	 - DoD:
		 - Wiedereinstieg funktioniert aus Startseite, Kursstart, Shell und Zusammenfassung gleich.
	 - Dateien:
		 - apps/onboarding/src/app/pages/startseite/startseite.component.ts
		 - apps/onboarding/src/app/pages/kursstart/kursstart.component.ts
		 - apps/onboarding/src/app/pages/onboarding-shell/onboarding-shell.component.html
		 - apps/onboarding/src/app/pages/zusammenfassung/zusammenfassung.component.html

### Phase 2 - Inhaltliche Fertigstellung (Mitarbeit im Kurs-Repo)

5. [x] ONB-020: Bruecke in den Kursfluss verbindlich machen
	 - Scope:
		 - Abschluss muss klar in NEXT_STEPS.md und README_UEBUNGEN.md uebergeben
		 - GitHub-Link und VS-Code-Weg gleichwertig zeigen
	 - DoD:
		 - Lernende wissen am Ende: Wo lesen, wo umsetzen, wo Fortschritt eintragen.
	 - Dateien:
		 - apps/onboarding/src/app/data/onboarding-steps.data.ts
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html
		 - apps/onboarding/src/app/pages/zusammenfassung/zusammenfassung.component.html

### Phase 3 - UX/Polish & Inhaltsverbesserung (geplant 2026-05)

6. [ ] ONB-030: Accessibility & Kontrast überall überprüfen und fixen
	 - Scope:
		 - Blau-auf-Blau Kontrast problemstellen lokalisieren und fixen
		 - Weiß-auf-Hellblau (Fortschrittskomponente, aktive Step-Zahlen) ersetzen
		 - Alle Links und CTAs auf verschiedenen Hintergründen prüfen	 	 - **[Neu]** Kursstartseite (Kursüberblick): Blau-auf-Blau und Weiß-auf-Weiß Kontraste auf /kurse/vibe-coding-agentic-ai fixen	 - DoD:
		 - WCAG AAA Kontrast-Mindestverhältnisse erreicht
		 - Fortschritts-Komponente aktive Schritte deutlich lesbar
	 - Dateien:
		 - apps/onboarding/src/app/pages/onboarding-shell/onboarding-shell.component.scss
		 - apps/onboarding/src/app/pages/kursstart/kursstart.component.scss
		 - apps/onboarding/src/app/pages/startseite/startseite.component.scss
		 - apps/onboarding/src/app/pages/step-page/step-page.component.scss

7. [ ] ONB-031: Copy & Content überarbeiten nach Review-Feedback
	 - Scope:
		 - Umlaute überall fixen
		 - "Repo" → "Repository" ausschreiben (außer Code)
		 - Bindestriche – durch - ersetzen
		 - Step 1: Zu detaillierte Teile entfernen (NEXT_STEPS.md-Erwähnung, Git-Jargon), nur High-Level-Punkte
		 - Step 3: GitHub-Dokumentations-Links hinzufügen (docs.github.com/de, Support Hub, Community)
		 - Step 4: Logik umstellen: nicht "was ist GitHub erklären", nur Repos + adaptive Erklärungen je Erfahrung
		 - CTA "Noch kein Kursplatz?": Email-Button + Anfragetext-Template
	 - DoD:
		 - Copy auf Anfänger-Niveau verständlich
		 - Keine Tippfehler oder Umlaute
		 - Links zu GitHub-Docs funktionieren
	 - Dateien:
		 - apps/onboarding/src/app/data/onboarding-steps.data.ts
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html
		 - apps/onboarding/src/app/pages/startseite/startseite.component.html

8. [ ] ONB-032: Step-Logik & Interaktivität verfeinern
	 - Scope:
		 - Step 2: Popup-Bestätigung wenn nicht auf "Als erledigt markieren" geklickt
		 - Step 3: Rückwärts-Option "Nein, ich starte neu" + initiale Auswahlmöglichkeiten beibehalten
		 - Step 3: Adaptive Content je Erfahrung (wenn Umentscheidung: Erklärungen ausblenden, Anzeigebutton anbieten)
		 - Step 4: Frage "Hast du bereits mit Repos gearbeitet?" + adaptive Anleitung
		 - Aufgabe "GitHub Account anlegen" als Checklisteneintrag darstellen
	 - DoD:
		 - Alle Step-Flows ohne Dead-Ends durchlaufbar
		 - Umentscheidungen möglich (nicht trapped)
		 - Adaptive Content zeigt/verbirgt sich korrekt
	 - Dateien:
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html
		 - apps/onboarding/src/app/pages/step-page/step-page.component.ts
		 - apps/onboarding/src/app/data/onboarding-steps.data.ts

9. [ ] ONB-033: Datenschutz & Urheberrechts-Hinweise korrigieren
	 - Scope:
		 - "(Private reicht – die Trainerin wird eingeladen)" entfernen
		 - Step 4: Erläuterung hinzufügen dass bei public-Repos keine Kursinhalte (Knoot-Copyright) dupliziert werden dürfen
		 - Creative Commons / freie Lizenz-Beispiele aufzählen
	 - DoD:
		 - Rechtliche Klarheit über Copyright-Grenzen
		 - Keine verwirrenden Einladungs-Hinweise mehr
	 - Dateien:
		 - apps/onboarding/src/app/data/onboarding-steps.data.ts
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html

10. [x] ONB-034: Design & Visuelle Verbesserungen
	 - Scope:
		 - Kursstartseite: Meme-Panels vollständig einfärben (statt Transparenz-Mischton)
		 - Grafiken/Bilder zu Step-Prozessen hinzufügen für bessere Lesbarkeit
		 - Scroll-Hinweis (Pfeil) wenn nach erstem Abschnitt noch Inhalte folgen
		 - "Probleme mit dem Code?" Error-Box wie Alert stylen (besser lesbar auf blau)	 	 - **[Neu]** "Slop vs. Shipping" Erklärung darunter hinzufügen (was bedeuten diese Begriffe)
	 	 - **[Neu]** "Was du in 14 Modulen lernst" Layout: zu breit, Text klebt links/rechts an der Seite → max-width + padding anpassen	 - DoD:
		 - Visuelle Hierarchie deutlich
		 - Keine unerwünschten Transparenz-Effekte
		 - Long-Form-Content signal dass scrollbar ist
	 - Dateien:
		 - apps/onboarding/src/app/pages/kursstart/kursstart.component.html
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html
		 - apps/onboarding/src/app/pages/step-page/step-page.component.scss

11. [x] ONB-035: "Wie der Kurs funktioniert" Sektion hinzufügen/überarbeiten
	 - Scope:
	 	 - Neue Sektion (Hero oder nach Zusammenfassung) erklären:
	 	 	 - Schritte CAN übersprungen werden
	 	 	 - Aber bauen aufeinander auf
	 	 	 - Manche Übungen nicht möglich wenn vorherige nicht absolviert
	 	 - Schritt-Abhängigkeiten grafisch darstellen
	 - DoD:
	 	 - Learner wissen Bescheid über Schritt-Abhängigkeiten vor Start
	 	 - Keine überraschung bei "Schritt X nicht verfügbar"
	 - Dateien:
	 	 - apps/onboarding/src/app/data/onboarding-steps.data.ts
	 	 - apps/onboarding/src/app/pages/onboarding-shell/onboarding-shell.component.html

12. [x] ONB-036: Resume-Banner & Kursinformation erweitern
	 - Scope:
	 	 - **[Neu]** Resume-Banner: Bei "Dein letzter Stand" auch Kursname und Modulname anzeigen (z.B. "Kurs: Softwareentwicklung mit Vibe Coding & Agentic AI, Modul 1: Onboarding")
	 	 - Bessere visuelle Hierarchie und Lesbarkeit
	 - DoD:
	 	 - Teilnehmende sehen sofort, in welchem Kurs und Modul sie sich befinden
	 	 - Kursname und Modulinfo klar lesbar auf der Startseite
	 - Dateien:
	 	 - apps/onboarding/src/app/pages/startseite/startseite.component.html
	 	 - apps/onboarding/src/app/pages/startseite/startseite.component.ts
	 	 - apps/onboarding/src/app/pages/startseite/startseite.component.scss

13. [x] ONB-037: Footer mit Rechtsinformationen und Kontakt
	 - Scope:
	 	 - **[Neu]** Footer hinzufügen mit Links zu:
	 	 	 - Impressum (https://www.knoot-academy.de/impressum)
	 	 	 - Datenschutz (https://www.knoot-academy.de/datenschutz)
	 	 	 - AGB (https://www.knoot-academy.de/agb)
	 	 	 - Kontakt (https://www.knoot-academy.de/kontakt)
	 - DoD:
	 	 - Footer auf allen Seiten (Startseite, Kursstart, Steps) sichtbar
	 	 - Links funktionieren und führen zu korrekten Seiten
	 - Dateien:
	 	 - apps/onboarding/src/app/app.component.html
	 	 - apps/onboarding/src/app/components/ (neuer Footer-Component falls nötig)

14. [x] ONB-038: Video zum Kurs auf Kursseite einbinden
	 - Scope:
	 	 - YouTube-Video in die Kursstart-Seite integrieren: https://youtu.be/BK__F-ac1YE
	 	 - Positionierung direkt im Kurskontext (nicht im globalen Hub), mit kurzer Einleitung fuer Einsteiger
	 	 - Responsives Einbettungs-Layout (Desktop/Mobile) inkl. lesbarem Titel/Alt-Text-Hinweis
	 - DoD:
	 	 - Video ist auf der Kursseite sichtbar und abspielbar.
	 	 - Layout bleibt auf kleinen Bildschirmen stabil.
	 	 - Kein Bruch im visuellen Fluss der Seite.
	 - Dateien:
	 	 - apps/onboarding/src/app/pages/kursstart/kursstart.component.html
	 	 - apps/onboarding/src/app/pages/kursstart/kursstart.component.scss

15. [ ] ONB-039: Kursstartseite-Header - Anker-Links und CTA-Button kontextabhaengig
	 - Scope:
	 	 - Navbar-Links "Inhalte", "Ablauf", "Fuer wen?" sollen als Anker-Links auf Abschnitte der Kursstartseite fuehren (nicht auf die Hauptseite zurueck)
	 	 - CTA-Button in Navbar kontextabhaengig beschriften: "Starte mit Modul 1" (noch kein Fortschritt) oder "Kurs fortsetzen" (Fortschritt vorhanden)
	 - DoD:
	 	 - Klick auf "Inhalte" scrollt zu #inhalte, nicht auf localhost:4200/
	 	 - CTA-Button zeigt korrektes Label je nach Fortschrittsstatus
	 - Dateien:
	 	 - apps/onboarding/src/app/pages/kursstart/kursstart.component.html
	 	 - apps/onboarding/src/app/pages/kursstart/kursstart.component.ts

16. [ ] ONB-041: Step 1 - Weiter-Button sperren wenn Voucher nicht validiert
	 - Scope:
	 	 - "Weiter"-Button in Schritt 1 deaktivieren, solange Voucher nicht eingegeben/bestaetigt
	 	 - Tooltip/Hinweis: "Kurs noch nicht aktiv. Erst Einstiegsfragen beantworten und Voucher-Code eingeben."
	 - DoD:
	 	 - Weiter-Button ist disabled wenn Voucher nicht validiert
	 	 - Klick auf gesperrten Button zeigt sinnvolle Rueckmeldung
	 - Dateien:
	 	 - apps/onboarding/src/app/pages/step-page/step-page.component.ts
	 	 - apps/onboarding/src/app/pages/step-page/step-page.component.html

6. [x] ONB-021: Kurs-Repo vs eigenes Repo didaktisch schaerfen
	 - Scope:
		 - Missverstaendnisse aktiv verhindern (klare Merksaetze, klare Beispiele)
		 - Lernfortschritt zentral im Kurs-Repo explizit begruenden
	 - DoD:
		 - Inhalte sind fuer Einsteiger eindeutig und ohne Zusatzerklaerung verstaendlich.
	 - Dateien:
		 - apps/onboarding/public/content/kurs-handhabung.md
		 - apps/onboarding/public/content/kurs-ueberblick.md

7. [x] ONB-022: Startseite auf PRD-Kernaktionen fokussieren
	 - Scope:
		 - Genau 3 primaere Handlungsoptionen visuell und textlich priorisieren
		 - Weitere Kurse klar als im Aufbau markieren (sekundaer)
	 - DoD:
		 - Der Einstieg ist fuer neue Teilnehmende sofort klar, ohne CTA-Ueberladung.
	 - Dateien:
		 - apps/onboarding/src/app/pages/startseite/startseite.component.html
		 - apps/onboarding/src/app/pages/startseite/startseite.component.ts
		 - apps/onboarding/src/app/pages/kursstart/kursstart.component.html

### Phase 3 - UX/Accessibility/Qualitaet

8. [x] ONB-030: Sichtbarer Hinweis auf Folgeinhalte unterhalb Lesson-Flow
	 - Scope:
		 - Wenn unter der Lesson noch Aufgaben folgen, in der initialen Ansicht visuell klar machen (z. B. Pfeil/Hinweis)
	 - DoD:
		 - Nutzer sehen ohne Scrollen, dass weitere Inhalte folgen.
	 - Dateien:
		 - apps/onboarding/src/app/components/lesson-flow/**
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html
		 - apps/onboarding/src/app/pages/step-page/step-page.component.scss

9. [x] ONB-031: Desktop-Hinweise fuer kritische Schritte schaerfen
	 - Scope:
		 - Bei Clone/Install/Terminal-Schritten mobile Nutzbarkeit + klarer Desktop-Hinweis
	 - DoD:
		 - Hinweise sind an den relevanten Schritten sichtbar und eindeutig.
	 - Dateien:
		 - apps/onboarding/src/app/data/onboarding-steps.data.ts
		 - apps/onboarding/src/app/pages/step-page/step-page.component.html

10. [x] ONB-032: Mindest-Testset fuer Kernlogik aufbauen
	 - Scope:
		 - Unit-Tests fuer State-Logik und Guard
		 - mindestens 1 Komponententest fuer Schritt-2-Entscheidungsfluss
	 - DoD:
		 - Tests decken kritische Pfade ab und laufen lokal gruen.
	 - Dateien:
		 - apps/onboarding/src/app/services/onboarding-state.service.spec.ts (neu)
		 - apps/onboarding/src/app/guards/step-access.guard.spec.ts (neu)
		 - apps/onboarding/src/app/pages/step-page/step-page.component.spec.ts (neu)

### Phase 4 - Dokumentation und Betriebsklarheit

11. [x] ONB-040: Onboarding README von CLI-Standard auf Team-Doku umstellen
	 - Scope:
		 - Pflegeorte (Daten, Content, Komponenten), Build/Test, Abnahme-Check, typische Fehler
	 - DoD:
		 - README dient als echte Arbeitsgrundlage fuer Weiterentwicklung.
	 - Dateien:
		 - apps/onboarding/README.md


## Empfohlene Reihenfolge

1. ONB-001 ✅
2. ONB-010, ONB-011, ONB-012 ✅
3. ONB-020, ONB-021, ONB-022 ✅
4. **ONB-030** (Kontrast-Fixes) ✅ GERADE GEMACHT
5. **ONB-031** (Copy-Fixes) ✅ GERADE GEMACHT
6. ONB-032 (Step-Logik)
7. ONB-033 (Datenschutz & Copyright)
8. ONB-034 (Design & Visuelle Verbesserungen) – mit neuen Layout-Fixes
9. ONB-035 (Wie der Kurs funktioniert)
10. ONB-036 (Resume-Banner erweitern) – neu
11. ONB-037 (Footer) – neu
12. ONB-038 (Video auf Kursseite einbinden) – ✅ ERLEDIGT
13. **ONB-039** (Kursstartseite-Header: Anker-Links + CTA-Label)
14. **ONB-041** (Step 1: Weiter-Button sperren wenn Voucher fehlt)
15. ONB-040 (README & Betriebsklarheit)


## Go-Live Check (Abnahme)

- [ ] Neue Person kommt ohne Hilfe bis zum lokal geoeffneten Kurs-Repo.
- [ ] Neue Person kann den Unterschied Kurs-Repo vs eigenes Repo korrekt erklaeren.
- [ ] Neue Person weiss, dass lernfortschritt_<name>.md zentral im Kurs-Repo gepflegt wird.
- [ ] Abschluss verlinkt klar auf NEXT_STEPS.md und course/uebungen/README_UEBUNGEN.md.
- [ ] Build und Tests laufen fuer apps/onboarding stabil.


## Naechste Phase nach der aktuellen MVP-Runde

Ziel: Die Onboarding-App soll abnahmebereit werden und sich zugleich in Richtung einer echten Startplattform fuer mehrere Kurse und mehrere Onboardings entwickeln.

### Neue Prioritaeten aus der Entscheidungsrunde

1. [x] HUB-001: Dev-Server robust machen
	- `ng serve` muss lokal stabil starten.
	- Interaktive Port-Konflikte vermeiden.
	- Ergebnis dokumentieren.

2. [ ] HUB-010: Startseite zu einer echten Kurs-Hub-Startseite umbauen
	- Nicht mehr nur Start fuer einen Kurs.
	- Muss spaeter mehrere Kurse und mehrere Onboardings tragen koennen.
	- Informationsarchitektur, Routing und Textfokus entsprechend vorbereiten.

3. [ ] HUB-011: Kursstart-Seite als modulare Kursdetail-/Einstiegsseite umbauen
	- So schneiden, dass kuenftig mehrere Kurse dieselbe Struktur nutzen koennen.
	- Nicht nur fuer diesen einen Onboarding-Flow denken.

4. [x] HUB-020: Repo-Struktur fuer mehrere Kurse/Onboardings vorbereiten
	- Umgesetzt mit minimalem Risiko: Routing und Navigation sind jetzt courseId-basiert (`/kurse/:courseId/onboarding/...`) inklusive Legacy-Redirects.
	- Onboarding-State ist kursgebunden (sessionStorage pro `courseId`), dadurch getrennte Fortschritte je Kurs.
	- Zielbild bleibt erhalten: bestehender MVP-Flow funktioniert weiter, Struktur ist fuer mehrere Kursangebote vorbereitet.

5. [ ] UX-100: Inhalte fuer Einsteiger weiter vertiefen, aber optional halten
	- Mehr Tiefe fuer absolute Einsteiger.
	- Immer mit klarer Wahl zwischen kurzer Fuehrung und tieferer Erklaerung.
	- Besonders wichtig bei GitHub, Repo-Verstaendnis, Clone und Kursfluss.

6. [ ] UX-110: Uebergang in NEXT_STEPS.md noch staerker machen
	- Das ist aktuell der wichtigste fachliche Uebergang.
	- Abschluss und Kursstart muessen noch deutlicher auf den ersten echten Arbeitsschritt einzahlen.

7. [ ] UX-120: Desktop-First klar auf App-Ebene verankern
	- Der Kurs ist fuer Desktop/Laptop konzipiert.
	- Mobile dient primaer zum Lesen und Vorbereiten.
	- Hinweise nicht nur pro Schritt, sondern auch in den Einstiegsseiten klar setzen.

8. [ ] QA-100: Testset deutlich ausbauen
	- Mehr Tests fuer kritische Pfade, Resume-Logik, Abschluss-Bruecke und Hub-Verhalten.
	- Nicht beim Minimalset stehen bleiben.

9. [ ] TECH-100: Technische Schulden sichtbar sammeln
	- Bundle-Groesse
	- Multi-Kurs-Architektur
	- moegliche Routing-Migration
	- bekannte Komplexitaet in Startseite/Kursstart

10. [ ] REVIEW-100: Abschluss dieser Phase ueber Text- und UX-Review
	- Kein vorschneller Go-Live.
	- Erst pruefen, ob Verstaendlichkeit, Fokus und Plattform-Richtung stimmen.


## Empfohlene neue Reihenfolge

1. HUB-001
2. HUB-010
3. HUB-011
4. HUB-020
5. UX-110
6. UX-100
7. UX-120
8. QA-100
9. TECH-100
10. REVIEW-100


