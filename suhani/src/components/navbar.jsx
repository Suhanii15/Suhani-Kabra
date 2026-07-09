import React from 'react'
import { Smile } from 'lucide-react';


const Navbar = ({activeSection}) => {
  return (
    <nav className="flex items-center justify-between rounded-3xl fixed top-0 left-0 right-0 z-50 mx-20 my-5 bg-slate-900 px-6 py-4 text-white shadow-md">
      <div className="text-3xl font-signature text-yellow-300 tracking-widest">Suhani</div>
      <div className="flex gap-8">
        <a href="#home" 
        className={` transition-colors duration-300 ${activeSection === 'home' ? 'text-blue-400' : 'text-blue-300'} `}>Home</a>
        <a href="#about"  className={` transition-colors duration-300 ${activeSection === 'projects' ? 'text-blue-400' : 'text-blue-300'} `}>Projects</a>
        <a href="#contact" className="text-blue-300 hover:text-blue-400">Resume</a>
        <a href="#about" className="text-blue-300 hover:text-blue-400">About Me</a>
      </div>
      <div className=" flex flex-row bg-yellow-400 font-bold cursor-pointer text-slate-900 rounded-full px-3 py-1 hover:bg-yellow-300">
        Contact Me
        <Smile className="animate-spin ml-2" />
      </div>
    </nav>
  )
}

export default Navbar