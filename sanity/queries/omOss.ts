import { cdnClient } from "@/sanity/lib/client"
import {InfoSide} from "@/sanity/types";

export async function getAllInfoPages(): Promise<ReadonlyArray<InfoSide>>{
    return await cdnClient.fetch('*[_type == "info_sider"] | order(title) | order(priority) ')
}

export async function getAllInfoPageTitles(): Promise<ReadonlyArray<String>>{
    return await cdnClient.fetch('*[_type == "info_sider"]{info_title}')
}