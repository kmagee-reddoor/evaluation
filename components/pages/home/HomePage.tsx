import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import ImageBox from '@/components/shared/ImageBox'
import ContactForm from '@/components/shared/ContactForm'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], title = '', pageBuilder } = data ?? {}

  return (
    <div className="space-y-20">
      {pageBuilder && pageBuilder.length > 0 && (
        <div>
          {pageBuilder.map((module) => {
            switch (module._type) {
              case 'hero':
                return (
                  <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
                    <div className="lg:w-1/2">
                      <h1 className="text-4xl font-bold mb-4">
                        {module.heading}
                      </h1>
                      <p className="text-lg mb-6">{module.tagline}</p>
                      <a
                        href="#"
                        className="inline-block bg-black text-white py-2 px-4 rounded"
                      >
                        Our Initiatives
                      </a>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                      <ImageBox
                        image={module.image}
                        alt={`${module.image.alt}`}
                        classesWrapper="relative w-full h-auto object-cover"
                      />
                    </div>
                  </section>
                )
              case 'form':
                return (
                  <section className="p-8 lg:p-16">
                    {module.heading && (
                      <h2 className="mb-4 text-3xl font-bold">{module.heading}</h2>
                    )}
                    {module.tagline && (
                      <p className="mb-6 text-lg">{module.tagline}</p>
                    )}
                    <ContactForm />
                  </section>
                )
              default:
                console.error(`Unsupported module type ${module._type}`)
            }
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
