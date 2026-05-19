import { fetchAllCars } from "@/lib/cars/data";
import { BadgeCheck, Car, MapPin, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  const allCars = await fetchAllCars();

  const targetCar = allCars.find((car) => car._id == id);
  const {
    carName,
    carType,
    imageUrl,
    description,
    seatCapacity,
    pickupLocation,
    dailyRentPrice,
    availabilityStatus,
  } = targetCar;

  if (!targetCar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000f21] text-white text-2xl font-bold">
        Car Not Found
      </div>
    );
  }

  const isAvailable = targetCar.availabilityStatus === "Available";

  return (
    <section className="min-h-screen bg-[#000f21] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-3xl border border-[#534434]/30 bg-[#102034] shadow-2xl group">
            <Image
              src={imageUrl}
              alt={carName}
              width={900}
              height={700}
              priority
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#000f21] via-transparent to-transparent" />

            <div className="absolute top-5 right-5">
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold border ${
                  isAvailable
                    ? "bg-emerald-500/70 text-emerald-100 border border-emerald-500/20"
                    : "bg-rose-500/30 text-rose-500 border border-rose-500/20"
                }`}
              >
                {availabilityStatus}
              </span>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#ffc174] font-semibold mb-3">
              <Car className="w-4.5 h-4.5" />
              {carType}
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#d3e4fe] leading-tight mb-5">
              {carName}
            </h1>

            
            <p className="text-[#d8c3ad] text-base leading-relaxed mb-8">
              {description}
            </p>

           
            <div className="grid grid-cols-2 gap-5 mb-10">
              <div className="bg-[#102034] border border-[#534434]/20 rounded-2xl p-5">
                <Users className="w-5 h-5 text-[#ffc174] mb-3" />
                <p className="text-[#a08e7a] text-sm mb-1">Seat Capacity</p>
                <h3 className="text-[#d3e4fe] text-xl font-bold">
                  {seatCapacity} Seats
                </h3>
              </div>

              <div className="bg-[#102034] border border-[#534434]/20 rounded-2xl p-5">
                <MapPin className="w-5 h-5 text-[#ffc174] mb-3" />
                <p className="text-[#a08e7a] text-sm mb-1">Pickup Location</p>
                <h3 className="text-[#d3e4fe] text-xl font-bold">
                  {pickupLocation}
                </h3>
              </div>

              <div className="bg-[#102034] border border-[#534434]/20 rounded-2xl p-5">
                <ShieldCheck className="w-5 h-5 text-[#ffc174] mb-3" />
                <p className="text-[#a08e7a] text-sm mb-1">Rental Status</p>
                <h3 className="text-[#d3e4fe] text-xl font-bold">
                  Premium Protected
                </h3>
              </div>

              <div className="bg-[#102034] border border-[#534434]/20 rounded-2xl p-5">
                <BadgeCheck className="w-5 h-5 text-[#ffc174] mb-3" />
                <p className="text-[#a08e7a] text-sm mb-1">Condition</p>
                <h3 className="text-[#d3e4fe] text-xl font-bold">Excellent</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-[#534434]/20 pt-8">
              <div>
                <p className="text-[#a08e7a] text-sm mb-1">
                  Daily Rental Price
                </p>

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-[#ffc174]">
                    ${dailyRentPrice}
                  </span>

                  <span className="text-[#d8c3ad] mb-2">/ day</span>
                </div>
              </div>

              <button
                disabled={!isAvailable}
                className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  isAvailable
                    ? "bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#001427] hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                    : "bg-[#26364a] text-[#d8c3ad]/40 cursor-not-allowed"
                }`}
              >
                {isAvailable ? "Book Now" : "Currently Unavailable"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
