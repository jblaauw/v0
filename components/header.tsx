import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">ScentCraft</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/home" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/design" className="text-sm font-medium hover:underline underline-offset-4">
            Design
          </Link>
          <Link href="/summary" className="text-sm font-medium hover:underline underline-offset-4">
            Summary
          </Link>
        </nav>
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  )
}

