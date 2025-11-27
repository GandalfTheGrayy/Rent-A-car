$ErrorActionPreference = "Stop"

# Get Absolute Paths
$currentDir = Get-Location
$sourcePath = Join-Path $currentDir "..\frontend"
$sourcePath = (Resolve-Path $sourcePath).Path
$tempDir = Join-Path $currentDir "..\frontend_temp"
$zipPath = Join-Path $currentDir "frontend.zip"

$serverIp = "78.135.85.65"
$user = "root"

Write-Host "Starting Deployment to $serverIp..." -ForegroundColor Green
Write-Host "Source: $sourcePath" -ForegroundColor Gray
Write-Host "Temp:   $tempDir" -ForegroundColor Gray

# 1. Prepare Temp Directory
Write-Host "Preparing temporary files..." -ForegroundColor Cyan
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue }
New-Item -ItemType Directory -Path $tempDir | Out-Null

# 2. Copy files (Pure PowerShell to avoid Robocopy issues)
Write-Host "Copying project files..." -ForegroundColor Cyan

# Get all top-level items
$items = Get-ChildItem -Path $sourcePath

foreach ($item in $items) {
    # Exclude specific folders/files
    if ($item.Name -in @("node_modules", ".next", ".git", ".vscode", ".idea", "frontend.zip")) {
        Write-Host "Skipping $($item.Name)" -ForegroundColor DarkGray
        continue
    }
    
    # Copy item
    try {
        Copy-Item -Path $item.FullName -Destination $tempDir -Recurse -Force
    } catch {
        Write-Warning "Could not copy $($item.Name): $_"
    }
}

if (-not (Test-Path "$tempDir\package.json")) {
    Write-Error "Failed to copy package.json. Please check if the frontend folder exists and contains package.json."
    exit 1
}

# 3. Zip
Write-Host "Zipping files..." -ForegroundColor Cyan
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipPath -CompressionLevel Optimal

# 4. Read Zip
Write-Host "Reading zip file..." -ForegroundColor Cyan
$base64Zip = [Convert]::ToBase64String([IO.File]::ReadAllBytes($zipPath))

$setupScriptContent = Get-Content .\setup.sh -Raw
$setupScriptContent = $setupScriptContent -replace '\$', '\$'

# 5. Remote Execution
$remoteCommand = "
echo 'Receiving payload...'
echo '$base64Zip' | base64 -d > /root/frontend.zip
echo 'Writing setup script...'
cat > /root/setup.sh << 'EOF'
$setupScriptContent
EOF
chmod +x /root/setup.sh
echo 'Running setup...'
bash /root/setup.sh
"

Write-Host "Deploying to server (Enter password ONCE)..." -ForegroundColor Yellow
ssh ${user}@${serverIp} $remoteCommand

# 6. Cleanup
Write-Host "Cleaning up..." -ForegroundColor Cyan
Remove-Item $zipPath -Force
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue }

Write-Host "Deployment Finished Successfully!" -ForegroundColor Green
