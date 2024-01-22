"use client"

import { toFormatDate, toFormatTime } from "@/utils/dateUtils"

/**
 * Konverterer dato fra UTC format til norsk format. Må kjøre i klienten for å få riktig tidssone.
 * @param date Dato skrevet i UTC format.
 * @returns Formatert dato
 * @example "2024-01-25T18:00:00.000Z" => "Tor. 25 Januar 2024"
 */
export const Date: Component<{ date: string }> = ({ date }) => {
    const formatedDate = toFormatDate(date)
    return <>{formatedDate}</>
}

/**
 * Konverterer tid fra UTC format til norsk format. Må kjøre i klienten for å få riktig tidssone.
 * @param time Tid skrevet i UTC format.
 * @returns Formatert tid
 * @example "2024-01-25T18:00:00.000Z" => "19:00"
 */
export const Time: Component<{ time: string }> = ({ time }) => {
    const formatedDate = toFormatTime(time)
    return <>{formatedDate}</>
}
