import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"
import { toFormatDateAndTime } from "@/utils/dateUtils"
import { bigIconSize, DateIcon, TimeIcon } from "@/components/icons/icon"
import { notFound } from "next/navigation"
import Gallery from "@/components/imageGallery/gallery"
import SanityImage from "@/components/sanityImage"

interface Params {
    slug: string
}

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const GalleryPage: AsyncPage<Params> = async ({ params }) => {
    const imageGallery = await getImageGalleryBySlug(params.slug)

    if (!imageGallery) return notFound()

    return <Gallery heading={imageGallery.title}></Gallery>
}

export default GalleryPage
