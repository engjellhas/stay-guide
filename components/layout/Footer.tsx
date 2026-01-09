import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background text-sm">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold tracking-tight">
                StayGuide
              </span>
            </Link>
            <p className="text-muted-foreground">
              The voice-first AI concierge that handles guest questions
              instantly, 24/7.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-foreground">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex gap-4 text-muted-foreground">
              {/* Social Icons Placeholders */}
              <a href="#" className="hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-muted-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} StayGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
