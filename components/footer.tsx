import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">ScentCraft</h4>
            <p className="text-sm text-muted-foreground">Create your perfect scent story.</p>
          </div>
          <nav className="space-y-2">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-sm hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm hover:underline">
                  Features
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-2">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-2">
            <h4 className="text-lg font-semibold">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col gap-4 md:flex-row md:gap-0 justify-between">
          <p className="text-xs text-muted-foreground">© 2024 ScentCraft, Inc. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">
              Privacy & Terms
            </Link>
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:underline">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

