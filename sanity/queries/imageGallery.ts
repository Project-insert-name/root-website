import { client } from "@/sanity/lib/client"
import type { ImageGallery } from "@/sanity/types"

/**
 * Henter ut alle events fra sanity, sortert etter starttidspunkt
 * @returns En liste med alle events
 */
export async function getAllImageGalleries(): Promise<ReadonlyArray<ImageGallery>> {
    return await client.fetch('*[_type == "image_gallery | order(_createdAt)"]')
}

/**
 * Henter ut en specifikk galleri fra sanity basert på slug
 * @param slug Slug til galleriet
 * @returns Bildegalleri av typen ImageGallery, eller null om det ikke finnes
 */
export async function getImageGalleryBySlug(slug: string): Promise<ImageGallery | null> {
    return await client.fetch('*[_type == "image_gallery" && slug.current == $slug][0]', { slug })
}
