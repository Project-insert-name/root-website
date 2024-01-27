import { cdnClient } from "@/sanity/lib/client"
import type { InfoSide } from "@/sanity/types"

/**
 * Henter ut alle info sider fra sanity og sorterer de etter tittel og prioritet
 * @returns En liste med alle info sidene
 */
export async function getAllInfoPages(): Promise<ReadonlyArray<InfoSide>> {
    return cdnClient.fetch('*[_type == "info_sider"] | order(title) | order(priority) ')
}
