"use client"

import { notFound } from "next/navigation"
import { getImageGalleryBySlug } from "@/sanity/queries/imageGallery"
import Gallery, {
    GalleryItem,
    GalleryBackButton,
    GalleryImage,
} from "@/components/imageGallery/gallery"
import GalleryModal from "@/components/imageGallery/galleryModal"
import { useCallback, useState } from "react"
import { Link } from "@nextui-org/react"

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

    const [isOpen, setIsOpen] = useState(false)
    const [activeImage, setActiveImage] = useState(undefined)

    const handleImageClick = useCallback(image => {
        setActiveImage(image)
        setIsOpen(true)
    }, [])

    return (
        <>
            <GalleryModal isOpen={isOpen} activeImage={activeImage}></GalleryModal>
            <Gallery heading={imageGallery.title} event={imageGallery.event}>
                <GalleryBackButton />
                {imageGallery.images?.map(image => (
                    <GalleryItem key={image._key}>
                        <Link onClick={() => handleImageClick(image)}>
                            <GalleryImage image={image} alt={image.alt} />
                        </Link>
                    </GalleryItem>
                ))}
            </Gallery>
        </>
    )
}

export default GalleryPage
