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
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { categoryType, courseType } from "@/types/type";
import { singleCategory } from "@/lib/courseApi";
const CardComponent = async ({ data }: { data: courseType }) => {
  // let categoryFetch = await singleCategory(data.category);
  // let category: categoryType = categoryFetch.data;
  return (
    <Card className=" gap-0 rounded-[15px] basis-full sm:basis-1/2 lg:basis-1/3 mb-2 p-0 ">
      <CardContent className=" p-0 m-0">
        <Image
          src={data.thumb}
          alt="banner"
          width={500}
          height={500}
          className=" w-full h-[200px] rounded-t-[15px]"
        />
      </CardContent>
      <CardFooter className=" block py-[6px] px-4 bg-[#415A77] m-0 rounded-b-[15px]">
        <div className=" w-full flex items-center justify-between">
          <p className="font-cd-poppins text-[14px] font-medium text-orange-300">
            Live Course
          </p>
          <p className="font-cd-bangla text-[14px] font-medium text-white flex items-center gap-1">
            <FaUser />
            {data.users.length}
          </p>
        </div>

        <h2 className=" font-cd-poppins text-[24px] font-bold text-white">
          {data.title}
        </h2>

        <div className=" mt-3 flex items-center justify-between">
          <p className=" font-cd-poppins text-[24px] font-bold text-white">
            {data.discountedPrice ? data.discountedPrice : data.sellingPrice}{" "}
            BDT
          </p>

          <Link
            href={`/course/${data._id}`}
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
