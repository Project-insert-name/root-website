import type { JobAdvert } from "@/sanity/types"
import { client } from "@/sanity"

/**
 * Henter ut alle stillingsannonser fra sanity
 * @returns En liste med alle stillingsannonsene
 */
export async function getJobAdverts(): Promise<ReadonlyArray<JobAdvert>> {
    return await client.fetch('*[_type == "job_advert"]')
}

/**
 * Henter ut de neste stillingsannonsene fra sanity, sortert etter søknadsfrist
 * @param limit Maks antall stillingsannonser som skal hentes ut
 * @returns En liste med de neste stillingsannonsene
 */
export async function getNextJobAdverts(limit = 4): Promise<ReadonlyArray<JobAdvert>> {
    return await client.fetch(
        `*[_type == "job_advert" && deadline > now()] | order(deadline asc)[0...$limit]`,
        {
            limit,
        },
    )
}

/**
 * Henter ut en spesifikk stillingsannonse fra sanity basert på slug
 * @param slug Slug til stillingsannonsen
 * @returns JobAdvert Stillingsannonsen med den spesifikke slugen, eller null om den ikke finnes
 */
export async function getJobAdvertBySlug(slug: string): Promise<JobAdvert | null> {
    return await client.fetch('*[_type == "job_advert" && slug.current == $slug][0]', { slug })
}
