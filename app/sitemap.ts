import { MetadataRoute } from 'next'

import type { SitemapPage } from '@/api/sanity/sitemap'
import { SitemapApi } from '@/api/sanity/sitemap'
import { ContentTypes } from '@/sanity/schemas/constants/ContentTypes'

export const dynamic = 'force-dynamic' // Force revalidation on every request

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapApi = new SitemapApi()

  // Fetch list of pages to render in the sitemap
  const sitemapPages = await sitemapApi.getSitemapPages()

  // Compile list of entry objects to be rendered by the sitemap
  const sitemapEntries = sitemapPages.map((page: SitemapPage) => {
    return buildSitemapEntry(page)
  })

  return sitemapEntries
    .filter((entry) => entry != null)
    .sort((a, b) => a.url.localeCompare(b.url))
}

/**
 * Helper function to generate the sitemap entry object given
 * a sitemap page's details.
 * @param page Page to be included in the sitemap xml listing
 * @returns Sitemap Entry object to be used by sitemap for rendering
 */
function buildSitemapEntry(page: SitemapPage) {
  const siteUrl = process.env.NEXT_PUBLIC_URL

  let path = ''

  switch (page._type) {
    // Blog Post
    case ContentTypes.BLOG_POST:
      path = `blog/${page.slug}`
      break
    // Homepage
    case ContentTypes.HOME:
      path = ''
      break
    case ContentTypes.PAGE:
    default:
      path = `${page.slug}`
      break
  }

  return {
    url: `${siteUrl}/${path}`,
    lastModified: new Date(page._updatedAt).toISOString(),
  }
}
