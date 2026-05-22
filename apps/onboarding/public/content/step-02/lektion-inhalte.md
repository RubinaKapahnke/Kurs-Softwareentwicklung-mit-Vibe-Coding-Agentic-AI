<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: 02-github-erste-schritte.md -->

# Lektion 02: GitHub-Erste Schritte

## Ziel

Du verstehst, wofür GitHub genutzt wird, und hast dein eigenes Übungs-Repository erfolgreich erstellt.

## Kapitel 1: Git, GitHub, Repository

### Was ist GitHub

GitHub ist eine Plattform im Web, auf der du Code speichern, versionieren und teilen kannst.

Du kannst dir GitHub wie einen zentralen Ort vorstellen, an dem Projekte nicht nur abgelegt, sondern auch sauber organisiert werden. Statt Dateien einfach hin und her zu schicken, arbeitest du in einem Repository mit klarer Historie. Jeder wichtige Stand deiner Arbeit kann nachvollzogen werden.

### Was ist Git?

GitHub basiert auf Git. Git ist das technische Werkzeug für Versionskontrolle, GitHub ist die Plattform darum herum: mit Weboberfläche, Kollaboration und Überblick über Änderungen.

### Git ist nicht GitHub: So hängen beide zusammen

Git und GitHub werden oft zusammen genannt, sind aber nicht dasselbe:

- Git ist das Versionskontrollsystem. Es speichert Änderungen an Dateien als nachvollziehbare Historie.
- GitHub ist die Online-Plattform, auf der Git-Repositories liegen und gemeinsam genutzt werden.

So bauen sie aufeinander auf:

1. Du arbeitest an Dateien und erzeugst mit Git lokale Versionsstände.
2. Diese Stände überträgst du in ein Repository auf GitHub.
3. Auf GitHub kannst du den Verlauf ansehen, Feedback erhalten und mit anderen zusammenarbeiten.

Kurzformel: Git ist das Werkzeug, GitHub ist der gemeinsame Ort im Web.

Hinweis: In dieser Lektion reicht das Grundverständnis. Git selbst behandeln wir später im Kurs noch deutlich tiefer mit praktischen Befehlen und typischen Workflows.

![Git vs. Github](/content/Assets/m01l02_git-vs-github.png)

### Was ist ein Repository?

Ein Repository ist ein Projektordner auf GitHub. Dort liegen Dateien, Änderungen und der Versionsverlauf deiner Arbeit.

Du kannst es dir wie einen zentralen Arbeitsordner vorstellen, in dem jeder Stand nachvollziehbar bleibt.

Wichtig: Ein Repository speichert nicht nur den aktuellen Inhalt deiner Dateien, sondern auch die Historie. Dadurch kannst du Änderungen vergleichen, Fehler leichter rückgängig machen und deinen Lernfortschritt dokumentieren.

### Wie nutzen wir GitHub im Kurs?

Im Kurs nutzt du GitHub, um:

- deine Übungsaufgaben und Lösungen strukturiert zu speichern,
- Änderungen Schritt für Schritt festzuhalten,
- Feedback auf deine Arbeit zu erhalten,
- und später gemeinsam mit anderen an Projekten zu arbeiten.

Kurz gesagt: GitHub hilft dir, nachvollziehbar, teamfähig und professionell zu arbeiten, auch wenn du gerade erst startest.

Im Kurs dreht sich vieles darum, wie echte Softwareentwicklung heute aussieht. Und dazu gehört GitHub von Anfang an. So nutzen wir es konkret:

**Dein eigenes Übungs-Repository**
Du legst auf GitHub dein persönliches Repository an. Dort speicherst du deine Übungen, Lösungen und Notizen. Niemand sonst kann dort schreiben, es gehört dir.

**Das gemeinsame Kurs-Repository**
Der Kurs selbst liegt ebenfalls auf GitHub. Alle Aufgaben, Materialien und Updates kommen von dort. Du lernst, wie du Änderungen aus dem Kurs-Repo holst und mit deiner eigenen Arbeit kombinierst, genau wie in echten Projekten.

**Feedback und Zusammenarbeit**
Dozierende können deine Commits sehen und dir direkt am Code Rückmeldung geben. So erhältst du nicht nur wertvolles Feedback, sondern lernst auch echte Praxis kennen. Denn genau so funktionieren auch Code-Reviews.

