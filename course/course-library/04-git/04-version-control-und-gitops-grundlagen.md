# Version Control und GitOps: Grundlagen

Dieses Dokument ordnet zwei Konzepte ein:

1. **Version Control** als Grundlage fuer nachvollziehbare Softwareentwicklung
2. **GitOps** als weiterfuehrender Betriebsansatz mit Git als Steuerzentrale

## Was ist Version Control?

Version Control bedeutet, Aenderungen an Dateien dauerhaft nachvollziehbar zu speichern.

Wichtige Idee:
- Nicht nur der aktuelle Stand ist wichtig, sondern auch der Weg dorthin.

Ein gutes Versionssystem speichert:
- wer eine Aenderung gemacht hat
- wann die Aenderung passiert ist
- welche Dateien betroffen sind
- warum die Aenderung gemacht wurde (Commit-Nachricht)

## Warum das in Teams entscheidend ist

Ohne Version Control entstehen schnell typische Probleme:
- mehrere "final-final-neu" Dateikopien
- unklare Verantwortlichkeit
- schwer nachvollziehbare Fehler
- Konflikte zwischen parallelen Aenderungen

Mit Version Control werden diese Risiken kleiner, weil Aenderungen sichtbar, pruefbar und rueckholbar bleiben.

## Drei Kernnutzen von Version Control

1. **Historie**
   - Der komplette Verlauf hilft bei Fehlersuche und Rueckblick.
2. **Branching und Merging**
   - Parallele Arbeit bleibt getrennt und kann spaeter zusammengefuehrt werden.
3. **Traceability**
   - Aenderungen sind mit Kontext verknuepft und spaeter besser erklaerbar.

## Was ist GitOps?

GitOps nutzt Git nicht nur fuer Code, sondern auch fuer Betriebs- und Infrastrukturkonfiguration.

Grundidee:
- Der gewuenschte Systemzustand steht in einem Repository.
- Aenderungen laufen ueber Pull Requests.
- Nach Freigabe wird der Live-Zustand automatisiert an den Repository-Zustand angepasst.

## GitOps in einfachen Bausteinen

1. **Deklarative Konfiguration**
   - Gewuenschter Zielzustand wird beschrieben, nicht nur einzelne Klick-Schritte.
2. **Git als Single Source of Truth**
   - Das Repository ist der verbindliche Soll-Zustand.
3. **Automatisierte Synchronisierung**
   - Pipeline/Operator gleichen Live-System und Repo-Stand ab.

## Nutzen und Grenzen von GitOps

Moegliche Vorteile:
- hoehere Transparenz bei Infrastruktur-Aenderungen
- reproduzierbare Zustaende
- schnellere, kontrollierte Rollbacks
- bessere Zusammenarbeit zwischen Entwicklung und Betrieb

Wichtige Voraussetzung:
- saubere Git-Disziplin (PR-Workflow, klare Commit-Nachrichten, Review)

## Einordnung im Kurs

- In fruehen Meilensteinen liegt der Fokus auf klassischem Git-Workflow.
- GitOps ist ein weiterfuehrendes Konzept fuer spaetere Betriebs-/Deployment-Themen.

Kursspezifische Einordnung:
- [../../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/04-version-control-und-gitops-im-kurs.md](../../kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/04-version-control-und-gitops-im-kurs.md)
