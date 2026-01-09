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
                aria-label="Airbnb"
                role="img"
                focusable="false"
                className="h-8 w-8 fill-current"
              >
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.162.723 4.691l-.04.305c-.297 1.948-1.579 3.518-3.528 4.314l-.403.153C24.032 30.563 22.4 31 20.373 31c-3.176 0-5.83-1.077-7.989-1.396l-.58-.08c-1.366-.179-2.731-.197-4.091-.04l-.271.034c-1.892.259-3.702.942-5.418 1.464l-.324.01-.1-.322c-.172-.519-.345-1.07-.345-1.63 0-1.42.854-2.716 2.185-3.32l.338-.146c1.375-.568 2.053-.941 2.457-1.346l.156-.168c.379-.434.61-1.047.85-2.02l.068-.291c.216-.957.531-2.062.905-3.333C14.184 9.077 15.65 1.571 16 1zm0 2c-.328 1.488-1.547 7.9-5.4 16.518l-.135.297c-.38 1.288-.696 2.4-.913 3.364l-.063.303c-.266 1.07-.565 1.93-1.127 2.544l-.2.195c-.658.66-1.59 1.155-3.179 1.836l-.37.15c-.696.315-1.113.897-1.113 1.523 0 .108.016.223.048.338.455-.138.914-.277 1.341-.397 1.763-.535 3.615-1.216 5.565-1.483l.288-.035c1.472-.171 2.955-.152 4.436.042l.534.073C17.75 28.528 20.306 29 20.373 29c1.604 0 2.872-.347 3.758-1.026l.332-.271c1.232-1.084 1.597-2.618 1.083-4.576l-.105-.382c-.934-2.176-5.071-10.835-7.025-14.665L17.844 6.9c-1.107-1.983-2.193-2.9-3.844-2.9z" />
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
