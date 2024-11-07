import { useAsyncData } from "nuxt/app";
import type ListingContent from "~/types/Listing";

export function useDirectory() {
  const directoryData = useAsyncData("board", () => {
    const query = queryCollection('directory');

    query.select("featured", "card_image", "description", "title", "path", "tags");

    return query.order('featured', "DESC").all()
  });

  return directoryData;
}
