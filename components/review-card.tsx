import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ReviewCardProps {
  name: string
  image: string
  review: string
}

export function ReviewCard({ name, image, review }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={100} height={100} className="rounded-full" />
          <div className="flex">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
          </div>
          <p className="text-center text-muted-foreground">{review}</p>
          <p className="font-semibold">{name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

