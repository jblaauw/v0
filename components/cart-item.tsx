import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartItemProps {
  id: string
  name: string
  image: string
  price: number
  quantity: number
  notes: {
    top: string[]
    mid: string[]
    base: string[]
  }
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({ id, name, image, price, quantity, notes, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative aspect-square h-24 w-24 min-w-24 overflow-hidden rounded-md">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{name}</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onRemove(id)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Top Notes: {notes.top.join(", ")}</p>
          <p>Mid Notes: {notes.mid.join(", ")}</p>
          <p>Base Notes: {notes.base.join(", ")}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(id, quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(id, quantity + 1)}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <p className="font-medium">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

