import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Giga Documentation
        </h1>

        {/* Getting Started Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-orange-500">🚀</span>
            Getting Started
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <p className="text-gray-700 mb-4">
              Welcome to Giga! This AI-powered code generator helps you create
              beautiful apps with just a simple prompt. Follow these steps to
              get started:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Set up your API keys (see below)</li>
              <li>Enter your app idea in the prompt box</li>
              <li>Choose your preferred AI model</li>
              <li>Select quality level (High for complex apps, Low for faster results)</li>
              <li>Click submit and watch your app come to life!</li>
            </ol>
          </div>
        </section>

        {/* API Configuration Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-orange-500">🔑</span>
            API Configuration
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Required API Keys
            </h3>
            <p className="text-gray-700 mb-4">
              To use Giga, you need to configure the following API keys in your{" "}
              <code className="bg-orange-100 px-2 py-1 rounded text-sm">
                .env
              </code>{" "}
              file:
            </p>

            <div className="space-y-6">
              {/* Together AI API Key */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  1. TOGETHER_API_KEY
                </h4>
                <p className="text-gray-700 mb-3">
                  This is your AI model API key for code generation.
                </p>
                
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    How to get your API key:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    <li>Visit <a href="https://api.together.xyz" target="_blank" className="text-orange-600 hover:underline">api.together.xyz</a></li>
                    <li>Sign up or log in to your account</li>
                    <li>Navigate to the API Keys section in your dashboard</li>
                    <li>Click "Create new API key"</li>
                    <li>Copy the generated key</li>
                  </ol>
                </div>

                <div className="bg-gray-900 rounded p-4 text-white font-mono text-sm">
                  <code>TOGETHER_API_KEY=your_api_key_here</code>
                </div>
              </div>

              {/* CSB API Key */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  2. CSB_API_KEY (Optional)
                </h4>
                <p className="text-gray-700 mb-3">
                  CodeSandbox API key for enhanced code preview features.
                </p>
                
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    How to get your CSB API key:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    <li>Visit <a href="https://codesandbox.io" target="_blank" className="text-orange-600 hover:underline">codesandbox.io</a></li>
                    <li>Sign in with your account</li>
                    <li>Go to Settings → Integrations</li>
                    <li>Generate an API token</li>
                    <li>Copy and save the token</li>
                  </ol>
                </div>

                <div className="bg-gray-900 rounded p-4 text-white font-mono text-sm">
                  <code>CSB_API_KEY=your_csb_key_here</code>
                </div>
              </div>

              {/* Database URL */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  3. DATABASE_URL
                </h4>
                <p className="text-gray-700 mb-3">
                  PostgreSQL database connection string for storing your generated apps.
                </p>
                
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Recommended: Use Neon Database
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    <li>Visit <a href="https://neon.tech" target="_blank" className="text-orange-600 hover:underline">neon.tech</a></li>
                    <li>Create a free account</li>
                    <li>Create a new project</li>
                    <li>Copy the connection string from your dashboard</li>
                    <li>Make sure to select "Prisma" format</li>
                  </ol>
                </div>

                <div className="bg-gray-900 rounded p-4 text-white font-mono text-sm overflow-x-auto">
                  <code>DATABASE_URL=postgresql://user:password@host/database?sslmode=require</code>
                </div>
              </div>
            </div>
          </div>

          {/* .env File Example */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Complete .env File Example
            </h3>
            <p className="text-gray-700 mb-4">
              Create a <code className="bg-orange-100 px-2 py-1 rounded text-sm">.env</code> file in your project root with:
            </p>
            <div className="bg-gray-900 rounded p-4 text-white font-mono text-sm">
              <pre>{`# AI Model API Key
TOGETHER_API_KEY=your_together_api_key_here

# CodeSandbox API Key (Optional)
CSB_API_KEY=your_codesandbox_api_key_here

# Database Connection
DATABASE_URL=postgresql://user:password@host/database?sslmode=require

# Optional: Helicone for Analytics
HELICONE_API_KEY=your_helicone_key_here`}</pre>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-orange-500">✨</span>
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
              <h3 className="font-semibold text-gray-800 mb-2">AI-Powered Generation</h3>
              <p className="text-gray-600">
                Use advanced AI models to generate complete React applications from simple text prompts.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
              <h3 className="font-semibold text-gray-800 mb-2">Multiple Models</h3>
              <p className="text-gray-600">
                Choose from various AI models optimized for different use cases and performance levels.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
              <h3 className="font-semibold text-gray-800 mb-2">Screenshot to Code</h3>
              <p className="text-gray-600">
                Upload a screenshot and let AI recreate the design as a working React component.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
              <h3 className="font-semibold text-gray-800 mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Toggle between high-quality detailed planning and fast generation based on your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-orange-500">💡</span>
            Use Cases
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  1. Rapid Prototyping
                </h3>
                <p className="text-gray-600">
                  Quickly create MVP prototypes to validate ideas before investing in full development.
                </p>
                <div className="bg-orange-50 rounded p-3 mt-2 text-sm text-gray-700">
                  <strong>Example:</strong> "Create a landing page for a fitness app with hero section, features, and pricing"
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  2. Learning & Education
                </h3>
                <p className="text-gray-600">
                  Study well-structured code examples and learn React best practices.
                </p>
                <div className="bg-orange-50 rounded p-3 mt-2 text-sm text-gray-700">
                  <strong>Example:</strong> "Build a todo app with local storage and filtering"
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  3. UI Component Library
                </h3>
                <p className="text-gray-600">
                  Generate reusable components for your design system.
                </p>
                <div className="bg-orange-50 rounded p-3 mt-2 text-sm text-gray-700">
                  <strong>Example:</strong> "Create a customizable card component with hover effects"
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  4. Design to Code
                </h3>
                <p className="text-gray-600">
                  Convert designs and mockups into working code instantly.
                </p>
                <div className="bg-orange-50 rounded p-3 mt-2 text-sm text-gray-700">
                  <strong>Example:</strong> Upload a screenshot of your Figma design
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-orange-500">🔧</span>
            Troubleshooting
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  ❌ "API Key Not Configured"
                </h3>
                <p className="text-gray-600 mb-2">
                  Make sure you've created a <code className="bg-orange-100 px-2 py-1 rounded text-sm">.env</code> file with your TOGETHER_API_KEY.
                </p>
                <p className="text-sm text-gray-500">
                  Restart your development server after adding the key.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  ❌ "Database Connection Error"
                </h3>
                <p className="text-gray-600 mb-2">
                  Verify your DATABASE_URL is correct and the database is accessible.
                </p>
                <p className="text-sm text-gray-500">
                  Run <code className="bg-orange-100 px-2 py-1 rounded text-sm">npx prisma migrate deploy</code> to set up tables.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  ❌ "Generation Failed"
                </h3>
                <p className="text-gray-600 mb-2">
                  Try simplifying your prompt or switching to a different AI model.
                </p>
                <p className="text-sm text-gray-500">
                  Check your API key has sufficient credits/quota.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-orange-500">💡</span>
            Pro Tips
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-md p-6 border border-orange-200">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Be specific:</strong> Detailed prompts generate better results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Use high quality:</strong> For complex apps with multiple features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Iterate:</strong> Generate multiple versions and refine your prompt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Try examples:</strong> Click suggested prompts to see what works well</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Screenshot feature:</strong> Great for replicating existing designs</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-600 mt-12 pt-8 border-t border-gray-200">
          <p>
            Need more help?{" "}
            <a
              href="https://github.com/yesh00008"
              target="_blank"
              className="text-orange-600 hover:underline"
            >
              Visit our GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
