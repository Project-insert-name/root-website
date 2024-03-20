"use client"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"
import { type ReactNode } from "react"

/**
 * En komponent som inneholder alle providers som skal brukes i nettsiden.
 * NextUIProvider er en provider som brukes av NextUI for å style komponenter.
 * @param children Innholdet som skal rendres i komponenten
 * @see https://nextui.org/docs/frameworks/nextjs
 */
export const Providers = ({ children }: { children: ReactNode }) => (
    <NextUIProvider>
        <ThemeProvider attribute={"class"} defaultTheme={"light"}>
            {children}
        </ThemeProvider>
    </NextUIProvider>
)
