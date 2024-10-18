"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        } 

    }

  return (
    <motion.div
    initial={{opacity: 0, x: 75}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
    transition={{duration: 1, delay: 0.25}}
     className='text-white/70 pt-3'>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center justify-center px-4 py-2 mx-auto max-w-[600px]'>
            <ul className='flex flex-row space-x-8 p-4 '>
                <li>
                    <Link href='#about' className='hover:text-orange-500 transition duration-300'>About Me</Link>
                </li>
                <li>
                    <Link href='#portfolio' className='hover:text-orange-500 transition duration-300'>Portfolio</Link>
                </li>
                <li>
                    <Link href='#tools' className='hover:text-orange-500 transition duration-300'>Tools</Link>
                </li>
                <li>
                    <a href='#contact' className='group'>
                        <h1 className='text-lg font-bold text-white/70 cursor-pointer'>Contact Me</h1>
                        <div className='relative'>
                            <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full'></div>
                            <div className='mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full'></div>
                        </div>
                    </a>
                </li>
            </ul>       
        </div>

        {/* Mobile Menu */}
        <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50'>
            { nav ? <IoMdClose size={30} /> : <IoMenuSharp size={30}/>}
        </div>
        
        <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            
            className='fixed left-0 top-0 w-full z-40 bg-black/90'
        >
            <ul  className='text-4xl font-semibold my-24 text-center space-y-8'>
                <motion.li
                    whileTap={{scale: 0.9}}
                >
                    <Link  href='#about'>About Me</Link>
                </motion.li>
                <motion.li
                    whileTap={{scale: 0.9}}
                >
                    <Link  href='#portfolio'>Portfolio</Link>
                </motion.li>
                <motion.li
                    whileTap={{scale: 0.9}}
                >
                    <Link  href='#tools'>Tools</Link>
                </motion.li>
                <motion.button
                      whileTap={{ scale: 0.9, rotate: "2.5deg" }}
                      className='rounded-xl text-white cursor-pointer p-3 bg-orange-500'
                >
                    <Link  href='#contact'>Contact</Link>
                </motion.button>
            </ul>
        </motion.div>
        
    </motion.div>
  )
}
