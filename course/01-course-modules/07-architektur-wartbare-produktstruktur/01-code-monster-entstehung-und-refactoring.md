# Warum ein Code-Monster entstehen kann

Diese Notiz erklärt an einem echten Kursbeispiel, wie aus vielen kleinen, sinnvollen Änderungen eine zu grosse Datei entstehen kann.

## Was passiert ist

In der Onboarding-App gab es eine zentrale Angular-Komponente für die einzelnen Onboarding-Lektionen: `step-page`.

Diese Komponente hat nicht nur einen einzigen Screen angezeigt, sondern viele unterschiedliche Situationen:

- Voucher-Eingabe
- Frage, ob jemand schon einen GitHub-Account hat
- GitHub-Erklärung für neue Accounts
- Hinweise für bestehende Accounts
- Sicherheitswarnungen
- VS-Code-Installationsschritte
- Git-Installationsschritte
- Aufgaben-Checklisten
- hilfreiche Links
- Clone-Hinweise am Ende

Am Anfang ist so eine zentrale Komponente praktisch: Man findet alles an einem Ort, kann schnell etwas ergänzen und sieht sofort ein Ergebnis.

Mit jeder neuen Anforderung kamen aber weitere Sonderfaelle dazu. Ein Design-Fix hier, ein neuer Zustand dort, ein anderer Textblock, ein anderer Button, ein anderer Warnhinweis. Die Datei wurde dadurch nicht auf einmal schlecht. Sie wurde Lektion für Lektion zu gross.

## Warum das beim Vibe Coding besonders leicht passiert

Vibe Coding ist oft sehr inkrementell. Man sagt zum Beispiel:

- "Mach Lektion 3 etwas schoener."
- "Der Fortschrittsbereich soll weniger Platz brauchen."
- "Die Überschriften sollen kleiner werden."
- "Optimiere die Typografie."

Jede einzelne Aufgabe ist klein und sinnvoll. Der KI-Assistent sucht dann meist den schnellsten Ort, an dem die sichtbare Änderung gemacht werden kann. Wenn bereits eine grosse Datei alle Varianten enthält, wird genau diese Datei weiter bearbeitet.

Das ist nicht automatisch falsch. Es ist sogar oft der richtige erste Lektion, wenn man schnell Feedback braucht.

Das Problem entsteht, wenn niemand zwischendurch fragt:

- Hat diese Datei inzwischen zu viele Verantwortlichkeiten?
- Gibt es alte Styles, die nicht mehr genutzt werden?
- Wiederholen wir Muster, die eigentlich ein gemeinsames Token oder eine kleine Komponente sein sollten?
- Sollte ein Teil in eine eigene Komponente ausgelagert werden?

Ohne diesen Zwischenstopp waechst die Datei weiter. Genau so entsteht ein Code-Monster.

## Woran man ein Code-Monster erkennt

Typische Warnzeichen sind:

- Eine Datei enthält viele fachlich verschiedene Bereiche.
- Klassennamen beziehen sich auf einzelne Lektionen oder Sonderfaelle.
- Es gibt Kommentare wie "Lektion 3", "Lektion 7", "Git-Lektion", "Voucher-Gate" in derselben Datei.
- Neue Änderungen brauchen immer mehr Suche und Scrollen.
- Alte Styles bleiben liegen, obwohl das Template sie nicht mehr verwendet.
- Build-Tools warnen vor Groesse, Budget oder Komplexitaet.

Im Kursbeispiel war die Step-Page-SCSS zeitweise über 1100 Zeilen lang. Angular meldete danach ein Style-Budget-Warning. Das war ein gutes Signal: Nicht die App war kaputt, aber die Struktur wollte Aufmerksamkeit.

## Was daran lehrreich ist

Das Code-Monster ist kein Zeichen dafür, dass KI-gestuetzte Entwicklung nicht funktioniert. Es zeigt vielmehr eine wichtige Regel moderner Softwareentwicklung:

> Schnelle Iteration braucht regelmaessige Strukturpflege.

Erst wird etwas sichtbar gebaut. Danach wird sortiert:

- gemeinsame Designentscheidungen in Tokens verschieben
- tote Styles entfernen
- wiederholte UI-Muster vereinheitlichen
- grosse Komponenten in kleinere Komponenten zerlegen
- Verantwortlichkeiten klar benennen

## Was konkret optimiert wurde

Im Beispiel wurden zuerst Design- und Typografie-Probleme geloest. Danach wurde sichtbar, dass die zentrale SCSS-Datei zu gross war.

Dann wurden ungenutzte Alt-Styles entfernt, zum Beispiel für UI-Blöcke, die im Template gar nicht mehr vorkamen:

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

Eine gute Faustregel für den Kurs:

Nach mehreren kleinen UI-Änderungen an derselben Datei kurz stoppen und prüfen:

1. Welche Verantwortung hat diese Datei?
2. Welche Teile gehören eigentlich in eigene Komponenten?
3. Welche Werte gehören in Design-Tokens?
4. Welche Styles werden nicht mehr genutzt?
5. Was würde einer neuen Person helfen, diese Stelle schnell zu verstehen?

## Merksatz

Ein Code-Monster entsteht selten durch eine einzige schlechte Entscheidung. Es entsteht, wenn viele kleine richtige Entscheidungen zu lange am selben Ort bleiben.

