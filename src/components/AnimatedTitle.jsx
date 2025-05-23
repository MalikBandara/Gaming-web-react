import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AnimatedTitle = ({ title = '', containerClass = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        }
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0)rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title ${containerClass}`}
    >
      {typeof title === 'string' && title.split('<br/>').map((line, lineIdx) => (
        <div key={lineIdx} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
          {line.split('').map((char, charIdx) => (
            <span key={charIdx} className='animated-word' dangerouslySetInnerHTML={{ __html: char }} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnimatedTitle