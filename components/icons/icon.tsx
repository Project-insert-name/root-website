import { ReactNode } from "react"
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline"

export const defaultIconSize = 20

interface IconProps extends ChildProps {
    width?: number
}

export const FlexIcon: Component<{ icon: ReactNode } & ChildProps> = ({
    icon,
    children,
    className,
    ...props
}) => (
    <div className={`flex items-center gap-1 text-gray-700 ${className}`} {...props}>
        {icon}
        {children}
    </div>
)

export const DateIcon: Component<IconProps> = ({ children, title = "Dato", className, width }) => (
    <FlexIcon
        className={className}
        icon={<CalendarIcon width={width || defaultIconSize} />}
        title={title}>
        {children}
    </FlexIcon>
)

export const TimeIcon: Component<IconProps> = ({ children, title = "Tid", className, width }) => (
    <FlexIcon
        className={className}
        icon={<ClockIcon width={width || defaultIconSize} />}
        title={title}>
        {children}
    </FlexIcon>
)

export const MapIcon: Component<IconProps> = ({ children, title = "Sted", className, width }) => (
    <FlexIcon
        className={className}
        icon={<MapPinIcon width={width || defaultIconSize} />}
        title={title}>
        {children}
    </FlexIcon>
)

export const AttendeesIcon: Component<IconProps> = ({
    children,
    title = "Antall plasser",
    className,
    width,
}) => (
    <FlexIcon
        className={className}
        icon={<UsersIcon width={width || defaultIconSize} />}
        title={title}>
        {children}
    </FlexIcon>
)
