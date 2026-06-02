// app/portfolio/page.tsx  (server component — no "use client")
import { getPortfolioData } from "./getPortfolioData"
import {PortfolioClient} from "./PortfolioClient"

export default async function PortfolioPage() {
  const { serviceTypes, portfolio } = await getPortfolioData()

  return (
    <PortfolioClient
      serviceTypes={serviceTypes}
      portfolio={portfolio}
    />
  )
}

