import Advertisement from "@/components/shared/Advertisement";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="">
        <Image
          src="/dashboardpic.png"
          alt="dashboard"
          width={1000}
          height={1000}
          className=" w-full"
        />

        <Advertisement />
      </div>
    </section>
  );
};

export default page;
