import { defineArrayMember, defineField, defineType } from "@sanity-typed/types"
import { UsersIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "styrer",
    type: "document",
    title: "Styrer",
    icon: UsersIcon,
    fields: [
        defineField({
            name: "styre_title",
            type: "string",
            title: "Styre",
            description: "Når var dette styret gjelende f.eks Høsten 2023",
        }),
        defineField({
            name: "styre_slug",
            type: "slug",
            title: "Lenke slug",
            description:
                "Dette er en unik streng som definerer url-en på nettsiden, bruk generate knappen for å lage",
            validation: Rule => Rule.required(),
            options: {
                source: "styre_title",
            },
        }),
        defineField({
            name: "Styremedlemmer",
            type: "array",
            of: [defineArrayMember({ type: "styremedlem" })],
            title: "Styremedlemmer",
        }),
    ],
})
