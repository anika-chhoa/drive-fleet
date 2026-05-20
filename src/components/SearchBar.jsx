"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Car,
  Check,
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0 },
};

const SearchBar = ({ cars = [], allCars = [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || "All Types",
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedType(searchParams.get("type") || "All Types");
  }, [searchParams]);

  const carTypes = [
    "All Types",
    ...Array.from(
      new Set(allCars.map((c) => c.carType).filter(Boolean)),
    ).sort(),
  ];

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search.trim()) {
      params.set("search", search);
    }

    router.push(`/explore?${params.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);

    const params = new URLSearchParams(searchParams.toString());
    if (type !== "All Types") {
      params.set("type", type);
    } else {
      params.delete("type");
    }
    router.push(`/explore?${params.toString()}`);
  };

  const isFiltered = selectedType !== "All Types";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <motion.div
        animate={{
          boxShadow: isFocused
            ? "0 0 0 2px rgba(255,193,116,0.35), 0 8px 32px rgba(0,0,0,0.4)"
            : "0 4px 24px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center bg-[#0d1c2e] border border-[#1d3557] rounded-2xl overflow-visible relative"
      >
        <div className="flex items-center flex-1 min-w-0 h-14 px-4 gap-3">
          <motion.div
            animate={{ color: isFocused ? "#ffc174" : "#4a6a8a" }}
            transition={{ duration: 0.2 }}
          >
            <Search className="w-5 h-5 flex-shrink-0" />
          </motion.div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type="text"
            placeholder="Search make, model, or keyword…"
            className="flex-1 bg-transparent outline-none text-[#e8f1ff] placeholder:text-[#4a6a8a] text-sm font-medium min-w-0"
          />
        </div>

        <div className="w-px h-8 bg-[#1d3557] flex-shrink-0" />

        <div ref={dropdownRef} className="relative flex-shrink-0">
          <motion.button
            onClick={() => setDropdownOpen((v) => !v)}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 h-14 px-5 text-sm font-medium"
          >
            <motion.div
              animate={{ color: isFiltered ? "#ffc174" : "#9fb0c7" }}
              className="flex items-center gap-1.5"
            >
             
              <span className="whitespace-nowrap hidden sm:block">
                {selectedType}
              </span>
              <span className="whitespace-nowrap sm:hidden block">
                {isFiltered ? selectedType : "Type"}
              </span>
            </motion.div>
            <motion.div
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-[#4a6a8a]" />
            </motion.div>
            <AnimatePresence>
              {isFiltered && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#ffc174]"
                />
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-[calc(100%+10px)] right-0 z-50 w-52 bg-[#0d1c2e] border border-[#1d3557] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="px-3 pt-3 pb-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a6a8a] px-2 mb-2">
                    Filter by Type
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {carTypes.map((type) => {
                      const isSelected = selectedType === type;
                      const count =
                        type === "All Types"
                          ? allCars.length
                          : allCars.filter(
                              (c) =>
                                c.carType?.toLowerCase() === type.toLowerCase(),
                            ).length;

                      return (
                        <motion.button
                          key={type}
                          variants={itemVariants}
                          onClick={() => handleTypeSelect(type)}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.15 }}
                          className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left ${
                            isSelected
                              ? "bg-[#ffc174]/15 text-[#ffc174]"
                              : "text-[#9fb0c7] hover:bg-[#102034] hover:text-[#e8f1ff]"
                          }`}
                        >
                          <span>{type}</span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                                isSelected
                                  ? "bg-[#ffc174]/20 text-[#ffc174]"
                                  : "bg-[#1d3557] text-[#4a6a8a]"
                              }`}
                            >
                              {count}
                            </span>
                            <AnimatePresence>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  <Check className="w-3.5 h-3.5 text-[#ffc174]" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                <div className="h-3" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-px h-8 bg-[#1d3557] flex-shrink-0" />

        <div className="px-2 flex-shrink-0">
          <motion.button
            onClick={handleSearch}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 h-10 px-5 rounded-xl bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] font-bold text-sm shadow-lg shadow-orange-900/30"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:block">Search</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
