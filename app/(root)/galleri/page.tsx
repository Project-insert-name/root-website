import Gallery, { GalleryImage, GalleryItem } from "@/components/imageGallery/gallery"
import { getAllImageGalleries } from "@/sanity/queries/imageGallery"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Bildegalleri | Root Linjeforening",
    description: "Bilder fra tidligere arrangementer i Root Linjeforening",
}

export const revalidate = 1800 // 30 min

/**
 * Viser alle tilgjengelige bildegallerier
 */
const ImageGalleryListPage: AsyncPage = async () => {
    const galleries = await getAllImageGalleries()

    return (
        <>
            <Gallery heading="Bildegallerier">
                {galleries.map(gallery => (
                    <Link
                        key={gallery._id}
                        href={`/studenter/galleri/${gallery.slug.current}`}
                        className={"flex rounded-2xl focus:outline focus:outline-root-primary"}>
                        <GalleryItem>
                            <GalleryImage
                                image={gallery.images?.[0]}
                                title={gallery.title}
                                alt={gallery.images?.[0].alt}
                            />
                            <div className="m-2 flex w-full justify-center">
                                <h3 className={"text-dark-title dark:text-white"}>
                                    {gallery.title}
                                </h3>
                            </div>
                        </GalleryItem>
                    </Link>
                ))}
            </Gallery>
            {galleries.length === 0 && (
                <p className={"-translate-y-10 text-center"}>Ingen bilder enda :(</p>
            )}
        </>
    )
}
export default ImageGalleryListPage
