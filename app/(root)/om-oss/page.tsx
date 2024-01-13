import InfoPageContent from "@/components/omOss/InfoPageContent";
import { CircularProgressIndicator } from "@/components/suspense"
import { Suspense } from "react"
import { getAllInfoPages } from "@/sanity/queries/omOss"

export const dynamic = "force-dynamic" //TODO Må den være her

const emptyMessage = "Finner ikke noe info"

const OmOssPage: AsyncComponent = async () => {
    const infoSider = await getAllInfoPages()
    return (
        <>
        <Suspense fallback={<CircularProgressIndicator aria-label={"laster inn Om-oss side"} /> }>
            <InfoPageContent infoSider={infoSider} emptyMessage={emptyMessage}/>
        </Suspense>
        </>
    )
}

export default OmOssPage