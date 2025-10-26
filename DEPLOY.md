# 🚀 Deployment Guide

## Build Status
✅ Production build completed successfully!

## Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended - Free)

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `yesh00008/giga`
   - Vercel will auto-detect Next.js
   - Add environment variables:
     ```
     TOGETHER_API_KEY=your_key_from_api.together.xyz
     DATABASE_URL=your_postgres_url_from_neon.tech
     CSB_API_KEY=your_key_from_codesandbox.io
     HELICONE_API_KEY=optional_analytics_key
     ```
   - Click "Deploy"
   - Done! Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `.next`
6. Add environment variables (same as Vercel)
7. Deploy!

### Option 3: Deploy to Railway

1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables
6. Railway will auto-deploy!

## Environment Variables Required

### TOGETHER_API_KEY
- Get from: [api.together.xyz](https://api.together.xyz)
- Sign up → API Keys → Create new key
- Used for: AI code generation

### DATABASE_URL
- Get from: [neon.tech](https://neon.tech)
- Create project → Connection string
- Format: `postgresql://user:pass@host/db?sslmode=require`
- Used for: Storing chats and messages

### CSB_API_KEY
- Get from: [codesandbox.io](https://codesandbox.io)
- Settings → API Keys → Generate
- Used for: Code preview sandboxes

### HELICONE_API_KEY (Optional)
- Get from: [helicone.ai](https://helicone.ai)
- Used for: AI usage analytics

## Local Testing

```bash
# Build locally
pnpm run build

# Start production server
pnpm start

# Open http://localhost:3000
```

## GitHub Pages Note

⚠️ This app **cannot** be deployed to GitHub Pages because it requires:
- Server-side API routes
- Database connections
- Real-time AI streaming

Use Vercel, Netlify, or Railway instead (all have free tiers).

## Post-Deployment Checklist

- [ ] Environment variables added
- [ ] Database connection working
- [ ] AI API generating code
- [ ] Test create a simple app
- [ ] Share feature working
- [ ] Custom domain setup (optional)

## Troubleshooting

**Build fails?**
- Check all environment variables are set
- Ensure DATABASE_URL is valid
- Try `pnpm install` and rebuild

**App not loading?**
- Check deployment logs
- Verify environment variables
- Check database connection

**AI not responding?**
- Verify TOGETHER_API_KEY is valid
- Check API quota/limits
- Review Helicone dashboard

## Support

- GitHub Issues: [github.com/yesh00008/giga/issues](https://github.com/yesh00008/giga/issues)
- Documentation: Check `/docs` page after deployment

---

**Built with Next.js 15.5.0 | Deployed with ❤️**
