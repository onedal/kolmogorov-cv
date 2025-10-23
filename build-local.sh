#!/bin/bash

# Local Build and Serve Script
# For local testing of production build

echo "🚀 Kolmogorov CV Local Build & Serve"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Build application
print_status "Building application..."
npm run build

# Stop existing serve process
print_status "Stopping existing server..."
pkill -f "serve.*build" || true

# Start serve
print_status "Starting server on port 3090..."
nohup serve -s build -l 3090 > logs/serve.log 2>&1 &

# Wait for server to start
sleep 2

print_success "🎉 Build and serve completed!"
print_status "Server running on: http://localhost:3090"
print_status "Logs: tail -f logs/serve.log"
