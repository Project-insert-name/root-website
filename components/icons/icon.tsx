import { ReactNode } from "react"
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline"

export const defaultIconSize = 20

export const FlexIcon: Component<{ icon: ReactNode } & ChildProps> = ({
    icon,
    children,
    className,
    ...props
}) => (
    <div className={`inline-flex gap-1 text-gray-700 ${className}`} {...props}>
        {icon}
        {children}
    </div>
)

export const DateIcon: Component<ChildProps> = ({ children, title = "Dato", className }) => (
    <FlexIcon className={className} icon={<CalendarIcon width={defaultIconSize} />} title={title}>
        {children}
    </FlexIcon>
)

export const TimeIcon: Component<ChildProps> = ({ children, title = "Tid", className }) => (
    <FlexIcon className={className} icon={<ClockIcon width={defaultIconSize} />} title={title}>
        {children}
    </FlexIcon>
)

export const MapIcon: Component<ChildProps> = ({ children, title = "Sted", className }) => (
    <FlexIcon className={className} icon={<MapPinIcon width={defaultIconSize} />} title={title}>
        {children}
    </FlexIcon>
)

export const AttendeesIcon: Component<ChildProps> = ({
    children,
    title = "Antall plasser",
    className,
}) => (
    <FlexIcon className={className} icon={<UsersIcon width={defaultIconSize} />} title={title}>
        {children}
    </FlexIcon>
)
