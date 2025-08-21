import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
const CardComponent = () => {
  return (
    <Card className=" gap-0 rounded-[15px] basis-full sm:basis-1/2 md:basis-1/2 p-0 bg-red-300">
      <CardContent className=" p-0 m-0">
        <Image
          src="/banner.jpg"
          alt="banner"
          width={500}
          height={500}
          className=" w-full rounded-t-[15px]"
        />
      </CardContent>
      <CardFooter className=" block py-[6px] px-4 bg-[#415A77] m-0 rounded-b-[15px]">
        <div className=" w-full flex items-center justify-between">
          <p className="font-cd-poppins text-[14px] font-medium text-white">
            Graphics & Multimedia
          </p>
          <p className="font-cd-bangla text-[14px] font-medium text-white flex items-center gap-1">
            <FaUser />
            ৩০০০
          </p>
        </div>

        <h2 className=" font-cd-poppins text-[30px] font-bold text-white">
          UI/UX Design
        </h2>

        <div className=" mt-3 flex items-center justify-between">
          <p className=" font-cd-poppins text-[24px] font-bold text-white">
            ৳120000 BDT
          </p>

          <Link
            href={"/courses/ui-ux-design"}
            className=" font-cd-bangla px-[22px] bg-cd-primary rounded-[15px] py-2 text-[20px] font-semibold text-white"
          >
            বিস্তারিত
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
