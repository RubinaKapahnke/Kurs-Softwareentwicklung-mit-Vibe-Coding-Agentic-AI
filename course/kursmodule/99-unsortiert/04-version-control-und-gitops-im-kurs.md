# Version Control und GitOps im Kurskontext

Dieses Dokument verbindet die allgemeinen Grundlagen aus der Course-Library mit dem praktischen Kursablauf.

Allgemeine Quelle:
- [Version Control und GitOps: Grundlagen](../../course-library/04-git/04-version-control-und-gitops-grundlagen.md)

## Was wir im Modul 01 konkret brauchen

Im ersten Kursmodul ist Version Control kein Nebenthema, sondern Sicherheitsnetz fuer deinen Lernfortschritt.

Du nutzt Git/GitHub hier vor allem fuer:
- nachvollziehbare Lernschritte (kleine Commits statt grosser Spruenge)
- sichere Zusammenarbeit ueber Branches und Pull Requests
- klare Dokumentation, die andere Menschen und KI lesen koennen

## Praktische Leitplanken fuer Einsteiger:innen

1. Arbeite in kleinen, klar benannten Schritten.
2. Pruefe vor jedem Push kurz mit `git status`.
3. Nutze Commit-Nachrichten, die den Zweck beschreiben.
4. Halte `main` stabil und arbeite fuer Aufgaben in einem Branch.

## Was von GitOps hier schon mitgedacht wird

GitOps selbst ist in Modul 01 noch nicht das Umsetzungsziel. Trotzdem lernst du bereits Grundprinzipien, die spaeter wichtig werden:

- Git als verbindliche Quelle fuer den gewuenschten Stand
- Aenderungen ueber Review-Prozess statt Direkt-Eingriffe
- reproduzierbare Aenderungen durch klare Historie

## Bruecke in spaetere Module

Wenn du spaeter Deployment- und Betriebsmodule bearbeitest, wird aus dem heutigen Git-Workflow ein technischer Betriebsworkflow.

Merksatz:
- **Heute:** "Ich versioniere meinen Arbeitsstand sauber."
- **Spaeter:** "Wir steuern Systemzustaende ueber versionierte Konfiguration."
