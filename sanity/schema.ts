import event from "./schemas/event"
import jobAdvert from "./schemas/jobAdvert"
import styrer from "@/sanity/schemas/omOss/Styre/styrer"
import styreMedlem from "@/sanity/schemas/omOss/Styre/styreMedlem"
import styreRoller from "@/sanity/schemas/omOss/Styre/styreRoller"

export const schema = {
    types: [event, jobAdvert, styrer, styreMedlem, styreRoller],
}
