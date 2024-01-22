import InfoPageContent from "@/components/omOss/InfoPageContent"
import { getAllInfoPages } from "@/sanity/queries/omOss"

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
