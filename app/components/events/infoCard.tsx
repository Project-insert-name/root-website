import Link from "next/link";

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
        <div className={ `border rounded-2xl shadow-lg p-2 ${ className }` }>
            <h2 className={"text-center my-2"}>{ eventTitle }</h2>

            { children }

            <div className={ "mx-auto w-fit border py-1 px-4 bg-rootBlue rounded-2xl text-white my-2 font-bold" }>
                <Link href={ showMoreUrl }>Vis mer</Link>
            </div>
        </div>
    )
}

export default InfoCard;
