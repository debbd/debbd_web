// usePorfolioData.ts  (or inside your component)
import { client } from "@/sanity/client"
import { PortFolioDataType, PortfolioItem, PortfolioServiceType } from "@/types"
import { useState, useEffect } from "react"


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

export function usePortfolioData() {
    const [serviceTypes, setServiceTypes] = useState<PortfolioServiceType[]>([])
    const [portfolio, setPortfolio] = useState<PortFolioDataType>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)

                const [serviceTypeData, portfolioData] = await Promise.all([
                    client.fetch<PortfolioServiceType[]>(serviceTypeQuery),
                    client.fetch<PortfolioItem[]>(portfolioQuery)
                ])

                const grouped = portfolioData.reduce<PortFolioDataType>((acc, item) => {
                    const key = item.serviceType?.slug.current
                    if (!key) return acc
                    if (!acc[key]) acc[key] = []
                    acc[key].push(item)
                    return acc
                }, {})

                setPortfolio(grouped)
                setServiceTypes(serviceTypeData)

            } catch (err) {
                setError(err instanceof Error ? err : new Error("Fetch failed"))
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { serviceTypes, portfolio, loading, error }
}