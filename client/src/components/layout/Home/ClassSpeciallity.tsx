import React from "react";
import Container from "../Container";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";

const ClassSpeciallity = () => {
  return (
    <section className=" py-[120px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-9">
          <div className="w-full lg:w-[50%]">
            <Image
              src={"/banner.jpg"}
              alt="class-speciallity]"
              width={500}
              height={500}
              className=" w-full h-auto rounded-[20px] border-[5px] border-cd-primary"
            />
          </div>

          <div className="w-full lg:w-[50%]">
            <h2 className=" font-cd-bangla text-2xl lg:text-[36px] font-bold text-black">
              আমাদের ক্লাসের বিশেষত্ব
            </h2>
            <ul className=" mt-8">
              <li className="flex items-center gap-4 mb-2">
                {" "}
                <FaDotCircle />
                <span className=" font-cd-bangla font-medium text-cd-primary text-base lg:text-[24px]">
                  সপ্তাহে ২ - ৩ দিন ক্লাস
                </span>
              </li>
              <li className="flex items-center gap-4 mb-2">
                {" "}
                <FaDotCircle />
                <span className=" font-cd-bangla font-medium text-cd-primary text-base lg:text-[24px]">
                  অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে
                </span>
              </li>
              <li className="flex items-center gap-4 mb-2">
                {" "}
                <FaDotCircle />
                <span className=" font-cd-bangla font-medium text-cd-primary text-base lg:text-[24px]">
                  মনোরম ক্লাস রুম
                </span>
              </li>
              <li className="flex items-center gap-4 mb-2">
                {" "}
                <FaDotCircle />
                <span className=" font-cd-bangla font-medium text-cd-primary text-base lg:text-[24px]">
                  অনলাইন ২৪/৭ সাপোর্ট
                </span>
              </li>
              <li className="flex items-center gap-4 mb-2">
                {" "}
                <FaDotCircle />
                <span className=" font-cd-bangla font-medium text-cd-primary text-base lg:text-[24px]">
                  অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClassSpeciallity;
