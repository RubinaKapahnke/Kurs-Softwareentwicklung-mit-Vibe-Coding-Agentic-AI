# Themen nachlesen oder ergänzen

## Git, Github
- github stammordner ohne VSCode verknüpfen?
- Unterschied lokale branches und github

### github.dev
- VSCode in Web auf github
- GitHub Copilot und Github Copilot Chat muss in VSCode installiert werden
- gitignore erklären?

1. Die .dev-Domain ermöglicht den Zugriff auf eine webbasierte Version von Visual Studio Code direkt innerhalb eines GitHub-Repositories.
2. GitHub Codespaces bietet eine cloudbasierte Entwicklungsumgebung, die es ermöglicht, an einem Repository zu arbeiten, ohne dass eine lokale Installation von Visual Studio Code erforderlich ist.
3. Erweiterungen wie GitHub Copilot können in Visual Studio Code installiert werden, um das Entwicklungserlebnis zu verbessern und eine Integration mit GitHub zu ermöglichen.

Stable Track: Dies ist die ausgereifte, offiziell veröffentlichte Version von Visual Studio Code. Sie erhält in der Regel einmal im Monat ein großes Update und ist für den zuverlässigen, täglichen Einsatz gedacht.

Insiders Track: Dies ist die Entwickler- bzw. Vorabversion ("Bleeding-Edge"). Sie wird fast täglich aktualisiert und enthält die allerneuesten Funktionen und Fehlerbehebungen direkt aus der Entwicklung, kann dafür aber gelegentlich noch Fehler (Bugs) aufweisen.

### key terms
. GitHub CodeSpaces: A development environment in the cloud provided by GitHub, allowing developers to run code and development tools remotely in the browser or connect locally through Visual Studio Code.

2. Dev Container: A configuration file (dev-container.json) that specifies the runtime environment for a Code Space, including the operating system, installed packages, and development tools.

3. Dockerfile: A file used to build a Docker container image, which defines the base operating system and any additional software or dependencies required for the development environment.

4. Linting: The process of statically analyzing source code to detect programming errors, bugs, stylistic errors, and suspicious constructs.

5. Flake8: A Python library that combines the functionality of the PyFlakes, pycodestyle and Mccabe libraries to provide a code linting tool.

6. Python Black: A Python code formatter that automatically reformats Python code to conform to a consistent style.

7. Auto-Save: A feature that automatically saves changes made within a Code Space, ensuring data persistence without the need for manual saving.

8. CodeSpace Timeout: The default 30-minute inactivity period after which a Code Space will be automatically stopped, but data is preserved.

9. CodeSpace Deletion: The default 30-day period after which a Code Space will be automatically deleted if not actively used.

10. Remote Connection: The ability to connect to a Code Space running in the cloud using Visual Studio Code on a local machine, allowing for a seamless development experience.

## shells / terminals
bash vs. powershell



## Developer Alltag
- Unterschiede Package, Library, Programm...

## Technologien
- CSS vs SCSS
- Unterschied Präprozessor und Compiler
- Zusammenspiel SCSS TS Config

## Agenten, AI, etc
- Tools aufnehmen?
    - Agent.ai, Microsoft Agents, Lovable, Claude Code, Antigravity
- Was hat RAG mit Softwareentwicklung zu tun und warum ist es Thema dieses kurses


## Software Architektur
- Was ist Microservicearchitektur vs. Monolythisches System
-

## Allgemeine Sammlung
- was ist CLI
- was ist GUI

## Monster-Files verindern
wenn man der KI viele anweisungen hintereinander gibt passiert in der regel, dass die code files nicht optimiert werden sondern all deine anweisungen als wenn dann müll hintereinander in die files geschrieben werden.
beispiel: erste überschrift größer, nein etwas kleiner, jetzt text kleiner, überschrift zwei größer. in der regel wird das alles als regeln hintereinander geschrieben, statt das die KI vernünftige typographie zu implementieren. wie man das vierhinder (texte ausarbeiten und beispiele zeigen)

