import InfoCard from "@/components/events/infoCard"
import Link from "next/link"
import type { EventType, RootEvent } from "@/sanity/types"
import SanityImage from "@/components/sanityImage"
import { toFormatDateAndTime } from "@/utils/dateUtils"
import { DateIcon, MapIcon, TimeIcon } from "@/components/icons/icon"
import { getNextEvents } from "@/sanity/queries/event"
import { Suspense } from "react"
import { Divider } from "@/components/divider"
import { CircularProgressIndicator } from "@/components/suspense"

interface EventCardProps extends DefaultProps {
    eventTitle?: string
    showMoreUrl: string
    emptyMessage?: string
}

// TODO slå sammen fellestrekk i wide og narrow komponentene

const EventCard: Component<EventCardProps> = ({
    eventTitle = "Arrangementer",
    emptyMessage = "Ingen arrangementer",
    showMoreUrl,
    className,
}) => (
    <InfoCard cardTitle={eventTitle} showMoreUrl={showMoreUrl} className={className}>
        <Suspense fallback={<CircularProgressIndicator aria-label={"Laster inn arrangementer"} />}>
            <EventCardData emptyMessage={emptyMessage} />
        </Suspense>
    </InfoCard>
)

export default EventCard

const EventCardData: AsyncComponent<{ emptyMessage: string }> = async ({ emptyMessage }) => {
    const events = await getNextEvents()
    return (
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
}

/**
 * Et enkelt arrangement som vises på brede skjermer
 */
const SingleEventWide: Component<RootEvent & DefaultProps> = ({
    className,
    event_type,
    event_title,
    event_start_time,
    event_address_text,
    event_image,
    event_slug,
}) => {
    const startTime = toFormatDateAndTime(event_start_time)
    return (
        <div className={`mx-2 my-5 justify-between gap-3 ${className}`}>
            <div className={"flex"}>
                <EventMarker type={event_type} />
                <div>
                    <Link href={`arrangement/${event_slug?.current}`} className={"hover:underline"}>
                        <h6 className={"font-mono"}>{event_title}</h6>
                    </Link>
                    <div className={"flex flex-col gap-2 sm:flex-row"}>
                        {startTime && (
                            <>
                                <DateIcon>{startTime.date}</DateIcon>
                                <TimeIcon>{startTime.time}</TimeIcon>
                            </>
                        )}
                    </div>
                    {event_address_text && <MapIcon>{event_address_text}</MapIcon>}
                </div>
            </div>

            {event_image && (
                <SanityImage
                    image={event_image}
                    width={150}
                    height={75}
                    className={"rounded-xl"}
                    alt={event_image.alt}
                />
            )}
        </div>
    )
}

/**
 * Et enkelt arrangement som vises på smale skjermer
 */
const SingleEventNarrow: Component<RootEvent & DefaultProps> = ({
    className,
    event_type,
    event_title,
    event_start_time,
    event_address_text,
    event_image,
    event_slug,
}) => {
    const startTime = toFormatDateAndTime(event_start_time)
    return (
        <div className={`mx-1 my-5 flex w-full flex-col ${className}`}>
            <Link href={`arrangement/${event_slug?.current}`} className={"hover:underline"}>
                <h6>{event_title}</h6>
            </Link>
            <div className={"inline-flex justify-between"}>
                <div className={"inline-flex flex-col flex-wrap sm:flex-row"}>
                    <EventMarker type={event_type} />
                    {startTime && (
                        <>
                            <DateIcon>{startTime.date}</DateIcon>
                            <TimeIcon>{startTime.time}</TimeIcon>
                        </>
                    )}
                    {event_address_text && <MapIcon>{event_address_text}</MapIcon>}
                </div>
                {event_image && (
                    <SanityImage
                        image={event_image}
                        width={130}
                        height={65}
                        className={"m-1 rounded-xl"}
                        alt={event_image.alt}
                    />
                )}
            </div>
        </div>
    )
}

const EventMarker: Component<{ type: EventType }> = ({ type }) => {
    function getTypeColour() {
        switch (type) {
            case "bedpres":
                return "bg-bedpress"
            case "social":
                return "bg-social"
            case "workshop":
                return "bg-workshop"
            default:
                return "bg-gray-400"
        }
    }

    return <div className={`mr-2 h-full w-2 rounded-xl ${getTypeColour()}`} />
}
