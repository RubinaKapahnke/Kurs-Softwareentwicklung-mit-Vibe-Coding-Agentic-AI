# Git Branch-Workflow: Von der Idee bis zum Aufraeumen

Dieses Dokument erklaert den vollstaendigen Ablauf eines Branches - vom Erstellen bis zum Loeschen nach dem Merge. Fuer die Befehle im Ueberblick: [Git-Befehlsuebersicht](./03-git-befehlsuebersicht.md).

---

## Warum hat jede Uebung einen eigenen Branch?

In diesem Kurs erstellst du fuer jede Uebung einen eigenen Branch. Das hat einen einfachen Grund: Deine Aenderungen bleiben sauber von allen anderen getrennt, bis sie ueberprueft und freigegeben sind. Erst durch den Merge landest du auf `main`.

Der Ablauf sieht immer gleich aus:

```
main
 └── Dein Branch (UE-MX-YY-<vorname>)
      └── Deine Commits
           └── Pull Request auf GitHub
                └── Merge in main
                     └── Branch wird geloescht
```

---

## Schritt 1: main aktualisieren und Branch erstellen

Bevor du anfaengst, holst du den neuesten Stand von `main`:

```bash
git checkout main
git pull origin main
git checkout -b UE-MX-YY-<vorname>
```

Du arbeitest jetzt auf deinem eigenen Branch und kannst nichts auf `main` kaputt machen.

---

## Schritt 2: Commiten und pushen

Wenn du fertig bist:

```bash
git add .
git commit -m "deine Commit-Nachricht"
git push origin UE-MX-YY-<vorname>
```

---

## Schritt 3: Pull Request auf GitHub erstellen

Auf GitHub erscheint ein gelber Banner - klicke auf "Compare & pull request". Waehle `main` als Basis-Branch und deinen Branch als Quell-Branch.

Nach dem Review wird dein Branch in `main` gemerged.

---

## Schritt 4: Branch aufraeumen

Nach dem Merge ist der Branch nicht mehr noetig. Er kann geloescht werden.

### Remote-Branch loeschen (auf GitHub)

Beim Merge-Button auf GitHub gibt es eine Checkbox **"Delete branch after merging"** - wenn du die aktivierst, wird der Remote-Branch automatisch geloescht.

Alternativ per Terminal:

```bash
git push origin --delete UE-MX-YY-<vorname>
```

### Lokalen Branch loeschen

Zurueck auf `main` wechseln und den neuesten Stand holen:

```bash
git checkout main
git pull origin main
```

Dann den lokalen Branch loeschen:

```bash
git branch -d UE-MX-YY-<vorname>
```

> **Warum `-d` und nicht `-D`?**
> `-d` loescht nur, wenn der Branch bereits gemerged ist. Das schuetzt davor, aus Versehen noch ungemergten Code zu verlieren. `-D` erzwingt das Loeschen ohne Pruefung - nur nutzen, wenn du sicher bist.

---

## Ueberblick: Was passiert wo?

| Ort | Was wird geloescht | Befehl |
| :--- | :--- | :--- |
| GitHub (Remote) | Remote-Branch | Checkbox beim Merge oder `git push origin --delete <branch>` |
| Dein Rechner (lokal) | Lokaler Branch | `git branch -d <branch>` |

---

## Haeufige Frage: Warum sehe ich den Branch noch lokal, obwohl er auf GitHub geloescht ist?

Git synchronisiert Branch-Loeschungen nicht automatisch. Du siehst den Remote-Branch noch, bis du aufraeumst:

```bash
git fetch --prune
```

Dieser Befehl aktualisiert deine lokale Uebersicht der Remote-Branches und entfernt solche, die auf GitHub nicht mehr existieren.

---

## Kurz-Checkliste nach einem Merge

- [ ] Remote-Branch auf GitHub geloescht (Checkbox oder `git push origin --delete`)
- [ ] `git checkout main` + `git pull origin main`
- [ ] `git branch -d <branch-name>`
- [ ] Optional: `git fetch --prune`
