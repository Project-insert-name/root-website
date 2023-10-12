import InfoCard, { Divider } from "@/components/events/infoCard";
import Link from "next/link";
import type { EventType, RootEvent } from "@/sanity/types";
import { urlFor } from "@/sanity/utils";

interface EventCardProps extends DefaultProps {
    eventTitle?: string,
    events: ReadonlyArray<RootEvent>,
    showMoreUrl: string,
    emptyMessage?: string,
    maxEvents?: number,
}

// TODO ikoner fra heroicons
// TODO bedre mobil visning

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
            events.slice(0, maxEvents).length > 0 ?
                events.map((event, index) =>
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
        event_type, event_title, event_start_time, event_address_text, className, event_image
    }) => (
    <div className={ `gap-4 justify-between mx-2 my-5 ${ className }` }>
        <div className={ "flex" }>
            <EventMarker type={ event_type } />
            <div>
                <Link href={ "/" } className={ "hover:underline" }>
                    <h6>{ event_title }</h6>
                </Link>
                <div className={ "flex sm:flex-row flex-col gap-2 text-gray-500" }>
                    {/*TODO improve*/ }
                    <p>{ new Date(event_start_time).toLocaleString("nb", {
                        month: "long", day: "2-digit", weekday: "long"
                    }) }</p>
                    <p>{ new Date(event_start_time).toLocaleString("nb", {
                        hour: "2-digit", minute: "2-digit"
                    }) }</p>
                    <p>{ event_address_text }</p>
                </div>
            </div>
        </div>

        {/*TODO bytt til Image?*/}
        <img src={ urlFor(event_image).width(150).height(75).url() } className={ "rounded-xl" } alt={ "" } />
    </div>
)

/**
 * Et enkelt arrangement som vises på smale skjermer
 */
const SingleEventNarrow: Component<RootEvent & DefaultProps> = (
    {
        event_type, event_title, event_start_time, event_address_text, className, event_image
    }) => (
    <div className={ `flex-col gap-4 justify-between mx-2 my-5 ${ className }` }>
        <Link href={ "/" } className={ "hover:underline" }>
            <h6>{ event_title }</h6>
        </Link>
        <div className={ "inline-flex justify-between" }>
            <EventMarker type={ event_type } />
            <div className={ "inline-flex sm:flex-row flex-col gap-2 text-gray-500" }>
                <p>{ new Date(event_start_time).toLocaleString("nb", {
                    month: "long", day: "2-digit", weekday: "long"
                }) }</p>
                <p>{ new Date(event_start_time).toLocaleString("nb", {
                    hour: "2-digit", minute: "2-digit"
                }) }</p>
                <p>{ event_address_text }</p>
            </div>
            <img src={ urlFor(event_image).width(75).height(50).url() } className={ "rounded-xl" } alt={ "" } />
        </div>
    </div>
)

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
