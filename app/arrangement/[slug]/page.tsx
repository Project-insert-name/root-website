import { getAllEvents, getEventBySlug } from "@/sanity/queries";
import SanityImage from "@/components/sanityImage";

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * @param params Parametre fra URL
 */
const EventPage: AsyncComponent<{ params: { slug: string }; }> = async ({ params }) => {
    const event = await getEventBySlug(params.slug);

    if (!event) {
        // TODO bedre feilmelding
        return <div>Arrangementet finnes ikke</div>;
    }

    return (
        <>
            <h1>{ event.event_title }</h1>
            { event.event_image && <SanityImage image={ event.event_image } width={ 500 } height={ 500 } alt={ "" } /> }
            <p>{ event.event_description }</p>
            <p>Tidspunkt: { event.event_start_time }</p>
            { event.event_max_attendees && <p>Maks antall deltakere: { event.event_max_attendees }</p> }
            <p>Påmelding <a href={ event.event_application_url }>her</a></p>
        </>
    );
};

export default EventPage;

/**
 * Genererer statiske paths for alle arrangementer.
 * Kjøres ved bygging av nettsiden.
 * @returns Liste med statiske paths
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const events = await getAllEvents();

    return events.map((event) => ({
        slug: event.event_slug.current,
    }));
}
