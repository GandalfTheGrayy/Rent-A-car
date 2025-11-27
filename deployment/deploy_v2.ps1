$ErrorActionPreference = "Stop"

# Get Absolute Paths
$currentDir = Get-Location
$sourcePath = Join-Path $currentDir "..\frontend"
$sourcePath = (Resolve-Path $sourcePath).Path
$tempDir = Join-Path $currentDir "..\frontend_temp"
$zipPath = Join-Path $currentDir "frontend.zip"

$serverIp = "78.135.85.65"
$user = "root"

Write-Host "Starting Deployment V2 to $serverIp..." -ForegroundColor Green

# 1. Prepare Temp Directory
Write-Host "Preparing temporary files..." -ForegroundColor Cyan
if (Test-Path $tempDir) { 
    Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue 
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# 2. Copy files using Robocopy
Write-Host "Copying project files..." -ForegroundColor Cyan
$robocopyArgs = @(
    "`"$sourcePath`"", 
    "`"$tempDir`"",
    "/E",               
    "/XD", "node_modules", ".next", ".git", ".vscode", ".idea",
    "/XF", "*.log", "*.lock", "*.zip",
    "/R:1",             
    "/W:1",             
    "/NFL",             
    "/NDL",             
    "/NJH",             
    "/NJS"              
)
Start-Process -FilePath "robocopy" -ArgumentList $robocopyArgs -Wait -PassThru -NoNewWindow | Out-Null
Start-Sleep -Seconds 2

if (-not (Test-Path "$tempDir\package.json")) {
    Write-Error "Failed to copy package.json."
    exit 1
}

# 3. Zip
Write-Host "Zipping files..." -ForegroundColor Cyan
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipPath -CompressionLevel Optimal

# 4. Prepare Payload
Write-Host "Preparing transfer (Enter password ONCE)..." -ForegroundColor Yellow

# Read Zip as Base64
$zipBase64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($zipPath))

# Read Setup Script
$setupContent = Get-Content .\setup.sh -Raw
# Escape dollar signs for remote bash
$setupContent = $setupContent -replace '\$', '\$'

# Construct the Remote Bash Script
$remoteBash = @"
echo 'Receiving payload...'
# 1. Decode Zip
echo '$zipBase64' | base64 -d > /root/frontend.zip

# 2. Write Setup Script
cat > /root/setup.sh << 'EOF_SETUP'
$setupContent
EOF_SETUP

# 3. Run Setup
chmod +x /root/setup.sh
echo 'Running setup...'
bash /root/setup.sh
"@

# IMPORTANT: Strip ALL carriage returns from the remote bash script
$remoteBash = $remoteBash -replace "`r", ""

# Encode the ENTIRE remote script as Base64
$remoteBashBase64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($remoteBash))

# 5. Execute via SSH
Write-Host "Connecting to server..." -ForegroundColor Cyan
$remoteBashBase64 | ssh ${user}@${serverIp} "base64 -d | bash"

# 6. Cleanup
Write-Host "Cleaning up..." -ForegroundColor Cyan
Remove-Item $zipPath -Force
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue }

Write-Host "Deployment Finished Successfully!" -ForegroundColor Green
