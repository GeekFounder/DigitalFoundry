#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Exiting."
  exit 1
fi

echo "Build successful!"
echo "To deploy to Cloudflare Pages, follow these steps:"
echo "1. Install the Cloudflare Pages CLI: npm install -g wrangler"
echo "2. Authenticate with Cloudflare: wrangler login"
echo "3. Update the wrangler.toml file with your Cloudflare account ID and Supabase credentials."
echo "4. Deploy the project: wrangler pages deploy .next --project-name=podcast-media-kit-landing"
