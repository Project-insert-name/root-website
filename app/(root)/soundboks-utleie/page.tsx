import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getInfoSiderBySlug } from "@/sanity/queries/infoSider"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Soundboks utleie | Root Linjeforening",
    description: "Utleie av soundboksen til Root Linjeforening",
}

export const revalidate = 30 // 30 sek

/**
 * Viser diverse informasjon om Root Linjeforeningen. Samt anne informasjon som er relevant for linjeforeningen.
 */
const SoundboksUtleiePage: AsyncPage = async () => {
    const SoundboksUtleiePage = await getInfoSiderBySlug("soundboks-utleie")

    if (!SoundboksUtleiePage) {
        return <div className="p-10 text-center">Fant ikke siden &quot;Soundboks utleie&quot;.</div>
    }

    return <InfoPageContent infoSider={[SoundboksUtleiePage]} />
}

export default SoundboksUtleiePage