## Kurzprojekte und Projektbeispiele einfügen
Für Teilnehmende als übungen kleine Projekte einführen und für ab dem punkt wo es mit dem eigenen projekt losgeht Beispiele auflisten für diejenigen die keine eigene Idee haben.
Inspiraktion: https://roadmap.sh/frontend/projects
              https://roadmap.sh/backend/projects

## Refactioring mit AI / Agents
mit in den Kurs aufnehmen. auch in die kursbeschreibung

# Fremdtexte zur Verarbeitung in den Kursen (Github)

##Erstellen eines Kontos auf GitHub
Erstelle ein persönliches Konto für die ersten Schritte mit GitHub.

Get started
Artikel 2 von 8
Nächster:Hello World
In diesem Artikel
Über Ihr persönliches Konto auf GitHub
Um mit GitHub zu beginnen, müssen Sie ein kostenloses persönliches Konto erstellen und Ihre E-Mail-Adresse verifizieren.

Sie können sich auch bei Google oder Apple authentifizieren – dies sind die unterstützten Social Login-Anbieter, wenn Sie Ihr Konto auf GitHuberstellen. Für iOS-Benutzer führt die Verwendung der sozialen Anmeldung auch dann, wenn Sie die Einstellung "Meine E-Mail-Adressen ausblenden" für Ihr Apple-Konto aktiviert haben, dazu, ein neues GitHub Konto zu erstellen.

Jede Person, die GitHub nutzt, meldet sich mit einem Benutzerkonto an. Ihr Benutzerkonto ist Ihre Identität auf GitHub und hat einen Benutzernamen und ein Profil. Sieh dir beispielsweise das Profil von @octocat an.

Später kannst du die verschiedenen Arten von Konten untersuchen, die GitHub anbietet, und entscheiden, ob du einen Abrechnungsplan benötigst. Weitere Informationen findest du unter Typen von GitHub-Konten und Pläne von GitHub.

Beachte, dass die Schritte in diesem Artikel nicht auf Enterprise Managed Users angewendet werden. Wenn dein GitHub-Konto von deinem Unternehmen für dich erstellt wurde, kannst du diesen Artikel überspringen und mit Hello World fortfahren.

Registrierung für ein neues persönliches Konto
Navigiere zu https://github.com/.
Klicken Sie auf Registrieren.
Alternativ kannst du auf Continue with Google klicken, um dich über ein Social Media-Konto anzumelden.
Folge den Eingabeaufforderungen, um dein kostenloses persönliches Konto zu erstellen.
Während der Registrierung wirst du aufgefordert, deine E-Mail-Adresse zu verifizieren. Ohne eine überprüfte E-Mail-Adresse kannst du keine grundlegenden GitHub-Aufgaben ausführen, z. B. das Erstellen eines Repositorys.

Einige Unternehmen erstellen verwaltete Benutzerkonten für ihre Benutzer. Du kannst dich mit einer E-Mail-Adresse, die bereits für ein verwaltetes Benutzerkonto überprüft wurde, nicht für ein persönliches Konto registrieren.

Wenn du Probleme beim Überprüfen deiner E-Mail-Adresse hast, gibt es einige Schritte zur Problembehandlung, die du ausführen kannst. Weitere Informationen finden Sie unter Deine E-Mail-Adresse verifizieren.

Nächste Schritte
Nachdem du dein persönliches Konto erstellt hast, beginnen wir mit den Grundlagen von GitHub. Im nächsten Tutorial, Hello World, erfährst du mehr über Repositorys und das Erstellen eines Repositorys und erhältst eine Einführung in Konzepte wie Branches, Commits und Pull Requests.
Es wird dringend empfohlen, 2FA für dein Konto zu konfigurieren. 2FA ist eine zusätzliche Sicherheitsebene, die dir helfen kann, dein Konto sicher zu halten. Weitere Informationen finden Sie unter Zwei-Faktor-Authentifizierung konfigurieren.
Weiterführende Lektüre

## Schnellstart für Repositorys (Github)
Erfahren Sie, wie Sie ein neues Repository erstellen und ihre erste Änderung in 5 Minuten committen.

