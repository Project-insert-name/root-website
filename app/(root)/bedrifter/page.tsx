import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getInfoSiderBySlug } from "@/sanity/queries/infoSider"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "For bedrifter | Root Linjeforening",
    description: "Informasjon for bedrifter om Root Linjeforening",
}

export const revalidate = 30 // 30 sek

/**
 * Viser diverse informasjon om Root Linjeforeningen. Samt anne informasjon som er relevant for linjeforeningen.
 */
const BedrifterPage: AsyncPage = async () => {
    const BedrifterPage = await getInfoSiderBySlug("for-bedrifter")

    if (!BedrifterPage) {
        return <div className="p-10 text-center">Fant ikke siden "For bedrifter".</div>
    }

    return <InfoPageContent infoSider={[BedrifterPage]} />
}

export default BedrifterPage