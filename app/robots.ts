import { MetadataRoute } from 'next'

let directives: MetadataRoute.Robots = {
  rules: {
    userAgent: '*',
    allow: '',
    disallow: '/',
  },
}

// TODO: Enable this once the site goes live!!!
// if (process.env.VERCEL_ENV === 'production') {
//   directives = {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: '/studio/',
//     },
//     sitemap: 'https://storquest.com/sitemap.xml',
//   };
// }

export default function robots(): MetadataRoute.Robots {
  return directives
}
