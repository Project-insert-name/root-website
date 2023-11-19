import { client } from "@/sanity/lib/client"
import type { RootEvent } from "@/sanity/types"

/**
 * Henter ut alle events fra sanity, sortert etter starttidspunkt
 * @returns En liste med alle events
 */
export async function getAllEvents(): Promise<ReadonlyArray<RootEvent>> {
    return client.fetch('*[_type == "event"] | order(event_start_time asc)')
}

/**
 * Henter ut de neste eventene fra sanity, sortert etter starttidspunkt
 * @param limit Maks antall events som skal hentes ut
 * @returns En liste med de neste eventene
 */
export async function getNextEvents(limit = 4): Promise<ReadonlyArray<RootEvent>> {
    return getNextEventsPaginated(0, limit)
}

/**
 * Henter ut en specifikk event fra sanity basert på slug
 * @param slug Slug til eventen
 * @returns RootEvent Eventet med den spesifikke slugen, eller null om den ikke finnes
 */
export async function getEventBySlug(slug: string): Promise<RootEvent | null> {
    return client.fetch('*[_type == "event" && event_slug.current == $slug][0]', { slug })
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
export async function getPreviousAndNextEvents(limit = 6): Promise<PastAndFutureEvents> {
    return client.fetch(
        `{
                    "past": *[_type == "event" && event_start_time < now()] | order(event_start_time desc)[0...$limit]{..., gallery->{slug}},
                    "future": *[_type == "event" && event_start_time >= now()] | order(event_start_time asc)[0...$limit]
                }
    `,
        { limit },
    )
}

/**
 * Henter ut de neste eventene fra sanity, sortert etter starttidspunkt.
 * Man kan spesifisere en start og sluttindeks for å hente ut en del av listen.
 * @param from Startindeks
 * @param to Sluttindeks
 * @returns En liste med de neste eventene. Hvis ingen ble funnet, returneres en tom liste.
 * @see https://www.sanity.io/docs/paginating-with-groq
 */
export async function getNextEventsPaginated(
    from: number,
    to: number,
): Promise<ReadonlyArray<RootEvent>> {
    return client.fetch(
        '*[_type == "event" && event_start_time > now()] | order(event_start_time asc)[$from...$to]',
        {
            from,
            to,
        },
    )
}

/**
 * Henter ut de forrige eventene fra sanity, sortert etter starttidspunkt.
 * Man kan spesifisere en start og sluttindeks for å hente ut en del av listen.
 * @param from Startindeks
 * @param to Sluttindeks
 * @returns En liste med de forrige eventene. Hvis ingen ble funnet, returneres en tom liste.
 * @see https://www.sanity.io/docs/paginating-with-groq
 */
export async function getPreviousEventsPaginated(
    from: number,
    to: number,
): Promise<ReadonlyArray<RootEvent>> {
    return client.fetch(
        '*[_type == "event" && event_start_time < now()] | order(event_start_time desc)[$from...$to]',
        {
            from,
            to,
        },
    )
}
