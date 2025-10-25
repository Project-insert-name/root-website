import { defineArrayMember, defineField, defineType } from "@sanity-typed/types"
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "info_sider",
    type: "document",
    title: "Infosider",
    icon: ChatBubbleBottomCenterTextIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Kort tittel",
            description: "Vises på navigasjonsbaren. Vil ikke vises over innholdet på siden",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Lenke slug",
            description: "Dette er en unik streng som definerer url-en på nettsiden, bruk generate knappen for å lage",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "priority",
            type: "number",
            title: "Prioritet",
            description:
                "Laveste tall blir prioritert først, hvis noen har samme tall blir det sortet på alfabetisk rekkefølge",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Forsidebilde",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Bildebeskrivelse",
                    validation: Rule => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: "info_block",
            title: "Informasjon",
            description: "Teksten som blir vist på siden",
            type: "array",
            of: [defineArrayMember({ type: "block" })],
        }),
    ],
})
