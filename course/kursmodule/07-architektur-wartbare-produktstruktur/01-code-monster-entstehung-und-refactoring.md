# Warum ein Code-Monster entstehen kann

Diese Notiz erklaert an einem echten Kursbeispiel, wie aus vielen kleinen, sinnvollen Aenderungen eine zu grosse Datei entstehen kann.

## Was passiert ist

In der Onboarding-App gab es eine zentrale Angular-Komponente fuer die einzelnen Onboarding-Schritte: `step-page`.

Diese Komponente hat nicht nur einen einzigen Screen angezeigt, sondern viele unterschiedliche Situationen:

- Voucher-Eingabe
- Frage, ob jemand schon einen GitHub-Account hat
- GitHub-Erklaerung fuer neue Accounts
- Hinweise fuer bestehende Accounts
- Sicherheitswarnungen
- VS-Code-Installationsschritte
- Git-Installationsschritte
- Aufgaben-Checklisten
- hilfreiche Links
- Clone-Hinweise am Ende

Am Anfang ist so eine zentrale Komponente praktisch: Man findet alles an einem Ort, kann schnell etwas ergaenzen und sieht sofort ein Ergebnis.

Mit jeder neuen Anforderung kamen aber weitere Sonderfaelle dazu. Ein Design-Fix hier, ein neuer Zustand dort, ein anderer Textblock, ein anderer Button, ein anderer Warnhinweis. Die Datei wurde dadurch nicht auf einmal schlecht. Sie wurde Schritt fuer Schritt zu gross.

## Warum das beim Vibe Coding besonders leicht passiert

Vibe Coding ist oft sehr inkrementell. Man sagt zum Beispiel:

- "Mach Schritt 3 etwas schoener."
- "Der Fortschrittsbereich soll weniger Platz brauchen."
- "Die Ueberschriften sollen kleiner werden."
- "Optimiere die Typografie."

Jede einzelne Aufgabe ist klein und sinnvoll. Der KI-Assistent sucht dann meist den schnellsten Ort, an dem die sichtbare Aenderung gemacht werden kann. Wenn bereits eine grosse Datei alle Varianten enthaelt, wird genau diese Datei weiter bearbeitet.

Das ist nicht automatisch falsch. Es ist sogar oft der richtige erste Schritt, wenn man schnell Feedback braucht.

Das Problem entsteht, wenn niemand zwischendurch fragt:

- Hat diese Datei inzwischen zu viele Verantwortlichkeiten?
- Gibt es alte Styles, die nicht mehr genutzt werden?
- Wiederholen wir Muster, die eigentlich ein gemeinsames Token oder eine kleine Komponente sein sollten?
- Sollte ein Teil in eine eigene Komponente ausgelagert werden?

Ohne diesen Zwischenstopp waechst die Datei weiter. Genau so entsteht ein Code-Monster.

## Woran man ein Code-Monster erkennt

Typische Warnzeichen sind:

- Eine Datei enthaelt viele fachlich verschiedene Bereiche.
- Klassennamen beziehen sich auf einzelne Schritte oder Sonderfaelle.
- Es gibt Kommentare wie "Schritt 3", "Schritt 7", "Git-Schritt", "Voucher-Gate" in derselben Datei.
- Neue Aenderungen brauchen immer mehr Suche und Scrollen.
- Alte Styles bleiben liegen, obwohl das Template sie nicht mehr verwendet.
- Build-Tools warnen vor Groesse, Budget oder Komplexitaet.

Im Kursbeispiel war die Step-Page-SCSS zeitweise ueber 1100 Zeilen lang. Angular meldete danach ein Style-Budget-Warning. Das war ein gutes Signal: Nicht die App war kaputt, aber die Struktur wollte Aufmerksamkeit.

## Was daran lehrreich ist

Das Code-Monster ist kein Zeichen dafuer, dass KI-gestuetzte Entwicklung nicht funktioniert. Es zeigt vielmehr eine wichtige Regel moderner Softwareentwicklung:

> Schnelle Iteration braucht regelmaessige Strukturpflege.

Erst wird etwas sichtbar gebaut. Danach wird sortiert:

- gemeinsame Designentscheidungen in Tokens verschieben
- tote Styles entfernen
- wiederholte UI-Muster vereinheitlichen
- grosse Komponenten in kleinere Komponenten zerlegen
- Verantwortlichkeiten klar benennen

## Was konkret optimiert wurde

Im Beispiel wurden zuerst Design- und Typografie-Probleme geloest. Danach wurde sichtbar, dass die zentrale SCSS-Datei zu gross war.

Dann wurden ungenutzte Alt-Styles entfernt, zum Beispiel fuer UI-Bloecke, die im Template gar nicht mehr vorkamen:

- alte GitHub-Erklaerbox
- alter Git-Erklaer-Toggle
- alter Git-Erklaerblock
- alte Erfahrungsabfrage
- nicht mehr verwendete Hilfsklassen

Dadurch wurde die Datei kleiner und das Style-Budget-Warning verschwand.

## Die eigentliche Architektur-Lektion

Beim Arbeiten mit KI sollte man nicht nur fragen:

> "Kannst du das bauen?"

Sondern regelmaessig auch:

> "Ist die Struktur noch wartbar?"

Eine gute Faustregel fuer den Kurs:

Nach mehreren kleinen UI-Aenderungen an derselben Datei kurz stoppen und pruefen:

1. Welche Verantwortung hat diese Datei?
2. Welche Teile gehoeren eigentlich in eigene Komponenten?
3. Welche Werte gehoeren in Design-Tokens?
4. Welche Styles werden nicht mehr genutzt?
5. Was wuerde einer neuen Person helfen, diese Stelle schnell zu verstehen?

## Merksatz

Ein Code-Monster entsteht selten durch eine einzige schlechte Entscheidung. Es entsteht, wenn viele kleine richtige Entscheidungen zu lange am selben Ort bleiben.
