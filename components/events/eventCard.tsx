import InfoCard, { Divider } from "@/components/events/infoCard";
import Link from "next/link";
import type { EventType, RootEvent } from "@/sanity/types";
import SanityImage from "@/components/sanityImage";
import { toFormatDateAndTime } from "@/utils/dateUtils";
import { DateIcon, MapIcon, TimeIcon } from "@/components/icons/icon";
import { getNextEvents } from "@/sanity/queries/event";
import { Suspense } from "react";


interface EventCardProps extends DefaultProps {
    eventTitle?: string,
    showMoreUrl: string,
    emptyMessage?: string,
}

// TODO slå sammen fellestrekk i wide og narrow komponentene
// TODO bedre fallback for Suspense

const EventCard: Component<EventCardProps> = (
    {
        eventTitle = "Arrangementer",
        emptyMessage = "Ingen arrangementer",
        showMoreUrl,
        className,
    }) => (
    <InfoCard cardTitle={ eventTitle }
              showMoreUrl={ showMoreUrl }
              className={ className }>

        <Suspense fallback={ "Laster inn" }>
            <EventCardData emptyMessage={ emptyMessage } />
        </Suspense>

    </InfoCard>
)

export default EventCard;

const EventCardData: AsyncComponent<{ emptyMessage: string }> = async ({ emptyMessage }) => {
    const events = await getNextEvents();
    return (<>
        { events.length > 0 ?
            events.map((event, index) =>
                <div key={ event._id }>
                    { index !== 0 && <Divider /> }
                    <SingleEventWide { ...event } className={ "sm:flex hidden" } />
                    <SingleEventNarrow { ...event } className={ "sm:hidden flex" } />
                </div>
            )
            : <p className={ "text-center" }>{ emptyMessage }</p>
        }
    </>)
}

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
                    <Link href={ `arrangement/${ event_slug?.current }` } className={ "hover:underline" }>
                        <h6>{ event_title }</h6>
                    </Link>
                    <div className={ "flex sm:flex-row flex-col gap-2" }>
                        { startTime && <>
                            <DateIcon>{ startTime.date }</DateIcon>
                            <TimeIcon>{ startTime.time }</TimeIcon>
                        </> }
                    </div>
                    { event_address_text && <MapIcon>{ event_address_text }</MapIcon> }
                </div>
            </div>

            { event_image &&
                <SanityImage image={ event_image } width={ 150 } height={ 75 } className={ "rounded-xl" } alt={ "" } />
            }

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
            <Link href={ `arrangement/${ event_slug?.current }` } className={ "hover:underline" }>
                <h6>{ event_title }</h6>
            </Link>
            <div className={ "inline-flex justify-between" }>
                <div className={ "inline-flex sm:flex-row flex-col flex-wrap" }>
                    <EventMarker type={ event_type } />
                    { startTime && <>
                        <DateIcon>{ startTime.date }</DateIcon>
                        <TimeIcon>{ startTime.time }</TimeIcon>
                    </> }
                    <MapIcon>{ event_address_text }</MapIcon>
                </div>
                {/*TODO alt*/ }
                { event_image &&
                    <SanityImage image={ event_image } width={ 100 } height={ 75 } className={ "rounded-xl m-1" }
                                 alt={ "" } />
                }
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
