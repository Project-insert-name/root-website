import { type ReactNode } from "react"

interface EventCardProps extends ChildProps {
    cardTitle: string
    bottom?: ReactNode
}

const InfoCard: Component<EventCardProps> = ({ cardTitle, className, children, bottom }) => (
    <div className={`grid content-between rounded-2xl border bg-white p-2 shadow-lg ${className}`}>
        <div>
            <h2 className={"my-2 text-center text-darkTitle"}>{cardTitle}</h2>
            {children}
        </div>

        {bottom}
    </div>
)

export default InfoCard
