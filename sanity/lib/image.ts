import createImageUrlBuilder from "@sanity/image-url"
import type { Image } from "sanity"

import { dataset, projectId } from "../env"
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || "",
    dataset: dataset || "",
})

export const urlForImage = (source: Image): ImageUrlBuilder => {
    return imageBuilder?.image(source).auto("format").fit("max")
}

/**
 * Hjelpefunksjon for å hente ut en url for et bilde fra sanity
 * @param source Bildet fra sanity
 * @returns En bulider som kan brukes til å hente ut en url for bildet
 */
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
    return imageBuilder.image(source)
}
