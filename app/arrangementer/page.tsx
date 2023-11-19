import {
    getNextEventsPaginated,
    getPreviousAndNextEvents,
    getPreviousEventsPaginated,
} from "@/sanity/queries/event"
import EventCardPaginated from "@/app/arrangementer/eventCardPageinated"

/**
 * Brukes for å tvinge Next.js til å oppdatere innholdet på siden.
 */
export const dynamic = "force-dynamic"

const nrOfEvents = 6

/**
 * Viser en oversikt over alle arrangementer.
 * Både tidligere og fremtidige arrangementer vises.
 */
const EventsPage: AsyncPage = async () => {
    const { past, future } = await getPreviousAndNextEvents(nrOfEvents)
    return (
        <div>
            <br />
            <div className={"flex flex-wrap justify-center gap-5"}>
                <EventCardPaginated
                    cardTitle={"Tidligere arrangementer"}
                    className={"sm:w-[550px]"}
                    initial={past}
                    minEvents={nrOfEvents}
                    fetchMore={async (from, to) => {
                        // Spesifiserer at denne funksjonen skal kjøres på serveren, selv om den blir kalt fra klienten.
                        "use server"
                        return getPreviousEventsPaginated(from, to)
                    }}
                />
                <EventCardPaginated
                    cardTitle={"Neste arrangementer"}
                    className={"sm:w-[550px]"}
                    initial={future}
                    minEvents={nrOfEvents}
                    fetchMore={async (from, to) => {
                        "use server"
                        return getNextEventsPaginated(from, to)
                    }}
                />
            </div>
        </div>
    )
}

export default EventsPage
