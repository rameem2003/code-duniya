"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  addToCart,
  getCart,
  removeFromCart,
  requestCoupon,
} from "@/lib/cartApi";
import { CartContextType, cartType } from "@/types/type";
import { purchaseCourse } from "@/lib/courseApi";

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [cart, setCart] = useState<cartType | null>(null);
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCart = async () => {
    try {
      let res = await getCart();
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async (id: string) => {
    try {
      if (!user?.id) {
        router.push("/login");
        return;
      }
      let res = await addToCart(id);
      toast.success(res.msg);
      router.push("/cart");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add to cart");
    }
  };

  const deleteCart = async () => {
    try {
      let res = await removeFromCart(cart?._id!);
      if (!res.success) {
        toast.error(res.msg);
        return;
      }
      toast.success(res.msg);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove cart");
    }
  };

  const applyCoupon = async (code: string) => {
    try {
      if (!user?.id) {
        router.push("/login");
        return;
      }
      let res = await requestCoupon(code);
      if (res.success) {
        toast.success(res.msg);
        await fetchCart();
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add to cart");
    }
  };

  const goToPurchase = async () => {
    try {
      setLoading(true);
      let res = await purchaseCourse();
      if (!res.success) {
        toast.error(res.msg);
        return;
      }
      toast.success(res.msg);
      // router.push("/");

      console.log(res);
      setLoading(false);

      window.location.href = res.url;
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed to add to cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // return { fetchCart, addCart, applyCoupon, cart, msg, loading };

  return (
    <CartContext.Provider
      value={{
        fetchCart,
        addCart,
        applyCoupon,
        deleteCart,
        goToPurchase,
        cart,
        msg,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)!;