Tool navigation
GitHub CLI
Web browser
In diesem Artikel
Erstellen eines Repositorys
GitHub-Repositorys speichern eine Vielzahl von Projekten. In diesem Leitfaden erstellen Sie ein Repository und committen Ihre erste Änderung.

Wähle in der rechten oberen Ecke einer beliebigen Seite , und klicke dann auf Neues Repository.

Screenshot eines GitHub-Dropdownmenüs mit Optionen zum Erstellen neuer Elemente. Das Menüelement „Neues Repository“ ist in dunklem Orange eingerahmt.
Gib einen kurzen, einprägsamen Namen für das Repository ein. Beispiel: „hello world“.

Screenshot: erster Schritt beim Erstellen eines Repositorys Das Feld „Repositoryname“ enthält den Text „hello-world“ und ist in dunklem Orange eingerahmt.
Füge optional eine Beschreibung deines Repositorys hinzu. Beispiel: „Mein erstes Repository auf GitHub“.

Wähle eine Sichtbarkeitsoption für das Repository aus. Weitere Informationen finden Sie unter Informationen zu Repositorys.

Setzen Sie README auf Ein.

Klicke auf Repository erstellen.

Herzlichen Glückwunsch! Du hast erfolgreich dein erstes Repository erstellt und mit einer README-Datei initialisiert.

Die erste Änderung freigeben
Ein Commit ist wie eine Momentaufnahme aller Dateien in deinem Projekt zu einem bestimmten Zeitpunkt.

Als du dein neues Repository erstellt hast, hast du es mit einer README-Datei initialisiert. README-Dateien bieten Platz, um das Projekt detaillierter zu beschreiben oder weitere Dokumentation hinzuzufügen, z. B. Informationen zum Installieren oder Verwenden deines Projekts. Der Inhalt deiner README-Datei wird automatisch auf der Hauptseite deines Repositorys angezeigt.

Lass uns eine Änderung an der README-Datei festschreiben.

Wähle in der Dateiliste deines Repositorys die Datei README.md aus.

    Screenshot-Verweis im Rohtext: Datei `README.md` in der Repository-Dateiliste.
Klicke zum Öffnen des Datei-Editors oben rechts in der Dateiansicht auf .

Screenshot einer Datei. In der Kopfzeile ist eine Schaltfläche mit Stiftsymbol dunkelorange umrandet.
Gib im Textfeld Informationen zu deiner Person ein.

Klicke oberhalb des neuen Inhalts auf Vorschau.

Screenshot einer Datei im Bearbeitungsmodus über dem Inhalt der Datei befindet sich die orange umrandete Registerkarte „Vorschau“.
Überprüfe die Änderungen, die du an der Datei vorgenommen hast. Wenn du Unterschied anzeigen auswählst, wird der neue Inhalt in Grün angezeigt.

    Screenshot-Verweis im Rohtext: Dateivorschau mit aktivierter Diff-Ansicht.
Klicke auf Änderungen committen.

Gib im Feld „Commitnachricht“ eine kurze, aussagekräftige Commitnachricht ein, die die Änderung beschreibt, die Du an der Datei vorgenommen hast. Du kannst den Commit in der Commit-Mitteilung mehr als einem Autor zuordnen. Weitere Informationen finden Sie unter Einen Commit mit mehreren Autoren erstellen.

Lege unter den Commit-Mitteilungsfeldern fest, ob Du Dein Commit zum aktuellen Branch oder zu einem neuen Branch hinzufügen möchten. Wenn dein aktueller Branch als Standardbranch festgelegt ist, solltest du einen neuen Branch für deinen Commit und dann einen Pull Request erstellen. Weitere Informationen finden Sie unter Erstellen eines Pull Requests.

Screenshot eines GitHub-Pull Requests mit einem Optionsfeld zum direkten Commit an den Mainbranch oder zum Erstellen eines neuen Branchs. Der neue Branch ist ausgewählt.
Klicke auf Änderungen committen oder Änderungen vorschlagen.

