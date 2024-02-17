"use client"

import { Snippet as _Snippet } from "@nextui-org/react"

const Snippet: Component<ChildProps & { useDollar?: boolean }> = ({
    children,
    useDollar = false,
}) => (
    <_Snippet
        symbol={useDollar ? "$" : ""}
        tooltipProps={{ title: "Kopier", content: "Kopier", delay: 0 }}>
        {children}
    </_Snippet>
)

export default Snippet
