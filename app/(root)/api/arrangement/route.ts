import { type NextRequest } from "next/server"
import { getFutureEvents } from "@/sanity/queries/event"
import { createIcsEvents } from "@/utils/ics"

export const revalidate = 30 // 30 sek

export async function GET(request: NextRequest): Promise<Response> {
    const params = request.nextUrl.searchParams
    const type = params.get("type")
    const events = await getFutureEvents({ limit: 99, type: type ?? undefined })

    const icsEvents = await createIcsEvents(events)
    return new Response(icsEvents, {
        headers: {
            "Content-Type": "text/calendar",
        },
    })
}
