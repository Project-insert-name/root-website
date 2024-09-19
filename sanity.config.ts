/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "@sanity-typed/types"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"
import { structureTool } from "sanity/structure"
import type { SanityDocuments } from "@/sanity/types"
import SanityToolMenu from "@/app/(sanity)/studio/[[...index]]/navbar"

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
        structureTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
    studio: {
        components: {
            toolMenu: SanityToolMenu,
        },
    },
    document: {
        /**
         * Definerer en lenke til root-nettsiden fra Sanity Studio.
         * Lenken bruker slugen til dokumentet for å generere en lenke. Alle slugs må hete "slug" for at dette skal fungere.
         * Lenken finnes i ... menyen i top høyre hjørne av dokumentet. Kalt "Open preview". Eller ved å trykke CTRL + ALT + O.
         * @param _
         * @param document Dokumentet brukeren er i.
         */
        productionUrl: async (_, { document }) => {
            if (!(typeof document.slug === "object" && document.slug && "current" in document.slug))
                return "/"
            let path = ""
            switch (document._type as SanityDocuments["_type"]) {
                case "event":
                    path = "/arrangement"
                    break
                case "job_advert":
                    path = "/stilling"
                    break
                case "image_gallery":
                    path = "/galleri"
                    break
            }
            return `${path}/${document.slug.current ?? "/"}`
        },
    },
})
