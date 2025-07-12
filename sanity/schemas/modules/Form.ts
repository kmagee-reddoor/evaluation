import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'form',
  type: 'object',
  title: 'Contact Form',
  fields: [
    defineField({ name: 'heading', type: 'string' }),
    defineField({ name: 'tagline', type: 'string' }),
  ],
})
