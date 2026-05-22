"use client";

import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

const UpdateCar = ({ id, car }) => {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedCar = Object.fromEntries(formData.entries());

    if (!updatedCar.carType) {
      updatedCar.carType = car?.carType;
    }
    if (!updatedCar.availabilityStatus) {
      updatedCar.availabilityStatus = car?.availabilityStatus;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/explore/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCar),
        },
      );

      const data = await res.json();
      if(data){
        router.push("/myAddedCars");
        router.refresh();
        toast.success("Successfully Updated");
      }

    } catch (error) {
      toast.error("Update failed");
      console.log(error);
    }
  };

  return (
    <Modal>
      <Button
        className="bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] font-semibold"
        startContent={<BiEdit />}
      >
        Update
      </Button>

      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-2xl bg-[#102034] border border-[#534434]/30 text-[#e8f1ff] rounded-2xl">
            <Modal.CloseTrigger />

          
            <Modal.Header className="p-3">
              <Modal.Icon className="text-[#ffc174]">
                <BiEdit className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-xl font-bold">
                Update Car
              </Modal.Heading>
            </Modal.Header>

         
            <Modal.Body className="p-2">
              <Card className="bg-[#102034]">
                <form onSubmit={handleUpdate} className="p-4 space-y-6">
                 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
                    <TextField name="carName" defaultValue={car?.carName}>
                      <Label className="text-[#d8c3ad]">Car Name</Label>
                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    
                    <TextField name="carType">
                      <Label className="text-[#d8c3ad]">Car Type</Label>

                      <Select
                        name="carType"
                        defaultSelectedKeys={car?.carType ? [car.carType] : []}
                      >
                        <Select.Trigger className="rounded-2xl bg-[#0d1b2a] text-[#e8f1ff]">
                          <Select.Value placeholder="Select car type" />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover className="bg-[#102034] border border-[#534434]/30">
                          <ListBox>
                            {[
                              "SUV",
                              "Sedan",
                              "Hatchback",
                              "Luxury SUV",
                              "Luxury Sedan",
                              "Sports",
                              "Electric",
                            ].map((type) => (
                              <ListBox.Item key={type} id={type}>
                                {type}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <FieldError className="text-red-400 text-xs" />
                    </TextField>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
                    <TextField
                      name="dailyRentPrice"
                      defaultValue={car?.dailyRentPrice}
                    >
                      <Label className="text-[#d8c3ad]">Daily Rent Price</Label>
                      <Input type="number" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                   
                    <TextField name="availabilityStatus">
                      <Label className="text-[#d8c3ad]">Availability</Label>

                      <Select
                        name="availabilityStatus"
                        defaultSelectedKeys={
                          car?.availabilityStatus
                            ? [car.availabilityStatus]
                            : []
                        }
                      >
                        <Select.Trigger className="rounded-2xl bg-[#0d1b2a] text-[#e8f1ff]">
                          <Select.Value placeholder="Select availability" />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover className="bg-[#102034] border border-[#534434]/30">
                          <ListBox>
                            <ListBox.Item id="Available">
                              Available
                            </ListBox.Item>
                            <ListBox.Item id="Unavailable">
                              Unavailable
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <FieldError className="text-red-400 text-xs" />
                    </TextField>
                  </div>

                
                  <TextField name="imageUrl" defaultValue={car?.imageUrl}>
                    <Label className="text-[#d8c3ad]">Image URL</Label>
                    <Input type="url" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                 
                  <TextField name="description" defaultValue={car?.description}>
                    <Label className="text-[#d8c3ad]">Description</Label>
                    <TextArea className="rounded-3xl" />
                    <FieldError />
                  </TextField>

                  <Button
                    type="submit"
                    slot="close"
                    className="
                      w-full h-12
                      bg-gradient-to-b from-[#FDB813] to-[#FF8C00]
                      text-[#000f21]
                      font-bold
                      rounded-2xl
                    "
                  >
                    Update Car
                  </Button>
                </form>
              </Card>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateCar;
