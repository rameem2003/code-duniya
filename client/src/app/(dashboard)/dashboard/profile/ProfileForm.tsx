"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const ProfileForm = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <form className="w-full p-2">
      <div className="grid w-full items-center gap-3 mb-5">
        <Label
          className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
          htmlFor="name"
        >
          আপনার নাম
        </Label>
        <Input
          //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //     setEmail(e.target.value)
          //   }
          className=" font-cd-poppins font-medium w-full block"
          type="text"
          id="name"
          defaultValue={user?.name}
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
          //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //     setEmail(e.target.value)
          //   }
          className=" font-cd-poppins font-medium w-full block"
          type="email"
          id="email"
          defaultValue={user?.email}
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
          //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //     setEmail(e.target.value)
          //   }
          className=" font-cd-poppins font-medium w-full block"
          type="text"
          id="phone"
          defaultValue={user?.phone}
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
          //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //     setEmail(e.target.value)
          //   }
          className=" font-cd-poppins font-medium w-full block"
          type="text"
          id="address"
          defaultValue={user?.address}
        />
      </div>

      <Button
        type="submit"
        className="bg-cd-primary cursor-pointer w-full hover:bg-[#081522]"
      >
        আপডেট করুন
      </Button>
    </form>
  );
};

export default ProfileForm;
