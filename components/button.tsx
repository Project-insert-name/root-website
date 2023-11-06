"use client"
import { Button as _Button } from "@nextui-org/react"

/**
 * En stylet knapp i rootBlue farge og hvit tekst.
 * @param children Innholdet i knappen
 * @param className CSS-klassen til knappen
 * @param props Props som skal sendes til button-elementet, blant annet onClick, disabled, etc.
 */
export const Button: Component<ButtonProps> = ({ children, className, ...props }) => (
    <_Button
        className={`min-w-[100px] rounded-2xl bg-rootBlue p-3 text-white ${className}`}
        {...props}>
        {children}
    </_Button>
)
