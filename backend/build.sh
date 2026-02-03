#!/bin/bash
set -e

echo "Building frontend..."
cd ../frontend
npm ci --legacy-peer-deps
npm run build

echo "Frontend build complete!"
cd ../backend
echo "All done!"
