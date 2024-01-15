import { InfoSide } from "@/sanity/types"
import Link from "next/link"

//TODO rewrite to not be type specific

interface SideNavigatorProps extends DefaultProps {
    selectedItem?: string
    infoSider: ReadonlyArray<InfoSide>
    emptyMessage?: string
    className?: string
}

const SideNavigator: Component<SideNavigatorProps> = ({
    selectedItem,
    infoSider,
    emptyMessage,
    className,
}) => {
    const listItems = infoSider.map(infoPage => (
        <Link
            key={infoPage._id}
            className={`p-2 text-start text-2xl hover:text-rootBlueDark`}
            href={`om-oss#${infoPage._id}`}>
            {infoPage.title === selectedItem ? (
                <div className={`text-rootBlue`}>{infoPage.title}</div>
            ) : (
                infoPage.title
            )}
        </Link>
    ))
    return (
        <div
            className={`max-w-xxs flex h-fit w-full flex-col divide-y rounded-r-2xl bg-white p-2 pl-1 shadow-lg ${className}`}>
            {listItems.length > 0 ? listItems : emptyMessage}
        </div>
    )
}

export default SideNavigator
