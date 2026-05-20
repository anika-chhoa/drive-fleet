"use client";

import { motion } from "framer-motion";
import { Home, MoveLeft, Gauge } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000f21] via-[#071a2e] to-[#000f21] flex items-center justify-center overflow-hidden px-4">

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ffc174]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[200px] bg-[#1d3557]/60 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e8f1ff 1px, transparent 1px), linear-gradient(90deg, #e8f1ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">

        {/* Speedometer icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#102034] border border-[#1d3557] flex items-center justify-center shadow-2xl">
              <Gauge className="w-10 h-10 text-[#ffc174]" />
            </div>
            {/* Ping ring */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border border-[#ffc174]/30"
            />
          </div>
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[120px] font-black leading-none tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FDB813] to-[#FF8C00]">
              4
            </span>
            <span className="text-[#1d3557]">0</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FDB813] to-[#FF8C00]">
              4
            </span>
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 mb-10"
        >
          <h2 className="text-2xl font-bold text-[#e8f1ff] mb-3">
            Road Ends Here
          </h2>
          <p className="text-[#9fb0c7] text-base leading-relaxed">
            Looks like this route doesn't exist in our fleet. The page you're
            looking for may have been moved, removed, or never existed.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="h-px bg-gradient-to-r from-transparent via-[#1d3557] to-transparent mb-10"
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] font-bold text-sm shadow-lg shadow-orange-900/30"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>

          <Link href="/explore">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#102034] border border-[#1d3557] hover:border-[#ffc174]/40 text-[#e8f1ff] font-semibold text-sm transition-colors"
            >
              <MoveLeft className="w-4 h-4 text-[#ffc174]" />
              Browse Fleet
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}