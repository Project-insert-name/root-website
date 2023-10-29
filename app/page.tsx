import type { Metadata } from "next"
import EventCard from "@/components/events/eventCard"
import AdsCard from "@/components/events/adsCard"
import InfoCard from "@/components/events/infoCard"

export const metadata: Metadata = {
    title: "Hjem | Root Linjeforening",
    description: "Hjemmesiden til Root Linjeforening ved Høgskulen på Vestlandet (HVL)",
}

// TODO InnleggKomponent (Må avklares hvilke innlegg som skal vises, eget schema eller hent fra facebook/instagram)
// TODO størrelser på kortene og plassering
// TODO skal vi ha noe mer på forsiden? Velkomsttekst i toppen?

const Home: Page = () => {
    return (
        <div className={"flex flex-wrap justify-around py-5"}>
            <EventCard
                eventTitle={"Arrangementer"}
                showMoreUrl={"arrangementer"}
                className={"mx-2 w-full sm:w-[550px]"}
            />
            <div className={"flex w-full flex-col gap-5 sm:w-[550px]"}>
                <AdsCard className={"mx-2"} showMoreUrl={"stillingsannonser"} />
                {/*TODO dummy komponent*/}
                <InfoCard className={"mx-2"} cardTitle={"Innlegg"} showMoreUrl={"/"}>
                    <br />
                    <br />
                </InfoCard>
            </div>
        </div>
    )
}

export default Home
