// import CarCard from "@/components/CarCard";
// import SearchBar from "@/components/SearchBar";
// import { fetchAllCars } from "@/lib/cars/data";

// const ExploreCars = async ({ searchParams }) => {
//   const sParams = await searchParams;
//   const allCars = await fetchAllCars("");
//   const filteredCars = await fetchAllCars(
//     sParams?.search || "",
//     sParams?.type || "",
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#000f21] via-[#071a2e] to-[#000f21] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-[#e8f1ff]">
//             Explore Elite Fleet
//           </h1>
//           <p className="text-[#9fb0c7] mt-2">
//             Premium cars crafted for premium journeys
//           </p>
//         </div>

//         <div className="max-w-xl mx-auto mb-10">
//           <SearchBar cars={filteredCars} allCars={allCars} />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCars.length > 0 ? (
//             filteredCars.map((car, index) => (
//               <CarCard key={car._id} car={car} index={index} />
//             ))
//           ) : (
//             <div className="text-center text-[#9fb0c7] col-span-full py-20">
//               No cars found
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreCars;

import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import { fetchAllCars } from "@/lib/cars/data";

const ExploreCars = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params.search || "";
  const type = params.type || "";

  const allCars = await fetchAllCars(search, type);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000f21] via-[#071a2e] to-[#000f21] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#e8f1ff]">
            Explore Elite Fleet
          </h1>
          <p className="text-[#9fb0c7] mt-2">
            Premium cars crafted for premium journeys
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCars.length > 0 ? (
            allCars.map((car, index) => (
              <CarCard key={car._id} car={car} index={index} />
            ))
          ) : (
            <div className="w-full col-span-full rounded-2xl border border-dashed border-[#534434]/30 bg-[#102034] py-20 lg:py-32 text-center">
              <p className="text-sm font-medium text-[#a08e7a]">
                No cars found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreCars;
