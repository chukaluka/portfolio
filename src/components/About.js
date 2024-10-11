"use client";
import React from 'react'
import Image from 'next/image';
import pic from '../assets/pic.png'

export default function About() {
  return (
    <div className='text-white/70 pl-40 pr-40 '>
        <div className='text-center'>
            <h1>About Me</h1>
        </div>

        <div className='flex justify-between'>
            <div>
                <Image
                    src={pic}
                    className='h-11 w-11'
                />
            </div>
            <div>
                ;lmd,.mdd.,.,d
            </div>
        </div>
    </div>
  )
}
