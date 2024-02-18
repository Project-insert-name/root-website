"use client"
import Dropdown, { type Key } from "@/components/dropdown/dropdown"
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"

const subscribeItems = [
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
        getLink: (url: string) => url.replace(/(http:\/\/)|(https:\/\/)/, "webcal://"),
    },
    { key: "ics", label: "iCal-fil", getLink: (url: string) => url },
]

interface AddToCalendarDropdownProps extends DefaultProps {
    eventUrl: string
}

const AddToCalendarDropdown: Component<AddToCalendarDropdownProps> = ({ eventUrl, ...props }) => {
    function onAction(key: Key) {
        const link = subscribeItems.find(item => item.key === key)?.getLink(eventUrl)
        if (link) {
            window.open(link, "_blank")
        }
    }

    return (
        <Dropdown
            buttonProps={{
                endContent: <ArrowDownOnSquareIcon width={defaultIconSize} />,
                "aria-label": "Legg til i kalender",
            }}
            label={"Legg til i kalender"}
            items={subscribeItems}
            onAction={onAction}
            {...props}
        />
    )
}

export default AddToCalendarDropdown
