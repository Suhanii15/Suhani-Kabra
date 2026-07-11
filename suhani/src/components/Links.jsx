import React from 'react'
import {MoveUpRight} from 'lucide-react'

const Links = () => {
  return (
              <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Links</h3>
            <a href="https://www.linkedin.com/in/suhani-kabra-aab411315/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-blue-300">
              LinkedIn
              <MoveUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </a>
            <a href="https://github.com/Suhanii15" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-blue-300">
              GitHub
              <MoveUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </a>
            <a href="https://leetcode.com/u/suhanii_15/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-blue-300">
              LeetCode
              <MoveUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </a>
          </div>
  )
}

export default Links