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
 * En liste over alle lenkene i header, som alltid vises.
 */
const paths: Path[] = [
    {
        name: "Hjem",
        path: "/",
    },
    {
        name: "For studenter",
        path: "/studenter",
        subpaths: [
            {
                "name": "Arrangementer",
                "path": "/arrangement",
                "description": "Arrangementer hos Root"
            },
            {
                "name": "Galleri",
                "path": "/galleri",
                "description": "Galleri hos Root"
            },
            {
                "name": "Soundboks utleie",
                "path": "/soundboks-utleie",
                "description": "Utleie av soundboks"
            },
        ]
    },
    {
        name: "For bedrifter",
        path: "/bedrifter",
    },
    {
        name: "Om oss",
        path: "/om-oss",
        subpaths: [
            {
                "name": "Om Root",
                "path": "/om-root",
                "description": "Om Root Linjeforening"
            },
            {
                "name": "Styret",
                "path": "/styret",
                "description": "Styret til Root"
            },
        ]
    },
]

export default paths
