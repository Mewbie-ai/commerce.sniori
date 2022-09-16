import { OperationContext } from '@vercel/commerce/api/operations'
import { Category } from '@vercel/commerce/types/site'
import { LocalConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'new-arrivals',
          name: 'New Arrivals',
          slug: 'new-arrivals',
          path: '/new-arrivals',
        },
        {
          id: 'featured',
          name: 'Feet',
          slug: 'featured',
          path: '/featured',
        },
        {
          id: 'sale',
          name: 'Sale',
          slug: 'sale',
          path: '/sale',
        },
        {
          id: 'about-us',
          name: 'About Us',
          slug: 'about-us',
          path: '/about-us',
        },
        {
          id: 'contact-us',
          name: 'Contact Us',
          slug: 'contact-us',
          path: '/contact-us',
        },
        {
          id: 'article',
          name: 'Article',
          slug: 'article',
          path: '/article',
        },
      ],
      brands: [],
    })
  }

  return getSiteInfo
}
