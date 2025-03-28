"use client"
import {
    Modal as _Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalProps as _ModalProps,
    useDisclosure,
} from "@heroui/react"
import { Button } from "@/components/buttons/button"
import { type ReactNode } from "react"

interface ModalProps extends DefaultProps {
    initialState?: boolean
    label?: string
    modalTitle?: string
    modalContent?: ReactNode
    size?: _ModalProps["size"]
    trigger?: (toggle: VoidFunction) => ReactNode
}

/**
 * En modal som flyter over innholdet på siden.
 * @param initialState State til om modal skal starte åpen eller lukket
 * @param label Tittelen på knappen som åpner modalen. Vises kun hvis trigger ikke er satt.
 * @param size Størrelsen på modalen.
 * @param modalTitle Tittelen på modalen. Vises på toppen av modalen.
 * @param modalContent Innholdet i modalen.
 * @param trigger En funksjon som returnerer en knapp som åpner modalen. Når denne er satt vil standard knappen ikke vises.
 * @param props Andre props som sendes til Modal komponenten.
 */
const Modal: Component<ModalProps> = ({
    initialState,
    label,
    size,
    modalTitle,
    modalContent,
    trigger,
    ...props
}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure({defaultOpen: initialState})

    return (
        <>
            {trigger ? (
                trigger(onOpen)
            ) : (
                <Button onClick={() => onOpen()} aria-label={"Åpne dialogboks"}>
                    {label}
                </Button>
            )}
            <_Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size={size}
                placement={"center"}
                classNames={{ wrapper: ["z-[150]"], backdrop: ["z-[150]"] }}
                {...props}>
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className={"flex flex-col gap-1"} as={"h5"}>
                                {modalTitle}
                            </ModalHeader>
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
