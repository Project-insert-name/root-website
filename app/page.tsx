import type { Metadata } from "next";
import EventCard from "@/components/events/eventCard";
import AdsCard from "@/components/events/adsCard";
import { getNextEvents } from "@/sanity/queries";
import InfoCard from "@/components/events/infoCard";

export const metadata: Metadata = {
    title: 'Hjem | Root Linjeforening',
    description: 'Hjemmesiden til Root Linjeforening ved Høgskulen på Vestlandet (HVL)',
}

export type Ad = { // TODO testdata skal slettes
    _id: string,
    title: string,
    dueDate: string,
    thumbnail: string,
}

const testAds: Ad[] = [ // TODO testdata skal slettes
    {
        _id: "1",
        title: "Sommerjobb hos Nav IT",
        dueDate: "2023-09-21",
        thumbnail: "/next.svg",
    }
]

// TODO InnleggKomponent (Må avklares hvilke innlegg som skal vises, eget schema eller hent fra facebook/instagram)
// TODO størrelser på kortene og plassering
// TODO skal vi ha noe mer på forsiden? Velkomsttekst i toppen?

const Home: AsyncComponent = async () => {
    const events = await getNextEvents();
    return (
        <div className={ "flex flex-wrap justify-around py-5" }>
            <EventCard eventTitle={ "Arrangementer" } events={ events } showMoreUrl={ "arrangementer" }
                       className={ "sm:w-[550px] w-full mx-2" } />
            <div className={ "flex flex-col gap-5 sm:w-[550px] w-full" }>
                <AdsCard className={ "mx-2" } ads={ testAds }
                         showMoreUrl={ "stillingsannonser" } />
                {/*TODO dummy komponent*/ }
                <InfoCard className={ "mx-2" } cardTitle={ "Innlegg" } showMoreUrl={ "/" }>
                    <br />
                    <br />
                </InfoCard>
            </div>
        </div>
    )
}

export default Home;
