"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";

interface PasswordUpdateProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const PasswordUpdate = () => {
  const { updatePassword, loading } = useAuth();
  const [passwordObject, setPasswordObject] = useState<PasswordUpdateProps>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updatePassword(
      passwordObject.oldPassword,
      passwordObject.newPassword,
      passwordObject.confirmPassword
    );
  };

  return (
    <section className=" mt-10 w-full max-w-2xl">
      <h2 className=" font-cd-bangla text-2xl md:text-3xl  mb-5 font-bold text-cd-primary">
        পাসওয়ার্ড পরিবর্তন করুন
      </h2>

      <form onSubmit={handlePasswordUpdate} className="w-full p-2">
        <div className="grid w-full items-center gap-3 mb-5">
          <Label
            className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
            htmlFor="oldPass"
          >
            পূর্বের পাসওয়ার্ড
          </Label>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordObject({
                ...passwordObject,
                oldPassword: e.target.value,
              })
            }
            className=" font-cd-poppins font-medium w-full block"
            type="password"
            id="oldPass"
          />
        </div>
        <div className="grid w-full items-center gap-3 mb-5">
          <Label
            className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
            htmlFor="newPass"
          >
            নতুন পাসওয়ার্ড
          </Label>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordObject({
                ...passwordObject,
                newPassword: e.target.value,
              })
            }
            className=" font-cd-poppins font-medium w-full block"
            type="password"
            id="newPass"
          />
        </div>
        <div className="grid w-full items-center gap-3 mb-5">
          <Label
            className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
            htmlFor="conPass"
          >
            কনফার্ম পাসওয়ার্ড
          </Label>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordObject({
                ...passwordObject,
                confirmPassword: e.target.value,
              })
            }
            className=" font-cd-poppins font-medium w-full block"
            type="password"
            id="conPass"
          />
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="bg-cd-primary cursor-pointer w-full hover:bg-[#081522]"
        >
          {loading
            ? "পাসওয়ার্ড পরিবর্তন করা হচ্ছে..."
            : "পাসওয়ার্ড পরিবর্তন করুন"}
        </Button>
      </form>
    </section>
  );
};

export default PasswordUpdate;
