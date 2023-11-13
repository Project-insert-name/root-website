import Gallery from "@/components/imageGallery/gallery"
import { getAllImageGalleries } from "@/sanity/queries/imageGallery"
import SanityImage from "@/components/sanityImage"
import Link from "next/link"

/**
 * Side for liste over alle gallerier
 */
const ImageGalleryListPage: AsyncPage = async () => {
    const galleries = await getAllImageGalleries()

    return (
        <Gallery heading="Bildegallerier">
            {galleries.map(gallery => (
                <Link href={`/galleri/${gallery.slug.current}`}>
                    {/*//TODO Probably need to make some sort of image wrapper component*/}
                    <SanityImage
                        image={gallery.images?.[0]}
                        title={gallery.title}
                        alt={gallery.title}
                        loading="lazy"
                    />
                </Link>
            ))}
        </Gallery>
    )
}
export default ImageGalleryListPage
