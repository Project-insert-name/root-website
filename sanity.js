// sanity.js
import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

// Setter opp Sanity client
// Queries kan bare kjøres fra server-side komponenter
export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// Example of how to query from Sanity
// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getDataTest() {
    return await client.fetch('*[_type == "pet"]')
}

// export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
// }
//
// export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({title})
//     return result
// }