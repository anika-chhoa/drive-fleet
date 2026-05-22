"use client"
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookNowButton = ({ car }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const {
    _id,
    carName,
    carType,
    imageUrl,
    pickupLocation,
    dailyRentPrice,
    availabilityStatus,
  } = car;

  const handleBooking = async () => {
    try {
      const bookingData = {
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        userEmail: user?.email,
        carId: _id,
        carName,
        carType,
        imageUrl,
        availabilityStatus,
        pickupLocation,
        dailyRentPrice,
      };
      const {data:tokenData}=await authClient.token()

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization:`Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data?.success) {
        toast.success(`Successfully booked ${carName}`);
        router.push("/bookings");
      } else {
        toast.error(data?.message || "Booking failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const isAvailable = availabilityStatus === "Available";
  return (
    <motion.button
      onClick={handleBooking}
      disabled={!isAvailable}
      whileHover={isAvailable ? { scale: 1.03 } : undefined}
      whileTap={isAvailable ? { scale: 0.97 } : undefined}
      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#001427] font-semibold text-sm py-3 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
    >
      {isAvailable ? "Book Now" : "Unavailable"}
    </motion.button>
  );
};

export default BookNowButton;
