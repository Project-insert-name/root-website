import event from "./schemas/event"
import jobAdvert from "./schemas/jobAdvert"
import infoSider from "./schemas/infoSider"
import imageGallery from "./schemas/imageGallery"

/**
 * Innheolder en liste av alle schemas som tilhører prosjektet
 * Det er viktig at defineType, defineField og defineArrayMember blir importert fra @sanity-typed/types
 * Slik at @sanity-typed kan generere typescript typer for oss.
 * @see https://www.sanity.io/docs/schema-types
 */
export const schema = {
    types: [event, jobAdvert, infoSider, imageGallery],
}
