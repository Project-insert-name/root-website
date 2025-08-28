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
                "name": "Studenter1",
                "path": "/studenter/studenter1",
                "description": "Studenter1 hos Root"
            },
            {
                "name": "Studenter2",
                "path": "/studenter/studenter2",
                "description": "Studenter2 hos Root"
            },
            
        ]
    },
        {
        name: "Styret",
        path: "/styret",
        subpaths: [
            {
                "name": "Medlem1",
                "path": "/styret/medlem1",
                "description": "medlem1 hos Root"
            },
            {
                "name": "Medlem2",
                "path": "/styret/medlem2",
                "description": "medlem2 hos Root"
            },

        ]
    },

    ...devPaths,
]

export default paths
