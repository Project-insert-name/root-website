/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "@sanity-typed/types"
import { deskTool } from "sanity/desk"
import { markdownSchema } from "sanity-plugin-markdown"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"

/**
 * Oppretter et config objekt som brukes til å konfigurere sanity studio
 * basePath definerer hvor studio skal være tilgjengelig, i dette tilfellet /studio
 * projectId og dataset er hentet fra sanity/env.ts
 * schema er hentet fra sanity/schema.ts og inneholder alle schema til prosjektet
 * plugins inneholder alle plugins som tilhører sanity studio
 */
export default defineConfig({
    title: `Root Studio (${dataset})`,
    basePath: "/studio",
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        deskTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        markdownSchema(),
    ],
})
