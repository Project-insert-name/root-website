"use client"

import { Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

/**
 * En knapp som lar brukeren bytte mellom lys og mørk modus.
 * Vises kun ved client-side rendering, siden theme ikke er tilgjengelig på server-side.
 */
const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    function handleToggle() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div>
            <Switch
                defaultSelected={theme === "light"}
                size="md"
                onValueChange={handleToggle}
                aria-label={"Bytte mellom lys og mørk modus"}
                title={"Bytte mellom lys og mørk modus"}
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon className={className} />
                    ) : (
                        <MoonIcon className={className} />
                    )
                }
            />
        </div>
    )
}

export default DarkModeToggle
