import { defineType, defineField, defineArrayMember } from "@sanity-typed/types"
import { PhotoIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "image_gallery",
    type: "document",
    title: "Bildegalleri",
    icon: PhotoIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Galleri navn",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Lenke slug",
            description:
                "Dette er en unik streng som definerer url-en på nettsiden, bruk generate knappen for å lage",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "images",
            type: "array",
            title: "Bilder",
            validation: Rule => Rule.required(),
            of: [
                defineArrayMember({
                    name: "image",
                    type: "image",
                    title: "Bilde",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        defineField({
                            name: "alt_text",
                            type: "string",
                            title: "Alternativ bildetekst",
                        }),
                    ],
                }),
            ],
            options: {
                layout: "grid",
            },
        }),
        defineField({
            name: "event",
            type: "reference",
            title: "Event",
            description:
                "Er dette bildegalleriet tilknyttet et event? Isåfall velg det relevante eventet nedenfor.",
            to: [{ type: "event" } as const], // This has to be type asserted as a const apparently
        }),
    ],
})
