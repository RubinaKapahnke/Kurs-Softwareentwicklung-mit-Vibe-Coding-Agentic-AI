# Architecture Foundations: Vom PRD zur Projektstruktur

Diese Datei fuehrt dich durch den praktischen Weg: Du hast ein PRD – jetzt leitest du daraus eine Ordnerstruktur ab, benennst deine Komponenten und formulierst einen Strukturkontext fuer die KI.

---

## Schritt 1: PRD lesen und Bausteine identifizieren

Oeffne dein PRD (`apps/learners/<dein-name>/prd_<dein-name>.md`) und beantworte diese Fragen:

**Was zeigt die App an?**
→ Alles, was sichtbar auf dem Bildschirm erscheint, ist ein Kandidat fuer eine Komponente.

**Was passiert, wenn jemand mit der App interagiert?**
→ Klick-Aktionen, Formulare, Filter – das sind oft eigene Komponenten oder Services.

**Woher kommen die Daten?**
→ JSON-Datei lokal? API? Benutzereingabe? Das bestimmt, wo du einen Service brauchst.

**Beispiel (Kurs-Dashboard aus dem Kurs-PRD):**

| PRD-Aussage | Was wird daraus? |
| :--- | :--- |
| „Zeige alle Teilnehmer als Karten an" | Komponente `ParticipantCard` |
| „Die Karten erscheinen auf einer Uebersichtsseite" | Seite `DashboardPage` |
| „Fortschritt wird als Balken angezeigt" | Komponente `ProgressBar` |
| „Daten kommen aus einer JSON-Datei" | Service `ParticipantService` + `participants.json` |

---

## Schritt 2: Ordnerstruktur ableiten

Sobald du weisst, welche Bausteine es gibt, ordnest du sie in die Standard-Struktur ein:

```
src/
├── app/
│   ├── components/       ← Wiederverwendbare UI-Bausteine
│   │   ├── participant-card/
│   │   └── progress-bar/
│   ├── pages/            ← Seiten der App (eine pro Route)
│   │   └── dashboard/
│   └── services/         ← Logik und Datenzugriff
│       └── participant.service.ts
└── assets/
    └── data/
        └── participants.json
```

**Faustregeln:**
- Wird etwas mehrfach angezeigt (z. B. eine Karte pro Person)? → `components/`
- Ist es eine eigene Seite (mit eigenem URL-Pfad)? → `pages/`
- Laedt oder verarbeitet es Daten, ohne selbst etwas anzuzeigen? → `services/`

---

## Schritt 3: Strukturkontext-Block formulieren

Dieser Block ist dein Standard-Kontext fuer Prompts. Du schreibst ihn einmal und fuerst ihn bei neuen Aufgaben immer voran.

**Template:**

```
Mein Projekt:
- Stack: Angular + Angular Material + TypeScript
- Ziel: [1 Satz aus deinem PRD – Vision & Zielsetzung]
- Ordnerstruktur:
  - components/ → wiederverwendbare UI-Bausteine
  - pages/ → Seiten der App
  - services/ → Logik und Datenzugriff
  - assets/data/ → JSON-Datendateien
- Aktuelle Aufgabe: [Komponentenname] – [Verantwortlichkeit in 1 Satz]
- Datenquelle: [Dateiname oder Service-Name]
```

**Ausgefuelltes Beispiel:**

```
Mein Projekt:
- Stack: Angular + Angular Material + TypeScript
- Ziel: Ein Dashboard, das den Lernfortschritt aller Kursteilnehmer anzeigt.
- Ordnerstruktur:
  - components/ → wiederverwendbare UI-Bausteine
  - pages/ → Seiten der App
  - services/ → Logik und Datenzugriff
  - assets/data/ → JSON-Datendateien
- Aktuelle Aufgabe: ParticipantCard – zeigt Name, Status und Fortschritt einer Person an
- Datenquelle: participants.json (wird vom ParticipantService geladen)
```

Diesen Block in deiner PRD-Datei unter einem neuen Abschnitt `## Strukturkontext` ablegen – dann kannst du ihn per `#prd_<dein-name>.md` in jeden Prompt einbinden.

---

## Schritt 4: KI mit Strukturkontext beauftragen

Mit dem fertigen Strukturkontext sieht ein Prompt so aus:

> `#prd_daria.md Erstelle die Komponente ParticipantCard. Sie bekommt Name und Status als Input und zeigt beides mit Angular Material Card an.`

Die KI legt die Datei automatisch im richtigen Ordner an und nutzt den richtigen Stack – weil du ihr den Kontext gegeben hast.

**Ergebnis pruefen:**
- Liegt die Datei unter `src/app/components/participant-card/`?
- Hat sie die Inputs, die du definiert hast?
- Nutzt sie Angular Material, falls im Stack angegeben?

Falls etwas nicht stimmt: Nicht neu anfangen – im gleichen Chat nachfragen und korrigieren.

---

## Selbstcheck

- [ ] Ich kann aus meinem PRD benennen, welche Teile Komponenten, welche Seiten und welche Services werden.
- [ ] Ich kann eine Ordnerstruktur fuer mein Projekt skizzieren.
- [ ] Ich habe einen ausgefuellten Strukturkontext-Block in meiner PRD-Datei.
- [ ] Ich habe die KI mit Strukturkontext beauftragt und das Ergebnis beurteilt.