**GitHub Copilot**
Ein zentrales Werkzeug im Kurs ist GitHub Copilot. Es ist direkt in VS Code integriert und setzt einen GitHub-Account voraus. Ohne GitHub-Account kannst du GitHub Copilot im Kurs nicht nutzen.

**Dein Einstieg in echte Entwicklungspraxis**
GitHub zu nutzen bedeutet, von Tag 1 so zu arbeiten, wie Entwickler:innen es weltweit tun. Was du hier lernst, gilt genauso im nächsten Praktikum, im Job oder im eigenen Projekt.

GitHub ist im Basistarif kostenlos. Du brauchst nur einen Account.

Im Kurs nutzt du zwei Repositories mit unterschiedlichen Rollen:

- **Dein eigenes Übungs-Repository**: Hier arbeitest du an Aufgaben, Notizen und Lösungen.
- **Das Kurs-Repository**: Von hier holst du Materialien, Übungen und Updates.

## Kapitel 2: Account erstellen

### Schritt-für-Schritt: GitHub-Account anlegen

1. Öffne die Seite https://github.com.
2. Klicke oben rechts auf **Sign up**.
3. Falls **Sign up** nicht sichtbar ist: Öffne direkt https://github.com/join.

![GitHub-Startseite mit markiertem Button Sign up](/content/Assets/m01-l02-gh-01-sign-up-startseite.png)

Ab hier hast du zwei Varianten zur Registrierung. Wähle genau eine:

**Variante A: Registrierung per E-Mail**

4. Trage deine E-Mail-Adresse ein.
5. Erstelle ein sicheres Passwort.
6. Wähle einen Benutzernamen.
7. Folge den angezeigten Schritten.

![GitHub-Registrierungsformular mit Email, Password und Username](/content/Assets/m01-l02-gh-02-sign-up-formular_email.png)


**Variante B: Registrierung per SSO, also Anmeldung über Google, Apple oder einen anderen Anbieter**

4. Wähle auf der Registrierungsseite die SSO-Option deines Anbieters.
5. Melde dich beim gewählten Anbieter an und bestätige die Freigabe für GitHub.
6. Ergänze fehlende Angaben wie Benutzernamen, falls GitHub danach fragt.

![GitHub-Registrierungsformular mit Email, Password und Username](/content/Assets/m01-l02-gh-02-sign-up-formular_sso.png)

Hinweis: Für Accounts, die du nach dem Kurs weiter nutzt, sind beide Varianten möglich. E-Mail und SSO unterscheiden sich vor allem in deiner persönlichen Präferenz und der gewünschten Login-Methode.

![GitHub nach erfolgreichem Login mit sichtbarem Avatar](/content/Assets/m01-l02-gh-04-login-erfolgreich-avatar.png)

### Falls etwas nicht funktioniert

1. Keine Bestätigungs-E-Mail angekommen:
	Prüfe den Spam-Ordner und fordere die E-Mail erneut an.
2. Benutzername ist schon vergeben:
	Wähle eine Variante mit Zusatz (z. B. Zahl oder Bindestrich).
3. Verifizierung klappt nicht:
	Aktualisiere die Seite und starte den Verifizierungsschritt neu.
4. Sign-up-Seite lädt nicht:
	Öffne ein privates Browserfenster oder nutze einen anderen Browser.

### Mini-Check nach der Registrierung

- [ ] Ich kann mich mit meinem GitHub-Account einloggen.
- [ ] Ich sehe mein Profilsymbol oben rechts.
- [ ] Ich habe Zugriff auf mein Profil unter https://github.com/<mein-benutzername>.

![Profil URL](/content/Assets/m01-l02-gh-05-profil-url.png)


### Hinweise

