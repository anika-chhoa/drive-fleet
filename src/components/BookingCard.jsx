import { DateField, Label } from "@heroui/react";
import { motion } from "framer-motion";
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const BookingCard = () => {
     const isAvailable = availabilityStatus === "Available";
    return (
        <motion.div variants={item} className="lg:col-span-1">
          <div className="bg-[#102034] border border-[#534434]/30 rounded-2xl p-5 sticky top-6 space-y-5">
            <div>
              <p className="text-[10px] text-[#a08e7a] uppercase tracking-widest font-semibold mb-1">
                Daily rate
              </p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-[#ffc174]">
                  ${dailyRentPrice}
                </span>
                <span className="text-sm text-[#a08e7a] mb-1">/day</span>
              </div>
              <div className="mt-2 text-[#e8f1ff] font-bold">
                {availabilityStatus}
              </div>
            </div>


            <DateField className="w-full" name="date">
              <Label>Departure Date</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
              </DateField.Group>
            </DateField>

            <motion.button
              disabled={!isAvailable}
              whileHover={isAvailable ? { scale: 1.03 } : undefined}
              whileTap={isAvailable ? { scale: 0.97 } : undefined}
              className={`w-full py-2.5 rounded-xl font-bold text-sm ${
                isAvailable
                  ? "bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#001427]"
                  : "bg-[#000f21] text-[#534434] cursor-not-allowed"
              }`}
            >
              {isAvailable ? "Book Now" : "Unavailable"}
            </motion.button>

            {/* <div className="border-t border-[#534434]/20" /> */}

            <div className="space-y-2.5">
              {[
                { icon: RefreshCw, text: "Free cancellation" },
                { icon: Bolt, text: "Instant confirmation" },
                { icon: BadgeCheck, text: "Verified vehicle" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 text-xs text-[#a08e7a]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#ffc174]" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
    );
};

export default BookingCard;