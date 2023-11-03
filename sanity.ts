// sanity.js
import { createClient } from "@sanity/client"
import { apiVersion, useCdn } from "@/sanity/env"

/**
 * Oppretter et client objekt som kan brukes til å hente ut data fra sanity
 * useCdn bør være satt til false, for å unngå at dataen blir cachet og ikke oppdatert
 */
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: useCdn, // set to `false` to bypass the edge cache
    apiVersion: apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
