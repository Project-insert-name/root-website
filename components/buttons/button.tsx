"use client"
import { Button as _Button, Link } from "@heroui/react"
import { LinkIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"

const buttonClassNames = "min-w-[100px] bg-root-primary p-3 text-white"

/**
 * En stylet knapp i rootBlue farge og hvit tekst.
 * @param children Innholdet i knappen
 * @param className CSS-klassen til knappen
 * @param props Props som skal sendes til button-elementet, blant annet onClick, disabled, etc.
 */
export const Button: Component<ButtonProps> = ({ children, className, ...props }) => (
    <_Button radius={"lg"} className={`${buttonClassNames} ${className}`} {...props}>
        {children}
    </_Button>
)

/**
 * En stylet knapp i rootBlue farge og hvit tekst som åpner en intern lenke.
 * @param href Lenken som skal åpnes
 * @param children Innholdet i knappen
 * @param className CSS-klassen til knappen
 * @param props Props som skal sendes til button-elementet, blant annet onClick, disabled, etc.
 */
export const LinkButton: Component<{ href?: string } & ChildProps> = ({
    children,
    className,
    ...props
}) => (
    <_Button
        as={Link}
        radius={"lg"}
        className={`flex-center !text-white hover:text-white ${buttonClassNames} ${className}`}
        {...props}>
        {children}
    </_Button>
)

/**
 * En stylet knapp i rootBlue farge og hvit tekst som åpner en ekstern lenke.
 * @param href Lenken som skal åpnes
 * @param children Innholdet i knappen
 * @param className CSS-klassen til knappen
 * @param iconWidth Bredde på lenke-ikonet
 * @param props Props som skal sendes til button-elementet, blant annet onClick, disabled, etc.
 */
export const ExternalLinkButton: Component<{ href?: string; iconWidth?: number } & ChildProps> = ({
    children,
    className,
    iconWidth,
    ...props
}) => (
    <_Button
        as={Link}
        radius={"lg"}
        className={`flex-center gap-2 hover:text-white dark:text-white ${buttonClassNames} ${className}`}
        isExternal
        showAnchorIcon
        anchorIcon={<LinkIcon width={iconWidth || defaultIconSize} />}
        {...props}>
        {children}
    </_Button>
)
