# Lektion 01: Begriffsdefinitionen zu generativer und agentischer KI

## Ziel

Du kannst generative KI und agentische KI klar unterscheiden und erkennst, wann welcher Ansatz in der Praxis sinnvoll ist.

## Warum die Unterscheidung wichtig ist

Die Unterscheidung ist nicht nur Theorie, sondern eine Steuerungsfrage für dein Projekt:

Wichtig vorab: Agentisch und generativ sind kein Entweder-oder. Ein agentisches System nutzt oft generative Modelle als Kernbaustein, ergänzt aber Steuerlogik für mehrstufiges Arbeiten.

- Wenn du einen generativen Fall fälschlich als agentisch behandelst, baust du unnötige Komplexität.
- Wenn du einen agentischen Fall fälschlich nur generativ angehst, fehlen dir Kontrolle über Folgeschritte und Verlässlichkeit im Ablauf.

Kurz gesagt:

- Generativ passt, wenn ein einzelnes gutes Ergebnis reicht.
- Agentisch passt, wenn ein Ziel über mehrere Schritte mit Prüfpunkten erreicht werden muss.

Wenn du das sauber trennst, sparst du Zeit, reduzierst Fehlentscheidungen und kannst begründen, warum dein gewählter Ansatz zur Aufgabe passt.

## Generative KI einfach erklärt

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

## Large Language Models (LLMs) im direkten Einsatz

Hier geht es um den direkten Einsatz von Sprachmodellen wie GPT, Claude oder Gemini.

Das Grundmuster ist immer gleich:

1. Du gibst einen Prompt (Input).
2. Das Modell erzeugt eine Antwort (Output).

Beispiel:

- Input: "Schreibe eine E-Mail, um ein Meeting für heute Nachmittag einzuladen."
- Output: Ein E-Mail-Entwurf.

Das funktioniert gut für Text, Zusammenfassungen, Ideen oder Codevorschläge.

### Drei zentrale Grenzen im direkten LLM-Einsatz

1. Kein direkter Tool-Zugriff ohne Integration
: Ein LLM kann nicht einfach selbst in deinen Kalender, in Outlook oder in Notion schreiben. Dafür braucht es explizite Anbindungen.

2. Begrenzte Reproduzierbarkeit
: Antworten können bei ähnlichen Prompts unterschiedlich ausfallen. Gute Ergebnisse sind möglich, aber nicht automatisch stabil.

3. Passive Arbeitsweise
: Das Modell wartet auf deinen nächsten Prompt und startet keine echten Arbeitsabläufe von allein.

Merksatz: LLMs sind sehr gut für Generierung und Analyse, aber allein noch kein verlässlicher Prozess.

## Warum du in VS Code und mit Repositories arbeitest

Damit ein LLM brauchbare Ergebnisse liefert, braucht es Kontext: Projektziel, bestehende Dateien, Architektur, Regeln und den aktuellen Stand.

Deshalb arbeitest du in diesem Modul mit VS Code und Repositories:

- In VS Code siehst du Struktur, Dateien, Diffs und Historie an einem Ort.
- Im Repository liegt nachvollziehbar, was das Projekt ist und wie es sich entwickelt.
- Mit Datei-Kontext statt isolierten Einzelprompts kann das LLM präziser und konsistenter unterstützen.

Praktisch heißt das: Nicht nur "Schreibe Code", sondern "Ändere diese Datei im bestehenden Projektkontext und begründe die Änderung".

## KI-Workflows mit Tools und Steuerlogik

Hier verknüpfst du ein LLM mit Tools und definierter Steuerlogik.

Beispiel: E-Mails lesen, Termine im Kalender eintragen, Ergebnisse in ein Dokument schreiben.

Wichtig dabei:

- Ein Workflow kann nur das, was als Schritte und Integrationen explizit gebaut wurde.
- Ohne angebundenes Modul gibt es keine zusätzliche Fähigkeit.
- Die Qualität hängt stark von klarer Steuerlogik und gutem Prompting ab.

