import { getAllEvents } from "@/sanity/queries/event"
import InfoCard from "@/components/events/infoCard"
import type { RootEvent } from "@/sanity/types"

/**
 * Deler arrangementer i to lister, basert på om de er tidligere eller fremtidige.
 * @param events Liste med arrangementer
 * @returns Tuppel som inneholder tidligere arrangementer og fremtidige arrangementer
 */
function splitEvents(events: readonly RootEvent[]): readonly [RootEvent[], RootEvent[]] {
    return [
        events.filter(event => new Date(event.event_start_time) < new Date()),
        events.filter(event => new Date(event.event_start_time) >= new Date()),
    ] as const
}

/**
 * Viser en oversikt over alle arrangementer.
 * Både tidligere og fremtidige arrangementer vises.
 */
// TODO
const EventsPage: AsyncPage = async () => {
    const events = await getAllEvents()
    const [futureEvents, pastEvents] = splitEvents(events)
    return (
        <div>
            <h1>Arrangementer</h1>
            <div className={"flex"}>
                <InfoCard cardTitle={"Neste arrangementer"} showMoreUrl={"TODO fjern meg"}>
                    <>
                        {pastEvents.map(event => (
                            <div key={event._id}>
                                <p>{event.event_title}</p>
                            </div>
                        ))}
                    </>
                </InfoCard>
                <InfoCard cardTitle={"Tidlige arrangementer"} showMoreUrl={""}>
                    <>
                        {futureEvents.map(event => (
                            <div key={event._id}>
                                <p>{event.event_title}</p>
                            </div>
                        ))}
                    </>
                </InfoCard>
            </div>
        </div>
    )
}

export default EventsPage
