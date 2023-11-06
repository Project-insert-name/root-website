import SanityImage from "@/components/sanityImage"
import { AttendeesIcon, bigIconSize, MapIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/link"
import Markdown from "@/components/markdown"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ExternalLink } from "@/components/link"
import type { Markdown as MarkdownType } from "@/sanity/types"

interface SingleInfoCardProps extends ChildProps {
    image?: SanityImageSource
    imageAlt?: string
    title: string
    description?: MarkdownType
    addressText?: string
    addressUrl?: string
    maxParticipants?: string
    buttonText?: string
    buttonUrl?: string
}

const SingleInfoCard: Component<SingleInfoCardProps> = ({
    image,
    imageAlt,
    title,
    description,
    addressText,
    addressUrl,
    maxParticipants,
    buttonText,
    buttonUrl,
    className,
    children,
}) => (
    <div
        className={`container m-2 mx-auto overflow-hidden rounded-xl bg-white pb-5 sm:w-[1000px] ${className}`}>
        {image && (
            <div className={"relative h-[250px] w-full"}>
                {/* TODO se på hotspot i Sanity for å lage ulike crops for bilder. Ligger i advert*/}
                {/*typen men ikke i event typen. Bør vente til etter Sanity pull request er godkjent*/}
                <SanityImage
                    image={image}
                    alt={imageAlt ?? `Bilde for ${imageAlt}`}
                    // objectFit={"cover"}
                    fill
                />
            </div>
        )}

        <h1 className={"my-5 text-center text-2xl text-darkTitle sm:text-4xl"}>{title}</h1>
        <div className={"px-5 sm:px-32"}>
            <div className={"flex flex-wrap justify-center gap-5"}>
                {addressText && <Address address={addressText} url={addressUrl} />}
                {children}
                {maxParticipants && (
                    <AttendeesIcon width={bigIconSize}>{maxParticipants}.</AttendeesIcon>
                )}
            </div>

            <Markdown className={"my-5"} markdown={description} />
        </div>

        <div className={"flex justify-center"}>
            <ExternalLinkButton href={buttonUrl}>{buttonText}</ExternalLinkButton>
        </div>
    </div>
)

export default SingleInfoCard

const Address: Component<{ address?: string; url?: string }> = ({ address, url }) => {
    if (!address) {
        return null
    }
    return (
        <MapIcon className={"h-fit"} width={bigIconSize}>
            {url ? <ExternalLink href={url}>{address}</ExternalLink> : address}
        </MapIcon>
    )
}
