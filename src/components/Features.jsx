"use client";

import { motion } from "framer-motion";
import { Car, ShieldCheck, Smartphone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Features = () => {
  const featuresList = [
    {
      icon: Car,
      title: "The Elite Collection",
      description:
        "Gain exclusive access to a meticulously curated fleet of high-performance supercars and ultra-luxury sedans, maintained to flawless track-ready standards.",
    },
    {
      icon: ShieldCheck,
      title: "First-Class Assurance",
      description:
        "Drive with absolute peace of mind. Every journey is backed by premium comprehensive coverage and a dedicated 24/7 VIP concierge dispatch team.",
    },
    {
      icon: Smartphone,
      title: "Seamless Ignition",
      description:
        "Skip the rental counter entirely. Secure your vehicle through our digital verification portal and enjoy contactless smartphone key delivery straight to your location.",
    },
  ];

  return (
    <section className="pt-8 md:pt-4 pb-24 bg-[#000f21]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#e8f1ff] font-sans">
            Uncompromising Standards
          </h2>
          <p className="text-[#d8c3ad] max-w-2xl mx-auto text-[16px] leading-[1.5] font-sans">
            We redefine the premium rental landscape by combining a world-class
            fleet with frictionless logistics engineered around your schedule.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresList.map((feature, idx) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={idx}
                className="p-4 lg:p-8 bg-[#102034] rounded-2xl  border border-[#534434]/20 hover:border-[#ffc174]/40 transition-colors duration-300 group"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                }}
              >
                <motion.div
                  className="w-12 h-12 lg:w-16 bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <IconComponent className="w-7 h-7 text-[#472a00]" />
                </motion.div>

                <h3 className="text-[24px] font-semibold leading-[1.3] text-[#e8f1ff] mb-4 group-hover:text-[#ffc174] transition-colors duration-300 font-sans">
                  {feature.title}
                </h3>
                <p className="text-[#d8c3ad] leading-relaxed text-[16px] font-sans">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
