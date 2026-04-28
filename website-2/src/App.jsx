import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

function App() {
  const gsapBox = useRef(null)

  useEffect(() => {
    gsap.to(gsapBox.current, {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
  }, [])

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-white gap-10">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">
        Website 2
      </h1>
      
      <div className="flex gap-20">
        {/* Framer Motion Demo */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-zinc-500">Framer Motion</p>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-24 h-24 border-4 border-orange-500 rounded-3xl"
          />
        </div>

        {/* GSAP Demo */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-zinc-500">GSAP</p>
          <div 
            ref={gsapBox}
            className="w-24 h-24 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50"
          />
        </div>
      </div>

      <div className="mt-10 px-6 py-3 bg-white/5 rounded-full border border-white/10">
        <p className="text-sm font-mono text-orange-300">Modern Stack Ready</p>
      </div>
    </div>
  )
}

export default App
