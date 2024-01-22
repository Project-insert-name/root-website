import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getAllInfoPages } from "@/sanity/queries/omOss"
import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "Om oss | Root Linjeforening",
    description: "Informasjon om Root Linjeforening",
}

const emptyMessage = "Finner ikke noe info"

export const dynamic = "force-dynamic"

const OmOssPage: AsyncPage = async () => {
    const infoSider = await getAllInfoPages()
    return (
        <>
            <InfoPageContent infoSider={infoSider} emptyMessage={emptyMessage} />
        </>
    )
}

export default OmOssPage
