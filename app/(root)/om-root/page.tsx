import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getInfoSiderBySlug } from "@/sanity/queries/infoSider"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Om Root | Root Linjeforening",
    description: "Informasjon om Root Linjeforening",
}

export const revalidate = 30 // 30 sek

/**
 * Viser diverse informasjon om Root Linjeforeningen. Samt anne informasjon som er relevant for linjeforeningen.
 */
const OmRootPage: AsyncPage = async () => {
    const omRootPage = await getInfoSiderBySlug("om-root")

    if (!omRootPage) {
        return <div className="p-10 text-center">Fant ikke siden &quot;Om Root&quot;.</div>
    }

    return <InfoPageContent infoSider={[omRootPage]} />
}

export default OmRootPage