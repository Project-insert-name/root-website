import { fromMarkdown } from "@/sanity/utils"
import type { Markdown } from "@/sanity/types"

/**
 * Komponent for å vise markdown som HTML.
 * @param markdown Markdown som skal vises
 * @param props Props som skal sendes til div-elementet, blant annet className, id, title, etc.
 */
const Markdown: AsyncComponent<{ markdown?: Markdown } & DefaultProps> = async ({
    markdown,
    ...props
}) => {
    const html = await fromMarkdown(markdown)
    return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />
}

export default Markdown
