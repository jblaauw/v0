import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { USPs } from "@/components/usps"
import { Reviews } from "@/components/reviews"
import { Newsletter } from "@/components/newsletter"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <USPs />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

