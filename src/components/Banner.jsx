"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// const CAR_IMAGE =
//   "https://i.pinimg.com/1200x/2a/f9/e8/2af9e876981bb9f21f17f5de43be5659.jpg";
const CAR_IMAGE =
  "https://i.ibb.co/Fbm5mBv6/a-professional-high-end-hero-banner-image-for-a-luxury-car-rental-website-a.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const topToDown = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const bottomToUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: { scale: 1.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.3, ease: "easeOut" },
  },
};

export default function Banner() {
  return (
    <section className="relative flex items-center overflow-hidden h-[560px] sm:h-[660px] md:h-[750px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 " />

        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="show"
          className="relative w-full h-full"
        >
          <Image
            src={CAR_IMAGE}
            alt="Luxury car"
            fill
            priority
            className="object-cover object-center sm:object-[70%_center] md:object-center"
            sizes="100vw"
          />
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 md:mt-auto md:pb-10 flex items-center h-full"
      >
        <div className="w-full sm:max-w-xl md:max-w-2xl">
          <motion.span
            variants={topToDown}
            className="text-[#ffc174] font-semibold uppercase tracking-[0.15em] block mb-3 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
          >
            Ultimate Performance
          </motion.span>

          <motion.h1
            variants={item}
            className="font-bold leading-[1.1] tracking-tight text-[#e8f1ff] mb-4 text-[32px] md:text-[50px] lg:text-[56px] xl:text-[64px]"
          >
            Find Your Ride.
            <br />
            Drive Anywhere
          </motion.h1>

          <motion.p
            variants={item}
            className="leading-relaxed text-[#d8c3ad] mb-8 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            Experience the pinnacle of automotive engineering. Access our
            curated collection of elite vehicles for your next executive journey
            or weekend escape.
          </motion.p>

          <motion.div
            variants={bottomToUp}
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6"
          >
            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#001427] font-bold uppercase tracking-[0.15em] shadow-[0_4px_18px_rgba(255,140,0,0.35)] hover:brightness-110 hover:shadow-[0_6px_22px_rgba(255,140,0,0.45)] active:scale-95 transition-all duration-300 text-sm px-5 py-3 md:text-base md:px-7 md:py-3 g:text-lg lg:px-6 lg:py-3"
            >
              Explore Cars
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
//bg-gradient-to-br from-[#F59E0B] to-[#D97706]
