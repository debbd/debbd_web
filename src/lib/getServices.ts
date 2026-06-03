import { client } from "@/sanity/client"
import { unstable_cache } from "next/cache"

export interface ServiceItem {
    name: string
    slug: { current: string }
    tags: string[]
    icon: string | null 
}

export const getServices = unstable_cache(
    async () => {
        return client.fetch<ServiceItem[]>(`*[_type == "service"] {
      name,
      slug,
      tags,
      "icon": icon.asset->url   
    }`)
    },
    ["services"],
    { revalidate: false }
)