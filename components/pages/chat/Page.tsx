import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div>
      <div className="mb-14">
        {/* Header */}
        <Header title={title} description={overview} />

        <iframe
          title="Chat about Monsters!"
          src="https://www.chatbase.co/chatbot-iframe/yQaFv9BWnN1hh3YuSM4Kl"
          width="100%"
          style={{ height: '100%', minHeight: '700px' }}
          frameBorder={0}
        ></iframe>
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default Page
