"use client";

import { Button, Card, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
    },
  }),
};

const CarCard = ({ car, index }) => {
  const isAvailable = car.availabilityStatus === "Available";
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -6 }}
    >
      <Card className="bg-[#102034] border border-[#534434]/20 hover:border-[#ffc174]/40 transition-all duration-300 shadow-xl overflow-hidden group rounded-2xl flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden h-[220px]">
          {/* Availability */}
          <div className="absolute top-3 right-3 z-20">
            <Chip
              variant="flat"
              className={`text-xs font-semibold ${
                isAvailable
                  ? "bg-emerald-500/70 text-emerald-100 border border-emerald-500/20"
                  : "bg-rose-500/30 text-rose-400 border border-rose-500/20"
              }`}
            >
              {car.availabilityStatus}
            </Chip>
          </div>

          {/* Type */}
          <div className="absolute top-3 left-3 z-20 rounded-lg">
            <Chip className="bg-[#031427]/80 text-[#d3e4fe] text-xs backdrop-blur-sm border border-white/5">
              {car.carType}
            </Chip>
          </div>

          <Image
            src={car.imageUrl}
            alt={car.carName}
            fill
            priority={index < 4}
            className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#d3e4fe] group-hover:text-[#ffc174] transition-colors line-clamp-1">
              {car.carName}
            </h2>

            <div className="flex justify-between gap-3 mb-6 border-t border-[#534434]/20 pt-3">
              <div className="flex items-center gap-2 text-[#d8c3ad]">
                <Users className="w-4 h-4 text-[#ffc174]" />
                <span className="text-sm">{car.seatCapacity} Seats</span>
              </div>

              <div className="flex items-center gap-2 text-[#d8c3ad]">
                <MapPin className="w-4 h-4 text-[#ffc174]" />
                <span className="text-[13px] line-clamp-1">
                  {car.pickupLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline text-[#ffc174]">
              <span className="text-[22px] font-black">
                ${car.dailyRentPrice}
              </span>

              <span className="text-xs text-[#d8c3ad] ml-1">/ day</span>
            </div>

            <Button
              radius="xl"
              size="md"
              disabled={!isAvailable}
              className={`font-bold shadow-lg transition-all duration-200 ${
                isAvailable
                  ? "bg-gradient-to-br from-[#F59E0B]/90 to-[#D97706] text-[#2a1700]"
                  : "bg-[#26364a] text-[#d8c3ad]/40"
              }`}
            >
              {isAvailable ? "View Details" : "Booked"}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CarCard;
