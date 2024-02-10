import InfoCard from "@/components/cards/infoCard"
import Link from "next/link"
import type { EventType, RootEvent } from "@/sanity/types"
import { DateIcon, MapIcon, TimeIcon } from "@/components/icons/icon"
import { getFutureEvents } from "@/sanity/queries/event"
import { Suspense } from "react"
import { Divider } from "@/components/divider"
import { CircularProgressIndicator } from "@/components/suspense"
import Thumbnail from "@/components/cards/thumbnail"
import { LinkButton } from "@/components/buttons/button"
import { getEventTypeLabel } from "@/sanity/lib/utils"
import { Date, Time } from "@/components/date"

interface EventCardProps extends DefaultProps {
    eventTitle?: string
    emptyMessage?: string
}

const EventCard: Component<EventCardProps> = ({
    eventTitle = "Arrangementer",
    emptyMessage,
    className,
}) => (
    <InfoCard
        cardTitle={eventTitle}
        className={className}
        bottom={
            <LinkButton
                href={"arrangement"}
                className={"mx-auto w-fit"}
                aria-label={"Vis flere arrangementer"}>
                Vis mer
            </LinkButton>
        }>
        <Suspense fallback={<CircularProgressIndicator aria-label={"Laster inn arrangementer"} />}>
            <NextEventsData emptyMessage={emptyMessage} />
        </Suspense>
    </InfoCard>
)

export default EventCard

const NextEventsData: AsyncComponent<{ emptyMessage?: string }> = async ({ emptyMessage }) => {
    const events = await getFutureEvents()
    return <EventContent events={events} emptyMessage={emptyMessage} />
}

export const EventContent: Component<{
    events: ReadonlyArray<RootEvent>
    emptyMessage?: string
}> = ({ events, emptyMessage = "Ingen arrangementer" }) => (
    <>
        {events.length > 0 ? (
            events.map((event, index) => (
                <div key={event._id}>
                    {index !== 0 && <Divider />}
                    <SingleEventWide {...event} className={"hidden sm:flex"} />
                    <SingleEventNarrow {...event} className={"flex sm:hidden"} />
                </div>
            ))
        ) : (
            <p className={"text-center"}>{emptyMessage}</p>
        )}
    </>
)

/**
 * Et enkelt arrangement som vises på brede skjermer
 */
export const SingleEventWide: Component<RootEvent & DefaultProps> = ({
    className,
    type,
    title,
    start_time,
    address_text,
    hero_image,
    slug,
    gallery,
}) => (
    <div className={`mx-2 my-4 justify-between gap-3 ${className}`}>
        <div className={"flex"}>
            <EventMarker type={type} />
            <div>
                <Link href={`arrangement/${slug.current}`}>
                    <h6 className={"font-mono text-root-primary"}>{title}</h6>
                </Link>
                <p>{getEventTypeLabel(type)}</p>
                <div className={"flex flex-col gap-2 sm:flex-row"}>
                    <TimeAndDate startTime={start_time} />
                </div>
                {address_text && <MapIcon>{address_text}</MapIcon>}
                {gallery?.slug && (
                    <Link href={`galleri/${gallery.slug.current}`}>Bildegalleri</Link>
                )}
            </div>
        </div>

        {hero_image && (
            <Link href={`arrangement/${slug.current}`}>
                <Thumbnail image={hero_image} />
            </Link>
        )}
    </div>
)

/**
 * Et enkelt arrangement som vises på smale skjermer
 */
export const SingleEventNarrow: Component<RootEvent & DefaultProps> = ({
    className,
    type,
    title,
    start_time,
    address_text,
    hero_image,
    slug,
    gallery,
}) => (
    <div className={`mx-1 my-3 flex w-full flex-col ${className}`}>
        <Link href={`arrangement/${slug.current}`}>
            <h6 className={"font-mono text-inherit"}>{title}</h6>
        </Link>
        <div className={"inline-flex justify-between"}>
            <div>
                <p>{getEventTypeLabel(type)}</p>
                <div className={"inline-flex flex-col flex-wrap sm:flex-row"}>
                    <TimeAndDate startTime={start_time} />
                    {address_text && <MapIcon>{address_text}</MapIcon>}
                </div>
            </div>
            {hero_image && <Thumbnail image={hero_image} width={130} />}
        </div>
        {gallery?.slug && <Link href={`galleri/${gallery.slug.current}`}>Bildegalleri</Link>}
    </div>
)

const TimeAndDate: Component<{ startTime: string }> = ({ startTime }) => (
    <>
        <DateIcon>
            <Date date={startTime} />
        </DateIcon>
        <TimeIcon>
            <Time time={startTime} />
        </TimeIcon>
    </>
)

/**
 * En farget stripe som viser hvilken type arrangement det er.
 * Brukes i EventCard.
 * @param type Typen arrangement
 */
export const EventMarker: Component<{ type: EventType }> = ({ type }) => {
    function getTypeColour() {
        switch (type) {
            case "bedpres":
                return "bg-bedpress"
            case "social":
                return "bg-social"
            case "workshop":
                return "bg-workshop"
            default:
                return "bg-other"
        }
    }

    return (
        <div title={getEventTypeLabel(type)}>
            <div className={`mr-2 h-full w-2 rounded-xl ${getTypeColour()}`} />
        </div>
    )
}
