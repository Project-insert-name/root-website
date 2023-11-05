import { getAllEvents, getEventBySlug } from "@/sanity/queries/event"
import SanityImage from "@/components/sanityImage"
import { toFormatDateAndTime } from "@/utils/dateUtils"
import { AttendeesIcon, DateIcon, MapIcon, TimeIcon } from "@/components/icons/icon"
import { ExternalLink } from "@/components/link"
import { ExternalLinkButton } from "@/components/button"
import { notFound } from "next/navigation"
import Markdown from "@/components/markdown"

interface Params {
    slug: string
}

const iconSize = 30

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const EventPage: AsyncPage<Params> = async ({ params }) => {
    const event = await getEventBySlug(params.slug)

    if (!event) return notFound()
    // TODO se på hotspot i Sanity for å lage ulike crops for bilder. Ligger i pull request
    return (
        <div
            className={
                "container m-2 mx-auto overflow-hidden rounded-xl bg-white pb-5 sm:w-[1000px]"
            }>
            <div className={"relative h-[250px] w-full"}>
                {event.event_image && (
                    <SanityImage
                        image={event.event_image}
                        alt={"Bilde for " + event.event_title}
                        // objectFit={"cover"}
                        fill
                    />
                )}
            </div>

            <h1 className={"text-darkTitle my-5 text-center text-2xl sm:text-4xl"}>
                {event.event_title}
            </h1>
            <div className={"px-32"}>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <Address address={event.event_address_text} url={event.event_address_url} />
                    <TimeAndDate startTime={event.event_start_time} />
                    {event.event_max_attendees && (
                        <AttendeesIcon width={iconSize}>
                            Arrangementet har plass til {event.event_max_attendees}.
                        </AttendeesIcon>
                    )}
                </div>

                <Markdown className={"my-5"} markdown={event.event_description} />
            </div>

            <div className={"flex justify-center"}>
                <ExternalLinkButton href={event.event_application_url}>
                    Meld meg på
                </ExternalLinkButton>
            </div>
        </div>
    )
}

export default EventPage

const TimeAndDate: Component<{ startTime: string }> = ({ startTime }) => {
    const formatDateAndTime = toFormatDateAndTime(startTime)
    if (!formatDateAndTime) {
        return null
    }
    const { date, time } = formatDateAndTime
    return (
        <div className={"flex gap-2"}>
            <DateIcon width={iconSize}>{date}</DateIcon>
            <TimeIcon width={iconSize}>{time}</TimeIcon>
        </div>
    )
}

const Address: Component<{ address?: string; url?: string }> = ({ address, url }) => {
    if (!address) {
        return null
    }
    return (
        <MapIcon className={"h-fit"} width={iconSize}>
            {url ? <ExternalLink href={url}>{address}</ExternalLink> : address}
        </MapIcon>
    )
}

/**
 * Genererer statiske paths for alle arrangementer.
 * Kjøres ved bygging av nettsiden.
 * @returns Liste med statiske paths
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export const generateStaticParams = async (): Promise<Params[]> => {
    const events = await getAllEvents()

    return events.map(event => ({
        slug: event.event_slug.current,
    }))
}
