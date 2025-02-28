import { createClient } from "contentful";
import type { Review } from "./types.ts";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllReviews(): Promise<Review[]> {
  try {
    const response = await client.getEntries({
      content_type: "customerReview",
    });
    return response.items as unknown as Review[];
  } catch (error) {
    console.error("Error fetching fragrances:", error);
    return [];
  }
}
