"use client";

import {
  AlertDialog,
  Button,
} from "@heroui/react";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id, carName }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/explore/${id}`,
        {
          method: "DELETE",
          headers:{
            'content-type':'application/json'
          }
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        router.refresh();
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      
      <Button
        variant="bordered"
        startContent={<Trash2 size={16} />}
        className="
          border-red-500/30
          bg-transparent
          text-red-400
          font-semibold
          hover:bg-red-500/10
          transition-all
        "
      >
        Delete
      </Button>

      
      <AlertDialog.Backdrop className="bg-black/60 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog
            className="
              sm:max-w-[420px]
              bg-[#102034]
              border border-[#534434]/30
              text-[#e8f1ff]
              rounded-2xl
              shadow-xl
            "
          >
            <AlertDialog.CloseTrigger />

           
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-[#e8f1ff] font-bold">
                Delete this car permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-sm text-[#a08e7a] leading-6">
                This will permanently delete{" "}
                <strong className="text-[#ffc174]">
                  {carName || "this car"}
                </strong>{" "}
                and all its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            
            <AlertDialog.Footer className="gap-3">
              <Button
                slot="close"
                variant="bordered"
                className="
                  border-[#534434]/40
                  text-[#d8c3ad]
                  hover:bg-[#0d1b2a]
                "
              >
                Cancel
              </Button>

              <Button
                slot="close"
                onClick={handleDelete}
                className="
                  bg-red-500/90
                  text-white
                  font-semibold
                  hover:bg-red-500
                "
              >
                Delete Car
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteButton;