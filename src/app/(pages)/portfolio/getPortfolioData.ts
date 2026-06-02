// lib/getPortfolioData.ts
import { client } from "@/sanity/client"
import { unstable_cache } from "next/cache"
import { PortFolioDataType, PortfolioItem, PortfolioServiceType } from "@/types"

const serviceTypeQuery = `*[_type == "portfolioServiceType"] {
  _id,
  label,
  slug,
  meta
}`

const portfolioQuery = `*[_type == "portfolio"] {
  _id,
  companyName,
  companyImage {
    asset -> { url },
    caption,
    attribution
  },
  meta,
  serviceType -> {
    _id,
    label,
    slug
  }
}`

export const getPortfolioData = unstable_cache(
  async () => {
    const [serviceTypeData, portfolioData] = await Promise.all([
      client.fetch<PortfolioServiceType[]>(serviceTypeQuery),
      client.fetch<PortfolioItem[]>(portfolioQuery),
    ])

    const grouped = portfolioData.reduce<PortFolioDataType>((acc, item) => {
      const key = item.serviceType?.slug.current
      if (!key) return acc
      if (!acc[key]) acc[key] = []
      acc[key].push(item)
      return acc
    }, {})

    return {
      serviceTypes: serviceTypeData,
      portfolio: grouped,
    }
  },
  ["portfolio-data"],
  { revalidate: false } 
)