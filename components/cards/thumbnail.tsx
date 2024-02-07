import SanityImage from "@/components/sanityImage"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

/**
 * En thumbnail som viser et bilde.
 * @param className CSS-klassenavn
 * @param image Bilde som skal vises, inneholder alt-tekst. Bør være i 16:7 format. Hvis ikke vil bildet bli beskåret i høyden. Dersom bildet er for lavt kan det bli beskåret i bredden.
 * @param width Bredde på bildet. Standard er 150px
 * @param heightWidthRatio Høyde/bredde-forhold på bildet. Standard er 2. Hvis du setter width til 150px og heightWidthRatio til 2, vil høyden bli 75px
 */
const Thumbnail: Component<
    DefaultProps & {
        image: SanityImageSource & { alt: string }
        width?: number
        heightWidthRatio?: number
    }
> = ({ className, image, width = 150, heightWidthRatio = 2 }) => (
    <div
        style={{ minWidth: width, height: width / heightWidthRatio }}
        className={"flex-row-center relative"}>
        <SanityImage
            image={image}
            alt={image.alt}
            className={`rounded-xl object-contain ${className}`}
            fill
            sizes={"33vw"}
        />
    </div>
)

export default Thumbnail
