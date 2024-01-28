"use client"
import { CircularProgress } from "@nextui-org/react"

/**
 * En sirkulær progress bar som roterer.
 * Kan brukes for å indikere at noe skjer.
 * @param className CSS-klassenavn som skal brukes på komponenten
 * @param props Andre props som skal brukes på komponenten
 */
export const CircularProgressIndicator: Component = ({ className, ...props }) => (
    <div className={`flex-center h-full ${className}`} {...props}>
        <CircularProgress aria-label={props["aria-label"]} />
    </div>
)