Hinweis zum Ablauf:
- Neue Rohtexte nur hier als Eingang sammeln.
- Englische Rohtexte zuerst ins Deutsche uebertragen.
- Inhalte beim Uebertrag in Form und Struktur deutlich umarbeiten (kein satznahes Umschreiben).
- Nach Verarbeitung in Kursdateien den Rohtext wieder entfernen.
- Abschluss immer unter `# Erledigte Themen` protokollieren.

Offene Rohtexte:
- Aktuell keine offenen Rohtexte.

## GitHub Flow (Github)
Befolge den GitHub-Ablauf, um an Projekten zusammenzuarbeiten.

In diesem Artikel
Einführung
GitHub-Flow ist ein schlanker, zweigbasierter Workflow. Der GitHub-Flow ist für alle Benutzer von Vorteil, nicht nur für Entwickler. Hier bei GitHub nutzen wir den GitHub-Flow zum Beispiel für unsere Standortrichtlinie, Dokumentation und Roadmap.

Voraussetzungen
Um dem GitHub-Flow zu folgen, benötigst du ein GitHub-Konto und ein Repository. Weitere Informationen zum Erstellen eines Kontos findest du unter Erstellen eines Kontos auf GitHub. Weitere Informationen zum Erstellen eines Repositorys findest du unter Schnellstart für Repositorys. Weitere Informationen zum Suchen eines vorhandenen Repositorys findest, zu dem du beitragen kannst, findest du unter Möglichkeiten finden, Open Source auf GitHub beizutragen.

Durchlaufen des GitHub-Flows
Tipp

Du kannst alle Schritte des GitHub-Flows über die GitHub-Weboberfläche, Befehlszeile und GitHub CLI oder über GitHub Desktop ausführen. Weitere Informationen zu den Tools, die du zum Herstellen einer Verbindung mit GitHub verwenden kannst, findest du unter Herstellen einer Verbindung mit GitHub.

Branch erstellen
Erstelle einen Branch in deinem Repository. Ein kurzer, beschreibender Branchname ermöglicht es den Projektmitarbeitern, sich auf einen Blick über die laufenden Arbeiten zu informieren. Zum Beispiel: increase-test-timeout oder add-code-of-conduct. Weitere Informationen finden Sie unter Erstellen und Löschen von Branches in deinem Repository.

Indem du einen Branch erstellst, schaffst du einen Raum zum Arbeiten, ohne den Standardbranch zu beeinflussen. Außerdem gibst du den Projektmitarbeitern die Möglichkeit, deine Arbeit zu überprüfen.

Vornehmen von Änderungen
In deinem Zweig kannst du beliebige Änderungen am Repository vornehmen. Weitere Informationen findest du unter Neue Dateien erstellen, Bearbeiten von Dateien, Umbenennen einer Datei, Verschieben einer Datei an einen neuen Speicherort oder Löschen von Dateien in einem Repository.

Dein Branch ist ein sicherer Ort, um Änderungen vorzunehmen. Wenn du einen Fehler machst, kannst du deine Änderungen rückgängig machen oder zusätzliche Änderungen vornehmen, um den Fehler zu korrigieren. Deine Änderungen werden erst dann in den Standardbranch übernommen, wenn du deinen Branch mergst.

Committe deine Änderungen und pushe sie in deinen Branch. Gib jedem Commit eine aussagekräftige Beschreibung, damit du und zukünftige Mitwirkende nachvollziehen können, welche Änderungen der Commit enthält. Zum Beispiel: fix typo oder increase rate limit.

Im Idealfall enthält jeder Commit eine isolierte, vollständige Änderung. Das macht es einfach, deine Änderungen rückgängig zu machen, wenn du dich für einen anderen Ansatz entscheidest. Wenn du zum Beispiel eine Variable umbenennen und einige Tests hinzufügen möchtest, fügst du die Variablenumbenennung in einen Commit und die Tests in einen anderen Commit ein. Wenn du später die Tests beibehalten, aber die Umbenennung der Variablen rückgängig machen möchtest, kannst du den Commit rückgängig machen, der die Umbenennung der Variablen beinhaltet. Wenn du die Variablenumbenennung und die Tests in denselben Commit einfügst oder die Variablenumbenennung auf mehrere Commits verteilst, würde dies den Aufwand für das Rückgängigmachen deiner Änderungen erhöhen.

