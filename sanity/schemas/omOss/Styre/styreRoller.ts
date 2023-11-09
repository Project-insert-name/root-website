import { defineField, defineType } from "@sanity-typed/types"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

export default defineType({
    name: "styre_roller",
    type: "document",
    title: "Roller i styret",
    icon: PlusCircleIcon,
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Rolle i styret",
            description: "Hvilken rolle kan medlemmer ha i styret f.eks leder",
        }),
    ],
})
