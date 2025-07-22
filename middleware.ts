import { NextRequest, NextResponse } from 'next/server'
import redirects from './redirects.json'
import { BloomFilter } from 'bloom-filters'

interface Redirect {
  source: string
  destination: string
  permanent?: boolean
}

function createFilter(values: string[]) {
  const errorRate = 0.01
  const size = values.length > 0 ? values.length : 10 // Use a minimum size of 10 for empty arrays
  const filter = BloomFilter.create(size, errorRate)
  values.forEach((v) => filter.add(v))
  return filter
}

const redirectMap = new Map<string, Redirect>()
redirects.forEach((r) => redirectMap.set(r.source, r))
const filter = createFilter(Array.from(redirectMap.keys()))

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  if (!filter.has(path)) return NextResponse.next()

  const entry = redirectMap.get(path)
  if (!entry) return NextResponse.next()

  const url = entry.destination.startsWith('http')
    ? entry.destination
    : new URL(entry.destination, req.url).toString()
  const status = entry.permanent ? 308 : 307
  return NextResponse.redirect(url, status)
}

export const config = {
  matcher: '/:path*',
}
