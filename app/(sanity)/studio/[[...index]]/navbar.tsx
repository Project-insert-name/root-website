"use client"

import { type ToolMenuProps } from "sanity"
import { defaultIconSize } from "@/components/icons/icon"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

/**
 * En custom toolmenu for sanity studio. Som legger til en lenke tilbake root-nettsiden.
 * @param props Props som sendes fra sanity studio.
 */
const SanityToolMenu: Component<ToolMenuProps> = props => (
    <div style={{ display: "flex", alignItems: "center" }}>
        <a
            href={process.env.NEXT_PUBLIC_BASE_URL}
            rel={"noopener"}
            target={"_blank"}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "white",
                textDecoration: "none",
                fontSize: "small",
            }}
            title={"Tilbake til Root"}>
            <ArrowTopRightOnSquareIcon width={defaultIconSize} />
            <p>Root</p>
        </a>
        <div style={{ width: "100%" }}>{props.renderDefault(props)}</div>
    </div>
)

export default SanityToolMenu
