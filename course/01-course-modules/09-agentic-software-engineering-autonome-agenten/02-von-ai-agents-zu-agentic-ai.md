# Lektion 02: Von AI Agents zu Agentic AI

## Ziel

Du verstehst den Entwicklungspfad von einzelnen AI Agents zu agentischen Mehragenten-Systemen. Du kannst Architektur, typische Einsatzfelder, Grenzen und aktuelle Lösungsansätze verständlich erklären.

## Geschätzte Lesezeit

Ca. 15 Minuten.

## Kapitel 1: Warum dieses Thema jetzt wichtig ist

Mit dem Aufkommen großer Sprachmodelle wurden zunächst vor allem generative Systeme sichtbar: ein Prompt rein, ein Ergebnis raus. In der nächsten Stufe kamen Tool-Nutzung, Funktionsaufrufe und Speicher dazu. Dadurch entstanden Systeme, die nicht nur antworten, sondern über mehrere Schritte handeln können.

So verschiebt sich der Fokus:

- von reiner Inhaltserzeugung
- hin zu zielorientierter, mehrstufiger Aufgabenbearbeitung

## Kapitel 2: Was ein AI Agent ist

Ein AI Agent ist eine eigenständige Softwareeinheit, die in einem klaren Rahmen ein Ziel verfolgt.

Typische Eigenschaften:

1. Autonomie: Nach dem Start arbeitet der Agent mit wenig laufender Steuerung.
2. Aufgabenspezialisierung: Der Agent ist auf ein enges Problem optimiert.
3. Reaktivität: Der Agent reagiert auf Eingaben aus Nutzeroberflächen, APIs oder Systemereignissen.

Typische Einsatzfelder:

- Chat- und Support-Fälle
- interne Suche in Dokumenten
- E-Mail-Sortierung und Priorisierung

## Kapitel 3: Was Agentic AI zusätzlich kann

Agentic AI verbindet mehrere Agents zu einem koordinierten System.

Zentrale Merkmale:

- automatische Zerlegung eines Ziels in Teilaufgaben
- laufende Kommunikation zwischen Agents
- geteilte oder persistente Speicherzustände
- Koordination über Orchestrierung (z. B. Lead-Agent oder Steuerlogik)

Beispielhafte Vorstellung:

Ein Agent kümmert sich um Recherche, ein zweiter bewertet Optionen, ein dritter plant nächste Schritte. Eine koordinierende Instanz sorgt dafür, dass alles zum Gesamtziel passt.

## Kapitel 4: Architekturvergleich auf einen Blick

| Merkmal | AI Agent | Agentic AI |
| --- | --- | --- |
| Aufbau | ein Agent, klar umrissene Aufgabe | mehrere Agents mit Rollen |
| Kommunikation | keine oder wenig Team-Koordination | aktive Abstimmung zwischen Agents |
| Speicher | kurzlebig oder minimal | persistente Historie und Strategiewissen |
| Logik | eher linear | iterativ mit Re-Planung |
| Skalierung | begrenzt auf Einzelaufgabe | geeignet für mehrstufige Workflows |
| Beispiele | FAQ-Bot, Workflow-Helfer | Multi-Agent-Recherche, koordinierte Prozessautomation |

## Kapitel 5: Technische Entwicklungsschritte

Der Übergang zu Agentic AI basiert auf mehreren Bausteinen:

1. Von Einzelsystem zu Teamstruktur
: Aufgaben werden auf spezialisierte Agents verteilt.

2. Erweiterte Denk- und Planungslogik
: Systeme zerlegen Ziele in Teilschritte, prüfen Zwischenergebnisse und passen Pläne an.

3. Persistente Speicherarchitektur
: Ergebnisse und Erfahrungen bleiben über längere Abläufe hinweg verfügbar.

## Kapitel 6: Typische Herausforderungen

### Grenzen bei einzelnen Agents

- unzuverlässige Langzeitplanung
- Halluzinationen und Prompt-Empfindlichkeit
- schwache Fehlererholung bei komplexeren Abläufen

### Zusätzliche Risiken bei Agentic AI

- Fehlerketten über mehrere Agents
- Abstimmungsprobleme in der Orchestrierung
- höhere Komplexität bei Nachvollziehbarkeit und Governance

## Kapitel 7: Welche Lösungen heute helfen

### RAG (Retrieval-Augmented Generation)

- reduziert Halluzinationen durch externe Wissensquellen
- schafft bei Agentic AI eine gemeinsame Wissensbasis für mehrere Agents

### Tool- und Function-Calling

- verbindet Modelle mit echten Systemfunktionen
- ermöglicht strukturierte Arbeitsschritte statt reiner Textausgabe

