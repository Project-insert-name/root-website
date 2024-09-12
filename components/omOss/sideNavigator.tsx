import Link from "next/link"

interface SideNavigatorProps extends DefaultProps {
    items: Array<{ anchor?: string; title: string }>
    emptyMessage?: string
    className?: string
}

/**
 * Komponent som representerer en meny som kan brukes til å navigere mellom headerene på en side.
 * @param items En liste med anchor og tittel for hver header. Dersom anchor ikke er satt vil tittelen bli brukt. Anchor må være unik.
 * @param emptyMessage En melding som skal vises dersom det ikke finnes noen items.
 * @param className CSS-klasser for komponenten.
 */
const SideNavigator: Component<SideNavigatorProps> = ({ items, emptyMessage, className }) => {
    const listItems = items.map(item => {
        const anchor = item.anchor ?? item.title
        return (
            <Link key={anchor} className={"p-2 text-start text-2xl"} href={`om-oss#${anchor}`}>
                {item.title}
            </Link>
        )
    })
    return (
        <div
            className={`flex h-fit w-full max-w-xs flex-col divide-y rounded-r-2xl bg-white p-2 pl-1 shadow-lg dark:bg-default-dark-background ${className}`}>
            {listItems.length > 0 ? listItems : emptyMessage}
        </div>
    )
}

export default SideNavigator
