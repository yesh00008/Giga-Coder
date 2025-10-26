# ⚠️ GitHub Pages Limitation

## Why This App Can't Use GitHub Pages

GitHub Pages only hosts **static HTML/CSS/JS files**. Your Giga Coder app requires:

❌ **Server-side API routes** (for AI generation)  
❌ **Database connections** (PostgreSQL)  
❌ **Real-time streaming** (for code generation)  
❌ **Environment variables** (API keys)  
❌ **Server-side rendering** (Next.js App Router)

## ✅ Solution: Deploy to Vercel (FREE & Better!)

Vercel is made by the creators of Next.js and is **FREE** for personal projects.

### Quick Deploy (3 minutes):

#### Step 1: Go to Vercel
Visit: **https://vercel.com/new**

#### Step 2: Sign in with GitHub
- Click "Continue with GitHub"
- Authorize Vercel

#### Step 3: Import Your Repository
- Click "Import Git Repository"
- Search for: `Giga-Coder`
- Click "Import"

#### Step 4: Configure (Auto-detected!)
Vercel automatically detects:
- ✅ Framework: Next.js
- ✅ Build Command: `pnpm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `pnpm install`

#### Step 5: Add Environment Variables
Click "Environment Variables" and add these:

```env
TOGETHER_API_KEY=your_together_api_key
DATABASE_URL=your_neon_database_url
CSB_API_KEY=your_codesandbox_api_key
```

**Get your API keys:**
- TOGETHER_API_KEY: https://api.together.xyz
- DATABASE_URL: https://neon.tech
- CSB_API_KEY: https://codesandbox.io

#### Step 6: Deploy!
- Click "Deploy"
- Wait 2-3 minutes
- Your app is LIVE! 🎉

### Your App Will Be Available At:
```
https://giga-coder.vercel.app
```

### Auto-Deploy on Push
Every time you push to GitHub, Vercel automatically deploys! 🚀

```bash
git add .
git commit -m "New feature"
git push
# Vercel auto-deploys! ✨
```

---

## 🆚 Comparison

| Feature | GitHub Pages | Vercel |
|---------|-------------|---------|
| **Cost** | Free | Free |
| **Static Sites** | ✅ Yes | ✅ Yes |
| **Server APIs** | ❌ No | ✅ Yes |
| **Database** | ❌ No | ✅ Yes |
| **Next.js** | ❌ Limited | ✅ Perfect |
| **Environment Variables** | ❌ No | ✅ Yes |
| **Custom Domains** | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Yes | ✅ Yes |
| **Deploy Speed** | Medium | Fast |
| **Auto-Deploy** | Manual | ✅ Automatic |

---

## 🚀 Deploy Now!

**Click here to deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yesh00008/Giga-Coder)

Or visit: https://vercel.com/new

---

## Alternative Deployment Options

If you prefer not to use Vercel:

### 1. **Netlify** (Free)
- Visit: https://netlify.com
- Connect GitHub repository
- Add environment variables
- Deploy

### 2. **Railway** (Free tier)
- Visit: https://railway.app
- Connect GitHub
- Auto-deploys

### 3. **Render** (Free tier)
- Visit: https://render.com
- Connect repository
- Deploy

---

## 📞 Need Help?

1. Read: [DEPLOY.md](./DEPLOY.md) - Detailed deployment guide
2. Read: [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) - Step-by-step Vercel guide
3. GitHub Issues: https://github.com/yesh00008/Giga-Coder/issues

---

## 🎯 Summary

**❌ Don't use:** GitHub Pages (won't work)  
**✅ Use instead:** Vercel (free, easy, perfect for Next.js)

**Deploy now:** https://vercel.com/new 🚀
