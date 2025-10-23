#!/bin/bash

# Quick Deploy Script for Kolmogorov CV
# Alternative to sync script with different options

set -e

echo "🚀 Kolmogorov CV Quick Deploy"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[DEPLOY]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2 globally..."
    npm install -g pm2
fi

# Build and start
print_status "Building application..."
npm run build

print_status "Starting production server..."
pm2 stop kolmogorov-cv 2>/dev/null || true
pm2 delete kolmogorov-cv 2>/dev/null || true
pm2 start ecosystem.config.cjs

print_success "✅ Deployed successfully on port 3090!"
print_status "Check status: pm2 status"
print_status "View logs: pm2 logs kolmogorov-cv"
