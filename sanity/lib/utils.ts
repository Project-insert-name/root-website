import type { EventType } from "@/sanity/types"

/**
 * Gir en leselig tekst for en event type
 * @param eventType Event typen som skal konverteres
 * @returns En leselig tekst for event typen
 */
export function getEventTypeLabel(eventType: EventType) {
    switch (eventType) {
        case "bedpres":
            return "Bedriftspresentasjon"
        case "workshop":
            return "Workshop"
        case "social":
            return "Sosialt"
        case "other":
        default:
            return "Annet"
    }
}