Durch das Committen und Pushen deiner Änderungen sicherst du deine Arbeit in einem Remotespeicher. Dies bedeutet, dass du von jedem Gerät aus auf deine Arbeit zugreifen kannst. Außerdem können alle Projektmitarbeiter deine Arbeit sehen, Fragen beantworten und Vorschläge oder Beiträge einbringen.

Fahre damit fort, Änderungen zu erstellen und in deinen Branch zu committen und zu pushen, bis du bereit bist, Feedback einzuholen.

Tipp

Erstelle einen separaten Branch für jeden Satz nicht zusammengehöriger Änderungen. Das macht es für die Reviewer einfacher, Feedback zu geben. Außerdem ist es so für dich und zukünftige Projektmitarbeiter einfacher, die Änderungen nachzuvollziehen und sie rückgängig zu machen oder darauf aufzubauen. Zudem gibt es keine Verzögerungen bei deinen anderen Änderungen, falls es bei einem Satz von Änderungen zu einer Verzögerung kommt.

Erstellen eines Pull Requests
Erstelle einen Pull Request, um die Projektmitarbeiter um Feedback zu deinen Änderungen zu bitten. Die Überprüfung von Pull Requests ist so wertvoll, dass einige Repositorys eine Genehmigungsüberprüfung erfordern, bevor Pull Requests zusammengeführt werden können. Wenn du frühes Feedback oder Ratschläge einholen möchtest, bevor du deine Änderungen fertigstellst, kannst du deinen Pull Request als Entwurf markieren. Weitere Informationen finden Sie unter Erstellen eines Pull Requests.

Wenn du einen Pull Request erstellst, fasse in einer Beschreibung zusammen, welche Änderungen durchgeführt werden und welches Problem gelöst wird. Du kannst zur Verdeutlichung Bilder, Links und Tabellen einfügen. Wenn dein Pull Request ein Issue betrifft, verlinke das Issue, damit die am Issue beteiligten Personen über den Pull Request informiert werden und umgekehrt. Bei einer Verknüpfung mit einem Schlüsselwort wird das Issue automatisch geschlossen, wenn der Pull Request gemergt wird. Weitere Informationen findest du unter Grundlegende Schreib- und Formatierungssyntax und Einen Pull Request zu einem Issue verknüpfen.

Du kannst nicht nur den Text des Pull Requests ausfüllen, sondern auch Kommentare zu bestimmten Zeilen des Pull Requests hinzufügen, um die Reviewer ausdrücklich auf etwas hinzuweisen.

Dein Repository kann so konfiguriert werden, dass es automatisch einen Review von bestimmten Teams oder Benutzern anfordert, wenn ein Pull Request erstellt wird. Darüber hinaus kannst du manuell per Erwähnung (@mention) oder bei bestimmten Personen oder Teams einen Review anfordern.

Wenn dein Repository so konfiguriert ist, dass Überprüfungen für Pull Requests durchgeführt werden, werden dir alle Überprüfungen angezeigt, die bei deinem Pull Request fehlgeschlagen sind. Das hilft dir, Fehler zu finden, bevor du deinen Branch zusammenführst. Weitere Informationen finden Sie unter Informationen zu Statuschecks.

Ansprechen von Reviewkommentaren
Reviewer sollten Fragen stellen, Kommentare abgeben und Vorschläge machen. Reviewende können den gesamten Pull Request kommentieren oder Kommentare zu bestimmten Zeilen oder Dateien hinzufügen. Du und die Reviewer können Bilder oder Codevorschläge einfügen, um Kommentare zu verdeutlichen. Weitere Informationen finden Sie unter Änderungen in Pull Requests überprüfen.

Du kannst als Reaktion auf die Reviews weitere Änderungen committen und pushen. Dein Pull Request wird automatisch aktualisiert werden.

