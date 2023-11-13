import React from "react"
import SideMenu from "@/components/sideMenu";
import EventCard from "@/components/events/eventCard";

export default function OmOssPage() {
    return (
        <div className={`flex flex-row mt-2`}>

            <div className={`w-1/5 pr-1`}>
                <SideMenu SelectedSlug={window.location.pathname.split('/').pop()} /> //TODO hmm.. hvordan får denne til  p fb
            </div>

            <div className={`pl-1 w-3/5 `}>
                {/*TODO lage komponet til å vise innhold*/}
                <EventCard showMoreUrl={"https://www.tv2.no"}/>
            </div>
        </div>
    )
}
