import {InfoSider} from "@/sanity/types";
import {getAllInfoPages} from "@/sanity/queries/omOss";

const SideMenu: Component<SideMenuProps> = ({
    selectedSlug,
    className,
}) => (
    <SideMenuData emptyMessage={"tomt"} selectedSlug={selectedSlug} />
)

const SideMenuData:AsyncComponent<{emptyMessage: string, selectedSlug: string}> = async ({emptyMessage, selectedSlug}) => {
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
        {listItems}
    </div>
)
}
export default SideMenu