Ein KI-Workflow ist damit planbarer als ein reiner Chat, aber noch kein autonomer Agent.

## Abgrenzung zu Agenten

Auch ein großer Workflow mit vielen Modulen bleibt ein Workflow, solange Menschen die Logik manuell bauen und laufend nachjustieren müssen.

Ein agentischer Ansatz beginnt dort, wo das System innerhalb definierter Grenzen selbstständig plant, prüft, nachsteuert und nur an Kontrollpunkten menschliche Freigaben braucht.

## Wichtige Begriffe im Überblick

### Was ist ein Agent?

Ein Agent ist eine Softwareeinheit, die ein Ziel verfolgt und dafür aktiv Schritte auswählt, statt nur einmalig zu antworten.

Kurzform:

- Chat-Antwort: reaktiv auf eine einzelne Eingabe.
- Agent: zielorientiert über mehrere zusammenhängende Schritte.

### Was ist ein Workflow?

Ein Workflow ist die festgelegte Abfolge von Schritten, Entscheidungen und Prüfpunkten.

Beispiel:

1. Frage erfassen
2. passende Quelle prüfen
3. Antwortentwurf erstellen
4. Antwort gegen Kriterien prüfen
5. Antwort freigeben oder Rückfrage auslösen

### Warum ist reiner Chat kein Agent und irgendwie doch?

Reiner Chat ist normalerweise kein Agent, weil ohne zusätzliche Steuerlogik kein eigener mehrstufiger Ablauf gestartet wird.

Er ist "irgendwie doch" Teil eines Agenten, weil derselbe Modellkern auch in Agentensystemen genutzt wird.

Merksatz:

- Chat = Interaktionsform.
- Agent = Systemverhalten mit Ziel, Ablaufsteuerung und Kontrollpunkten.

## Stochastisch vs. deterministisch

### Deterministisch

Deterministisch bedeutet: gleiche Eingabe liefert immer denselben Ablauf und dasselbe Ergebnis.

Typisch für:

- klassische Programmlogik,
- feste Regeln,
- reproduzierbare Prüfpfade.

### Stochastisch

Stochastisch bedeutet: gleiche oder ähnliche Eingaben können leicht unterschiedliche Ergebnisse liefern, weil Wahrscheinlichkeiten genutzt werden.

Typisch für:

- Sprachmodelle,
- generative Ausgaben,
- kreative Variantenbildung.

### Was hat das mit KI zu tun?

KI-Modelle erzeugen oft stochastische Antworten, während der umgebende Workflow möglichst deterministisch gebaut werden sollte.

Praxisregel:

- Modellausgabe darf variieren.
- Guardrails, Freigaben und Prüfpfade sollten stabil und nachvollziehbar sein.

## Agentische KI einfach erklärt

Agentische KI ist proaktiv.

Sie startet oft ebenfalls mit einer Eingabe, arbeitet dann aber zielorientiert in mehreren Schleifen:

1. Situation erfassen (Kontext lesen, Status prüfen)
2. nächste Lektion planen
3. Lektion ausführen
4. Ergebnis bewerten
5. Plan anpassen und weitermachen

Dieser Zyklus läuft mit wenig menschlichem Eingriff weiter, bis ein Ziel erreicht ist oder ein Abbruchkriterium greift.

## Gemeinsame technische Basis

Beide Ansätze nutzen häufig dieselbe Grundlage: Sprachmodelle (LLMs).

- Bei generativer KI dienen sie vor allem zur Inhaltserzeugung.
- Bei agentischer KI dienen sie zusätzlich als Planungs- und Entscheidungsbaustein.

Das heißt: Agentisch ist in vielen Fällen generativ plus Ablaufsteuerung, nicht der Gegenpol zu generativ.

Für Bild- oder Audioerzeugung kommen je nach Aufgabe auch andere Modelltypen zum Einsatz.

## Praxisvergleich

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

## Denklogik in agentischen Systemen

Agenten zerlegen komplexe Aufgaben in Teilaufgaben.

