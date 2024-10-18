import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Tools from '@/components/Tools'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-black'>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Tools/>
      <Contact/>
      <Footer/>
    </div>
  )
}
