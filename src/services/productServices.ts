const baseUrl = "https://fakestoreapi.com";

export const getProductsData = async () => {
  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
};
