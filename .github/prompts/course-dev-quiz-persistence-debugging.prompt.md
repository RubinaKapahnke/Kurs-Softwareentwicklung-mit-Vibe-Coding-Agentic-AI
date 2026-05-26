# Quiz State Persistence Debugging - Debugging Protocol

## Problem Statement
Quiz-Antworten werden nicht persistent gespeichert. Wenn Nutzer zwischen Lektionen navigiert, verschwinden ihre Antworten (z.B. angekreuzte Checkboxen, gewählte Radio-Optionen) in Step 1, navigiert zu Step 2 und zurück zu Step 1 → die Antworten sind weg.

## Versuche & Erkenntnisse

### ✅ Implementiert: Quiz State Service Layer
**Datei**: `apps/onboarding/src/app/services/onboarding-state.service.ts`

**Was gemacht**:
- `QuizState` Interface hinzugefügt (selectedOptionIds, evaluated, passed)
- Methoden hinzugefuegt: `getQuizState()`, `saveQuizState()`, `clearQuizState()`
- localStorage-Persistierung mit Prefix `onboarding_<courseId>_quizzes`
- `loadQuizzes()` und `persistQuizzes()` als private Hilfsmethoden

**Ergebnis**: ✅ Service speichert und laedt korrekt aus localStorage (Console logs zeigen: State wird gespeichert und geladen)

---

### ✅ Implementiert: Component Signal Management
**Datei**: `apps/onboarding/src/app/components/lesson-flow/lesson-flow.component.ts`

**Was gemacht**:
1. **Signals für Quiz-State hinzugefuegt**:
   - `selectedOptionIds: Signal<Set<string>>`
   - `quizEvaluated: Signal<boolean>`
   - `quizPassed: Signal<boolean>`

2. **Methoden für Interactions**:
   - `onOptionToggle(optionId)` - Toggle Checkbox
   - `onRadioChange(optionId)` - Radio Button Selection

3. **Auto-Save Effect**:
   - `effect()` im Constructor überwacht die drei Quiz-Signals
   - Speichert automatisch in Service, wenn Quiz evaluiert + Selections vorhanden
   - **BUG GEFUNDEN & GEFIXT**: isInitializing Flag war falsch implementiert
   - **AKTUELLE VERSION**: Vereinfachter effect ohne isInitializing (speichert immer wenn die Bedingungen erfüllt sind)

4. **State Restoration in ngOnChanges**:
   - Unterscheidung zwischen `lessonKeyChanged` und `lessonChanged`
   - Nur auf `lessonKeyChanged` Quiz-State laden + Signals restaurieren
   - Auf `lessonChanged` nur Slide-Struktur updaten, NICHT Quiz resetten
   - **Kritisch**: `resetQuizState()` nur auf lessonKeyChanged aufrufen, NOT auf lessonChanged

**Ergebnis**: ⚠️ Code sieht korrekt aus (Logs zeigen State wird geladen), aber UI zeigt nicht die Werte an

---

### 📋 Versuche zur Problemlösung

| Nr. | Versuch | Resultat | Fehler |
|-----|---------|----------|--------|
| 1 | `isInitializing` Flag zur Kontrolle des Effect-Saves | State wurde gar nicht gespeichert | Flag wurde nicht richtig zurückgesetzt |
| 2 | ngOnChanges Rewrite: Trennung lessonKey vs lessonContent | Console zeigt Load, aber keine Checkboxen | State lädt, aber Binding funktioniert nicht |
| 3 | Vereinfachter effect ohne isInitializing | Sollte jedes Mal speichern wenn Bedingungen erfüllt | **Noch nicht getestet** |

---

## Aktuelle Hypothesen für Fehler

### Hypothese A: Signal-Binding-Problem
- Signals werden korrekt restauriert (console logs)
- Aber `[checked]` im Template bindet nicht richtig
- **Test**: DevTools Inspector → Signal-Wert checken nach Restore

### Hypothese B: Doppeltes Reset
- State wird restauriert, aber sofort danach reset in anderem Code-Pfad
- **Test**: Noch mehr console.log() in jedem Signal-Update hinzufuegen

### Hypothese C: Template Binding Issue
- Die `isOptionSelected()` Methode funktioniert nicht richtig
- Der Set-Vergleich funktioniert nicht wie erwartet
- **Test**: Template direkt `selectedOptionIds() | json` anzeigen zur Debug

