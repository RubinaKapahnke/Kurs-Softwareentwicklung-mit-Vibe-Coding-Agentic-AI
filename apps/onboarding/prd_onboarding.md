# Product Requirements Document (PRD): Onboarding Hub

**Projekt:** KnOot Academy Onboarding Hub 
**Status:** Requirement Baseline v1 
**Geltungsbereich:** `apps/onboarding/`

---

## 1. Zielbild
Der Onboarding Hub führt absolute Einsteiger verständlich und sicher bis zum lokalen Clone des Kurs-Repos. Gleichzeitig ist die Startseite so gestaltet, dass sie später als Einstieg für weitere KI-Kurse genutzt werden kann (z. B. Rapid Prototyping, AI Literacy, Vertiefungsmodule).

Wichtig für v1:
- Die Seite zeigt klar, dass weitere Kurse noch im Aufbau sind.
- Aktuell ist nur ein Kurs verfügbar: der Einstieg in den vibe-coding-Kurs.

---

## 2. Nutzergruppen
- Neue Teilnehmende ohne GitHub-, VS-Code- und Terminal-Erfahrung
- Teilnehmende mit teilweiser Vorerfahrung (z. B. bereits GitHub-Account vorhanden)
- Rückkehrende Teilnehmende, die weiterarbeiten wollen

---

## 3. Scope v1 (In-Scope)
1. Startseite als zentraler Hub-Einstieg mit Kurserklärung.
2. Drei Hauptaktionen auf der Startseite:
 - Onboarding starten
 - Kursüberblick
 - Weitere Kurse (im Aufbau)
3. Sichtbarer Hinweis, dass weitere Kurse/Vertiefungsmodule aktuell noch nicht verfügbar sind.
4. Onboarding-Flow mit 6 Kernschritten bis zum lokalen Clone.
5. Schritt 2 fragt Vorerfahrung ab und bietet je nach Antwort unterschiedliche Folgepfade/Hinweise.
6. Bei bestehendem GitHub-Account: verpflichtender Hinweis inkl. Pflicht-Checkbox,
 dass der Account im geteilten Repo für andere sichtbar sein kann.
7. Rückkehr-Funktion:
 - Weiter bei letztem Schritt
 - freie Schrittauswahl möglich
8. Brücke in den Kursfluss mit zwei gleichwertigen Wegen:
 - direkte GitHub-Links
 - VS-Code-Anleitung (Datei öffnen)
9. Fallback-Mechanik: Nutzer können bei falsch eingeschätzter Vorerfahrung
 in den allgemeinen Onboarding-Pfad zurückspringen (doch weiter).
10. Mobile ist nutzbar, aber bei kritischen Schritten wird auf Desktop-Bedarf hingewiesen.

---

## 4. Out-of-Scope v1
- Login/Account-System in der Website
- langfristiges Progress-Tracking mit Cloud-Speicherung
- Gamification (Punkte, Badges, Streaks)
- Kurskauf/Payment
- Vollständige Kurskatalog-Logik für weitere Kurse
- Erweiterter Datenschutz-Infobereich (kann später als Schritt 15C ergänzt werden)

---

## 5. Informationsarchitektur

### Startseite (`/`)
Zweck:
- Orientierung für absolute Einsteiger
- Einstieg in den aktuellen Kurs
- Sichtbarer Ausblick auf weitere KI-Kurse (im Aufbau)

Inhalte:
- Kurzer Intro-Abschnitt zum Kurs
- Was du hier lernst in klarer Sprache
- Was du brauchst ausführlich (Q5B)
- Hilfebereich (kompakt + FAQ-artig, Q8A/B)
- 6-Schritte-Teaser in kompakter Form (Q3-Empfehlung 3C)
- Drei CTAs (Q19)

### Onboarding-Flow (`/onboarding/...`)
- Schrittseiten mit Aufgaben, Erfolgskriterium und Hilfe
- Schritt 2 mit Vorerfahrungsabfrage und adaptiven Hinweisen/Pfaden
- Ich weiß es doch nicht-Fallback zur sicheren Standardführung

