import { HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline"
import { type ReactNode } from "react"

const defaultIconSize = 30

export interface Path {
    name: string
    path: string
    icon?: ReactNode
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
