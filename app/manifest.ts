import { MetadataRoute } from "next"

/**
 * Definerer innholdet i manifest.json-filen.
 * Manifest.json er en JSON-fil som definerer metadata om en webapplikasjon.
 * Denne metadataen kan brukes av nettlesere og andre verktøy for å gi en bedre brukeropplevelse.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
 * @see https://developer.mozilla.org/en-US/docs/Web/Manifest
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Root Linjeforening",
        short_name: "Root",
        description: `
          Root er linjeforeningen for studenter som studerer eller har fullført studiet dataingeniør
          eller informasjonsteknologi ved Høgskulen På Vestlandet, avdeling Bergen.
        `,
        lang: "nb",
        start_url: "/",
        display: "standalone",
        background_color: "#F3F3F3",
        theme_color: "#F3F3F3",
        orientation: "any",
        icons: [
            {
                src: "/icon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    }
}
