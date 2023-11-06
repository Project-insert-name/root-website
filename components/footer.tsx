import { ExternalLink, MailLink } from "@/components/link"
import { Facebook, GitHub, Instagram } from "@/components/icons/socials"
import { Divider } from "@/components/divider"

const iconSize = 30

const Footer: Component = ({ className, ...props }) => (
    <footer className={`absolute bottom-0 min-h-[100px] w-full ${className}`} {...props}>
        <div className={"flex flex-col items-center justify-center"}>
            <Divider />

            <div className={"my-3 flex gap-5"}>
                <ExternalLink
                    href={"https://www.facebook.com/RootLinjeforening"}
                    aria-label={"Facebook"}>
                    <Facebook fill={"#0866FF"} width={iconSize} alt={"Facebook logo"} />
                </ExternalLink>
                <ExternalLink
                    href={"https://www.instagram.com/linjeforeningenroot/"}
                    aria-label={"Instagram"}>
                    <Instagram fill={"#E4405F"} width={iconSize} alt={"Instagram logo"} />
                </ExternalLink>
                <ExternalLink
                    href={"https://github.com/Project-insert-name/root-website-frontend"}
                    aria-label={"GitHub"}>
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
