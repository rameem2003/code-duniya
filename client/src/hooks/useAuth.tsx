"use client";
import {
  emailVerificationTokenRequest,
  forgotPasswordRequest,
  loginRequest,
  logoutRequest,
  registerRequest,
  userPasswordUpdateRequest,
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
      if (!res.success) {
        setMsg(res.message);
        setLoading(false);
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      setMsg(res.message);
      setLoading(false);
      await getUser();
    } catch (error) {
      setMsg("Failed to update user");
      setLoading(false);
      console.log(error);
    }
  };

  const updatePassword = async (
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => {
    try {
      setLoading(true);
      let res = await userPasswordUpdateRequest(
        oldPassword,
        newPassword,
        confirmPassword
      );
      if (!res.success) {
        setMsg(res.message);
        setLoading(false);
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      setMsg(res.message);
      setLoading(false);
      await getUser();
    } catch (error) {
      setMsg("Failed to update user");
      setLoading(false);
      console.log(error);
    }
  };

  // send email verification token
  const verifyEmail = async () => {
    try {
      toast.promise(emailVerificationTokenRequest(), {
        loading: "Please wait...",
        success: (data: any) => {
          return `${data.message}`;
        },
        error: "Error",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // send forgot password request
  const forgotPassword = async (email: string) => {
    try {
      setLoading(true);
      let res = await forgotPasswordRequest(email);
      if (!res.success) {
        setMsg(null);
        setLoading(false);
        toast.error(res.message);
        return;
      }
      setLoading(false);
      setMsg(res.message);
    } catch (error) {
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
        setLoading(false);

        if (pathName == "/dashboard" || pathName?.startsWith("/dashboard/")) {
          router.push("/login");
          // toast.error("Please login to access the dashboard");
          return;
        }
        // if (pathName == "/" || pathName == "/forgot-password") {
        //   setLoading(false);
        // } else {
        //   setLoading(false);
        //   router.push("/login");
        // }
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
        updatePassword,
        verifyEmail,
        forgotPassword,
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
