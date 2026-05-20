// export const fetchAllCars = async (search="") => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/explore?search=${search}`);
//   const data = await res.json();
//   return data || [];
// };
export const fetchAllCars = async (search = "", type = "") => {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (type) params.set("type", type);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/explore?${params.toString()}`);
  return res.json();
};
export const fetchAvailableCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availableCars`);
  const data = await res.json();
  return data || [];
};