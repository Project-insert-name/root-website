import InfoCard, { Divider } from "@/components/events/infoCard";
import Link from "next/link";
import type { EventType, RootEvent } from "@/sanity/types";
import SanityImage from "@/components/sanityImage";
import { toFormatDateAndTime } from "@/utils/dateUtils";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { type ReactNode } from "react";

const iconSize = 20;

interface EventCardProps extends DefaultProps {
    eventTitle?: string,
    events: ReadonlyArray<RootEvent>,
    showMoreUrl: string,
    emptyMessage?: string,
    maxEvents?: number,
}

// TODO slå sammen fellestrekk i wide og narrow komponentene

const EventCard: Component<EventCardProps> = (
    {
        eventTitle = "Arrangementer",
        events,
        emptyMessage = "Ingen arrangementer",
        showMoreUrl,
        maxEvents = 4,
        className,
    }) => (
    <InfoCard eventTitle={ eventTitle }
              showMoreUrl={ showMoreUrl }
              className={ className }>
        {
            events.length > 0 ?
                events.slice(0, maxEvents).map((event, index) =>
                    <div key={ event._id }>
                        { index !== 0 && <Divider /> }
                        <SingleEventWide { ...event } className={ "sm:flex hidden" } />
                        <SingleEventNarrow { ...event } className={ "sm:hidden flex" } />
                    </div>
                )
                : <p className={ "text-center" }>{ emptyMessage }</p>
        }
    </InfoCard>
)

export default EventCard;

/**
 * Et enkelt arrangement som vises på brede skjermer
 */
const SingleEventWide: Component<RootEvent & DefaultProps> = (
    {
        className,
        event_type,
        event_title,
        event_start_time,
        event_address_text,
        event_image,
        event_slug
    }) => {
    const startTime = toFormatDateAndTime(event_start_time);
    return (
        <div className={ `gap-4 justify-between mx-2 my-5 ${ className }` }>
            <div className={ "flex" }>
                <EventMarker type={ event_type } />
                <div>
                    <Link href={ `arrangement/${ event_slug.current }` } className={ "hover:underline" }>
                        <h6>{ event_title }</h6>
                    </Link>
                    <div className={ "flex sm:flex-row flex-col gap-2" }>
                        { startTime && <>
                            <PIcon icon={ <CalendarIcon width={ iconSize } /> }>{ startTime.date }</PIcon>
                            <PIcon icon={ <ClockIcon width={ iconSize } /> }>{ startTime.time }</PIcon>
                        </> }
                    </div>
                    <PIcon icon={ <MapPinIcon width={ iconSize } /> }>{ event_address_text }</PIcon>
                </div>
            </div>

            <SanityImage image={ event_image } width={ 150 } height={ 75 } className={ "rounded-xl" } alt={ "" } />
        </div>
    );
};

/**
 * Et enkelt arrangement som vises på smale skjermer
 */
const SingleEventNarrow: Component<RootEvent & DefaultProps> = (
    {
        className,
        event_type,
        event_title,
        event_start_time,
        event_address_text,
        event_image,
        event_slug
    }) => {
    const startTime = toFormatDateAndTime(event_start_time);
    return (
        <div className={ `mx-1 my-5 flex flex-col w-full ${ className }` }>
            <Link href={ `arrangement/${ event_slug.current }` } className={ "hover:underline" }>
                <h6>{ event_title }</h6>
            </Link>
            <div className={ "inline-flex justify-between" }>
                <div className={ "inline-flex sm:flex-row flex-col flex-wrap" }>
                    <EventMarker type={ event_type } />
                    { startTime && <>
                        <PIcon icon={ <CalendarIcon width={ iconSize } /> }>{ startTime.date }</PIcon>
                        <PIcon icon={ <ClockIcon width={ iconSize } /> }>{ startTime.time }</PIcon>
                    </> }
                    <PIcon icon={ <MapPinIcon width={ iconSize } /> }>{ event_address_text }</PIcon>
                </div>
                {/*TODO alt*/ }
                <SanityImage image={ event_image } width={ 100 } height={ 75 } className={ "rounded-xl" }
                             alt={ "" } />
            </div>
        </div>
    );
}

const EventMarker: Component<{ type: EventType }> = ({ type }) => {
    function getTypeColour() {
        switch (type) {
            case "bedpres":
                return "bg-yellow-400"
            case "social":
                return "bg-blue-400"
            case "workshop":
                return "bg-pink-400"
            default:
                return "bg-gray-400"
        }
    }

    return (
        <div className={ `w-2 h-full rounded-xl mr-2 ${ getTypeColour() }` } />
    )
}

const PIcon: Component<{ icon: ReactNode } & ChildProps> = ({ icon, children }) => {
    return <p className={ "inline-flex text-gray-500 gap-1" }>{ icon }{ children }</p>
}
