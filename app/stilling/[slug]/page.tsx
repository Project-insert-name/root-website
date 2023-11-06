import { getJobAdvertBySlug, getJobAdverts } from "@/sanity/queries/jobAdvert"
import { toFormatDate } from "@/utils/dateUtils"
import { bigIconSize, DateIcon } from "@/components/icons/icon"
import { notFound } from "next/navigation"
import SingleInfoCard from "@/components/events/singleInfoCard"

interface Params {
    slug: string
}

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
            description={ad.description}
            image={ad.image}
            imageAlt={ad.image?.alt}
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
    const formatDate = toFormatDate(deadline)
    if (!formatDate) {
        return null
    }
    return (
        <DateIcon title={`Søknadsfrist ${formatDate}`} width={bigIconSize}>
            {children} {formatDate}
        </DateIcon>
    )
}

/**
 * Genererer statiske paths for alle stillingsannonser.
 * Kjøres ved bygging av nettsiden.
 * @returns Liste med statiske paths
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export const generateStaticParams = async (): Promise<Params[]> => {
    const ads = await getJobAdverts()

    return ads.map(ad => ({
        slug: ad.slug.current,
    }))
}
