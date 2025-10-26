import GithubIcon from "@/components/icons/github-icon";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative mx-auto flex w-full shrink-0 items-center justify-center py-6">
      <Link href="/">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Giga
        </h1>
      </Link>

      <div className="absolute right-3">
        <a
          href="https://github.com/yesh00008/giga"
          target="_blank"
          className="ml-auto hidden items-center gap-3 rounded-full bg-white/95 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-100 transition-all hover:bg-white hover:shadow-md hover:ring-gray-200 sm:flex"
        >
          <GithubIcon className="h-[18px] w-[18px]" />
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-amber-400"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            <span className="font-semibold">Star on GitHub</span>
          </div>
        </a>
      </div>
    </header>
  );
}
