// types.ts
export interface PortfolioServiceType {
  _id: string
  label: string
  slug: { current: string }
  meta?: string
}


export type PortFolioDataType = {
  [serviceLabel: string]: PortfolioItem[]
}

export interface PortfolioItem {
  _id: string
  companyName: string
  companyImage: {
    asset: { url: string }
    caption?: string
    attribution?: string
  }
  meta?: string
  serviceType: {
    _id: string
    label: string
    slug: { current: string }
  }
}