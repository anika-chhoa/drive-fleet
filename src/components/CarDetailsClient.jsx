"use client";
// import { authClient } from "@/lib/auth-client";
// import { DateField, Label } from "@heroui/react";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bolt,
  CalendarCheck,
  Car,

  Flame,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
// import { useRouter } from "next/navigation";

// import { useState } from "react";
// import toast from "react-hot-toast";

import BookingCard from "./BookingCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageReveal = {
  hidden: { scale: 1.08, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const getPopularity = (count) => {
  if (count >= 18) return { label: "Top Booked" };
  if (count >= 12) return { label: "Popular" };
  if (count >= 7) return { label: "Trending" };
  return { label: "New" };
};

const StatCard = ({ icon: Icon, label, value }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4 }}
    className="bg-[#102034] border border-[#534434]/20 rounded-xl p-3.5 transition-colors duration-200"
  >
    <p className="text-[10px] text-[#a08e7a] uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-1.5">
      <Icon className="w-3.5 h-3.5 text-[#ffc174]" />
      {label}
    </p>
    <p className="text-[#e8f1ff] font-semibold text-sm">{value}</p>
  </motion.div>
);

const FeaturePill = ({ feature }) => (
  <motion.span
    variants={item}
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#102034] border border-[#534434]/30 text-[#d8c3ad]"
  >
    <Zap className="w-3 h-3 text-[#ffc174]" />
    {feature}
  </motion.span>
);

const CarDetailsClient = ({ car }) => {
  // const { data: session } = authClient.useSession();
  // const user = session?.user;
  // const [departureDate, setDepartureDate] = useState(null);
  // const router = useRouter();

  const {
    _id,
    carName,
    carType,
    imageUrl,
    description,
    seatCapacity,
    pickupLocation,
    dailyRentPrice,
    availabilityStatus,
    bookingCount = 0,
    features = [],
    rating = 0,
    reviewCount = 0,
  } = car;

  // const handleBooking = async () => {
  //   try {
  //     const bookingData = {
  //       userId: user?.id,
  //       userImage: user?.image,
  //       userName: user?.name,
  //       userEmail: user?.email,
  //       _id,
  //       carName,
  //       carType,
  //       imageUrl,
  //       availabilityStatus,
  //       pickupLocation,
  //       dailyRentPrice,
  //       bookingCount,
  //       rating,
  //       reviewCount,
  //       departureDate,
  //     };

  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/bookings/${_id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(bookingData),
  //       },
  //     );

  //     const data = await res.json();

  //     if (data) {
  //       toast.success(`Successfully booked ${carName}`);
  //       router.push("/bookings");
  //     } else {
  //       toast.error(data?.message || "Booking failed");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };

  const isAvailable = availabilityStatus === "Available";
  const { label: popLabel } = getPopularity(bookingCount);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto"
    >
      <motion.div
        variants={imageReveal}
        className="relative overflow-hidden rounded-2xl mb-8 border border-[#534434]/30"
      >
        <Image
          src={imageUrl}
          alt={carName}
          width={1200}
          height={600}
          priority
          className="w-full h-[380px] md:h-[460px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#000f21] via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#000f21]/70 backdrop-blur-sm border border-[#534434]/40 text-[#ffc174]">
            <Car className="w-3.5 h-3.5" />
            {carType}
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#000f21]/70 backdrop-blur-sm border border-[#534434]/40 text-[#d8c3ad]">
            <Flame className="w-3.5 h-3.5 text-[#ffc174]" />
            {popLabel}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
              isAvailable
                ? "bg-emerald-900/40 text-emerald-300 border-emerald-700/40"
                : "bg-rose-500/30 text-rose-600 border-rose-500/20"
            }`}
          >
            {availabilityStatus}
          </span>
        </div>

        {/* bookings */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-[#000f21]/80 backdrop-blur-sm border border-[#534434]/40 text-[#a08e7a]">
            <CalendarCheck className="w-3.5 h-3.5 text-[#ffc174]" />
            <span className="text-[#e8f1ff] font-semibold">
              {bookingCount}
            </span>{" "}
            bookings
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* left side */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div variants={item}>
            <h1 className="text-3xl md:text-4xl font-bold text-[#e8f1ff] mb-2">
              {carName}
            </h1>

            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(rating)
                      ? "fill-[#ffc174] text-[#ffc174]"
                      : "text-[#534434]"
                  }`}
                />
              ))}
              <span className="text-xs text-[#a08e7a] ml-1">
                {rating} · {reviewCount} reviews
              </span>
            </div>
          </motion.div>

          <motion.p variants={item} className="text-[#d8c3ad] text-sm">
            {description}
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            <StatCard icon={Users} label="Seats" value={`${seatCapacity}`} />
            <StatCard icon={MapPin} label="Pickup" value={pickupLocation} />
            <StatCard icon={ShieldCheck} label="Protection" value="Premium" />
            <StatCard icon={BadgeCheck} label="Condition" value="Excellent" />
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.01 }}
            className="bg-[#102034] border-t border-r border-b border-[#534434]/20 border-l-2 border-l-[#ffc174] rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[#a08e7a] uppercase tracking-widest font-semibold mb-3">
                  Booking count
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#ffc174] leading-none tracking-tight">
                    {bookingCount}
                  </span>
                  <span className="text-sm text-[#a08e7a]">bookings</span>
                </div>
              </div>
              <div className="text-right mt-0">
                <span className="inline-block text-xs font-bold text-[#ffc174] bg-[#ffc174]/10 border border-[#ffc174]/25 rounded-lg px-3 py-1.5 mb-1">
                  {popLabel}
                </span>{" "}
                <p className="text-[10px] text-[#a08e7a]">
                  top {Math.round((bookingCount / 20) * 100)}% of fleet{" "}
                </p>{" "}
              </div>{" "}
            </div>
          </motion.div>

          {features.length > 0 && (
            <motion.div variants={container}>
              <p className="text-[10px] text-[#a08e7a] uppercase mb-3">
                Features
              </p>

              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <FeaturePill key={f} feature={f} />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* rightside booking section */}
        <motion.div variants={item} className="lg:col-span-1">
          <div className="bg-[#102034] border border-[#534434]/30 rounded-2xl p-5 sticky top-6 space-y-5">
            <div>
              <p className="text-[10px] text-[#a08e7a] uppercase tracking-widest font-semibold mb-1">
                Daily rate
              </p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-[#ffc174]">
                  ${dailyRentPrice}
                </span>
                <span className="text-sm text-[#a08e7a] mb-1">/day</span>
              </div>
              <div className="mt-2 text-[#e8f1ff] font-bold">
                {availabilityStatus}
              </div>
            </div>

            {/* <DateField
              onChange={setDepartureDate}
              className="w-full"
              name="date"
            >
              <Label>Departure Date</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
              </DateField.Group>
            </DateField> */}

            <BookingCard car={car}/>

            

            <div className="space-y-2.5">
              {[
                { icon: RefreshCw, text: "Free cancellation" },
                { icon: Bolt, text: "Instant confirmation" },
                { icon: BadgeCheck, text: "Verified vehicle" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 text-xs text-[#a08e7a]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#ffc174]" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarDetailsClient;
