import event from "./schemas/event"
import jobAdvert from "./schemas/jobAdvert"
import styrer from "@/sanity/schemas/omOss/Styre/styrer"
import styreMedlem from "@/sanity/schemas/omOss/Styre/styreMedlem"
import styreRoller from "@/sanity/schemas/omOss/Styre/styreRoller"
import imageGallery from "@/sanity/schemas/galleri/imageGallery"

/**
 * Innheolder en liste av alle schemas som tilhører prosjektet
 * Det er viktig at defineType, defineField og defineArrayMember blir importert fra @sanity-typed/types
 * Slik at @sanity-typed kan generere typescript typer for oss.
 * @see https://www.sanity.io/docs/schema-types
 */
export const schema = {
    types: [event, jobAdvert, styrer, styreMedlem, styreRoller, imageGallery],
}
