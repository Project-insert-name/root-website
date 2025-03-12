"use client"

import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from "next-themes"
import { type ReactNode, useEffect } from "react"

/**
 * En komponent som inneholder alle providers som skal brukes i nettsiden.
 * HeroUIProvider er en provider som brukes av HeroUI for å style komponenter.
 * ThemeProvider er en provider som brukes av next-themes for light mode og dark mode.
 * @param children Innholdet som skal rendres i komponenten
 * @see https://nextui.org/docs/frameworks/nextjs
 */
export const Providers = ({ children }: { children: ReactNode }) => (
    <HeroUIProvider>
        <ThemeProvider attribute={"class"} enableSystem>
            {children}
        </ThemeProvider>
    </HeroUIProvider>
)
