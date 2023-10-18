import Link from "next/link";
import { Button } from "@/components/button";

interface EventCardProps extends ChildProps {
    eventTitle: string,
    showMoreUrl: string,
}

const InfoCard: Component<EventCardProps> = (
    {
        eventTitle,
        showMoreUrl,
        className,
        children
    }) => {
    return (
        <div className={ `border rounded-2xl shadow-lg p-2 grid content-between ${ className }` }>
            <div>
                <h2 className={ "text-center my-2" }>{ eventTitle }</h2>
                { children }
            </div>

            <Link href={ showMoreUrl } className={ "mx-auto" }>
                <Button>Vis mer</Button>
            </Link>
        </div>
    )
}

export default InfoCard;

export const Divider: Component = () => (
    <div className={ "border-b w-3/4 mx-auto" } />
)
