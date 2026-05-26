# Product Requirements Document (PRD): Kurs-Tool mit Modul Onboarding als erstem Ausbauschritt

**Projekt:** KnOot Academy Kurs-Tool
**Status:** Requirement Baseline v1
**Geltungsbereich:** `apps/onboarding/`

---

## 1. Zielbild
Das Kurs-Tool führt Teilnehmende voraussetzungsarm, klar und in erwachsenem Ton durch den gesamten Kurs. Der aktuelle Produktfokus liegt auf dem ersten Modul, dem Onboarding, bis zum lokalen Clone des Kurs-Repos. Gleichzeitig ist die Startseite so gestaltet, dass der weitere Kursverlauf und spätere KI-Kursmodule daran anschließen können.

Wichtig für v1:
- Die Seite zeigt klar, dass weitere Kurse noch im Aufbau sind.
- Aktuell ist nur ein Kurs verfügbar: der Einstieg in **Softwareentwicklung mit Vibe Coding & Agentic AI**.

---

## 2. Nutzergruppen
- Neue Teilnehmende mit wenig oder keiner GitHub-, VS-Code- und Terminal-Erfahrung
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
4. Modul-Flow für das Modul Onboarding mit Kernschritten bis zum lokalen Clone.
5. Lektion 2 fragt Vorerfahrung ab und bietet je nach Antwort unterschiedliche Folgepfade/Hinweise.
6. Bei bestehendem GitHub-Account: verpflichtender Hinweis inkl. Pflicht-Checkbox,
 dass der Account im geteilten Repo für andere sichtbar sein kann.
7. Rückkehr-Funktion:
 - Weiter bei letztem Lektion
 - freie Lektionauswahl möglich
8. Brücke in den Kursfluss mit zwei gleichwertigen Wegen:
 - direkte GitHub-Links
 - VS-Code-Anleitung (Datei öffnen)
9. Fallback-Mechanik: Nutzer können bei falsch eingeschätzter Vorerfahrung
 in den allgemeinen Onboarding-Pfad zurückspringen (doch weiter).
10. Mobile ist nutzbar, aber bei kritischen Lektionen wird auf Desktop-Bedarf hingewiesen.

---

## 4. Out-of-Scope v1
- Login/Account-System in der Website
- langfristiges Progress-Tracking mit Cloud-Speicherung
- Gamification (Punkte, Badges, Streaks)
- Kurskauf/Payment
- Vollständige Kurskatalog-Logik für weitere Kurse
- Erweiterter Datenschutz-Infobereich (kann später als Lektion 15C ergänzt werden)

---

## 5. Informationsarchitektur

### Startseite (`/`)
Zweck:
- Orientierung für neue Teilnehmende ohne infantilisierenden Ton
- Einstieg in den aktuellen Kurs
- Sichtbarer Ausblick auf weitere KI-Kurse (im Aufbau)

Inhalte:
- Kurzer Intro-Abschnitt zum Kurs
- Was du hier lernst in klarer Sprache
- Was du brauchst ausführlich (Q5B)
- Hilfebereich (kompakt + FAQ-artig, Q8A/B)
- 6-Lektionen-Teaser in kompakter Form (Q3-Empfehlung 3C)
- Drei CTAs (Q19)

### Modul-Flow (`/onboarding/...`)
- Lektionseiten mit Aufgaben, Erfolgskriterium und Hilfe
- Lektion 2 mit Vorerfahrungsabfrage und adaptiven Hinweisen/Pfaden
- Ich weiß es doch nicht-Fallback zur sicheren Standardführung

Hinweis:
Der Bereich `/onboarding/...` bildet aktuell das erste Kursmodul ab. Die Anwendung selbst ist fachlich breiter als dieses Modul.

### Abschluss/Brücke
- GitHub-Link zu `COURSE_MILESTONES.md`
- GitHub-Link zu `README_UEBUNGEN.md`
- Alternative VS-Code-Navigation (Dateiname direkt öffnen)
- Skip-Option mit späterem Wiedereinstieg

---

## 6. UX- und Textprinzipien
- Ton: klar-direkt, erwachsen, professionell, nicht infantil
- Textmenge auf Startseite: mittel (Q4B)
- Visualstil: starkes Branding + Lernplattform-Charakter (Q10B/C)
- Startseite enthält eine kleine Erfolgs-Checkliste (Q20C)
- Mobile-first Darstellung, aber mit Desktop-Hinweis bei kritischen Lektionen (Q12A + Q18B)
- Fachbegriffe werden vor erster Nutzung oder direkt am Einsatzpunkt erklärt.
- Bei zentralen Lektionen wird sichtbar gemacht, was jetzt passiert, warum es jetzt passiert und wofür es später gebraucht wird.
- Lange Textstrecken ohne Handlung oder visuellen Anker sind zu vermeiden.

---

## 7. User Stories mit Akzeptanzkriterien

### [Neue teilnehmende Person]
Als neue teilnehmende Person möchte ich auf einer Startseite verstehen, was der Kurs ist und wie ich beginne, damit ich ohne unnötige Hürden sicher starten kann.

Akzeptanzkriterien:
- [ ] Startseite hat genau 3 Hauptaktionen.
- [ ] Startseite erklärt den Kurs in einfacher Sprache.
- [ ] Startseite zeigt sichtbar, dass weitere Kurse im Aufbau sind.

### [Teilnehmende mit Vorerfahrung]
Als Teilnehmende mit bestehendem GitHub-Account möchte ich vorab auf Sichtbarkeit im geteilten Repo hingewiesen werden, damit ich bewusst entscheide.

