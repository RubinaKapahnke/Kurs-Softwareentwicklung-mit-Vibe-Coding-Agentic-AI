# Prompting: Grundlagen

Beim "Vibe Coding" tippst du weniger Code selbst ab, sondern steuerst die KI durch praezise Anweisungen und den richtigen Kontext. Gutes Prompting ist deshalb eine der wichtigsten Faehigkeiten.



## Die vier Grundbausteine eines Prompts

Jeder gute Prompt hat bis zu vier Teile:

| Baustein | Was bedeutet das? | Beispiel |
| :--- | :--- | :--- |
| **Rolle** | Wer soll die KI sein? | "Du bist ein erfahrener TypeScript-Entwickler." |

Nicht jeder Prompt braucht alle vier - aber je mehr du angibst, desto gezielter die Antwort.
## Zero-Shot vs. Few-Shot Prompting

- **Zero-Shot:** Du erklaerst nur die Aufgabe, ohne Beispiel. Funktioniert bei einfachen Aufgaben gut.
- **Few-Shot:** Du zeigst der KI ein oder mehrere Beispiele, bevor du die eigentliche Aufgabe stellst. Hilft besonders, wenn du ein bestimmtes Format oder einen bestimmten Stil willst.


## Die KI weiss nichts von deinem Projekt

Die KI hat keinen magischen Zugriff auf dein Repo, deine Dateien oder deine Absichten. Sie verarbeitet nur das, was du ihr im Chat gibst. Wenn du nichts erklaerst, erfindet sie Annahmen.

**Praktische Konsequenz:** Fange wichtige Prompts immer mit dem relevanten Kontext an - z. B. eine Datei referenzieren, ein Problem beschreiben, oder den Stand deines Projekts erwaehnen.

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
- [ ] Ich weiss, dass der erste Output selten perfekt ist, und nutze iteratives Prompting.
- [ ] Ich kann gezielt Dateien im Copilot Chat als Kontext referenzieren.
