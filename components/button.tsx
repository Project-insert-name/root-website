import { ExternalLink } from "@/components/link"
import { LinkIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"

/**
 * En stylet knapp i rootBlue farge og hvit tekst.
 * @param children Innholdet i knappen
 * @param className CSS-klassen til knappen
 * @param props Props som skal sendes til button-elementet, blant annet onClick, disabled, etc.
 */
export const Button: Component<ButtonProps> = ({ children, className, ...props }) => (
    <button
        className={`min-w-[100px] rounded-2xl bg-rootBlue p-3 text-white ${className}`}
        {...props}>
        {children}
    </button>
)

/**
 * En stylet knapp i rootBlue farge og hvit tekst som åpner en ekstern lenke.
 * @param href Lenken som skal åpnes
 * @param children Innholdet i knappen
 * @param className CSS-klassen til knappen
 * @param iconWidth Bredde på lenke-ikonet
 */
export const ExternalLinkButton: Component<{ href?: string; iconWidth?: number } & ChildProps> = ({
    href,
    children,
    className,
    iconWidth,
}) => (
    <ExternalLink href={href}>
        <Button className={`flex items-center justify-center gap-2 ${className}`}>
            <LinkIcon width={iconWidth || defaultIconSize} />
            {children}
        </Button>
    </ExternalLink>
)
