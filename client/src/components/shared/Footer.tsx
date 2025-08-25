import React from "react";
import Container from "../layout/Container";
import Link from "next/link";
import { TbLocationFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin, FaX } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-cd-primary py-5 relative z-[1000]">
      <Container>
        <h2 className=" font-cd-bangla font-bold text-5xl lg:text-[80px] text-white text-center">
          ভর্তি চলছে
        </h2>

        <p className=" font-cd-bangla font-bold text-[20px] text-white text-center">
          আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন
        </p>

        <div className=" flex items-center justify-center mt-9 gap-5 lg:gap-12 flex-wrap">
          <Link
            href={""}
            className=" font-cd-bangla font-bold text-[20px] text-center text-white py-2 px-[61px] rounded-[15px] border-[2px]  border-white"
          >
            সকল কোর্স দেখুন
          </Link>
          <Link
            href={""}
            className=" font-cd-bangla font-bold text-[20px] text-center text-white py-2 px-4 rounded-[15px] border-[2px]  border-white"
          >
            আমাদের সেমিনারে যোগ দিন
          </Link>
        </div>

        <div className=" flex items-start justify-between mt-[118px] flex-wrap gap-10 lg:gap-5 md:flex-nowrap">
          <div className=" basis-full md:basis-2/4 lg:basis-1/4">
            <h2 className=" font-cd-bangla font-semibold text-[24px] text-white mb-3">
              আমাদের ঠিকানা
            </h2>

            <p className="flex items-center mb-2 gap-2 font-cd-bangla font-medium text-[22px] text-white">
              <TbLocationFilled />
              ২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা
            </p>
            <p className="flex items-center mb-2 gap-2 font-cd-bangla font-medium text-[22px] text-white">
              <IoCall />
              +৮৮ ০১৭১৫৫৫৭৮৯৬
            </p>
            <p className="flex items-center mb-2 gap-2 font-cd-bangla font-medium text-[22px] text-white">
              <FaEnvelope />
              info@codeduniya.com
            </p>
          </div>

          <div className=" basis-full md:basis-2/4 lg:basis-1/4">
            <h2 className=" font-cd-bangla font-semibold text-[24px] text-white mb-3">
              গুরুত্বপূর্ণ লিংক
            </h2>

            <ul>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  মেন্টর
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের ব্লগ
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  প্রাইভেসি পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের সেমিনার
                </Link>
              </li>
            </ul>
          </div>

          <div className=" basis-full md:basis-2/4 lg:basis-1/4">
            <h2 className=" font-cd-bangla font-semibold text-[24px] text-white mb-3">
              জনপ্রিয় কোর্সসমুহ
            </h2>

            <ul>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  মেন্টর
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের ব্লগ
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  প্রাইভেসি পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের সেমিনার
                </Link>
              </li>
            </ul>
          </div>
          <div className=" basis-full md:basis-2/4 lg:basis-1/4">
            <h2 className=" font-cd-bangla font-semibold text-[24px] text-white mb-3">
              জনপ্রিয় কোর্সসমুহ
            </h2>

            <ul>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  মেন্টর
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের ব্লগ
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  প্রাইভেসি পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className=" font-cd-bangla font-normal text-[20px] text-white mb-[10px] block"
                >
                  আমাদের সেমিনার
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" mt-[54px]">
          <h2 className=" font-cd-bangla font-bold text-5xl mb-5 lg:text-[90px] text-white text-center">
            কোড দুনিয়া
          </h2>

          <p className=" font-cd-bangla font-bold text-[20px] text-white text-center">
            দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম
          </p>

          <ul className=" mt-10 flex items-center justify-center gap-4">
            <Link href={""}>
              <FaFacebook className=" text-white text-2xl lg:text-[40px]" />
            </Link>
            <Link href={""}>
              <FaLinkedin className=" text-white text-2xl lg:text-[40px]" />
            </Link>
            <Link href={""}>
              <FaYoutube className=" text-white text-2xl lg:text-[40px]" />
            </Link>
            <Link href={""}>
              <BsTwitterX className=" text-white text-2xl lg:text-[40px]" />
            </Link>
          </ul>
        </div>

        <div className=" mt-[131px] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <p className=" font-cd-bangla font-normal text-[20px] text-white">
            ২০২৫ কপিরাইট | মাহমুদ হাসান রামীম | সর্বসত্ত্ব সংরক্ষিত
          </p>
          <Link
            href={""}
            className=" font-cd-bangla font-normal text-[20px] text-white"
          >
            প্রাইভেসি পলিসি
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
