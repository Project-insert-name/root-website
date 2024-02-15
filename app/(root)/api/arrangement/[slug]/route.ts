import { getEventBySlug } from "@/sanity/queries/event"
import { createIcsEvent } from "@/app/(root)/arrangement/[slug]/page"

export const revalidate = 30 // 30 sek

export async function GET(request: Request) {
    if (!request.url.endsWith(".ics")) {
        return Response.json(null, {
            status: 500,
            statusText: "Invalid URL. Must end with .ics",
        })
    }
    const paths = request.url.split("/")
    const slug = paths[paths.length - 1].replace(".ics", "")
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
        },
    })
}
