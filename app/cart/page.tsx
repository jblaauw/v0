"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { CartSummary } from "@/components/cart-summary"
import { EmptyCart } from "@/components/empty-cart"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Dummy data for cart items
const initialItems = [
  {
    id: "1",
    name: "Byredo Mixed Emotions",
    image: "/placeholder.svg?height=200&width=200",
    price: 99.99,
    quantity: 1,
    notes: {
      top: ["Black Currant", "Bergamot", "Birch Woods"],
      mid: ["Wisteria", "Papyrus", "Violet"],
      base: ["Musk", "Cedarwood", "Vetiver"],
    },
  },
  {
    id: "2",
    name: "Summer Breeze",
    image: "/placeholder.svg?height=200&width=200",
    price: 79.99,
    quantity: 1,
    notes: {
      top: ["Citrus", "Sea Salt", "Green Apple"],
      mid: ["Jasmine", "Rose", "Lily"],
      base: ["Amber", "Sandalwood", "Vanilla"],
    },
  },
]

export default function CartPage() {
  const [items, setItems] = useState(initialItems)

  const updateQuantity = (id: string, quantity: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 10.0 // Example fixed discount
  const tax = (subtotal - discount) * 0.02 // 2% tax rate
  const total = subtotal - discount + tax

  const handleCheckout = () => {
    console.log("Proceeding to checkout...")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} {...item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
                ))}
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/design">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            <CartSummary subtotal={subtotal} discount={discount} tax={tax} total={total} onCheckout={handleCheckout} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

