import { type PortableTextComponents } from "@portabletext/react"
import { ExternalLink } from "@/components/link"

/**
 * Definerer custom styling for komponenter generert av PortableText.
 * Brukes av PortableText komponenten, for å style tekst og komponenter.
 * @see https://www.npmjs.com/package/@portabletext/react#available-components
 */
export const components: PortableTextComponents = {
    marks: {
        link: ({ value, children }) => (
            <ExternalLink href={value?.href} className={"link"}>
                {children}
            </ExternalLink>
        ),
    },
}
