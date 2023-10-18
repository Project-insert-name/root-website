import { ReactNode } from "react";
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";

export const defaultIconSize = 20;

export const PIcon: Component<{ icon: ReactNode } & ChildProps> = (
    {
        icon,
        children,
        title,
        className = "text-gray-500",
    }) =>
    <p className={ `inline-flex gap-1 ${ className }` } title={ title }>
        { icon }{ children }
    </p>

export const DateIcon: Component<ChildProps> = ({ children, title = "Dato" }) => {
    return <PIcon icon={ <CalendarIcon width={ defaultIconSize } /> } title={ title }>{ children }</PIcon>
}

export const TimeIcon: Component<ChildProps> = ({ children, title = "Tid" }) => {
    return <PIcon icon={ <ClockIcon width={ defaultIconSize } /> } title={ title }>{ children }</PIcon>
}

export const MapIcon: Component<ChildProps> = ({ children, title = "Sted" }) => {
    return <PIcon icon={ <MapPinIcon width={ defaultIconSize } /> } title={ title }>{ children }</PIcon>
}

export const AttendeesIcon: Component<ChildProps> = ({ children, title = "Antall plasser" }) => {
    return <PIcon icon={ <UsersIcon width={ defaultIconSize } /> } title={ title }>{ children }</PIcon>
}
