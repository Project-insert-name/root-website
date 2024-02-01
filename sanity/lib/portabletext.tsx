import { PortableTextComponents } from "@portabletext/react"

// TODO
export const components: PortableTextComponents = {
    marks: {
        p: ({ children }) => <p>{children}</p>,
        li: ({ children }) => <li className={"text-black"}>{children}</li>,
    },
}
