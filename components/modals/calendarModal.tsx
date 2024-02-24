"use client"
import Modal from "@/components/modals/modal"
import { useEffect, useMemo, useState } from "react"
import type { EventType } from "@/sanity/types"
import Select from "@/components/select/select"
import { getEventTypeLabel } from "@/sanity/lib/utils"
import AddToCalendarDropdown from "@/components/dropdown/addToCalendarDropdown"

const CalendarModal = () => (
    <Modal
        size={"xl"}
        label={"Abonner på kalender"}
        modalTitle={"Abonner på kalender"}
        modalContent={<ModalContent />}
    />
)

export default CalendarModal

interface FormData {
    type?: EventType | null
    from?: string
    limit?: number
}

const ModalContent = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const apiUrl = `${baseUrl}/api/arrangement/ical`

    const [params, setParams] = useState<Record<string, string>>({})

    const url = useMemo(() => {
        params["from"] = new Date().toISOString()
        return (
            apiUrl +
            "?" +
            Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .join("&")
        )
    }, [params])

    function onFormChange(form: FormData) {
        let record: Record<string, string> = {}
        for (const [key, value] of Object.entries(form)) {
            if (value) {
                record[key] = value?.toString() ?? ""
            }
        }
        setParams(record)
    }

    return (
        <div>
            <h6>Abonnere på framtidige arrangementer</h6>
            <p className={"text-gray-600"}>Velg type arrangement du vil abonnere på</p>
            <div className={"flex flex-col gap-5 pt-2"}>
                <CalendarForm onChange={onFormChange} />
                <div>
                    <AddToCalendarDropdown eventUrl={url} />
                </div>
            </div>
        </div>
    )
}

const CalendarForm: Component<{ onChange: (form: FormData) => void }> = ({ onChange }) => {
    const [form, setForm] = useState<FormData>({})

    useEffect(() => {
        onChange(form)
    }, [form])

    const defaultType = { value: "*", label: "Alle" }
    const eventTypes: EventType[] = ["bedpres", "social", "workshop", "other"]
    const typeOptions = [defaultType].concat(
        eventTypes.map(type => ({
            value: type,
            label: getEventTypeLabel(type),
        })),
    )
    return (
        <Select
            label={"Type arrangement"}
            defaultItem={defaultType.value}
            items={typeOptions}
            onChange={value =>
                setForm({
                    ...form,
                    type: value !== defaultType.value ? (value as EventType) : null,
                })
            }
        />
    )
}
