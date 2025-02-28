import { Review } from "@/lib/contentful/types";
import { ReviewCard } from "./review-card";

interface ReviewsParams {
  data: Review[];
}

export function Reviews({ data }: ReviewsParams) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Hear from our awesome users!
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {data.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
