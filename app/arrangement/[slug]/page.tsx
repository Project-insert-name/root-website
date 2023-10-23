import { getAllEvents, getEventBySlug } from "@/sanity/queries";
import SanityImage from "@/components/sanityImage";
import { toFormatDateAndTime } from "@/utils/dateUtils";
import { AttendeesIcon, DateIcon, defaultIconSize, MapIcon, TimeIcon } from "@/components/icons/icon";
import { LinkIcon } from "@heroicons/react/24/outline";
import { ExternalLink } from "@/components/link";
import { Button } from "@/components/button";
import { notFound } from "next/navigation";
import { fromMarkdown } from "@/sanity/utils";

interface Params {
    slug: string,
}

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const EventPage: AsyncComponent<{ params: Params; }> = async ({ params }) => {
    const event = await getEventBySlug(params.slug);

    if (!event) return notFound();

    const descriptionHTML = await fromMarkdown(event.event_description);

    return (
        <div className={ "container sm:w-[1000px] px-2 mx-auto " }>
            <h1 className={ "text-center sm:text-4xl text-2xl mb-5" }>
                { event.event_title }
            </h1>
            { event.event_image &&
                <SanityImage className={ "mx-auto" } image={ event.event_image }
                             width={ 500 } height={ 500 } alt={ "" } />
            }
            <div className={ "flex flex-wrap justify-between" }>
                <div>
                    <TimeAndDate startTime={ event.event_start_time } />
                    { event.event_max_attendees &&
                        <AttendeesIcon>Arrangementet har plass til { event.event_max_attendees }.</AttendeesIcon>
                    }
                </div>
                <Address address={ event.event_address_text } url={ event.event_address_url } />
            </div>

            <div className={ "my-5" } dangerouslySetInnerHTML={ { __html: descriptionHTML } } />

            <div className={ "flex justify-center" }>
                <SignUpButton url={ event.event_application_url } />
            </div>
        </div>
    );
};

export default EventPage;

const TimeAndDate: Component<{ startTime: string }> = ({ startTime }) => {
    const formatDateAndTime = toFormatDateAndTime(startTime);
    if (!formatDateAndTime) {
        return null;
    }
    const { date, time } = formatDateAndTime;
    return (
        <div className={ "flex gap-2" }>
            <DateIcon>{ date }</DateIcon>
            <TimeIcon>{ time }</TimeIcon>
        </div>
    );
}

const Address: Component<{ address?: string, url?: string }> = ({ address, url }) => {
    if (!address) {
        return null;
    }
    return (
        <MapIcon className={ "h-fit" }>
            { url ? <ExternalLink href={ url }>{ address }</ExternalLink> : address }
        </MapIcon>
    );
}

const SignUpButton: Component<{ url?: string }> = ({ url }) =>
    <ExternalLink href={ url }>
        <Button className={ "inline-flex gap-2 items-center" }>
            <LinkIcon width={ defaultIconSize } /><span>Meld meg på</span>
        </Button>
    </ExternalLink>


/**
 * Genererer statiske paths for alle arrangementer.
 * Kjøres ved bygging av nettsiden.
 * @returns Liste med statiske paths
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams(): Promise<Params[]> {
    const events = await getAllEvents();

    return events.map((event) => ({
        slug: event.event_slug.current,
    }));
}
