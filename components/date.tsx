"use client"

import { toFormatDate, toFormatTime } from "@/utils/dateUtils"

export const Date: Component<{ date: string }> = ({ date }) => {
    const formatedDate = toFormatDate(date)
    return <>{formatedDate}</>
}

export const Time: Component<{ time: string }> = ({ time }) => {
    const formatedDate = toFormatTime(time)
    return <>{formatedDate}</>
}
