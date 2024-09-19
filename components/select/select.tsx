"use client"
import { Select as _Select, SelectItem } from "@nextui-org/react"

interface SelectProps extends DefaultProps {
    label?: string
    placeholder?: string
    items: { value: string | number; label: string }[]
    defaultItem?: string
    onChange?: (value: string) => void
}

/**
 * En dropdown meny for å velge et enkelt element fra en liste.
 * @param label Melding som vises over dropdown valget.
 * @param placeholder Melding som vises i dropdown valget før et element er valgt.
 * @param items En liste med elementer som kan velges.
 * @param defaultItem Standard valgt element.
 * @param onChange Funksjon som kalles når et element er valgt med det valgte elementet som argument.
 * @param props Andre props som kan sendes til Select komponenten.
 */
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
