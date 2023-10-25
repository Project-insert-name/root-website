import { client } from "@/sanity";
import type { RootEvent } from "@/sanity/types";

/**
 * Henter ut alle events fra sanity, sortert etter starttidspunkt
 * @returns En liste med alle events
 */
export async function getAllEvents(): Promise<ReadonlyArray<RootEvent>> {
    return await client.fetch('*[_type == "event"] | order(event_start_time asc)');
}

/**
 * Henter ut de neste eventene fra sanity, sortert etter starttidspunkt
 * @param limit Maks antall events som skal hentes ut
 * @returns En liste med de neste eventene
 */
export async function getNextEvents(limit = 4): Promise<ReadonlyArray<RootEvent>> {
    return await client.fetch(
        `*[_type == "event" && event_start_time > now()] | order(event_start_time asc)[0...$limit]`, { limit }
    );
}

/**
 * Henter ut en specifikk event fra sanity basert på slug
 * @param slug Slug til eventen
 * @returns RootEvent Eventet med den spesifikke slugen, eller null om den ikke finnes
 */
export async function getEventBySlug(slug: string): Promise<RootEvent | null> {
    return await client.fetch('*[_type == "event" && event_slug.current == $slug][0]', { slug });
}