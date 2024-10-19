"use client";
import React from 'react'
import Image from 'next/image';
import pic from '../assets/picpic.png'
import Vector2 from '../assets/Vector2.svg'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div 
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}}
    className='text-white/70 max-w-[400px] md:max-w-[900px] mx-auto pt-20 mt-24'>
        <div className='text-center font-bold text-6xl md:text-8xl'>
            <h1>About Me</h1>
        </div>

        <div className='flex w-full items-center space-x-4'>
            <div className='relative flex-1 hidden md:flex'>
                <Image
                     src={Vector2} 
                     className="absolute inset-0 w-full h-full z-0 object-contain mt-16" 
                     
                />

                <Image
                    src={pic}
                    className='a-img relative z-10'
                />
            </div>
            <div className=' flex-1 p-4 '>
                <h1 className='text-white/70'>
                    A little about me.<br/> I'm just a guy who got into coding because i thought it was cool to write codes and confuse people, I felt like a hacker. Unserious at first but I picked challenge from my close friends and people around me. I became self-taught and interned in different companies. I dabble a little in blockchain technology but I mostly code frontend and mobile apps. I am an AI and Robotics enthusiast, so that could be a future plan. Oh yeah, I also bagged a degree in computer science.<br/> 
                    When I'm not coding, I'm either on the keyboard, watching a movie, playing football or strolling. There's more to these though, but i straight up just take leisure when I'm not coding.
                </h1>
            </div>
        </div>
    </motion.div>
  )
}
