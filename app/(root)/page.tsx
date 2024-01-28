import type { Metadata } from "next"
import EventCard from "@/components/cards/eventCard"
import AdsCard from "@/components/cards/adsCard"

export const metadata: Metadata = {
    title: "Hjem | Root Linjeforening",
    description: "Hjemmesiden til Root Linjeforening ved Høgskulen på Vestlandet (HVL)",
}

// TODO InnleggKomponent hent data fra Facebook og Instagram

/**
 * Definerer hvor ofte cache skal slettes.
 * @https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
 */
export const revalidate = 30 // 30 sek

const Home: Page = () => (
    <div className={"flex flex-wrap justify-center gap-5 py-5"}>
        <EventCard eventTitle={"Arrangementer"} className={"mx-2 w-full sm:w-[550px]"} />
        <div className={"flex w-full flex-col gap-5 sm:w-[550px]"}>
            <AdsCard className={"mx-2"} />
            {/*TODO dummy komponent*/}
            {/*<InfoCard className={"mx-2"} cardTitle={"Innlegg"}>*/}
            {/*    <br />*/}
            {/*    <br />*/}
            {/*</InfoCard>*/}
        </div>
    </div>
)

export default Home
