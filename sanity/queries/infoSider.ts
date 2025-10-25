import { cdnClient } from "@/sanity/lib/client"
import type { InfoSide } from "@/sanity/types"

export async function getAllInfoSider(): Promise<ReadonlyArray<InfoSide>> {
    return cdnClient.fetch(
        `*[_type == "info_sider"] | order(priority asc, title asc){...}`
    )
}

export async function getInfoSiderBySlug(slug: string): Promise<Readonly<InfoSide> | null> {
    return cdnClient.fetch(
        `*[_type == "info_sider" && slug.current == $slug][0]{...}`,
        { slug }
    )
}