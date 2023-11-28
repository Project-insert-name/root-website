import { AttendeesIcon, bigIconSize, MapIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/button"
import { ExternalLink } from "@/components/link"

interface GalleryProps extends ChildProps {
    heading: string
}

const Gallery: Component<GalleryProps> = ({ heading, children }) => (
    <div className={"flex flex-wrap justify-center rounded-2xl bg-white py-5"}>
        <h1>{heading}</h1>
        <div className={"grid grid-cols-1 gap-5 p-5 sm:grid-cols-5 "}>{children}</div>
    </div>
)

export default Gallery
