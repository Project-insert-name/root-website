import { ExternalLink, MailLink } from "@/components/link"
import { Facebook, GitHub, Instagram, LinkedIn, Discord } from "@/components/icons/socials"
import { Divider } from "@/components/divider"
import { bigIconSize, defaultIconSize, FlexIcon } from "@/components/icons/icon"
import { BugAntIcon, ChatBubbleLeftEllipsisIcon, LinkIcon } from "@heroicons/react/24/outline"
import { type ReactNode } from "react"

/**
 * Footeren som vises på bunnen av nettsiden.
 * @param className - CSS klassenavn som skal legges til.
 * @param props - Props som skal sendes til <footer> taggen.
 */
const Footer: Component = ({ className, ...props }) => (
    <footer className={`flex min-h-[100px] w-full flex-col ${className}`} {...props}>
        <Divider className={"mt-5"} />
        <div
            className={
                "m-2 flex flex-col-reverse justify-center gap-3 sm:flex-row sm:justify-around"
            }>
            <FooterSection
                titleNode={
                    <FlexIcon icon={<ChatBubbleLeftEllipsisIcon width={defaultIconSize} />}>
                        <h4>Kontakt oss</h4>
                    </FlexIcon>
                }>
                <MailLink mail={process.env.NEXT_PUBLIC_EMAIL} />
                <Socials className={"transition-all duration-100 hover:brightness-75"} />
            </FooterSection>
            <FooterSection
                titleNode={
                    <FlexIcon icon={<LinkIcon width={defaultIconSize} />}>
                        <h4>Lenker</h4>
                    </FlexIcon>
                }
                className={"sm:items-end"}>
                <ExternalLink href={"/studio"}>Sanity Studio</ExternalLink>
                <ExternalLink
                    href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/issues`}
                    className={"w-min"}>
                    <FlexIcon
                        icon={<BugAntIcon width={defaultIconSize} />}
                        className={"text-inherit"}>
                        Tilbakemeldinger
                    </FlexIcon>
                </ExternalLink>
            </FooterSection>
        </div>
    </footer>
)

export default Footer

interface FooterSectionProps extends ChildProps {
    titleNode: ReactNode
}

const FooterSection: Component<FooterSectionProps> = ({ titleNode, children, className }) => (
    <section
        className={`mx-auto flex w-fit min-w-[200px] flex-col items-center sm:items-start ${className}`}>
        <h4>{titleNode}</h4>
        {children}
    </section>
)

const Socials: Component = ({ className }) => (
    <div className={"my-3 flex gap-5"}>
        <ExternalLink
            title={"Facebook"}
            className={className}
            href={"https://www.facebook.com/RootLinjeforening"}>
            <Facebook width={bigIconSize} />
        </ExternalLink>

        <ExternalLink
            title={"Instagram"}
            className={className}
            href={"https://www.instagram.com/linjeforeningenroot/"}>
            <Instagram width={bigIconSize} />
        </ExternalLink>

        <ExternalLink
            title={"Discord"}
            className={className}
            href={"https://discord.gg/RVkj2Xyt92"}>
            <Discord width={bigIconSize} />
        </ExternalLink>

        <ExternalLink
            title={"LinkedIn"}
            className={className}
            href={"https://www.linkedin.com/company/root-linjeforening"}>
            <LinkedIn width={bigIconSize} />
        </ExternalLink>

        <ExternalLink
            title={"GitHub"}
            className={`${className} dark:fill-white`}
            href={process.env.NEXT_PUBLIC_GITHUB_URL}>
            <GitHub width={bigIconSize} />
        </ExternalLink>
    </div>
)
