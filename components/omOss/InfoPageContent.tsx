"use client"
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
        return (
            <div className={`w-fit items-center justify-center justify-self-center`}>
                {infoSider.map((side: InfoSide) => (
                    <section id={side._id} key={side._id} className={"mb-16 scroll-mt-44"}>
                        <SingleInfoCard image={side.image} description={side.info} />
                    </section>
                ))}
            </div>
        )
    }, [infoSider])

    return (
        <div
            onClick={() => {
                if (menuOpen) setMenuOpen(false)
            }}>
            {infoSider.length > 0 ? (
                <div className={`mt-24 flex justify-center`}>
                    <div className={`fixed left-0 z-50 hidden h-full w-fit pr-1 2xl:flex`}>
                        <SideNavigator infoSider={infoSider} emptyMessage={emptyMessage} />
                    </div>
                    <div className={`fixed left-0 z-50 2xl:hidden`}>
                        <div className={`felx felx-row left-0`}>
                            <button
                                className={`h-fit w-fit divide-y rounded-r-2xl bg-white p-2 opacity-70`}
                                onClick={() => {
                                    setMenuOpen(!menuOpen)
                                }}>
                                <ChevronRightIcon
                                    width={"25"}
                                    className={`${menuOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div className={`sticky h-full w-fit     ${menuOpen ? "" : "hidden"}`}>
                                <SideNavigator infoSider={infoSider} emptyMessage={emptyMessage} />
                            </div>
                        </div>
                    </div>
                    {infoPages}
                </div>
            ) : (
                <p className={"text-center"}>{emptyMessage}</p>
            )}
        </div>
    )
}

export default InfoPageContent
