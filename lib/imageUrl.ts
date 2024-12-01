import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url"; // Default import for image-url builder
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function ImageUrl(source: SanityImageSource) {
  return builder.image(source);
}
