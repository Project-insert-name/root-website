import { client } from "@/sanity";
import type { RootEvent } from "@/sanity/types";

/**
 * Henter ut alle events fra sanity
 * @returns En liste med alle events
 */
export async function getAllEvents(): Promise<ReadonlyArray<RootEvent>> {
    return await client.fetch('*[_type == "event"]');
}

/**
 * Henter ut en specifikk event fra sanity basert på slug
 * @param slug Slug til eventen
 * @returns RootEvent Eventet med den spesifikke slugen
 */
export async function getEvent(slug: string): Promise<RootEvent> {
    return await client.fetch('*[_type == "event" && event_slug == $slug][0]', { slug });
}