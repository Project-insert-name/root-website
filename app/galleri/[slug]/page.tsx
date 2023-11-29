import { notFound } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"
import Gallery, { GalleryItem } from "@/components/imageGallery/gallery"
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
            <GalleryItem>
                <Link href={"/galleri/"} title="Tilbake til galleri">
                    <LeftArrowIcon width={75}></LeftArrowIcon>
                </Link>
            </GalleryItem>
            {imageGallery.images?.map(image => (
                <GalleryItem key={image._key}>
                    <SanityImage
                        image={image}
                        alt={image.alt_text ? image.alt_text : ""}
                        loading="lazy"
                    />
                </GalleryItem>
            ))}
        </Gallery>
    )
}

export default GalleryPage
