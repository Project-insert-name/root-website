import { AttendeesIcon, bigIconSize, MapIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/button"
import { ExternalLink } from "@/components/link"

interface GalleryProps extends ChildProps {
    heading: string
}

const Gallery: Component<GalleryProps> = ({ heading, children }) => (
    <div className={"m-5 flex flex-wrap justify-center rounded-2xl bg-white p-5"}>
        <h1>{heading}</h1>
        <div className={"grid grid-cols-5 gap-5 p-5"}>{children}</div>
    </div>
)

export default Gallery