Beispiel internes Planen:

1. Anforderungen sammeln
2. Optionen recherchieren
3. Optionen gegen Kriterien prüfen
4. beste Option auswählen
5. nächste Aktion ausführen

Diese lektionweise Denklogik ist ein Kern, warum agentische Systeme komplexere Abläufe stabiler bearbeiten können.

## Wann welcher Ansatz passt

Nutze eher generative KI, wenn:

- du Inhalte erzeugen oder umformulieren willst
- schnelle Varianten hilfreich sind
- der Mensch die Auswahl und Steuerung übernimmt

Nutze eher agentische KI, wenn:

- ein Ziel über mehrere Lektionen erreicht werden soll
- Zustände geprüft und Entscheidungen nachgeführt werden müssen
- Tools und Prozesse koordiniert werden

## Typische Anwendungsgebiete

### Generative KI passt oft bei

- Textentwürfen (Mails, Konzepte, Zusammenfassungen)
- Ideengenerierung und Variantenvergleich
- Code-Vorschlägen für einzelne, klar umrissene Aufgaben

### Agentische KI passt oft bei

- mehrstufiger Recherche mit Qualitätsprüfung
- wiederkehrenden Support- und Ticketabläufen
- Aufgabenketten mit Freigaben, Rückfragen und klaren Stop-Regeln

## Praxisstart: Deinen ersten Agenten im Übungsrepo anlegen

Ziel: Du legst einen einfachen Agenten für Rückfragen zu agentischen Themen in deinem Übungsrepo an.

## Vor dem Start (Checkliste)

- [ ] Du bist im richtigen Übungsrepo.
- [ ] Du hast den aktuellen Zustand geprüft (`git status` und `git branch`).
- [ ] Du kennst den Zielordner `.github/agents/`.

Hinweis zu verstecktem Ordner:

Wenn `.github/` nicht sichtbar ist: `Strg+P` drücken und `.github/agents/learners-agenten-rueckfragen.agent.md` eingeben.

## Schritt 1: Agent-Datei anlegen

Lege diese Datei an:

- `.github/agents/learners-agenten-rueckfragen.agent.md`

## Schritt 2: Minimalinhalt einfügen

```markdown
---
name: learners-agenten-rueckfragen
description: Beantwortet Rückfragen zu Agenten, Workflows, Guardrails und Begriffsdefinitionen im Übungsrepo.
model: gpt-4.1
---

# Rolle

Du hilfst Lernenden bei Rückfragen zu agentischen Grundlagen im Übungsrepo.

# Fokus

- Begriffe kurz und klar erklären.
- Zwischen generativ, Workflow und agentisch unterscheiden.
- Bei Unsicherheit zuerst Rückfragen stellen, dann präzise antworten.

# Arbeitsweise

1. Frage kurz zusammenfassen.
2. Relevante Dateien im Repo nennen.
3. Konkrete nächste Schritte vorschlagen.
4. Antwort knapp halten, Fachbegriff direkt erklären.

# Grenzen

- Keine Änderungen ohne explizite Aufforderung.
- Keine Vermutungen als Fakten darstellen.
- Bei fehlendem Kontext aktiv nachfragen.
```

## Schritt 3: Kurz testen

Teste den Agenten mit zwei Fragen, zum Beispiel:

1. "Was ist der Unterschied zwischen Workflow und Agent?"
2. "Warum ist ein Chat allein noch kein Agent?"

## Lernerfolg-Check

- [ ] Ich habe die Agent-Datei im Übungsrepo korrekt angelegt.
- [ ] Ich habe den Agenten mit mindestens zwei Rückfragen getestet.
- [ ] Ich kann erklären, was am Agentenverhalten konfiguriert wurde.

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
Fehler: Wichtig ist die lektionweise Denk- und Zerlegungslogik, nicht ein spezielles Textformat.

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

- [Kursmodul 03: Modulziele](./00-modulziele.md)
- [Prompt-Dateien Grundlagen](../../03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)
