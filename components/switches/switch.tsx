"use client"
import { Switch as _Switch } from "@nextui-org/react"

interface SwitchProps extends ChildProps {
    onChange?: (checked: boolean) => void
}

const Switch: Component<SwitchProps> = ({ onChange, ...props }) => {
    return <_Switch {...props} onChange={event => onChange?.(event.currentTarget.checked)} />
}

export default Switch
