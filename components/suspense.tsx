"use client"
import { CircularProgress } from "@nextui-org/react"

/**
 * En sirkulær progress bar som roterer.
 * Kan brukes for å indikere at noe skjer.
 */
export const CircularProgressIndicator: Component = () => (
    <div className={"flex h-full items-center justify-center"}>
        <CircularProgress />
    </div>
)