Akzeptanzkriterien:
- [ ] In Lektion 2 erscheint der Hinweis bei passender Antwort.
- [ ] Eine Pflicht-Checkbox muss aktiv bestätigt werden, bevor es weitergeht.

### [Rückkehrer]
Als Rückkehrer möchte ich beim letzten Stand weiterarbeiten oder direkt zu einem Lektion springen, damit ich keine Zeit verliere.

Akzeptanzkriterien:
- [ ] Weiter bei letztem Lektion ist verfügbar.
- [ ] Freie Lektionauswahl ist verfügbar.
- [ ] Ein Fallback zur Standardführung ist jederzeit erreichbar.

### [Alle Lernenden]
Als Lernende möchte ich am Ende eine klare Brücke in den Kursfluss haben, damit ich sofort produktiv weitergehen kann.

Akzeptanzkriterien:
- [ ] GitHub-Links und VS-Code-Anleitung werden gleichwertig angeboten.
- [ ] Eine Skip-Option ist vorhanden.

---

## 8. Routing- und Entscheidungslogik (fachlich)
- Startseite als Einstiegsroute
- Onboarding-Lektionen als Hauptfluss
- Lektion 2 als Entscheidungsstelle (Vorerfahrung)
- Rücksprung/Umstellung auf Standardpfad jederzeit möglich
- Abschluss mit Brücke + optionalem Skip

### Lektion-2-Pfade (verbindliche Zustandslogik)

Die technische Quelle für diese Logik liegt in
`src/app/services/onboarding-state.service.ts` und `src/app/pages/step-page/step-page.component.ts`.

| Interaktion in Lektion 2 | `step2Experience` | Bedeutung | Darf "Als erledigt markieren" aktivieren? |
|:---|:---|:---|:---|
| Noch nichts gewählt | `null` | Kein Pfad gewählt | Nein |
| "Ja, ich habe einen Account" (erste Auswahl) | `existing` | Zwischenstatus, bevor Lernpfad gewählt wird | Nein |
| "Lektion bearbeiten" | `existing-beginner` | Bestehender Account, aber Inhalte werden durchgearbeitet | Ja, nach Sichtbarkeits-Bestätigung |
| "Lektion überspringen" | `existing-experienced` | Bestehender Account, Inhalte werden übersprungen | Ja, nach Sichtbarkeits-Bestätigung |
| "Nein, bisher nicht" | `new` | Neuer Account, normaler Lernpfad | Ja, wenn Aufgaben/Lektion erfüllt sind |
| Von `existing-experienced` auf "Neuen Account erstellen" | `new-skip` | Wechselpfad vom erfahrenen Account-Pfad auf neuen Account | Ja, wie `new` (Lektion nicht erzwungen) |

#### Kritischer Wechselpfad (Bug-prävention)

Folgender Ablauf muss immer freigeschaltet bleiben:

1. "Ja, ich habe einen Account"
2. "Lektion überspringen"
3. "Neuen Account erstellen"

Erwartetes Ergebnis:

- Status wird auf `new-skip` gesetzt.
- "Als erledigt markieren" darf dadurch nicht blockiert werden.
- Die Sichtbarkeits-Bestätigung darf in diesem Wechselpfad kein Blocker sein.

---

## 9. Definition of Done (v1)
- [ ] Startseite mit 3 CTAs und Coming-soon-Bereich für weitere KI-Kurse umgesetzt.
- [ ] Lektion 2 mit Vorerfahrungsabfrage und verpflichtendem GitHub-Sichtbarkeitshinweis umgesetzt.
- [ ] Fallback doch weiter für Fehleinschätzungen verfügbar.
- [ ] Rückkehr-Modus und freie Lektionauswahl verfügbar.
- [ ] Brücke in den Kursfluss mit Links + VS-Code-Alternative + Skip umgesetzt.
- [ ] Mobile lauffähig, mit sichtbarem Desktop-Hinweis bei kritischen Lektionen.

---

## 11. Architekturentscheidung (neu)

Ab jetzt wird die Anwendung fachlich als **Kurs-Tool** geführt. Der bisherige Bereich unter `/onboarding/...` ist das **Modul Onboarding** innerhalb eines größeren Kurskontexts.

### Konsequenz für nächste Refactoring-Phase
1. Routing von reinem Onboarding-Denken auf modulare Struktur vorbereiten:
 - heute: `/onboarding/step/:id`
 - Ziel: `/kurs/modul/:moduleId/step/:stepId`
2. Datenmodell erweitern:
 - heute: `ONBOARDING_STEPS`
 - Ziel: `COURSE_MODULES` mit verschachtelten `steps`
3. Zustandsspeicherung modularisieren:
 - heute: ein Onboarding-State
 - Ziel: Zustand pro Modul (Fortschritt, Subtasks, Abschlussstatus)
4. UI-Texte vollständig auf Modul/Kurs-Sprache umstellen:
 - keine Nutzertexte mit "Onboarding-Tool" mehr
 - stattdessen "Kurs-Tool" und "Modul Onboarding"
5. Nach Modul Onboarding sollen weitere Module im gleichen technischen Muster ergänzt werden (gleiches Layout, gleiche Fortschrittslogik, neue Inhalte).

---

## 10. Offene Punkte für später
- Erweiterter Datenschutz-/Transparenzbereich (aus 15C)
- Aktivierung weiterer Kurse (Rapid Prototyping, AI Literacy, Vertiefungsmodule)
- Entscheidung, ob die 6-Lektionen-Teaser visualisiert oder textlich bleiben


