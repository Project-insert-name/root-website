import { SanityDocument } from '@sanity/client'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type EventType = "bedpres" | "workshop" | "social" | "other";

export interface RootEvent extends SanityDocument {
    readonly event_title: string,
    readonly event_description?: string,
    readonly event_type: EventType,
    readonly event_start_time: string,
    readonly event_max_attendees?: number,
    readonly event_registration_deadline?: string,
    readonly event_address_text?: string,
    readonly event_address_geopoint?: {
        readonly lat: number,
        readonly lng: number,
        readonly alt: number,
    }
    readonly event_image?: SanityImageSource,
    readonly event_application_url?: string,
    readonly event_slug: {
        readonly current: string,
    },
}
