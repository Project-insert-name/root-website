import { Button } from "@/components/button"
import { LinkIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"

/**
 * En lenke til en ekstern nettside.
 * Nettsiden åpnes i et nytt vindu (target: _blank) uten tilgang til å endre foregående vindu (rel: noopener noreferrer).
 * @param href Lenken til nettsiden, må starte med https:// eller http://
 * @param children Innholdet i lenken, vil typisk være en tekst
 * @param className CSS-klassen til lenken
 * @param props Andre props som skal sendes til lenken
 */
export const ExternalLink: Component<{ href?: string } & ChildProps> = ({
    href,
    children,
    className,
    ...props
}) => (
    <a href={href} rel={"noopener noreferrer"} className={className} target={"_blank"} {...props}>
        {children}
    </a>
)

/**
 * En lenke til en e-postadresse. Kan åpnes i standard e-postklient.
 * @param mail E-postadressen
 * @param children Innholdet i lenken, vil typisk være en tekst. Dersom denne ikke er satt, vil e-postadressen vises.
 * @param props Andre props som skal sendes til lenken
 */
export const MailLink: Component<{ mail?: string } & ChildProps> = ({
    mail,
    children,
    ...props
}) => (
    <ExternalLink href={`mailto:${mail}`} {...props}>
        {children ? children : mail}
    </ExternalLink>
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
