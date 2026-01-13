import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight text-[#222222]">
                StayGuide
              </span>
            </Link>
            <p className="text-secondary text-base max-w-xs leading-relaxed">
              The #1 AI voice concierge for vacation rentals. Helping hosts
              provide 5-star guest experiences on autopilot.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#222222] mb-6">Product</h3>
            <ul className="space-y-4 text-secondary">
              <li>
                <Link
                  href="#features"
                  className="hover:text-[#222222] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-[#222222] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-[#222222] transition-colors"
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#222222] mb-6">Company</h3>
            <ul className="space-y-4 text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#222222] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#222222] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#222222] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#222222] mb-6">Legal</h3>
            <ul className="space-y-4 text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#222222] transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#222222] transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#222222] transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-secondary text-sm">
          <p>
            © {new Date().getFullYear()} StayGuide Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#222222] transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#222222] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#222222] transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
