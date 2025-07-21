import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface AccessibleImage extends Image {
  alt?: string
}

export interface Hero {
  _type: string
  heading?: string
  tagline?: string
  image: AccessibleImage
}

export interface FormModule {
  _type: string
  heading?: string
  tagline?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  pageBuilder?: Array<Hero | FormModule>
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  maintenanceMode?: boolean
  ogImage?: Image
}
