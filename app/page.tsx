import type { Metadata } from "next"
import EventCard from "@/components/events/eventCard"
import AdsCard from "@/components/events/adsCard"
import InfoCard from "@/components/events/infoCard"

export const metadata: Metadata = {
    title: "Hjem | Root Linjeforening",
    description: "Hjemmesiden til Root Linjeforening ved Høgskulen på Vestlandet (HVL)",
}

// TODO InnleggKomponent hent data fra Facebook og Instagram

/**
 * Brukes for å tvinge Next.js til å oppdatere innholdet på siden.
 * Skrur av all caching på siden, som gjør at nye innlegg vises med en gang.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
export const dynamic = "force-dynamic"

const Home: Page = () => {
    return (
        <div className={"flex flex-wrap justify-center gap-5 py-5"}>
            <EventCard
                eventTitle={"Arrangementer"}
                showMoreUrl={"arrangementer"}
                className={"mx-2 w-full sm:w-[550px]"}
            />
            <div className={"flex w-full flex-col gap-5 sm:w-[550px]"}>
                <AdsCard className={"mx-2"} />
                {/*TODO dummy komponent*/}
                <InfoCard className={"mx-2"} cardTitle={"Innlegg"}>
                    <br />
                    <br />
                </InfoCard>
            </div>
        </div>
    )
}

export default Home
