import DeleteButton from "@/components/DeleteButton";
import UpdateCar from "@/components/UpdateCar";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { MapPin } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyAddedCars = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/add-car/${user?.id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  }
  );

  const addedCarData = await res.json();
  console.log(addedCarData);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
      
      <div className="mb-10 flex items-end justify-between border-b border-[#534434]/30 pb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#a08e7a]">
            Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#e8f1ff]">
            My Added Cars
          </h1>
        </div>

        <div className="rounded-full border border-[#ffc174]/20 bg-[#ffc174]/10 px-4 py-1.5 text-xs font-semibold text-[#ffc174]">
          {addedCarData?.length || 0} Cars
        </div>
      </div>

      
      {!addedCarData || addedCarData.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#534434]/30 bg-[#102034] py-20 text-center">
          <p className="text-sm font-medium text-[#a08e7a]">
            You have not added any cars yet.
          </p>

          <Link href="/add-car">
            <Button className="mt-4 bg-gradient-to-b from-[#FDB813] to-[#FF8C00] font-semibold text-[#000f21]">
              Add Your First Car
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row">
          {/*left*/}
          <div className="w-full rounded-2xl border border-[#534434]/20 bg-[#0d1b2a] p-6 lg:w-[300px] h-fit">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#ffc174]/20">
                <Image
                  src={addedCarData[0]?.userImage}
                  alt={addedCarData[0]?.userName}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mt-4 text-xl font-bold text-[#e8f1ff]">
                {addedCarData[0]?.userName}
              </h2>

              <p className="text-sm text-[#a08e7a]">
                {addedCarData[0]?.userEmail}
              </p>

              <div className="mt-5 w-full rounded-xl border border-[#534434]/20 bg-[#102034] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#a08e7a]">Total Cars</span>

                  <span className="font-bold text-[#ffc174]">
                    {addedCarData.length}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-[#a08e7a]">Status</span>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

    
          {/* right */}
          <div className="flex-1 space-y-5">
            {addedCarData.map((car) => (
              <div
                key={car._id}
                className="group overflow-hidden rounded-2xl border border-[#534434]/25 bg-[#102034] p-4 transition-all duration-300 hover:border-[#ffc174]/30"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  
                  <div className="flex items-center gap-4">
                   
                    <div className="relative h-30 w-40 shrink-0 overflow-hidden rounded-xl border border-[#534434]/20">
                      <Image
                        src={car.imageUrl}
                        alt={car.carName}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="160px"
                      />
                    </div>

                   
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black tracking-tight text-[#e8f1ff]">
                        {car.carName}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-[#d8c3ad]">
                        <MapPin className="h-4 w-4 text-[#ffc174]" />
                        <span>{car.pickupLocation}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#0d1b2a] px-3 py-1 text-xs text-[#d8c3ad]">
                          {car.carType}
                        </span>

                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                          {car.availabilityStatus}
                        </span>
                      </div>

                      
                      <div className="flex items-center">
                        <p className="text-xl font-black text-[#ffc174]">
                          ${car.dailyRentPrice}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="flex md:flex-row md:items-center gap-3 sm:flex-col items-end justify-end">

                    <UpdateCar id={car._id} car={car}/>

                    <DeleteButton id={car._id} carName={car.carName} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedCars;
