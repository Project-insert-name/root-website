"use client"

import { NextUIProvider } from "@nextui-org/react"
import { type ReactNode } from "react"

/**
 * En komponent som inneholder alle providers som skal brukes i nettsiden.
 * NextUIProvider er en provider som brukes av NextUI for å style komponenter.
 * @param children Innholdet som skal rendres i komponenten
 * @see https://nextui.org/docs/frameworks/nextjs
 */
export function Providers({ children }: { children: ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>
}
