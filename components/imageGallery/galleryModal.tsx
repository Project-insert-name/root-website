import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { GalleryImage } from "./gallery"
import { SanityImageSource } from "@sanity/asset-utils"

interface GalleryModalProps extends ChildProps {
    isOpen: boolean
    // onClose: void
    activeImage: SanityImageSource | undefined
}

const GalleryModal: Component<GalleryModalProps> = ({ isOpen, activeImage }) => (
    <Modal size="md" isOpen={isOpen}>
        <ModalContent>
            <ModalHeader>title</ModalHeader>
            <ModalBody>
                {activeImage && <GalleryImage image={activeImage}></GalleryImage>}
            </ModalBody>
        </ModalContent>
    </Modal>
)

export default GalleryModal
