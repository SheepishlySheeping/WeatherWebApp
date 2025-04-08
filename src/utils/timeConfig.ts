export function getTimeString(time : Date | undefined) {
    if (!time) return undefined
    return `${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} ${time.toLocaleDateString('en-US', { weekday: 'short' })}`
}

export function convertTime(localTime : Date | undefined, offset: number | undefined) {
    if (!offset || !localTime) return undefined
    const utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    return new Date(utc + offset * 1000)
}