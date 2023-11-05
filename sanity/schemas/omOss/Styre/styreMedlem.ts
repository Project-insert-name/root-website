import { defineArrayMember, defineField, defineType } from "@sanity-typed/types"
import { UserIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "styremedlem",
    type: "object",
    title: "Styremedlemer",
    icon: UserIcon,
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Navn",
        }),
        defineField({
            name: "photo_member",
            type: "image",
            title: "Styremedlem bilde",
        }),
        defineField({
            name: "rolle",
            type: "array",
            title: "Rolle",
            of: [
                defineArrayMember({
                    type: "reference",
                    // Referanse type må bruke "as const" med @sanity-typed
                    to: [{ type: "styre_roller" } as const],
                }),
            ],
        }),
    ],
})
