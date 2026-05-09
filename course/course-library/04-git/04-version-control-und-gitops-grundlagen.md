# Versionsverwaltung und GitOps: Einordnung

Dieses Dokument erklaert zwei Konzepte, die aufeinander aufbauen:

1. **Versionsverwaltung** – wie Softwareteams sicher mit gemeinsamen Codebases arbeiten
2. **GitOps** – wie dieselbe Git-Logik auf den laufenden Betrieb ausgeweitet wird

---

## Das Problem, das Versionsverwaltung loest

Stell dir vor, drei Personen arbeiten gleichzeitig an derselben Datei. Eine speichert
ihre Version lokal, eine zweite schickt eine angepasste Kopie per E-Mail, eine dritte
macht „schnell noch einen Fix" direkt auf dem Server. Zwei Stunden spaeter gibt es
vier verschiedene Staende – und niemand weiss, welcher der richtige ist.

Dieses Szenario passiert ueberall dort, wo kein gemeinsames Versionssystem genutzt
wird. Bei Code ist es besonders kritisch, weil eine einzige fehlerhafte Zeile ganze
Features kaputtmachen kann.

Versionsverwaltung loest genau dieses Koordinationsproblem: Alle Aenderungen laufen
ueber eine gemeinsame Zeitlinie. Wer was wann und warum geaendert hat, ist dauerhaft
nachvollziehbar.

---

## Wie Git Aenderungen speichert

Git merkt sich nicht einfach Dateizustaende – es speichert **Aenderungen als
Schnappschuesse** (Commits). Jeder Commit enthaelt:

- den Differenztext (was genau hat sich veraendert)
- den Autor und Zeitstempel
- eine Nachricht, die erklaert, warum diese Aenderung gemacht wurde
- eine eindeutige ID (Hash), die spaeter fuer Ruecksprunge genutzt werden kann

Das Ergebnis ist eine lueckenlose Entwicklungsgeschichte. Wenn etwas auf einmal nicht
mehr funktioniert, laesst sich der letzte funktionsfaehige Zustand wiederherstellen –
ohne Datenverlust, ohne Raterei.

---

## Paralleles Arbeiten mit Branches

Ein Kernmerkmal von Git ist, dass Aenderungen auf **Branches** (Abzweigungen)
entwickelt werden koennen, ohne den Hauptzweig zu beeinflussen.

Typisches Muster:
- `main` bleibt der stabile Stand, der tatsaechlich in Betrieb ist
- Neue Funktionen entstehen auf eigenen Feature-Branches
- Erst nach Pruefung und Freigabe kommt der neue Stand in `main` zurueck

Das bedeutet: Experimente koennen gefahrlos ausprobiert werden. Falls etwas
schiefgeht, wird der Branch einfach verworfen – der Hauptzweig bleibt unberuehrt.

---

## Von Git zu GitOps

Klassische Versionsverwaltung bezieht sich auf Code. GitOps dehnt dieselbe Logik
auf eine andere Frage aus: **Wer oder was entscheidet, wie eine laufende
Software-Infrastruktur aussehen soll?**

Die Antwort bei GitOps: Das Repository entscheidet.

Der Unterschied in der Praxis:

| Klassisch | GitOps |
|---|---|
| Jemand loggt sich auf dem Server ein und macht Aenderungen | Niemand loggt sich manuell ein |
| Aenderungen sind schwer rueckverfolgbar | Alle Aenderungen laufen als Commits durch Git |
| Verschiedene Umgebungen driften auseinander | Repo-Stand = Live-Stand (automatisch synchronisiert) |

---

## Git als Single Source of Truth

Bei GitOps ist das Repository die einzige verbindliche Quelle fuer den
Systemzustand. Konfiguration, Infrastruktur und Deployment-Einstellungen liegen als
Dateien im Repo. Wer etwas aendern will, erstellt einen Pull Request – genau so wie
bei Code.

Das bringt zwei praktische Vorteile:
- **Rueckverfolgbarkeit**: Jede Infrastruktur-Aenderung hat einen Autor, einen
  Zeitstempel und eine Begruendung.
- **Reproduzierbarkeit**: Der Zustand einer Umgebung laesst sich aus dem Repo
  jederzeit neu aufbauen.

---

## Einordnung im Kurs

In den ersten Meilensteinen arbeiten wir mit klassischem Git – Commits, Branches,
Pull Requests. GitOps wird spaeter relevant, wenn es um Deployment und
Infrastruktur geht (Modul 13).

Kursspezifische Einordnung:
- [../../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/04-version-control-und-gitops-im-kurs.md](../../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/04-version-control-und-gitops-im-kurs.md)
