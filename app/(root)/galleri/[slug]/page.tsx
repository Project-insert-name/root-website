import { notFound } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"
import Gallery, {
    GalleryItem,
    GalleryBackButton,
    GalleryImage,
} from "@/components/imageGallery/gallery"

interface Params {
    slug: string
}

/**
 * Side for et enkelt bildegalleri. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const GalleryPage: AsyncPage<Params> = async ({ params }) => {
    const imageGallery = await getImageGalleryBySlug(params.slug)

    if (!imageGallery) return notFound()

    return (
        <Gallery heading={imageGallery.title} event={imageGallery.event}>
            <GalleryBackButton />
            {imageGallery.images?.map(image => (
                <GalleryItem key={image._key}>
                    <GalleryImage image={image} alt={image.alt} />
                </GalleryItem>
            ))}
        </Gallery>
    )
}

export default GalleryPage
