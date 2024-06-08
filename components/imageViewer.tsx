"use client"

import useToggle from "@/hooks/useToggle"
import SanityImage from "@/components/sanityImage"
import type { SanityImageObject } from "@/sanity/types"
import { getImageDimensions } from "@sanity/asset-utils"
import { urlFor } from "@/sanity/lib/image"
import { ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline"

const ImageViewer = ({ image }: { image?: SanityImageObject }) => {
    const [openImage, toggleOpenImage] = useToggle()

    const showFullImage = (image ? getImageDimensions(urlFor(image).url()).aspectRatio : 0) > 16 / 7

    return (
        <div>
            {image ? (
                showFullImage ? (
                    <SanityImage image={image} alt={image.alt} className={"w-full object-cover"} />
                ) : (
                    <div>
                        <button onClick={() => toggleOpenImage()} className={"relative w-full"}>
                            <SanityImage
                                image={image}
                                alt={image.alt}
                                className={`block ${
                                    openImage ? "" : "relative aspect-[16/7]"
                                } w-full object-cover`}
                            />
                            <div
                                className={
                                    "absolute bottom-2 right-2 rounded-3xl bg-white p-1 opacity-50 dark:bg-default-dark-background"
                                }>
                                {openImage ? (
                                    <ArrowsPointingInIcon className={"size-7"} />
                                ) : (
                                    <ArrowsPointingOutIcon className={"size-7"} />
                                )}
                            </div>
                        </button>
                    </div>
                )
            ) : null}
        </div>
    )
}

export default ImageViewer
