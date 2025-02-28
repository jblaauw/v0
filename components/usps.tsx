import { USP } from "@/lib/contentful/types";
import { USPCard } from "./usp-card";

interface USPsParams {
  data: USP[];
}

export function USPs({ data }: USPsParams) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-3">
          {data.map((usp, index) => (
            <USPCard key={index} {...usp} />
          ))}
        </div>
      </div>
    </section>
  );
}
