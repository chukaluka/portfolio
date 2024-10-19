"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import laptop3d from '../assets/laptop3d.png';
import lightening from "../assets/icon2.png";

// Helper function to generate random values within a range
const getRandomValue = (min, max) => Math.random() * (max - min) + min;

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Frontend", "Mobile"];

  // Store random values for floating effect in state to avoid re-calculating on each render
  const [randomValues, setRandomValues] = useState({
    laptopX: [0, getRandomValue(-30, 30), getRandomValue(-30, 30), 0],
    laptopY: [0, getRandomValue(-20, 20), getRandomValue(-20, 20), 0],
    lightX: [0, getRandomValue(-30, 30), getRandomValue(-30, 30), 0],
    lightY: [0, getRandomValue(-20, 20), getRandomValue(-20, 20), 0],
  });

  // Cycle through the texts with a timed interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Switch text every 2 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  // Define the popping animation variants
  const popUpVariant = {
    hidden: { scale: 0, opacity: 0 }, // Text starts hidden
    visible: {
      scale: 1, // Text pops up to full size
      opacity: 1, // Text becomes fully visible
      transition: {
        duration: 0.5, // Duration of the pop-up effect
        ease: "easeInOut", // Smooth transition
      },
    },
    exit: {
      scale: 0, // Shrink text back down
      opacity: 0, // Fade text out
      transition: {
        duration: 0.5, // Duration of the exit effect
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div 
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 1, delay: 0.25}}
    className="mt-16 py-14 relative overflow-clip">
      <div>
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I'm</h1>
          <h1 className="text-[#E48A57] ">Chuka</h1>
        </div>   

        {/* Laptop image floating */}
        <motion.div
          className="hidden md:block absolute left-[100px] top-[80px]"
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} 
          whileDrag={{ scale: 1.2 }}
          animate={{
            x: randomValues.laptopX,
            y: randomValues.laptopY,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src={laptop3d}
            height="200"
            width="200"
            alt="cursor"
            draggable="false"
          />
        </motion.div>

        {/* Lightening image floating */}
        <motion.div
          className="hidden md:block absolute right-[180px] top-[70px]"
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.2 }}
          animate={{
            x: randomValues.lightX,
            y: randomValues.lightY,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <Image
            src={lightening}
            height="85"
            width="85"
            alt="cursor"
            draggable="false"
            className=""
          />
        </motion.div>

        {/* Alternating Text with Pop-Up and Out Effect */}
        <div className="text-center text-lg mx-auto mt-8 text-white/80">
          <h1 className='pl-14 pr-14'>
            I am a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex} // Key to uniquely identify the changing text
                variants={popUpVariant} // Animation variants for pop-up effect
                initial="hidden" // Initial state is hidden
                animate="visible" // Visible state triggers when the text enters
                exit="exit" // Exit animation when the text leaves
                className="text-[#E48A57] font-bold"
              >
                {texts[textIndex]} {/* Alternating Text */}
              </motion.span>
            </AnimatePresence>{" "}
            developer, <br />
            focused on providing the best experience for users.
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
