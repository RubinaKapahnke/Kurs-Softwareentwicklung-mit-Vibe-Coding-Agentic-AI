# PDF-Export für http://localhost:57302/kurse/vibe-coding-agentic-ai
# Nutzt Chrome/Edge native --print-to-pdf Flag (keine npm-Abhängigkeiten nötig)

param(
    [string]$Url = "http://localhost:57302/kurse/vibe-coding-agentic-ai",
    [string]$OutputPath = "$(Get-Location)\exports"
)

# Prüfe ob Edge/Chrome installiert ist
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$browserPath = if (Test-Path $edgePath) { $edgePath } elseif (Test-Path $chromePath) { $chromePath } else { $null }

if (-not $browserPath) {
    Write-Host "❌ Chrome oder Edge nicht gefunden. Bitte installieren." -ForegroundColor Red
    exit 1
}

# Erstelle Output-Verzeichnis
if (-not (Test-Path $OutputPath)) {
    New-Item -ItemType Directory -Path $OutputPath -Force | Out-Null
}

$timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
$pdfFile = Join-Path $OutputPath "kurse-vibe-coding-$timestamp.pdf"

Write-Host "🔄 Exportiere PDF..." -ForegroundColor Cyan
Write-Host "📍 Seite: $Url" -ForegroundColor Cyan
Write-Host "📁 Ziel: $pdfFile" -ForegroundColor Cyan
Write-Host ""

try {
    # Nutze Chrome/Edge native --print-to-pdf Flag
    # Das ist schneller und zuverlässiger als Chrome DevTools Protocol
    Write-Host "⏳ Browser wird gestartet (headless)..." -ForegroundColor Yellow
    
    $args = @(
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--print-to-pdf=$pdfFile",
        "--print-to-pdf-no-header",
        "--timeout=30000",
        $Url
    )
    
    # Starte Browser mit print-to-pdf
    & $browserPath @args 2>&1 | ForEach-Object {
        if ($_ -match "error|failed" -and $_ -notmatch "Skipped") {
            Write-Host "⚠️  $_" -ForegroundColor Yellow
        }
    }
    
    # Warte kurz, bis PDF geschrieben ist
    Start-Sleep -Seconds 2
    
    # Prüfe ob PDF existiert
    if (Test-Path $pdfFile) {
        $size = (Get-Item $pdfFile).Length
        $sizeMB = [math]::Round($size / 1MB, 2)
        
        Write-Host ""
        Write-Host "✅ PDF erfolgreich exportiert!" -ForegroundColor Green
        Write-Host "📦 Dateigröße: $sizeMB MB"
        Write-Host "📍 Speicherort: $pdfFile"
        Write-Host ""
        Write-Host "💾 Im Explorer öffnen: explorer.exe `"$OutputPath`"" -ForegroundColor Cyan
        
        exit 0
    } else {
        Write-Host ""
        Write-Host "⚠️  PDF-Datei wurde nicht erstellt" -ForegroundColor Red
        Write-Host "💡 Troubleshooting:" -ForegroundColor Yellow
        Write-Host "   1. Prüfe ob localhost:57302 erreichbar ist: npm run dev"
        Write-Host "   2. Prüfe ob Chrome/Edge korrekt installiert ist"
        Write-Host "   3. Probiere manuellen Export: Strg+P im Browser"
        exit 1
    }
    
} catch {
    Write-Host ""
    Write-Host "❌ Fehler beim PDF-Export: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
