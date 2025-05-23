import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button.jsx'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import { FiMenu, FiX } from 'react-icons/fi' // Added for mobile menu toggle

const navItems = [
  { label: 'Nexus', href: '#nexus' },
  { label: 'Vault', href: '#vault' },
  { label: 'Prologue', href: '#prologue' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navContainerRef = useRef(null)
  const audioElementRef = useRef(null)
  const { y: currentScrollY } = useWindowScroll()

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add('floating-nav')
    }
    setLastScrollY(currentScrollY)
  }, [currentScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : '-100%',
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])

  const toggleAudioIndicator = () => {
    setIsAudioPlaying(prev => !prev)
    setIsIndicatorActive(prev => !prev)
  }

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
    }
  }, [isAudioPlaying])

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between px-4 py-2">
          {/* Left side: Logo and Products */}
          <div className="flex items-center gap-4">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 hidden md:flex items-center justify-center gap-1"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-50"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="nav-hover-btn text-sm"
              >
                {item.label}
              </a>
            ))}

            <button
              className="flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map(bar => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? 'active' : ''
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="flex items-center space-x-1 mt-2"
                onClick={toggleAudioIndicator}
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map(bar => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isIndicatorActive ? 'active' : ''
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar
