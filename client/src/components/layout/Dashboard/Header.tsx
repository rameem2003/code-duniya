import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-cd-primary p-3 flex items-center justify-between">
      <h1 className=" font-cd-bangla text-white text-xl md:text-3xl font-bold">
        আপনাকে স্বাগত
      </h1>
      <SidebarTrigger />
    </div>
  );
};

export default Header;
