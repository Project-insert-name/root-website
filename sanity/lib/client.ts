import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

/**
 * Oppretter et client objekt som kan brukes til å hente ut data fra sanity
 * useCdn bør være satt til false, for å unngå at dataen blir cachet og ikke oppdatert
 */
export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
