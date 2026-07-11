import React from 'react'
import Navbar from '../components/navbar'
import { useState} from 'react';
import { useEffect } from 'react';
import {motion} from 'framer-motion'

const resume = () => {
     const [activeSection, setActiveSection]=useState('resume');
      useEffect(()=>{
        const sections=document.querySelectorAll('#home, #projects, #resume');
    
        const observerOptions={
            root : null,  //uses viewPort window
         rootMargin: '-30% 0px -60% 0px', // Triggers when the section takes up the sweet-spot center of the screen
          threshold: 0,
        };
      
    
      const observerCallback=(entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
        });
      };
      
    
      const observer= new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach((section) => observer.observe(section));
    
      return () => observer.disconnect();
    }, []);

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
    hidden: { x: -40 },
    visible: { x: 0, transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  const pillHover = {
    scale: 1.05,
    rotate: -1,
    transition: { duration: 0.2 },
  };

  return (
    <div>
        <section className="min-h-screen bg-slate-950 bg-[#14141D] p-4 pt-24">
<Navbar activeSection={activeSection} /> 
            <div className="w-3/4 min-h-[70vh] bg-zinc-900 mt-10  ml-50
    border border-zinc-600 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row  gap-8 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

        <div className="flex flex-col gap-20 mt-10 ml-20 "> 
    <h1 className="font-bold text-lg bg-yellow-400 text-zinc-900 px-2 rounded-full py-2 px-3 flex items-center justify-center animate-entrance hover:bg-yellow-300  cursor-pointer">CODE</h1>
   <h1 className="font-bold text-lg bg-pink-300 text-zinc-900 px-2 rounded-full py-2 px-3 flex items-center justify-center animate-entrance-right hover:bg-pink-400  cursor-pointer">GROWTH</h1>
    <h1 className="font-bold text-lg bg-sky-300 text-zinc-900 px-2 rounded-full py-2 px-3 flex items-center justify-center animate-entrance hover:bg-sky-200  cursor-pointer">REPEAT</h1>
   </div>

   <div className="flex flex-col px-10 mx-20 mt-10" >
    <p className="text-white font-md">
      I'm a Computer Science student passionate about building scalable software and meaningful digital experiences.
       I enjoy developing full-stack applications, exploring AI and machine learning, and solving challenging problems through data structures
        and algorithms. Every project I take on is an opportunity to learn, improve, and create technology that delivers real value. With a mindset of continuous
         growth and curiosity,
       I'm always excited to tackle new challenges and build solutions that make an impact.
    </p>
    <div className="relative inline-block group">
<motion.button 
 variants={slideUp}
      whileHover={pillHover}
 className="rounded-full mt-20 font-semibold text-lg shadow-md bg-yellow-400 text-slate-900 px-3 py-2 
 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer" >
    Download Resume
</motion.button>
 
</div>
   </div>

   </div> 
            
        </section>
    </div>
  )
}

export default resume