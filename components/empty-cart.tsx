import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ShoppingBag className="h-16 w-16 text-muted-foreground/60" />
      <h2 className="mt-4 text-lg font-medium">Your cart is empty</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {"Looks like you haven't added any fragrances to your cart yet."}
      </p>
      <Button asChild className="mt-8">
        <Link href="/design">Start Creating</Link>
      </Button>
    </div>
  );
}
