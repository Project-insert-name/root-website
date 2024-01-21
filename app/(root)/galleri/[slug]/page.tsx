import { notFound, useSearchParams } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"

import GalleryModal from "@/components/imageGallery/galleryWithModal"

interface Params {
    slug: string
}

/**
 * Side for et enkelt bildegalleri. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * Denne siden returnerer en egen komponent siden state ikke kan håndteres av server-side komponenter
 * @param params Parametre fra URL
 */
const GalleryPage: AsyncPage<Params> = async ({ params }) => {
    const imageGallery = await getImageGalleryBySlug(params.slug)

    if (!imageGallery) return notFound()

    return <GalleryModal imageGallery={imageGallery}></GalleryModal>
}

export default GalleryPage
