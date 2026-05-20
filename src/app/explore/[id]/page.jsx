import CarDetailsClient from "@/components/CarDetailsClient";
import { fetchAllCars } from "@/lib/cars/data";


const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  const allCars = await fetchAllCars();
  const targetCar = allCars.find((car) => car._id == id);

  if (!targetCar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000f21] text-white text-2xl font-bold">
        Car Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#000f21] py-12 px-4 md:px-8 lg:px-16">
      <CarDetailsClient car={targetCar} />
    </section>
  );
};

export default CarDetailsPage;