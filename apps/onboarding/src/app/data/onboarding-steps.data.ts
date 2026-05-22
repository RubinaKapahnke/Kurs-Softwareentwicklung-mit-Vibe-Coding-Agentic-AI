import { OnboardingStep } from '../models/onboarding.models';

export const ONBOARDING_STEPS: ReadonlyArray<OnboardingStep> = [
  {
    id: 1,
    title: 'So laufen Kurs und Module ab',
    goal: 'Du verstehst den Ablauf und weißt, wie es nach dem Onboarding weitergeht.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: '',
    lessonFlow: {
      title: 'Ablauf im Überblick',
      finishLabel: 'Lektion abgeschlossen',
      disableFinishAction: true,
      slides: [
        {
          type: 'content',
          title: 'Wie der Kurs aufgebaut ist',
          sections: [
            {
              heading: 'Kursablauf im Überblick',
              orderedItems: [
                'Du startest mit Grundlagen.',
                'Die Inhalte sind in Meilensteine aufgeteilt.',
                'Danach vertiefst du einen Schwerpunkt.',
                'Zum Abschluss setzt du ein eigenes Projekt um.'
              ]
            },
            {
              heading: 'So funktioniert dieses Kurs-Tool',
              orderedItems: [
                'Oben siehst du deinen Fortschritt über alle Schritte.',
                'Jeder Schritt enthält Teilaufgaben, die du einzeln abhaken kannst.',
                'Sind alle Teilaufgaben fertig, markierst du den Schritt als erledigt.',
                'Mit "Weiter" und "Zurück" wechselst du zwischen den Schritten.',
                'Offene Punkte kannst du später nachholen.'
              ]
            },
            {
              heading: 'Wichtig für den Ablauf',
              tone: 'highlight',
              paragraphs: [
                'Du kannst in den Steps springen.',
                'Da sie aufeinander aufbauen, ist es sinnvoll, sie der Reihe nach abzuarbeiten.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Was das Modul Onboarding ist',
          sections: [
            {
              paragraphs: [
                'Im Onboarding richtest du deine Arbeitsumgebung ein.',
                'Dazu gehört alles, was du für den Kursstart brauchst: dein Zugang, dein eigener Übungsbereich und die Verbindung zu den gemeinsamen Kursinhalten.',
                'Alle Begriffe und Schritte lernst du nacheinander im Modul.'
              ]
            },
            {
              heading: 'Bestandteile des Moduls Onboarding',
              orderedItems: [
                'GitHub-Account anlegen und erste Übungen im Browser machen.',
                'VS Code und Git installieren.',
                'Dein Repository lokal bedienen und Versionierung üben.',
                'Kurs-Repository klonen und Modul 2 starten.'
              ]
            },
            {
              tone: 'highlight',
              paragraphs: [
                'Keine Sorge: Auch wenn du jetzt noch nicht weißt, was sich hinter diesen Begriffen verbirgt, ist nach dem Onboarding vieles klarer. Versprochen!'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: 'GitHub-Account anlegen',
    goal: '',
    tasks: [
      'GitHub-Account auf github.com erstellen',
      'Sicheres Passwort setzen',
      'Zwei-Faktor-Authentifizierung (2FA) aktivieren',
    ],
    fallbackHelp: [],
    successCriterion: '',
    resources: [
      {
        label: 'GitHub',
        href: 'https://github.com'
      },
      {
        label: 'Video: Was ist GitHub?',
        href: 'https://www.youtube.com/watch?v=0jzjz4MZ4ZU&t'
      },
      {
        label: 'GitHub Docs: Account erstellen',
        href: 'https://docs.github.com/de/get-started/start-your-journey/creating-an-account-on-github'
      },
      {
        label: 'GitHub Dokumentation (Deutsch)',
        href: 'https://docs.github.com/de'
      },
      {
        label: 'GitHub Support',
        href: 'https://support.github.com'
      },
      {
        label: 'GitHub Community',
        href: 'https://github.com/orgs/community/discussions'
      }
    ],
    markdownSource: '/content/step-02/lektion-inhalte.md',
    lessonFlow: {
      title: 'GitHub-Account anlegen',
      continueLabel: 'Weiter',
      finishLabel: 'Weiter im Schritt',
      slides: [
        {
          type: 'content',
          title: 'Was ist GitHub?',
          sections: [
            {
              paragraphs: [
                'GitHub ist eine Plattform im Web, auf der du Code speichern, versionieren und teilen kannst. Stell es dir wie eine Wolke für deinen Code vor - mit eingebautem Änderungsverlauf.'
              ]
            },
            {
              heading: 'Warum brauchen wir GitHub im Kurs?',
              orderedItems: [
                'Dein eigenes Übungs-Repository liegt auf GitHub - von dort aus arbeitest du.',
                'Das gemeinsame Kurs-Repository liegt ebenfalls auf GitHub - dort findest du Aufgaben und Lernmaterial.',
                'Die Trainerin sieht deine Commits und kann dir Feedback geben.'
              ]
            },
            {
              tone: 'highlight',
              paragraphs: [
                'GitHub ist kostenlos nutzbar. Du brauchst nur einen Account.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Account erstellen - Schritt für Schritt',
          sections: [
            {
              orderedItems: [
                'Öffne github.com in deinem Browser.',
                'Klick auf "Sign up" (oben rechts).',
                'Gib deine E-Mail-Adresse ein und wähle ein Passwort.',
                'Wähle einen Benutzernamen - dieser ist im Kurs für andere sichtbar.',
                'Bestätige deine E-Mail-Adresse über den Link in der Bestätigungsmail.',
                'Fertig - du bist jetzt auf GitHub.'
              ]
            },
            {
              heading: 'Hinweis zum Benutzernamen',
              paragraphs: [
                'Dein GitHub-Benutzername ist öffentlich sichtbar - auch für andere Kursteilnehmende. Wähle einen Namen, mit dem du dich wohlfühlst.'
              ]
            },
            {
              heading: 'Wichtiger Hinweis zur E-Mail-Adresse',
              paragraphs: [
                'Wenn du eine KnOot E-Mail-Adresse hast, denke daran: Diese wird nach den Kursen deaktiviert.',
                'Wenn du dein Repository dauerhaft behalten willst - wovon auszugehen ist - verwende lieber eine E-Mail-Adresse, die in deinem Besitz bleibt.'
              ]
            }
          ]
        },
        {
          type: 'quiz',
          title: 'Kurze Verständnisfrage',
          prompt: 'Wozu dient GitHub im Kurs hauptsächlich?',
          options: [
            { id: 'a', label: 'Als E-Mail-Dienst für Nachrichten an die Trainerin.', isCorrect: false },
            { id: 'b', label: 'Als Plattform zum Speichern und Teilen von Code mit Versionsverlauf.', isCorrect: true },
            { id: 'c', label: 'Als Video-Lernplattform für Kursinhalte.', isCorrect: false }
          ],
          successMessage: 'Richtig! GitHub ist deine Plattform für Code und Zusammenarbeit im Kurs.',
          errorMessage: 'Nicht ganz. GitHub ist eine Plattform für Code - mit eingebautem Versionsverlauf und Zusammenarbeit.'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Eigenes Übungs-Repository anlegen',
    goal: 'Du erstellst dein erstes eigenes Repository auf GitHub - hier machst du alle Übungen.',
    tasks: [
      'Lege auf GitHub ein neues Repository an.',
      'Wähle einen Namen wie mein-vibe-coding, stelle die Sichtbarkeit auf Private und aktiviere die README-Datei.'
    ],
    fallbackHelp: [
      {
        title: 'Das „+" fehlt oben rechts',
        detail: 'Stelle sicher, dass du eingeloggt bist. Das + ist oben rechts in der GitHub-Toolbar.'
      },
      {
        title: 'Repository-Name ist vergeben',
        detail: 'Füge einfach eine Zahl hinzu, z. B. mein-vibe-coding-2025.'
      }
    ],
    successCriterion: 'Dein Repository ist auf github.com angelegt und enthält eine README.md.',
    markdownSource: '/content/step-03/lektion-inhalte.md',
    lessonFlow: {
      title: 'Ein GitHub-Repository erstellen',
      continueLabel: 'Weiter',
      finishLabel: 'Zu den Aufgaben',
      slides: [
        {
          type: 'content',
          title: 'Dein erstes eigenes Repository',
          sections: [
            {
              paragraphs: [
                'Ein Repository ist dein persönlicher Arbeitsbereich auf GitHub. Dort speicherst du alle deine Lösungen zu Kursübungen mit vollständigem Änderungsverlauf.'
              ]
            },
            {
              heading: 'Warum brauchst du dein eigenes Repository?',
              orderedItems: [
                'Das Kurs-Repository bleibt zentral - dort liegt das Lernmaterial und die Aufgaben.',
                'Dein eigenes Repository ist dein privater Workspace zum Experimentieren und Lernen.',
                'Hier machst du deine Übungen, speicherst deine Lösungen und dokumentierst deinen Fortschritt.',
                'Die Trainerin kann deine Commits sehen und dir Feedback geben.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Schritt 1 und 2: Einloggen und Repository erstellen',
          sections: [
            {
              heading: 'Schritt 1: GitHub öffnen und einloggen',
              orderedItems: [
                'Öffne github.com in deinem Browser.',
                'Melde dich mit deinem Account an (oben rechts: „Sign in").'
              ]
            },
            {
              heading: 'Schritt 2: Neues Repository erstellen',
              orderedItems: [
                'Klick auf dein Profil-Icon oben rechts.',
                'Wähle „New repository" aus.',
                'Oder direkt: github.com/new'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Schritt 3: Repository ausfüllen',
          sections: [
            {
              paragraphs: [
                'Repository name: vibe-coding-uebungen (oder mein-vibe-coding)',
                'Description (optional): Meine Übungslösungen für den Vibe Coding Kurs',
                'Sichtbarkeit: Private (nur du und die Trainerin sehen es)',
                'Initialize with README: Häkchen setzen'
              ]
            },
            {
              tone: 'highlight',
              paragraphs: [
                'Die README ist wichtig. Ohne README wirkt das Repository für Einsteiger*innen oft leer und unklar.'
              ]
            },
            {
              heading: 'Wichtig: Sichtbarkeit und Copyright',
              paragraphs: [
                'Du kannst dein Repository als Private (nur du und eingeladene Personen) oder Public (für alle sichtbar) erstellen.'
              ]
            },
            {
              heading: 'Wenn dein Repository Public wird',
              orderedItems: [
                'Du darfst KEINE Kursinhalte aus diesem Kurs (Knoot Academy Copyright) 1:1 duplizieren oder veröffentlichen.',
                'Du kannst deine LÖSUNGEN und deinen EIGENEN CODE veröffentlichen, den du im Kurs entwickelst.',
                'Nutze ein Lizenzmodell wie Creative Commons (CC) oder Open Source (MIT, Apache 2.0) um klar zu machen, unter welchen Bedingungen andere deine Arbeit nutzen dürfen.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Schritt 4: Repository erstellen',
          sections: [
            {
              orderedItems: [
                'Klick auf den grünen Button „Create repository".',
                'Fertig - dein Repository ist erstellt!'
              ]
            },
            {
              heading: 'Was siehst du jetzt?',
              orderedItems: [
                'Den Namen oben (z. B. vibe-coding-uebungen)',
                'Eine Dateiübersicht mit README.md',
                'Den grünen „Code"-Button (brauchst du später zum Clonen)'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Kurzcheck vor dem nächsten Schritt',
          sections: [
            {
              orderedItems: [
                'Repository wurde erstellt',
                'Sichtbarkeit steht auf Private',
                'README ist vorhanden'
              ]
            },
            {
              tone: 'highlight',
              paragraphs: [
                'Dein Repository ist bereit. Im nächsten Schritt lädst du die Trainerin als Collaborator ein.'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Trainerin einladen',
    goal: 'Du gibst der Trainerin Zugriff auf dein Repository, damit sie deine Übungen sehen und freigeben kann.',
    tasks: [
      'Öffne die Settings deines Repositories auf GitHub.',
      'Gehe zu Collaborators und sende eine Einladung an RubinaKapahnke.',
      'Stelle sicher, dass dein Repository Private ist. Die Trainerin wird als Collaborator eingeladen und erhält dann Zugriff.'
    ],
    fallbackHelp: [
      {
        title: '"Collaborators" nicht sichtbar',
        detail: 'Du musst Owner des Repositories sein. Prüfe, ob du in deinem eigenen Repository bist - nicht im Kurs-Repository.'
      },
      {
        title: 'Profil erscheint nicht beim Tippen',
        detail: 'Tippe den Benutzernamen vollständig: RubinaKapahnke (https://github.com/RubinaKapahnke) - Groß-/Kleinschreibung beachten.'
      }
    ],
    successCriterion: 'Die Einladung wurde gesendet.'
  },
  {
    id: 5,
    title: 'Erste Übungen im eigenen Repository',
    goal: 'Du machst deine ersten GitHub-Aktionen direkt im Browser - ohne lokale Installation.',
    tasks: [
      'Lege die Datei uebung-01.md in deinem Repository an und committe sie.',
      'Bearbeite die README.md und ergänze eine Zeile über dich.',
      'Prüfe, dass beide Commits in der Commit-Historie deines Repositories sichtbar sind.'
    ],
    fallbackHelp: [
      {
        title: 'Ich sehe kein „Add file"',
        detail: 'Gehe zur Hauptseite deines Repositories (Code-Tab). Der Button ist direkt über der Dateiliste.'
      },
      {
        title: 'Commit-Button ist ausgegraut',
        detail: 'Füge zuerst Inhalt in die Datei ein - leere Dateien können nicht committet werden.'
      }
    ],
    successCriterion:
      'Dein Repository enthält mindestens 2 Commits. Die Trainerin kann sie sehen und gibt grünes Licht für Schritt 6.'
  },
  {
    id: 6,
    title: 'Was ist VS Code?',
    goal: 'Du verstehst, was VS Code ist und warum wir es im Kurs einsetzen.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: '',
    lessonFlow: {
      title: 'Mini-Lektion: Was ist VS Code?',
      continueLabel: 'Weiter',
      finishLabel: 'Lektion abgeschlossen',
      slides: [
        {
          type: 'content',
          title: 'Ein Editor - und noch viel mehr',
          sections: [
            {
              paragraphs: [
                'VS Code (Visual Studio Code) ist ein kostenloses Programm von Microsoft, das du auf deinem Rechner installierst. Es sieht auf den ersten Blick aus wie ein einfacher Text-Editor - aber darunter steckt eine vollständige Entwicklungsumgebung.'
              ]
            },
            {
              heading: 'Was macht VS Code besonders?',
              orderedItems: [
                'Du siehst alle Dateien deines Projekts in einer übersichtlichen Baumstruktur.',
                'Ein eingebautes Terminal erspart dir den Wechsel in ein separates Fenster.',
                'Erweiterungen (Extensions) machen aus VS Code ein KI-Assistenzsystem, einen Git-Client und vieles mehr.',
                'GitHub Copilot ist direkt integrierbar - das nutzen wir im Kurs intensiv.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Warum nutzen wir es im Kurs?',
          sections: [
            {
              paragraphs: [
                'In echten Softwareprojekten ist VS Code das meistgenutzte Werkzeug - quer durch alle Branchen und Programmiersprachen.'
              ],
              tone: 'highlight'
            },
            {
              paragraphs: [
                'Das heißt: Was du hier lernst, ist direkt übertragbar. Du arbeitest mit denselben Werkzeugen wie professionelle Entwicklerinnen und Entwickler - vom ersten Tag an.'
              ]
            }
          ]
        },
        {
          type: 'quiz',
          title: 'Schnell-Check',
          prompt: 'Was ist VS Code?',
          instruction: 'Wähle die treffendste Aussage aus.',
          options: [
            {
              id: 'editor',
              label: 'Ein kostenloser Code-Editor mit Terminal, Extensions und KI-Integration',
              isCorrect: true
            },
            {
              id: 'browser',
              label: 'Ein Browser zum Anzeigen von Webseiten',
              isCorrect: false
            },
            {
              id: 'git',
              label: 'Ein Programm zum Verwalten von Git-Repositories',
              isCorrect: false
            },
            {
              id: 'compiler',
              label: 'Ein Compiler, der Code in ausführbare Programme umwandelt',
              isCorrect: false
            }
          ],
          successMessage: 'Genau. VS Code ist unser zentrales Arbeitsgerät im Kurs - Editor, Terminal und KI-Assistent in einem.',
          errorMessage: 'Nicht ganz. VS Code ist ein Editor, der weit mehr kann als nur Text anzeigen - Terminal, Extensions und KI-Integration inklusive.'
        }
      ]
    }
  },
  {
    id: 7,
    title: 'VS Code installieren',
    goal: 'Du installierst VS Code auf deinem Rechner und öffnest es zum ersten Mal.',
    tasks: [
      'Lade VS Code von code.visualstudio.com herunter.',
      'Führe den Installer aus (alle Standardoptionen übernehmen).',
      'Öffne VS Code und stelle sicher, dass es startet.'
    ],
    fallbackHelp: [
      {
        title: 'Welche Version soll ich herunterladen?',
        detail: 'Windows: den großen „Download for Windows“-Button. Mac: „Download for Mac“. Lass dich nicht von den Varianten (User Installer, System Installer, ARM64) verwirren - der Hauptbutton wählt automatisch die richtige Version.'
      },
      {
        title: 'VS Code öffnet sich nicht',
        detail: 'Starte deinen Rechner neu und versuche es erneut. Wenn das Problem bleibt, versuche den Installer erneut als Administrator auszuführen (Windows: Rechtsklick → „Als Administrator ausführen").'
      }
    ],
    successCriterion: 'VS Code ist installiert und öffnet sich ohne Fehler.',
    desktopHint: [
      'Führe diesen Schritt nach Möglichkeit an einem Laptop oder Desktop-Rechner aus.',
      'Download, Installation und die ersten Prüfungen sind dort deutlich einfacher als auf dem Smartphone.'
    ],
    resources: [
      {
        label: 'VS Code Download',
        href: 'https://code.visualstudio.com/'
      }
    ]
  },
  {
    id: 8,
    title: 'VS Code installieren',
    goal: 'Du installierst VS Code auf deinem Rechner, öffnest den Extension-Bereich und installierst GitHub Copilot sowie GitHub Copilot Chat.',
    tasks: [
      'Installiere VS Code lokal auf deinem Rechner.',
      'Richte die wichtigsten Einstellungen und Erweiterungen für den Kurs ein.',
      'Prüfe, dass Terminal und Git in VS Code funktionieren.'
    ],
    fallbackHelp: [],
    successCriterion: 'VS Code ist installiert, startet ohne Fehler und sowohl GitHub Copilot als auch GitHub Copilot Chat sind in VS Code installiert.',
    resources: [
      {
        label: 'VS Code Setup',
        href: 'https://code.visualstudio.com/docs/setup/setup-overview'
      },
      {
        label: 'VS Code Extensions',
        href: 'https://code.visualstudio.com/docs/editor/extension-marketplace'
      }
    ]
  },
  {
    id: 9,
    title: 'Was ist Git?',
    goal: 'Du verstehst, warum Versionskontrolle wichtig ist und was Git daran besser loest als manuelle Dateikopien.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: '',
    resources: [
      {
        label: 'InterGit – Interaktives Git-Visualisierungstool',
        href: 'https://inter-git.com/'
      }
    ]
  },
  {
    id: 10,
    title: 'Git installieren',
    goal: 'Du installierst Git auf deinem Rechner und prüfst es im Terminal.',
    tasks: [
      'Git herunterladen und installieren.',
      'In VS Code ein Terminal öffnen.',
      'git --version ausführen.'
    ],
    fallbackHelp: [
      {
        title: 'git --version liefert Fehler',
        detail: 'Starte VS Code nach der Git-Installation komplett neu (schließen und wieder öffnen).'
      },
      {
        title: 'Terminal nicht sichtbar in VS Code',
        detail: 'Menü Terminal → Neues Terminal. Oder Tastenkombination Strg+` (Windows) / Ctrl+` (Mac).'
      }
    ],
    successCriterion: 'git --version zeigt eine gültige Versionsnummer.',
    desktopHint: [
      'Dieser Schritt braucht einen Rechner mit installierbarem Git und einem VS-Code-Terminal.',
      'Wenn du gerade mobil liest, nutze diesen Schritt später an deinem Rechner weiter.'
    ],
    resources: [
      {
        label: 'Git Download',
        href: 'https://git-scm.com/downloads'
      },
      {
        label: 'InterGit – Interaktives Git-Visualisierungstool',
        href: 'https://inter-git.com/'
      }
    ]
  },
  {
    id: 11,
    title: 'Terminal- und Shell-Grundlagen',
    goal: 'Du verstehst, was Terminal und Shell sind, kannst dich sicher im Dateisystem bewegen und kennst die wichtigsten Shell-Befehle für die Arbeit in diesem Kurs.',
    tasks: [
      'Öffne VS Code Terminal und prüfe mit pwd oder Get-Location, in welchem Ordner du bist.',
      'Erkunde mit ls oder Get-ChildItem die Struktur deines Kurs-Ordners.',
      'Wechsle mit cd in Unterordner und wieder zurück.',
      'Lege Test-Dateien und Test-Ordner an und räume sie wieder auf.',
      'Nutze Tab-Autocomplete, um schneller zwischen Ordnern zu wechseln.'
    ],
    fallbackHelp: [],
    successCriterion: 'Du kannst dich im Dateisystem bewegen und die wichtigsten Befehle im Terminal sicher einsetzen.',
    resources: [
      {
        label: 'Terminal-Grundlagen in VS Code',
        href: 'https://code.visualstudio.com/docs/terminal/basics'
      },
      {
        label: 'PowerShell-Dokumentation',
        href: 'https://learn.microsoft.com/de-de/powershell/'
      }
    ]
  },
  {
    id: 12,
    title: 'Git in VS Code via Terminal',
    goal: 'Du führst die wichtigsten Git-Befehle direkt im VS-Code-Terminal aus.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: ''
  },
  {
    id: 13,
    title: 'Branches, Commits und Pull Requests',
    goal: 'Du verstehst den Ablauf von Branch bis Pull Request und kannst ihn im Kurskontext erklären.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: ''
  },
  {
    id: 14,
    title: 'Kurs-Repository klonen',
    goal: 'Du klonst das gemeinsame Kurs-Repository und öffnest es lokal in VS Code.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: ''
  },
  {
    id: 15,
    title: 'Übungen im Gesamt-Setting',
    goal: 'Du verstehst, wie Übungen im Gesamtkurs zwischen Kurs-Repository, eigenem Repository und Lernfortschritt zusammenspielen.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: ''
  },
  {
    id: 16,
    title: 'Start in den Gesamtkurs',
    goal: 'Du weißt, wie du nach dem Onboarding konkret in den Gesamtkurs startest und was dein erster sinnvoller nächster Schritt ist.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: ''
  }
] as const;

export const ONBOARDING_STEP_COUNT = ONBOARDING_STEPS.length;
