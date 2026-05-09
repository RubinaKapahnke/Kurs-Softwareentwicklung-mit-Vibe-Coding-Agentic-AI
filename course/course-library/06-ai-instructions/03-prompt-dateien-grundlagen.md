# Prompt-Dateien: Grundlagen

Eine **Prompt-Datei** (`.prompt.md`) ist eine wiederverwendbare Vorlage, in der du der KI einmalig eine Rolle und Verhaltensregeln gibst. Du kannst sie im Chat jederzeit aufrufen – ohne alles neu tippen zu muessen.

---

## Warum ist das Context-Engineering?

Du steuerst nicht nur *was* du fragst, sondern *wie die KI antwortet*, bevor die eigentliche Aufgabe beginnt. Das ist die praeziseste Form von Kontext-Kontrolle.

**Ohne Prompt-Datei:**
> KI antwortet sofort nach eigenem Ermessen – erfindet Projektideen, macht Annahmen.

**Mit Prompt-Datei:**
> KI folgt deinen Regeln: fragt erst, erfindet nichts, bleibt im vorgegebenen Format.

---

## Wo liegen Prompt-Dateien?

Prompt-Dateien muessen in `.github/prompts/` liegen. Das ist eine Konvention von VS Code Copilot – nur dort erkennt Copilot sie automatisch und zeigt sie in der `/`-Liste im Chat an.

Eine `.prompt.md`-Datei woanders abzulegen ist technisch moeglich, aber Copilot wuerde sie dann nicht finden.

---

## Aufbau einer Prompt-Datei

Eine `.prompt.md`-Datei hat zwei Pflichtteile:

**1. Frontmatter** – muss zwingend ganz oben stehen (zwischen `---`-Zeilen):
```yaml
---
name: "Name der Prompt-Datei"
description: "Kurzbeschreibung – erscheint in der /-Liste"
agent: "ask"
---
```

**2. Inhalt** – die eigentlichen Anweisungen fuer die KI, direkt darunter.

> Wichtig: Das Frontmatter muss auf der **ersten Zeile** der Datei beginnen. Steht davor etwas anderes (z. B. ein Kommentar), erkennt Copilot es nicht.

---

## HTML-Kommentare fuer Lernende

HTML-Kommentare (`<!-- ... -->`) werden von Copilot beim Ausfuehren ignoriert, sind aber fuer Menschen lesbar. Das eignet sich gut fuer Hinweise direkt in der Datei:

```markdown
<!-- 
  Aufruf im Chat: / → "Name der Datei" auswaehlen
  Mehr dazu: course/course-library/06-ai-instructions/03-prompt-dateien-grundlagen.md
-->
```

---

## Aufruf im Chat

1. Copilot Chat oeffnen
2. `/` eintippen
3. Prompt-Datei aus der Liste auswaehlen
4. Ggf. Kontext-Dateien mit `#` hinzufuegen

---

## Selbstcheck

- [ ] Ich verstehe, was eine Prompt-Datei ist und welchen Zweck sie hat.
- [ ] Ich weiss, dass Prompt-Dateien in `.github/prompts/` liegen muessen.
- [ ] Ich verstehe, dass das Frontmatter immer ganz oben stehen muss.
- [ ] Ich kann eine Prompt-Datei ueber `/` im Copilot Chat aufrufen.
