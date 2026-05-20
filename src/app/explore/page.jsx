import CarCard from "@/components/CarCard";
import { fetchAllCars } from "@/lib/cars/data";

const ExploreCars = async () => {
  const allCars = await fetchAllCars();
  
  return (
    <div className="bg-[#000f21] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-bold text-[#e8f1ff] tracking-tight font-sans">
            Our Elite Fleet
          </h1>
          <p className="text-[#d8c3ad] text-[16px] mt-2">
            Select an extraordinary mechanical asset for your next destination.
          </p>
        </div>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allCars.map((car,index) => <CarCard key={car._id} car={car} index={index}/>)}
        </div>
      </div>
    </div>
  );
};

export default ExploreCars;
