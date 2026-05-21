"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";


import toast from "react-hot-toast";

const AddCars = () => {
  const router=useRouter();
  const handleAddCarButton = async (e) => {
    e.preventDefault();

    const session = await authClient.getSession();
    const user = session?.data?.user;

    const form = e.target;
    const formData = new FormData(form);
    const carData = Object.fromEntries(formData.entries());
    
    const {
      carName,
      carType,
      dailyRentPrice,
      seatCapacity,
      imageUrl,
      pickupLocation,
      availabilityStatus,
      description,
    } = carData;

    const newCarData={
      userId:user?.id,
      userName:user?.name,
      userEmail:user?.email,
      userImage:user?.image,
      createdAt:new Date(user?.createdAt),
      carName,
      carType,
      dailyRentPrice,
      seatCapacity,
      imageUrl,
      pickupLocation,
      availabilityStatus,
      description,
    };
    
    const {data:tokenData}=await authClient.token()
   

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-car`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization:`Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(newCarData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Car Added Successfully");
      form.reset();
      router.push("/myAddedCars")
    }
  };

  return (
    <div className="min-h-screen bg-[#000f21] px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#a08e7a]">
            Fleet Management
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#e8f1ff]">
            Add New Car
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#a08e7a]">
            Create a premium and attractive vehicle listing for your rental
            platform.
          </p>
        </div>

        <Card className="overflow-hidden rounded-3xl border border-[#534434]/20 bg-[#102034] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          {/* form */}
          <form
            onSubmit={handleAddCarButton}
            className="space-y-7 p-6 sm:p-8 md:p-10"
          >
            {/* name */}
            <TextField name="carName" isRequired>
              <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                Car Name
              </Label>

              <Input
                placeholder="Enter Your Car Name"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* price */}
              <TextField name="dailyRentPrice" type="number" isRequired>
                <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                  Daily Rent Price ($)
                </Label>

                <Input
                  type="number"
                  placeholder="Enter Daily Rent Price"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>

              {/* seat */}
              <TextField name="seatCapacity" type="number" isRequired>
                <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                  Seat Capacity
                </Label>

                <Input
                  type="number"
                  placeholder="Enter Seat Capacity"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            {/* car type */}
            <div>
              <Select name="carType" isRequired placeholder="Select Car Type">
                <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                  Car Type
                </Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {[
                      "SUV",
                      "Sedan",
                      "Hatchback",
                      "Luxury SUV",
                      "Luxury Sedan",
                      "Convertible",
                      "Sports",
                      "Electric",
                      "Hybrid",
                    ].map((type) => (
                      <ListBox.Item key={type} id={type} textValue={type}>
                        {type}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* image URL */}
            <TextField name="imageUrl" isRequired>
              <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                Image URL
              </Label>

              <Input
                type="url"
                placeholder="Enter Car Image"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* location */}
            <TextField name="pickupLocation" isRequired>
              <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                Pickup Location
              </Label>

              <Input
                placeholder="Enter Pickup Location"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* availablity */}
            <div>
              <Select
                name="availabilityStatus"
                isRequired
                placeholder="Select Availability"
              >
                <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                  Availability Status
                </Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Available" textValue="Available">
                      Available
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Unavailable" textValue="Unavailable">
                      Unavailable
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* description */}
            <TextField name="description" isRequired>
              <Label className="mb-2 text-sm font-medium text-[#d8c3ad]">
                Description
              </Label>

              <TextArea
                placeholder="Describe Your Car"
                className="rounded-3xl"
              />

              <FieldError />
            </TextField>

            {/* button */}
            <Button
              type="submit"
              className="h-12 w-full rounded-2xl bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] text-base font-bold  transition-all duration-300 hover:scale-[1.01]"
            >
              Add Car Listing
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddCars;
