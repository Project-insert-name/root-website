
interface MenuItem {
    title: string,
    slug: string
}

interface SideMenu extends DefaultProps {
    menuItems?: Array<MenuItem>
}

const SideMenu: Component<SideMenu> = ({
    menuItems = [
        {title: "Om Root", slug:"kommer"},
        {title: "Styret", slug:"kommer"},
        {title: "PIN kodegruppe", slug:"kommer"}

    ]
}) => {
    const listItems = menuItems.map(item => <div className={` text-center text-xl p-2 `}>{item.title}</div>)

    return (
        <div className={`flex flex-col-reverse divide-y divide-y-reverse  h-fit w-fit rounded-r-2xl border bg-white p-2 shadow-lg`}>
            {listItems}
        </div>
    )
}
export default SideMenu
