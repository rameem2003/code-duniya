import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const page = () => {
  return (
    <section className=" p-4 flex items-center justify-between">
      <h1 className=" font-cd-bangla text-2xl md:text-3xl font-bold">
        আপনাকে স্বাগত
      </h1>
      <SidebarTrigger />
    </section>
  );
};

export default page;
