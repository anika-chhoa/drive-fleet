"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000f21] via-[#071a2e] to-[#000f21] flex flex-col items-center justify-center gap-8">

      
      <div className="relative w-20 h-20">
       
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#FDB813] border-r-[#FF8C00]"
          style={{ borderRadius: "50%" }}
        />
        
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#ffc174]/50"
          style={{ borderRadius: "50%" }}
        />
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-gradient-to-b from-[#FDB813] to-[#FF8C00]"
        />
      </div>

    
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-[#e8f1ff] font-semibold text-base tracking-wide">
          Loading Fleet
        </p>
        
        <div className="flex items-center justify-center gap-1 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-[#ffc174]"
            />
          ))}
        </div>
      </motion.div>

    </div>
  );
}