#!/bin/bash

# Local Development Script
# For local development without PM2

echo "🚀 Kolmogorov CV Local Development"

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

# Start development server
print_status "Starting development server on port 3090..."
PORT=3090 npm run dev

print_success "🎉 Development server started!"
print_status "Available at: http://localhost:3090"
