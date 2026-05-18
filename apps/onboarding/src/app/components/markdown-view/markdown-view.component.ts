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

      :host ::ng-deep .markdown-view table {
        border-collapse: collapse;
        width: 100%;
        margin: 1rem 0;
        border: 1px solid var(--color-border, #e0e0e0);
        font-size: 0.95rem;
      }

      :host ::ng-deep .markdown-view th {
        background-color: var(--color-surface-secondary, #f5f5f5);
        padding: 0.75rem;
        text-align: left;
        font-weight: 600;
        border: 1px solid var(--color-border, #e0e0e0);
      }

      :host ::ng-deep .markdown-view td {
        padding: 0.75rem;
        border: 1px solid var(--color-border, #e0e0e0);
      }

      :host ::ng-deep .markdown-view tbody tr:hover {
        background-color: var(--color-surface-hover, #fafafa);
      }

      :host ::ng-deep .markdown-view a {
        color: var(--color-primary, #0066cc);
        text-decoration: none;
        cursor: pointer;
      }

      :host ::ng-deep .markdown-view a:hover {
        text-decoration: underline;
      }

      :host ::ng-deep .markdown-view img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 1rem 0;
        border-radius: var(--radius-md, 12px);
        border: 1px solid var(--color-border, #e0e0e0);
        background: var(--color-surface, #ffffff);
      }

      :host ::ng-deep .markdown-view code {
        background-color: var(--color-surface-secondary, #f5f5f5);
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: monospace;
        font-size: 0.9em;
      }

      :host ::ng-deep .markdown-view pre {
        background-color: var(--color-surface-secondary, #f5f5f5);
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        margin: 1rem 0;
      }

      :host ::ng-deep .markdown-view pre code {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
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
            const [mdItModule, domPurifyModule] = await Promise.all([
              import('markdown-it'),
              import('dompurify')
            ]);

            // Nutze markdown-it mit GFM-Features
            const markdownIt = mdItModule.default;
            const mdi = new markdownIt({
              html: true,
              linkify: true,
              typographer: true,
              breaks: true
            });

            // Parse Markdown zu HTML
            const rawHtml = mdi.render(md);

            // Konfiguriere dompurify mit Tabellen- und Link-Elementen
            const purifyConfig = {
              ALLOWED_TAGS: [
                'p', 'br', 'strong', 'em', 'b', 'i', 'u', 'code', 'pre',
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'ul', 'ol', 'li',
                'blockquote',
                'a',
                'table', 'thead', 'tbody', 'tr', 'th', 'td', // Tabellen-Support
                'img',
                'hr'
              ],
              ALLOWED_ATTR: [
                'href', 'target', 'rel', // Links
                'src', 'alt', 'title', // Bilder
                'colspan', 'rowspan', 'align' // Tabellen
              ]
            };

            const safeHtml = domPurifyModule.default.sanitize(rawHtml, purifyConfig);
            this.html = this.sanitizer.bypassSecurityTrustHtml(safeHtml);
            this.loading = false;
          } catch (err) {
            console.error('Fehler beim Rendern von Markdown:', err);
            this.error = true;
            this.loading = false;
          }
        })();
      },
      error: (err) => {
        console.error('Fehler beim Laden der Markdown-Datei:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}