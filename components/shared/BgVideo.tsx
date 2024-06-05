'use client'

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

const plyrProps = {
  // source: undefined, // https://github.com/sampotts/plyr#the-source-setter
  // options: undefined, // https://github.com/sampotts/plyr#options
  // Direct props for inner video tag (mdn.io/video)
}

function BgVideo() {
  const [isClient, setIsClient] = useState(false)
  const [play, setPlay] = useState(true)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative w-full py-64 overflow-hidden">
      {isClient ? (
        <ReactPlayer
          url="https://www.youtube.com/embed/9z8ujpPgUjI?autoplay=1&loop=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1&playlist=9z8ujpPgUjI"
          playing={play}
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0 right-0 bottom-0"
        />
      ) : (
        <div className="absolute top-0 left-0" />
      )}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          Welcome to Our Site
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mt-4">
          Discover amazing content and join our community.
        </p>
        <button
          type="button"
          className="text-white"
          onClick={() => {
            setPlay((prev) => !prev)
          }}
        >
          {play ? 'pause' : 'play'}
        </button>
      </div>
    </div>
  )
}

export default BgVideo
