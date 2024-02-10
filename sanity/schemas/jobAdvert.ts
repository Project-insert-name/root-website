import { defineArrayMember, defineField, defineType } from "@sanity-typed/types"
import { BriefcaseIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "job_advert",
    type: "document",
    title: "Stillingsannonse",
    icon: BriefcaseIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Tittel",
            description: "Tittel på stillingsannonsen",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "company",
            type: "string",
            title: "Bedrift",
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
            name: "link",
            type: "url",
            title: "Lenke til stillingsannonsen",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description_block",
            title: "Fullstendig beskrivelse",
            description: "Inkluder brødtekst med utdypende informasjon om eventet",
            type: "array",
            of: [defineArrayMember({ type: "block" })],
        }),
        defineField({
            name: "deadline",
            type: "date",
            title: "Søknadsfrist",
        }),
        defineField({
            name: "number_of_positions",
            type: "number",
            title: "Antall stillinger",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Bilde",
            description: "Bilde som vises på stillingsannonsen",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Bilde tekst",
                    description: "Tekst som beskriver bildet",
                    validation: Rule => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: "description",
            type: "markdown",
            title: "Beskrivelse",
            description: "Inkluder brødtekst med utdypende informasjon om stillingen",
            deprecated: {
                reason: "Bruk 'Fullstendig beskrivelse' over i stedet",
            },
        }),
    ],
})
