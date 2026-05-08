import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-markdown-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div *ngIf="html" [innerHTML]="html"></div>
    <div *ngIf="!html && loading">Lade Inhalt...</div>
    <div *ngIf="!html && !loading && error" class="error">Markdown konnte nicht geladen werden.</div>
  `,
  styles: [`.error { color: var(--color-error); margin: 1em 0; }`]
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
        void Promise.resolve(marked.parse(md))
          .then((rawHtml) => {
            const safeHtml = DOMPurify.sanitize(rawHtml);
            this.html = this.sanitizer.bypassSecurityTrustHtml(safeHtml);
            this.loading = false;
          })
          .catch(() => {
            this.error = true;
            this.loading = false;
          });
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}