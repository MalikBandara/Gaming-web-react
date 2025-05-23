import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('')
  const itemRef = useRef()

  const handleMouseMove = e => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()
    const relativeX = (e.clientX - left) / width
    const relativeY = (e.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 50
    const tiltY = (relativeX - 0.5) * -50

    const newTransformStyle = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
    setTransformStyle(newTransformStyle)
  }

  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expending universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app , turning your activities across web2 and web3 games into a rewarding adventure "
          />
        </BentoTilt>

        {/* ✅ Responsive Grid Layout Fixes Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-7 auto-rows-fr">
          <BentoTilt className="bento-tilt-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired metaverse, where you can create and share your own adventures with the world"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt-1">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A cross-platform metagame app , turning your activities across web2 and web3 games into a rewarding adventure "
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt-1">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  <b>a</b>zu<b>r</b>e
                </>
              }
              description="A cross-platform metagame app , turning your activities across web2 and web3 games into a rewarding adventure "
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt-2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing soon
              </h1>
              <TiLocationArrow
                className="absolute right-5 top-5 text-black-50"
                size={70}
              />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt-2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features
