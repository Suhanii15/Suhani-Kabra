import React from 'react'
import Navbar from '../components/navbar.jsx'
import profileImg from '../assets/Photo.jpeg'
import {motion } from 'framer-motion'
import Badges from '../components/Badges.jsx'

const landingPage = () => {
  return (
    <section className="min-h-screen bg-slate-950 bg-[#14141D]  p-4">
        {/* Background Pattern */}
        <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:60px_60px]" 
        aria-hidden="true"
      />

 <Navbar />
 {/* Main Content */}
      <div className="relative z-10 text-center mt-30">



{/* headingss */}
<div className="flex flex-col items-center justify-center gap-6 ">
        <h1 className="text-4xl font-semibold text-white mb-4 tracking-wider">
            Building <span className="bg-pink-400 text-slate-900 rounded-full px-3 py-1">Scalable Software</span> & 
        </h1>
        <h1 className="text-4xl font-semibold text-white tracking-wider">
            Interactive Digital <span className="relative inline-block px-4 py-4 border border-zinc-700 bg-zinc-900 backdrop-blur-xs text-yellow-300 ">Experiences
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border border-zinc-500 bg-[#14141D]" />
               <div className="absolute -bottom-5 -right-5 flex flex-col items-start select-none">
                <svg 
                  width="54" 
                  height="44" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="drop-shadow-md"
                >
                  <path 
                    d="M4.5 3V19.5L9.75 14.25H18.75L4.5 3Z" 
                    fill="#bae6fd" 
                    stroke="#0284c7" 
                    strokeWidth="1.5" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M17 14V20M14 17H20" 
                    stroke="#bae6fd" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </span>
            
        </h1>
</div>

{/* About Section */}
<div className="flex flex-row mt-15 items-center justify-center gap-12">
    <div>
        <img 
        src={profileImg}
        alt="Suhani Kabra" 
        className="w-64 h-64  object-cover"
        />
    </div>

    <div className="flex flex-col items-start gap-4 max-w-xl">
<h2 className="text-white text-left">
Hi, I am Suhani Kabra, a software developer and  tech enthusiast. I come up with strong problem solving skills in DSA and Competitive Programming.
I have hands on experience in building real-world projects based on Full Stack, Generative AI and  Machine Learning.
</h2>
<button className="rounded-full mt-4 font-semibold text-lg shadow-md bg-yellow-400 text-slate-900 px-3 py-2 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer" >
    View Resume
</button>
    </div>    

</div>


<div>
    <Badges className="mt-10 mx-auto mr-0" />
</div>



 </div>


   
    </section>
  )
}

export default landingPage