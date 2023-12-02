import { client } from "@/sanity/lib/client"
import type { RootEvent, SanitySlug } from "@/sanity/types"

/**
 * Henter ut alle events fra sanity, sortert etter starttidspunkt
 * @returns En liste med alle events
 */
export async function getAllEvents(): Promise<ReadonlyArray<RootEvent>> {
    return client.fetch('*[_type == "event"] | order(event_start_time asc)')
}

/**
 * Henter ut alle slugs som er tilknyttet events fra sanity
 * @returns En liste med alle slugs
 */
export async function getAllEventSlugs(): Promise<ReadonlyArray<{ event_slug: SanitySlug }>> {
    return client.fetch('*[_type == "event"]{event_slug}')
}

/**
 * Henter ut de neste eventene fra sanity, sortert etter starttidspunkt
 * @param limit Maks antall events som skal hentes ut
 * @returns En liste med de neste eventene
 */
export async function getNextEvents(limit = 4): Promise<ReadonlyArray<RootEvent>> {
    return getFutureEvents(limit)
}

/**
 * Henter ut en specifikk event fra sanity basert på slug
 * @param slug Slug til eventen
 * @returns RootEvent Eventet med den spesifikke slugen, eller null om den ikke finnes
 */
export async function getEventBySlug(slug: string): Promise<RootEvent | null> {
    return client.fetch(
        '*[_type == "event" && event_slug.current == $slug][0]{..., gallery->{slug}}',
        { slug },
    )
}

interface PastAndFutureEvents {
    past: ReadonlyArray<RootEvent>
    future: ReadonlyArray<RootEvent>
}

/**
 * Henter ut de neste og forrige eventene fra sanity.
 * @param limit Maks antall events som skal hentes ut for framtidige og tidligere events
 * @returns Et objekt som inneholder to lister, en med tidligere events og en med framtidige events
 */
export async function getPastAndFutureEvents(limit = 6): Promise<PastAndFutureEvents> {
    return client.fetch(
        `
        {
            "past": *[_type == "event" && event_start_time < now()] | order(event_start_time desc)[0...$limit]{..., gallery->{slug}},
            "future": *[_type == "event" && event_start_time >= now()] | order(event_start_time asc)[0...$limit]
        }
    `,
        { limit },
    )
}

/**
 * Henter ut de neste eventene fra sanity, sortert etter starttidspunkt.
 * Ved å spesifisere lastEventStartTime så vil tidligere eventer bli filtrert bort.
 * @param limit Antall elementer som skal hentes ut
 * @param lastEventStartTime Tidspunktet til det siste eventet som ble hentet ut. Ved å la denne være tom vil alle neste eventer bli hentet ut fram til limit.
 * @returns En liste med de neste eventene. Hvis ingen ble funnet, returneres en tom liste.
 * @example getFutureEvents(4, events[events.length - 1].event_start_time) // Henter de fire neste
 * @see https://www.sanity.io/docs/paginating-with-groq
 */
export async function getFutureEvents(
    limit = 4,
    lastEventStartTime = "",
): Promise<ReadonlyArray<RootEvent>> {
    return client.fetch(
        '*[_type == "event" && event_start_time >= now() && event_start_time > $last_start_time] | order(event_start_time asc)[0...$limit]',
        {
            limit,
            last_start_time: lastEventStartTime,
        },
    )
}

/**
 * Henter ut de forrige eventene fra sanity, sortert etter starttidspunkt.
 * Ved å spesifisere lastEventStartTime så vil senere eventer bli filtrert bort.
 * @param limit Antall elementer som skal hentes ut
 * @param lastEventStartTime Tidspunktet til det siste eventet som ble hentet ut. Ved å la denne være tom vil alle tidligere eventer bli hentet ut fram til limit.
 * @returns En liste med de forrige eventene. Hvis ingen ble funnet, returneres en tom liste.
 * @example getPastEvents(4, events[events.length - 1].event_start_time) // Henter de fire neste
 * @see https://www.sanity.io/docs/paginating-with-groq
 */
export async function getPastEvents(
    limit = 4,
    lastEventStartTime = "",
): Promise<ReadonlyArray<RootEvent>> {
    return client.fetch(
        '*[_type == "event" && event_start_time < now() && event_start_time < $last_start_time] | order(event_start_time desc)[0...$limit]',
        {
            limit,
            last_start_time: lastEventStartTime,
        },
    )
}
