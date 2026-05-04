import { GitActivity } from '../../models';

export const GITHUB_ACTIVITY_MOCK: GitActivity[] = [
  {
    learnerId: 'daria',
    commitCountWindow: 6,
    activeBranches: ['feature/lernstand-daria', 'chore/docs-fix'],
    pullRequests: [
      {
        prNumber: 121,
        title: 'docs: update lernfortschritt daria',
        state: 'open',
        author: 'daria',
        reviewerIds: ['dom'],
        commentCount: 2,
      },
    ],
    reviews: [
      {
        prNumber: 118,
        reviewerId: 'daria',
        reviewState: 'commented',
        commentSnippets: ['Bitte Abschnitt Lernerfolg ergaenzen.'],
      },
    ],
  },
  {
    learnerId: 'dom',
    commitCountWindow: 8,
    activeBranches: ['feature/terminal-routine-dom', 'feature/prompting-start-dom'],
    pullRequests: [
      {
        prNumber: 122,
        title: 'feat: meilenstein 02 aufgaben dom',
        state: 'merged',
        author: 'dom',
        reviewerIds: ['daria', 'sebastian'],
        commentCount: 5,
      },
      {
        prNumber: 135,
        title: 'feat: meilenstein 02 abschluss dom',
        state: 'open',
        author: 'dom',
        reviewerIds: ['raphael'],
        commentCount: 1,
      },
    ],
    reviews: [
      {
        prNumber: 121,
        reviewerId: 'dom',
        reviewState: 'changes_requested',
        commentSnippets: ['Bitte Branch nach Merge loeschen.'],
      },
    ],
  },
  {
    learnerId: 'medine',
    commitCountWindow: 3,
    activeBranches: ['feature/lernstand-medine'],
    pullRequests: [
      {
        prNumber: 123,
        title: 'docs: lernfortschritt medine initial',
        state: 'open',
        author: 'medine',
        reviewerIds: ['daria'],
        commentCount: 0,
      },
    ],
    reviews: [],
  },
  {
    learnerId: 'raphael',
    commitCountWindow: 11,
    activeBranches: ['feature/prompting-raphael'],
    pullRequests: [
      {
        prNumber: 128,
        title: 'feat: meilenstein 02 abschluss raphael',
        state: 'merged',
        author: 'raphael',
        reviewerIds: ['dom', 'sebastian'],
        commentCount: 4,
      },
      {
        prNumber: 140,
        title: 'feat: meilenstein 03 uebung-01 raphael',
        state: 'open',
        author: 'raphael',
        reviewerIds: ['sebastian'],
        commentCount: 2,
      },
    ],
    reviews: [
      {
        prNumber: 135,
        reviewerId: 'raphael',
        reviewState: 'approved',
        commentSnippets: ['Guter Branch-Name, sauber gepflegt.'],
      },
    ],
  },
  {
    learnerId: 'sebastian',
    commitCountWindow: 15,
    activeBranches: ['feature/projekt-setup-sebastian'],
    pullRequests: [
      {
        prNumber: 145,
        title: 'feat: projekt repository aufsetzen sebastian',
        state: 'open',
        author: 'sebastian',
        reviewerIds: ['raphael'],
        commentCount: 3,
      },
    ],
    reviews: [
      {
        prNumber: 140,
        reviewerId: 'sebastian',
        reviewState: 'approved',
        commentSnippets: ['Prompting-Struktur klar und nachvollziehbar.'],
      },
    ],
  },
];
