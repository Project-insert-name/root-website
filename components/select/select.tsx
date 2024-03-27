"use client"
import { Select as _Select, SelectItem } from "@nextui-org/react"

interface SelectProps extends DefaultProps {
    label?: string
    placeholder?: string
    items: { value: string | number; label: string }[]
    defaultItem?: string
    onChange?: (value: string) => void
}

const Select: Component<SelectProps> = ({
    label,
    placeholder,
    items,
    defaultItem,
    onChange,
    ...props
}) => {
    return (
        <_Select
            label={label}
            placeholder={placeholder}
            onChange={event => onChange?.(event.target.value)}
            defaultSelectedKeys={defaultItem}
            {...props}>
            {items.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                    {label}
                </SelectItem>
            ))}
        </_Select>
    )
}

export default Select
