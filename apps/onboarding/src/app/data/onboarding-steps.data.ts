import { OnboardingStep } from '../models/onboarding.models';

export const ONBOARDING_STEPS: ReadonlyArray<OnboardingStep> = [
  {
    id: 1,
    title: 'GitHub-Account anlegen',
    goal: 'Du erstellst deinen GitHub-Account und bestaetigst deine E-Mail-Adresse.',
    tasks: [
      'Oeffne github.com und waehle Sign up.',
      'Gib E-Mail-Adresse, Passwort und Benutzernamen ein.',
      'Bestaetige deine E-Mail ueber den Link in der Mail von GitHub.'
    ],
    fallbackHelp: [
      {
        title: 'Bestaetigungs-Mail fehlt',
        detail: 'Pruefe Spam-Ordner und fordere die E-Mail in den GitHub-Einstellungen erneut an.'
      },
      {
        title: 'Benutzername ist belegt',
        detail: 'Fuege eine Zahl oder ein kurzes Wort hinzu, bis der Name verfuegbar ist.'
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
      'Lade Git fuer dein Betriebssystem von git-scm.com herunter.',
      'Starte den Installer und uebernimm die Standardoptionen.',
      'Schliesse die Installation ab.'
    ],
    fallbackHelp: [
      {
        title: 'Installer startet nicht',
        detail: 'Lade die Datei erneut herunter und starte sie mit Rechtsklick als Administrator.'
      },
      {
        title: 'Unklar bei Optionen',
        detail: 'Nutze durchgehend die Standardwerte, das reicht fuer den Kurs.'
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
        title: 'VS Code oeffnet nicht',
        detail: 'Starte den Rechner neu und oeffne VS Code erneut ueber das Startmenue.'
      }
    ],
    successCriterion: 'VS Code ist geoeffnet und zeigt ein leeres Startfenster.',
    resources: [
      {
        label: 'VS Code Download',
        href: 'https://code.visualstudio.com/'
      }
    ]
  },
  {
    id: 4,
    title: 'Terminal oeffnen und pruefen',
    goal: 'Du oeffnest das Terminal in VS Code und pruefst Git dort.',
    tasks: [
      'Oeffne in VS Code das Menue Terminal und waehle Neues Terminal.',
      'Fuehre den Befehl git --version aus.',
      'Pruefe, ob eine Versionsnummer angezeigt wird.'
    ],
    fallbackHelp: [
      {
        title: 'Terminal nicht sichtbar',
        detail: 'Nutze die Tastenkombination Strg+` oder View > Terminal.'
      },
      {
        title: 'git wird nicht erkannt',
        detail: 'Schliesse VS Code komplett und oeffne es nach der Git-Installation neu.'
      }
    ],
    successCriterion: 'Im VS-Code-Terminal erscheint bei git --version eine gueltige Version.'
  },
  {
    id: 5,
    title: 'Repo klonen',
    goal: 'Du klonst das Kurs-Repository lokal und oeffnest es in VS Code.',
    tasks: [
      'Kopiere auf GitHub die HTTPS-Clone-URL des Kurs-Repos.',
      'Fuehre im Terminal git clone <repo-url> aus.',
      'Wechsle in den Ordner mit cd vibe-coding-0426 und oeffne ihn mit code .'
    ],
    fallbackHelp: [
      {
        title: 'Fehler bei git clone',
        detail: 'Pruefe, ob die URL korrekt kopiert wurde und ob Internetzugang besteht.'
      },
      {
        title: 'code . funktioniert nicht',
        detail: 'Oeffne den Ordner in VS Code ueber Datei > Ordner oeffnen.'
      }
    ],
    successCriterion: 'Der lokale Ordner vibe-coding-0426 ist in VS Code geoeffnet.'
  },
  {
    id: 6,
    title: 'Einstieg in den Kursfluss',
    goal: 'Du wechselst direkt aus dem Onboarding in den regulaeren Kursablauf.',
    tasks: [
      'Oeffne NEXT_STEPS.md und lies den aktuellen Meilenstein.',
      'Oeffne danach README_UEBUNGEN.md und pruefe deinen Uebungs-Workflow.',
      'Notiere den ersten kleinen naechsten Schritt aus dem aktuellen Meilenstein.'
    ],
    fallbackHelp: [
      {
        title: 'Datei nicht direkt gefunden',
        detail: 'Nutze in VS Code Strg+P und tippe den Dateinamen ein.'
      }
    ],
    successCriterion:
      'Du hast NEXT_STEPS.md geoeffnet und kennst deinen konkreten naechsten Kursschritt.',
    vscodeHint: [
      'Druecke Strg+P in VS Code.',
      'Tippe NEXT_STEPS.md und bestaetige mit Enter.',
      'Wiederhole es mit README_UEBUNGEN.md.'
    ]
  }
] as const;
