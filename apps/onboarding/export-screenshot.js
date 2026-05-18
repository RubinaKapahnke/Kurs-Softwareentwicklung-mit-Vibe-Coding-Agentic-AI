const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    console.log('🚀 Starte Screenshot-Export...');
    
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Setze Viewport auf gängige Desktop-Größe
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigiere zur URL
    console.log('📍 Lade http://localhost:57302/kurse/vibe-coding-agentic-ai...');
    await page.goto('http://localhost:57302/kurse/vibe-coding-agentic-ai', { 
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Warte kurz, damit alles gerendert ist
    await page.waitForTimeout(1000);
    
    // Screenshot speichern
    const outputDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const filename = `onboarding-${timestamp}.png`;
    const filepath = path.join(outputDir, filename);
    
    await page.screenshot({ 
      path: filepath,
      fullPage: false  // Nur sichtbarer Bereich
    });
    
    await browser.close();
    
    console.log(`✅ Screenshot gespeichert: ${filepath}`);
    console.log(`📸 Größe: ${(fs.statSync(filepath).size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('❌ Fehler:', error.message);
    process.exit(1);
  }
})();
