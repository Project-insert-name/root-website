/**
 * Konverterer en dato til et objekt med dato og tid som er formatert til norsk
 * @param date Datoen som skal konverteres
 * @returns Et objekt med dato og tid som er formatert til norsk, eller null om datoen er ugyldig
 */
export function toFormatDateAndTime(date: string): { date: string; time: string } | null {
    const dateObj = new Date(date)

    if (isNaN(dateObj.valueOf())) {
        return null
    }

    date = dateObj.toLocaleString("nb", {
        month: "long",
        day: "numeric",
        weekday: "short",
    })
    date = date[0].toUpperCase() + date.slice(1)
    const time = dateObj.toLocaleString("nb", {
        hour: "2-digit",
        minute: "2-digit",
    })
    return { date, time }
}

/**
 * Konverterer en dato til et format som er lettere å lese
 * @param date Datoen som skal konverteres
 * @returns En streng med datoen i et lettere leselig format, eller null om datoen er ugyldig
 */
export function toFormatDate(date: string): string | null {
    const dateObj = new Date(date)

    if (isNaN(dateObj.valueOf())) {
        return null
    }

    date = dateObj.toLocaleString("nb", {
        month: "long",
        day: "numeric",
        weekday: "short",
        year: "numeric",
    })
    date = date[0].toUpperCase() + date.slice(1)
    return date
}

/**
 * Konverterer en String dato til en tuppel med dato og tid
 * Dato og tid er i formatet [År, Måned, Dag, Time, Minutt]
 * @param date Datoen som skal konverteres
 * @returns En tuppel med dato og tid
 * @throws Error om datoen er ugyldig
 */
export function toDateTuple(date: string): [number, number, number, number, number] {
    const dateObj = new Date(date)

    if (isNaN(dateObj.valueOf())) {
        throw new Error("Invalid date")
    }

    return [
        dateObj.getFullYear(),
        dateObj.getMonth() + 1,
        dateObj.getDate(),
        dateObj.getHours(),
        dateObj.getMinutes(),
    ]
}

/**
 * Sjekker om en dato er i fremtiden
 * @param date Datoen som skal sjekkes
 * @returns True om datoen er i fremtiden, false ellers
 */
export function isFuture(date: string): boolean {
    const dateObj = new Date(date)
    return dateObj.valueOf() >= Date.now()
}
