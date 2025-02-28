import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { USPs } from "@/components/usps";
import { Reviews } from "@/components/reviews";
import { Newsletter } from "@/components/newsletter";
import { getAllReviews } from "@/lib/contentful/client";

export default async function LandingPage() {
  const reviews = await getAllReviews();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <USPs />
        <Reviews data={reviews} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
