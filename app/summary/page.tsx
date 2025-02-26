"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SummaryPage() {
  const fragrance = {
    name: "Byredo Mixed Emotions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZMQRA9OZFOEYL8fmfmuytfzE5dJsP.png",
    notes: {
      top: ["Black Currant", "Bergamot", "Birch Woods"],
      mid: ["Wisteria", "Papyrus", "Violet"],
      base: ["Musk", "Cedarwood", "Vetiver"],
    },
    pricing: {
      subtotal: 99.99,
      discount: 10.0,
      tax: 2.0,
      total: 91.99,
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center">{fragrance.name}</h1>

          <div className="aspect-square relative max-w-xl mx-auto">
            <Image
              src={fragrance.image || "/placeholder.svg"}
              alt={fragrance.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h2 className="font-semibold">Top Notes</h2>
              <p className="text-muted-foreground">{fragrance.notes.top.join(", ")}</p>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Mid Notes</h2>
              <p className="text-muted-foreground">{fragrance.notes.mid.join(", ")}</p>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Base Notes</h2>
              <p className="text-muted-foreground">{fragrance.notes.base.join(", ")}</p>
            </div>
          </div>

          <Card className="max-w-sm mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total price of the perfume</span>
                  <span>$ {fragrance.pricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount applied</span>
                  <span>$ {fragrance.pricing.discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax estimation</span>
                  <span>$ {fragrance.pricing.tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Total cost</span>
                    <span>$ {fragrance.pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/design">Review & Edit</Link>
            </Button>
            <Button asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

