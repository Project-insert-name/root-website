"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from "@nextui-org/button"
import { defaultIconSize } from "@/components/icons/icon"

const buttons = [
    { text: "System", theme: "system" },
    { text: "Lys modus", theme: "light", icon: <SunIcon width={defaultIconSize} /> },
    { text: "Mørk modus", theme: "dark", icon: <MoonIcon width={defaultIconSize} /> },
]

/**
 * En knapp som lar brukeren bytte mellom lys og mørk modus.
 * Vises kun ved client-side rendering, siden theme ikke er tilgjengelig på server-side.
 */
const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme: selectedTheme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <ButtonGroup>
            {buttons.map(({ text, theme, icon }) => (
                <Button
                    key={theme}
                    onClick={() => setTheme(theme)}
                    size="sm"
                    className={selectedTheme === theme ? "bg-root-primary text-white" : undefined}>
                    {icon}
                    {text}
                </Button>
            ))}
        </ButtonGroup>
    )
}

export default DarkModeToggle
