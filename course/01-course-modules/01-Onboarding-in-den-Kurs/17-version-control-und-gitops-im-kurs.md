# Version Control und GitOps im Kurskontext

Dieses Dokument verbindet die allgemeinen Grundlagen aus der Course-Library mit dem praktischen Kursablauf.

Allgemeine Quelle:
- [Version Control und GitOps: Grundlagen](../../03-course-library/04-git/04-version-control-und-gitops-grundlagen.md)

## Was wir im Modul 01 konkret brauchen

Im ersten Kursmodul ist Version Control kein Nebenthema, sondern Sicherheitsnetz für deinen Lernfortschritt.

Du nutzt Git/GitHub hier vor allem für:
- nachvollziehbare Lernschritte (kleine Commits statt grosser Spruenge)
- sichere Zusammenarbeit über Branches und Pull Requests
- klare Dokumentation, die andere Menschen und KI lesen können

## Praktische Leitplanken für Einsteiger:innen

1. Arbeite in kleinen, klar benannten Lektionen.
2. Prüfe vor jedem Push kurz mit `git status`.
3. Nutze Commit-Nachrichten, die den Zweck beschreiben.
4. Halte `main` stabil und arbeite für Aufgaben in einem Branch.

## Was von GitOps hier schon mitgedacht wird

GitOps selbst ist in Modul 01 noch nicht das Umsetzungsziel. Trotzdem lernst du bereits Grundprinzipien, die später wichtig werden:

- Git als verbindliche Quelle für den gewuenschten Stand
- Änderungen über Review-Prozess statt Direkt-Eingriffe
- reproduzierbare Änderungen durch klare Historie

## Bruecke in spaetere Module

Wenn du später Deployment- und Betriebsmodule bearbeitest, wird aus dem heutigen Git-Workflow ein technischer Betriebsworkflow.

Merksatz:
- **Heute:** "Ich versioniere meinen Arbeitsstand sauber."
- **Später:** "Wir steuern Systemzustaende über versionierte Konfiguration."

