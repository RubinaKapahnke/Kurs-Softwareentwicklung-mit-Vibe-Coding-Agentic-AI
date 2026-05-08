import { OnboardingStep } from '../models/onboarding.models';

export const ONBOARDING_STEPS: ReadonlyArray<OnboardingStep> = [
  {
    id: 1,
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
    markdownSource: '/content/github-account.md'
  },
  {
    id: 2,
    title: 'Eigenes Übungs-Repo anlegen',
    goal: 'Du erstellst dein erstes eigenes Repository auf GitHub – hier machst du alle Übungen.',
    tasks: [
      'Lege auf GitHub ein neues Repository an (Private reicht – die Trainerin wird eingeladen).',
      'Wähle einen Namen wie mein-vibe-coding und aktiviere die README-Datei.',
      'Prüfe, dass dein Repo angelegt ist und eine README.md enthält.'
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
    successCriterion: 'Dein Repository ist auf github.com angelegt und enthält eine README.md.'
  },
  {
    id: 3,
    title: 'Trainerin einladen',
    goal: 'Du gibst der Trainerin Zugriff auf dein Repo, damit sie deine Übungen sehen und freigeben kann.',
    tasks: [
      'Öffne die Settings deines Repos auf GitHub.',
      'Gehe zu Collaborators und sende eine Einladung an RubinaKapahnke.',
      'Warte auf die Bestätigung – die Trainerin nimmt die Einladung per E-Mail an.'
    ],
    fallbackHelp: [
      {
        title: '"Collaborators" nicht sichtbar',
        detail: 'Du musst Owner des Repos sein. Prüfe, ob du in deinem eigenen Repo bist – nicht im Kurs-Repo.'
      },
      {
        title: 'Profil erscheint nicht beim Tippen',
        detail: 'Tippe den Benutzernamen vollständig: RubinaKapahnke – Groß-/Kleinschreibung beachten.'
      }
    ],
    successCriterion: 'Die Einladung wurde gesendet. Du siehst in Collaborators den Status „Pending invite".'
  },
  {
    id: 4,
    title: 'Erste Übungen im eigenen Repo',
    goal: 'Du machst deine ersten GitHub-Aktionen direkt im Browser – ohne lokale Installation.',
    tasks: [
      'Lege die Datei uebung-01.md in deinem Repo an und committe sie.',
      'Bearbeite die README.md und ergänze eine Zeile über dich.',
      'Prüfe, dass beide Commits in der Commit-Historie deines Repos sichtbar sind.'
    ],
    fallbackHelp: [
      {
        title: 'Ich sehe kein „Add file"',
        detail: 'Gehe zur Hauptseite deines Repos (Code-Tab). Der Button ist direkt über der Dateiliste.'
      },
      {
        title: 'Commit-Button ist ausgegraut',
        detail: 'Füge zuerst Inhalt in die Datei ein – leere Dateien können nicht committet werden.'
      }
    ],
    successCriterion:
      'Dein Repo enthält mindestens 2 Commits. Die Trainerin kann sie sehen und gibt grünes Licht für Schritt 5.'
  },
  {
    id: 5,
    title: 'Git & VS Code installieren',
    goal: 'Du installierst die lokalen Werkzeuge und prüfst, dass alles funktioniert.',
    tasks: [
      'Installiere Git von git-scm.com (alle Standardoptionen übernehmen).',
      'Installiere VS Code von code.visualstudio.com.',
      'Öffne das Terminal in VS Code und bestätige: git --version zeigt eine Versionsnummer.'
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
    resources: [
      {
        label: 'Git Download',
        href: 'https://git-scm.com/downloads'
      },
      {
        label: 'VS Code Download',
        href: 'https://code.visualstudio.com/'
      }
    ]
  },
  {
    id: 6,
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
  }
] as const;
