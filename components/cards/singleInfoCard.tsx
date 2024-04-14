import { AttendeesIcon, bigIconSize, MapIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/buttons/button"
import { ExternalLink } from "@/components/link"
import type { SanityImageObject } from "@/sanity/types"
import { PortableText } from "@portabletext/react"
import { components } from "@/sanity/lib/portabletext"
import type { TypedObject } from "sanity"
import ImageViewer from "@/components/imageViewer"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"

interface SingleInfoCardProps extends ChildProps {
    image?: SanityImageObject
    title?: string
    descriptionBlock?: TypedObject | TypedObject[]
    addressText?: string
    addressUrl?: string
    maxParticipants?: string
    buttonText?: string
    buttonUrl?: string
}

/**
 * En komponent som viser et enkelt arrangement, stillingsannonse eller innlegg.
 * @param image Bildet som vises på toppen av kortet. Bør være i 16:7 format. Hvis ikke vil bildet bli beskåret i høyden. Dersom bildet er for lavt kan det bli beskåret i bredden.
 * @param title Tittelen på kortet
 * @param descriptionBlock Beskrivelsen på kortet i PortableText format
 * @param addressText Teksten som vises for adressen. Dersom denne ikke er satt vil ikke adressekomponenten vises.
 * @param addressUrl URLen til adressen. Dersom den er satt vil adressen bli en lenke.
 * @param maxParticipants Maks antall deltakere på arrangementet. Dersom denne ikke er satt vil ikke deltakerkomponenten vises.
 * @param buttonText Teksten som vises på knappen i bunnen av kortet.
 * @param buttonUrl URLen til knappen i bunnen av kortet. Dersom den ikke er satt vil ikke knappen vises.
 * @param className CSS klassenavn
 * @param children Komponenter som vises i midten av kortet. Blir lagt til i raden sammen med adresse og deltakerkomponenten.
 */
const SingleInfoCard: Component<SingleInfoCardProps> = ({
    image,
    title,
    descriptionBlock,
    addressText,
    addressUrl,
    maxParticipants,
    buttonText,
    buttonUrl,
    className,
    children,
}) => (
    <Card
        className={`container mx-auto overflow-hidden rounded-xl pb-5 sm:w-[1000px] ${className}`}>
        {image?.asset && <ImageViewer image={image} />}
        {title && <h1 className={"my-5 text-center text-2xl sm:text-4xl"}>{title}</h1>}

        <CardBody className={"px-5 sm:px-32"}>
            <div className={"flex-center flex-wrap gap-5"}>
                {addressText && <Address address={addressText} url={addressUrl} />}
                {maxParticipants && (
                    <AttendeesIcon width={bigIconSize}>{maxParticipants}</AttendeesIcon>
                )}
                {children}
            </div>

            {descriptionBlock && (
                <div className={"prose my-5 max-w-none"}>
                    <PortableText value={descriptionBlock} components={components} />
                </div>
            )}
        </CardBody>
        {buttonUrl && (
            <CardFooter className={"flex justify-center"}>
                <ExternalLinkButton href={buttonUrl} aria-label={`Ekstern lenke til ${buttonUrl}`}>
                    {buttonText}
                </ExternalLinkButton>
            </CardFooter>
        )}
    </Card>
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
