"use client"
import SingleInfoCard from "@/components/cards/singleInfoCard"
import type { InfoSide } from "@/sanity/types"
import SideNavigator from "@/components/omOss/sideNavigator"
import { useMemo } from "react"
import useToggle from "@/hooks/useToggle"
import FloatingMenu from "@/components/floatingMenu"

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
                        <SingleInfoCard image={side.image} descriptionBlock={side.info_block} />
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
                    <FloatingMenu>{navigator}</FloatingMenu>
                    {infoPages}
                </div>
            ) : (
                <p className={"text-center"}>{emptyMessage}</p>
            )}
        </div>
    )
}

export default InfoPageContent
