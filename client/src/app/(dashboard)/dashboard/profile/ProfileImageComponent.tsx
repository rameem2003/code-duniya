"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const ProfileImageComponent = () => {
  const { user } = useAuth();
  const [upload, setUpload] = useState<File | null>(null);
  return (
    <section className="w-full text-center">
      <div className="relative inline-block rounded-full">
        <Avatar className="h-60 w-60 relative">
          <AvatarImage
            className="w-full h-full rounded-full"
            src={upload ? URL.createObjectURL(upload) : user?.avatar}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Label
          htmlFor="picture"
          className="absolute bottom-0 right-5 w-12 h-12 bg-gray-200 border-2 border-white rounded-full z-10 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
        >
          <FaEdit className="text-gray-600" />
        </Label>
        <Input id="picture" type="file" hidden />
      </div>
    </section>
  );
};

export default ProfileImageComponent;
