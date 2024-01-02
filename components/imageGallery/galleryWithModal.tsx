"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { ImageGallery } from "@/sanity/types"
import { useCallback, useEffect, useState } from "react"

import Gallery, {
    GalleryItem,
    GalleryBackButton,
    GalleryImage,
} from "@/components/imageGallery/gallery"
import { Link } from "@nextui-org/react"
import SanityImage from "../sanityImage"
import { useSearchParams } from "next/navigation"

interface GalleryModalProps extends ChildProps {
    imageGallery: ImageGallery
}

const GalleryModal: Component<GalleryModalProps> = ({ imageGallery }) => {
    const searchParams = useSearchParams()
    const initialImageIndex = searchParams.has("bilde")
        ? parseInt(searchParams.get("bilde")!)
        : undefined

    const [isOpen, setIsOpen] = useState(initialImageIndex ? true : false)
    const [activeImageIndex, setActiveImageIndex] = useState<undefined | number>(
        initialImageIndex ? initialImageIndex : undefined,
    )
    const [activeImage, setActiveImage] = useState<undefined | any>( //This should have a proper type
        initialImageIndex ? imageGallery.images[initialImageIndex] : undefined,
    )
    console.log(initialImageIndex, activeImageIndex, activeImage)

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index)
        setActiveImage(imageGallery.images[index])
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case "ArrowLeft":
                    console.log(event.key)
                    break
                case "ArrowRight":
                    console.log(event.key)
                    break
            }
        })
    })

    return (
        <>
            {activeImage && (
                <Modal
                    size="lg"
                    placement="top-center"
                    isOpen={isOpen}
                    onClose={onClose}
                    className={"sm:min-h-min sm:max-w-[1000px]"}>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{activeImage.alt}</h2>
                        </ModalHeader>
                        <ModalBody>
                            <div className="m-5 flex justify-center">
                                <SanityImage
                                    image={activeImage}
                                    alt={activeImage.alt ? activeImage.alt : ""}
                                />
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
            <Gallery heading={imageGallery.title} event={imageGallery.event}>
                <GalleryBackButton />
                {imageGallery.images?.map((image, index) => (
                    <GalleryItem key={image._key}>
                        <Link
                            onClick={() => handleImageClick(index)}
                            className="h-full w-full cursor-pointer">
                            <GalleryImage image={image} alt={image.alt} />
                        </Link>
                    </GalleryItem>
                ))}
            </Gallery>
        </>
    )
}
export default GalleryModal
