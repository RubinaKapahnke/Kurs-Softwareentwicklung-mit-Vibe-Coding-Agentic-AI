import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-markdown-view',
  imports: [CommonModule],
  template: `
    @if (html) {
      <div class="markdown-view" [innerHTML]="html" (click)="handleClick($event)"></div>
    } @else if (loading) {
      <p class="markdown-state">Lade Inhalt...</p>
    } @else if (error) {
      <p class="markdown-state markdown-state--error">Markdown konnte nicht geladen werden.</p>
    }
  `,
  styleUrl: './markdown-view.component.scss'
})
export class MarkdownViewComponent implements OnChanges {
  private readonly document = inject(DOCUMENT);
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  @Input() src?: string;
  @Input() markdown?: string;
  @Output() libraryLink = new EventEmitter<string>();

  html: SafeHtml | null = null;
  loading = false;
  error = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['markdown']) {
      if (this.markdown !== undefined) {
        void this.renderMarkdown(this.markdown, this.src ?? '');
        return;
      }
    }

    if (changes['src'] && this.src) {
      this.loadMarkdown(this.src);
    }
  }

  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest('a');
    const href = anchor?.getAttribute('href');
    const librarySrc = href ? this.toLibraryContentPath(href) : null;

    if (!librarySrc) {
      return;
    }

    event.preventDefault();
    this.libraryLink.emit(librarySrc);
  }

  private loadMarkdown(src: string): void {
    this.loading = true;
    this.error = false;
    this.html = null;

    this.http.get(this.resolveContentUrl(src), { responseType: 'text' }).subscribe({
      next: (markdown) => {
        void this.renderMarkdown(markdown, src);
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  private async renderMarkdown(markdown: string, src: string): Promise<void> {
    try {
      const [mdItModule, domPurifyModule] = await Promise.all([
        import('markdown-it'),
        import('dompurify')
      ]);
      const markdownIt = mdItModule.default;
      const mdi = new markdownIt({
        html: false,
        linkify: true,
        typographer: true,
        breaks: false
      });
      const normalizedMarkdown = this.normalizeMarkdownLinks(this.stripFrontmatter(markdown), src);
      const rawHtml = mdi.render(normalizedMarkdown);
      const safeHtml = domPurifyModule.default.sanitize(rawHtml, {
        ALLOWED_TAGS: [
          'p', 'br', 'strong', 'em', 'b', 'i', 'code', 'pre',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'ul', 'ol', 'li', 'blockquote', 'a',
          'table', 'thead', 'tbody', 'tr', 'th', 'td',
          'img', 'hr'
        ],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'colspan', 'rowspan', 'align']
      });

      this.html = this.sanitizer.bypassSecurityTrustHtml(safeHtml);
      this.loading = false;
    } catch {
      this.error = true;
      this.loading = false;
    }
  }

  private resolveContentUrl(url: string): string {
    if (!url.startsWith('/content/')) {
      return url;
    }

    return new URL(url.slice(1), this.document.baseURI).toString();
  }

  private normalizeMarkdownLinks(markdown: string, src: string): string {
    return markdown.replace(/\]\(([^)]+\.md)(#[^)]+)?\)/g, (_match, target: string, hash = '') => {
      const libraryPath = this.toLibraryContentPath(target, src);

      if (!libraryPath) {
        return `](${target}${hash})`;
      }

      return `](${libraryPath}${hash})`;
    });
  }

  private stripFrontmatter(markdown: string): string {
    return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  }

  private toLibraryContentPath(href: string, currentSrc = this.src): string | null {
    const [withoutHash] = href.split('#');

    if (withoutHash.startsWith('/content/library/')) {
      return withoutHash.endsWith('.md') ? withoutHash : `${withoutHash}.md`;
    }

    const directLibraryMatch = withoutHash.match(/(?:^|\/)course\/03-course-library\/(.+\.md)$/);
    if (directLibraryMatch) {
      return `/content/library/${directLibraryMatch[1]}`;
    }

    const legacyLibraryMatch = withoutHash.match(/(?:^|\/)03-course-library\/(.+\.md)$/);
    if (legacyLibraryMatch) {
      return `/content/library/${legacyLibraryMatch[1]}`;
    }

    if (!currentSrc?.startsWith('/content/library/') || withoutHash.startsWith('http')) {
      return null;
    }

    const basePath = currentSrc.slice(0, currentSrc.lastIndexOf('/') + 1);
    const resolved = new URL(withoutHash, `https://local${basePath}`).pathname;
    return resolved.startsWith('/content/library/') && resolved.endsWith('.md') ? resolved : null;
  }
}
