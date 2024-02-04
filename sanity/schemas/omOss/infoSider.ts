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
        defineField({
            name: "info",
            type: "markdown",
            title: "Informasjonen",
            description: "Tesket som blir vist på siden",
            deprecated: {
                reason: "Bruk heller 'Informasjon' over",
            },
        }),
    ],
})
