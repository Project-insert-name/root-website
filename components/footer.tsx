import { ExternalLink, MailLink } from "@/components/link"
import { Facebook, GitHub, Instagram } from "@/components/icons/socials"
import { Divider } from "@/components/divider"

const iconSize = 30

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
                    <Facebook fill={"#0866FF"} width={iconSize} alt={"Facebook logo"} />
                </ExternalLink>

                <ExternalLink
                    title={"Instagram"}
                    className={linkClasses}
                    href={"https://www.instagram.com/linjeforeningenroot/"}>
                    <Instagram fill={"#E4405F"} width={iconSize} alt={"Instagram logo"} />
                </ExternalLink>

                <ExternalLink
                    title={"GitHub"}
                    className={linkClasses}
                    href={"https://github.com/Project-insert-name/root-website"}>
                    <GitHub width={iconSize} alt={"GitHub logo"} />
                </ExternalLink>
            </div>
            <p>
                Kontakt oss: <MailLink mail={"linjeforening.root@hvl.no"} />
            </p>
        </div>
    </footer>
)

export default Footer
