import Link from "next/link"
import { Button } from "@/components/button"

interface EventCardProps extends ChildProps {
    cardTitle: string
    showMoreUrl: string
}

const InfoCard: Component<EventCardProps> = ({ cardTitle, showMoreUrl, className, children }) => (
    <div className={`grid content-between rounded-2xl border bg-white p-2 shadow-lg ${className}`}>
        <div>
            <h2 className={"text-darkTitle my-2 text-center"}>{cardTitle}</h2>
            {children}
        </div>

        <Link href={showMoreUrl} className={"mx-auto"}>
            <Button>Vis mer</Button>
        </Link>
    </div>
)

export default InfoCard

export const Divider: Component = () => <div className={"mx-auto w-3/4 border-b"} />
