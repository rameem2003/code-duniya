"use client";
export const userPurchaseRequest = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/purchase/user`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.json();
  } catch (error: any) {
    throw new Error("Failed to fetch purchase: " + error.message);
  }
};
