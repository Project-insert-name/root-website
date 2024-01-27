import { notFound } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"

import GalleryModal from "@/components/imageGallery/galleryWithModal"
import { type Metadata } from "next"

interface Params {
    slug: string
}

export const revalidate = 1800 // 30 min

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

/**
 * Genererer metadata for en side. Bruker tittel fra bildegalleriet og en standard beskrivelse.
 * Data som hentes caches. Dersom arrangementet ikke finnes, returneres notFound().
 * @param props Props for siden, inneholder slug som brukes for å hente arrangementet.
 * @returns Metadata for siden.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 */
export async function generateMetadata({ params }: PageProps<Params>): Promise<Metadata> {
    const gallery = await getImageGalleryBySlug(params.slug)

    if (!gallery) return notFound()

    return {
        title: `${gallery.title} | Root Linjeforening`,
        description: "Bilder fra et tidligere arrangement i Root Linjeforening",
    }
}
