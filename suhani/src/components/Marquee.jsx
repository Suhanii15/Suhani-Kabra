import React from 'react'
import {motion} from 'framer-motion'
import {Flower, Sparkle, SmilePlus} from 'lucide-react'


    const row1=[
        "Competitive Programming",
        "Machine Learning",
        "Open Source",
        "System Design",
        "Always Learning"

    ]

    const row2=[
        "Problem Solving",
        "Scalable Software",
        "Building Products",
        "Curious Mind",
        "Generative AI"
    ]
    const colors=[
        "bg-yellow-400 text-slate-900",
        "bg-pink-300 text-slate-900",
        "bg-sky-300 text-slate-900",
    ]
    const icons = [
  <Sparkle size={24} className="text-sky-300" />,
  <Flower size={24} className="text-yellow-300" />,
  <SmilePlus size={24}  className="text-pink-300" />,
];

function Pill({text, index}){
    return (
        <motion.div
           
            className={`rounded-full px-3 py-1 text-zinc-900 text-md ${colors[index % colors.length]}`}>
                {text}
        </motion.div>
    )
}

function Marquee({items, reverse=false, duration}){
    const content=[...items,...items];

    return (
<div className="w-full overflow-hidden">
    <div
      className="flex w-max items-center gap-10 marquee-track "
      style={{
        animation: `marquee ${duration}s linear infinite`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
{content.map((item, index)=>(
        <div key={index} className="flex items-center gap-10 group-hover:[animation-play-state:paused]">
           <Pill text={item} index={index} />
          <div>
            {icons[index % icons.length]}
          </div>
          <div className="rounded-full px-3 py-1 bg-zinc-900 border border-zinc-600" />
        </div>
    ))}
    </div>
</div>
    )
}


export default function MarqueeSection(){
    return (
         <section className="py-20 space-y-8">
      <Marquee
        items={row1}
        duration={28}
      />

      <Marquee
        items={row2}
        reverse
        duration={28}
      />
    </section>
    )
}