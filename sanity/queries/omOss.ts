import {client} from "@/sanity/lib/client";
import {InfoSide} from "@/sanity/types";

export async function getAllInfoPages(): Promise<ReadonlyArray<InfoSide>>{
    return await client.fetch('*[_type == "info_sider"] | order(priority) | order(title)')
}

export async function getAllInfoPageTitles(): Promise<ReadonlyArray<String>>{
    return await client.fetch('*[_type == "info_sider"]{info_title}')
}