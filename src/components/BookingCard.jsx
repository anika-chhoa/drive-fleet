import { Button, Modal } from "@heroui/react";
import { Car, ChevronDown } from "lucide-react";
import BookNowButton from "./BookNowButton";

const BookingCard = ({ car }) => {
  const {
    carName,
    dailyRentPrice,
    availabilityStatus,
    
  } = car;
  const isAvailable = availabilityStatus === "Available";
  return (
    <Modal>
      <Button
        variant="secondary"
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
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md border border-[#534434]/40 bg-[#0d1e30] rounded-2xl overflow-hidden p-0">
            <Modal.CloseTrigger />

            {/* Header */}
            <div className="bg-[#071524] border-b border-[#534434]/30 px-6 py-5 relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#ffc174]/10 border border-[#ffc174]/25 text-[#ffc174] mb-2.5">
                <Car className="w-3 h-3" />
                {carName}
              </span>
              <h2 className="text-xl font-semibold text-[#e8f1ff] mb-0.5">
                Book your ride
              </h2>
              <p className="text-sm text-[#7a9ab8]">
                Complete the details below to confirm
              </p>
              <div className="absolute top-5 right-6 text-right">
                <p className="text-[28px] font-bold text-[#ffc174] leading-none">
                  ${dailyRentPrice}
                </p>
                <p className="text-[11px] text-[#7a9ab8] mt-0.5">per day</p>
              </div>
            </div>

            {/* Body */}
            <Modal.Body className="px-6 pt-6 pb-2">
              <div className="flex flex-col gap-4">
                {/* Driver Needed */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#a08e7a] uppercase tracking-widest">
                    Driver needed
                  </label>
                  <div className="relative">
                    <select
                      name="driverNeeded"
                      className="w-full bg-[#102034] border border-[#534434]/45 text-[#e8f1ff] text-sm rounded-lg px-3 py-2.5 appearance-none outline-none focus:border-[#ffc174]/55 focus:ring-2 focus:ring-[#ffc174]/10"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a08e7a] pointer-events-none" />
                  </div>
                </div>

                {/* Special Note */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#a08e7a] uppercase tracking-widest">
                    Special note
                  </label>
                  <textarea
                    name="specialNote"
                    placeholder="Any special request…"
                    rows={4}
                    className="w-full bg-[#102034] border border-[#534434]/45 text-[#e8f1ff] text-sm rounded-lg px-3 py-2.5 outline-none resize-none placeholder:text-[#4d6070] focus:border-[#ffc174]/55 focus:ring-2 focus:ring-[#ffc174]/10"
                  />
                </div>
              </div>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="px-6 pb-6 pt-5 flex gap-3">
              <BookNowButton car={car} />
              <Button
                slot="close"
                variant="secondary"
                className="flex-1 border border-[#534434]/45 bg-transparent text-[#a08e7a] text-sm py-3 rounded-lg hover:bg-white/5 transition-all"
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingCard;
