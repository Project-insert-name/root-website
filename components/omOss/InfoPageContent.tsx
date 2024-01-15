"use client";
import SingleInfoCard from "@/components/events/singleInfoCard"
import { InfoSide } from "@/sanity/types"
import SideNavigator from "@/components/omOss/sideNavigator"
import { useMemo, useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

export const InfoPageContent: Component<{
    infoSider: ReadonlyArray<InfoSide>
    emptyMessage?: string
}> = ({ infoSider, emptyMessage = "Finner ikke noen info" }) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const infoPages = useMemo(() => {
       return <div className={`justify-center justify-self-center items-center w-fit`}>
            {infoSider.map((side: InfoSide) =>
                <section id={side._id} key={side._id} className={"scroll-mt-44 mb-16"}>
                    <SingleInfoCard image={side.image} description={side.info} />
                </section>
            )}
        </div>
    }, [infoSider])

    return (
        <>
            {infoSider.length > 0 ? (
                <div className={`flex justify-center mt-24`}>
                    <div className={`hidden fixed left-0 2xl:flex w-fit h-full pr-1 z-50`}>
                        <SideNavigator
                            infoSider={infoSider}
                            emptyMessage={emptyMessage}
                        />
                    </div>
                    <div className={`fixed left-0 2xl:hidden z-50`}>
                        <div className={`felx felx-row left-0`}>
                            <button
                                className={`opacity-70 divide-y h-fit w-fit rounded-r-2xl bg-white p-2`}
                                onClick={() => {
                                    setMenuOpen(!menuOpen)
                                }}>
                                <ChevronRightIcon width={"25"} className={`${menuOpen? "rotate-180" : ""}`}/>
                            </button>
                            <div className={`w-fit h-full sticky     ${menuOpen ? "" : "hidden"}`}>
                                <SideNavigator
                                    infoSider={infoSider}
                                    emptyMessage={emptyMessage}
                                />
                            </div>
                        </div>
                    </div>
                    {infoPages}
                </div>

            ) : <p className={"text-center"}>{emptyMessage}</p>}
        </>
    )
}

export default InfoPageContent

