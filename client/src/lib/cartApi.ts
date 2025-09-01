"use client";

export const getCart = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
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

export const requestCoupon = async (code: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/applycode`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to apply coupon");
  }
};
