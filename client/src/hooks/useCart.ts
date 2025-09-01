import { useState } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addToCart, requestCoupon } from "@/lib/cartApi";

const useCart = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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

  const applyCoupon = async (code: string) => {
    try {
      if (!user?.id) {
        router.push("/login");
        return;
      }
      let res = await requestCoupon(code);
      if (res.success) {
        toast.success(res.msg);
        router.refresh();
      } else {
        toast.error(res.msg);
      }
      // router.push("/cart");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add to cart");
    }
  };

  return { addCart, applyCoupon, msg, loading };
};

export default useCart;
