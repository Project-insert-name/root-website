import { FilmIcon, HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"
import { type ReactNode } from "react"

export interface Path {
    name: string
    path: string
    icon?: ReactNode
}

const devPaths =
    process.env.NODE_ENV === "development"
        ? [{ name: "Studio", path: "/studio", icon: <FilmIcon width={defaultIconSize} /> }]
        : []

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
        path: "/om-oss/om-root",
        icon: <UsersIcon width={defaultIconSize} />,
    },
    // Viser studio lenken bare i development
    ...devPaths,
]

export default paths
