import React from 'react'
import Navbar from '../components/navbar.jsx'
import profileImg from '../assets/Photo.jpeg'
import {motion } from 'framer-motion'
import Badges from '../components/Badges.jsx'
import { Coffee } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { useState } from 'react'


const landingPage = () => {
    //for blocks
    const containerVariants ={
        hidden : {opacity : 0},
        visible :{
            opacity: 1,
            transition : {
                staggerChildren : 1.2 ,
                delayChildren : 1.1
            },
        },
    };
  const slideUp = {
    hidden: { y: 60 },
    visible: { y: 0, transition: { duration: 1.6, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  const pillHover = {
    scale: 1.05,
    rotate: -1,
    transition: { duration: 0.2 },
  };

  const [coords, setCoord]=useState({x : 0, y : 0});
  const [isHovered, setIsHovered]=useState(false);

  const handleMouseMove = (e) =>{
    setCoord({x : e.clientX, 
        y : e.clientY,
    });
  }

  //ccords will hav e

  return (
    <section className="min-h-screen bg-slate-950 bg-[#14141D] p-4 pt-24">
        {/* Background Pattern */}
        <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:60px_60px]" 
        aria-hidden="true"
      />

 <Navbar />
 {/* Main Content */}
      <div className="relative z-10 text-center mt-10">

        <motion.div 
  animate={{ y: [0, -8, 0] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  className="hidden xl:block absolute left-12 top-1/3 bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 px-4 py-2 rounded-xl shadow-xl -rotate-6"
>
  <Coffee  className="inline-block mr-2" />
  Fueled by Coffee & Design
</motion.div>



{/* headings - block-by-block slide up */}
<div className="flex flex-col items-center justify-center gap-2">
  {/* First line: Building + Scalable Software + & */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.35, delayChildren: 1.5 } },
    }}
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
  >
    <div className="overflow-hidden pb-1">
      <motion.span variants={slideUp} className="inline-block text-6xl font-semibold text-white tracking-wider">
        Building
      </motion.span>
    </div>
    <div className="overflow-hidden pb-1">
      <motion.span
        variants={slideUp}
        whileHover={pillHover}
        className="inline-block bg-pink-400 text-slate-900 rounded-full px-3 py-1 text-6xl font-semibold"
      >
        Scalable Software
      </motion.span>
    </div>
    <div className="overflow-hidden pb-1">
      <motion.span variants={slideUp} className="inline-block text-6xl font-semibold text-white tracking-wider">
        &
      </motion.span>
    </div>
  </motion.div>

  {/* Second line: Interactive Digital + Experiences */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.45, delayChildren: 2.5 } },
    }}
    className="flex flex-wrap items-center justify-center gap-x-3"
  >
    <div className="overflow-hidden pb-1">
      <motion.span variants={slideUp} className="inline-block text-6xl font-semibold text-white tracking-wider">
        Interactive Digital
      </motion.span>
    </div>
    <motion.span
      variants={slideUp}
      whileHover={pillHover}
      className="relative inline-block px-4 py-4 border border-zinc-700 bg-zinc-900 backdrop-blur-xs text-yellow-300 text-6xl font-semibold"
    >
      <div className="overflow-hidden pb-1">
        <motion.span variants={slideUp} className="inline-block">
          Experiences
        </motion.span>
      </div>
      <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
      <div className="absolute -bottom-5 -right-5 flex flex-col items-start select-none">
        <svg width="54" height="44" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
          <path d="M4.5 3V19.5L9.75 14.25H18.75L4.5 3Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M17 14V20M14 17H20" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </motion.span>
  </motion.div>

  <motion.div
  animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
  transition={{ repeat: Infinity, duration: 4 }}
  className="absolute top-28 right-0 bg-[#1E1E1E] border border-zinc-700 rounded-xl text-zinc-300 mx-4 px-4 py-2 shadow-xl"
>
  <Headphones  className="inline-block mr-2" />
  Probably Listening to Music
  
</motion.div>
</div>

{/* About Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 4, ease: 'easeOut' }}
  className="flex flex-row mt-0 items-center justify-center gap-8"
>
    <div className="relative inline-block cursor-none"  //hides curosr
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <img 
        src={profileImg}
        alt="Suhani Kabra" 
        className="w-[300px] h-[400px]  object-cover rounded-[50%_50%_60%_50%_/_40%_40%_60%_60%] sm:rounded-[60%_40%_40%_80%_/_60%_40%_80%_50%]" 
        />

        {isHovered && (
            <motion.span  className="fixed pointer-events-none z-50
               bg-pink-400
               rounded-full
               px-4
               py-2
               shadow-lg"
    style={{
        left: coords.x + 20,
        top: coords.y + 20,
    }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
    transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
    }}
            >
                HELLO :))
            </motion.span>
        )}
    </div>

    <div className="flex flex-col items-start gap-4 max-w-xl">
<h2 className="text-white text-left">
Hi, I am Suhani Kabra, a software developer and  tech enthusiast. I come up with strong problem solving skills in DSA and Competitive Programming.
I have hands on experience in building real-world projects based on Full Stack, Generative AI and  Machine Learning.
</h2>
<div className="relative inline-block group">
<motion.button variants={slideUp}
      whileHover={pillHover}
 className="rounded-full mt-4 font-semibold text-lg shadow-md bg-yellow-400 text-slate-900 px-3 py-2 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer" >
    View Resume
</motion.button>
 <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFD447" /* Matches your yellow button theme */
        strokeWidth="2.5"
        strokeLinecap="round"
        className="absolute -top-1 -right-2 pointer-events-none"
        // Dynamic Framer Motion Hover Effect
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 12 }}
      >
        {/* Left Line */}
        <line x1="6" y1="18" x2="10" y2="10" />
        {/* Middle Line */}
        <line x1="12" y1="18" x2="26" y2="6" />
        {/* Right Line */}
        <line x1="18" y1="18" x2="50" y2="10" />
      </motion.svg>
</div>
    </div>    

</motion.div>


<motion.div animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}>
    <Badges className="mt-0 mx-auto mr-0" />
</motion.div>



 </div>


   
    </section>
  )
}

export default landingPage