# Programmierlogik: KI-Code lesen und verbessern

Diese Datei ist die praktische Fortsetzung zu den Grundlagen. Ziel ist nicht, sofort perfekten Code zu schreiben, sondern KI-Code systematisch zu verstehen und gezielt zu verbessern.

---

## Schritt 1: Aufgabe in einem Satz festhalten

Bevor du den Code anschaust, schreibe einen Satz:

"Diese Funktion soll ..."

Wenn dieser Satz unklar ist, wird auch die Code-Bewertung unklar.

---

## Schritt 2: Code in kleine Bloecke teilen

Teile die Datei in 3-5 logische Abschnitte:
- Eingaben
- Verarbeitung
- Ausgabe
- Fehlerbehandlung

Bewerte jeden Abschnitt einzeln. So vermeidest du "Alles ist falsch"-Gefuehl.

---

## Schritt 3: Frage-Muster fuer jeden Block

Nutze pro Block immer die gleichen Fragen:

1. Welche Daten gehen hinein?
2. Welche Entscheidung wird getroffen?
3. Welche Nebenwirkung gibt es? (z. B. State aendern, API aufrufen)
4. Was ist die Ausgabe?

Wenn eine Frage nicht beantwortbar ist, fehlt meist Kontext oder der Code ist zu unklar.

---

## Schritt 4: Gezielte KI-Rueckfragen stellen

Statt "Bitte fixen" nutze praezise Rueckfragen, z. B.:

- "Erklaere nur den Datenfluss dieser Funktion in 5 Stichpunkten."
- "Welche zwei Bedingungen koennen hier zu falschen Ergebnissen fuehren?"
- "Schlage eine kleine Umbenennung vor, ohne Verhalten zu aendern."
- "Welche Testfaelle pruefen den Randfall mit leerer Liste?"

Damit zwingst du die KI auf Verstehen statt Raten.

---

## Schritt 5: Kleine Verbesserungen priorisieren

Starte mit Aenderungen, die viel Klarheit bringen und wenig Risiko haben:

1. Variablen besser benennen
2. Zu lange Funktionen in zwei kleinere Schritte trennen
3. Fruehe Rueckgabe fuer Randfaelle ergaenzen
4. Unklare Bedingung in sprechende Hilfsvariable auslagern

Grosses Refactoring erst, wenn das Verhalten stabil verstanden ist.

---

## Arbeitsvorlage: Code-Versteh-Notiz

Du kannst dieses Muster in deinem Lernjournal oder PRD verwenden:

```text
Codeabschnitt:
Aufgabe in 1 Satz:
Eingaben:
Wichtige Bedingung:
Ausgabe:
Unsichere Stelle:
Naechster kleiner Test:
```

---

## Selbstcheck

- [ ] Ich kann einen KI-Codeabschnitt in Eingabe, Verarbeitung und Ausgabe aufteilen.
- [ ] Ich kann mindestens eine praezise Rueckfrage an die KI formulieren.
- [ ] Ich kann eine kleine Verbesserung mit geringem Risiko benennen.
- [ ] Ich kann erklaeren, warum ich zuerst kleine statt grosse Aenderungen mache.
