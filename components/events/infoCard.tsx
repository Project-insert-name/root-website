import Link from "next/link"
import { Button } from "@/components/button"

interface EventCardProps extends ChildProps {
    cardTitle: string
    showMoreUrl: string
}

const InfoCard: Component<EventCardProps> = ({ cardTitle, showMoreUrl, className, children }) => (
    <div className={`grid content-between rounded-2xl border bg-white p-2 shadow-lg ${className}`}>
        <div>
            <h2 className={"my-2 text-center text-darkTitle"}>{cardTitle}</h2>
            {children}
        </div>

        <Link href={showMoreUrl} className={"mx-auto"}>
            <Button>Vis mer</Button>
        </Link>
    </div>
)

export default InfoCard
