#!/bin/sh

echo "Switching to branch nginx"
git checkout nginx

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avzP build/* root@82.180.136.248:/home/blake/public_html/

echo "Deployment complete"
