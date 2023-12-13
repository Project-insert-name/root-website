import SanityImage from "@/components/sanityImage"
import { AttendeesIcon, bigIconSize, MapIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/buttons/button"
import Markdown from "@/components/markdown"
import { ExternalLink } from "@/components/link"
import type { MarkdownString, SanityImageObject } from "@/sanity/types"

interface SingleInfoCardProps extends ChildProps {
    image?: SanityImageObject
    title: string
    description?: MarkdownString
    addressText?: string
    addressUrl?: string
    maxParticipants?: string
    buttonText?: string
    buttonUrl?: string
}

const SingleInfoCard: Component<SingleInfoCardProps> = ({
    image,
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
    <div className={"p-2"}>
        <div
            className={`container mx-auto overflow-hidden rounded-xl bg-white pb-5 sm:w-[1000px] ${className}`}>
            {image && (
                <div className={"relative aspect-[16/7] w-full"}>
                    <SanityImage image={image} alt={image.alt} fill />
                </div>
            )}

            <h1 className={"my-5 text-center text-2xl text-darkTitle sm:text-4xl"}>{title}</h1>
            <div className={"px-5 sm:px-32"}>
                <div className={"flex flex-wrap items-center justify-center gap-5"}>
                    {addressText && <Address address={addressText} url={addressUrl} />}
                    {maxParticipants && (
                        <AttendeesIcon width={bigIconSize}>{maxParticipants}</AttendeesIcon>
                    )}
                    {children}
                </div>

                <Markdown className={"my-5"} markdown={description} />
            </div>
            {buttonUrl && (
                <div className={"flex justify-center"}>
                    <ExternalLinkButton href={buttonUrl}>{buttonText}</ExternalLinkButton>
                </div>
            )}
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