### Abschluss/Brücke
- GitHub-Link zu `NEXT_STEPS.md`
- GitHub-Link zu `README_UEBUNGEN.md`
- Alternative VS-Code-Navigation (Dateiname direkt öffnen)
- Skip-Option mit späterem Wiedereinstieg

---

## 6. UX- und Textprinzipien
- Ton: Mischung aus klar-direkt und motivierend (Q9C)
- Textmenge auf Startseite: mittel (Q4B)
- Visualstil: starkes Branding + Lernplattform-Charakter (Q10B/C)
- Startseite enthält eine kleine Erfolgs-Checkliste (Q20C)
- Mobile-first Darstellung, aber mit Desktop-Hinweis bei kritischen Schritten (Q12A + Q18B)

---

## 7. User Stories mit Akzeptanzkriterien

### [Einsteiger]
Als Einsteiger möchte ich auf einer Startseite verstehen, was der Kurs ist und wie ich beginne, damit ich ohne Vorwissen sicher starten kann.

Akzeptanzkriterien:
- [ ] Startseite hat genau 3 Hauptaktionen.
- [ ] Startseite erklärt den Kurs in einfacher Sprache.
- [ ] Startseite zeigt sichtbar, dass weitere Kurse im Aufbau sind.

### [Teilnehmende mit Vorerfahrung]
Als Teilnehmende mit bestehendem GitHub-Account möchte ich vorab auf Sichtbarkeit im geteilten Repo hingewiesen werden, damit ich bewusst entscheide.

Akzeptanzkriterien:
- [ ] In Schritt 2 erscheint der Hinweis bei passender Antwort.
- [ ] Eine Pflicht-Checkbox muss aktiv bestätigt werden, bevor es weitergeht.

### [Rückkehrer]
Als Rückkehrer möchte ich beim letzten Stand weiterarbeiten oder direkt zu einem Schritt springen, damit ich keine Zeit verliere.

Akzeptanzkriterien:
- [ ] Weiter bei letztem Schritt ist verfügbar.
- [ ] Freie Schrittauswahl ist verfügbar.
- [ ] Ein Fallback zur Standardführung ist jederzeit erreichbar.

### [Alle Lernenden]
Als Lernende möchte ich am Ende eine klare Brücke in den Kursfluss haben, damit ich sofort produktiv weitergehen kann.

Akzeptanzkriterien:
- [ ] GitHub-Links und VS-Code-Anleitung werden gleichwertig angeboten.
- [ ] Eine Skip-Option ist vorhanden.

---

## 8. Routing- und Entscheidungslogik (fachlich)
- Startseite als Einstiegsroute
- Onboarding-Schritte als Hauptfluss
- Schritt 2 als Entscheidungsstelle (Vorerfahrung)
- Rücksprung/Umstellung auf Standardpfad jederzeit möglich
- Abschluss mit Brücke + optionalem Skip

---

## 9. Definition of Done (v1)
- [ ] Startseite mit 3 CTAs und Coming-soon-Bereich für weitere KI-Kurse umgesetzt.
- [ ] Schritt 2 mit Vorerfahrungsabfrage und verpflichtendem GitHub-Sichtbarkeitshinweis umgesetzt.
- [ ] Fallback doch weiter für Fehleinschätzungen verfügbar.
- [ ] Rückkehr-Modus und freie Schrittauswahl verfügbar.
- [ ] Brücke in den Kursfluss mit Links + VS-Code-Alternative + Skip umgesetzt.
- [ ] Mobile lauffähig, mit sichtbarem Desktop-Hinweis bei kritischen Schritten.

---

## 10. Offene Punkte für später
- Erweiterter Datenschutz-/Transparenzbereich (aus 15C)
- Aktivierung weiterer Kurse (Rapid Prototyping, AI Literacy, Vertiefungsmodule)
- Entscheidung, ob die 6-Schritte-Teaser visualisiert oder textlich bleiben
