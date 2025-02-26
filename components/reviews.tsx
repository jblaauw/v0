import { ReviewCard } from "./review-card"

const reviewsData = [
  {
    name: "Emily R.",
    image: "/placeholder.svg?height=100&width=100",
    review: "Amazing scents tailored perfectly for me!",
  },
  {
    name: "James T.",
    image: "/placeholder.svg?height=100&width=100",
    review: "Unique fragrance blends that last all day.",
  },
  {
    name: "Sophia L.",
    image: "/placeholder.svg?height=100&width=100",
    review: "Incredible personalization and lovely aromas.",
  },
]

export function Reviews() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Hear from our awesome users!</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}

