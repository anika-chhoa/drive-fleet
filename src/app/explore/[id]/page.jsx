import CarDetailsClient from "@/components/CarDetailsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/explore/${id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  });
  const targetCar = await res.json();

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