- Der GitHub-Benutzername ist sichtbar.
- Wenn du den Account nach dem Kurs weiter nutzen möchtest, verwende am besten einen eigenen, dauerhaft verfügbaren Account statt des temporären Account von KnOot.
- Wähle einen Benutzernamen, den du auch später im Kurskontext verwenden möchtest.
- Nutze einen Passwortmanager im Browser oder auf deinem Gerät, damit du dein Passwort sicher speichern kannst.
- Hilfe beim Einrichten deines Profils: [GitHub Docs - Dein Profil einrichten](https://docs.github.com/de/get-started/start-your-journey/setting-up-your-profile)

## Kapitel 3: GitHub als Lern- und Nachschlagequelle

GitHub bietet umfangreiche Unterstützung und Lernmöglichkeiten:

- **Offizielle Dokumentation**: Alles, was du über GitHub wissen musst, steht in den [GitHub Docs](https://docs.github.com/de) (auf Deutsch verfügbar, durchsuchbar und sehr gut strukturiert). Ein zuverlässiger Nachschlageort für den gesamten Kurs.
- **Support und Community**: Auf [support.github.com](https://support.github.com/) findest du Artikel zu häufigen Problemen, einen direkten Support-Kanal und die GitHub Community, in der du Fragen stellen und Antworten von anderen Nutzer:innen finden kannst.
- **Lernen und Zertifizierungen**: GitHub bietet eigene Kurse an. Auf [learn.github.com/courses](https://learn.github.com/courses) und [learn.github.com/skills](https://learn.github.com/skills) kannst du gezielt Themen vertiefen und anerkannte GitHub-Zertifizierungen erwerben.
- **Video-Playlist für den Einstieg**: YouTube-Playlist [GitHub for Beginners](https://www.youtube.com/watch?v=r8jQ9hVA2qs&list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f).

![GitHub-Ressourcen](/content/Assets/m01-l02-gh-01-gh-helps.png)



## Quiz: Kurze Verständnisfrage

Frage: Wozu dient GitHub im Kurs hauptsächlich?

- [ ] Als E-Mail-Dienst für Nachrichten an Dozent*innen.
- [x] Als Plattform zum Speichern und Teilen von Code mit Versionsverlauf.
- [ ] Als Video-Lernplattform für Kursinhalte.
- [ ] Als lokales Programm auf deinem Rechner, das nur offline funktioniert.

Erfolg: Richtig! GitHub ist deine Plattform für Code und Zusammenarbeit im Kurs.
Fehler: Nicht ganz. Merke: GitHub ist die Plattform im Web, Git ist das Werkzeug für Versionskontrolle.

## Quiz: Git und GitHub unterscheiden

Frage: Was ist der Unterschied zwischen Git und GitHub?

- [x] Git ist ein Werkzeug für Versionskontrolle, GitHub ist eine Plattform im Web.
- [ ] GitHub ist ein lokales Programm und Git ist eine Website.
- [ ] Git und GitHub sind dasselbe.
- [ ] GitHub wird nur für Videos und Nachrichten verwendet.

Erfolg: Richtig! Git speichert Versionen deiner Arbeit. GitHub macht diese Arbeit im Web sichtbar, teilbar und leichter nutzbar.
Fehler: Nicht ganz. Merke: Git ist das Werkzeug für Versionskontrolle. GitHub ist die Plattform im Web.

## Kapitel 4: Übungs-Repository anlegen

Jetzt legst du dein eigenes Übungs-Repository an. Dieses Repository ist dein persönlicher Arbeitsbereich für den Kurs. Dort kannst du später Aufgaben, Notizen, Code und Lösungen speichern.

### Schritt-für-Schritt: Neues Repository erstellen

1. Wähle **New repository** aus.

![Repository anlegen](/content/Assets/m01-l03-gh-06-repository-anlegen.png)

2. Trage bei **Repository name** einen Namen für dein Repository ein. Beispiel: uebungs-repository-vorname-nachname.

### Hinweis: Verwende beim Namen besser keine Umlaute. 
GitHub unterstützt Umlaute zwar oft, aber in URLs, Terminal-Befehlen, Skripten und bei der Zusammenarbeit mit verschiedenen Tools können Sonderzeichen zu Fehlern oder Verwirrung führen. Nutze deshalb lieber `ae`, `oe`, `ue` und Bindestriche.

### Beschreibung hinzufügen

![Repository anlegen](/content/Assets/m01-l03-gh-07-repository-benennen.png)

3. Ergänze optional eine kurze Beschreibung.

Beispiel:
![Repository anlegen](/content/Assets/m01-l03-gh-08-repository-beschreibung.png)

4. Wähle bei Sichtbarkeit **Private** aus. So ist dein Repository nicht öffentlich sichtbar. Später kann gezielt festgelegt werden, wer Zugriff erhalten soll.

![Repository anlegen](/content/Assets/m01-l03-gh-09create-repository-visibility.png)


5. Aktiviere **Add a README file**. Die README-Datei ist die Startseite deines Repositorys. Dort kannst du später kurz beschreiben, wofür dein Repository gedacht ist.

6. Lasse **.gitignore** und **License** zunächst unverändert.

7. Klicke auf **Create repository**.

![Repository erstellen mit Name, Private und README](/content/Assets/m01-l03-gh-10create-repository-create.png)

![Repository erstellen mit Name, Private und README](/content/Assets/m01-l03-gh-10create-repository-files.png)

### Nach dem Erstellen

Nach dem Klick auf **Create repository** öffnet GitHub dein neues Repository.

Du erkennst, dass es funktioniert hat, wenn:

- der Repository-Name oben sichtbar ist,
- eine Datei namens `README.md` angezeigt wird,
- die URL ungefähr so aussieht:

```text
https://github.com/<dein-benutzername>/uebungs-repository-vorname-nachname
```

![Repository erstellen mit Name, Private und README](/content/Assets/m01-l03-gh-11-new-repository.png)


### Was bedeutet README?

Eine README-Datei ist eine kurze Start- oder Infoseite für ein Repository. Sie erklärt, worum es in dem Projekt geht.

Für den Anfang reicht ein einfacher Text wie:

```markdown
# Kurs-Übungen

Dieses Repository enthält meine Übungen, Notizen und Lösungen aus dem Kurs.
```

Du musst die README jetzt noch nicht bearbeiten. Wichtig ist erst einmal, dass dein Repository erfolgreich angelegt wurde.

### Falls etwas nicht funktioniert

1. **Der Repository-Name ist schon vergeben:**  
   Wähle einen etwas eindeutigeren Namen, zum Beispiel `kurs-uebungen-deinname`.

2. **Der Button Create repository ist nicht aktiv:**  
   Prüfe, ob du einen gültigen Repository-Namen eingetragen hast.

3. **Du findest New repository nicht:**  
   Öffne direkt diese Seite: https://github.com/new

4. **Du bist im falschen Account:**  
   Prüfe oben rechts dein Profilbild und melde dich gegebenenfalls mit dem richtigen Account an.

### Mini-Check nach dem Anlegen

- [ ] Ich habe ein neues Repository erstellt.
- [ ] Mein Repository heißt sinnvoll, zum Beispiel `kurs-uebungen`.
- [ ] Mein Repository ist auf **Private** gestellt.
- [ ] Eine `README.md` wurde angelegt.
- [ ] Ich kann die Repository-URL öffnen.

## Quiz: Kurze Verständnisfrage

Frage: Wofür nutzt du dein eigenes Übungs-Repository im Kurs?

- [ ] Um private E-Mails zu speichern.
- [x] Um Übungen, Notizen, Code und Lösungen im Kurs zu speichern.
- [ ] Um GitHub-Videos anzuschauen.
- [ ] Um mein Passwort zu verwalten.

Erfolg: Richtig! Dein Übungs-Repository ist dein persönlicher Arbeitsbereich für den Kurs.

Fehler: Nicht ganz. Dein Übungs-Repository ist der Ort, an dem du deine Übungen, Notizen, Code und Lösungen speicherst.

## Kurz erklärt: Was ist ein Commit?

Ein Commit ist ein gespeicherter Zwischenstand deiner Änderungen mit einer kurzen Beschreibung.

Wenn du in GitHub auf **Commit changes** klickst, wird genau dieser Stand in der Historie deines Repositorys festgehalten. So kannst du später nachvollziehen, was du wann geändert hast.

Hinweis: In dieser Lektion reicht dieses Grundverständnis. Commit-Strategien und gute Commit-Nachrichten behandeln wir später im Kurs noch ausführlich.

## Übungen zur Lektion

### Übung 1: README als Startseite bearbeiten

Ziel: Dein Übungs-Repository soll direkt verständlich sein.

Aufgabe:


![Übung 1: README im Bearbeitungsmodus](/content/Assets/m01-l02-uebung-01-readme-bearbeiten.png)

1. Öffne die Datei `README.md` in deinem Übungs-Repository.
2. Ergänze eine Überschrift und 2 bis 4 Sätze, was du in diesem Repository sammelst.
3. Füge eine kleine Liste hinzu, zum Beispiel mit `Notizen`, `Übungen`, `Lösungen`.
4. Klicke auf **Commit changes**, damit deine Bearbeitung gespeichert wird.

So füllst du das Fenster **Commit changes** aus:

1. Trage bei Titel eine kurze Nachricht ein, zum Beispiel: `README ergänzt`.
2. Optional: Ergänze im Beschreibungsfeld 1 Satz, was genau du ergänzt hast.
3. Lasse die Änderung auf dem aktuellen Branch (Standardauswahl).
4. Klicke auf **Commit changes**.

![Übung 1: README mit Commit changes speichern](/content/Assets/m01-l02-uebung-01-readme-commit-changes.png)

Mini-Check:

- [ ] Meine README erklärt in einfachen Worten den Zweck meines Übungs-Repositorys.
- [ ] Die README enthält mindestens eine Überschrift und eine Liste.
- [ ] Ich habe meine Änderungen mit **Commit changes** gespeichert.

### Übung 2: Zweite Datei mit Glossar anlegen

Ziel: Wichtige Begriffe aus der Lektion aktiv festhalten.

Wichtig: Lege die Datei mit der Endung `.md` an, also genau als `glossar.md`. Nur so wird sie als Markdown-Datei erkannt und in GitHub korrekt formatiert angezeigt.

Aufgabe:



![Übung 2: Glossar-Datei mit .md-Endung anlegen](/content/Assets/m01-l02-uebung-02-glossar-datei-anlegen.png)

1. Lege eine neue Datei `glossar.md` in deinem Übungs-Repository an.
2. Schreibe mindestens 5 Begriffe aus dieser Lektion hinein, zum Beispiel: `Git`, `GitHub`, `Repository`, `README`, `Commit`.
3. Formuliere zu jedem Begriff eine kurze Erklärung in deinen eigenen Worten.

Mini-Check:

- [ ] Meine Glossar-Datei heißt genau `glossar.md`.
- [ ] Mein Glossar enthält mindestens 5 Begriffe mit eigenen Erklärungen.
- [ ] Ich kann den Unterschied zwischen `Git`, `GitHub` und `Repository` erklären.

### Übung 3: Rückfragen sammeln

Ziel: Offene Punkte früh sichtbar machen, statt sie mitzuschleppen.

Aufgabe:



![Übung 3: Rückfragen-Datei anlegen und ausfüllen](/content/Assets/m01-l02-uebung-03-rueckfragen-datei.png)

1. Lege eine Datei `rueckfragen.md` in deinem Übungs-Repository an.
2. Schreibe mindestens 3 Rückfragen auf, die du nach Lektion 2 noch hast.
3. Markiere jede Frage mit einem Status, z. B. `offen` oder `geklärt`.

Mini-Check:

- [ ] Ich habe mindestens 3 konkrete Rückfragen notiert.
- [ ] Ich kann meine offenen Fragen im Kursgespräch gezielt ansprechen.

### Übung 4: Dozent*in zum Repository einladen

Ziel: Deine Dozentin oder dein Dozent kann dein Übungs-Repository sehen und dir Feedback geben.

Aufgabe:



1. Öffne dein Übungs-Repository auf GitHub.
2. Gehe zu `Settings` > `Collaborators and teams`.
3. Klicke auf `Add people` und trage den GitHub-Benutzernamen deiner Dozentin oder deines Dozenten ein.
4. Sende die Einladung und prüfe, ob der Status als Einladung angezeigt wird.

Mini-Check:

- [ ] Ich finde die Einstellung für Collaborators in meinem Repository.
- [ ] Ich habe eine Einladung an meine Dozentin oder meinen Dozenten gesendet.
- [ ] Ich weiß, warum diese Einladung für Feedback im Kurs wichtig ist.

## Was ist zu tun

1. Wähle eine Registrierungsvariante (E-Mail oder SSO) und erstelle deinen GitHub-Account.
2. Melde dich in GitHub an und prüfe, ob dein Profilbild/Avatar sichtbar ist.
3. Öffne dein Profil unter https://github.com/<mein-benutzername> und prüfe die URL.
4. Lege ein privates Übungs-Repository mit README an.
5. Prüfe, ob Repository-Name, Sichtbarkeit und URL korrekt sind.
6. Bearbeite Übung 1 und überarbeite deine README.
7. Bearbeite Übung 2 und lege dein Glossar an.
8. Bearbeite Übung 3 und notiere deine Rückfragen.
9. Bearbeite Übung 4 und lade deine Dozentin oder deinen Dozenten ein.


## Hilfreiche Links

- [GitHub Docs (Deutsch)](https://docs.github.com/de)
- [Profil einrichten](https://docs.github.com/de/get-started/start-your-journey/setting-up-your-profile)
- [GitHub for Beginners (Playlist)](https://www.youtube.com/watch?v=r8jQ9hVA2qs&list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f)
