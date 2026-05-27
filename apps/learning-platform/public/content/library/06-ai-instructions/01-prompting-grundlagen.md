# Prompting: Grundlagen

Beim "Vibe Coding" tippst du weniger Code selbst ab, sondern steuerst die KI durch präzise Anweisungen und den richtigen Kontext. Gutes Prompting ist deshalb eine der wichtigsten Fähigkeiten.



## Die vier Grundbausteine eines Prompts

Jeder gute Prompt hat bis zu vier Teile:

| Baustein | Was bedeutet das? | Beispiel |
| :--- | :--- | :--- |
| **Rolle** | Wer soll die KI sein? | "Du bist ein erfahrener TypeScript-Entwickler." |

Nicht jeder Prompt braucht alle vier - aber je mehr du angibst, desto gezielter die Antwort.

## Zero-Shot vs. Few-Shot Prompting

- **Zero-Shot:** Du erklärst nur die Aufgabe, ohne Beispiel. Funktioniert bei einfachen Aufgaben gut.
- **Few-Shot:** Du zeigst der KI ein oder mehrere Beispiele, bevor du die eigentliche Aufgabe stellst. Hilft besonders, wenn du ein bestimmtes Format oder einen bestimmten Stil willst.


## Die KI weiß nichts von deinem Projekt

Die KI hat keinen magischen Zugriff auf dein Repo, deine Dateien oder deine Absichten. Sie verarbeitet nur das, was du ihr im Chat gibst. Wenn du nichts erklärst, erfindet sie Annahmen.

**Praktische Konsequenz:** Fange wichtige Prompts immer mit dem relevanten Kontext an - z. B. eine Datei referenzieren, ein Problem beschreiben, oder den Stand deines Projekts erwähnen.

---

## Beispiel: Umlaute im Inhalt, aber nicht im Dateinamen

Eine KI kann eine Anweisung zu breit verstehen, wenn die Grenze nicht klar genannt wird.

Beispiel:

> "Geh durch alle Files und fixe die Umlaute."

Diese Anweisung kann sinnvoll gemeint sein als: sichtbaren Text korrigieren, also aus `Uebung` im Inhalt `Übung` machen.

Sie kann aber auch falsch verstanden werden als: Dateinamen umbenennen, also aus `meilenstein-01-uebung-01.md` eine Datei mit Umlaut im Namen machen. Das kann Links, Tests und technische Konventionen beschädigen.

Präziser Prompt:

> "Korrigiere in den Dateiinhalten sichtbare Umlaut-Umschreibungen wie `Uebung`, `uebersicht`, `fuer`. Ändere keine Dateinamen, Ordnernamen, Link-Ziele oder technischen Slugs."

**Merksatz:** Wenn etwas nicht verändert werden soll, sage es ausdrücklich. Besonders wichtig ist das bei Dateinamen, Pfaden, IDs, Tests und Konventionen.

---

## Iteratives Prompting

Der erste Output der KI ist selten perfekt. Prompting ist ein **Dialog**:

1. Ersten Prompt absenden
2. Output lesen und bewerten: Was ist gut? Was fehlt? Was ist falsch?
3. Im gleichen Chat nachfragen oder korrigieren
4. Wiederholen, bis das Ergebnis passt

---

## Selbstcheck

- [ ] Ich kenne die vier Grundbausteine eines Prompts: Rolle, Aufgabe, Kontext, Format.
- [ ] Ich kann zwischen Zero-Shot und Few-Shot Prompting unterscheiden.
- [ ] Ich verstehe, dass die KI nur verarbeiten kann, was ich ihr gebe.
- [ ] Ich weiß, dass der erste Output selten perfekt ist, und nutze iteratives Prompting.
- [ ] Ich kann gezielt Dateien im Copilot Chat als Kontext referenzieren.
