import React from "react"
import SideMenu from "@/components/sideMenu";
import EventCard from "@/components/events/eventCard";

export default function OmOssPage() {
    return (
        <div className={`flex flex-row  mt-2`}>

            <div className={`pr-1`}>
                <SideMenu/>
            </div>

            <div className={`a`}>
                <EventCard showMoreUrl={"https://www.tv2.no"}/>
            </div>
        </div>
    )
}
