import InfoCard from "@/components/events/infoCard"
import Link from "next/link"
import { getNextJobAdverts } from "@/sanity/queries/jobAdvert"
import type { JobAdvert } from "@/sanity/types"
import SanityImage from "@/components/sanityImage"
import { toFormatDate } from "@/utils/dateUtils"
import { DateIcon } from "@/components/icons/icon"
import { Suspense } from "react"
import { Divider } from "@/components/divider"
import { CircularProgressIndicator } from "@/components/suspense"

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
                        <SingleAd {...ad} />
                    </div>
                ))
            ) : (
                <p className={"text-center"}>{emptyMessage}</p>
            )}
        </>
    )
}

const SingleAd: Component<JobAdvert> = ({ title, deadline, image, slug }) => (
    <div className={"mx-2 my-5 flex justify-between gap-3"}>
        <div>
            <Link href={`stilling/${slug.current}`} className={"hover:underline"}>
                <h6 className={"font-mono"}>{title}</h6>
            </Link>

            <DateIcon>{deadline ? <Date deadline={deadline} /> : <p>Løpende opptak</p>}</DateIcon>
        </div>

        {image && <SanityImage image={image} alt={image.alt} width={125} height={75} />}
    </div>
)

const Date: Component<{ deadline: string }> = ({ deadline }) => {
    const date = toFormatDate(deadline)
    return <span className={"flex flex-col gap-2 sm:flex-row"}>Søknadsfrist {date}</span>
}
