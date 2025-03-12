import { type PortableTextComponents } from "@portabletext/react"
import { ExternalLink } from "@/components/link"
import { Code } from "@heroui/code"

const className = "text-dark-title dark:text-white"

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
    list: {
        bullet: ({ children }) => <ul className={className}>{children}</ul>,
        number: ({ children }) => <ol className={className}>{children}</ol>,
    },
    block: {
        h1: ({ children }) => <h1 className={className}>{children}</h1>,
        h2: ({ children }) => <h2 className={className}>{children}</h2>,
        h3: ({ children }) => <h3 className={className}>{children}</h3>,
        h4: ({ children }) => <h4 className={className}>{children}</h4>,
        h5: ({ children }) => <h5 className={className}>{children}</h5>,
        h6: ({ children }) => <h6 className={className}>{children}</h6>,
        normal: ({ children }) => <p className={className}>{children}</p>,
        blockquote: ({ children }) => <blockquote className={className}>{children}</blockquote>,
    },
}
