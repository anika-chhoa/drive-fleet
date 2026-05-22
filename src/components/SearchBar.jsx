"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentType = searchParams.get("type") || "All Types";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const search = form.search.value;
    const type = form.type.value;

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search);
    }

    if (type !== "All Types") {
      params.set("type", type);
    }

    router.push(`/explore?${params.toString()}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#07182d]/80 via-[#081527]/90 to-[#0b1d36]/80 p-2 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] focus-within:border-[#FDB813]/30 transition-colors duration-300"
    >
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(253,184,19,0.08),transparent_50%)] rounded-3xl" />

      <div className="flex flex-col sm:flex-row gap-2 items-center">
        
     
        <div className="relative flex-1 w-full group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search
              size={19}
              className="text-[#7e8ba0] group-focus-within:text-[#FDB813] group-focus-within:scale-105 transition-all duration-300"
            />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search Cars"
            defaultValue={currentSearch}
            className="w-full h-14 pl-12 pr-4 bg-transparent text-[#e8f1ff] placeholder:text-[#7e8ba0]/70 outline-none text-[15px]"
          />
        </div>

        
        <div className="hidden sm:block w-[1px] h-8 bg-white/10 self-center" />

       
        <div className="relative w-full sm:w-[200px] group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <SlidersHorizontal
              size={16}
              className="text-[#7e8ba0] group-focus-within:text-[#FDB813] transition-colors duration-300"
            />
          </div>
          <select
            name="type"
            defaultValue={currentType}
            className="appearance-none w-full h-14 pl-11 pr-8 bg-transparent text-[#e8f1ff] cursor-pointer outline-none text-[15px]"
          >
            <option className="bg-[#081527]">All Types</option>
            <option className="bg-[#081527]">SUV</option>
            <option className="bg-[#081527]">Sedan</option>
            <option className="bg-[#081527]">Luxury SUV</option>
            <option className="bg-[#081527]">Luxury Sedan</option>
            <option className="bg-[#081527]">Hatchback</option>
            <option className="bg-[#081527]">Electric</option>
            <option className="bg-[#081527]">Sports</option>
          </select>
        
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#7e8ba0] text-[10px] group-hover:text-[#e8f1ff] transition-colors">
            ▼
          </div>
        </div>

      
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="relative w-full sm:w-auto h-14 sm:px-8 rounded-2xl bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] font-semibold tracking-wide flex items-center justify-center gap-2 overflow-hidden shadow-[0_8px_25px_rgba(253,184,19,0.25)] hover:shadow-[0_12px_30px_rgba(253,184,19,0.4)] transition-all duration-300 group/btn"
        >
          <span className="text-[15px]">Search</span>
          <Search size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </motion.button>
        
      </div>
    </motion.form>
  );
};

export default SearchBar;