### Speicherarchitekturen

- episodischer Speicher: Verlauf von Aktionen und Feedback
- semantischer Speicher: stabiles Fachwissen
- Vektor-Speicher: ähnliche Inhalte schnell wiederfinden

## Kapitel 8: Ausblick

Die Entwicklung zeigt in Richtung hybrider Systeme:

- Einfache, spezialisierte Agents bleiben wichtig.
- Für komplexe Prozesse gewinnen koordinierte Agent-Teams an Bedeutung.
- Gute Systeme kombinieren Generierung, Planung, Ausführung und Kontrolle.

## Kapitel 9: Praxisbezug für den Kurs

Im Kurs nutzt du dieses Wissen, um Workflows bewusst zu entwerfen:

1. Was kann ein einzelner Agent zuverlässig erledigen?
2. Wann braucht es mehrere Rollen?
3. Wo sind Kontrollpunkte und Abbruchkriterien nötig?

Damit wird aus "KI ausprobieren" ein planbares Engineering-Vorgehen.

## Quiz: Vertiefung zu Architektur und Betrieb

### Frage 1

Frage: Welche Eigenschaft ist für Agentic-AI-Architekturen zentral?
Hinweis: Wähle die treffendste Aussage.
Mehrfachauswahl: nein

- [ ] Ein einzelner Agent erledigt alle Aufgaben ohne Rollentrennung.
- [x] Mehrere spezialisierte Agents arbeiten koordiniert über eine Orchestrierungslogik zusammen.
- [ ] Agentic AI verzichtet vollständig auf externe Tools und APIs.
- [ ] Agentic AI ist nur dann agentisch, wenn ein Mensch jeden Schritt freigibt.

Erfolg: Richtig. Koordination zwischen spezialisierten Rollen ist ein Kernelement.
Fehler: Achte auf den Architekturpunkt: Teamstruktur und Orchestrierung sind entscheidend.

### Frage 2

Frage: Welche Aufgabe übernimmt Orchestrierung in einem Multi-Agent-System am ehesten?
Hinweis: Wähle die treffendste Aussage.
Mehrfachauswahl: nein

- [ ] Sie ersetzt die fachliche Modellierung und macht Anforderungen überflüssig.
- [ ] Sie erhöht nur die Textqualität einzelner Antworten.
- [x] Sie steuert Aufgabenverteilung, Reihenfolge, Übergaben und Re-Planung zwischen Agents.
- [ ] Sie ist nur bei Hardware-Robotik notwendig.

Erfolg: Genau. Orchestrierung steuert den Ablauf und die Zusammenarbeit.
Fehler: Orchestrierung ist Ablaufsteuerung, nicht nur Qualitätsfilter für Einzelausgaben.

### Frage 3

Frage: Welcher Nutzen von persistenter Memory ist in Agentic AI am wichtigsten?
Hinweis: Wähle die treffendste Aussage.
Mehrfachauswahl: nein

- [ ] Sie dient nur dazu, Prompts länger zu machen.
- [ ] Sie verhindert grundsätzlich alle Halluzinationen.
- [x] Sie ermöglicht, dass Agents frühere Schritte, Ergebnisse und Feedback über längere Abläufe hinweg berücksichtigen.
- [ ] Sie ersetzt vollständig Monitoring und Governance.

Erfolg: Richtig. Persistenter Speicher stabilisiert mehrstufige Planung und Nachvollziehbarkeit.
Fehler: Memory hilft stark, ersetzt aber weder Qualitätskontrolle noch Governance.

## Fallback

- Begriffe sind noch unscharf: Prüfe zuerst, ob der Use Case ein Einzelschritt oder ein mehrstufiger Ablauf ist.
- Lösung wirkt zu komplex: Starte mit einem Agenten und erweitere erst bei klarer Notwendigkeit.
- Risiko unklar: Definiere Messpunkte, Freigaben und klare Stop-Regeln.

## Erfolgskriterium

Du kannst für einen realen Anwendungsfall begründet entscheiden, ob ein einzelner AI Agent genügt oder ob Agentic AI mit mehreren Rollen sinnvoll ist.

## Was ist zu tun

1. Wähle einen eigenen Arbeitsfall aus (z. B. Recherche, Reporting oder Ticket-Vorbereitung).
2. Skizziere eine Ein-Agent-Variante und eine Mehragenten-Variante.
3. Notiere für beide Varianten je zwei Vorteile und zwei Risiken.
4. Entscheide dich begründet für eine Variante.

## Hilfreiche Links

- [Lektion 01: Generative KI vs. agentische KI](./01-generative-vs-agentic-ai.md)
- [Prompt-Dateien Grundlagen](../../03-course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md)
