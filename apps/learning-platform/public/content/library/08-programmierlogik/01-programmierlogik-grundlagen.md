# Programmierlogik: Grundlagen

Programmierlogik bedeutet: Du verstehst, was der Code tut, warum er es tut und an welcher Stelle etwas schiefgehen kann.

Gerade beim Vibe Coding ist das wichtig. Die KI kann schnell Code erzeugen, aber du musst entscheiden, ob der Code zu deiner Aufgabe passt.

---

## Was ist eine Variable?

Eine Variable ist ein benannter Speicherplatz für einen Wert.

Beispiel in Worten:
- `name` enthält einen Text
- `punkte` enthält eine Zahl
- `istAktiv` enthält wahr/falsch

Wenn du Code liest, frage immer zuerst:
1. Welche Variablen gibt es?
2. Welche Werte stehen aktuell drin?
3. Wo werden die Werte geändert?

---

## Was ist eine Funktion?

Eine Funktion ist ein wiederverwendbarer Arbeitsschritt.

Sie kann:
- Eingaben bekommen (Parameter)
- etwas verarbeiten
- ein Ergebnis zurueckgeben

Wenn du eine Funktion anschaust, reichen oft drei Fragen:
1. Was geht hinein?
2. Was passiert im Inneren?
3. Was kommt heraus?

---

## Bedingungen: Was passiert bei `if`?

Eine Bedingung prüft, ob etwas stimmt.

- Wenn die Bedingung wahr ist, wird Block A ausgefuehrt.
- Wenn sie falsch ist, wird Block B oder nichts ausgefuehrt.

Viele Fehler entstehen hier, weil:
- die falsche Variable geprüft wird
- `null` oder leere Werte nicht beachtet werden
- die Bedingung logisch vertauscht ist

---

## Datenfluss statt Zeilenzaehlerei

Versuche nicht, sofort jede Zeile perfekt zu verstehen. Suche stattdessen den Datenfluss:

1. Woher kommt der Wert? (Input, Datei, Service)
2. Wo wird er verarbeitet? (Funktion, Bedingung)
3. Wo wird er angezeigt oder gespeichert?

Wenn du diesen Weg kennst, wird auch langer Code ueberschaubar.

---

## Typische Logikfehler bei KI-Code

- Eine Funktion hat einen guten Namen, tut aber etwas anderes.
- Ein Fall fehlt (z. B. leere Liste).
- Werte werden an der falschen Stelle umgewandelt.
- Anzeige und Berechnung verwenden unterschiedliche Quellen.

Wichtig: Das ist normal. Nicht alles neu schreiben, sondern den Fehlerpfad eingrenzen.

---

## Mini-Check beim Lesen

- [ ] Ich kenne Eingabe und Ausgabe der Funktion.
- [ ] Ich sehe mindestens eine Bedingung und kann sie erklaeren.
- [ ] Ich weiss, woher die wichtigsten Werte kommen.
- [ ] Ich kann eine Stelle markieren, die ich als erstes testen wuerde.
