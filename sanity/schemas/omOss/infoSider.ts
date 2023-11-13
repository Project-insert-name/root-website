import {defineField, defineType} from "@sanity-typed/types";
import {ChatBubbleBottomCenterTextIcon} from "@heroicons/react/24/outline";
import {Rule} from "postcss";


export default defineType({
        name: "infoSider",
        type: "document",
        title: "Info Sider",
        icon: ChatBubbleBottomCenterTextIcon,
        fields: [
            defineField( {
                name: "info_title",
                type: "string",
                title: "Info side om hva",
                validation: Rule => Rule.required(),
            }),
            defineField({
                name: "info_slug",
                type: "slug",
                title: "Lenke slug",
                description: "Dette er en unik streng som definerer url-en på nettsiden, bruk generate knappen for å lage",
                validation: Rule => Rule.required(),
                options: {
                    source: "info_title"
                },
            }),
            defineField({
                name: "info_image",
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
                name: "info",
                type: "markdown",
                title: "Informasjonen",
                description: "Tesket som blir vist på siden"
            }),

        ],
})