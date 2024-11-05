import { useAsyncData, type AsyncData } from "nuxt/app";
import type ListingContent from "~/types/Listing";

export function useFeatured() {
  return useAsyncData("featured-listing", () =>
    queryCollection('directory').where('featured', '=', true).first()
  );
}
