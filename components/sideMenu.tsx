interface MenuItem {
    title: string,
    slug: string
}

interface SideMenu extends DefaultProps {
    menuItems?: Array<MenuItem>
    selectedItem?: MenuItem
}

const SideMenu: Component<SideMenu> = ({
                                           menuItems = [
                                               {title: "Om Root", slug: "kommer"},
                                               {title: "Styret", slug: "kommer"},
                                               {title: "PIN kodegruppe", slug: "kommer"}

                                           ],
                                           selectedItem = menuItems[0]
                                       }) => {

    const listItems = menuItems.map(item =>
        <div className={` text-start text-2xl p-2 hover:text-rootBlue `} >
            {item === selectedItem? <div className={`text-rootBlue`}>{item.title}</div>:
                item.title
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
