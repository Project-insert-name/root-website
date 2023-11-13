import {client} from "@/sanity/lib/client";
import {InfoSider} from "@/sanity/types";

export async function getAllInfoPages(): Promise<ReadonlyArray<InfoSider>>{
    return await client.fetch('*[_type == "info_sider"]')
}