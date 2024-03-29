import { getJobAdvertBySlug } from "@/sanity/queries/jobAdvert"
import { bigIconSize, DateIcon } from "@/components/icons/icon"
import { notFound } from "next/navigation"
import SingleInfoCard from "@/components/cards/singleInfoCard"
import { type Metadata } from "next"
import { Date } from "@/components/date"
import { toPlainText } from "@portabletext/react"

interface Params {
    slug: string
}

export const revalidate = 30 // 30 sek

/**
 * Side for en enkelt stillingsannose. Siden er dynamisk basert på stillingens slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const JobAdvertPage: AsyncPage<Params> = async ({ params }) => {
    const ad = await getJobAdvertBySlug(params.slug)

    if (!ad) return notFound()

    return (
        <SingleInfoCard
            title={ad.title}
            descriptionBlock={ad.description_block}
            image={ad.image}
            maxParticipants={
                ad.number_of_positions
                    ? `Antall stillinger er ${ad.number_of_positions}`
                    : undefined
            }
            buttonText={"Søk"}
            buttonUrl={ad.link}>
            <Deadline deadline={ad.deadline}>Søknadsfrist:</Deadline>
        </SingleInfoCard>
    )
}

export default JobAdvertPage

const Deadline: Component<{ deadline?: string } & ChildProps> = ({ deadline, children }) => {
    if (!deadline) {
        return (
            <DateIcon title={`Søknadsfrist`} width={bigIconSize}>
                Opptak skjer fortløpende
            </DateIcon>
        )
    }
    return (
        <DateIcon title={`Søknadsfrist ${deadline}`} width={bigIconSize}>
            {children} <Date date={deadline} />
        </DateIcon>
    )
}

/**
 * Genererer metadata for en enkelt stillingsannonse.
 * Kjøres ved bygging av nettsiden.
 * @param props Props som sendes til siden
 * @returns Metadata for siden
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 */
export async function generateMetadata(props: PageProps<Params>): Promise<Metadata> {
    const ad = await getJobAdvertBySlug(props.params.slug)

    if (!ad) return notFound()

    return {
        title: `${ad.title} | Root Linjeforening`,
        description: ad.description_block ? toPlainText(ad.description_block) : "Stillingsannonse",
    }
}
