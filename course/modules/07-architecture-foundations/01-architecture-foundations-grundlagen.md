# Architecture Foundations: Grundlagen

Beim Vibe Coding baust du Software mit KI-Unterstuetzung. Das funktioniert gut – aber nur, wenn du und die KI das gleiche Bild vom Projekt haben. Dieses Modul erklaert, wie du dieses gemeinsame Bild aufbaust.

---

## Warum braucht ein Projekt Struktur?

Stell dir vor, du bittest jemanden, dir ein Zimmer einzurichten – ohne zu sagen, wie viele Personen darin schlafen, ob es ein Buero oder ein Wohnzimmer ist, und was du aufbewahren willst.

Ohne Struktur passiert genau das in deinem Projekt:

**Ohne Strukturvorgabe:**
> "Baue mir eine Teilnehmer-Uebersicht."
> → KI erfindet: Wie sehen die Karten aus? Woher kommen die Daten? Was passiert beim Klick?

**Mit Strukturvorgabe:**
> "Hier ist mein PRD und die Ordnerstruktur meines Projekts. Baue mir eine Teilnehmer-Uebersicht als Listenansicht – die Daten kommen aus `participants.json`."
> → KI baut genau das, was in deinen Kontext passt.

Struktur ist also kein Selbstzweck. Sie ist das **Vokabular**, mit dem du der KI erklaerst, was existiert und was entsteht.

---

## Komponenten-Denken: Was gehoert zusammen?

Eine **Komponente** ist ein abgegrenzter Teil deiner App, der eine klar definierte Aufgabe hat.

Einfache Faustregel: Wenn du eine Sache auf dem Bildschirm siehst, die eigenstaendig funktioniert und wiederverwendet werden koennte – das ist wahrscheinlich eine Komponente.

**Beispiele aus einem Kurs-Dashboard:**

| Komponente | Aufgabe | Eigenstaendig? |
| :--- | :--- | :--- |
| `ParticipantCard` | Zeigt Name, Status und Fortschritt einer Person | Ja – kann mehrfach verwendet werden |
| `ProgressBar` | Zeigt Fortschritt in Prozent visuell an | Ja – koennte auch woanders stehen |
| `DashboardPage` | Koordiniert alle Karten, laedt Daten | Nein – ist der Rahmen |

**Warum hilft dir das beim Prompting?**

Wenn du der KI sagst: „Erstelle die Komponente `ParticipantCard` – sie bekommt Name und Status als Input und zeigt beides an", weiss die KI genau, was zu tun ist. Ohne Komponentenname und Verantwortlichkeit erfindet sie beides selbst.

---

## Ordnerstruktur als Kommunikation

Ordner sind nicht nur Aufraeumsystem. Sie zeigen der KI (und dir), **wie das Projekt denkt**.

Typische Struktur fuer ein Angular-Projekt im Kurs:

```
src/
├── app/
│   ├── components/       ← Wiederverwendbare UI-Bausteine
│   │   └── participant-card/
│   ├── pages/            ← Seiten der App (werden im Router eingebunden)
│   │   └── dashboard/
│   └── services/         ← Logik und Datenzugriff (kein UI)
├── assets/
│   └── data/
│       └── participants.json   ← Beispiel-Datendatei
```

**Was du der KI damit erklaerst:**
- „In `components/` liegen wiederverwendbare Bausteine."
- „In `pages/` liegen die Seiten – eine pro Route."
- „In `services/` liegt alles, was Daten laed oder verarbeitet."

Wenn du der KI diese Struktur einmal zeigst, legt sie neue Dateien automatisch an die richtige Stelle – statt alles in einen Ordner zu werfen.

---

## Datenfluss in einfachen Worten

Datenfluss beschreibt, wie Informationen durch deine App wandern: **woher sie kommen, wohin sie gehen, wer sie veraendert**.

Ein einfaches Beispiel:

```
participants.json
      ↓ (wird geladen von)
ParticipantService
      ↓ (gibt Daten weiter an)
DashboardPage
      ↓ (uebergibt einzelne Daten an)
ParticipantCard  →  zeigt auf dem Bildschirm an
```

Das klingt abstrakt – wird aber beim Prompting sofort konkret:

> "Der `ParticipantService` laedt die Daten aus `participants.json`. Die `DashboardPage` ruft den Service auf und uebergibt jeden Teilnehmer als Input an `ParticipantCard`."

Mit diesem Satz weiss die KI, welche Dateien zusammenhaengen und wie sie kommunizieren. Ohne diesen Satz muss sie es raten.

---

## Struktur der KI erklaeren

Du musst kein Architekt sein. Aber du musst in der Lage sein, deinem Projekt einen kurzen **Strukturkontext** voranzustellen.

Ein gutes Muster dafuer:

```
Mein Projekt:
- Stack: Angular + Angular Material + TypeScript
- Ziel: [1 Satz aus dem PRD]
- Ordnerstruktur: [kurze Auflistung der relevanten Ordner]
- Aktuelle Komponente: [Name + Verantwortlichkeit]
- Datenquelle: [Dateiname oder Service]
```

Diesen Block kannst du in einer Datei speichern – z. B. in deinem PRD oder in einer eigenen `context.md` – und bei neuen Aufgaben als Kontext im Chat einfuegen.

**Wichtig:** Du musst nicht den ganzen Code erklaeren. Es reicht, die **relevanten Teile** zu benennen, die fuer die aktuelle Aufgabe eine Rolle spielen.

---

## Selbstcheck

- [ ] Ich kann in einem Satz erklaeren, warum Struktur beim Prompting hilft.
- [ ] Ich kann benennen, wofuer eine Komponente in meinem Projekt verantwortlich ist.
- [ ] Ich kann die Ordnerstruktur meines Projekts in 3-5 Zeilen beschreiben.
- [ ] Ich kann den Datenfluss fuer eine Funktion meiner App kurz erklaeren.
- [ ] Ich kann einen Strukturkontext-Block formulieren, den ich vor einem Prompt einfuegen kann.
