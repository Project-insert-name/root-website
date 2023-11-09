import { defineType, defineField } from "@sanity-typed/types"
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
            name: "images",
            type: "array",
            title: "Bilder",
            of: [
                {
                    name: "image",
                    type: "image",
                    title: "Bilde",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "alt_text",
                            type: "string",
                            title: "Alternativ bildetekst",
                        },
                    ],
                },
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
