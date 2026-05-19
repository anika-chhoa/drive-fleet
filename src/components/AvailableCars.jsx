import { fetchAvailableCars } from "@/lib/cars/data";
import AnimatedGrid from "./AnimatedGrid";
import CarCard from "./CarCard";

const AvailableCars = async () => {
  const availableCars = await fetchAvailableCars();

  return (
    <div className="bg-[#000f21] min-h-screen pt-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center mb-12 space-y-3">
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#e8f1ff] text-center tracking-tight font-sans leading-none">
            Available Cars
          </h1>

          <p className="text-[#d8c3ad] text-[15px] md:text-[16px] text-center max-w-xl leading-relaxed">
            Select from our elite collection of performance vehicles,
            meticulously detailed and ready for your immediate deployment.
          </p>
        </div>

        <AnimatedGrid>
          {availableCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </AnimatedGrid>
      </div>
    </div>
  );
};

export default AvailableCars;
