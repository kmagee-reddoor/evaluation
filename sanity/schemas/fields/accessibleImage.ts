import { defineField } from 'sanity'

import { ImageIcon } from '../objects/Icons'

export default defineField({
  type: 'image',
  icon: ImageIcon,
  name: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      description:
        'Alternative text for screenreaders. Falls back on caption if not set',
    }),
  ],
})
