"use client"
import { Button } from "@/components/buttons/button"
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"

interface IcsButtonProps extends DefaultProps {
    /**
     * Filnavn på ics filen som skal lastes ned. Ikke inkludert .ics
     */
    filename?: string
    /**
     * Dataen som skal lastes ned. Må være i ics format
     */
    data: string
}

const IcsButton: Component<IcsButtonProps> = ({
    filename = "root_linjeforening",
    data,
    ...props
}) => {
    /**
     * Laster ned en ics kalenderfil med dataen som er gitt
     * Data må være en string i ics format
     */
    function download(): void {
        const blob = new Blob([data], { type: "text/calendar" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.download = `${filename}.ics`
        link.href = url
        link.click()
        link.remove()
    }

    return (
        <Button onClick={download} {...props}>
            Legg til i kalender
            <ArrowDownOnSquareIcon width={defaultIconSize} />
        </Button>
    )
}

export default IcsButton
