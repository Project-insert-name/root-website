import InfoCard from "@/components/events/infoCard"
import Link from "next/link"
import { getNextJobAdverts } from "@/sanity/queries/jobAdvert"
import type { JobAdvert } from "@/sanity/types"
import { toFormatDate } from "@/utils/dateUtils"
import { DateIcon } from "@/components/icons/icon"
import { Suspense } from "react"
import { Divider } from "@/components/divider"
import { CircularProgressIndicator } from "@/components/suspense"
import Thumbnail from "@/components/events/thumbnail"

interface AdsCardProps extends DefaultProps {
    cardTitle?: string
    showMoreUrl: string
    emptyMessage?: string
    maxAds?: number
}

const AdsCard: Component<AdsCardProps> = ({
    cardTitle = "Stillingsannonser",
    emptyMessage = "Ingen stillingsannonser",
    showMoreUrl,
    className,
}) => (
    <InfoCard cardTitle={cardTitle} showMoreUrl={showMoreUrl} className={className}>
        <Suspense
            fallback={<CircularProgressIndicator aria-label={"Laster inn stillingsannonser"} />}>
            <AdCardData emptyMessage={emptyMessage} />
        </Suspense>
    </InfoCard>
)

export default AdsCard

const AdCardData: AsyncComponent<{ emptyMessage: string }> = async ({ emptyMessage }) => {
    const adverts = await getNextJobAdverts()
    return (
        <>
            {adverts.length > 0 ? (
                adverts.map((ad, index) => (
                    <div key={ad._id}>
                        {index !== 0 && <Divider />}
                        <SingleAdWide {...ad} className={"hidden sm:flex"} />
                        <SingleAdNarrow {...ad} className={"flex sm:hidden"} />
                    </div>
                ))
            ) : (
                <p className={"text-center"}>{emptyMessage}</p>
            )}
        </>
    )
}

const SingleAdWide: Component<JobAdvert & DefaultProps> = ({
    className,
    title,
    deadline,
    image,
    slug,
}) => (
    <div className={`mx-2 my-5 justify-between gap-3 ${className}`}>
        <div>
            <Link href={`stilling/${slug.current}`}>
                <h6 className={"font-mono"}>{title}</h6>
            </Link>

            <DateIcon>{deadline ? <Date deadline={deadline} /> : <p>Løpende opptak</p>}</DateIcon>
        </div>

        {image && (
            <Link href={`stilling/${slug.current}`}>
                <Thumbnail image={image} />
            </Link>
        )}
    </div>
)

const SingleAdNarrow: Component<JobAdvert & DefaultProps> = ({
    className,
    title,
    deadline,
    image,
    slug,
}) => (
    <div className={`mx-1 my-5 w-full flex-col ${className}`}>
        <Link href={`stilling/${slug.current}`} className={"hover:underline"}>
            <h6 className={"font-mono"}>{title}</h6>
        </Link>
        <div className={"flex justify-between"}>
            <DateIcon>{deadline ? <Date deadline={deadline} /> : <p>Løpende opptak</p>}</DateIcon>
            {image && <Thumbnail image={image} width={130} />}
        </div>
    </div>
)

const Date: Component<{ deadline: string }> = ({ deadline }) => {
    const date = toFormatDate(deadline)
    return (
        <div className={"flex flex-col sm:flex-row sm:gap-1"}>
            <p>Søknadsfrist:</p> <p>{date}</p>
        </div>
    )
}
