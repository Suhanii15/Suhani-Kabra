import react from 'react'
import { Radio } from 'lucide-react';
import { Link } from 'lucide-react';
import { useState } from 'react';
import {motion} from 'framer-motion';

const projectCard = ({project}) => {
     const [coords, setCoord]=useState({x : 0, y : 0});
      const [isHovered, setIsHovered]=useState(false);
    
      const handleMouseMove = (e) =>{
        setCoord({x : e.clientX, 
            y : e.clientY,
        });
      }
  return (
    <div className={`sticky ${project.stickyTop} w-full min-h-[70vh] bg-zinc-900
    border border-zinc-600 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>

        <div className="flex-1 flex-col justify-center order-2 md:order-1">
<div className="inline-block self-start bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 font-mono">
    {project.tag}
</div>
{/* Project Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>
  {/* Badges Layout */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-s md:text-sm font-medium px-5 py-2.5 rounded-full bg-[#F3A0CD] text-black hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <span>Live Link</span>
              <Radio />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-s md:text-sm font-medium px-5 py-2.5 rounded-full bg-[#FAD054] text-black hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <span>Github Link</span>
             <Link />
            </a>
          )}
        </div>

        </div>
 <div className="flex-1 w-full h-64 md:h-[45vh] bg-white rounded-2xl md:rounded-[24px] overflow-hidden flex items-center justify-center p-4 order-1 md:order-2 shadow-inner relative inline-block"
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full cursor-pointer"
        >
          <img
            src={project.imageSrc}
            alt={`${project.title} Preview`}
            className="w-full h-full object-contain object-center rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </a>
      ) : (
        <img
          src={project.imageSrc}
          alt={`${project.title} Preview`}
          className="w-full h-full object-contain object-center rounded-lg"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      {isHovered && (
            <motion.span  className="fixed pointer-events-none z-50
               bg-yellow-400
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
            VIEW!!
            </motion.span>
        )}
      </div>


    </div>
  )
}

export default projectCard