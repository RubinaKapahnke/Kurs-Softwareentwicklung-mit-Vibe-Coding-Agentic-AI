export interface ModuleRuntimeContext {
  courseId: string;
  moduleId: string;
  stepId?: number;
  progressKey: string;
}

export interface ModuleStepCompletionResult {
  allowed: boolean;
  reason?: string;
}

/**
 * Strategy hook for optional module-specific runtime behavior.
 * Keep strategy implementations small and testable.
 */
export interface ModuleStrategy {
  readonly id: string;

  canEnterModule(context: ModuleRuntimeContext): boolean;
  canOpenStep(stepId: number, context: ModuleRuntimeContext): boolean;
  canCompleteStep(stepId: number, context: ModuleRuntimeContext): ModuleStepCompletionResult;
  onStepCompleted(stepId: number, context: ModuleRuntimeContext): void;
}

export class DefaultModuleStrategy implements ModuleStrategy {
  readonly id = 'default';

  canEnterModule(_context: ModuleRuntimeContext): boolean {
    return true;
  }

  canOpenStep(_stepId: number, _context: ModuleRuntimeContext): boolean {
    return true;
  }

  canCompleteStep(_stepId: number, _context: ModuleRuntimeContext): ModuleStepCompletionResult {
    return { allowed: true };
  }

  onStepCompleted(_stepId: number, _context: ModuleRuntimeContext): void {
    // No side effects in default mode.
  }
}
