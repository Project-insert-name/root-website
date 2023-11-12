import SanityImage from "@/components/sanityImage"
import { AttendeesIcon, bigIconSize, MapIcon } from "@/components/icons/icon"
import { ExternalLinkButton } from "@/components/button"
import { ExternalLink } from "@/components/link"

interface GalleryProps extends ChildProps {
    heading: string
}

const Gallery: Component<GalleryProps> = ({ heading, children }) => (
    <div className="container grid">
        <h1>{heading}</h1>
        {children}
    </div>
)

export default Gallery
