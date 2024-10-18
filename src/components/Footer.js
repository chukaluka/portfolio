"use client";
import React from 'react'
import { FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'


export default function Footer() {
  return (
    <motion.div 
    className='mt-12 text-white/70 py-8 max-w-[500px] md:max-w-[800px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
      
      <h1 className='text-2xl font-bold'> Chuka David</h1>

      <div className='flex space-x-6 mt-4'>
        <a href="https://x.com/chuka_luka" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaTwitter size={24}/>
        </a>
        <a href="https://linkedin.com/in/chukwukaokonkwo" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaLinkedin size={24}/>
        </a>
        <a href="https://github.com/chukaluka" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaGithub size={24}/>
        </a>
        <a   href="https://wa.me/2348154822682?text=Hello%20I%20would%20like%20to%20get%20in%20touch%20with%20you" 
            target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaWhatsapp size={24}/>
        </a>
      </div>
    </motion.div>
  )
}
