import InfoCard from "@/app/components/events/infoCard";
import { Event } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps extends DefaultProps {
    eventTitle?: string,
    events: ReadonlyArray<Event>,
    showMoreUrl: string,
    emptyMessage?: string
}

// TODO tilpass typer fra Sanity
// TODO ikoner fra et ikonbibliotek
// TODO maks grense på antall events som vises

const EventCard: Component<EventCardProps> = (
    {
        eventTitle = "Arrangementer",
        events,
        emptyMessage,
        showMoreUrl,
        className,
    }) => (
    <InfoCard eventTitle={ eventTitle }
              showMoreUrl={ showMoreUrl }
              className={ className }>
        {
            events.length > 0 ?
                events.map((event, index) =>
                    <div key={ event._id }>
                        { index !== 0 && <Line /> }
                        <SingleEvent { ...event } />
                    </div>
                )
                : <p>{ emptyMessage }</p>
        }
    </InfoCard>
)

export default EventCard;

const SingleEvent: Component<Event> = (
    {
        type, title, date, address, time, thumbnail
    }) => {

    function getTypeColour() {
        switch (type) {
            case "bedriftspresentasjon":
                return "bg-yellow-400"
            case "sosialt":
                return "bg-blue-400"
            case "workshop":
                return "bg-pink-400"
        }
    }

    return (
        <div className={ "flex gap-4 justify-between mx-2 my-5" }>
            <div className={ "flex" }>
                <div className={ `w-2 h-full rounded-xl mr-2 ${ getTypeColour() }` } />
                <div>
                    <Link href={ "/" } className={ "hover:underline" }>
                        <h6>{ title }</h6>
                    </Link>
                    <div className={ "flex gap-2 text-gray-500" }>
                        <p>{ date }</p>
                        <p>{ time }</p>
                        <p>{ address }</p>
                    </div>
                </div>
            </div>

            <Image src={ thumbnail } alt={ "Something" } width={ 125 } height={ 75 } />
        </div>
    )
}

const Line: Component = () => (
    <div className={ "border-b w-3/4 mx-auto" } />
)
