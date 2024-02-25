"use client"

import { type ToolMenuProps } from "sanity"
import { HomeIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"

/**
 * En custom toolmenu for sanity studio. Som legger til en lenke tilbake root-nettsiden.
 * @param props Props som sendes fra sanity studio.
 */
const SanityToolMenu: Component<ToolMenuProps> = props => (
    <div style={{ display: "flex" }}>
        <a
            href={process.env.NEXT_PUBLIC_BASE_URL}
            rel={"noopener"}
            target={"_blank"}
            title={"Tilbake til Root"}>
            <HomeIcon width={defaultIconSize} style={{ color: "white" }} />
        </a>
        <div style={{ width: "100%" }}>{props.renderDefault(props)}</div>
    </div>
)

export default SanityToolMenu
