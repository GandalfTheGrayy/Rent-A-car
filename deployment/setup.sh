#!/bin/bash

# Stop on error
set -e

echo "🚀 Starting Server Setup..."

# 1. Update System
echo "📦 Updating system packages..."
apt-get update -y
apt-get install -y curl git unzip

# 2. Install Node.js 20
echo "🟢 Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# 3. Install PM2
echo "⚙️ Installing PM2..."
npm install -g pm2

# 4. Install Nginx
echo "🌐 Installing Nginx..."
apt-get install -y nginx

# 5. Setup Application
echo "📂 Setting up application..."
mkdir -p /var/www/rent-a-car
# Assuming zip file is uploaded to /root/frontend.zip
if [ -f "/root/frontend.zip" ]; then
    echo "📦 Extracting frontend.zip..."
    unzip -o /root/frontend.zip -d /var/www/rent-a-car
    rm /root/frontend.zip
else
    echo "⚠️ frontend.zip not found in /root! Please upload it first."
    exit 1
fi

# 6. Install Dependencies & Build
echo "🔨 Building application..."
cd /var/www/rent-a-car/frontend
npm install
npm run build

# 7. Start with PM2
echo "🚀 Starting with PM2..."
pm2 delete rent-a-car-frontend || true
pm2 start npm --name "rent-a-car-frontend" -- start -- --port 3000
pm2 save
pm2 startup

# 8. Configure Nginx
echo "🔧 Configuring Nginx..."
cat > /etc/nginx/sites-available/default <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# 9. Restart Nginx
echo "🔄 Restarting Nginx..."
systemctl restart nginx

echo "✅ Deployment Complete! Visit http://78.135.85.65"
