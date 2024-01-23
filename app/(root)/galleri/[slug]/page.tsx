import { notFound } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"

import GalleryModal from "@/components/imageGallery/galleryWithModal"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Galleri | Root Linjeforening",
    description: "Bilder fra tidligere arrangementer i Root Linjeforening",
}

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

    return <GalleryModal imageGallery={imageGallery} />
}

export default GalleryPage
