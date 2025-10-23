#!/bin/bash

# Production start script for Kolmogorov CV
# Runs on port 3090 with production optimizations

echo "🚀 Starting Kolmogorov CV in production mode..."

# Build the application
echo "📦 Building application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Start production server
echo "🌐 Starting production server on port 3090..."
PORT=3090 npm run start:prod

echo "🎉 Server started! Available at:"
echo "   Local:   http://localhost:3090"
echo "   Network: http://$(hostname -I | awk '{print $1}'):3090"
