import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/lib/contentful/types";

export function ReviewCard(review: Review) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={
              `https:${review.fields.image.fields.file.url}` ||
              "/placeholder.svg"
            }
            alt={review.fields.name}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="flex">
            {Array(5)
              .fill(null)
              .map((_, i) => {
                const rating = parseInt(review.fields.rating);
                const fillClass = rating <= i ? "" : " fill-primary";
                return (
                  <Star
                    key={i}
                    className={`w-5 h-5 text-primary${fillClass}`}
                  />
                );
              })}
          </div>
          <p className="text-center text-muted-foreground">
            {review.fields.reviewText}
          </p>
          <p className="font-semibold">{review.fields.name}</p>
        </div>
      </CardContent>
    </Card>
  );
}
