import { getJobAdvertBySlug, getJobAdverts } from "@/sanity/queries/jobAdvert"
import SanityImage from "@/components/sanityImage"
import { toFormatDate } from "@/utils/dateUtils"
import { AttendeesIcon, DateIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/button"
import { notFound } from "next/navigation"
import Markdown from "@/components/markdown"

interface Params {
    slug: string
}

/**
 * Side for en enkelt stillingsannose. Siden er dynamisk basert på stillingens slug variabel.
 * Dersom slug ikke finnes, returneres en 404 side.
 * @param params Parametre fra URL
 */
const JobAdvertPage: AsyncPage<Params> = async ({ params }) => {
    const ad = await getJobAdvertBySlug(params!.slug)

    if (!ad) return notFound()

    return (
        <div className={"container mx-auto px-2 sm:w-[1000px]"}>
            <h1 className={"mb-5 text-center text-2xl sm:text-4xl"}>{ad.title}</h1>
            <h3 className={"text-center text-lg sm:text-2xl"}>{ad.company}</h3>
            {ad.image && (
                <SanityImage
                    className={"mx-auto"}
                    image={ad.image}
                    width={500}
                    height={500}
                    alt={ad.image.alt ?? `Bilde for ${ad.title}`}
                />
            )}
            <div className={"flex flex-wrap justify-between"}>
                {ad.deadline && <Deadline deadline={ad.deadline}>Søknadsfrist:</Deadline>}
                {ad.number_of_positions && (
                    <AttendeesIcon title={`Antall stillinger er ${ad.number_of_positions}`}>
                        Antall stillinger: {ad.number_of_positions}
                    </AttendeesIcon>
                )}
            </div>

            <Markdown className={"my-5"} markdown={ad.description} />

            <div className={"flex justify-center"}>
                <ExternalLinkButton href={ad.link}>Søk</ExternalLinkButton>
            </div>
        </div>
    )
}

export default JobAdvertPage

const Deadline: Component<{ deadline: string } & ChildProps> = ({ deadline, children }) => {
    const formatDate = toFormatDate(deadline)
    if (!formatDate) {
        return null
    }
    return (
        <DateIcon title={`Søknadsfrist ${formatDate}`}>
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
