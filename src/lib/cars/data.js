export const fetchAllCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/explore`);
  const data = await res.json();
  return data || [];
};
export const fetchAvailableCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availableCars`);
  const data = await res.json();
  return data || [];
};