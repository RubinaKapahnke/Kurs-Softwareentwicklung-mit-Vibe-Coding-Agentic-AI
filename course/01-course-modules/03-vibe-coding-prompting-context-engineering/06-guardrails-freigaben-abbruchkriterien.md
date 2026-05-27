# Lektion 06: Guardrails, Freigaben und Abbruchkriterien

## Ziel

Du definierst klare Sicherheits- und Qualitätsgrenzen für Agentenläufe, damit Änderungen kontrollierbar bleiben.

## Kurzstart

Du liest ein minimales Regelbeispiel und setzt danach direkt dein eigenes Regelset für das Projekt auf.

## Begriffe kurz erklärt

- Guardrails: feste Leitplanken, die Aktionen begrenzen.
- Freigaben: Punkte, an denen ein Mensch aktiv entscheidet.
- Abbruchkriterien: klare Stop-Regeln bei Risiko oder Unsicherheit.

## Typische Guardrails im Repo

- nur definierte Ordner dürfen geändert werden,
- keine Löschaktionen ohne Freigabe,
- keine größeren Strukturänderungen ohne Review.

## Freigabepunkte

Lege Freigaben mindestens für diese Situationen fest:

1. Änderungen an zentralen Projektdateien,
2. neue Dateien mit Auswirkungen auf zentrale Abläufe,
3. größere Umstrukturierungen.

## Abbruchkriterien

Ein Lauf wird beendet, wenn:

- Anforderungen unklar bleiben,
- Konflikte mit Regeln auftreten,
- Qualität oder Nachvollziehbarkeit nicht erreicht wird.

## Erfolgskriterium

Du kannst ein kleines Regelset zeigen, das vor einem Agentenlauf geprüft wird.

## Was ist zu tun

1. Ein vorhandenes Regelset kurz lesen und auf dein Projekt übertragen.
2. Drei Guardrails definieren.
3. Zwei Freigabepunkte festlegen.
4. Zwei Abbruchkriterien notieren.

## Lernerfolg-Check

- [ ] Ich kann Guardrails, Freigaben und Abbruchkriterien sauber unterscheiden.
- [ ] Ich habe ein Regelset für mein eigenes Projekt dokumentiert.
- [ ] Ich habe klare Freigabepunkte vor riskanten Änderungen festgelegt.
- [ ] Ich habe klare Stop-Regeln für unsichere Läufe definiert.
