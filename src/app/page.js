import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-black'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}
