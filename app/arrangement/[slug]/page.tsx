import { getAllEventSlugs, getEventBySlug } from "@/sanity/queries/event"
import { toFormatDateAndTime } from "@/utils/dateUtils"
import { bigIconSize, DateIcon, TimeIcon } from "@/components/icons/icon"
import { notFound } from "next/navigation"
import SingleInfoCard from "@/components/events/singleInfoCard"
import { type Metadata } from "next"

interface Params {
    slug: string
}

export const dynamic = "force-dynamic"

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const EventPage: AsyncPage<Params> = async ({ params }) => {
    const event = await getEventBySlug(params.slug)

    if (!event) return notFound()

    return (
        <SingleInfoCard
            title={event.event_title}
            description={event.event_description}
            image={event.event_image}
            maxParticipants={
                event.event_max_attendees
                    ? `Antall plasser er ${event.event_max_attendees}`
                    : undefined
            }
            addressText={event.event_address_text}
            addressUrl={event.event_address_url}
            buttonText={"Meld meg på"}
            buttonUrl={event.event_application_url}>
            <TimeAndDate startTime={event.event_start_time} />
        </SingleInfoCard>
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
            <DateIcon width={bigIconSize}>{date}</DateIcon>
            <TimeIcon width={bigIconSize}>{time}</TimeIcon>
        </div>
    )
}

/**
 * Genererer statiske paths for alle arrangementer.
 * Kjøres ved bygging av nettsiden.
 * @returns Liste med statiske paths
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export const generateStaticParams = async (): Promise<Params[]> => {
    const events = await getAllEventSlugs()

    return events.map(event => ({
        slug: event.event_slug.current,
    }))
}

/**
 * Genererer metadata for en side. Bruker tittel og deler av beskrivelsen fra arrangementet.
 * Data som hentes caches. Dersom arrangementet ikke finnes, returneres notFound().
 * @param props Props for siden, inneholder slug som brukes for å hente arrangementet.
 * @returns Metadata for siden.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 */
export async function generateMetadata({ params }: PageProps<Params>): Promise<Metadata> {
    const event = await getEventBySlug(params.slug)

    if (!event) return notFound()

    return {
        title: `${event.event_title} | Root Linjeforening`,
        description: event.event_description.slice(0, 150),
    }
}
