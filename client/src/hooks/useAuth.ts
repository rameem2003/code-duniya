"use client";
import { loginRequest, logoutRequest, userRequest } from "@/lib/authApi";
import { userType } from "@/types/type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const useAuth = () => {
  const [msg, setMsg] = useState<string>("");
  const [user, setUser] = useState<userType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // login
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      let res = await loginRequest(email, password);
      console.log(res);
      if (!res.success) {
        setMsg(res.message);
        setLoading(false);
        return;
      }
      await getUser();
      toast.success(res.message);
      router.push("/");
    } catch (error) {
      setMsg("Failed to login");
      setLoading(false);
      console.log(error);
    }
  };

  // logout
  const logout = async () => {
    try {
      let res = await logoutRequest();
      setUser(null);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  // get user
  const getUser = async () => {
    try {
      let res = await userRequest();
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { login, getUser, logout, user, msg, loading };
};

export default useAuth;
