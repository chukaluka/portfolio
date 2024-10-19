"use client";
import React from 'react'
import Image from 'next/image';
import advice from '../assets/advice.png';
import tracker from '../assets/tracker.png'
import portfolio from '../assets/portfolio.png'
import cv from '../assets/cv.png'
import revent from '../assets/revent.png'
import { motion } from "framer-motion"



export default function Portfolio() {
  return (
    <motion.div
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}}
    className='flex flex-col text-center justify-center text-white/70 mt-44 max-w-[600px] md:max-w-[950px] mx-auto'>
      <div>
        <h1 className='text-4xl md:text-8xl font-bold pb-2'>Portfolio</h1>
        <h1 className='text-lg md:text-xl text-center'>Some of the works I have done</h1>
      </div>

      <motion.div
        initial={{opacity: 0, y: 75}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.25}}
        className='flex flex-col md:flex-row w-[400px] md:w-full items-center space-x-4 mt-20'>
        <div className='flex-1 p-4 text-white/70 text-left'>
          <h1 className='text-6xl pb-3'>01</h1>
          <h1 className='text-3xl pb-3 text-white'>Location Tracker</h1>
          <h1 className='pl-4 text-sm pb-5'>This web app tracks and stores users' real-time GPS coordinates which can also be useful for geographic data collecting, route optimization, and personal safety</h1>
          <h1 className='font-bold text-orange-500'> React, Tailwindcss, React-leaflet, Supabase </h1>
          <div className='border-b pt-2 max-w-[200px]'></div>
          <div className='pb-5 md:pb-0'>
            <a href="https://tracker-location.vercel.app/" className=' text-sm text-white'>Link</a>
            <a href="https://github.com/chukaluka/tracker" className=' pl-5 text-sm text-white'>Git</a>
          </div>
        </div>
        <div className='flex-1'>
          <Image
            src={tracker}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 75}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.25}}
        className='flex flex-col md:flex-row-reverse w-full items-center space-x-4 mt-20'>
        <div className='flex-1'>
            <Image
              src={portfolio}
            />
          </div>
        <div className='flex-1 p-4 text-white/70 text-left'>
          <h1 className='text-6xl pb-3'>02</h1>
          <h1 className='text-3xl pb-3 text-white'>Portfolio Site</h1>
          <h1 className='pl-4 text-sm pb-5'>Built a portfolio site where anuone can know a little about me, some of the works I've done and possibly contact me for works. It just to showcase site</h1>
          <h1 className='font-bold text-orange-500'> Next, Tailwindcss, Framer motion </h1>
          <div className='border-b pt-2 max-w-[200px]'></div>
          <div>
            <a href="#" className=' text-sm text-white'>Link</a>
            <a href="#" className='pl-5 text-sm text-white'>Git</a>
          </div>
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.25}}
      className='flex flex-col md:flex-row w-full items-center space-x-4 mt-20'>
        <div className='flex-1 p-4 text-white/70 text-left'>
          <h1 className='text-6xl pb-3'>03</h1>
          <h1 className='text-3xl pb-3 text-white'>Advice Generator App</h1>
          <h1 className='pl-4 text-sm pb-5'>Styling plus advice API and you have this web app. With the push of the die, randomly generated advice would be displayed. You can do this as many times as you like</h1>
          <h1 className='font-bold text-orange-500'> React, Tailwindcss, Advice api</h1>
          <div className='border-b pt-2 max-w-[200px]'></div>
          <div>
            <a href="https://advice-app-001.netlify.app/" className=' text-sm text-white'>Link</a>
            <a href="https://github.com/chukaluka/Advice-generator-app" className='pl-5 text-sm text-white'>Git</a>
          </div>
        </div>
        <div className='flex-1'>
          <Image
            src={advice}
          />
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.25}}
      className='flex flex-col md:flex-row w-full items-center space-x-4 mt-20'>
        <div className='flex-1'>
            <Image
              src={cv}
              width='200'
            />
          </div>
        <div className='flex-1 p-4 text-white/70 text-left'>
          <h1 className='text-6xl pb-3'>04</h1>
          <h1 className='text-3xl pb-3 text-white'>CV App</h1>
          <h1 className='pl-4 text-sm pb-5'>A basic mobile app where users can create their cv and also generate as pdf to be stored on their devices or shared </h1>
          <h1 className='font-bold text-orange-500'> React Native, Expo print, Expo sharing </h1>
          <div className='border-b pt-2 max-w-[200px]'></div>
          <div>
            <a href="#" className=' text-sm text-white'>Apk</a>
            <a href="https://github.com/chukaluka/CV-App" className='pl-5 text-sm text-white'>Git</a>
          </div>
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.25}}
      className='flex flex-col md:flex-row w-full items-center space-x-4 mt-20'>
        <div className='flex-1 p-4 text-white/70 text-left'>
          <h1 className='text-6xl pb-3'>05</h1>
          <h1 className='text-3xl pb-3 text-white'>Revent technologies</h1>
          <h1 className='pl-4 text-sm pb-5'>A simple website design with styling</h1>
          <h1 className='font-bold text-orange-500'> React, Tailwindcss</h1>
          <div className='border-b pt-2 max-w-[200px]'></div>
          <div>
            <a href="https://design-ravent.vercel.app/" className=' text-sm text-white'>Link</a>
            <a href="https://github.com/chukaluka/design-task" className='pl-5 text-sm text-white'>Git</a>
          </div>
        </div>
        <div className='flex-1'>
          <Image
            src={revent}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
