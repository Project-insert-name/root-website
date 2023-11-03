import { HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"
import { JSX } from "react"

export interface Path {
    name: string
    path: string
    icon?: JSX.Element
}

const paths: Path[] = [
    {
        name: "Hjem",
        path: "/",
        icon: <HomeIcon width={defaultIconSize} />,
    },
    {
        name: "Galleri",
        path: "/galleri",
        icon: <PhotoIcon width={defaultIconSize} />,
    },
    {
        name: "Om oss",
        path: "/om-oss",
        icon: <UsersIcon width={defaultIconSize} />,
    },
]

export default paths
