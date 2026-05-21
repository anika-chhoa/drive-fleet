"use client";

import { Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this car?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
        {
          method: "DELETE",
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
    <Button
      color="danger"
      variant="bordered"
      onClick={handleDelete}
      startContent={<Trash2 size={16} />}
      className="border-red-500/30 font-semibold text-red-400 hover:bg-red-500/10"
    >
      Delete
    </Button>
  );
};

export default DeleteButton;