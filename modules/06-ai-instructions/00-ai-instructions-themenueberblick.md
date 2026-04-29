# Prompting und Context-Engineering: Grundlagen

Dieses Modul bringt dir bei, wie du effektiv mit KI-Assistenten (wie GitHub Copilot) kommunizierst. Beim "Vibe Coding" tippst du weniger Code selbst ab, sondern steuerst die KI durch präzise Anweisungen und den richtigen Kontext.

---

## Was ist ein PRD?

Ein **PRD (Product Requirements Document)** ist ein Dokument, das beschreibt, was eine Software tun soll – bevor irgendein Code geschrieben wird. Es beantwortet:
- Was ist das Ziel der App?
- Wer nutzt sie und für was?
- Wann ist ein Feature fertig?

Ein gutes PRD ist der wichtigste Kontext, den du einer KI geben kannst. Je klarer dein PRD, desto besser und zielgerichteter sind die KI-Antworten.

---

## Must have

- [ ] Ich verstehe die Grundbausteine eines guten Prompts: Rolle, Aufgabe, Kontext, Format.
- [ ] Ich kann zwischen Zero-Shot und Few-Shot Prompting unterscheiden.
- [ ] Ich verstehe, dass die KI mein Projekt nicht auswendig kennt und nur das verarbeiten kann, was ich ihr gebe.
- [ ] Ich kann gezielt Dateien und Code im Copilot Chat als Kontext referenzieren.
- [ ] Ich weiss, dass der erste Output der KI selten perfekt ist, und nutze iteratives Prompting im Dialog.

## Should have

- [ ] Ich kann ein einfaches PRD (Product Requirements Document) schreiben.
- [ ] Ich verstehe, warum strukturierte Daten (z. B. JSON) einer KI helfen.
- [ ] Ich kann Fehlermeldungen kopieren und der KI zeigen, um Probleme zu loesen.
- [ ] Ich nutze den Chat, um Code erklären zu lassen oder Dokumentation zu generieren.
- [ ] Ich weiss, wann ich der KI ein Beispiel zeigen sollte, damit sie besser versteht, was ich will.

## Nice to have

- [ ] Ich kann komplexe Anforderungen aus meinem PRD in mehreren Prompts ausfuehren lassen.
- [ ] Ich erkenne, wenn die KI "halluziniert" (also Dinge erfindet) und gebe ihr bessere Kontext-Grenzen.
- [ ] Ich kann die KI nutzen, um meine eigenen Code-Entscheidungen zu hinterfragen und zu verbessern.
- [ ] Ich baue echte Komponenten und Workflows durch geschicktes Prompting.

---

## Prompt-Dateien: wiederverwendbare Anweisungen

Eine **Prompt-Datei** (`.prompt.md`) ist eine Textdatei, in der du der KI einmalig eine Rolle und Verhaltensregeln gibst. Du kannst sie im Chat immer wieder aufrufen – mit `/` und dem Namen der Datei.

**Warum ist das Context-Engineering?**
Du steuerst nicht nur was du fragst, sondern *wie die KI antwortet*, bevor die eigentliche Aufgabe beginnt. Das ist die praeziseste Form von Kontext-Kontrolle.

**Beispiel:** Der PRD-Assistent in `.github/prompts/learners-prd-assistent.prompt.md` fragt dich zuerst nach deinen Ideen, bevor er etwas formuliert. Ohne diese Anweisung wuerde die KI sofort erfinden.

**Warum `.github/prompts/`?**
Dieser Ordnerpfad ist eine Konvention von VS Code Copilot. Nur wenn eine `.prompt.md`-Datei dort liegt, erkennt Copilot sie automatisch und zeigt sie in der `/`-Liste im Chat an. Eine Prompt-Datei woanders abzulegen waere technisch moeglich, aber Copilot wuerde sie dann nicht finden.

**Aufbau einer Prompt-Datei:**
Eine `.prompt.md`-Datei hat zwei Teile:
1. **Frontmatter** (ganz oben, zwischen `---`-Zeilen): Metadaten wie Name und Beschreibung. Dieser Block muss zwingend als erstes in der Datei stehen – sonst erkennt Copilot ihn nicht.
2. **Inhalt**: Die eigentlichen Anweisungen fuer die KI, darunter.

HTML-Kommentare (`<!-- ... -->`) im Inhalt werden von Copilot beim Ausfuehren ignoriert – sie sind aber fuer Menschen lesbar. Das eignet sich gut fuer Hinweise an Lernende direkt in der Datei.

- [ ] Ich verstehe, dass `.prompt.md`-Dateien der KI eine Rolle und Regeln vorgeben.
- [ ] Ich weiss, dass Prompt-Dateien in `.github/prompts/` liegen muessen, damit Copilot sie erkennt.
- [ ] Ich verstehe, dass das Frontmatter (`---`) immer ganz oben stehen muss.
- [ ] Ich kann eine Prompt-Datei ueber `/` im Copilot Chat aufrufen.