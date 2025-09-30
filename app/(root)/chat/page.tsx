export default function Page() {
  return (
    <div>
      <div className="mb-14">
        <iframe
          title="Chat about Monsters!"
          src="https://www.chatbase.co/chatbot-iframe/yQaFv9BWnN1hh3YuSM4Kl"
          width="100%"
          style={{
            height: '100%',
            minHeight: '700px',
            border: '1px solid #CCC',
            borderRadius: '12px',
          }}
          frameBorder={0}
        ></iframe>
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
