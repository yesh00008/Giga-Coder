# Giga - AI App Generator

Deploy this app to Vercel (recommended) or any Node.js hosting platform.

## Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Import your GitHub repository
5. Add environment variables:
   - `TOGETHER_API_KEY` - Get from api.together.xyz
   - `DATABASE_URL` - Get from neon.tech
   - `CSB_API_KEY` - Get from codesandbox.io
   - `HELICONE_API_KEY` - (Optional) Get from helicone.ai

6. Click Deploy

### Alternative: Deploy to Netlify

This app uses server-side features and requires a Node.js environment. Deploy to:
- Vercel (recommended)
- Railway
- Render
- Fly.io

### Build Command
```bash
pnpm run build
```

### Start Command
```bash
pnpm start
```

## Environment Variables Required

```env
TOGETHER_API_KEY=your_together_api_key
DATABASE_URL=your_neon_database_url
CSB_API_KEY=your_codesandbox_api_key
HELICONE_API_KEY=your_helicone_key (optional)
```

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```
