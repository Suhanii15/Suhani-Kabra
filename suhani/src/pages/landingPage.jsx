import React from 'react'
import Navbar from '../components/navbar.jsx'
import profileImg from '../assets/Photo.jpeg'
import {motion } from 'framer-motion'
import Badges from '../components/Badges.jsx'
import { Coffee } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { useState } from 'react'
import ProjectCard from '../components/projectCard.jsx'
import Lecturely from '../assets/Lecturely.png'
import CodeDetector from '../assets/CodeDetector.png'
import SmartTravel from '../assets/SmartTravel.png'
import { useEffect } from 'react'
import MarqueeSection from '../components/Marquee.jsx'
import { MoveUpRight } from 'lucide-react';


const landingPage = () => {
const projectsData=[
    {
        id : 1,
        tag : "CODE-DETECTOR",
        title: "Github Repository Analyser",
        description:"Code Detector is a full-stack developer tool that analyzes public GitHub repositories and predicts which source files are most likely to contain defects Instead of relying only on static code analysis, it combines repository history, developer activity, and software engineering metrics with a Machine Learning model to estimate bug risk for every file.",
        githubUrl:"https://github.com/Suhanii15/Code-Detector.git",
        liveUrl :"https://drive.google.com/file/d/1UAneU2AuPUenUzsT-pQ5pw3ebxKvDU92/view",
      imageSrc: CodeDetector, 
      stickyTop: "top-[10vh]" 
    },
     {
        id : 2,
        tag : "SMART-TRAVEL",
        title: " AI Powered Collaborative Travel Planner",
        description:"SmartTravel is a full-stack AI-powered travel planning platform that helps users create personalized itineraries, estimate trip budgets, collaborate with friends, and manage travel plans from a single dashboard Built using the MERN stack with Gemini AI integration, Google OAuth authentication, and real-time collaboration features.",
       githubUrl :"https://github.com/Suhanii15/Smart-Travel",
        liveUrl : "https://smart-travel-alpha.vercel.app/",
      imageSrc: SmartTravel, 
      stickyTop: "top-[14vh]" 
    },
     {
        id : 3,
        tag : "Lecturely",
        title: "Get Structured Notes",
        description:"Lecturely is a full-stack web application that helps students convert recorded lectures into structured, editable study notes. It focuses on productivity, clarity, and usability, allowing users to manage lectures, view generated notes, highlight important parts, and export notes in multiple formats.",
         githubUrl:"https://github.com/Suhanii15/Lecturely",
         liveUrl : "https://lecturely-wheat.vercel.app/",
      imageSrc: Lecturely, 
      stickyTop: "top-[18vh]" 
    }
]

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

  const [activeSection, setActiveSection]=useState('home');
  useEffect(()=>{
    const sections=document.querySelectorAll('#home, #projects');

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


  return (
    <div className="scroll-smooth">
    <section id="home"
     className="min-h-screen bg-slate-950 bg-[#14141D] p-4 pt-24">
        {/* Background Pattern */}
        <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:60px_60px]" 
        aria-hidden="true"
      />

 <Navbar activeSection={activeSection} />
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
 className="rounded-full mt-4 font-semibold text-lg shadow-md bg-yellow-400 text-slate-900 px-3 py-2 
 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer" >
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
  }}
  onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior : "smooth"})}>
    
    <Badges 
     className="mt-0 mx-auto mr-0 hover:cursor-pointer" />
    
</motion.div>



 </div>
    </section>
    {/* marks the ending of first section of our landing page*/}

     <section id="projects"
     className="relative h-[300vh] px-4 bg-slate-950 bg-[#14141D] md:px-8 py-12 flex flex-col gap-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

       
      </section>
      <section  className="relative min-h-screen px-4 bg-slate-950 bg-[#14141D] md:px-8 py-12 flex flex-col gap-12">
        <a href="https://github.com/Suhanii15"
         target="_blank"
  rel="noopener noreferrer">
       <button className="bg-yellow-400 text-lg font-semibold w-40 rounded-full px-3 py-3 mx-160 mt-3 hover:cursor-pointer tracking-wider">
            More Projects
        </button>
        </a>

        <MarqueeSection />

      </section>

      <footer className="w-full border-t border-zinc-800 bg-[#14141D] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">

          {/* Lets connect section */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <h2 className="text-lg font-semibold text-yellow-300">Have Something in Mind?</h2>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Always down to talk code, collaborate on open-source projects, or grab a virtual coffee. Drop a message!
            </p>
            <button className="cursor-pointer rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-md transition-colors duration-300 hover:bg-yellow-300">
              Let's Connect
            </button>
          </div> 

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Links</h3>
            <a href="https://www.linkedin.com/in/suhani-kabra-aab411315/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-yellow-300">
              LinkedIn
              <MoveUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </a>
            <a href="https://github.com/Suhanii15" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-yellow-300">
              GitHub
              <MoveUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </a>
            <a href="https://leetcode.com/u/suhanii_15/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-yellow-300">
              LeetCode
              <MoveUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </a>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Suhani Kabra. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default landingPage