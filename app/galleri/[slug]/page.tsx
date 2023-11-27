import { notFound } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"
import Gallery from "@/components/imageGallery/gallery"
import SanityImage from "@/components/sanityImage"
import Link from "next/link"
import { LeftArrowIcon } from "@/components/icons/icon"

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
        <Gallery heading={imageGallery.title}>
            <Link
                href={"/galleri/"}
                className="flex items-center justify-center bg-slate-200"
                title="Tilbake til galleri">
                <LeftArrowIcon width={75}></LeftArrowIcon>
            </Link>
            {imageGallery.images?.map(image => (
                <SanityImage
                    key={image._key}
                    image={image}
                    alt={image.alt_text ? image.alt_text : ""}
                    loading="lazy"
                />
            ))}
        </Gallery>
    )
}

export default GalleryPage
