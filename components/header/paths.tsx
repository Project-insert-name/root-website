import { FilmIcon, HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline"
import { type ReactNode } from "react"

const iconSize = 25

export interface Path {
    name: string
    path: string
    icon?: ReactNode
}

/**
 * En liste over alle lenkene i header som vises kun i development-modus.
 */
const devPaths =
    process.env.NODE_ENV === "development"
        ? [{ name: "Studio", path: "/studio", icon: <FilmIcon width={iconSize} /> }]
        : []

/**
 * En liste over alle lenkene i header, som alltid vises.
 */
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
    ...devPaths,
]

export default paths
