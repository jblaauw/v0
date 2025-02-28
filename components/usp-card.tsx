import { USP } from "@/lib/contentful/types";
import Image from "next/image";

export function USPCard(usp: USP) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="rounded-full bg-primary/10 p-4">
        <Image
          src={
            `https:${usp.fields.image.fields.file.url}` || "/placeholder.svg"
          }
          width={48}
          height={48}
          alt={`${usp.fields.name} icon`}
          className="aspect-square"
        />
      </div>
      <h3 className="text-xl font-bold">{usp.fields.name}</h3>
      <p className="text-muted-foreground">{usp.fields.description}</p>
    </div>
  );
}
