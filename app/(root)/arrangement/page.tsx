import { getFutureEvents, getPastAndFutureEvents, getPastEvents } from "@/sanity/queries/event"
import EventCardPaginated from "@/app/(root)/arrangement/eventCardPageinated"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Arrangementer | Root Linjeforening",
    description: "Oversikt over tidligere og planlagte arrangementer hos Root Linjeforening",
}

/**
 * Brukes for å tvinge Next.js til å oppdatere innholdet på siden.
 */
export const dynamic = "force-dynamic"

const nrOfEvents = 6

/**
 * Klassene for EventCardPaginated.
 */
const className = "sm:w-[550px] w-full mx-1 h-min"

/**
 * Viser en oversikt over alle arrangementer.
 * Både tidligere og fremtidige arrangementer vises.
 */
const EventsPage: AsyncPage = async () => {
    const { past, future } = await getPastAndFutureEvents(nrOfEvents)
    return (
        <div className={"flex flex-wrap items-baseline justify-center gap-5 pt-3 sm:p-5"}>
            <EventCardPaginated
                cardTitle={"Neste arrangementer"}
                className={className}
                initial={future}
                minEvents={nrOfEvents}
                fetchMore={async (limit, lastEventStartTime) => {
                    // Spesifiserer at denne funksjonen skal kjøres på serveren, selv om den blir kalt fra klienten.
                    "use server"
                    return getFutureEvents(limit, lastEventStartTime)
                }}
            />
            <EventCardPaginated
                cardTitle={"Tidligere arrangementer"}
                className={className}
                initial={past}
                minEvents={nrOfEvents}
                fetchMore={async (limit, lastEventStartTime) => {
                    "use server"
                    return getPastEvents(limit, lastEventStartTime)
                }}
            />
        </div>
    )
}

export default EventsPage