Führe deinen Pull-Request zusammen
Sobald dein Pull Request genehmigt wurde, kannst du ihn zusammenführen. Dabei wird dein Branch automatisch zusammengeführt, sodass deine Änderungen im Standardbranch erscheinen. GitHub speichert den Verlauf der Kommentare und Commits im Pull Request, damit zukünftige Mitwirkende deine Änderungen nachvollziehen können. Weitere Informationen finden Sie unter Einen Pull Request zusammenführen.

GitHub informiert dich, ob dein Pull Request Konflikte aufweist, die vor dem Zusammenführen aufgelöst werden müssen. Weitere Informationen finden Sie unter Mergekonflikte beheben.

Die Schutzeinstellungen für den Branch können das Mergen blockieren, wenn dein Pull Request bestimmte Anforderungen nicht erfüllt. Du brauchst z. B. eine bestimmte Anzahl genehmigender Reviews oder ein genehmigendes Review von einem bestimmten Team. Weitere Informationen finden Sie unter Informationen zu geschützten Branches.

Lösche deinen Branch
Nachdem Sie Ihren Pull Request zusammengeführt haben, löschen Sie Ihren Branch. Dies zeigt an, dass die Arbeit an dem Zweig abgeschlossen ist und verhindert, dass du oder andere versehentlich alte Zweige verwenden. Weitere Informationen finden Sie unter Branches in einem Pull Request löschen und wiederherstellen.

Du musst keine Angst haben, Informationen zu verlieren. Ihre Pull-Anfrage und die Commit-Historie werden nicht gelöscht. Du kannst deinen gelöschten Branch jederzeit wiederherstellen oder bei Bedarf deinen Pull Request zurücksetzen.

## Kursinhalte AI Agent Specialist (Haufe akademie)
### Grundlagen AI Agenten
Agent vs. Workflow vs. LLM: Erste fundamentale Abgrenzung. Wann sprechen wir von einem Chatbot, wann von einer Automatisierung und wann von einem echten Agenten?
Marktübersicht & Einordnung: Eine erste Orientierung im Dschungel der Tools (Agent.ai, Microsoft Agents, Lovable, Claude Code, Antigravity). Wir sortieren den Hype.

Deep Dive Verständnis: Warum Agenten externe Werkzeuge (Tool-Use) und ein Langzeitgedächtnis (Memory bspw. Pinecone) benötigen, um komplexe Aufgaben zu löse
Glossary & Tech-Stack: Detaillierte Klärung der Kernbegriffe und Tools (LangChain, Make, Context, Vektordatenbanken).

Low-Code vs. Code: Eine Entscheidungshilfe für den Start. Analyse, wann Low-Code (Make) ausreicht und wann Engineering (LangChain> Python/TS) nötig ist.
Wissens-Check & Hausaufgabe für Webinar 2: Überlege dir einen Agenten-Anwendungsfall für das 2. Webinar.

Strategie & Use Cases:
Strategie, Business Value & Context Engineering
Entscheidungsmatrix: Differenzierung in der Praxis – ist mein Case ein Assistent, ein Workflow oder ein Agent?
Business Model Canvas für Agenten: Erarbeitung von Ziele, benötigte Tools, Kontextdaten und Berechnung des ROI. Validierung des eigenen Business Case.
Context Engineering (Hands-on):

Context > Prompt: Warum das Engineering des Kontexts wichtiger ist als „Prompt Magic“.
Live-Building: Zusammen mit dem Trainer baut ihr als Lerngruppe live das „Gehirn“ eines Agenten (System Prompts + Kontextdaten).
Strukturierung: System-Prompts schreiben und definieren, welches Wissen der Agent benötigt.

### Vom Konzept zum lauffähigen KI Agenten
Orientierung: Was einen Agenten ausmacht und wie er sich vom Assistenten unterscheidet.
Architektur-Entscheidungen: Single-Agent, Multi-Agent, Agentic RAG im Vergleich.
Patterns verstehen: Wann RAG, wann Tools, wann Webhooks – und wann Kombinationen sinnvoll sind.
Kontext-Design: Prompt-Komposition, Memory-Strategien und Guardrails für stabiles Agent-Verhalten.
Business Problem definieren: Shared Language entwickeln, Stakeholder identifizieren, Erfolg messbar machen.
Gruppenübung: Definiere deinen eigenen Agenten mit Ziel, Nutzer:innen, Input/Output, Erfolgskriterien und Grenzen.
Agent Design & Canvas

