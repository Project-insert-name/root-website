import { type NextRequest } from "next/server"
import { getEventsFrom } from "@/sanity/queries/event"
import { createIcsEvents } from "@/utils/ics"

export const revalidate = 30 // 30 sek

/**
 * Henter alle fremtidige arrangementer og konverterer dem til en ics fil.
 * Kan filtreres etter:
 * - type: Typen arrangementer som skal hentes ut. Default er alle typer.
 * - from: Tidspunktet som arrangementene skal hentes fra. Default er nå.
 * - limit: Antall arrangementer som skal hentes ut. Default er 100.
 * @example fetch("/api/arrangement?type=bedpres&from=2022-01-01&limit=5") // Henter de fem neste bedriftspresentasjonene fra 2022
 * @param request Request objektet som inneholder query parametre og annen informasjon
 * @returns En response med ics filen, hvis alt gikk bra. Ellers en feil response.
 */
export async function GET(request: NextRequest): Promise<Response> {
    const params = request.nextUrl.searchParams
    const type = params.get("type")
    const time = params.get("from") ?? new Date().toISOString()
    const limit = params.get("limit")

    const events = await getEventsFrom(time, {
        limit: limit ? parseInt(limit) : 100,
        type: type ?? undefined,
    })

    const icsEvents = await createIcsEvents(events)
    return new Response(icsEvents, {
        headers: {
            "Content-Type": "text/calendar",
            "Content-Disposition": `attachment; filename="Root arrangementer.ics"`,
        },
    })
}
