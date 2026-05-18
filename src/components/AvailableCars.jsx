import { fetchAvailableCars } from "@/lib/cars/data";
import CarCard from "./CarCard";
import AnimatedGrid from "./AnimatedGrid";


const AvailableCars = async () => {
  const availableCars = await fetchAvailableCars();

  return (
    <div className="bg-[#000f21] min-h-screen pt-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center mb-12 space-y-3">
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#d3e4fe] text-center tracking-tight font-sans leading-none">
            Available Cars
          </h1>

          <p className="text-[#d8c3ad] text-[15px] md:text-[16px] text-center max-w-xl leading-relaxed">
            Select from our elite collection of performance vehicles,
            meticulously detailed and ready for your immediate deployment.
          </p>
        </div>

        {/* Animated Client Grid Container */}
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