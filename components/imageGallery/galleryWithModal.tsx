"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { ImageGallery } from "@/sanity/types"
import { useEffect, useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

import Gallery, {
    GalleryItem,
    GalleryBackButton,
    GalleryImage,
} from "@/components/imageGallery/gallery"
import { Link } from "@nextui-org/react"
import SanityImage from "../sanityImage"

interface GalleryModalProps extends ChildProps {
    imageGallery: ImageGallery
}

const GalleryModal: Component<GalleryModalProps> = ({ imageGallery }) => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const initialImageIndex = parseInt(searchParams.get("bilde")!)
    const imageIsSet = Number.isInteger(initialImageIndex)

    let [isOpen, setIsOpen] = useState(imageIsSet)
    let [activeImageIndex, setActiveImageIndex] = useState(imageIsSet ? initialImageIndex : 0)
    let [activeImage, setActiveImage] = useState(
        imageIsSet ? imageGallery.images[initialImageIndex] : undefined,
    )

    /**
     * Dette er en 'handler' funksjon for on-click eventet til hvert enkelt gallery image
     * Den opdaterer staten til å representere det bildet som skal vises
     * @param index er indeksen til bildet som skal vises
     */
    const handleImageClick = (index: number) => {
        replace(`${pathname}?bilde=${index}`)
        setActiveImageIndex(index)
        setActiveImage(imageGallery.images[index])
        setIsOpen(true)
    }

    /**
     * Denne funksjonen er bundet til onClose parameteren til Modal komponenten
     * Dette betyr at når Modal blir lukket vil funksjonen kjøre
     */
    const onClose = () => {
        replace(pathname)
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
