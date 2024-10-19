"use client";
import React from 'react'
import Image from 'next/image';
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.div
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}}
    className='max-w-[330px] md:max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 mt-44 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
        
        <div className='flex justify-center items-center'>
            <ul className='space-y-4'>
                <li className='flex items-center'>
                    <Image
                        src={phone}
                        alt='phone'
                        className='h-[20px] md:h-[50px] w-auto'
                    />
                    <p className='text-sm md:text-xl'>+234 815 482 2682</p>
                </li>
                <li className='flex items-center'>
                    <Image
                        src={mail}
                        alt='mail'
                        className='h-[20px] md:h-[50px] w-auto '
                    />
                    <p className='text-sm md:text-xl'>chukwukaokonkwo86@gmail.com</p>
                </li>
            </ul>
        </div>

        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
            <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's Connect</h2>
            <p className='text-white/70 mb-6'>Send me a message</p>
            <form className='space-y-4' action='https://getform.io/f/bvrekdzb' method='POST'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <input type="text" name="name" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="Name"/>
                    <input type="phone" name="phone" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="Phone number"/>
                </div>
                <input type="email" name="email" className='bg-black/70 rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="Email"/>
                <textarea type='text' name='text' className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message...'/>
                <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className='bg-orange-600 hover:bg-black hover:text-orange-500 text-white/90 px-6 py-2 w-full font-semibold text-xl rounded-xl transition duration-500'>
                        Send Message
                </motion.button>
            </form>
        </div>
    </motion.div>
  )
}
