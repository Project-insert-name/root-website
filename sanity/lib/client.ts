import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId } from "../env"

/**
 * Oppretter et client objekt som kan brukes til å hente ut data fra sanity
 * useCdn er satt til false for å unngå caching av data.
 * Denne brukes for å hente ut data som kan endres ofte, eller er viktig at er oppdatert.
 * @see https://www.sanity.io/docs/api-cdn
 */
export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false,
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

/**
 * Oppretter et client objekt som kan brukes til å hente ut data fra sanity
 * useCdn er satt til true for å bruke caching av data.
 * @see https://www.sanity.io/docs/api-cdn
 */
export const cdnClient = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: true,
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
