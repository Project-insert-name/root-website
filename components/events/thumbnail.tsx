import SanityImage from "@/components/sanityImage"
import type { SanityImageObject } from "@/sanity/types"

/**
 * En thumbnail som viser et bilde.
 * @param className CSS-klassenavn
 * @param image Bilde som skal vises, inneholder alt-tekst
 * @param width Bredde på bildet. Standard er 150px
 * @param heightWidthRatio Høyde/bredde-forhold på bildet. Standard er 2. Hvis du setter width til 150px og heightWidthRatio til 2, vil høyden bli 75px
 */
const Thumbnail: Component<
    DefaultProps & {
        image?: SanityImageObject
        width?: number
        heightWidthRatio?: number
    }
> = ({ className, image, width = 150, heightWidthRatio = 2 }) => {
    if (image) {
        return (
            <SanityImage
                image={image}
                width={width}
                height={width / heightWidthRatio}
                className={`m-1 rounded-xl ${className}`}
                alt={image.alt}
            />
        )
    }
    return null
}

export default Thumbnail
