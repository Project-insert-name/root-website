import SingleInfoCard from "@/components/events/singleInfoCard";
import {Suspense} from "react";
import {CircularProgressIndicator} from "@/components/suspense";
import {getAllInfoPages} from "@/sanity/queries/omOss";
import {InfoSide} from "@/sanity/types";
import SideMenu from "@/components/omOss/sideMenu";

interface InfoCardProps extends DefaultProps {
    emptyMessage?: string,
}

const OmCard: Component<InfoCardProps> = ({
    emptyMessage,
}) => (
    <Suspense fallback={<CircularProgressIndicator aria-label={"laster inn Om-oss side"} /> }>
        <InfoSiderData emptyMessage={emptyMessage}/>
    </Suspense>
)

export default OmCard

const InfoSiderData: AsyncComponent<{emptyMessage?: string}> = async ({ emptyMessage }) => {
    const infoSider = await getAllInfoPages()
    return <InfoSideContent infoSider={infoSider} emptyMessage={emptyMessage} />
}

export const InfoSideContent: Component<{
    infoSider: ReadonlyArray<InfoSide>
    emptyMessage?: string
}> = ({ infoSider, emptyMessage = "Finner ikke info"}) => (
    <>
        {infoSider.length > 0 ? (
            <div className={`flex flex-row`}>
                <div className={`w-1/5 h-full pr-1 sticky top-36`}>
                    <SideMenu
                        infoSider={infoSider}
                        emptyMessage={emptyMessage}
                    />
                </div>

                <div className={`pl-1 w-3/5`}>
                    {infoSider.map((side: InfoSide) =>
                        <div id={side._id} key={side._id} className={'scroll-mt-36'}>
                            <SingleInfoCard  image={side.info_image} description={side.info}/>
                        </div>
                    )}
                </div>
            </div>

        ): <p className={"text-center"}>{emptyMessage}</p> }
    </>
)


