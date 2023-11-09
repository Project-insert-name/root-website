import { remark } from "remark"
import html from "remark-html"
import type { MarkdownString } from "@/sanity/types"

/**
 * Konverterer markdown til html
 * @param markdown Markdown som skal konverteres
 * @returns Html som er generert fra markdown. Kan settes direkte inn i en html-side med dangerouslySetInnerHTML.
 */
export async function fromMarkdown(markdown?: MarkdownString): Promise<string> {
    const file = await remark().use(html).process(markdown)
    return file.toString()
}
