import SingleInfoCard from "@/components/events/singleInfoCard";
import {InfoSide} from "@/sanity/types";
import SideNavigator from "@/components/omOss/sideNavigator";

export const InfoPageContent: Component<{
    infoSider: ReadonlyArray<InfoSide>
    emptyMessage?: string
}> = ({ infoSider, emptyMessage = "Finner ikke noen info"}) => {
    return (
        <>
            {infoSider.length > 0 ? (
                <div className={`flex flex-row`}>
                    <div className={`w-1/5 h-full pr-1 sticky top-36`}>
                        <SideNavigator
                            infoSider={infoSider}
                            emptyMessage={emptyMessage}
                        />
                    </div>

                    <div className={`pl-1 w-3/5`}>
                        {infoSider.map((side: InfoSide) =>
                            <section id={side._id} key={side._id} className={'scroll-mt-36'}>
                                <SingleInfoCard image={side.image} description={side.info} />
                            </section>
                        )}
                    </div>
                </div>

            ) : <p className={"text-center"}>{emptyMessage}</p>}
        </>
    )
}

export default InfoPageContent

