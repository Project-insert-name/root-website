"use client"

import { NextUIProvider } from "@nextui-org/react"
import { type ReactNode } from "react"

/**
 *
 * @param children
 * @see https://nextui.org/docs/frameworks/nextjs
 */
export function Providers({ children }: { children: ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>
}
