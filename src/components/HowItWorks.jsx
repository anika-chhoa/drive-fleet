"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Car, Search } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse & Select",
    description:
      "Filter by date, location, or vehicle type. Compare specs, pricing, and availability in real time.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book Instantly",
    description:
      "Confirm your reservation in under 2 minutes. Secure checkout with instant email confirmation.",
  },
  {
    number: "03",
    icon: Car,
    title: "Pick Up & Drive",
    description:
      "Arrive at the pickup point or request delivery. Your vehicle is prepped, inspected, and ready to go.",
  },
];

const trustItems = [
  "Free cancellation up to 24h",
  "No hidden fees",
  "Instant booking confirmation",
];

const HowItWorks = () => {
  return (
    <section className="bg-[#000f21] pt-8 pb-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FDB813] font-sans">
            Simple Process
          </p>
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#e8f1ff] font-sans">
            On the Road in 3 Steps
          </h2>
          <p className="text-[#d8c3ad] max-w-md mx-auto text-[16px] leading-[1.6] font-sans">
            No queues, no paperwork, no surprises. Reserve your car online and
            pick up your keys on your terms.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="flex items-start">
                <motion.div
                  className="flex flex-col items-center text-center gap-4 flex-1 px-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-[72px] h-[72px] rounded-full bg-[#102034] border border-[#FDB813]/30 flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.08,
                      borderColor: "rgba(253,184,19,0.7)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[22px] font-bold text-[#FDB813] leading-none font-sans">
                      {step.number}
                    </span>
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-[18px] font-semibold text-[#e8f1ff] font-sans leading-[1.3]">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#d8c3ad] leading-[1.65] font-sans max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    className="hidden md:flex items-center self-start mt-9 w-10 flex-shrink-0"
                    variants={itemVariants}
                  >
                    <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[#FDB813]/40 to-[#FDB813]/10" />
                    <div
                      className="w-0 h-0 flex-shrink-0"
                      style={{
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "7px solid rgba(253,184,19,0.45)",
                      }}
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link href="/explore">
            <motion.button
              className="px-8 py-[14px] rounded-[10px] text-[15px] font-bold text-[#000f21] font-sans"
              style={{
                background: "linear-gradient(135deg, #FDB813, #FF8C00)",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Reserve Your Car
            </motion.button>
          </Link>

          <Link href="/explore">
            <motion.button
              className="px-8 py-[14px] rounded-[10px] text-[15px] font-semibold text-[#e8f1ff] border border-[#e8f1ff]/25 bg-transparent font-sans"
              whileHover={{ scale: 1.03, borderColor: "rgba(232,241,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              View All Vehicles
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-[6px] h-[6px] rounded-full bg-[#FDB813] flex-shrink-0" />
              <span className="text-[13px] text-[#d8c3ad] font-sans">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
