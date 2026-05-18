"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Fleet Selection", href: "/explore" },
  { label: "Contact Support", href: "/support" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

const USEFUL_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing & Plans", href: "/pricing" },
  { label: "Partner Program", href: "/partners" },
  { label: "Help Center", href: "/help" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        {" "}
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        {" "}
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />{" "}
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        {" "}
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />{" "}
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        {" "}
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />{" "}
      </svg>
    ),
  },
];

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[#d8c3ad] text-[15px] hover:text-[#ffc174] transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-[#000f21] border-t border-[#534434]/40"
    >
      <div className="max-w-7xl mx-auto text-sm px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-8">
        
        <motion.div variants={item} className="col-span-2 lg:col-span-1">
          <Link href="/" className="text-[24px] font-bold text-[#ffc174]">
            DriveFleet
          </Link>

          <p className="text-[#d8c3ad] text-[15px] leading-relaxed">
            Premium car rental experience with elite service and modern fleet.
          </p>

          <div className="flex gap-3 pt-4">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <motion.a
                key={label}
                variants={item}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#102034] border border-[#534434] text-[#d8c3ad] hover:text-[#ffc174] hover:border-[#ffc174]/50 transition"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={item}>
          <h4 className="text-[#d3e4fe] font-bold text-[15px] uppercase tracking-widest mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            {COMPANY_LINKS.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </ul>
        </motion.div>

        
        <motion.div variants={item}>
          <h4 className="text-[#d3e4fe] font-bold text-[15px] uppercase tracking-widest mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2">
            {USEFUL_LINKS.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </ul>
        </motion.div>

        
        <motion.div variants={item}>
          <h4 className="text-[#d3e4fe] font-bold text-[15px] uppercase tracking-widest mb-4">
            Legal
          </h4>
          <ul className="space-y-2">
            {LEGAL_LINKS.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </ul>
        </motion.div>

        
        <motion.div variants={item}>
          <h4 className="text-[#d3e4fe] font-bold text-[15px] uppercase tracking-widest mb-4">
            Contact Info
          </h4>

          <ul className="space-y-2 text-[#d8c3ad] text-[14px]">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#ffc174]" />
              <span>hello@drivefleet.com</span>
            </li>

            <li className="flex items-center gap-2">
              <PhoneCall size={16} className="text-[#ffc174]" />
              <span>+1 (800) 374-8355</span>
            </li>

            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#ffc174] mt-0.5" />
              <span>Dhanmondi, Dhaka</span>
            </li>
          </ul>
        </motion.div>
      </div>

      
      <motion.div
        variants={item}
        className="border-t border-[#534434]/20 py-6 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center text-center gap-3"
      >
        <span className="text-[#a08e7a] text-[12px]">
          © {currentYear} DriveFleet. All rights reserved.
        </span>
        <span className="text-[#a08e7a] text-[12px]">
          Crafted for modern mobility.
        </span>
      </motion.div>
    </motion.footer>
  );
}
