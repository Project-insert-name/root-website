import { type ReactNode } from "react"

interface EventCardProps extends ChildProps {
    cardTitle: string
    bottom?: ReactNode
}

/**
 * En generell info-kort komponent som brukes til å vise arrangementer, stillingsannonser og innlegg.
 * Har en tittel, innhold og en komponent som vises nederst.
 * @param cardTitle Tittelen på kortet
 * @param className CSS klassenavn
 * @param children Innholdet på kortet
 * @param bottom Komponenten som vises nederst på kortet
 * @param props Andre props som kan brukes til å endre på komponenten
 */
const InfoCard: Component<EventCardProps> = ({
    cardTitle,
    className,
    children,
    bottom,
    ...props
}) => (
    <div
        className={`grid content-between rounded-2xl border bg-white px-2 pb-2 shadow-lg sm:py-2 ${className}`}
        {...props}>
        <div>
            <h2 className={"my-1 text-center text-dark-title sm:my-2"}>{cardTitle}</h2>
            <div>{children}</div>
        </div>

        <div>{bottom}</div>
    </div>
)

export default InfoCard
