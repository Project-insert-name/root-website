import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getInfoSiderBySlug } from "@/sanity/queries/infoSider"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Styret | Root Linjeforening",
    description: "Informasjon om styret til Root Linjeforening",
}

export const revalidate = 30 // 30 sek

/**
 * Viser diverse informasjon om Root Linjeforeningen. Samt anne informasjon som er relevant for linjeforeningen.
 */
const StyretPage: AsyncPage = async () => {
    const StyretPage = await getInfoSiderBySlug("styret")

    if (!StyretPage) {
        return <div className="p-10 text-center">Fant ikke siden "Styret".</div>
    }

    return <InfoPageContent infoSider={[StyretPage]} />
}

export default StyretPage