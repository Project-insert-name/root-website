"use client"

import { EventContent } from "@/components/cards/eventCard"
import type { RootEvent } from "@/sanity/types"
import { Button } from "@/components/buttons/button"
import InfoCard from "@/components/cards/infoCard"
import { useState } from "react"
import { CircularProgressIndicator } from "@/components/suspense"

interface EventCardPaginatedProps extends DefaultProps {
    cardTitle: string
    initial: ReadonlyArray<RootEvent>
    minEvents: number
    emptyMessage?: string
    fetchMore: (limit: number, lastEventStartTime: string) => Promise<ReadonlyArray<RootEvent>>
    fetchNumber?: number
}

/**
 * En komponent som viser arrangementer i en infokort.
 * Komponenten har en knapp for å laste inn flere arrangementer.
 * @param cardTitle Tittelen på infokortet.
 * @param initial Arrangementer som skal vises når komponenten rendres første gang.
 * @param minEvents Minimum antall arrangementer. Brukes for å sjekke om det er flere arrangementer å hente.
 * @param emptyMessage Beskjed som vises hvis det ikke er noen arrangementer.
 * @param fetchMore Funksjon som henter flere arrangementer.
 * @param fetchNumber Antall arrangementer som skal hentes hver gang.
 * @param props Andre props som kan sendes til infokortet.
 */
const EventCardPaginated: Component<EventCardPaginatedProps> = ({
    cardTitle,
    initial,
    minEvents,
    emptyMessage,
    fetchMore,
    fetchNumber = 4,
    ...props
}) => {
    /**
     * Tilstand for arrangementer som skal vises.
     */
    const [events, setEvents] = useState(initial)
    /**
     * Tilstand for lasting. Hvis true, vises en spinner.
     */
    const [loading, setLoading] = useState(false)
    /**
     * Tilstand for om knappen for å laste inn flere arrangementer skal vises.
     * Den skal ikke vises hvis det ikke er flere arrangementer å hente.
     * Merk at den vil vises dersom event.length == minEvents. Selv om det ikke er flere arrangementer å hente.
     */
    const [showButton, setShowButton] = useState(events.length >= minEvents)

    /**
     * Henter flere arrangementer fra sanity.
     */
    async function fetchMoreEvents() {
        setLoading(true)
        const nextEvents = await fetchMore(fetchNumber, events[events.length - 1].start_time)
        if (nextEvents.length < fetchNumber) {
            setShowButton(false)
        }
        setEvents([...events, ...nextEvents])
        setLoading(false)
    }

    return (
        <InfoCard
            cardTitle={cardTitle}
            className={"w-full sm:w-[550px]"}
            bottom={
                showButton ? (
                    <ButtonAndProgress loading={loading} onPress={fetchMoreEvents} />
                ) : undefined
            }
            {...props}>
            <EventContent events={events} emptyMessage={emptyMessage} />
        </InfoCard>
    )
}

export default EventCardPaginated

const ButtonAndProgress: Component<{ loading: boolean; onPress: VoidFunction }> = ({
    loading,
    onPress,
}) => {
    if (loading) {
        return <CircularProgressIndicator aria-label={"Laster inn flere arrangementer"} />
    }
    return (
        <Button className={"w-fit"} onClick={onPress}>
            Se mer
        </Button>
    )
}
