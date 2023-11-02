import { type SchemaTypeDefinition } from "sanity"
import event from "./schemas/event"
import jobAdvert from "./schemas/jobAdvert"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [event, jobAdvert],
}
