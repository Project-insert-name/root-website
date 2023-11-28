import { type ReactNode } from "react"

interface EventCardProps extends ChildProps {
    cardTitle: string
    bottom?: ReactNode
}

const InfoCard: Component<EventCardProps> = ({ cardTitle, className, children, bottom }) => (
    <div
        className={`grid content-between rounded-2xl border bg-white px-2 pb-2 shadow-lg sm:py-2 ${className}`}>
        <div>
            <h2 className={"my-1 text-center text-darkTitle sm:my-2"}>{cardTitle}</h2>
            {children}
        </div>

        {bottom}
    </div>
)

export default InfoCard
