<a href="https://www.gigacoder.io">
  <img alt="Giga Coder - AI App Generator" src="./public/image.png">
  <h1 align="center">Giga Coder</h1>
</a>

<p align="center">
  <strong>Turn your ideas into apps with AI</strong><br>
  An open-source AI-powered app generator – create beautiful, functional apps with just one prompt.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## ✨ Features

- 🤖 **AI-Powered Generation** - Multiple AI models to choose from
- ⚡ **Real-time Preview** - See your app come to life instantly
- 🎨 **Beautiful UI** - Built with Tailwind CSS and Shadcn components
- 💾 **Save & Share** - Save your creations and share with others
- 📱 **Responsive** - Works perfectly on desktop and mobile
- 🔄 **Iteration** - Refine and improve your apps with chat
- 🖼️ **Screenshot to Code** - Upload designs and convert to code
- 📊 **Multiple Quality Modes** - Fast generation or high-quality detailed apps

## 🛠️ Tech Stack

- **AI Models**: Together AI (Qwen, GLM, Llama, DeepSeek, Kimi)
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn
- **Code Sandbox**: Sandpack by CodeSandbox
- **Database**: PostgreSQL (Neon) + Prisma ORM
- **Analytics**: Plausible + Helicone
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and pnpm
- PostgreSQL database (we recommend [Neon](https://neon.tech))
- API keys (see below)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yesh00008/Giga-Coder.git
   cd Giga-Coder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   
   ```env
   # Required: Together AI API Key
   TOGETHER_API_KEY=your_key_from_api.together.xyz
   
   # Required: Database Connection
   DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
   
   # Required: CodeSandbox API Key
   CSB_API_KEY=your_key_from_codesandbox.io
   
   # Optional: Analytics
   HELICONE_API_KEY=your_helicone_key
   ```

4. **Set up the database**
   ```bash
   pnpm prisma generate
   pnpm prisma migrate deploy
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Getting API Keys

### Together AI (Required)
1. Visit [api.together.xyz](https://api.together.xyz)
2. Sign up/Login
3. Go to API Keys section
4. Create a new key
5. Copy and add to `.env` as `TOGETHER_API_KEY`

### Neon Database (Required)
1. Visit [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to `.env` as `DATABASE_URL`

### CodeSandbox (Required)
1. Visit [codesandbox.io](https://codesandbox.io)
2. Go to Settings → API Keys
3. Generate a new key
4. Add to `.env` as `CSB_API_KEY`

### Helicone (Optional)
1. Visit [helicone.ai](https://helicone.ai)
2. Sign up and create API key
3. Add to `.env` as `HELICONE_API_KEY`

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yesh00008/Giga-Coder)

1. Click the button above or:
2. Push your code to GitHub
3. Import project in Vercel
4. Add environment variables
5. Deploy!

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � Contributors

Thanks to these wonderful people who have contributed to Giga Coder:

<!-- ALL-CONTRIBUTORS-LIST:START -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/yesh00008">
        <img src="https://github.com/yesh00008.png" width="100px;" alt="Yaswanth Thotakura"/>
        <br />
        <sub><b>Yaswanth Thotakura</b></sub>
      </a>
      <br />
      <a href="#" title="Code">💻</a>
      <a href="#" title="Documentation">📖</a>
      <a href="#" title="Design">🎨</a>
      <a href="#" title="Ideas">🤔</a>
    </td>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

Want to see your name here? Check out our [Contributing Guide](./CONTRIBUTING.md) and make your first contribution!

## �📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn](https://ui.shadcn.com/)
- Code sandbox by [CodeSandbox](https://codesandbox.io/)
- AI models by [Together AI](https://www.together.ai/)

## 📧 Contact

- GitHub: [@yesh00008](https://github.com/yesh00008)
- X/Twitter: [@yeshhhhhh7](https://x.com/yeshhhhhh7)

---

<p align="center">
  <strong>Made with ❤️ by the Giga team</strong><br>
  Star ⭐ this repo if you find it useful!
</p>
