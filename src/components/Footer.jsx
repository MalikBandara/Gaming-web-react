import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const links = [
  { href: 'https://github.com/MalikBandara', icon: <FaGithub /> },
  {
    href: 'https://www.linkedin.com/in/malikbandara?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedinIn />,
  },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-sm">&copy; Malik Bandara 2025 All rights reserved</p>
        <div className="flex gap-4">
          {links.map(link => (
            <a
              
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-500 ease-in-out hover:text-white text-black text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a href="#privacy-policy" className="text-sm hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
  

export default Footer
