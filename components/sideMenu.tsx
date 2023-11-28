import {InfoSider} from "@/sanity/types";
import {getAllInfoPages} from "@/sanity/queries/omOss";
import {Suspense} from "react";

const SideMenu: Component<SideMenuProps> = ({
    selectedItem,
    className,
}) => (
    <Suspense fallback={"Laster inn"}>
        <SideMenuData emptyMessage={"Fant ikke innhold"} selectedItem={selectedItem} />
    </Suspense>
)

const SideMenuData:AsyncComponent<{emptyMessage: string, selectedItem: string}> = async ({emptyMessage, selectedSlug}) => {
    const menuItems = await getAllInfoPages()
    const listItems = menuItems.map(item =>
        <div className={` text-start text-2xl p-2 hover:text-rootBlue `} >
            {item.info_slug.current === selectedSlug? <div className={`text-rootBlue`}>{item.info_title}</div>:
                item.info_title
            }
        </div>
    )

return (
    <div
        className={`flex flex-col divide-y pl-1 h-fit max-w-xxs w-full rounded-r-2xl border bg-white p-2 shadow-lg`}>
        {listItems.length > 0 ? listItems : emptyMessage}
    </div>
)
}
export default SideMenu
