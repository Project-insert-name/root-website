import { getEventBySlug } from "@/sanity/queries/event"
import { createIcsEvent } from "@/utils/ics"

export const revalidate = 30 // 30 sek

interface Params {
    params: {
        slug: string
    }
}

export async function GET({ params: { slug } }: Params): Promise<Response> {
    if (!slug.endsWith(".ics")) {
        return Response.json(null, {
            status: 400,
            statusText: "Invalid URL. Must end with .ics",
        })
    }
    slug = slug.replace(".ics", "")
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
