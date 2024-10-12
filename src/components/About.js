"use client";
import React from 'react'
import Image from 'next/image';
import pic from '../assets/picpic.png'
import Vector2 from '../assets/Vector2.svg'

export default function About() {
  return (
    <div className='text-white/70 pl-28 pr-28 pt-20 mt-16'>
        <div className='text-center font-bold text-8xl'>
            <h1>About Me</h1>
        </div>

        <div className='flex w-full items-center space-x-4'>
            <div className='relative flex-1'>
                <Image
                     src={Vector2} 
                     className="absolute inset-0 w-full h-full z-0 object-contain mt-16" 
                     
                />

                <Image
                    src={pic}
                    className='a-img relative z-10'
                />
            </div>
            <div className='flex-1 p-4'>
                <h1 className='text-white/70'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h1>
            </div>
        </div>
    </div>
  )
}
