import { ExternalLink, MailLink } from "@/components/link"
import { Facebook, GitHub, Instagram, LinkedIn } from "@/components/icons/socials"
import { Divider } from "@/components/divider"
import { bigIconSize } from "@/components/icons/icon"

const linkClasses = "motion-safe:hover:animate-bounce"

const Footer: Component = ({ className, ...props }) => (
    <footer className={`absolute bottom-0 min-h-[100px] w-full ${className}`} {...props}>
        <div className={"flex flex-col items-center justify-center"}>
            <Divider />

            <div className={"my-3 flex gap-5"}>
                <ExternalLink
                    title={"Facebook"}
                    className={linkClasses}
                    href={"https://www.facebook.com/RootLinjeforening"}>
                    <Facebook width={bigIconSize} />
                </ExternalLink>

                <ExternalLink
                    title={"Instagram"}
                    className={linkClasses}
                    href={"https://www.instagram.com/linjeforeningenroot/"}>
                    <Instagram width={bigIconSize} />
                </ExternalLink>

                <ExternalLink
                    title={"LinkedIn"}
                    className={linkClasses}
                    href={"https://www.linkedin.com/company/root-linjeforening"}>
                    <LinkedIn width={bigIconSize} />
                </ExternalLink>

                <ExternalLink
                    title={"GitHub"}
                    className={linkClasses}
                    href={"https://github.com/Project-insert-name/root-website"}>
                    <GitHub width={bigIconSize} />
                </ExternalLink>
            </div>
            <p>
                Kontakt oss: <MailLink mail={"linjeforening.root@hvl.no"} />
            </p>
        </div>
    </footer>
)

export default Footer
