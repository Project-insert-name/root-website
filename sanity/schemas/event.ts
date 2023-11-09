import { defineType, defineField } from "@sanity-typed/types"
import { CalendarIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "event",
    type: "document",
    title: "Event",
    icon: CalendarIcon,
    fields: [
        defineField({
            name: "event_title",
            type: "string",
            title: "Event navn",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "event_slug",
            type: "slug",
            title: "Lenke slug",
            description:
                "Dette er en unik streng som definerer url-en på nettsiden, bruk generate knappen for å lage",
            validation: Rule => Rule.required(),
            options: {
                source: "event_title",
            },
        }),
        defineField({
            name: "event_description",
            type: "markdown",
            title: "Fullstendig beskrivelse",
            description: "Inkluder brødtekst med utdypende informasjon om eventet",
        }),
        defineField({
            name: "event_type",
            type: "string",
            title: "Type event",
            validation: Rule => Rule.required(),
            options: {
                list: [
                    { title: "Bedriftspresentasjon", value: "bedpres" },
                    { title: "Workshop", value: "workshop" },
                    { title: "Sosialt Arrangement", value: "social" },
                    { title: "Annet", value: "other" },
                ],
                layout: "radio",
            },
        }),
        defineField({
            name: "event_start_time",
            type: "datetime",
            title: "Tidspunkt",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "event_max_attendees",
            type: "number",
            title: "Maks antall deltakere",
        }),
        defineField({
            name: "event_registration_deadline",
            type: "datetime",
            title: "Påmeldingsfrist",
        }),
        defineField({
            name: "event_address_text",
            type: "string",
            title: "Adresse",
        }),
        defineField({
            name: "event_address_url",
            type: "url",
            title: "Kart lokasjon",
            description:
                "Dette kan enten være en lenke til et sted på Google Maps, eller MazeMap hvis det tar plass på skolen.",
        }),
        defineField({
            name: "event_image",
            type: "image",
            title: "Forsidebilde",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Billdebeskrivelse",
                    validation: Rule => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: "event_application_url",
            type: "url",
            title: "Lenke til påmelding",
            description: "Her kan du legge inn en lenke til påmeldingsskjemas",
        }),
    ],
})
