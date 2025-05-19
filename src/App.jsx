import { useState } from 'react'
import Hero from './components/Hero.jsx'
function App() {
  return (
    <>
      <main className='relative min-h-screen w-screen overflow-hidden-x-hidden '>
        <Hero />
        <section className='z-0 min-h-screen bg-blue-500'/>
      </main>
    </>
  )
}

export default App
