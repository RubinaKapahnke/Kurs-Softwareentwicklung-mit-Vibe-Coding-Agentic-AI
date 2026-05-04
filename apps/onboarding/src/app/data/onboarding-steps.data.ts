import { OnboardingStep } from '../models/onboarding.models';

export const ONBOARDING_STEPS: ReadonlyArray<OnboardingStep> = [
  {
    id: 1,
    title: 'GitHub-Account anlegen',
    goal: 'Du erstellst deinen GitHub-Account und bestätigst deine E-Mail-Adresse.',
    tasks: [
      'Öffne github.com und wähle Sign up.',
      'Gib E-Mail-Adresse, Passwort und Benutzernamen ein.',
      'Bestätige deine E-Mail über den Link in der Mail von GitHub.'
    ],
    fallbackHelp: [
      {
        title: 'Bestätigungs-Mail fehlt',
        detail: 'Prüfe den Spam-Ordner und fordere die E-Mail in den GitHub-Einstellungen erneut an.'
      },
      {
        title: 'Benutzername ist belegt',
        detail: 'Füge eine Zahl oder ein kurzes Wort hinzu, bis der Name verfügbar ist.'
      }
    ],
    successCriterion:
      'Du bist auf github.com eingeloggt und siehst rechts oben dein Profil-Icon.',
    resources: [
      {
        label: 'GitHub',
        href: 'https://github.com'
      }
    ]
  },
  {
    id: 2,
    title: 'Git installieren',
    goal: 'Du installierst Git lokal auf deinem Rechner.',
    tasks: [
      'Lade Git für dein Betriebssystem von git-scm.com herunter.',
      'Starte den Installer und übernimm die Standardoptionen.',
      'Schließe die Installation ab.'
    ],
    fallbackHelp: [
      {
        title: 'Installer startet nicht',
        detail: 'Lade die Datei erneut herunter und starte sie mit Rechtsklick als Administrator.'
      },
      {
        title: 'Unklar bei Optionen',
        detail: 'Nutze durchgehend die Standardwerte, das reicht für den Kurs.'
      }
    ],
    successCriterion: 'Der Befehl git --version zeigt eine Versionsnummer.',
    resources: [
      {
        label: 'Git Download',
        href: 'https://git-scm.com/downloads'
      }
    ]
  },
  {
    id: 3,
    title: 'VS Code installieren',
    goal: 'Du installierst VS Code und startest den Editor erfolgreich.',
    tasks: [
      'Lade VS Code von code.visualstudio.com herunter.',
      'Installiere VS Code mit den empfohlenen Optionen.',
      'Starte VS Code nach Abschluss der Installation.'
    ],
    fallbackHelp: [
      {
        title: 'VS Code öffnet nicht',
        detail: 'Starte den Rechner neu und öffne VS Code erneut über das Startmenü.'
      }
    ],
    successCriterion: 'VS Code ist geöffnet und zeigt ein leeres Startfenster.',
    resources: [
      {
        label: 'VS Code Download',
        href: 'https://code.visualstudio.com/'
      }
    ]
  },
  {
    id: 4,
    title: 'Terminal öffnen und prüfen',
    goal: 'Du öffnest das Terminal in VS Code und prüfst Git dort.',
    tasks: [
      'Öffne in VS Code das Menü Terminal und wähle Neues Terminal.',
      'Führe den Befehl git --version aus.',
      'Prüfe, ob eine Versionsnummer angezeigt wird.'
    ],
    fallbackHelp: [
      {
        title: 'Terminal nicht sichtbar',
        detail: 'Nutze die Tastenkombination Strg+` oder View > Terminal.'
      },
      {
        title: 'git wird nicht erkannt',
        detail: 'Schließe VS Code komplett und öffne es nach der Git-Installation neu.'
      }
    ],
    successCriterion: 'Im VS-Code-Terminal erscheint bei git --version eine gültige Version.'
  },
  {
    id: 5,
    title: 'Repo klonen',
    goal: 'Du klonst das Kurs-Repository lokal und öffnest es in VS Code.',
    tasks: [
      'Kopiere auf GitHub die HTTPS-Clone-URL des Kurs-Repos.',
      'Führe im Terminal git clone <repo-url> aus.',
      'Wechsle in den Ordner mit cd vibe-coding-0426 und öffne ihn mit code .'
    ],
    fallbackHelp: [
      {
        title: 'Fehler bei git clone',
        detail: 'Prüfe, ob die URL korrekt kopiert wurde und ob Internetzugang besteht.'
      },
      {
        title: 'code . funktioniert nicht',
        detail: 'Öffne den Ordner in VS Code über Datei > Ordner öffnen.'
      }
    ],
    successCriterion: 'Der lokale Ordner vibe-coding-0426 ist in VS Code geöffnet.'
  },
  {
    id: 6,
    title: 'Einstieg in den Kursfluss',
    goal: 'Du wechselst direkt aus dem Onboarding in den regulären Kursablauf.',
    tasks: [
      'Öffne NEXT_STEPS.md und lies den aktuellen Meilenstein.',
      'Öffne danach README_UEBUNGEN.md und prüfe deinen Übungs-Workflow.',
      'Notiere den ersten kleinen nächsten Schritt aus dem aktuellen Meilenstein.'
    ],
    fallbackHelp: [
      {
        title: 'Datei nicht direkt gefunden',
        detail: 'Nutze in VS Code Strg+P und tippe den Dateinamen ein.'
      }
    ],
    successCriterion:
      'Du hast NEXT_STEPS.md geöffnet und kennst deinen konkreten nächsten Kursschritt.',
    vscodeHint: [
      'Drücke Strg+P in VS Code.',
      'Tippe NEXT_STEPS.md und bestätige mit Enter.',
      'Wiederhole es mit README_UEBUNGEN.md.'
    ]
  }
] as const;
