
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";

const Bookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="rounded-2xl border border-[#534434]/20 bg-[#102034] px-8 py-10 text-center">
          <p className="text-sm font-medium tracking-wide text-[#a08e7a]">
            Please log in to view your bookings.
          </p>
        </div>
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${user?.id}`,
    {
      cache: "no-store",
    }
  );

  const bookingCars = await res.json();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
      
      <div className="mb-10 flex items-end justify-between border-b border-[#534434]/30 pb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#a08e7a]">
            Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#e8f1ff]">
            My Bookings
          </h1>
        </div>

        <div className="rounded-full border border-[#ffc174]/20 bg-[#ffc174]/10 px-4 py-1.5 text-xs font-semibold text-[#ffc174]">
          {bookingCars?.length || 0} Active
        </div>
      </div>

    
      {!bookingCars || bookingCars.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#534434]/30 bg-[#102034] py-20 text-center">
          <p className="text-sm font-medium text-[#a08e7a]">
            No active vehicle bookings found.
          </p>
          <Link href="/explore">
          <Button className={`mt-4 text-semibold bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21]`}>Browse Cars</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {bookingCars.map((booking) => {
            const bookingDate = new Date(booking.bookingAt);

            const datePart = bookingDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            const timePart = bookingDate
              .toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })
              .toLowerCase()
              .replace(" ", "");

            // const count = booking.bookingCount || 1;
            // const finalPrice = booking.dailyRentPrice * count;

            return (
              <div
                key={booking._id}
                className="group overflow-hidden rounded-2xl border border-[#534434]/25 bg-[#102034] p-4 transition-all duration-300 hover:border-[#ffc174]/30 hover:bg-[#13263d]"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  
                 
                  <div className="flex items-center gap-4">
                  
                    <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl border border-[#534434]/20">
                      <Image
                        src={booking.imageUrl}
                        alt={booking.carName}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="144px"
                      />
                    </div>

                    
                    <div className="space-y-2">
                      
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-[#e8f1ff]">
                          {booking.carName}
                        </h3>

                      </div>

                      
                      <div className="flex items-center gap-2 text-sm text-[#d8c3ad]">
                        <MapPin className="h-4 w-4 text-[#ffc174]" />
                        <span>{booking.pickupLocation}</span>
                      </div>

                      
                      <div className="flex items-center gap-2 text-xs text-[#a08e7a]">
                        <CalendarDays className="h-4 w-4 text-[#ffc174]" />
                        <span>
                          {datePart} • {timePart}
                        </span>
                      </div>
                    </div>
                  </div>

                 
                  <div className="flex flex-row items-end justify-between gap-5 sm:flex-col sm:items-end">
                    <div className="text-right">
                      <p className="text-3xl font-black tracking-tight text-[#ffc174]">
                        ${booking.dailyRentPrice}
                      </p>

                      {/* <p className="mt-1 text-[11px] tracking-wide text-[#a08e7a]">
                        {count} {count === 1 ? "day" : "days"} × $
                        {booking.dailyRentPrice}
                      </p> */}
                    </div>

                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Bookings;