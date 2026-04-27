# 🗺️ Lernpfad: Prompting & Context-Engineering

Dieses Modul bringt dir bei, wie du effektiv mit KI-Assistenten (wie GitHub Copilot) kommunizierst. Beim "Vibe Coding" tippst du weniger Code selbst ab, sondern steuerst die KI durch präzise Anweisungen und den richtigen Kontext.

---

## 🗣️ Meilenstein 1: Prompting-Grundlagen (Die richtige Ansprache)
**Ziel:** Verstehen, wie man klare, unmissverständliche und zielgerichtete Anweisungen an die KI formuliert.

- [ ] **Die Anatomie eines guten Prompts verstehen**
  > **Wissen:** Du lernst die Bausteine eines perfekten Prompts kennen: Rolle definieren, Aufgabe klar benennen, Kontext geben und das gewünschte Format (z. B. Markdown oder JSON) einfordern.

- [ ] **Zero-Shot vs. Few-Shot Prompting anwenden**
  > **Wissen:** Du verstehst den Unterschied zwischen einer einfachen Frage ("Zero-Shot") und einer Frage, bei der du der KI vorher ein bis zwei Beispiele zeigst, wie das Ergebnis aussehen soll ("Few-Shot").

- [ ] **Iteratives Prompting (Der Dialog)**
  > **Wissen:** Du weißt, dass der erste Output der KI selten perfekt ist. Du lernst, wie man im Chat nachhakt, Fehler korrigiert und das Ergebnis Schritt für Schritt verfeinert ("Viben").

---

## 🧩 Meilenstein 2: Context-Engineering (Den Rahmen schaffen)
**Ziel:** Der KI genau die Informationen (Dateien, Daten, Konzepte) geben, die sie braucht, um spezifisch für dein Projekt zu arbeiten und Halluzinationen zu vermeiden.

- [ ] **Das Prinzip des "Kontext-Fensters" verstehen**
  > **Wissen:** Du begreifst, dass die KI dein Projekt nicht auswendig kennt und nur das verarbeiten kann, was du ihr aktiv als Information (Kontext) mitgibst.

- [ ] **Dateien und Code als Kontext referenzieren**
  > **Wissen:** Du lernst, wie man in VS Code (z.B. im Copilot Chat) gezielt bestimmte Dateien oder den gesamten Workspace referenziert, damit die KI den bestehenden Code lesen kann, bevor sie neuen schreibt.

- [ ] **Ein PRD (Product Requirements Document) schreiben**
  > **Wissen:** Du weißt, wie man ein grobes Anforderungsdokument schreibt, das der KI als Leitplanke dient, bevor sie überhaupt anfängt, Code zu generieren.

- [ ] **Strukturierte Daten vorbereiten (z. B. `goals.json`)**
  > **Wissen:** Du verstehst, warum es wichtig ist, Rohdaten (wie deine Lernziele) erst in ein maschinenlesbares Format (JSON) zu bringen, damit die KI später problemlos darauf zugreifen kann.

---

## 🚀 Meilenstein 3: Vibe Coding in Action
**Ziel:** Prompting und Kontext kombinieren, um echte Komponenten zu bauen und Probleme zu lösen.

- [ ] **Von der Spezifikation zum Code**
  > **Wissen:** Du wendest dein PRD und deine JSON-Daten an, um die KI aufzufordern: "Baue mir basierend auf Datei A und Daten B eine Angular-Komponente."

- [ ] **Troubleshooting & Fehlerbehebung mit der KI**
  > **Wissen:** Du gerätst nicht in Panik bei roten Fehlermeldungen im Terminal. Du lernst stattdessen, die Fehlermeldung einfach zu kopieren, der KI zu übergeben und zu fragen: "Warum passiert das und wie fixen wir das?"

- [ ] **Code erklären und kommentieren lassen**
  > **Wissen:** Du weißt, wie du die KI nutzt, um Code, den du nicht ganz verstehst, Zeile für Zeile auf Deutsch erklären zu lassen oder automatisch Dokumentation hinzuzufügen.