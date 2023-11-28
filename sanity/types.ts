import config from "@/sanity.config"
import type { DocumentValues, InferSchemaValues } from "@sanity-typed/types"

export type EventType = "bedpres" | "workshop" | "social" | "other"

export type MarkdownString = string

/**
 * Inneholder alle typer tilknyttet sanity
 */
export type SanityValues = InferSchemaValues<typeof config>

/**
 * Inneholder alle schemas som er definert i sanity/schemas, som en union type.
 */
export type SanityDocuments = DocumentValues<SanityValues>

export type SanityImageObject = SanityValues["event"]["event_image"]

/**
 * Inneholder data knyttet til en Event, som bedriftspresentasjon, workshop, sosialt arrangement eller lignende.
 */
export type RootEvent = SanityValues["event"] & {
    event_description: MarkdownString
}

// export type SanityImageArrayObject = SanityValues["image_gallery"]
/**
 * Inneholder data knyttet til et bildegalleri
 */
export type ImageGallery = SanityValues["image_gallery"]

/**
 * Inneholder data knyttet til en stillingsannonse.
 */
export type JobAdvert = SanityValues["job_advert"] & {
    description: MarkdownString
}

export type Styrer = SanityValues["styrer"]

export type StyreMedlem = SanityValues["styremedlem"]

export type StyreRoller = SanityValues["styre_roller"]

export type InfoSider = SanityValues["info_sider"] & [
    info: MarkdownString
]
