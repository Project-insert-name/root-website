import config from "@/sanity.config"
import type { DocumentValues, InferSchemaValues } from "@sanity-typed/types"

export type MarkdownString = string

export type SanitySlug = {
    current: string
    _type: "slug"
}

/**
 * Inneholder alle typer tilknyttet sanity
 */
export type SanityValues = InferSchemaValues<typeof config>

/**
 * Inneholder alle schemas som er definert i sanity/schemas, som en union type.
 */
export type SanityDocuments = DocumentValues<SanityValues>

/**
 * Et bildeobjekt som innholder data knyttet til et bilde. Samt alt tekst.
 */
export type SanityImageObject = SanityValues["event"]["hero_image"]

/**
 * Inneholder data knyttet til en Event, som bedriftspresentasjon, workshop, sosialt arrangement eller lignende.
 */
export type RootEvent = SanityValues["event"] & {
    description: MarkdownString
    // Må spesifiseres fordi den originale typen inneholder bare referansen til et bildegalleri, ikke selve galleriet.
    gallery?: { slug: SanitySlug }
}

/**
 * Type som beskriver hvilken type event det er.
 */
export type EventType = SanityValues["event"]["type"]

/**
 * Inneholder data knyttet til et bildegalleri
 */
export type ImageGallery = SanityValues["image_gallery"] & {
    event?: { slug: SanitySlug }
}

/**
 * Inneholder data knyttet til en stillingsannonse.
 */
export type JobAdvert = SanityValues["job_advert"] & {
    description: MarkdownString
}

export type Styrer = SanityValues["styrer"]

export type StyreMedlem = SanityValues["styremedlem"]

export type StyreRoller = SanityValues["styre_roller"]
