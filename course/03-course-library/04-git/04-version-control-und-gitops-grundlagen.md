# Versionsverwaltung und GitOps: Einordnung

Dieses Dokument erklärt zwei Konzepte, die aufeinander aufbauen:

1. **Versionsverwaltung** - wie Softwareteams sicher mit gemeinsamen Codebases arbeiten
2. **GitOps** - wie dieselbe Git-Logik auf den laufenden Betrieb ausgeweitet wird

---

## Das Problem, das Versionsverwaltung löst

Stell dir vor, drei Personen arbeiten gleichzeitig an derselben Datei. Eine speichert
ihre Version lokal, eine zweite schickt eine angepasste Kopie per E-Mail, eine dritte
macht „schnell noch einen Fix" direkt auf dem Server. Zwei Stunden später gibt es
vier verschiedene Staende - und niemand weiss, welcher der richtige ist.

Dieses Szenario passiert ueberall dort, wo kein gemeinsames Versionssystem genutzt
wird. Bei Code ist es besonders kritisch, weil eine einzige fehlerhafte Zeile ganze
Features kaputtmachen kann.

Versionsverwaltung löst genau dieses Koordinationsproblem: Alle Änderungen laufen
über eine gemeinsame Zeitlinie. Wer was wann und warum geändert hat, ist dauerhaft
nachvollziehbar.

---

## Wie Git Änderungen speichert

Git merkt sich nicht einfach Dateizustaende - es speichert **Änderungen als
Schnappschuesse** (Commits). Jeder Commit enthält:

- den Differenztext (was genau hat sich verändert)
- den Autor und Zeitstempel
- eine Nachricht, die erklärt, warum diese Änderung gemacht wurde
- eine eindeutige ID (Hash), die später für Ruecksprunge genutzt werden kann

Das Ergebnis ist eine lückenlose Entwicklungsgeschichte. Wenn etwas auf einmal nicht
mehr funktioniert, lässt sich der letzte funktionsfähige Zustand wiederherstellen -
ohne Datenverlust, ohne Raterei.

---

## Paralleles Arbeiten mit Branches

Ein Kernmerkmal von Git ist, dass Änderungen auf **Branches** (Abzweigungen)
entwickelt werden können, ohne den Hauptzweig zu beeinflussen.

Typisches Muster:
- `main` bleibt der stabile Stand, der tatsächlich in Betrieb ist
- Neue Funktionen entstehen auf eigenen Feature-Branches
- Erst nach Prüfung und Freigabe kommt der neue Stand in `main` zurück

Das bedeutet: Experimente können gefahrlos ausprobiert werden. Falls etwas
schiefgeht, wird der Branch einfach verworfen - der Hauptzweig bleibt unberuehrt.

---

## Von Git zu GitOps

Klassische Versionsverwaltung bezieht sich auf Code. GitOps dehnt dieselbe Logik
auf eine andere Frage aus: **Wer oder was entscheidet, wie eine laufende
Software-Infrastruktur aussehen soll?**

Die Antwort bei GitOps: Das Repository entscheidet.

Der Unterschied in der Praxis:

| Klassisch | GitOps |
|---|---|
| Jemand loggt sich auf dem Server ein und macht Änderungen | Niemand loggt sich manuell ein |
| Änderungen sind schwer rückverfolgbar | Alle Änderungen laufen als Commits durch Git |
| Verschiedene Umgebungen driften auseinander | Repo-Stand = Live-Stand (automatisch synchronisiert) |

---

## Git als Single Source of Truth

Bei GitOps ist das Repository die einzige verbindliche Quelle für den
Systemzustand. Konfiguration, Infrastruktur und Deployment-Einstellungen liegen als
Dateien im Repo. Wer etwas ändern will, erstellt einen Pull Request - genau so wie
bei Code.

Das bringt zwei praktische Vorteile:
- **Rückverfolgbarkeit**: Jede Infrastruktur-Änderung hat einen Autor, einen
  Zeitstempel und eine Begruendung.
- **Reproduzierbarkeit**: Der Zustand einer Umgebung lässt sich aus dem Repo
  jederzeit neu aufbauen.

---

## Einordnung im Kurs

In den ersten Meilensteinen arbeiten wir mit klassischem Git - Commits, Branches,
Pull Requests. GitOps wird später relevant, wenn es um Deployment und
Infrastruktur geht (Modul 13).

Kursspezifische Einordnung:
- [../../01-course-modules/01-Onboarding-in-den-Kurs/17-version-control-und-gitops-im-kurs.md](../../01-course-modules/01-Onboarding-in-den-Kurs/17-version-control-und-gitops-im-kurs.md)

