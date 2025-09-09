"use client";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  userRequest,
  userUpdateRequest,
} from "@/lib/authApi";
import { AuthContextType, userType } from "@/types/type";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

// Create Context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [msg, setMsg] = useState<string | null>("");
  const [user, setUser] = useState<userType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();

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

  // update user
  const updateUser = async (
    name: string,
    email: string,
    address: string,
    phone: string
  ) => {
    try {
      setLoading(true);
      let res = await userUpdateRequest(name, email, address, phone);
      setMsg(res.message);
      setLoading(false);
      await getUser();
    } catch (error) {
      setMsg("Failed to update user");
      setLoading(false);
      console.log(error);
    }
  };

  // logout
  const logout = async () => {
    try {
      let res = await logoutRequest();
      setUser(null);
      setMsg(null);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // get user
  const getUser = async () => {
    try {
      setLoading(true);
      let res = await userRequest();
      if (res.success) {
        setUser(res.data);
        setLoading(false);
      } else {
        if (pathName == "/") {
          setLoading(false);
        } else {
          setLoading(false);
          router.push("/login");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        getUser,
        updateUser,
        logout,
        msg,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
