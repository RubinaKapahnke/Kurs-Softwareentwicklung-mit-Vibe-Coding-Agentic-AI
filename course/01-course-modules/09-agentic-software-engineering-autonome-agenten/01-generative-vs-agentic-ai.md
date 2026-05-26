# Lektion 01: Generative KI vs. agentische KI

## Ziel

Du kannst generative KI und agentische KI klar unterscheiden und erkennst, wann welcher Ansatz in der Praxis sinnvoll ist.

## Kapitel 1: Warum die Unterscheidung wichtig ist

Im Alltag werden beide Begriffe oft vermischt. Für saubere Entscheidungen im Projekt ist die Trennung aber zentral:

- Generative KI erzeugt Inhalte auf Anfrage.
- Agentische KI verfolgt ein Ziel über mehrere Lektionen.

Wenn du den Unterschied kennst, planst du Workflows realistischer, sicherer und effizienter.

## Kapitel 2: Generative KI einfach erklärt

Generative KI ist in der Regel reaktiv.

Das bedeutet:

1. Du gibst eine Eingabe (Prompt).
2. Das Modell erzeugt ein Ergebnis.
3. Danach wartet es wieder auf deinen nächsten Impuls.

Typische Ergebnisse sind:

- Text
- Code
- Bilder
- Audio

Wichtig: Die KI "handelt" nicht selbstständig weiter. Ohne neue Eingabe kommt kein nächster Arbeitsschritt.

## Kapitel 3: Agentische KI einfach erklärt

Agentische KI ist proaktiv.

Sie startet oft ebenfalls mit einer Eingabe, arbeitet dann aber zielorientiert in mehreren Schleifen:

1. Situation erfassen (Kontext lesen, Status prüfen)
2. nächste Lektion planen
3. Lektion ausführen
4. Ergebnis bewerten
5. Plan anpassen und weitermachen

Dieser Zyklus läuft mit wenig menschlichem Eingriff weiter, bis ein Ziel erreicht ist oder ein Abbruchkriterium greift.

## Kapitel 4: Gemeinsame technische Basis

Beide Ansätze nutzen häufig dieselbe Grundlage: Sprachmodelle (LLMs).

- Bei generativer KI dienen sie vor allem zur Inhaltserzeugung.
- Bei agentischer KI dienen sie zusätzlich als Planungs- und Entscheidungsbaustein.

Für Bild- oder Audioerzeugung kommen je nach Aufgabe auch andere Modelltypen zum Einsatz.

## Kapitel 5: Praxisvergleich

### Generative KI (kreative Unterstützung)

Beispiel: Du schreibst ein Skript für ein Video.

Die KI hilft bei:

- Entwurf von Textbausteinen
- Formulierungsvarianten
- Ideen für Titel oder Thumbnails

Du entscheidest jeweils, was übernommen, verworfen oder angepasst wird.

### Agentische KI (mehrstufige Prozessarbeit)

Beispiel: Ein Einkaufsagent mit klarem Ziel.

Der Agent kann:

- Angebote auf mehreren Plattformen prüfen
- Preisänderungen beobachten
- den Kaufprozess vorbereiten
- bei Unklarheiten gezielt Rückfragen stellen

Die Arbeit besteht aus mehreren verbundenen Lektionen statt aus einem einzelnen Generierungsergebnis.

## Kapitel 6: Denklogik in agentischen Systemen

Agenten zerlegen komplexe Aufgaben in Teilaufgaben.

Beispiel internes Planen:

1. Anforderungen sammeln
2. Optionen recherchieren
3. Optionen gegen Kriterien prüfen
4. beste Option auswählen
5. nächste Aktion ausführen

Diese Lektionweise Denklogik ist ein Kern, warum agentische Systeme komplexere Abläufe stabiler bearbeiten können.

## Kapitel 7: Wann welcher Ansatz passt

Nutze eher generative KI, wenn:

- du Inhalte erzeugen oder umformulieren willst
- schnelle Varianten hilfreich sind
- der Mensch die Auswahl und Steuerung übernimmt

