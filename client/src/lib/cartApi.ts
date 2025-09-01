import { cookies } from "next/headers";

export const getCart = async () => {
  try {
    const cookieStore = cookies(); // Get cookies from the request
    const cookieHeader = cookieStore.toString(); // Convert to header format
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
      method: "GET",
      //   credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader, // Forward cookies
      },
      cache: "no-store", // Avoid caching
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch cart");
  }
};

export const addToCart = async (courseId: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseId }),
    });
    return res.json();
  } catch (error) {
    console.log(error);

    throw new Error("Failed to add course to cart");
  }
};
