"use client";

import Image from "next/image";
import Link from "next/link";

// const CAR_IMAGE =
//   "https://lh3.googleusercontent.com/aida-public/AB6AXuDwMeMyOdF6hMyIz6S2X-YadZLNKpgdv7pkeX8ANPQOR3QHuca2Txx9r0A8hiJunZ4wHqSKz_UF2PD5SYRmhVljQ1ywt44B9d0HtHvSVA_iesFYV91X7berIeS3MT6m6FCQtzxiebhqmkacENsitxAhQsJnbua5e9pSsiJLkLP5L49daAVMC4dwFo5v7IxYk2vfv4CEkfoVch95rlG_LT0kz_DIRI4fcTgPq-Y1HGvQVQPky3K26V8o5JlbWUNvbfacf8Wx8rmZxw8";
const CAR_IMAGE =
  "https://i.pinimg.com/1200x/2a/f9/e8/2af9e876981bb9f21f17f5de43be5659.jpg";
// const CAR_IMAGE =
//   "https://i.pinimg.com/736x/7c/04/57/7c0457a1d4935bc383652664c9397724.jpg";

export default function Banner() {
  return (
    <section
      className="relative flex items-center overflow-hidden
      h-[560px]
      sm:h-[660px]
      md:h-[750px]"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10
          lg:bg-gradient-to-r  lg:from-[#031427] lg:via-[#031427]/50 lg:to-[#031427]/30
          bg-gradient-to-r from-[#031427] via-[#031427]/50 to-transparent
          md:via-[#031427]/60"
        />

        <Image
          src={CAR_IMAGE}
          alt="A high-performance luxury sports car parked on a sleek modern surface at dusk"
          fill
          priority
          className="object-cover object-center sm:object-[70%_center] md:object-center"
          sizes="100vw"
        />
      </div>

      <div
        className="relative z-20 w-full max-w-[1280px] mx-auto
        px-4
        sm:px-8
        md:px-12
        lg:px-16
        mt-auto pb-10
        sm:mt-0 sm:pb-0 sm:flex sm:items-center sm:h-full"
      >
        <div
          className="
          w-full
          sm:max-w-xl
          md:max-w-2xl"
        >
          <span
            className="
            text-[#ffc174] font-semibold uppercase tracking-[0.15em] block mb-3
            text-[11px]
            sm:text-[12px]
            md:text-[13px]
            lg:text-[14px]"
          >
            Ultimate Performance
          </span>

          <h1
            className="
            font-bold leading-[1.1] tracking-tight text-[#d3e4fe] mb-4
            text-[32px]
            md:text-[50px]
            lg:text-[56px]
            xl:text-[64px]"
          >
            Find Your Ride.
            <br />
            Drive Anywhere
          </h1>

          <p
            className="
            leading-relaxed text-[#d8c3ad] mb-8
            text-[14px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[18px]
            max-w-[90%]
            sm:max-w-sm
            md:max-w-md
            lg:max-w-lg"
          >
            Experience the pinnacle of automotive engineering. Access our
            curated collection of elite vehicles for your next executive journey
            or weekend escape.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/explore"
              className="
                inline-flex items-center justify-center font-bold rounded-xl
                bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-[#2a1700]
                hover:shadow-[0_0_20px_rgba(245,158,11,0.45)]
                active:scale-95 transition-all duration-200
                text-[14px] px-5 py-3
                sm:text-[15px] sm:px-6 sm:py-3.5
                md:text-[16px] md:px-7 md:py-4
                lg:text-[18px] lg:px-8 lg:py-4"
            >
              Explore Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#ffc174] shrink-0 w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
        10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
      />
    </svg>
  );
}
