import { getEventBySlug } from "@/sanity/queries/event"
import { isFuture, toDateTuple } from "@/utils/dateUtils"
import { bigIconSize, DateIcon, TimeIcon } from "@/components/icons/icon"
import { notFound } from "next/navigation"
import SingleInfoCard from "@/components/cards/singleInfoCard"
import { type Metadata } from "next"
import { createEvent } from "ics"
import { getDescription, getEventTypeLabel } from "@/sanity/lib/utils"
import type { RootEvent } from "@/sanity/types"
import IcsButton from "@/components/buttons/icsButton"
import { Date, Time } from "@/components/date"

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
                    <IcsButton
                        filename={event.title}
                        data={icsEvent}
                        aria-label={"Legg til arrangement i kalender"}
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

    if (!event) return notFound()

    return {
        title: `${event.title} | Root Linjeforening`,
        description: await getDescription(event),
    }
}

/**
 * Lager en string på ics format basert på et arrangement.
 * Dersom sluttidspunkt ikke er definert, settes varigheten til 2 timer.
 * @param event Arrangementet som skal konverteres til ics format
 * @returns En string på ics format
 * @see https://www.npmjs.com/package/ics
 */
async function createIcsEvent(event: RootEvent): Promise<string | undefined> {
    let icsEvent: string | undefined = undefined
    const end = event.end_time ? { end: toDateTuple(event.end_time) } : { duration: { hours: 2 } }
    createEvent(
        {
            title: event.title,
            description: await getDescription(event),
            location: event.address_text,
            start: toDateTuple(event.start_time),
            ...end,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/arrangement/${event.slug.current}`,
            organizer: { name: "Root Linjeforening", email: process.env.NEXT_PUBLIC_EMAIL },
            categories: ["Root Linjeforening", "Arrangement", getEventTypeLabel(event.type)],
        },
        (error, value) => {
            if (error) {
                console.error(error)
            } else {
                icsEvent = value
            }
        },
    )
    return icsEvent
}
