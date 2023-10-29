import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import { urlFor } from "@/sanity/utils"
import { getImageDimensions } from "@sanity/asset-utils"

interface SanityImageProps extends ImageProps {
    image: SanityImageSource
}

/**
 * Komponent for å vise bilder fra Sanity
 * @param image Bildet som skal vises
 * @param alt Alt-tekst for bildet (for skjermlesere)
 * @param width Bredde på bildet
 * @param height Høyde på bildet
 * @param className CSS-klassenavn
 */
const SanityImage: Component<SanityImageProps> = ({ image, alt, width, height, className }) => {
    const imageBuilder = width && height ? urlFor(image).width(width).height(height) : urlFor(image)
    return (
        <Image
            src={imageBuilder.url()}
            alt={alt}
            width={width || getImageDimensions(urlFor(image).url()).width}
            height={height || getImageDimensions(urlFor(image).url()).height}
            className={`${className}`}
        />
    )
}

export default SanityImage
