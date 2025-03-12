"use client"

import {
    DropdownTrigger,
    Dropdown as _Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@heroui/react"

export type Key = string | number

export type Item = { key: Key; label: string }

interface DropdownProps extends DefaultProps {
    items?: Item[]
    label?: string
    onAction?: (key: Key) => void
    buttonProps?: ButtonProps
}

const Dropdown: Component<DropdownProps> = ({
    items = [],
    label,
    className,
    onAction,
    buttonProps,
    ...props
}) => {
    return (
        <_Dropdown className={className} {...props}>
            <DropdownTrigger>
                <Button
                    variant={"solid"}
                    radius={"lg"}
                    className={"bg-root-primary text-white"}
                    {...buttonProps}>
                    {label}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label={"Dynamic Actions"} items={items} onAction={onAction}>
                {item => (
                    <DropdownItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}>
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </_Dropdown>
    )
}

export default Dropdown
