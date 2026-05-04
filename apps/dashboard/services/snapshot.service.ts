import { Injectable } from '@angular/core';
import { DashboardSnapshot, CustomFieldEntry, GitActivity, LearnerProgress } from '../models';

const STORAGE_KEY = 'progress-hub-snapshots';

@Injectable({ providedIn: 'root' })
export class SnapshotService {
  createSnapshot(
    learners: LearnerProgress[],
    gitActivity: GitActivity[],
    customFields: CustomFieldEntry[] = [],
  ): DashboardSnapshot {
    const snapshot: DashboardSnapshot = {
      snapshotId: `snapshot-${Date.now()}`,
      createdAtIso: new Date().toISOString(),
      learners,
      gitActivity,
      customFields,
    };

    const snapshots = this.getAllSnapshots();
    snapshots.push(snapshot);
    this.persistSnapshots(snapshots);
    return snapshot;
  }

  getAllSnapshots(): DashboardSnapshot[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw) as DashboardSnapshot[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  getLatestSnapshot(): DashboardSnapshot | null {
    const snapshots = this.getAllSnapshots();
    if (snapshots.length === 0) {
      return null;
    }
    return snapshots[snapshots.length - 1] ?? null;
  }

  clearHistory(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
  }

  private persistSnapshots(snapshots: DashboardSnapshot[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshots));
  }
}
