# Remove all node_modules folders and pnpm-lock.yaml files in the project directory and its subdirectories
param(
    [string]$RootPath = "."
)

Write-Host "Starte Bereinigung unter $RootPath ..." -ForegroundColor Cyan

# 1. Alle node_modules Ordner finden und löschen
Get-ChildItem -Path $RootPath -Directory -Recurse -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -eq "node_modules" } |
    ForEach-Object {
        Write-Host "Lösche Ordner: $($_.FullName)" -ForegroundColor Yellow
        Remove-Item -Path $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }

# 2. Alle pnpm-lock.yaml Dateien finden und löschen
Get-ChildItem -Path $RootPath -Filter "pnpm-lock.yaml" -Recurse -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
        Write-Host "Lösche Datei: $($_.FullName)" -ForegroundColor Magenta
        Remove-Item -Path $_.FullName -Force -ErrorAction SilentlyContinue
    }

# 2. Alle package-lock.json Dateien finden und löschen
Get-ChildItem -Path $RootPath -Filter "package-lock.json" -Recurse -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
        Write-Host "Lösche Datei: $($_.FullName)" -ForegroundColor Magenta
        Remove-Item -Path $_.FullName -Force -ErrorAction SilentlyContinue
    }

Write-Host "Bereinigung abgeschlossen." -ForegroundColor Green
