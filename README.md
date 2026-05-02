# Podcast Media Kit Generator - Landing Page

## Overview
This is the validation landing page for the Podcast Media Kit Generator. The goal is to capture waitlist emails in Supabase and validate the concept before building the full product.

## Features
- Responsive design using Next.js and TailwindCSS
- Hero section with compelling headline and visual comparison
- Problem and solution sections highlighting pain points and benefits
- Functional waitlist signup form connected to Supabase
- Social proof and pricing information

## Setup

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Supabase account
- Cloudflare Pages account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/GeekFounder/DigitalFoundry.git
   cd DigitalFoundry/podcast-media-kit-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.local.example` to `.env.local` and update with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://axdkcvyfveuyjfzsymce.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Supabase Setup
1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL script `supabase_waitlist_setup.sql` to create the `waitlist` table
3. Update the `.env.local` file with your Supabase URL and anonymous key

### Running Locally
```bash
npm run dev
```

The landing page will be available at `http://localhost:3000`.

### Building for Production
```bash
npm run build
```

### Deploying to Cloudflare Pages
1. Install the Cloudflare Pages CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Update the `wrangler.toml` file with your Cloudflare account ID and Supabase credentials.

4. Deploy the project:
   ```bash
   wrangler pages deploy .next --project-name=podcast-media-kit-landing
   ```

## License
This project is licensed under the MIT License.