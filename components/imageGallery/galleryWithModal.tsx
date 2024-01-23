"use client"

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react"
import { ImageGallery } from "@/sanity/types"
import React, { useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import useKeypress from 'react-use-keypress';

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

    useKeypress("ArrowLeft", () => {
        if(isOpen){
        paginate(-1)
        }
    })

    useKeypress("ArrowRight", () => {
        if(isOpen){
        paginate(-1)
        }
    })

    useKeypress("Escape", () => {
        onClose()
    })

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
                placement="center"
                isOpen={isOpen}
                onClose={onClose}
                //Margin top i desktop view her pga offset fra Header
                className={"sm:mt-20 sm:min-h-min sm:max-w-[1000px]"}>
                <ModalContent>
                    <ModalHeader>
                        <h2>{imageGallery.images[activeImageIndex].alt}</h2>
                    </ModalHeader>
                    <ModalBody className="border-b-1 px-2 py-2">
                        <div className="flex justify-center sm:m-5">
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
