import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { getImageDimensions } from "@sanity/asset-utils"

interface SanityImageProps extends ImageProps {
    image: SanityImageSource
    fill?: boolean
}

/**
 * Komponent for å vise bilder fra Sanity
 * @param image Bildet som skal vises
 * @param alt Alt-tekst for bildet (for skjermlesere)
 * @param width Bredde på bildet
 * @param height Høyde på bildet
 * @param fill Om bildet skal fylle hele bredden. Hvis den er true, vil width og height bli ignorert
 * @param props Andre props som skal sendes til Image-komponenten
 */
const SanityImage: Component<SanityImageProps> = ({
    image,
    alt,
    width,
    height,
    fill = false,
    ...props
}) => {
    const imageBuilder = width && height ? urlFor(image).width(width).height(height) : urlFor(image)
    if (fill) {
        return <Image src={imageBuilder.url()} alt={alt} fill={fill} {...props} />
    }
    return (
        <Image
            src={imageBuilder.url()}
            alt={alt}
            width={width || getImageDimensions(urlFor(image).url()).width}
            height={height || getImageDimensions(urlFor(image).url()).height}
            {...props}
        />
    )
}

export default SanityImage