Scope finalisieren: Den eigenen Agent-Entwurf aus Webinar 1 schärfen und abgrenzen.
Tool-Auswahl: Relevante Tools und APIs für die Umsetzung identifizieren und dokumentieren.
Agent-Canvas erstellen: 1-seitiges Konzeptdokument nach Vorlage – Ziel, Architektur, Schnittstellen, Risiken.
Vorbereitung Build-Phase: Technische Voraussetzungen klären, n8n-Zugang einrichten.
Abgabe: Agent-Canvas vor Webinar 2
n8n Basics für Agents: Workflows anlegen, Webhooks einrichten, erste Automatisierungen bauen.
Tool-Anbindung: Externe APIs, Files und Repositories integrieren.
Agentic Orchestration: Planungsschritte, Sub-Tasks und Kontrollfragen einbauen.
Beobachten vs. Handeln: Wann greift der Agent ein – und wann wartet er?
Troubleshooting: Logging, Monitoring und typische Fehlerquellen in der Praxis.
Hands-on: Jede Gruppe baut ihren Agenten mit mindestens zwei externen Tools – erste Demo am Ende.
Agent Refinement & Testing

Prototyp erweitern: Zweite Funktion oder Workflow hinzufügen.
RAG-Integration: Wissensbasis anbinden und testen.
Testprompts entwickeln: Typische Nutzerfälle durchspielen und dokumentieren.
Fehleranalyse: Edge Cases identifizieren, Logging auswerten, Verbesserungen ableiten.
Dokumentation: Technische Umsetzung und offene Punkte für Webinar 3 festhalten.
Abgabe: Laufender Prototyp vor Webinar 3
UX & Autonomiegrad: Wie viel Automation macht Sinn? Kontrollfragen, Risiko-Checks, Safety Loops.
Qualitätsmessung: KPI-System aufbauen – Accuracy, Task-Erfolg, Zeitgewinn messbar machen.
Benchmarks & Testing: Testprompts systematisch einsetzen, Ergebnisse bewerten.
Final Build Sprint: Letzte Anpassungen, Review der Erfolgskriterien.
Pitch Session: Jede Gruppe präsentiert ihren Agenten inkl. Value und Learnings

## Produktive KI Agenten-Workflows mit n8n

Agenten sind keine besseren Workflows – sie sind Architekturen mit Entscheidung, Verantwortung und Kontrolle. Dieser Kurs vermittelt, wie KI-Agenten mit n8n praxisnah und produktionsorientiert umgesetzt werden können. Du lernst klassische Workflows systematisch um agentische Architekturen zu erweitern – vom einfachen Single-Agent mit Tool-Use über entscheidungsbasierte Orchestrierungslogiken bis hin zu kontrollierten Agentensystemen mit menschlichen Kontrollpunkten. Ziel ist es, reale Geschäftsprozesse mit KI-Agenten nachvollziehbar, kontrolliert und verantwortungsvoll zu automatisieren.

Tool vs. KI-Assistent vs. Workflow vs. Agent
Single-Agent-Architektur als Einstieg
Entscheidungsagenten und entscheidungsbasierte Orchestrierung (Supervisor-Logik) im Überblick
Überblick n8n und AI-Agent-Node
Single-Agent-Systeme umsetzen

n8n-Grundlogik und Datenfluss
Aufbau eines einfachen Single-Agent-Systems
Erste agentische Entscheidungen ohne Tool-Use
Übung: Aufbau eines eigenen Single-Agent-Workflows
Agenten mit Tool-Use und Memory

Agenten mit externen Tools
Memory und Zustandslogik
Entscheidungsagenten zur Pfadsteuerung
Übung: Erweiterung des Agenten um Tool-Use und Kontext

Einfache Agenten vs. agentische Orchestrierung
Delegation von Aufgaben an spezialisierte Teilprozesse
Human-in-the-Loop als Governance-Element
Eigene Agentenarchitektur entwickeln

