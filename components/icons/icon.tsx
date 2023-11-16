import { ReactNode } from "react"
import {
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
    UsersIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline"

export const defaultIconSize = 20
export const bigIconSize = 30

interface IconProps extends ChildProps {
    width?: number
}

/**
 * En generisk ikon som vises sammen med tekst
 * @param icon Ikon som skal vises. Kan også være annen JSX
 * @param children Tekst eller annen JSX som skal vises sammen med ikonet
 * @param className CSS-klassenavn
 * @param props Andre props som skal sendes til div-elementet
 */
export const FlexIcon: Component<{ icon: ReactNode } & ChildProps> = ({
    icon,
    children,
    className,
    ...props
}) => (
    <div className={`flex items-center gap-1 text-gray-700 ${className}`} {...props}>
        <div>{icon}</div>
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

export const LeftArrowIcon: Component<IconProps> = ({ children, title, className, width }) => (
    <FlexIcon
        className={className}
        icon={<ArrowLeftIcon width={width || defaultIconSize} />}
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
