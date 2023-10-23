import type { SanityDocument } from '@sanity/client'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type EventType = "bedpres" | "workshop" | "social" | "other";

export type Markdown = string;

/**
 * Inneholder data knyttet til en Event, som bedriftspresentasjon, workshop, sosialt arrangement eller lignende.
 */
export interface RootEvent extends SanityDocument {
    readonly event_title: string,
    readonly event_description?: Markdown,
    readonly event_type: EventType,
    readonly event_start_time: string,
    readonly event_max_attendees?: number,
    readonly event_registration_deadline?: string,
    readonly event_address_text?: string,
    readonly event_address_url?: string,
    readonly event_image?: SanityImageSource,
    readonly event_application_url?: string,
    readonly event_slug: {
        readonly current: string,
    },
}
