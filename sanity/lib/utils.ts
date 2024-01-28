import { remark } from "remark"
import html from "remark-html"
import strip from "strip-markdown"
import type { EventType, MarkdownString } from "@/sanity/types"

/**
 * Konverterer markdown til html
 * @param markdown Markdown som skal konverteres
 * @returns Html som er generert fra markdown. Kan settes direkte inn i en html-side med dangerouslySetInnerHTML.
 */
export async function markdownToHTML(markdown?: MarkdownString): Promise<string> {
    const file = await remark().use(html).process(markdown)
    return file.toString()
}

/**
 * Konverterer markdown til ren tekst. Fjerner alle html tags og markdown formatering. Samt bilde og link tags.
 * @param markdown Markdown som skal konverteres
 * @returns Ren tekst uten formatering
 */
export async function markdownToText(markdown?: MarkdownString): Promise<string> {
    const file = await remark().use(strip).process(markdown)
    return file.toString()
}

/**
 * Gir en leselig tekst for en event type
 * @param eventType Event typen som skal konverteres
 * @returns En leselig tekst for event typen
 */
export function getEventTypeLabel(eventType: EventType) {
    switch (eventType) {
        case "bedpres":
            return "Bedriftspresentasjon"
        case "workshop":
            return "Workshop"
        case "social":
            return "Sosialt"
        case "other":
            return "Annet"
    }
}
