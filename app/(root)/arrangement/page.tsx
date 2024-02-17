import { getFutureEvents, getPastAndFutureEvents, getPastEvents } from "@/sanity/queries/event"
import EventCardPaginated from "@/app/(root)/arrangement/eventCardPaginated"
import { type Metadata } from "next"
import CalendarModal from "@/components/modals/calendarModal"
import { ButtonGroup } from "@nextui-org/react"

export const metadata: Metadata = {
    title: "Arrangementer | Root Linjeforening",
    description: "Oversikt over tidligere og planlagte arrangementer hos Root Linjeforening",
}

export const revalidate = 30 // 30 sek

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
        <div className={"px-10 pt-3"}>
            <ButtonGroup>
                <CalendarModal />
            </ButtonGroup>
            <div className={"flex flex-wrap items-baseline justify-center gap-5 sm:p-5"}>
                <EventCardPaginated
                    cardTitle={"Kommende arrangementer"}
                    className={className}
                    initial={future}
                    minEvents={nrOfEvents}
                    fetchMore={async (limit, lastStartTime) => {
                        // Spesifiserer at denne funksjonen skal kjøres på serveren, selv om den blir kalt fra klienten.
                        "use server"
                        return getFutureEvents(limit, lastStartTime)
                    }}
                />
                <EventCardPaginated
                    cardTitle={"Tidligere arrangementer"}
                    className={className}
                    initial={past}
                    minEvents={nrOfEvents}
                    fetchMore={async (limit, lastStartTime) => {
                        "use server"
                        return getPastEvents(limit, lastStartTime)
                    }}
                />
            </div>
        </div>
    )
}

export default EventsPage
