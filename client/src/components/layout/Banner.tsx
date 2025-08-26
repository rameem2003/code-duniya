import React from "react";
import Container from "./Container";
import Link from "next/link";
import CourseCategory from "./CourseCategory";

const Banner = () => {
  return (
    <div className=" bg-cd-primary py-[90px] 2xl:py-[120px]">
      <Container>
        {/* header */}
        <section className=" relative">
          <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
            <div className=" lg:mt-0 w-full lg:w-[50%]">
              <h1 className=" w-full text-center lg:text-left lg:w-[435px] font-cd-bangla text-[50px] font-bold text-white">
                দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম
              </h1>
              <p className=" w-full text-center lg:text-left font-cd-bangla text-[20px] font-normal text-white lg:w-[457px] mt-2">
                আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
                এক্সপার্ট হিসেবে গড়ে তুলুন
              </p>

              <div className="flex items-center flex-wrap gap-[20px] mt-6">
                <Link
                  href="/our-courses"
                  className=" mx-auto lg:mx-0 font-cd-bangla text-white text-[24px] font-semibold bg-[#415A77] py-1 px-14 rounded-[10px]"
                >
                  কোর্স দেখুন
                </Link>
              </div>
            </div>

            {/* image */}
            <div className="w-full lg:w-[50%]">
              <img
                src="https://i.ibb.co/kGnQZJ5/free-iphone-12-mini-mockup-scene-1-removebg-preview.png"
                alt="image"
                className="w-full"
              />
            </div>
          </header>

          <div className="absolute bottom-[-200px] left-0 right-0">
            <CourseCategory />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
