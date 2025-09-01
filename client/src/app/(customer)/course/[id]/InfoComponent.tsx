"use client";
import React from "react";
import useCart from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { courseType } from "@/types/type";
import { FaFire } from "react-icons/fa";

const InfoComponent = ({ course }: { course: courseType }) => {
  const { addCart } = useCart();
  return (
    <div className="w-full">
      <div className="px-4 py-1.5 bg-red-700/20  text-red-700 rounded-full text-[0.9rem] font-[500] inline-flex items-center gap-1">
        <FaFire className="text-[1rem] text-red-700" />
        লাইভ কোর্স
      </div>
      <div className=" mt-2">
        <h2 className=" font-cd-poppins text-4xl font-bold text-cd-primary">
          {course.title}
        </h2>

        <p className=" mt-5 text-gray-600 font-medium text-base leading-7 font-cd-bangla">
          প্রযুক্তি জগতে UX ডিজাইন একটি শীর্ষ চাহিদা সম্পন্ন চাকরি হয়ে উঠেছে।
          ব্যবহারকারী-বান্ধব ওয়েবসাইট নিশ্চিত করার ক্ষেত্রে এটি গুরুত্বপূর্ণ
          ভূমিকা পালন করে বলে কোম্পানিগুলি দক্ষ ডিজাইনার নিয়োগের উপর অগ্রাধিকার
          দিচ্ছে। একটি গবেষণায় দেখা গেছে, জটিল ইন্টারফেস ডিজাইনের কারণে প্রায়
          ৭৭% অনলাইন ব্যবসা প্রতিযোগিতামূলক বিশ্ব বাজারে টিকে থাকতে ব্যর্থ হয়।
          UX ডিজাইনাররা ওয়েবসাইটের কার্যকারিতা নিশ্চিত করে, যা ব্যবহারকারীদের
          কাছে এটি সহজেই অ্যাক্সেসযোগ্য করে তোলে। আপনি যদি গ্রাফিকাল উপাদানগুলির
          সাথে কাজ করতে পছন্দ করেন, তাহলে এই কোর্সটি আপনার জন্য।
        </p>

        <Button
          onClick={() => addCart(course._id)}
          size={"lg"}
          className="font-cd-bangla cursor-pointer font-bold text-[20px] text-white  rounded-[15px] bg-cd-primary hover:bg-[#020911] mt-5"
        >
          কোর্স এনরোল করুন আজই
        </Button>
      </div>
    </div>
  );
};

export default InfoComponent;
