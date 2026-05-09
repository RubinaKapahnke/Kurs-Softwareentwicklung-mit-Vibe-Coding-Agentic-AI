import { OnboardingStep } from '../models/onboarding.models';

export const ONBOARDING_STEPS: ReadonlyArray<OnboardingStep> = [
  {
    id: 1,
    title: 'Zugang mit Voucher freischalten',
    goal: 'Du gibst deinen Voucher-Code ein und schaltest das Onboarding frei.',
    tasks: [
      'Gib deinen Voucher-Code ein und bestätige ihn.'
    ],
    fallbackHelp: [
      {
        title: 'Voucher-Code funktioniert nicht',
        detail: 'Prüfe die Eingabe und kontaktiere bei Bedarf die Trainerin für einen gültigen Code.'
      }
    ],
    successCriterion: 'Dein Voucher wurde bestätigt und Schritt 2 ist freigeschaltet.'
  },
  {
    id: 2,
    title: 'So laufen Kurs und Module ab',
    goal: 'Du weißt, was dich in den nächsten Schritten erwartet und wie es nach diesem Modul weitergeht.',
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
                'Der Kurs startet mit Grundlagen und führt Schritt für Schritt zu komplexeren Themen.',
                'Die Inhalte sind in Meilensteine aufgeteilt, damit du den Fortschritt klar sehen kannst.',
                'Später arbeitest du in einem Schwerpunktbereich weiter und vertiefst deine Praxis.',
                'Zum Abschluss setzt du ein eigenes Projekt um.'
              ]
            },
            {
              heading: 'So funktioniert dieses Kurs-Tool',
              orderedItems: [
                'Oben siehst du deinen Fortschritt über alle Schritte.',
                'Jeder Schritt enthält konkrete Teilaufgaben (Subtasks), die du einzeln abhaken kannst.',
                'Wenn alles im Schritt erledigt ist, markierst du den Schritt mit "Als erledigt markieren".',
                'Mit "Weiter" und "Zurück" kannst du jederzeit zwischen den Schritten navigieren.',
                'Du kannst auch weiterklicken, ohne sofort alles zu erledigen, und später zu offenen Punkten zurückkehren.'
              ]
            },
            {
              heading: 'Wichtig für jetzt',
              paragraphs: [
                'In diesem Schritt geht es nur um die Orientierung. Die genaue Handhabung für den weiteren Ablauf nach diesem Modul kommt im nächsten Modul.'
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
                'Das Modul Onboarding richtet deine Arbeitsumgebung ein. Mit Arbeitsumgebung ist alles gemeint, was du zum Arbeiten im Kurs brauchst: GitHub-Account, dein eigenes Übungs-Repository, VS Code, Git und eine laufähige Verbindung zum Kurs-Repository. Was diese Begriffe jeweils bedeuten, lernst du während des Moduls Schritt für Schritt.'
              ]
            },
            {
              heading: 'Bestandteile des Moduls Onboarding',
              orderedItems: [
                'GitHub-Account anlegen und erste Übungen im Browser machen.',
                'VS Code und Git installieren.',
                'Das Kurs-Repository auf deinen Rechner klonen.'
              ]
            },
            {
              tone: 'highlight',
              paragraphs: [
                'Sobald das Modul Onboarding abgeschlossen ist, startest du mit Meilenstein 1.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Was dich in diesem Modul erwartet',
          sections: [
            {
              paragraphs: [
                'Das Modul Onboarding begleitet dich durch alle Einrichtungsschritte, bevor du mit dem eigentlichen Kurs startest. Es ist in drei Phasen aufgeteilt:'
              ]
            },
            {
              heading: 'Phase 1: GitHub einrichten',
              orderedItems: [
                'GitHub-Account anlegen',
                'Eigenes Übungs-Repository erstellen',
                'Erste Übungen direkt im Browser machen'
              ]
            },
            {
              heading: 'Phase 2: Werkzeuge installieren',
              orderedItems: [
                'Was ist VS Code?',
                'VS Code installieren',
                'Was ist Git?',
                'Git installieren und prüfen'
              ]
            },
            {
              heading: 'Phase 3: Kurs-Start',
              orderedItems: [
                'Kurs-Repository auf deinen Rechner klonen',
                'Ablauf und Struktur des Kurses kennenlernen'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Wie es nach diesem Modul weitergeht',
          sections: [
            {
              paragraphs: [
                'Nach diesem Modul arbeitest du mit NEXT_STEPS.md – das ist deine zentrale Roadmap. Dort stehen die aktuellen Meilensteine und was als nächstes kommt.'
              ],
              tone: 'highlight'
            },
            {
              heading: 'Wie der Kurs funktioniert',
              paragraphs: [
                'Du arbeitest in zwei Repos: einem gemeinsamen Kurs-Repo und deinem eigenen Übungs-Repo. Aufgaben, Lernmaterial und dein persönlicher Fortschritt liegen im Kurs-Repo – dein Code und deine Lösungen entstehen bei dir.',
                'Der Einstieg in jeden Meilenstein läuft immer über NEXT_STEPS.md. Was dort steht, bestimmt, woran du als nächstes arbeitest.'
              ]
            },
            {
              paragraphs: [
                'Du musst dir das jetzt noch nicht merken – alles wird erklärt, wenn du es brauchst. Jetzt erst mal: Werkzeuge einrichten.'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: 'GitHub-Account anlegen',
    goal: '',
    tasks: [
      'Lege auf GitHub einen Account an.'
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
      }
    ],
    markdownSource: '/content/github-account.md',
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
                'GitHub ist eine Plattform im Web, auf der du Code speichern, versionieren und teilen kannst. Stell es dir wie eine Wolke für deinen Code vor – mit eingebautem Änderungsverlauf.'
              ]
            },
            {
              heading: 'Warum brauchen wir GitHub im Kurs?',
              orderedItems: [
                'Dein eigenes Übungs-Repo liegt auf GitHub – von dort aus arbeitest du.',
                'Das gemeinsame Kurs-Repo liegt ebenfalls auf GitHub – dort findest du Aufgaben und Lernmaterial.',
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
          title: 'Account erstellen – Schritt für Schritt',
          sections: [
            {
              orderedItems: [
                'Öffne github.com in deinem Browser.',
                'Klick auf "Sign up" (oben rechts).',
                'Gib deine E-Mail-Adresse ein und wähle ein Passwort.',
                'Wähle einen Benutzernamen – dieser ist im Kurs für andere sichtbar.',
                'Bestätige deine E-Mail-Adresse über den Link in der Bestätigungsmail.',
                'Fertig – du bist jetzt auf GitHub.'
              ]
            },
            {
              heading: 'Hinweis zum Benutzernamen',
              paragraphs: [
                'Dein GitHub-Benutzername ist öffentlich sichtbar – auch für andere Kursteilnehmende. Wähle einen Namen, mit dem du dich wohlfühlst.'
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
          errorMessage: 'Nicht ganz. GitHub ist eine Plattform für Code – mit eingebautem Versionsverlauf und Zusammenarbeit.'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Eigenes Übungs-Repository anlegen',
    goal: 'Du erstellst dein erstes eigenes Repository auf GitHub – hier machst du alle Übungen.',
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
    markdownSource: '/content/github-repository-erstellen.md',
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
                'Das Kurs-Repository bleibt zentral – dort liegt das Lernmaterial und die Aufgaben.',
                'Dein eigenes Repository ist dein privater Workspace zum Experimentieren und Lernen.',
                'Hier machst du deine Übungen, speicherst deine Lösungen und dokumentierst deinen Fortschritt.',
                'Die Trainerin kann deine Commits sehen und dir Feedback geben.'
              ]
            }
          ]
        },
        {
          type: 'content',
          title: 'Schritt 1 und 2: Einloggen und Repo erstellen',
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
                'Die README ist wichtig. Ohne README wirkt das Repo für Einsteiger oft „leer" und unklar.'
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
                'Fertig – dein Repository ist erstellt!'
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
                'Repo wurde erstellt',
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
    id: 5,
    title: 'Trainerin einladen',
    goal: 'Du gibst der Trainerin Zugriff auf dein Repository, damit sie deine Übungen sehen und freigeben kann.',
    tasks: [
      'Öffne die Settings deines Repositories auf GitHub.',
      'Gehe zu Collaborators und sende eine Einladung an RubinaKapahnke.',
      'Stelle sicher, dass dein Repository Private ist – die Trainerin wird explizit eingeladen und hat dann Zugriff.'
    ],
    fallbackHelp: [
      {
        title: '"Collaborators" nicht sichtbar',
        detail: 'Du musst Owner des Repositories sein. Prüfe, ob du in deinem eigenen Repository bist – nicht im Kurs-Repository.'
      },
      {
        title: 'Profil erscheint nicht beim Tippen',
        detail: 'Tippe den Benutzernamen vollständig: RubinaKapahnke (https://github.com/RubinaKapahnke) – Groß-/Kleinschreibung beachten.'
      }
    ],
    successCriterion: 'Die Einladung wurde gesendet.'
  },
  {
    id: 6,
    title: 'Erste Übungen im eigenen Repository',
    goal: 'Du machst deine ersten GitHub-Aktionen direkt im Browser – ohne lokale Installation.',
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
        detail: 'Füge zuerst Inhalt in die Datei ein – leere Dateien können nicht committet werden.'
      }
    ],
    successCriterion:
      'Dein Repository enthält mindestens 2 Commits. Die Trainerin kann sie sehen und gibt grünes Licht für Schritt 6.'
  },
  {
    id: 7,
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
          title: 'Ein Editor – und noch viel mehr',
          sections: [
            {
              paragraphs: [
                'VS Code (Visual Studio Code) ist ein kostenloses Programm von Microsoft, das du auf deinem Rechner installierst. Es sieht auf den ersten Blick aus wie ein einfacher Text-Editor – aber darunter steckt eine vollständige Entwicklungsumgebung.'
              ]
            },
            {
              heading: 'Was macht VS Code besonders?',
              orderedItems: [
                'Du siehst alle Dateien deines Projekts in einer übersichtlichen Baumstruktur.',
                'Ein eingebautes Terminal erspart dir den Wechsel in ein separates Fenster.',
                'Erweiterungen (Extensions) machen aus VS Code ein KI-Assistenzsystem, einen Git-Client und vieles mehr.',
                'GitHub Copilot ist direkt integrierbar – das nutzen wir im Kurs intensiv.'
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
                'In echten Softwareprojekten ist VS Code das meistgenutzte Werkzeug – quer durch alle Branchen und Programmiersprachen.'
              ],
              tone: 'highlight'
            },
            {
              paragraphs: [
                'Das heißt: Was du hier lernst, ist direkt übertragbar. Du arbeitest mit denselben Werkzeugen wie professionelle Entwicklerinnen und Entwickler – vom ersten Tag an.'
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
          successMessage: 'Genau. VS Code ist unser zentrales Arbeitsgerät im Kurs – Editor, Terminal und KI-Assistent in einem.',
          errorMessage: 'Nicht ganz. VS Code ist ein Editor, der weit mehr kann als nur Text anzeigen – Terminal, Extensions und KI-Integration inklusive.'
        }
      ]
    }
  },
  {
    id: 8,
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
        detail: 'Windows: den großen „Download for Windows"-Button. Mac: „Download for Mac". Lass dich nicht von den Varianten (User Installer, System Installer, ARM64) verwirren – der Hauptbutton wählt automatisch die richtige Version.'
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
    id: 9,
    title: 'Was ist Git?',
    goal: 'Du verstehst, warum Versionskontrolle wichtig ist und was Git davon löst.',
    tasks: [],
    fallbackHelp: [],
    successCriterion: '',
    lessonFlow: {
      title: 'Mini-Lektion: Warum Versionskontrolle?',
      continueLabel: 'Weiter',
      finishLabel: 'Lektion abgeschlossen',
      slides: [
        {
          type: 'content',
          title: 'Ein kurzes Szenario',
          sections: [
            {
              orderedItems: [
                'Du bearbeitest eine Datei bis zu einem Zwischenstand.',
                'Du kopierst sie und nennst die Datei zum Beispiel datei-version-1.',
                'Du arbeitest weiter und erstellst wieder eine Kopie.',
                'Am Ende liegen viele Dateiversionen nebeneinander.'
              ]
            },
            {
              heading: 'Klingt erstmal praktisch. Aber skaliert das wirklich?',
              tone: 'highlight'
            }
          ]
        },
        {
          type: 'content',
          title: 'Warum machen Menschen das trotzdem?',
          sections: [
            {
              orderedItems: [
                'Backup: Ein älterer Stand ist schnell erreichbar.',
                'Experimentieren: Neue Ideen ohne sofort alles zu riskieren.',
                'Zwischenstände festhalten: Wichtige Meilensteine bleiben sichtbar.'
              ],
              tone: 'highlight'
            },
            {
              paragraphs: [
                'Diese Vorteile sind real. Genau deshalb gibt es heute bessere Werkzeuge dafür: Versionskontrollsysteme wie Git.'
              ]
            }
          ]
        },
        {
          type: 'quiz',
          title: 'Schnell-Check',
          prompt: 'Welche Nachteile hat manuelle Versionierung mit vielen Dateikopien?',
          instruction: 'Wähle alle zutreffenden Aussagen aus.',
          multiSelect: true,
          options: [
            {
              id: 'mistakes',
              label: 'Fehler passieren schneller',
              isCorrect: true
            },
            {
              id: 'storage',
              label: 'Doppelte Dateien verbrauchen unnötig Speicher',
              isCorrect: true
            },
            {
              id: 'time',
              label: 'Es kostet auf Dauer viel Zeit',
              isCorrect: true
            },
            {
              id: 'messy',
              label: 'Bei größeren Projekten wird es schnell unübersichtlich',
              isCorrect: true
            },
            {
              id: 'teamwork',
              label: 'Teamarbeit wird schwieriger',
              isCorrect: true
            }
          ],
          successMessage: 'Richtig! Genau diese Punkte löst ein Versionskontrollsystem deutlich besser.',
          errorMessage: 'Fast. Prüfe noch einmal alle Aussagen und denke an Teamarbeit und Übersicht.'
        },
        {
          type: 'content',
          title: 'Warum Git hier besser passt',
          sections: [
            {
              paragraphs: [
                'Git speichert Änderungen strukturiert, statt ständig komplette Dateikopien anzulegen.',
                'Du siehst nachvollziehbar, wer was geändert hat und kannst sicher zu früheren Ständen zurück.'
              ],
              tone: 'highlight'
            },
            {
              paragraphs: [
                'Im Team können mehrere Personen parallel arbeiten, ohne sich gegenseitig Dateien zu überschreiben.'
              ]
            },
            {
              paragraphs: [
                'Kurz: Mit Git wird Versionsverwaltung planbar und sauber. Genau das nutzen wir im Kurs ab jetzt Schritt für Schritt.'
              ],
              tone: 'highlight'
            }
          ]
        }
      ]
    }
  },
  {
    id: 10,
    title: 'Git installieren',
    goal: 'Du installierst Git auf deinem Rechner und prüfst, dass es im Terminal erkennbar ist.',
    tasks: [
      'Lade Git von git-scm.com herunter und führe den Installer aus (alle Standardoptionen übernehmen).',
      'Öffne in VS Code ein Terminal (Terminal → Neues Terminal).',
      'Tippe git --version und prüfe, dass eine Versionsnummer erscheint.'
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
    successCriterion:
      'Im VS-Code-Terminal zeigt git --version eine gültige Versionsnummer (z. B. git version 2.x.x).',
    desktopHint: [
      'Dieser Schritt braucht einen Rechner mit installierbarem Git und einem VS-Code-Terminal.',
      'Auf dem Smartphone kannst du die Hinweise lesen, den Schritt aber spaeter besser am Rechner ausfuehren.'
    ],
    resources: [
      {
        label: 'Git Download',
        href: 'https://git-scm.com/downloads'
      }
    ]
  },
  {
    id: 11,
    title: 'Kurs-Repo klonen',
    goal: 'Du klonst das gemeinsame Kurs-Repository auf deinen Rechner und öffnest es in VS Code.',
    tasks: [
      'Warte auf die Einladung zum Kurs-Repo von der Trainerin (kommt per GitHub-Benachrichtigung).',
      'Kopiere die HTTPS-Clone-URL des Kurs-Repos auf GitHub.',
      'Führe im VS-Code-Terminal git clone <URL> aus und öffne den Ordner.'
    ],
    fallbackHelp: [
      {
        title: 'Einladung noch nicht da',
        detail: 'Schau in deinen GitHub-Benachrichtigungen nach – oder kontaktiere die Trainerin direkt.'
      },
      {
        title: 'git clone schlägt fehl',
        detail: 'Stelle sicher, dass du die HTTPS-URL kopiert hast (nicht SSH) und ins Kurs-Repo eingeladen bist.'
      },
      {
        title: 'code . funktioniert nicht',
        detail: 'Öffne den Ordner in VS Code über Datei → Ordner öffnen.'
      }
    ],
    successCriterion:
      'Der Kurs-Ordner ist in VS Code geöffnet. Du siehst NEXT_STEPS.md in der Dateiliste.',
    desktopHint: [
      'Klonen und Öffnen des Kurs-Repositories ist ein Desktop-Schritt.',
      'Wenn du gerade mobil liest, nutze diesen Schritt später an deinem Rechner weiter.'
    ],
    resources: [
      {
        label: 'Kurs-Repo auf GitHub',
        href: 'https://github.com/RubinaKapahnke/vibe-coding-0426'
      },
      {
        label: 'NEXT_STEPS.md',
        href: 'https://github.com/RubinaKapahnke/vibe-coding-0426/blob/main/NEXT_STEPS.md'
      }
    ],
    vscodeHint: [
      'Drücke Strg+P in VS Code (Windows) / Cmd+P (Mac).',
      'Tippe NEXT_STEPS.md und bestätige mit Enter.'
    ]
  },
  {
    id: 12,
    title: 'Kurs-Handhabung verstehen',
    goal: 'Du verstehst, welche Dateien im Kurs-Repo bleiben, was in deinem eigenen Repo entsteht und warum der Lernfortschritt zentral gepflegt wird.',
    tasks: [
      'Öffne im Kurs-Repository die Datei NEXT_STEPS.md und lies Meilenstein 1.',
      'Öffne im Kurs-Repository die Datei course/uebungen/README_UEBUNGEN.md und lies den Übungsablauf.',
      'Prüfe für dich die Grundregel: Aufgaben zentral lesen, Lösungen im eigenen Repository umsetzen.',
      'Prüfe für dich die Grundregel: lernfortschritt_<name>.md bleibt zentral im Kurs-Repository für Überblick und Dashboard.'
    ],
    fallbackHelp: [
      {
        title: 'Ich verwechsle eigenes Repository und Kurs-Repository',
        detail: 'Merke dir: NEXT_STEPS, course/uebungen und course/learners gehören ins Kurs-Repository. Deine Lösungsdateien und Projektartefakte gehören standardmäßig in dein eigenes Repository.'
      },
      {
        title: 'Ich finde README_UEBUNGEN.md nicht',
        detail: 'Nutze in VS Code Strg+P (Windows) / Cmd+P (Mac) und tippe README_UEBUNGEN.md.'
      }
    ],
    successCriterion: 'Du kannst erklären, was im Kurs-Repository bleibt, was in deinem eigenen Repository liegt und warum die Lernfortschrittsdatei zentral gepflegt wird.',
    resources: [
      {
        label: 'NEXT_STEPS.md',
        href: 'https://github.com/RubinaKapahnke/vibe-coding-0426/blob/main/NEXT_STEPS.md'
      },
      {
        label: 'README_UEBUNGEN.md',
        href: 'https://github.com/RubinaKapahnke/vibe-coding-0426/blob/main/course/uebungen/README_UEBUNGEN.md'
      }
    ],
    vscodeHint: [
      'Drücke Strg+P in VS Code (Windows) / Cmd+P (Mac).',
      'Tippe NEXT_STEPS.md oder README_UEBUNGEN.md und bestätige mit Enter.'
    ],
    markdownSource: '/content/kurs-handhabung.md'
  }
] as const;

export const ONBOARDING_STEP_COUNT = ONBOARDING_STEPS.length;
