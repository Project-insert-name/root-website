import InfoCard, { Divider } from "@/components/events/infoCard";
import type { Ad } from "@/app/page";
import Link from "next/link";
import Image from "next/image";

interface AdsCardProps extends DefaultProps {
    cardTitle?: string,
    ads: ReadonlyArray<Ad>,
    showMoreUrl: string,
    emptyMessage?: string,
    maxAds?: number,
}

const AdsCard: Component<AdsCardProps> = (
    {
        cardTitle = "Stillingsannonser",
        ads,
        emptyMessage = "Ingen stillingsannonser",
        showMoreUrl,
        maxAds = 4,
        className
    }
) => (
    <InfoCard cardTitle={ cardTitle }
              showMoreUrl={ showMoreUrl } className={ className }>
        {
            ads.length > 0 ?
                ads.slice(0, maxAds).map((ad, index) =>
                    <div key={ ad._id }>
                        { index !== 0 && <Divider /> }
                        <SingleAd { ...ad } />
                    </div>
                )
                : <p className={ "text-center" }>{ emptyMessage }</p>
        }
    </InfoCard>
)

export default AdsCard;

const SingleAd: Component<Ad> = (
    {
        title, dueDate, thumbnail
    }) => (
    <div className={ "flex gap-4 justify-between mx-2 my-5" }>
        <div className={ "flex" }>
            <div>
                <Link href={ "/" } className={ "hover:underline" }>
                    <h6>{ title }</h6>
                </Link>
                <div className={ "flex sm:flex-row flex-col gap-2 text-gray-500" }>
                    <p>Søknadsfrist { dueDate }</p>
                </div>
            </div>
        </div>

        <Image src={ thumbnail } alt={ "Something" } width={ 125 } height={ 75 } />
    </div>
)
