import Image from "next/image"

interface USPCardProps {
  icon: string
  title: string
  description: string
}

export function USPCard({ icon, title, description }: USPCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="rounded-full bg-primary/10 p-4">
        <Image
          src={icon || "/placeholder.svg"}
          width={48}
          height={48}
          alt={`${title} icon`}
          className="aspect-square"
        />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

