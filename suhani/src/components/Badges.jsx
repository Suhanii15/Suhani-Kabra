import React from 'react'
import { MoveDown } from 'lucide-react';

export default function Badges({ className = '' }) {
  return (
    <div className={`relative mt-6 min-h-24 w-72 ${className}`}>
      <div className="absolute top-0 left-0 z-10 -rotate-3 rounded-[40px] bg-[#A8D8F5] px-8 py-4 text-lg font-extrabold tracking-wide text-[#0A2A3D] shadow-md">
        FEATURED
      </div>
      <div className="absolute left-24 top-12 z-20 flex rotate-12 items-center gap-2 rounded-[40px] bg-[#F5A8C8] px-8 py-4 text-lg font-extrabold tracking-wide text-[#3D0A24] shadow-md">
        PROJECTS
        <MoveDown className="animate-bounce" />
      </div>
    </div>
  )
}