import { USPCard } from "./usp-card"

const uspData = [
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Tailor fragrances",
    description: "Tailor fragrances to your preferences.",
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Explore scents",
    description: "Explore diverse scent components.",
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Custom delivery",
    description: "Get your custom perfume delivered.",
  },
]

export function USPs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-3">
          {uspData.map((usp, index) => (
            <USPCard key={index} {...usp} />
          ))}
        </div>
      </div>
    </section>
  )
}

