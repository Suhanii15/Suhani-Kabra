import React from 'react'
import Navbar from '../components/navbar'
import { useState} from 'react';
import { useEffect } from 'react';
import {motion} from 'framer-motion'
import Links from '../components/Links'
import { MoveDown } from 'lucide-react';



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

  const tech=[
    "React" , "Express.js", "Fast API", "MongoDB" ,"MySQL", "PostgreSQL", "System Design", "Python", "Scikit-Learn"
  ]
const personal=[
    "Goal Oriented" , "Creative", "Learner", "Problem Solving" ,"Time Management", "Critical Thinking", "Team Collaboration", "Clear Communication", "Adaptability"
  ]

  return (
    <div>
        <section className="min-h-screen bg-slate-950 bg-[#14141D] p-4 pt-24">
<Navbar activeSection={activeSection} /> 
            <div className="w-3/4 min-h-[70vh] bg-zinc-900 mt-10  ml-50
    border border-zinc-600 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row  gap-8 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

        <div className="flex flex-col items-center gap-6 mt-10 ml-20"> 
    <h1 className="font-bold text-lg bg-yellow-400 text-zinc-900 px-3 rounded-full py-2 min-w-[120px] h-[48px] flex items-center justify-center animate-entrance hover:bg-yellow-300 cursor-pointer">CODE</h1>
    <MoveDown className="text-zinc-500" size={28} strokeWidth={2.5} />
   <h1 className="font-bold text-lg bg-pink-300 text-zinc-900 px-3 rounded-full py-2 min-w-[120px] h-[48px] flex items-center justify-center animate-entrance-right hover:bg-pink-400 cursor-pointer">GROWTH</h1>
    <MoveDown className="text-zinc-500" size={28} strokeWidth={2.5} />
    <h1 className="font-bold text-lg bg-sky-300 text-zinc-900 px-3 rounded-full py-2 min-w-[120px] h-[48px] flex items-center justify-center animate-entrance hover:bg-sky-200 cursor-pointer">REPEAT</h1>
   </div>

   <div className="flex flex-col px-10 mx-20 mt-10" >
    <motion.p
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.6, delay: 0.6, ease: 'easeOut' }}
      className="text-white font-md"
    >
      I'm a Computer Science student passionate about building scalable software and meaningful digital experiences.
       I enjoy developing full-stack applications, exploring AI and machine learning, and solving challenging problems through data structures
        and algorithms. Every project I take on is an opportunity to learn, improve, and create technology that delivers real value. With a mindset of continuous
         growth and curiosity,
       I'm always excited to tackle new challenges and build solutions that make an impact.
    </motion.p>
    <div className="relative inline-block group">
      <a href="https://drive.google.com/file/d/1bBqhUq30FwYVdH8t2hU-xtgSTDLJdZYj/view?usp=drive_link">
<motion.button 
 variants={slideUp}
      whileHover={pillHover}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
 className="rounded-full mt-20 font-semibold text-lg shadow-md bg-yellow-400 text-slate-900 px-3 py-2 
 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer" >
    Download Resume
</motion.button>
 </a>
</div>
   </div>

   </div> 
            
        </section>

        <section  className="min-h-screen bg-slate-950 bg-[#14141D] p-4 pt-24 ">
          <div className="w-3/4 min-h-[30vh] bg-zinc-900 mt-2  ml-50
    border border-zinc-600 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row  gap-10 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<button className="tracking-wider text-zinc-900 rounded-full h-10 px-3 py-2 bg-sky-200 font-semibold text-lg">
  EDUCATION
</button>
<div calssName="flex flex-col gap-3">
<h1 className="text-white font-bold text-2xl tracking-wider ">B.Tech in Computer Science And Engineering</h1>
<h3 className="text-white font-semibold text-1xl tracking-wider mt-2">Indian Institute Of Information Technology, Vadodara</h3>
<button className="tracking-wider text-zinc-900 rounded-full h-10 px-2 py-2 bg-pink-300 font-semibold text-lg mt-4">
  Batch 2024-2028
</button>
</div>



</div>

<div className="flex flex-row m-4 pt-14 gap-3 ml-9">
  <div className="w-3/4 min-h-[50vh] bg-zinc-900 mt-2  
    border border-zinc-600 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-col  gap-10 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<button className="tracking-wider text-zinc-900 rounded-full h-10 px-3 w-1/2 py-2 bg-sky-200 font-semibold text-lg">
  TECHNICAL SKILLS
</button>
 <div class="flex flex-wrap gap-3  p-6">
      {tech.map((tool) => (
        <button key={tool} class="rounded-full border border-zinc-800  px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:border-neutral-700">
          {tool}
        </button>
      ))}
    </div>
  </div>

  <div className="w-3/4 min-h-[50vh] bg-zinc-900 mt-2  
    border border-zinc-600 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-col  gap-10 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<button className="tracking-wider text-zinc-900 rounded-full h-10 px-3 w-1/2 py-2 bg-sky-200 font-semibold text-lg">
  PERSONAL SKILLS
</button>
 <div class="flex flex-wrap gap-3  p-6">
      {personal.map((tool) => (
        <button key={tool} class="rounded-full border border-zinc-800  px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:border-neutral-700">
          {tool}
        </button>
      ))}
    </div>
  </div>
   

  </div>
 

        </section>

        <footer className="w-full border-t border-zinc-800 bg-[#14141D] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">

          {/* Lets connect section */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <h2 className="text-lg font-semibold text-yellow-300">Have Something in Mind?</h2>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Always down to talk code, collaborate on open-source projects, or grab a virtual coffee. Drop a message!
            </p>
            <a href="mailto:suhanikabra931@gmail.com">
            <button className="cursor-pointer rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-md transition-colors duration-300 hover:bg-yellow-300">
              Let's Connect
            </button>
            </a>
            <a  className="text-sm text-zinc-500 transition-colors hover:text-pink-300 cursor-pointer">
              +91 85290 12182
            </a>
          </div> 

          {/* Links Section */}
          <Links />

        </div>

        <div className="mt-8 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Suhani Kabra. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default resume