import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { MarkdownViewComponent } from '../components/markdown-view.component';

interface LibraryIndex {
  entries: LibraryEntry[];
}

interface LibraryEntry {
  moduleId: string;
  title: string;
  filename: string;
  contentPath: string;
  routePath: string;
}

@Component({
  selector: 'app-library-page',
  imports: [CommonModule, RouterLink, MarkdownViewComponent],
  templateUrl: './library-page.component.html',
  styleUrl: './library-page.component.scss'
})
export class LibraryPageComponent {
  private readonly document = inject(DOCUMENT);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.router.url.split('?')[0])
    ),
    { initialValue: this.router.url.split('?')[0] }
  );
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly entries = signal<LibraryEntry[]>([]);

  readonly selectedEntry = computed(() => {
    const path = this.currentUrl().replace(/^\/bibliothek\/?/, '');
    if (!path) {
      return this.entries()[0] ?? null;
    }

    return this.entries().find((entry) => entry.routePath === `/bibliothek/${path}`) ?? null;
  });

  readonly groupedEntries = computed(() => {
    const groups = new Map<string, LibraryEntry[]>();

    for (const entry of this.entries()) {
      groups.set(entry.moduleId, [...(groups.get(entry.moduleId) ?? []), entry]);
    }

    return [...groups.entries()].map(([moduleId, items]) => ({ moduleId, items }));
  });

  constructor() {
    this.http.get<LibraryIndex>(this.resolveContentUrl('/content/library/library-index.json')).subscribe({
      next: (index) => {
        this.entries.set(index.entries ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Die Kursbibliothek konnte nicht geladen werden.');
        this.loading.set(false);
      }
    });
  }

  openLibrarySource(src: string): void {
    const entry = this.entries().find((item) => item.contentPath === src);
    if (!entry) {
      return;
    }

    void this.router.navigateByUrl(entry.routePath);
  }

  private resolveContentUrl(url: string): string {
    return new URL(url.slice(1), this.document.baseURI).toString();
  }
}
