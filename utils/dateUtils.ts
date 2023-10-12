export function toFormatDateAndTime(date: string): { date: string, time: string } | null {
    const dateObj = new Date(date)

    if (isNaN(dateObj.valueOf())) {
        return null;
    }

    date = dateObj.toLocaleString("nb", {
        month: "long", day: "2-digit", weekday: "short"
    });
    date = date[0].toUpperCase() + date.slice(1);
    const time = dateObj.toLocaleString("nb", {
        hour: "2-digit", minute: "2-digit"
    })
    return { date, time };
}
