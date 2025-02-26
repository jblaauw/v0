import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Your story, Bottled!</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {
                  "You and me sitting on our porch, watching the first raindrops hitting the dry earth after months of summer heat!"
                }
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Smell your story!</Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=550&width=400"
            width={550}
            height={400}
            alt="Perfume bottles arrangement"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}

