import { getAllEvents } from "@/sanity/queries";
import { urlFor } from "@/sanity/utils";

export default async function SanityTest() { // Test page to see if Sanity is working
    const events = await getAllEvents();
    return (
        <div className={ "w-max mx-auto" }>
            <h1>Sanity Test</h1>
            <ul>
                { events.map(event => (
                    <>
                        <li key={ event._id }>{ event.event_title }</li>
                        <li>{ event.event_start_time }</li>
                        <li>{ event.te }</li>
                        <img src={urlFor(event.event_image).width(500).url()} alt={"Image"}/>
                    </>
                )) }
            </ul>
        </div>
    );
}