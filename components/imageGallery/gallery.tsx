import type { SanitySlug } from "@/sanity/types"
import Link from "next/link"
import { LeftArrowIcon } from "../icons/icon"
import SanityImage from "../sanityImage"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { LinkButton } from "@/components/buttons/button"

interface GalleryProps extends ChildProps {
    heading: string
    event?: { slug: SanitySlug }
}

/**
 * Representerer en samling av bilder eller bildegallerier
 * @param heading Tittelen på galleriet
 * @param event Tilhørende event hvis det finnes
 * @param children Innholdet i galleriet
 */
const Gallery: Component<GalleryProps> = ({ heading, event, children }) => (
    <div className={"mx-auto flex flex-col justify-center rounded-2xl bg-white py-5 sm:w-[1100px]"}>
        <div className="mx-5 flex flex-row justify-center gap-5">
            <h1>{heading}</h1>
            {event && (
                <LinkButton href={`/arrangement/${event.slug.current}`} title="Se tilhørende event">
                    Se event
                </LinkButton>
            )}
        </div>
        <div className={"grid grid-cols-1 gap-5 p-5 sm:grid-cols-3"}>{children}</div>
    </div>
)

export default Gallery

/**
 * Representerer et bildegalleri eller et enkelt bilde
 * @param children Innholdet i galleriet
 * @param className CSS-klassene til galleriet
 */
export const GalleryItem: Component<ChildProps> = ({ children, className }) => (
    <div className={`${className} h-full w-full overflow-hidden rounded-2xl shadow-md`}>
        {children}
    </div>
)

export const GalleryBackButton: Component = () => (
    <Link
        href={"/galleri"}
        title="Tilbake til gallerisamling"
        className={"rounded-2xl focus:outline focus:!outline-root-primary sm:aspect-square"}>
        <GalleryItem className={"flex-center bg-slate-100"}>
            <LeftArrowIcon width={75} />
        </GalleryItem>
    </Link>
)

export const GalleryImage: Component<{
    image: SanityImageSource
    alt?: string
    title?: string
}> = ({ image, alt, title }) => (
    <SanityImage
        image={image}
        alt={alt ?? "Bilde fra et av Root sine arrangementer"}
        title={title}
        loading="lazy"
        className={"aspect-square w-full object-cover object-center"}
    />
)
