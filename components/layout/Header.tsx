import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-5xl rounded-full border border-gray-200/50 bg-white/70 backdrop-blur-xl shadow-lg shadow-gray-200/20 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="StayGuide Logo"
                role="img"
                focusable="false"
                className="h-8 w-8 fill-current"
              >
                {/* Outline of a house with a navigation arrow/compass needle inside */}
                <path d="M16 2.5L3 13v14.5c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V13L16 2.5zm10 24H6V14.1l10-8.1 10 8.1v12.4z" />
                <path d="M16 9.5l-4 10.5 4-2 4 2-4-10.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              StayGuide
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="#features"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-full transition-all"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 md:block px-4 py-2 hover:bg-gray-100/50 rounded-full transition-all"
            >
              Log in
            </Link>
            <Button
              size="sm"
              variant="primary"
              className="rounded-full bg-[#FF385C] hover:bg-[#D90B3E] shadow-md shadow-[#FF385C]/20 border-none"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
