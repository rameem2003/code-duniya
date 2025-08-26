"use client";
import React, { useEffect, useState } from "react";
import { courseType } from "@/types/type";

const PriceComponent = ({ data }: { data: courseType }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 835) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` mt-5 p-3  static bg-blue-200 rounded-lg ${
        sticky && "lg:fixed top-20 lg:w-[490px]"
      }`}
    >
      <h2 className=" font-cd-bangla text-3xl font-bold text-cd-primary mb-5">
        ভর্তি চলছে
      </h2>

      <div className=" bg-white p-6 rounded-lg">
        <div className=" flex flex-col md:flex-row items-center justify-between mb-4">
          <h3 className=" font-cd-bangla text-2xl font-semibold text-cd-primary">
            প্রাইস
          </h3>
          <div>
            <span className=" font-cd-poppins text-3xl font-bold text-cd-primary">
              {data.discountedPrice ? data.discountedPrice : data.sellingPrice}{" "}
              BDT
            </span>
            {data.discountedPrice != 0 && (
              <del className=" font-cd-poppins text-sm font-bold text-cd-primary">
                {data.sellingPrice} BDT
              </del>
            )}
          </div>
        </div>

        <button className=" cursor-pointer w-full bg-cd-primary text-white font-cd-bangla text-xl font-semibold py-3 rounded-lg hover:bg-cd-secondary transition-colors">
          এখনই নিবন্ধন করুন
        </button>
      </div>
    </div>
  );
};

export default PriceComponent;
