import React, { useRef } from 'react'
import { useState } from 'react'

// use rafce to create short cut way to functional component

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4

  const nextVideoRef = useRef(null)

  const handelVideoLoad = () => {
    setLoadedVideos(prev => prev + 1)
  }

  const upComingVideoIndex = (currentIndex % totalVideos) + 1

  const handelMiniVideoClick = () => {
    setHasClicked(true)
    setCurrentIndex(upComingVideoIndex)
  }

  const getVideoSrc = index => `../src/videos/hero-${index}.mp4`

  return (
    <>
      <div className="relative h-dvh overflow-x-hidden w-screen bg-amber-300">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 "
        >
          <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
              <div
                onClick={handelMiniVideoClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(upComingVideoIndex)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center "
                  onLoadedData={handelVideoLoad}
                />
              </div>
            </div>

            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              onLoadedData={handelVideoLoad}
            />

            <video
              src={getVideoSrc(
                currentIndex === totalVideos - 1 ? 1 : currentIndex,
              )}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center "
              onLoadedData={handelVideoLoad}
            ></video>
          </div>

          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            G<b>a</b>ming{' '}
          </h1>

          <div className="absolute left-0 top-0 z-40 size-full ">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className='special-font hero-heading text-blue-100'>
                redefi<b>n</b>e
              </h1>

              <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter the Metagame Layer <br />Unleash the play Economy  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
