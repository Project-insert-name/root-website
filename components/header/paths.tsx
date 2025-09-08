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
    description?: string
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
        name: "For bedrifter",
        path: "/bedrifter",
        subpaths: [
            {
                "name": "Bedriftspresentasjoner",
                "path": "/bedrifter/bedriftspresentasjon",
                "description": "Bedriftspresentasjoner hos Root"
            },
            {
                "name": "Workshops",
                "path": "/bedrifter/workshops",
                "description": "Workshops hos Root"
            },
            
        ]
    },
        {
        name: "For studenter",
        path: "/studenter",
        subpaths: [
            {
                "name": "Arrangement",
                "path": "/arrangement",
                "description": "Arrangementer hos Root"
            },
            {
                "name": "Galleri",
                "path": "/galleri",
                "description": "Galleri hos Root"
            },
            {
                "name": "Styret",
                "path": "/styret",
                "description": "Styret til Root"
            },
        ]
    },

    ...devPaths,
]

export default paths
