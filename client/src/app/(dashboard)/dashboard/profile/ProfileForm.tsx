"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";

const ProfileForm = () => {
  const { user, updateUser, loading } = useAuth();
  const [name, setName] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [phone, setPhone] = useState<string>(user?.phone || "");
  const [address, setAddress] = useState<string>(user?.address || "");

  const handleUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(name, email, address, phone);
  };

  return (
    <form onSubmit={handleUpdateUser} className="w-full p-2">
      <div className="grid w-full items-center gap-3 mb-5">
        <Label
          className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
          htmlFor="name"
        >
          আপনার নাম
        </Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className=" font-cd-poppins font-medium w-full block"
          type="text"
          id="name"
          value={name}
        />
      </div>
      <div className="grid w-full items-center gap-3 mb-5">
        <Label
          className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
          htmlFor="email"
        >
          ইমেইল
        </Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className=" font-cd-poppins font-medium w-full block"
          type="email"
          id="email"
          value={email}
        />
      </div>
      <div className="grid w-full items-center gap-3 mb-5">
        <Label
          className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
          htmlFor="phone"
        >
          ফোন নম্বর
        </Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          className=" font-cd-poppins font-medium w-full block"
          type="text"
          id="phone"
          value={phone}
        />
      </div>
      <div className="grid w-full items-center gap-3 mb-5">
        <Label
          className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
          htmlFor="address"
        >
          ঠিকানা
        </Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddress(e.target.value)
          }
          className=" font-cd-poppins font-medium w-full block"
          type="text"
          id="address"
          value={address}
        />
      </div>

      <Button
        disabled={loading}
        type="submit"
        className="bg-cd-primary cursor-pointer w-full hover:bg-[#081522]"
      >
        {loading ? "অপেক্ষা করুন..." : " আপডেট করুন"}
      </Button>
    </form>
  );
};

export default ProfileForm;
