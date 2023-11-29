import Gallery, { GalleryItem } from "@/components/imageGallery/gallery"
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
                <GalleryItem key={gallery._id}>
                    <Link href={`/galleri/${gallery.slug.current}`}>
                        <SanityImage
                            image={gallery.images?.[0]}
                            title={gallery.title}
                            alt={gallery.title}
                            loading="lazy"
                        />
                    </Link>
                </GalleryItem>
            ))}
        </Gallery>
    )
}
export default ImageGalleryListPage
