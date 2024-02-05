import { cdnClient } from "@/sanity/lib/client"
import type { ImageGallery } from "@/sanity/types"

/**
 * Henter ut alle gallerier fra sanity, sortert etter starttidspunkt
 * @returns En liste med alle gallerier
 */
export async function getAllImageGalleries(): Promise<ReadonlyArray<ImageGallery>> {
    return cdnClient.fetch('*[_type == "image_gallery"] | order(_createdAt desc)')
}

/**
 * Henter ut en spesifikk galleri fra sanity basert på slug
 * @param slug Slug til galleriet
 * @returns Bildegalleri av typen ImageGallery, eller null om det ikke finnes
 */
export async function getImageGalleryBySlug(slug: string): Promise<Readonly<ImageGallery> | null> {
    return cdnClient.fetch(
        '*[_type == "image_gallery" && slug.current == $slug][0]{...,event->{slug}}',
        { slug },
    )
}
