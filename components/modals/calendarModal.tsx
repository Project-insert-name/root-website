"use client"
import Modal from "@/components/modals/modal"
import Snippet from "@/components/snippet"
import Switch from "@/components/switches/switch"
import { useEffect, useState } from "react"
import type { EventType } from "@/sanity/types"
import Select from "@/components/select/select"
import { getEventTypeLabel } from "@/sanity/lib/utils"

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

    const [isEdit, setIsEdit] = useState(false)

    const [url, setUrl] = useState(`${baseUrl}/api/arrangement`)

    function onFormChange(form: FormData) {
        const type = form.type ? `type=${form.type}` : ""
        setUrl(`${baseUrl}/api/arrangement?${type}`)
    }

    return (
        <div>
            <h6>Abonnere på framtidige arrangementer</h6>
            <p className={"text-gray-600"}>Kopier lenken og lim den inn i din kalender</p>
            <div className={"flex flex-col gap-5 pt-2"}>
                <Switch onChange={setIsEdit}>Rediger</Switch>
                {isEdit && <CalendarForm onChange={onFormChange} />}
                <Snippet>{url}</Snippet>
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
