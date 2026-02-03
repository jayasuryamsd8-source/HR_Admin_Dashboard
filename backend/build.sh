#!/bin/bash
set -e

echo "Building frontend..."
cd ../frontend
npm install --legacy-peer-dep
npm run build
echo "Frontend build complete!"
cd ../backend
echo "All done!"
