import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-markdown-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div *ngIf="html" class="markdown-view" [innerHTML]="html"></div>
    <div *ngIf="!html && loading">Lade Inhalt...</div>
    <div *ngIf="!html && !loading && error" class="error">Markdown konnte nicht geladen werden.</div>
  `,
  styles: [
    `
      .error {
        color: var(--color-error);
        margin: 1em 0;
      }

      :host ::ng-deep .markdown-view :is(p, ul, ol, blockquote) {
        margin: 0 0 0.9rem;
      }

      :host ::ng-deep .markdown-view :is(ul, ol) {
        padding-left: 1.35rem;
      }

      :host ::ng-deep .markdown-view ul,
      :host ::ng-deep .markdown-view ol {
        display: block;
      }

      :host ::ng-deep .markdown-view li {
        margin: 0 0 0.4rem;
        line-height: var(--line-height-base);
      }

      :host ::ng-deep .markdown-view li:last-child {
        margin-bottom: 0;
      }

      :host ::ng-deep .markdown-view li > p {
        margin: 0;
      }

      :host ::ng-deep .markdown-view h1,
      :host ::ng-deep .markdown-view h2,
      :host ::ng-deep .markdown-view h3,
      :host ::ng-deep .markdown-view h4,
      :host ::ng-deep .markdown-view h5,
      :host ::ng-deep .markdown-view h6 {
        margin: 1.1rem 0 0.55rem;
      }
    `,
  ]
})
export class MarkdownViewComponent implements OnChanges {
  @Input() src?: string;
  html: SafeHtml | null = null;
  loading = false;
  error = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src'] && this.src) {
      this.loadMarkdown(this.src);
    }
  }

  private loadMarkdown(src: string): void {
    this.loading = true;
    this.error = false;
    this.html = null;
    this.http.get(src, { responseType: 'text' }).subscribe({
      next: (md) => {
        void (async () => {
          try {
            const [markedModule, domPurifyModule] = await Promise.all([
              import('marked'),
              import('dompurify')
            ]);

            const rawHtml = await Promise.resolve(markedModule.marked.parse(md));
            const safeHtml = domPurifyModule.default.sanitize(rawHtml);
            this.html = this.sanitizer.bypassSecurityTrustHtml(safeHtml);
            this.loading = false;
          } catch {
            this.error = true;
            this.loading = false;
          }
        })();
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}