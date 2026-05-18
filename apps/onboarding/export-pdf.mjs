#!/usr/bin/env node

/**
 * PDF-Export für http://localhost:57302/kurse/vibe-coding-agentic-ai
 * 
 * Nutzt Chrome DevTools Protocol über puppeteer für PDF-Generierung
 * Installation: npm install puppeteer
 * Ausführung: node export-pdf.mjs
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync, statSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const exportDir = join(__dirname, 'exports');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const pdfPath = join(exportDir, `kurse-vibe-coding-${timestamp}.pdf`);
const url = 'http://localhost:57302/kurse/vibe-coding-agentic-ai';

// Erstelle Export-Verzeichnis
try {
  mkdirSync(exportDir, { recursive: true });
} catch (err) {
  console.error('❌ Konnte Export-Verzeichnis nicht erstellen:', err.message);
  process.exit(1);
}

console.log('🔄 Exportiere PDF-Seite...');
console.log(`📍 URL: ${url}`);
console.log(`📁 Ziel: ${pdfPath}`);
console.log('');

(async () => {
  let browser;
  try {
    // Starte Browser
    console.log('🌐 Starte Browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-gpu',
      ],
    });

    // Öffne neue Seite
    const page = await browser.newPage();
    
    // Setze Viewport für korrektes Rendering
    await page.setViewport({ width: 1920, height: 1080 });

    // Navigiere zur URL mit langer Timeout
    console.log('⏳ Lade Seite (30s Timeout)...');
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Warte extra für dynamische Inhalte
    await page.waitForTimeout(2000);

    // Generiere PDF
    console.log('📄 Generiere PDF...');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm',
      },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center;">KnOot Academy - Softwareentwicklung mit Vibe Coding & Agentic AI</div>',
      footerTemplate: '<div style="font-size: 9px; width: 100%; text-align: center;">Seite <span class="pageNumber"></span> von <span class="totalPages"></span></div>',
    });

    // Zeige Dateiinfo
    const stats = statSync(pdfPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log('');
    console.log('✅ PDF erfolgreich exportiert!');
    console.log(`📦 Dateigröße: ${sizeMB} MB`);
    console.log(`📍 Speicherort: ${pdfPath}`);

    await browser.close();
    process.exit(0);

  } catch (error) {
    console.error('');
    console.error('❌ Fehler beim PDF-Export:', error.message);
    console.error('');
    console.error('💡 Troubleshooting:');
    console.error('1. Checke ob localhost:57302 erreichbar ist: npm run dev');
    console.error('2. Installiere Puppeteer: npm install puppeteer --save-dev');
    console.error('3. Auf Windows: Nutze export-pdf.ps1 als manuelle Alternative');
    
    if (browser) {
      await browser.close();
    }
    process.exit(1);
  }
})();
