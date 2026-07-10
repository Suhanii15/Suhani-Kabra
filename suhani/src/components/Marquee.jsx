import React from 'react'
import {motion} from 'framer-motion'
import {Flower, Sparkle,SmilePlus} from 'lucide-react'


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
        "Gen AI"
    ]
    const colors=[
        "bg-yellow-400 text-slate-900",
        "bg-pink-300 text-slate-900",
        "bg-sky-300 text-slate-900",
    ]
    const icons = [
  <Sparkle size={24} className="text-pink-300" />,
  <Flower size={24} className="text-yellow-300" />,
  <SmilePlus size={10} fill="#FACC15" className="text-yellow-300" />,
];

function Pill({text, index}){
    return (
        <motion.div
            whileHover={{

                scale :1.08,
                y : -5,
                rotate : index % 2 == 0 ? -2 : 2, 

            }}
            className={`rounded-full px-3 py-1 text-zinc-900 text-md ${colors[index % colors.length]}`}>
                {text}
        </motion.div>
    )
}

function Marquee({items, reverse=false, duration}){
    const content=[...items,...items];                   //we need copy of the items so that the screen does not remain blank when the starting
                                                       //three elements disappear or move out of the screen


    return (
<div className="w-full overflow-hidden">
    <motion.div className="flex w-max items-center gap-10"
    animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
    transition={{
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration,
    }}>
{
    content.map((item, index)=>(
        <div key={index} className="flex items-center gap-10">
           <Pill text={item} index={index} />
          <div>
            {icons[index % icons.length]}
          </div>
          <div className="rounded-full px-3 py-1 bg-zinc-900 border border-zinc-600">
            
          </div>

        </div>
    ))
}
    </motion.div>

</div>
    )
}


export default function MarqueeSection(){
    return (
         <section className="py-20 space-y-8">
      <Marquee
        items={row1}
        duration={22}
      />

      <Marquee
        items={row2}
        reverse
        duration={28}
      />
    </section>
    )
}