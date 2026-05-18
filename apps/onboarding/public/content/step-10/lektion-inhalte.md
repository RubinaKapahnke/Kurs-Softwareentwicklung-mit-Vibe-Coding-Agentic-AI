<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: lektion-10-git-installieren/lektion-inhalte.md -->

# Lektion 10: Git installieren

## Ziel

Du installierst Git auf deinem Rechner und prüfst es im Terminal.

## Installation

### Windows

- git-scm.com/downloads/win verwenden
- Installer mit Standardwerten durchklicken

### macOS

- Empfehlung: Homebrew und `brew install git`
- Alternative: `xcode-select --install`

#### Kurz erklärt: Was ist Homebrew?

Homebrew ist ein Paketmanager für macOS. Damit installierst du Programme per Terminal-Befehl statt per einzelner Download-Datei.

Für Git ist das im Kurs der einfachste Weg:

1. Falls Homebrew fehlt: https://brew.sh öffnen und den Installationsbefehl ausführen.
2. Danach `brew install git` ausführen.
3. Mit `git --version` prüfen, ob Git korrekt installiert ist.

### Linux

- Hinweis: Für Linux können wir im Kurs keinen offiziellen Installationssupport anbieten.
- Wenn du bereits Linux nutzt, solltest du mit deiner Distribution gut klarkommen.
- Beispiele je nach Distribution: apt, dnf, pacman, zypper.

## Hinweis nach der Installation (Windows)

Nach der Installation landest du häufig auf `git-scm.com` bei „Now What?".

Dort werden oft drei Dinge vorgeschlagen (z. B. Pro Git Book lesen, GUI herunterladen, mitmachen). Das kannst du für den Kursstart ignorieren.

### Kurz zu „GUI"

Eine GUI (Graphical User Interface) ist eine Klick-Oberfläche für Git.

Im Kurs arbeitest du Git primär über das Terminal in VS Code. Das reicht vollständig aus und entspricht dem Ablauf in vielen echten Projekten.

## Terminal-Check

- `git --version` ausführen
- Erwartung: `git version 2.x.x`

## Fallback

- `git --version` fehlschlägt: VS Code neu starten.
- Terminal nicht sichtbar: Terminal -> Neues Terminal.

## Erfolgskriterium

`git --version` zeigt eine gültige Versionsnummer.
