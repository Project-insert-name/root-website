"use client"
import {
    Modal as _Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalProps as _ModalProps,
} from "@nextui-org/react"
import { Button } from "@/components/buttons/button"
import useToggle from "@/hooks/useToggle"
import { type ReactNode } from "react"

interface ModalProps extends DefaultProps {
    label?: string
    modalTitle?: string
    modalContent?: ReactNode
    size?: _ModalProps["size"]
}

const Modal: Component<ModalProps> = ({ label, size, modalTitle, modalContent, ...props }) => {
    const [isOpen, toggleOpen] = useToggle()

    function closeModal() {
        toggleOpen(false)
    }

    return (
        <>
            <Button onClick={() => toggleOpen()} aria-label={"Åpne dialogboks"}>
                {label}
            </Button>
            <_Modal
                isOpen={isOpen}
                onClose={closeModal}
                size={size}
                classNames={{ wrapper: ["z-[150]"], backdrop: ["z-[150]"] }}
                {...props}>
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modalTitle}</ModalHeader>
                            <ModalBody>{modalContent}</ModalBody>
                            <ModalFooter>
                                <Button onClick={onClose} aria-label={"Lukk dialogboks"}>
                                    Lukk
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </_Modal>
        </>
    )
}

export default Modal
