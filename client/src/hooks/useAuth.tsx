"use client";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  userRequest,
} from "@/lib/authApi";
import { AuthContextType, userType } from "@/types/type";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// Create Context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [msg, setMsg] = useState<string>("");
  const [user, setUser] = useState<userType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // login
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      let res = await loginRequest(email, password);
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

  // register
  const register = async (
    name: string,
    phone: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      let res = await registerRequest(name, phone, email, password);

      if (!res.success) {
        setMsg(res.message);
        setLoading(false);
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
      await login(email, password);
    } catch (error) {
      setMsg("Failed to register");
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
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // return { login, getUser, logout, user, msg, loading };

  return (
    <AuthContext.Provider
      value={{ login, register, getUser, logout, msg, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
