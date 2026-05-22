<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 10-git-installieren.md -->

# Lektion 10: Git installieren

## Ziel

Du installierst Git auf deinem Rechner und pruefst es im Terminal.

## Installation

### Windows

- git-scm.com/downloads/win verwenden
- Installer mit Standardwerten durchklicken

### macOS

- Empfehlung: Homebrew und `brew install git`
- Alternative: `xcode-select --install`

#### Kurz erklärt: Was ist Homebrew?

Homebrew ist ein Paketmanager fuer macOS. Damit installierst du Programme per Terminal-Befehl statt per einzelner Download-Datei.

Fuer Git ist das im Kurs der einfachste Weg:

1. Falls Homebrew fehlt: https://brew.sh oeffnen und den Installationsbefehl ausfuehren.
2. Danach `brew install git` ausfuehren.
3. Mit `git --version` pruefen, ob Git korrekt installiert ist.

### Linux

- Hinweis: Fuer Linux koennen wir im Kurs keinen offiziellen Installationssupport anbieten.
- Wenn du bereits Linux nutzt, solltest du mit deiner Distribution gut klarkommen.
- Beispiele je nach Distribution: apt, dnf, pacman, zypper.

## Hinweis nach der Installation (Windows)

Nach der Installation landest du haeufig auf `git-scm.com` bei „Now What?".

Dort werden oft drei Dinge vorgeschlagen (z. B. Pro Git Book lesen, GUI herunterladen, mitmachen). Das kannst du fuer den Kursstart ignorieren.

### Kurz zu „GUI"

Eine GUI (Graphical User Interface) ist eine Klick-Oberflaeche fuer Git.

Im Kurs arbeitest du Git primaer ueber das Terminal in VS Code. Das reicht vollstaendig aus und entspricht dem Ablauf in vielen echten Projekten.

## Terminal-Check

- `git --version` ausfuehren
- Erwartung: `git version 2.x.x`

## Fallback

- `git --version` fehlschlaegt: VS Code neu starten.
- Terminal nicht sichtbar: Terminal -> Neues Terminal.

## Erfolgskriterium

`git --version` zeigt eine gueltige Versionsnummer.

## Was ist zu tun

1. Git herunterladen und installieren.
2. In VS Code ein Terminal oeffnen.
3. `git --version` ausfuehren.
