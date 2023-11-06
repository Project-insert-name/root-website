import { HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline"
import { type ReactNode } from "react"

const iconSize = 25

export interface Path {
    name: string
    path: string
    icon?: ReactNode
}

const paths: Path[] = [
    {
        name: "Hjem",
        path: "/",
        icon: <HomeIcon width={iconSize} />,
    },
    {
        name: "Galleri",
        path: "/galleri",
        icon: <PhotoIcon width={iconSize} />,
    },
    {
        name: "Om oss",
        path: "/om-oss",
        icon: <UsersIcon width={iconSize} />,
    },
]

export default paths
