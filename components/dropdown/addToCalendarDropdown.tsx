"use client"
import Dropdown, { type Key } from "@/components/dropdown/dropdown"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"
import { useMemo, useState } from "react"
import { Tooltip } from "@heroui/react"

type CalendarKey = "google" | "outlook" | "apple" | "ics" | "copy"

const subscribeItems: { key: CalendarKey; label: string; getLink: (url: string) => string }[] = [
    {
        key: "google",
        label: "Google Kalender",
        getLink: (url: string) => `https://calendar.google.com/calendar/u/0/r?cid=${url}`,
    },
    {
        key: "outlook",
        label: "Outlook",
        getLink: (url: string) => `https://outlook.live.com/calendar/0/addfromweb/?url=${url}`,
    },
    {
        key: "apple",
        label: "Apple Kalender",
        getLink: (url: string) => url.replace(/http(s)?:\/\//i, "webcal://"),
    },
    { key: "ics", label: "iCal-fil", getLink: (url: string) => url },
    { key: "copy", label: "Kopier lenke", getLink: (url: string) => url },
]

interface AddToCalendarDropdownProps extends DefaultProps {
    eventUrl: string
    restrict?: CalendarKey[]
}

const AddToCalendarDropdown: Component<AddToCalendarDropdownProps> = ({
    eventUrl,
    restrict,
    ...props
}) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const items = useMemo(
        () => subscribeItems.filter(item => !restrict || restrict?.includes(item.key)),
        [restrict],
    )

    function onAction(key: Key) {
        if (key === "copy") {
            void navigator.clipboard.writeText(eventUrl)
            setShowTooltip(true)
            setTimeout(() => setShowTooltip(false), 2000)
            return
        }
        const link = items.find(item => item.key === key)?.getLink(eventUrl)
        if (link) {
            window.open(link, "_blank")
        }
    }

    return (
        <Tooltip content={"Lenke kopiert"} isOpen={showTooltip}>
            <div className={"w-min"}>
                <Dropdown
                    buttonProps={{
                        endContent: <ChevronDownIcon width={defaultIconSize} />,
                        "aria-label": "Legg til i kalender",
                    }}
                    label={"Legg til i kalender"}
                    items={items}
                    onAction={onAction}
                    {...props}
                />
            </div>
        </Tooltip>
    )
}

export default AddToCalendarDropdown
