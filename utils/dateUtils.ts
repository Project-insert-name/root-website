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
