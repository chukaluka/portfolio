"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function Tools() {
  return (
    <motion.div
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}}
    className='flex justify-center text-center text-white/70 mt-44 max-w-[300px] md:max-w-[800px] mx-auto'>
      <div>
        <h1 className='text-6xl md:text-8xl font-bold pb-2'>Tools</h1>
        <h1 className='text-lg md:text-xl'>Some of the few technologies i've worked with and still use:</h1>
        <div className='border-b pt-2'></div>
        <h1 className='pt-10' style={{ wordSpacing: "20px" }}>HTML CSS JAVASCRIPT REACTJS NEXTJS <span style={{ wordSpacing: "0" }}>REACT NATIVE</span> TAILWINDCSS GIT SUPABASE PYTHON MYSQL <span style={{ wordSpacing: "0" }}>FRAMER MOTION</span> </h1>
      </div>
    </motion.div>
  )
}
