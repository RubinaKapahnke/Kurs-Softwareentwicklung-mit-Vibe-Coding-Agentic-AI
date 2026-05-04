import { Injectable } from '@angular/core';
import { DashboardSnapshot, LearnerDelta, SnapshotDelta } from '../models';

@Injectable({ providedIn: 'root' })
export class DeltaService {
  calculateDelta(previous: DashboardSnapshot, current: DashboardSnapshot): SnapshotDelta {
    const learnerDeltas: LearnerDelta[] = current.learners.map((learner) => {
      const previousLearner = previous.learners.find((item) => item.learnerId === learner.learnerId);
      if (!previousLearner) {
        return {
          learnerId: learner.learnerId,
          completedExercisesDiff: this.countCompletedExercises(learner),
          changedExerciseIds: learner.milestoneStatus.flatMap((m) =>
            m.exerciseStatus.map((exercise) => exercise.exerciseId),
          ),
          changedMilestoneIds: learner.milestoneStatus.map((m) => m.milestoneId),
          changedQuestionCountDiff: learner.groupQuestions.length,
        };
      }

      const completedExercisesDiff =
        this.countCompletedExercises(learner) - this.countCompletedExercises(previousLearner);

      const changedExerciseIds = learner.milestoneStatus.flatMap((milestone) => {
        const previousMilestone = previousLearner.milestoneStatus.find(
          (item) => item.milestoneId === milestone.milestoneId,
        );

        return milestone.exerciseStatus
          .filter((exercise) => {
            const previousExercise = previousMilestone?.exerciseStatus.find(
              (item) => item.exerciseId === exercise.exerciseId,
            );
            return previousExercise?.status !== exercise.status;
          })
          .map((exercise) => exercise.exerciseId);
      });

      const changedMilestoneIds = learner.milestoneStatus
        .filter((milestone) => {
          const previousMilestone = previousLearner.milestoneStatus.find(
            (item) => item.milestoneId === milestone.milestoneId,
          );
          if (!previousMilestone) {
            return true;
          }
          return (
            milestone.mustHaveDone !== previousMilestone.mustHaveDone ||
            milestone.shouldHaveDone !== previousMilestone.shouldHaveDone ||
            milestone.niceToHaveDone !== previousMilestone.niceToHaveDone
          );
        })
        .map((milestone) => milestone.milestoneId);

      return {
        learnerId: learner.learnerId,
        completedExercisesDiff,
        changedExerciseIds,
        changedMilestoneIds,
        changedQuestionCountDiff:
          learner.groupQuestions.length - previousLearner.groupQuestions.length,
      };
    });

    return {
      fromSnapshotId: previous.snapshotId,
      toSnapshotId: current.snapshotId,
      learnerDeltas,
    };
  }

  buildProgressMeterValue(learnerDelta: LearnerDelta): number {
    const rawValue = learnerDelta.completedExercisesDiff * 25 - learnerDelta.changedQuestionCountDiff * 5;
    return Math.max(0, Math.min(100, 50 + rawValue));
  }

  private countCompletedExercises(learner: DashboardSnapshot['learners'][number]): number {
    return learner.milestoneStatus
      .flatMap((milestone) => milestone.exerciseStatus)
      .filter((exercise) => exercise.status === 'done').length;
  }
}
