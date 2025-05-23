import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'

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
            <p className="mt-3 max-w-64 text-xs  md:text-base ">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
const Features = () => {
  return (
    <section className="bg-black pb-52 ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer{' '}
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expending universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="../src/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app , turning your activities across web2 and web3 games into a rewarding adventure "
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
          <div className="bento-tilt-1 row-span-1 md:col-span-1  md:row-span-2">
            <BentoCard
              src="../src/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired metaverse, where you can create and share your own adventures with the world"
            />
          </div>

          <div className="bento-tilt-1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
            <BentoCard
            src="../src/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A cross-platform metagame app , turning your activities across web2 and web3 games into a rewarding adventure "
            />
          </div>

          <div className="bento-tilt-1 row-span-1 ms-14 md:col-span-1 md:me-0 ">
            <BentoCard
            src="../src/videos/feature-4.mp4"
              title={
                <>
                  azu<b>r</b>e
                </>
              }
              description="A cross-platform metagame app , turning your activities across web2 and web3 games into a rewarding adventure "
            />
          </div>

          <div className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                <h1 className='bento-title special-font max-w-64 text-black'>M<b>o</b>re co<b>m</b>ing soon </h1>
                <TiLocationArrow className='m-5 scale-[5] self-end'/>
            </div>

          </div>

          <div className='bento-tilt-2'>
            <video src="../src/videos/feature-5.mp4" 
            loop 
            muted 
            autoPlay 
            className=' size-full object-cover object-center'/>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
