"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { notFound, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";

const page = () => {
  const { loading, passwordReset, verifyResetPasswordToken } = useAuth();
  const params = useSearchParams();
  const token = params.get("token");
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const checkVerificationToken = async () => {
    try {
      setIsLoading(true);
      let res = await verifyResetPasswordToken(token as string);
      console.log(res);

      if (!res) {
        setIsValidToken(false);
      } else {
        setIsValidToken(true);
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      setIsValidToken(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // checkVerificationToken();
    await passwordReset(token as string, password, confirmPassword);
  };

  useEffect(() => {
    if (!token) {
      notFound();
      return;
    }
    checkVerificationToken();
  }, [token]);

  // If token is invalid, redirect to 404
  useEffect(() => {
    if (isValidToken === false) {
      notFound();
    }
  }, [isValidToken]);

  // Show loading state while verifying
  if (isLoading) {
    return (
      <main>
        <Container>
          <div className=" min-h-[900px] flex items-center justify-center flex-col">
            <h2 className=" font-cd-bangla text-[36px] font-extrabold text-cd-primary text-center">
              যাচাই করা হচ্ছে...
            </h2>
            <p className="text-gray-600 mt-4 font-cd-bangla text-center">
              আপনার রিসেট টোকেন যাচাই করা হচ্ছে। অনুগ্রহ করে অপেক্ষা করুন।
            </p>
          </div>
        </Container>
      </main>
    );
  }

  // Show reset password form only if token is valid
  if (isValidToken) {
    return (
      <main>
        <Container>
          <div className=" min-h-[900px] flex items-center justify-center flex-col">
            <h2 className=" font-cd-bangla text-[36px] font-extrabold text-cd-primary text-center">
              নতুন পাসওয়ার্ড সেট করুন
            </h2>
            <p className="text-gray-600 mt-4 font-cd-bangla text-center">
              আপনার টোকেন যাচাই সফল হয়েছে। এখন নতুন পাসওয়ার্ড সেট করুন।
            </p>
            {/* TODO: Add password reset form here */}

            <section className=" mt-10 max-w-[550px] w-full p-4 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit} className=" flex flex-col w-full ">
                <div className="grid w-full items-center gap-3 mb-5">
                  <Label
                    className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                    htmlFor="password"
                  >
                    নতুন পাসওয়ার্ড
                  </Label>
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    className=" font-cd-poppins font-medium w-full block"
                    type="password"
                    id="password"
                    placeholder="নতুন পাসওয়ার্ড"
                  />
                </div>
                <div className="grid w-full items-center gap-3 mb-5">
                  <Label
                    className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                    htmlFor="confirm-password"
                  >
                    কনফার্ম নতুন পাসওয়ার্ড
                  </Label>
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setConfirmPassword(e.target.value)
                    }
                    className=" font-cd-poppins font-medium w-full block"
                    type="password"
                    id="confirm-password"
                    placeholder="কনফার্ম নতুন পাসওয়ার্ড"
                  />
                </div>

                <Button
                  disabled={loading}
                  type="submit"
                  className="bg-cd-primary cursor-pointer mt-8"
                >
                  {loading ? "অপেক্ষা করুন..." : "পাসওয়ার্ড রিসেট করুন"}
                </Button>
              </form>
            </section>
          </div>
        </Container>
      </main>
    );
  }

  // This should not render because notFound() will redirect
  return null;
};

export default page;
