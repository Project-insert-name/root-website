"use client"
import SingleInfoCard from "@/components/cards/singleInfoCard"
import type { InfoSide } from "@/sanity/types"
import SideNavigator from "@/components/omOss/sideNavigator"
import { useMemo } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import useToggle from "@/hooks/useToggle"
import { defaultIconSize } from "@/components/icons/icon"

/**
 * Representerer klient-siden av siden som viser informasjon om Root Linjeforeningen.
 * Innholder en liste med informasjonssider som kan navigeres mellom.
 * Samt en meny som kan brukes til å navigere mellom sidene.
 * @param infoSider En liste med informasjonssider som skal vises.
 * @param emptyMessage En melding som skal vises dersom det ikke finnes noen informasjonssider.
 */
export const InfoPageContent: Component<{
    infoSider: ReadonlyArray<InfoSide>
    emptyMessage?: string
}> = ({ infoSider, emptyMessage = "Finner ikke noe info" }) => {
    const [isMenuOpen, toggleMenu] = useToggle()
    const infoPages = useMemo(
        () => (
            <div>
                {infoSider.map((side: InfoSide) => (
                    <section id={side._id} key={side._id} className={"mb-16 scroll-mt-44"}>
                        <SingleInfoCard image={side.image} description={side.info} />
                    </section>
                ))}
            </div>
        ),
        [infoSider],
    )

    const navigator = useMemo(
        () => (
            <SideNavigator
                items={infoSider.map(infoSide => ({
                    anchor: infoSide._id,
                    title: infoSide.title,
                }))}
                emptyMessage={emptyMessage}
            />
        ),
        [infoSider, emptyMessage],
    )

    return (
        <div onClick={() => isMenuOpen && toggleMenu(false)}>
            {infoSider.length > 0 ? (
                <div className={`mt-24 flex justify-center`}>
                    <div className={`fixed left-0 z-50 hidden h-full w-fit pr-1 2xl:flex`}>
                        {navigator}
                    </div>
                    <div className={`fixed left-0 z-50 2xl:hidden`}>
                        <button
                            className={`h-fit w-fit divide-y rounded-r-2xl bg-white p-2 opacity-70`}
                            title={`${isMenuOpen ? "Lukk" : "Åpne"} meny`}
                            onClick={() => toggleMenu()}>
                            <ChevronRightIcon
                                width={defaultIconSize}
                                className={`transition-all duration-200 ${
                                    isMenuOpen && "rotate-180"
                                }`}
                            />
                        </button>
                        <div
                            className={`sticky h-full w-fit transition-all duration-200 ${
                                isMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}>
                            {navigator}
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
