import { defineType, defineField, defineArrayMember } from "@sanity-typed/types"
import { CalendarIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "event",
    type: "document",
    title: "Event",
    icon: CalendarIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Tittel på arrangementet",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Lenke slug",
            description:
                "En unik streng som definerer url-en på nettsiden, bruk 'generate' knappen for å lage",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "description_block",
            title: "Fullstendig beskrivelse",
            description: "Inkluder brødtekst med utdypende informasjon om eventet",
            type: "array",
            of: [defineArrayMember({ type: "block" })],
        }),
        defineField({
            name: "type",
            type: "string",
            title: "Type arrangement",
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
            name: "start_time",
            type: "datetime",
            title: "Tidspunkt",
            description: "Starttidspunkt for arrangementet",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "end_time",
            type: "datetime",
            title: "Sluttidspunkt",
            description: "La stå tom hvis arrangementet ikke har en fast slutt",
            validation: Rule =>
                Rule.min(Rule.valueOfField("start_time")).error(
                    "Sluttiden må være etter starttiden",
                ),
        }),
        defineField({
            name: "max_participants",
            type: "number",
            title: "Maks antall deltakere. La stå tom for ubegrenset",
        }),
        defineField({
            name: "registration_deadline",
            type: "datetime",
            title: "Påmeldingsfrist",
            description: "Påmeldingsfrist for arrangementet. La stå tom for ingen frist",
            validation: Rule =>
                Rule.max(Rule.valueOfField("start_time")).warning(
                    "Påmeldingsfristen bør være før starttiden",
                ),
        }),
        defineField({
            name: "address_text",
            type: "string",
            title: "Adresse / Lokasjon",
            description:
                "En tekstlig beskrivelse av hvor arrangementet finner sted. Kan være en adresse.",
        }),
        defineField({
            name: "address_url",
            type: "url",
            title: "Lenke til lokasjon",
            description:
                "En lenke til et sted på Google Maps, eller MazeMap hvis det tar plass på skolen.",
        }),
        defineField({
            name: "gallery",
            type: "reference",
            title: "Bildegalleri",
            description:
                "Du kan enten legge til et eksisterende bildegalleri eller lage et nytt ett",
            to: [{ type: "image_gallery" } as const],
        }),
        defineField({
            name: "hero_image",
            type: "image",
            title: "Forsidebilde",
            description:
                "Vises i toppen av arrangementet, og som en thumbnail. Bør være omtrent 16/7.",
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
            name: "registration_url",
            type: "url",
            title: "Lenke for påmelding",
            description: "Her kan du legge inn en lenke til påmeldingsskjemas",
        }),
    ],
})
