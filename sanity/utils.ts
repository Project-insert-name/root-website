import { client } from "@/sanity";
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { remark } from "remark";
import html from "remark-html";
import type { Markdown } from "@/sanity/types";

const builder = imageUrlBuilder(client)

/**
 * Hjelpefunksjon for å hente ut en url for et bilde fra sanity
 * @param source Bildet fra sanity
 * @returns En bulider som kan brukes til å hente ut en url for bildet
 */
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
    return builder.image(source)
}

/**
 * Konverterer markdown til html
 * @param markdown Markdown som skal konverteres
 * @returns Html som er generert fra markdown. Kan settes direkte inn i en html-side med dangerouslySetInnerHTML.
 */
export async function fromMarkdown(markdown?: Markdown): Promise<string> {
    const file = await remark().use(html).process(markdown);
    return file.toString();
}
