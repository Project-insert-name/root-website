import { SanitySlug } from "@/sanity/types"
import { LinkButton } from "../button"
import Link from "next/link"
import { LeftArrowIcon } from "../icons/icon"
import SanityImage from "../sanityImage"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

interface GalleryProps extends ChildProps {
    heading: string
    event?: { event_slug: SanitySlug }
}

const Gallery: Component<GalleryProps> = ({ heading, event, children }) => (
    <div className={"mx-auto flex flex-col justify-center rounded-2xl bg-white py-5 sm:w-[1100px]"}>
        <div className="mx-5 flex flex-row justify-center gap-5">
            <h1>{heading}</h1>
            {event && (
                <LinkButton
                    href={`/arrangement/${event.event_slug.current}`}
                    title="Se tilhørende event">
                    Se event
                </LinkButton>
            )}
        </div>
        <div className={"grid grid-cols-1 gap-5 p-5 sm:grid-cols-3"}>{children}</div>
    </div>
)

export default Gallery

export const GalleryItem: Component<ChildProps> = ({ children }) => (
    <div className="flex overflow-hidden rounded-2xl shadow-md">{children}</div>
)

export const GalleryBackButton: Component = () => (
    <GalleryItem>
        <Link
            href={"/galleri/"}
            title="Tilbake til gallerisamling"
            className={"flex h-full w-full justify-center bg-slate-100"}>
            <LeftArrowIcon width={75}></LeftArrowIcon>
        </Link>
    </GalleryItem>
)

export const GalleryImage: Component<{
    image: SanityImageSource
    alt?: string
    title?: string
}> = ({ image, alt, title }) => (
    <SanityImage
        image={image}
        alt={alt ? alt : ""}
        title={title ? title : ""}
        loading="lazy"
        className={"aspect-square w-full object-cover object-center"}
    />
)
