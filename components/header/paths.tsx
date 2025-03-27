import {
    CalendarDaysIcon,
    FilmIcon,
    HomeIcon,
    PhotoIcon,
    UsersIcon,
} from "@heroicons/react/24/outline"
import { type ReactNode } from "react"

const iconSize = 25

export interface Path {
    name: string
    path: string
    icon?: ReactNode
    subpaths?: Path[]
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
    },
    {
        name: "Arrangementer",
        path: "/arrangement",
    },
    {
        name: "Galleri",
        path: "/galleri",
    },
    {
        name: "For bedrifter",
        path: "/bedrifter",
        subpaths: [
            {
                "name": "Bedriftspresentasjoner",
                "path": "/bedrifter/bedriftspresentasjon"
            },
            {
                "name": "Workshops",
                "path": "/bedrifter/workshops"
            },
        ]
    },
    ...devPaths,
]

export default paths
