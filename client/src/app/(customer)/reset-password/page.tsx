"use client";
import Container from "@/components/layout/Container";
import { useAuth } from "@/hooks/useAuth";
import { notFound, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { verifyResetPasswordToken } = useAuth();
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token");
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
          </div>
        </Container>
      </main>
    );
  }

  // This should not render because notFound() will redirect
  return null;
};

export default page;
