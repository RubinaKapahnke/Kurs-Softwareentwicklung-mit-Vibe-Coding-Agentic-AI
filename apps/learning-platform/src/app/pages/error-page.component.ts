import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

interface ErrorPageCopy {
  title: string;
  description: string;
}

@Component({
  selector: 'app-error-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly code = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('code') ?? 'route-not-found')), {
    initialValue: 'route-not-found'
  });

  readonly courseId = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('courseId') ?? '')), {
    initialValue: ''
  });

  readonly moduleId = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('moduleId') ?? '')), {
    initialValue: ''
  });

  readonly copy = computed<ErrorPageCopy>(() => {
    const messages: Record<string, ErrorPageCopy> = {
      'route-not-found': {
        title: 'Seite nicht gefunden',
        description: 'Die angefragte URL existiert nicht in der Learning-Platform.'
      },
      'course-not-found': {
        title: 'Kurs nicht gefunden',
        description: 'Der gewuenschte Kurs konnte nicht im Katalog gefunden werden.'
      },
      'module-not-found': {
        title: 'Modul nicht gefunden',
        description: 'Das gewuenschte Modul wurde für diesen Kurs nicht gefunden.'
      },
      'step-not-found': {
        title: 'Schritt nicht gefunden',
        description: 'Der gewuenschte Schritt ist im Manifest nicht vorhanden.'
      },
      'manifest-empty': {
        title: 'Modul ohne Schritte',
        description: 'Das Manifest wurde geladen, enthält aber keine Schritte.'
      },
      'manifest-invalid': {
        title: 'Manifest fehlerhaft',
        description: 'Das Manifest ist unvollstaendig oder kaputt und kann nicht verarbeitet werden.'
      },
      'manifest-not-found': {
        title: 'Manifest fehlt',
        description: 'Das Manifest des Moduls wurde nicht gefunden.'
      },
      'content-load-failed': {
        title: 'Inhalte konnten nicht geladen werden',
        description: 'Beim Laden ist ein Fehler aufgetreten. Bitte später erneut versuchen.'
      }
    };

    return messages[this.code()] ?? messages['content-load-failed'];
  });
}
