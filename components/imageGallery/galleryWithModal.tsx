"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { ImageGallery } from "@/sanity/types"
import React, { useEffect, useState } from "react"
import type { KeyboardEventHandler } from "react"
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

    const highestImageIndex = imageGallery.images.length - 1
    const initialImageIndex = parseInt(searchParams.get("bilde")!)
    const imageIsSet = Number.isInteger(initialImageIndex)

    let [isOpen, setIsOpen] = useState(imageIsSet)
    let [activeImageIndex, setActiveImageIndex] = useState(imageIsSet ? initialImageIndex : 0)

    /**
     * Dette er en 'handler' funksjon for on-click eventet til hvert enkelt gallery image
     * Den opdaterer staten til å representere det bildet som skal vises
     * @param index er indeksen til bildet som skal vises
     */
    const handleImageClick = (index: number) => {
        replace(`${pathname}?bilde=${index}`)
        setActiveImageIndex(index)
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

    /**
     * Denne useffecten opretter event listeners for hele vinduet
     * Vi velger å ignorere warnings her fordi de er dumme og ingen liker dem
     */
    useEffect(() => {
        //@ts-ignore
        window.addEventListener("keyup", handleKeyPress)
        return () => {
            //@ts-ignore
            window.removeEventListener("keyup", handleKeyPress)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeImageIndex]) // Når vi paginerer vil activeImageIndex endres og den er derfor en depencency av useeffecten

    /**
     * En handler funksjon for key event listener i useeffect
     * @param event
     */
    const handleKeyPress: KeyboardEventHandler = evt => {
        // Modal må være åpen for at vi skal ha muligheten til å paginere
        if (isOpen) {
            switch (evt.key) {
                case "ArrowLeft":
                    paginate(-1)
                    break
                case "ArrowRight":
                    paginate(+1)
                    break
            }
        }
    }

    /**
     * Paginerer mellom hvilket bilde som er aktivt i Modal
     * @param sign Enten +1 eller -1
     */
    const paginate = (sign: number) => {
        let index = activeImageIndex
        switch (sign) {
            case +1:
                index >= highestImageIndex ? (index = 0) : index++
                break
            case -1:
                index <= 0 ? (index = highestImageIndex) : index--
                break
        }
        replace(`${pathname}?bilde=${index}`)
        setActiveImageIndex(index)
    }

    return (
        <>
            <Modal
                size="lg"
                placement="top-center"
                isOpen={isOpen}
                onClose={onClose}
                className={"sm:min-h-min sm:max-w-[1000px]"}>
                <ModalContent>
                    <ModalHeader>
                        <h2>{imageGallery.images[activeImageIndex].alt}</h2>
                    </ModalHeader>
                    <ModalBody>
                        <div className="m-5 flex justify-center">
                            <SanityImage
                                image={imageGallery.images[activeImageIndex]}
                                alt={imageGallery.images[activeImageIndex].alt ?? ""}
                            />
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
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
