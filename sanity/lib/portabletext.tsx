import { type PortableTextComponents } from "@portabletext/react"
import { ExternalLink } from "@/components/link"
import { Code } from "@nextui-org/code"

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
        code: ({ children }) => (
            <Code className={"before:content-[''] after:content-['']"}>{children}</Code>
        ),
    },
    block: {
        h1: ({ children }) => <h1 className={"text-dark-title"}>{children}</h1>,
        h2: ({ children }) => <h2 className={"text-dark-title"}>{children}</h2>,
        h3: ({ children }) => <h3 className={"text-dark-title"}>{children}</h3>,
        h4: ({ children }) => <h4 className={"text-dark-title"}>{children}</h4>,
        h5: ({ children }) => <h5 className={"text-dark-title"}>{children}</h5>,
        h6: ({ children }) => <h6 className={"text-dark-title"}>{children}</h6>,
    },
}
