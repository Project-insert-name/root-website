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
 * Henter ut en specifikk event fra sanity basert på slug
 * @param slug Slug til eventen
 * @returns RootEvent Eventet med den spesifikke slugen, eller null om den ikke finnes
 */
export async function getEventBySlug(slug: string): Promise<RootEvent | null> {
    return await client.fetch('*[_type == "event" && event_slug.current == $slug][0]', { slug });
}