import { getAllEvents, getEventBySlug } from "@/sanity/queries/event"
import { toFormatDateAndTime } from "@/utils/dateUtils"
import { bigIconSize, DateIcon, TimeIcon } from "@/components/icons/icon"
import { notFound } from "next/navigation"

/**
 * Side for et enkelt arrangement. Siden er dynamisk basert på arrangementets slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const ImageGalleryListPage: AsyncPage = async () => {
    return <h1>Hei</h1>
}

export default ImageGalleryListPage