Nutze eher agentische KI, wenn:

- ein Ziel über mehrere Lektionen erreicht werden soll
- Zustände geprüft und Entscheidungen nachgeführt werden müssen
- Tools und Prozesse koordiniert werden

## Quiz: Praxisfragen zu generativer KI und agentischer KI

### Frage 1

Frage: Welches Merkmal unterscheidet agentische KI zentral von generativer KI?
Hinweis: Wähle die treffendste Aussage.
Mehrfachauswahl: nein

- [x] Agentische KI führt proaktiv zielgerichtete Aktionen mit minimalem menschlichem Eingriff aus.
- [ ] Agentische KI reagiert nur auf Prompts ohne weitere Verarbeitung.
- [ ] Agentische KI erzeugt grundsätzlich qualitativ bessere Texte als generative KI.
- [ ] Agentische KI ist auf die Generierung von Text und Bildern begrenzt.

Erfolg: Richtig. Agentische KI arbeitet zielorientiert über mehrere Lektionen hinweg.
Fehler: Achte darauf: Der Kern ist proaktives, mehrstufiges Handeln in Richtung Ziel.

### Frage 2

Frage: Welches Beispiel zeigt am besten die typische Nutzung von generativer KI?
Hinweis: Wähle die treffendste Aussage.
Mehrfachauswahl: nein

- [x] Unterstützung einer Person beim Entwurf kreativer Inhalte wie Fanfiction oder YouTube-Skripte.
- [ ] Automatische Preisanpassung eines Produkts über mehrere E-Commerce-Plattformen.
- [ ] Steuerung einer mehrstufigen Konferenzplanung mit wenig menschlichem Eingriff.
- [ ] Automatisches Überwachen von Lieferstatus und Versenden von Updates.

Erfolg: Genau. Generative KI unterstützt typischerweise bei der Erzeugung und Überarbeitung von Inhalten.
Fehler: Denk an den Fokus: Generative KI erzeugt Möglichkeiten, der Mensch kuratiert und steuert.

### Frage 3

Frage: Was bedeutet Chain-of-Thought-Reasoning im Kontext von agentischer KI?
Hinweis: Wähle die treffendste Aussage.
Mehrfachauswahl: nein

- [x] Ein Vorgehen, bei dem ein Agent komplexe Aufgaben über eine interne Lektion-für-Lektion-Logik in Teilaufgaben zerlegt.
- [ ] Eine Methode, um LLMs ausschließlich zu poetischen Antworten zu bewegen.
- [ ] Eine reine Freigabeschleife zwischen Mensch und KI vor Veröffentlichung.
- [ ] Eine Debugging-Technik, die ausschließlich logische Fehler in LLMs behebt.

Erfolg: Richtig. Chain-of-Thought unterstützt strukturierte Zwischenlogik für Planung und Entscheidung.
Fehler: Wichtig ist die Lektionweise Denk- und Zerlegungslogik, nicht ein spezielles Textformat.

## Fallback

- Begriffe verschwimmen: Prüfe, ob nur "Inhalt erzeugen" oder "mehrere Lektionen bis Ziel" gemeint ist.
- Use Case unklar: Liste erst Ziel, Zwischenschritte und nötige Entscheidungen.
- Zu viel Autonomie geplant: Definiere klare Kontrollpunkte und Abbruchregeln.

## Erfolgskriterium

Du kannst in eigenen Worten erklären, wie sich generative und agentische KI unterscheiden, und du kannst für einen Praxisfall den passenden Ansatz begründet auswählen.

## Was ist zu tun

1. Nenne einen eigenen Arbeitsfall aus deinem Kontext.
2. Entscheide: generativ, agentisch oder kombiniert.
3. Begründe deine Entscheidung in 3 bis 5 Sätzen.
4. Notiere mindestens einen Kontrollpunkt, falls du agentisch arbeitest.

## Hilfreiche Links

- [Kursmodul 09: Modulziele](./00-modulziele.md)
- [Prompt-Dateien Grundlagen](../../03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)


