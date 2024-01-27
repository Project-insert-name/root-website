import { cdnClient } from "@/sanity/lib/client"
import type { ImageGallery } from "@/sanity/types"

/**
 * Henter ut alle cards fra sanity, sortert etter starttidspunkt
 * @returns En liste med alle cards
 */
export async function getAllImageGalleries(): Promise<ReadonlyArray<ImageGallery>> {
    return await cdnClient.fetch('*[_type == "image_gallery"] | order(_createdAt desc)')
}

/**
 * Henter ut alle slugs til alle gallerier fra sanity
 */
export async function getAllImageGallerySlugs(): Promise<
    ReadonlyArray<Pick<ImageGallery, "slug">>
> {
    return cdnClient.fetch('*[_type == "image_gallery"]{slug}')
}

/**
 * Henter ut en spesifikk galleri fra sanity basert på slug
 * @param slug Slug til galleriet
 * @returns Bildegalleri av typen ImageGallery, eller null om det ikke finnes
 */
export async function getImageGalleryBySlug(slug: string): Promise<Readonly<ImageGallery> | null> {
    return await cdnClient.fetch(
        '*[_type == "image_gallery" && slug.current == $slug][0]{...,event->{slug}}',
        { slug },
    )
}
