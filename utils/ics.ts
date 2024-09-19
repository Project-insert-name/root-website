import type { RootEvent } from "@/sanity/types"
import { toDateTuple } from "@/utils/dateUtils"
import { defaultEventDuration } from "@/sanity/queries/event"
import { createEvent, createEvents, type EventAttributes } from "ics"
import { getEventTypeLabel } from "@/sanity/lib/utils"
import { toPlainText } from "@portabletext/react"

/**
 * Lager en string på ics format basert på et arrangement.
 * Dersom sluttidspunkt ikke er definert, settes varigheten til 2 timer.
 * Dersom den feiler, logges feilen og en tom string returneres.
 * @param event Arrangementet som skal konverteres til ics format
 * @returns En string på ics format
 * @see https://www.npmjs.com/package/ics
 */
export async function createIcsEvent(event: RootEvent): Promise<string | undefined> {
    let icsEvent: string | undefined = undefined
    createEvent(getEventAttributes(event), (error, value) => {
        if (error) {
            console.error(error)
        } else {
            icsEvent = value
        }
    })
    return icsEvent
}

/**
 * Lager en string på ics format basert på en liste med arrangementer.
 * Dersom den feiler, logges feilen og en tom string returneres.
 * @param events Arrangementene som skal konverteres til ics format
 * @returns En string på ics format
 */
export function createIcsEvents(events: ReadonlyArray<RootEvent>): string {
    let icsEvents = ""
    createEvents(events.map(getEventAttributes), (error, value) => {
        if (error) {
            console.error(error)
            return ""
        } else {
            icsEvents += value
        }
    })
    return icsEvents
}

function getEventAttributes(event: RootEvent): EventAttributes {
    return {
        title: event.title,
        description: event.description_block ? toPlainText(event.description_block) : "",
        location: event.address_text,
        start: toDateTuple(event.start_time),
        ...getEndTime(event),
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/arrangement/${event.slug.current}`,
        organizer: { name: "Root Linjeforening", email: process.env.NEXT_PUBLIC_EMAIL },
        categories: ["Root Linjeforening", "Arrangement", getEventTypeLabel(event.type)],
    }
}

function getEndTime(event: RootEvent) {
    return event.end_time
        ? { end: toDateTuple(event.end_time) }
        : { duration: { hours: defaultEventDuration } }
}
