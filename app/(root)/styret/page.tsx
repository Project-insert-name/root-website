import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getAllInfoPages } from "@/sanity/queries/omOss"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Styret | Root Linjeforening",
    description: "Informasjon om Root Linjeforening",
}

export const revalidate = 1800 // 30 min

/**
 * Viser diverse informasjon om Root Linjeforeningen. Samt anne informasjon som er relevant for linjeforeningen.
 */
const OmOssPage: AsyncPage = async () => {
    const infoSider = await getAllInfoPages()
    return <InfoPageContent infoSider={infoSider} />
}

export default OmOssPage