Auswahl eines Use Cases
Definition von Agentenzielen, Rollen und Kontrollpunkten
Umsetzung eines orchestrierten Agenten-Workflows
Qualität, Tests und Kontrolle

Fehlerhandling und Fallback-Strategien
Testfälle für agentische Systeme
Human-in-the-Loop und Freigabeprozesse

### Programmatische KI-Agentensysteme mit Claude Code und LangChain
Dieser Kurs vertieft den Aufbau KI-basierter Agentensysteme auf Code-Ebene. Du entwickelst eigene Agenten mit Python, LangChain und Claude Code, lernst agentische Architekturen systematisch umzusetzen und verstehest die Unterschiede zu Low-Code-Ansätzen wie n8n. Der Fokus liegt auf Vibe Coding, Kontrolle, Erweiterbarkeit sowie dem stabilen Betrieb agentischer Systeme im Unternehmenskontext.
Technisches Setup einrichten
Webinar
1 h
Zur Unterstützung gibt es einen technischen Vorbereitungstermin vor dem ersten inhaltlichen Webinar.

In diesem Termin wird gemeinsam:

Claude Code installiert
die Entwicklungsumgebung geprüft
ein erster Test-Agent ausgeführt
Für die Teilnahme an diesem Kurs sind folgende Voraussetzungen erforderlich:

Rechner mit Administratorrechten, um Software lokal installieren zu können
Möglichkeit, Claude Code (CLI) lokal zu installieren
Eigenen Claude-Account (API-Zugang) anlegen und konfigurieren
Interesse an Programmierung und/oder Python
Bereitschaft, die technische Einrichtung vor Kursbeginn abzuschließen

Einstieg in programmatische Agenten

Verständnis aufbauen: Agent ≠ Workflow
Warum Code für Agenten notwendig wird
Einführung in Claude Code und Vibe Coding
Überblick LangChain und agentische Grundbausteine

Erster einfacher LangChain-Agent
Übung: Aufbau eines ersten Single-Agenten in Python
Agenten mit Tools und Memory

Tools als Python-Funktionen
Memory und Zustandslogik
Unterschiede zu Tool-Use und State in n8n
Übung: Erweiterung des Agenten um Tool-Use und Kontext

Agent-zu-Agent-Kommunikation und Rollenagenten

Rollenbasierte Agenten
Kommunikation zwischen Agenten
Delegation von Aufgaben
Live-Coding: Zusammenarbeit mehrerer Agenten

Eigene Agentenarchitektur umsetzen

Planner–Execute-Architektur
Supervisor-Agenten
Koordination und Zustandsmanagement
Übung: Aufbau eines einfachen Multi-Agenten-Systems
Qualität, Tests und Betrieb

Fehlerhandling und Abbruchkriterien
Tests, Logging und einfache Monitoring-Ansätze
Betrieb agentischer Systeme im Unternehmenskontext
Human-in-the-Loop im Code
Übung: Agent bewusst scheitern lassen und stabilisieren


# Erledigte Themen 

## 2026-05-09 - Version Control und GitOps aus Fremdtexten ueberfuehrt
- Summary:
    - Allgemeine Grundlagen zu Version Control und GitOps in die Git-Library uebernommen (paraphrasiert, einsteigerfreundlich).
    - Kursspezifische Einordnung fuer Modul 01 ergaenzt, inklusive Bruecke zu spaeteren Betriebsmodulen.
    - Wiederkehrender Prompt fuer Fremdtext-Verarbeitung und Governance-Regel im Repo angelegt.
- Quelle:
    - Atlassian: "What is version control?"
    - Atlassian: "GitOps"
- Eingearbeitet in:
    - `course/course-library/04-git/04-version-control-und-gitops-grundlagen.md`
    - `course/kursmodule/01-arbeitsumgebung-dokumentation-versionsverwaltung/04-version-control-und-gitops-im-kurs.md`
    - `.github/prompts/course-dev-fremdtexte-verarbeiten.prompt.md`
    - `AGENTS.md`