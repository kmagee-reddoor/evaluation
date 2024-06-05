import { defineField, defineType } from 'sanity'

import accessibleImage from '../fields/accessibleImage'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    accessibleImage,
  ],
})
