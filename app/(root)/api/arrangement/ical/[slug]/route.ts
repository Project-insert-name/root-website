import { getEventBySlug } from "@/sanity/queries/event"
import { createIcsEvent } from "@/utils/ics"

export const revalidate = 30 // 30 sek

interface Params {
    params: {
        slug: string
    }
}

/**
 * Henter et arrangement fra sanity og konverterer det til en ics fil.
 * Dersom URL ikke ender med .ics, returneres en 400 feil.
 * Hvis event ikke finnes, returneres en 404 feil.
 * @param _ Request objektet
 * @param slug Parametre fra URL, slugen til arrangementet. Inkluderer .ics
 * @returns En response med ics filen, hvis alt gikk bra. Ellers en feil response.
 */
export async function GET(_: Request, { params: { slug } }: Params): Promise<Response> {
    const event = await getEventBySlug(slug)

    if (!event) {
        return Response.json(null, {
            status: 404,
            statusText: "Event not found",
        })
    }

    const icsEvent = await createIcsEvent(event)
    return new Response(icsEvent, {
        headers: {
            "Content-Type": "text/calendar",
            "Content-Disposition": `attachment; filename="${event.title}.ics"`,
        },
    })
}
