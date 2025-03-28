import { type ReactNode } from "react"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"

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
    <Card className={`sm:py-2 ${className}`} classNames={{ header: "p-0" }} {...props}>
        <CardHeader>
            <h2 className={"mx-auto mt-2 text-dark-title dark:text-white"}>{cardTitle}</h2>
        </CardHeader>
        <CardBody>{children}</CardBody>
        <CardFooter className={"flex justify-center"}>{bottom}</CardFooter>
    </Card>
)

export default InfoCard
