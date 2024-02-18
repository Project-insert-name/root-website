import { getEventBySlug } from "@/sanity/queries/event"
import { isFuture } from "@/utils/dateUtils"
import { bigIconSize, DateIcon, TimeIcon } from "@/components/icons/icon"
import { notFound, redirect } from "next/navigation"
import SingleInfoCard from "@/components/cards/singleInfoCard"
import { type Metadata } from "next"
import { getDescription } from "@/sanity/lib/utils"
import { Date, Time } from "@/components/date"
import { createIcsEvent } from "@/utils/ics"
import AddToCalendarDropdown from "@/components/dropdown/addToCalendarDropdown"

interface Params {
    slug: string
}

export const revalidate = 30 // 30 sek

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const EventPage: AsyncPage<Params> = async ({ params }) => {
    if (params.slug.endsWith(".ics")) {
        return redirect(`/api/arrangement/${params.slug}`)
    }

    const event = await getEventBySlug(params.slug)

    if (!event) return notFound()

    let icsEvent = undefined
    if (isFuture(event.start_time)) {
        icsEvent = await createIcsEvent(event)
    }

    return (
        <SingleInfoCard
            title={event.title}
            description={event.description}
            descriptionBlock={event.description_block}
            image={event.hero_image}
            maxParticipants={
                event.max_participants ? `Antall plasser er ${event.max_participants}` : undefined
            }
            addressText={event.address_text}
            addressUrl={event.address_url}
            buttonText={"Meld meg på"}
            buttonUrl={event.registration_url}>
            <>
                <TimeAndDate startTime={event.start_time} />
                {icsEvent && (
                    <AddToCalendarDropdown
                        eventUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/api/arrangement/ical/${params.slug}`}
                    />
                )}
            </>
        </SingleInfoCard>
    )
}

export default EventPage

const TimeAndDate: Component<{ startTime: string }> = ({ startTime }) => (
    <div className={"flex gap-2"}>
        <DateIcon width={bigIconSize}>
            <Date date={startTime} />
        </DateIcon>
        <TimeIcon width={bigIconSize}>
            <Time time={startTime} />
        </TimeIcon>
    </div>
)

/**
 * Genererer metadata for en side. Bruker tittel og deler av beskrivelsen fra arrangementet.
 * Data som hentes caches. Dersom arrangementet ikke finnes, returneres notFound().
 * @param props Props for siden, inneholder slug som brukes for å hente arrangementet.
 * @returns Metadata for siden.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 */
export async function generateMetadata({ params }: PageProps<Params>): Promise<Metadata> {
    const event = await getEventBySlug(params.slug)

    if (!event) return {}

    return {
        title: `${event.title} | Root Linjeforening`,
        description: await getDescription(event),
    }
}
