import Gallery, { GalleryImage, GalleryItem } from "@/components/imageGallery/gallery"
import { getAllImageGalleries } from "@/sanity/queries/imageGallery"
import Link from "next/link"

/**
 * Side for liste over alle gallerier
 */
const ImageGalleryListPage: AsyncPage = async () => {
    const galleries = await getAllImageGalleries()

    return (
        <>
            <Gallery heading="Bildegallerier">
                {galleries.map(gallery => (
                    <GalleryItem key={gallery._id}>
                        <Link
                            href={`/galleri/${gallery.slug.current}`}
                            className={"h-full w-full focus:outline-rootBlue"}>
                            <GalleryImage
                                image={gallery.images?.[0]}
                                title={gallery.title}
                                alt={gallery.images?.[0].alt}
                            />
                            <div className="m-2 flex w-full justify-center text-black">
                                <h3>{gallery.title}</h3>
                            </div>
                        </Link>
                    </GalleryItem>
                ))}
            </Gallery>
            {galleries.length === 0 && (
                <p className={"-translate-y-10 text-center"}>Ingen bilder enda :(</p>
            )}
        </>
    )
}
export default ImageGalleryListPage
