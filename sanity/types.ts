import { SanityDocument } from '@sanity/client'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type EventType = "bedpres" | "workshop" | "social" | "other";

export interface RootEvent extends SanityDocument {
    event_title: string,
    event_description: string,
    event_type: EventType,
    event_start_time: string,
    event_max_attendees: number,
    event_registration_deadline: string,
    event_address_text: string,
    event_address_geopoint: {
        lat: number,
        lng: number,
        alt: number,
    }
    event_image: SanityImageSource,
    event_application_url: string,
    event_slug: {
        current: string,
    },
}