### Hypothese D: localStorage Key Problem
- Key wird nicht richtig erzeugt oder verglichen
- Step-1, step-1, STEP-1 → Case-Sensitivity?
- **Test**: localStorage direkt anschauen, Schlüssel vergleichen

---

## Code-Referenzen

### Template Binding (lesson-flow.component.html)
```html
<!-- Checkboxes -->
<mat-checkbox
  [checked]="isOptionSelected(option.id)"
  (change)="onOptionToggle(option.id)">
  {{ option.text }}
</mat-checkbox>

<!-- Radio Buttons -->
<mat-radio-button
  [value]="option.id"
  [checked]="selectedOptionIds().has(option.id)">
  {{ option.text }}
</mat-radio-button>
```

### Signal Restore (ngOnChanges)
```typescript
if (lessonKeyChanged) {
  const newKey = this.lessonKey;
  if (newKey !== this.currentLessonKey) {
    this.currentLessonKey = newKey;
    const savedState = this.stateService.getQuizState(newKey);
    if (savedState) {
      this.selectedOptionIds.set(new Set(savedState.selectedOptionIds));
      this.quizEvaluated.set(savedState.evaluated);
      this.quizPassed.set(savedState.passed);
    }
  }
}
```

---

## Nächste Debugging-Lektionen

### 🔧 **Lektion 1: Browser DevTools Inspection**
1. Starte App
2. Step 1: Kreuze Option A an, Option B an → evaluiere Quiz
3. Navigiere zu Step 2
4. **Öffne DevTools** → Inspect lesson-flow Component
5. Navigiere zurück zu Step 1
6. In DevTools Console:
   ```javascript
   // Inspect component instance
   ng.getComponent(document.querySelector('app-lesson-flow'))._selectedOptionIds
   ```
   - Sind die korrekten Optionen im Set vorhanden?
   - Zeigt der Signal den korrekten Wert?

### 🔧 **Lektion 2: Template Debug Output**
In `lesson-flow.component.html` temporär hinzufuegen:
```html
<div style="background: yellow; padding: 10px;">
  Debug: selectedOptionIds = {{ selectedOptionIds() | json }}
  <br />
  Debug: quizEvaluated = {{ quizEvaluated() }}
</div>
```
- Sind die Werte nach Navigation wieder da?
- Oder sind sie leer?

### 🔧 **Lektion 3: More Console Logging**
In `isOptionSelected()` Methode hinzufuegen:
```typescript
isOptionSelected(optionId: string): boolean {
  const result = this.selectedOptionIds().has(optionId);
  console.log(`[isOptionSelected] ${optionId} = ${result}, set=${JSON.stringify([...this.selectedOptionIds()])}`);
  return result;
}
```

### 🔧 **Lektion 4: localStorage Direct Inspection**
In Browser Console:
```javascript
// Prüfe localStorage
localStorage.getItem('onboarding_vibe-coding-agentic-ai_quizzes')

// Prüfe spezifischen Key
JSON.parse(localStorage.getItem('onboarding_vibe-coding-agentic-ai_quizzes'))['step-1']
```
- Ist der Schlüssel richtig?
- Sind die Daten persistent gespeichert?

---

## Bekannte Working Things ✅
- Service speichert und laedt korrekt
- localStorage enthält die richtigen Werte
- ngOnChanges-Logik ist korrekt strukturiert
- Build läuft ohne Fehler

---

## Bekannte Broken Things ❌
- UI zeigt restaurierte Quiz-Werte nicht an
- Checkboxen/Radio-Buttons sind nicht angekreuzt nach Navigation

---

## Dateien die relevant sind
- `apps/onboarding/src/app/services/onboarding-state.service.ts` - Service Layer
- `apps/onboarding/src/app/components/lesson-flow/lesson-flow.component.ts` - Component Logic
- `apps/onboarding/src/app/components/lesson-flow/lesson-flow.component.html` - Template Bindings
- `apps/onboarding/src/app/pages/step-page/step-page.component.html` - Parent Component (passes lessonKey)

---

## Debugging Kommandos
```bash
# Build
cd apps/onboarding && npx ng build

# Im Browser DevTools
localStorage.clear() # Falls komplettes Reset nötig
console.table([...localStorage]) # Alle Keys anschauen
```

---

## Rollback Option
Falls alles zu komplex wird, diese Commits rückgängig machen:
- "Quiz persistence system implementation" - Rollback zu vorher
- Dann neuansatz mit lokalem state nur (keine localStorage)


