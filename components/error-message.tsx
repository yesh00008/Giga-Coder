import Link from "next/link";
import { AlertCircle, BookOpen, ExternalLink } from "lucide-react";

interface ErrorMessageProps {
  title: string;
  message: string;
  type?: "api" | "database" | "general";
  onClose?: () => void;
}

export default function ErrorMessage({
  title,
  message,
  type = "general",
  onClose,
}: ErrorMessageProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-red-100 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{message}</p>

            {type === "api" && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-orange-900 mb-2">
                  Quick Fix:
                </p>
                <ol className="text-sm text-orange-800 space-y-1 list-decimal list-inside">
                  <li>Create a <code className="bg-orange-200 px-1 rounded">.env</code> file in your project root</li>
                  <li>Add: <code className="bg-orange-200 px-1 rounded">TOGETHER_API_KEY=your_key_here</code></li>
                  <li>Restart your development server</li>
                </ol>
              </div>
            )}

            {type === "database" && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-orange-900 mb-2">
                  Database Setup Required:
                </p>
                <ol className="text-sm text-orange-800 space-y-1 list-decimal list-inside">
                  <li>Set up a PostgreSQL database (try <a href="https://neon.tech" target="_blank" className="underline">Neon.tech</a>)</li>
                  <li>Add <code className="bg-orange-200 px-1 rounded">DATABASE_URL</code> to your .env file</li>
                  <li>Run: <code className="bg-orange-200 px-1 rounded">npx prisma migrate deploy</code></li>
                </ol>
              </div>
            )}

            <div className="flex gap-3">
              <Link
                href="/docs"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                <BookOpen className="w-4 h-4" />
                View Docs
              </Link>
              <a
                href="https://github.com/yesh00008/giga"
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
